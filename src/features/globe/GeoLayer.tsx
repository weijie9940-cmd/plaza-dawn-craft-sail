import { useEffect, useMemo, useState } from "react";
import earcut from "earcut";
import { geoContains } from "d3-geo";
import { BufferAttribute, BufferGeometry, DoubleSide, Vector3 } from "three";
import { BORDER_RADIUS, FILL_RADIUS, latLngToVector3 } from "@/lib/geo";
import { useGlobeStore } from "@/store/globe-store";
import { horizonCullCacheKey, horizonCullOnBeforeCompile } from "./horizon-cull";

export type WorldFeature = {
  iso: string;
  bbox: [number, number, number, number];
  type: "Polygon" | "MultiPolygon";
  coordinates: number[][][] | number[][][][];
};

export const worldRef: { current: WorldFeature[] | null } = { current: null };

const tmpVec = new Vector3();

function asGeo(f: WorldFeature) {
  return {
    type: "Feature" as const,
    properties: {},
    geometry: { type: f.type, coordinates: f.coordinates },
  };
}

export function findCountry(lng: number, lat: number, world: WorldFeature[]): string | null {
  for (const f of world) {
    const [minX, minY, maxX, maxY] = f.bbox;
    const wraps = maxX - minX > 300;
    if (!wraps && (lng < minX || lng > maxX || lat < minY || lat > maxY)) continue;
    if (geoContains(asGeo(f) as never, [lng, lat])) return f.iso;
  }
  return null;
}

function pushLine(positions: number[], ring: number[][], radius: number) {
  for (let i = 0; i < ring.length - 1; i++) {
    const a = latLngToVector3(ring[i][1], ring[i][0], radius, tmpVec.clone());
    const b = latLngToVector3(ring[i + 1][1], ring[i + 1][0], radius, tmpVec.clone());
    positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
  }
}

function ringsOf(f: WorldFeature): number[][][][] {
  return f.type === "Polygon" ? [f.coordinates as number[][][]] : (f.coordinates as number[][][][]);
}

function outlineGeometry(features: WorldFeature[], radius: number): BufferGeometry | null {
  const positions: number[] = [];
  for (const f of features) {
    for (const poly of ringsOf(f)) {
      for (const ring of poly) pushLine(positions, ring, radius);
    }
  }
  if (!positions.length) return null;
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
  return geo;
}

/** Shift longitudes so a ring that crosses ±180° stays continuous for earcut. */
function unwrapRing(ring: number[][]): number[][] | null {
  if (ring.length < 4) return null;
  const out: number[][] = [[ring[0][0], ring[0][1]]];
  let offset = 0;
  for (let i = 1; i < ring.length; i++) {
    let lng = ring[i][0] + offset;
    const diff = lng - out[out.length - 1][0];
    if (diff > 180) {
      offset -= 360;
      lng -= 360;
    } else if (diff < -180) {
      offset += 360;
      lng += 360;
    }
    out.push([lng, ring[i][1]]);
  }
  const a = out[0];
  const b = out[out.length - 1];
  if (Math.abs(a[0] - b[0]) > 1e-4 || Math.abs(a[1] - b[1]) > 1e-4) return null;
  let min = Infinity;
  let max = -Infinity;
  for (const p of out) {
    if (p[0] < min) min = p[0];
    if (p[0] > max) max = p[0];
  }
  // A full-span polar cut (Antarctica) is not a closed country shape.
  if (max - min > 300) return null;
  return out;
}

function alignRing(ring: number[][], anchorLng: number): number[][] {
  let sum = 0;
  for (const p of ring) sum += p[0];
  const mean = sum / ring.length;
  let delta = 0;
  while (mean + delta - anchorLng > 180) delta -= 360;
  while (anchorLng - (mean + delta) > 180) delta += 360;
  if (!delta) return ring;
  return ring.map(([lng, lat]) => [lng + delta, lat]);
}

function preparePolygon(poly: number[][][]): number[][][] | null {
  const outer = unwrapRing(poly[0] ?? []);
  if (!outer) return null;
  let anchor = 0;
  for (const p of outer) anchor += p[0];
  anchor /= outer.length;
  const rings: number[][][] = [outer];
  for (let r = 1; r < poly.length; r++) {
    const hole = unwrapRing(poly[r]);
    if (!hole) return null;
    rings.push(alignRing(hole, anchor));
  }
  return rings;
}

const MAX_FILL_SPAN = 64;

function ringLngSpan(ring: number[][]): number {
  let min = Infinity;
  let max = -Infinity;
  for (const p of ring) {
    if (p[0] < min) min = p[0];
    if (p[0] > max) max = p[0];
  }
  return max - min;
}

function closeRing(ring: number[][]): number[][] {
  if (ring.length < 3) return ring;
  const a = ring[0];
  const b = ring[ring.length - 1];
  if (Math.abs(a[0] - b[0]) < 1e-8 && Math.abs(a[1] - b[1]) < 1e-8) return ring;
  return [...ring, [a[0], a[1]]];
}

function clipHalfPlane(ring: number[][], keep: (lng: number) => boolean, cut: number): number[][] {
  const closed = closeRing(ring);
  const out: number[][] = [];
  for (let i = 0; i < closed.length - 1; i++) {
    const a = closed[i];
    const b = closed[i + 1];
    const ain = keep(a[0]);
    const bin = keep(b[0]);
    if (ain && bin) out.push(b);
    else if (ain !== bin) {
      const denom = b[0] - a[0];
      const t = denom === 0 ? 0 : (cut - a[0]) / denom;
      out.push([cut, a[1] + (b[1] - a[1]) * t]);
      if (bin) out.push(b);
    }
  }
  if (out.length < 3) return [];
  return closeRing(out);
}

/** Wide countries get longitude slices so triangles stay on the globe instead of cutting across it. */
function splitWide(ring: number[][], depth = 0): number[][][] {
  const span = ringLngSpan(ring);
  if (span <= MAX_FILL_SPAN || depth > 8) return [ring];
  let min = Infinity;
  let max = -Infinity;
  for (const p of ring) {
    if (p[0] < min) min = p[0];
    if (p[0] > max) max = p[0];
  }
  const cut = (min + max) / 2;
  const left = clipHalfPlane(ring, (x) => x <= cut + 1e-9, cut);
  const right = clipHalfPlane(ring, (x) => x >= cut - 1e-9, cut);
  if (left.length < 4 || right.length < 4) return [ring];
  if (ringLngSpan(left) >= span - 1e-4 || ringLngSpan(right) >= span - 1e-4) return [ring];
  return [...splitWide(left, depth + 1), ...splitWide(right, depth + 1)];
}

function fillPieces(rings: number[][][]): number[][][][] {
  if (rings.length > 1 || ringLngSpan(rings[0]) <= MAX_FILL_SPAN) return [rings];
  return splitWide(rings[0]).map((ring) => [ring]);
}

function fillGeometry(features: WorldFeature[], radius: number): BufferGeometry | null {
  const positions: number[] = [];
  const tmp = new Vector3();
  for (const f of features) {
    for (const poly of ringsOf(f)) {
      const prepared = preparePolygon(poly);
      if (!prepared) continue;
      for (const piece of fillPieces(prepared)) {
        const flat: number[] = [];
        const holes: number[] = [];
        for (let r = 0; r < piece.length; r++) {
          if (r > 0) holes.push(flat.length / 2);
          for (const [lng, lat] of piece[r]) flat.push(lng, lat);
        }
        let idx: number[];
        try {
          idx = earcut(flat, holes, 2);
        } catch {
          continue;
        }
        for (let i = 0; i < idx.length; i++) {
          const k = idx[i] * 2;
          latLngToVector3(flat[k + 1], flat[k], radius, tmp);
          positions.push(tmp.x, tmp.y, tmp.z);
        }
      }
    }
  }
  if (!positions.length) return null;
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
  return geo;
}

function useDisposableGeo(geo: BufferGeometry | null) {
  useEffect(() => {
    return () => {
      geo?.dispose();
    };
  }, [geo]);
}

export function GeoLayer() {
  const [world, setWorld] = useState<WorldFeature[] | null>(null);
  const visited = useGlobeStore((s) => s.visited);
  const hoveredIso = useGlobeStore((s) => s.hoveredIso);
  const selectedIso = useGlobeStore((s) => s.selectedIso);
  const highlightIso = useGlobeStore((s) => s.highlightIso);
  const litIso = highlightIso ?? selectedIso;

  useEffect(() => {
    let cancelled = false;
    fetch("/data/world.json")
      .then((r) => r.json())
      .then((data: { features: WorldFeature[] }) => {
        if (cancelled) return;
        worldRef.current = data.features;
        setWorld(data.features);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const borderGeo = useMemo(() => {
    if (!world) return null;
    const positions: number[] = [];
    for (const f of world) {
      for (const poly of ringsOf(f)) {
        for (const ring of poly) pushLine(positions, ring, BORDER_RADIUS);
      }
    }
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
    return geo;
  }, [world]);

  const visitedGeo = useMemo(() => {
    if (!world) return null;
    const set = new Set(visited);
    return fillGeometry(
      world.filter((f) => set.has(f.iso)),
      FILL_RADIUS,
    );
  }, [world, visited]);

  const hoverFeatures = useMemo(() => {
    if (!world || !hoveredIso || hoveredIso === litIso) return null;
    return world.filter((f) => f.iso === hoveredIso);
  }, [world, hoveredIso, litIso]);

  const selectedFeatures = useMemo(() => {
    if (!world || !litIso) return null;
    return world.filter((f) => f.iso === litIso);
  }, [world, litIso]);

  const hoverGeo = useMemo(
    () => (hoverFeatures ? fillGeometry(hoverFeatures, FILL_RADIUS) : null),
    [hoverFeatures],
  );
  const hoverLine = useMemo(
    () => (hoverFeatures ? outlineGeometry(hoverFeatures, 1.007) : null),
    [hoverFeatures],
  );

  const selectedGeo = useMemo(
    () => (selectedFeatures ? fillGeometry(selectedFeatures, FILL_RADIUS) : null),
    [selectedFeatures],
  );
  const selectedLine = useMemo(
    () => (selectedFeatures ? outlineGeometry(selectedFeatures, 1.009) : null),
    [selectedFeatures],
  );

  useDisposableGeo(borderGeo);
  useDisposableGeo(visitedGeo);
  useDisposableGeo(hoverGeo);
  useDisposableGeo(hoverLine);
  useDisposableGeo(selectedGeo);
  useDisposableGeo(selectedLine);

  return (
    <group>
      {borderGeo ? (
        <lineSegments geometry={borderGeo} frustumCulled={false}>
          <lineBasicMaterial
            color="#e8f4fc"
            transparent
            opacity={0.72}
            depthWrite={false}
            depthTest={false}
            onBeforeCompile={horizonCullOnBeforeCompile}
            customProgramCacheKey={horizonCullCacheKey}
          />
        </lineSegments>
      ) : null}
      {visitedGeo ? (
        <mesh geometry={visitedGeo} frustumCulled={false}>
          <meshBasicMaterial
            color="#5aa7d4"
            transparent
            opacity={0.28}
            depthWrite={false}
            depthTest={false}
            onBeforeCompile={horizonCullOnBeforeCompile}
            customProgramCacheKey={horizonCullCacheKey}
            side={DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ) : null}
      {hoverGeo ? (
        <mesh geometry={hoverGeo} frustumCulled={false}>
          <meshBasicMaterial
            color="#cfe6f6"
            transparent
            opacity={0.08}
            depthWrite={false}
            depthTest={false}
            onBeforeCompile={horizonCullOnBeforeCompile}
            customProgramCacheKey={horizonCullCacheKey}
            side={DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ) : null}
      {hoverLine ? (
        <lineSegments geometry={hoverLine} frustumCulled={false}>
          <lineBasicMaterial
            color="#cfe6f6"
            transparent
            opacity={0.72}
            depthWrite={false}
            depthTest={false}
            onBeforeCompile={horizonCullOnBeforeCompile}
            customProgramCacheKey={horizonCullCacheKey}
          />
        </lineSegments>
      ) : null}
      {selectedGeo ? (
        <mesh geometry={selectedGeo} frustumCulled={false}>
          <meshBasicMaterial
            color="#8ec8ea"
            transparent
            opacity={0.58}
            depthWrite={false}
            depthTest={false}
            onBeforeCompile={horizonCullOnBeforeCompile}
            customProgramCacheKey={horizonCullCacheKey}
            side={DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ) : null}
      {selectedLine ? (
        <lineSegments geometry={selectedLine} frustumCulled={false}>
          <lineBasicMaterial
            color="#f4fbff"
            transparent
            opacity={0.95}
            depthWrite={false}
            depthTest={false}
            onBeforeCompile={horizonCullOnBeforeCompile}
            customProgramCacheKey={horizonCullCacheKey}
          />
        </lineSegments>
      ) : null}
    </group>
  );
}
