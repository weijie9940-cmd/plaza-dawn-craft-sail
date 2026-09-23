import { useEffect, useMemo, useState } from "react";
import earcut from "earcut";
import { geoContains } from "d3-geo";
import { BufferAttribute, BufferGeometry, DoubleSide, Vector3 } from "three";
import { BORDER_RADIUS, FILL_RADIUS, latLngToVector3 } from "@/lib/geo";
import { useGlobeStore } from "@/store/globe-store";

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

function fillGeometry(features: WorldFeature[], radius: number): BufferGeometry | null {
  const positions: number[] = [];
  const tmp = new Vector3();
  for (const f of features) {
    for (const poly of ringsOf(f)) {
      const outer = poly[0];
      if (!outer || outer.length < 4) continue;
      const [minX, , maxX] = f.bbox;
      if (maxX - minX > 300) continue;
      const flat: number[] = [];
      const holes: number[] = [];
      for (let r = 0; r < poly.length; r++) {
        if (r > 0) holes.push(flat.length / 2);
        for (const [lng, lat] of poly[r]) flat.push(lng, lat);
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

  const hoverGeo = useMemo(() => {
    if (!world || !hoveredIso || hoveredIso === selectedIso) return null;
    return fillGeometry(
      world.filter((f) => f.iso === hoveredIso),
      FILL_RADIUS,
    );
  }, [world, hoveredIso, selectedIso]);

  const selectedGeo = useMemo(() => {
    if (!world || !selectedIso) return null;
    return fillGeometry(
      world.filter((f) => f.iso === selectedIso),
      FILL_RADIUS,
    );
  }, [world, selectedIso]);

  useDisposableGeo(borderGeo);
  useDisposableGeo(visitedGeo);
  useDisposableGeo(hoverGeo);
  useDisposableGeo(selectedGeo);

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
            opacity={0.22}
            depthWrite={false}
            depthTest={false}
            side={DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ) : null}
      {selectedGeo ? (
        <mesh geometry={selectedGeo} frustumCulled={false}>
          <meshBasicMaterial
            color="#8ec8ea"
            transparent
            opacity={0.38}
            depthWrite={false}
            depthTest={false}
            side={DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ) : null}
    </group>
  );
}
