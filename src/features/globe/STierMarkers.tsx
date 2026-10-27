import { compareTeams } from "@/lib/team-comparison";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import {
  AdditiveBlending,
  CanvasTexture,
  Color,
  Sprite,
  SpriteMaterial,
  Vector3,
  type PerspectiveCamera,
} from "three";
import { championKey, citiesUpToYear, type STierCity } from "@/data/s-tier-events";
import { MARKER_RADIUS, latLngToVector3, vector3ToLatLng } from "@/lib/geo";
import { clusterProjectedMarkers } from "@/lib/marker-clusters";
import { useGlobeStore } from "@/store/globe-store";
import { horizonCullCacheKey, horizonCullOnBeforeCompile, isFrontHemisphere } from "./horizon-cull";
import { globeInput } from "./input-state";

const MAJOR = "#e8c872";
const STIER = "#e09548";
const RADIUS = MARKER_RADIUS + 0.012;

function makeGlowTexture(hex: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new CanvasTexture(canvas);
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, "#ffffff");
  g.addColorStop(0.18, hex);
  g.addColorStop(0.48, `${hex}99`);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function makeTrophyTexture(hex: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new CanvasTexture(canvas);
  ctx.translate(64, 58);
  ctx.fillStyle = hex;
  ctx.strokeStyle = "#fff8e8";
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(-18, -22);
  ctx.lineTo(18, -22);
  ctx.quadraticCurveTo(22, 8, 0, 16);
  ctx.quadraticCurveTo(-22, 8, -18, -22);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(-18, -8, 10, Math.PI * 0.15, Math.PI * 1.15);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(18, -8, 10, -Math.PI * 0.15, Math.PI * 0.85, true);
  ctx.stroke();
  ctx.fillRect(-5, 14, 10, 10);
  ctx.fillRect(-14, 24, 28, 7);
  const tex = new CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

const TrophyMarker = memo(function TrophyMarker({
  city,
  major,
  selected,
  dimmed,
  highlighted,
  onSelectCity,
  glowTex,
  trophyTex,
  badgeTex,
}: {
  city: STierCity;
  major: boolean;
  selected: boolean;
  dimmed: boolean;
  highlighted: boolean;
  onSelectCity: (city: STierCity) => void;
  glowTex: CanvasTexture;
  trophyTex: CanvasTexture;
  badgeTex: CanvasTexture | null;
}) {
  const core = useRef<Sprite>(null);
  const ring = useRef<Sprite>(null);
  const halo = useRef<Sprite>(null);
  const cup = useRef<Sprite>(null);
  const badge = useRef<Sprite>(null);
  const hit = useRef<Sprite>(null);
  const color = major ? MAJOR : STIER;
  const tint = useMemo(() => new Color(color), [color]);
  const holy = city.holy;
  const pos = useMemo(() => latLngToVector3(city.lat, city.lng, RADIUS), [city.lat, city.lng]);

  useFrame(({ camera, size }) => {
    const t = performance.now() / 1000;
    const dist = camera.position.length();
    const holyMul = holy ? 1.55 : 1;
    const hiMul = highlighted ? 1.2 : 1;
    const base = Math.max(0.04, 0.016 * dist) * (selected ? 1.28 : 1) * holyMul * hiMul;
    const opacity = dimmed ? 0.1 : selected || highlighted ? 1 : 0.48;
    if (core.current) {
      const s = base * (1 + Math.sin(t * 2.2) * 0.1);
      core.current.scale.setScalar(s);
      (core.current.material as SpriteMaterial).opacity = opacity;
    }
    if (cup.current) {
      cup.current.scale.setScalar(base * 0.72);
      (cup.current.material as SpriteMaterial).opacity = dimmed ? 0.22 : 0.95;
    }
    if (ring.current) {
      const u = (t * 0.5) % 1;
      ring.current.scale.setScalar(base * (1.15 + u * (holy ? 3.2 : 2.1)));
      const mat = ring.current.material as SpriteMaterial;
      mat.opacity = (1 - u) * (dimmed ? 0.02 : selected || highlighted ? 0.42 : 0.09);
    }
    if (halo.current) {
      const s = base * (2.4 + Math.sin(t * 1.4) * 0.25);
      halo.current.scale.setScalar(s);
      (halo.current.material as SpriteMaterial).opacity = dimmed
        ? 0.01
        : selected || highlighted
          ? 0.24
          : 0.07;
    }
    if (badge.current) {
      badge.current.scale.setScalar(base * 0.46);
      badge.current.position.set(base * 0.95, base * 0.78, 0);
      (badge.current.material as SpriteMaterial).opacity = dimmed ? 0.2 : 1;
    }
    if (hit.current) {
      const fov = ((camera as PerspectiveCamera).fov * Math.PI) / 180;
      const world = (28 / Math.max(size.height, 1)) * 2 * Math.tan(fov / 2) * Math.max(dist, 1.2);
      hit.current.scale.setScalar(Math.max(world, base * 1.8));
    }
  });

  return (
    <group
      position={pos}
      onClick={(e) => {
        if (useGlobeStore.getState().pinMode) return;
        if (globeInput.movedPx >= 5) return;
        if (!isFrontHemisphere(city.lat, city.lng, e.camera.position)) return;
        e.stopPropagation();
        onSelectCity(city);
      }}
    >
      {holy ? (
        <sprite ref={halo} renderOrder={1}>
          <spriteMaterial
            map={glowTex}
            color={tint}
            transparent
            depthWrite={false}
            onBeforeCompile={horizonCullOnBeforeCompile}
            customProgramCacheKey={horizonCullCacheKey}
            blending={AdditiveBlending}
            toneMapped={false}
            opacity={0.28}
          />
        </sprite>
      ) : null}
      <sprite ref={ring} renderOrder={2}>
        <spriteMaterial
          map={glowTex}
          color={tint}
          transparent
          depthWrite={false}
          onBeforeCompile={horizonCullOnBeforeCompile}
          customProgramCacheKey={horizonCullCacheKey}
          blending={AdditiveBlending}
          toneMapped={false}
          opacity={0.4}
        />
      </sprite>
      <sprite ref={core} renderOrder={3}>
        <spriteMaterial
          map={glowTex}
          color={tint}
          transparent
          depthWrite={false}
          onBeforeCompile={horizonCullOnBeforeCompile}
          customProgramCacheKey={horizonCullCacheKey}
          blending={AdditiveBlending}
          toneMapped={false}
        />
      </sprite>
      <sprite ref={cup} renderOrder={4}>
        <spriteMaterial
          map={trophyTex}
          transparent
          depthWrite={false}
          toneMapped={false}
          onBeforeCompile={horizonCullOnBeforeCompile}
          customProgramCacheKey={horizonCullCacheKey}
        />
      </sprite>
      <sprite ref={hit} renderOrder={6}>
        <spriteMaterial transparent opacity={0} depthWrite={false} depthTest={false} />
      </sprite>
      {badgeTex ? (
        <sprite ref={badge} renderOrder={5}>
          <spriteMaterial
            map={badgeTex}
            transparent
            depthWrite={false}
            toneMapped={false}
            onBeforeCompile={horizonCullOnBeforeCompile}
            customProgramCacheKey={horizonCullCacheKey}
          />
        </sprite>
      ) : null}
    </group>
  );
});

export function STierMarkers() {
  const comparisonTeams = useGlobeStore((s) => s.comparisonTeams);
  const visible = useGlobeStore((s) => s.showSTier);
  const year = useGlobeStore((s) => s.sTierYear);
  const selected = useGlobeStore((s) => s.selectedMarker);
  const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
  const [clusters, setClusters] = useState<string[][]>([]);
  const lastUpdate = useRef(0);
  const signature = useRef("");
  const onSelectCity = useCallback((city: STierCity) => {
    const store = useGlobeStore.getState();
    store.selectCountry(null);
    store.selectMarker({ kind: "stier", id: city.id });
    store.requestFlyTo(city.lat, city.lng, 1.62);
  }, []);

  const comparison = useMemo(
    () => (comparisonTeams ? compareTeams(comparisonTeams, year) : null),
    [comparisonTeams, year],
  );
  const cities = useMemo(
    () =>
      citiesUpToYear(year).filter(
        (city) => !comparison || comparison.cities.some((row) => row.id === city.id),
      ),
    [year, comparison],
  );
  const cityById = useMemo(() => new Map(cities.map((city) => [city.id, city])), [cities]);
  useFrame(({ camera, size, clock }) => {
    if (!visible || clock.elapsedTime - lastUpdate.current < 0.25) return;
    lastUpdate.current = clock.elapsedTime;
    const points = cities
      .filter(
        (city) =>
          isFrontHemisphere(city.lat, city.lng, camera.position) &&
          (!highlightedTeam ||
            city.events.some((event) => championKey(event.champion) === highlightedTeam)),
      )
      .map((city) => {
        const screen = latLngToVector3(city.lat, city.lng, RADIUS).project(camera);
        return {
          id: city.id,
          x: (screen.x * size.width) / 2,
          y: (screen.y * size.height) / 2,
          protected: selected?.kind === "stier" && selected.id === city.id,
        };
      });
    const groups = clusterProjectedMarkers(points, size.width < 640 ? 36 : 32).filter(
      (group) => group.length > 1,
    );
    const key = `${year}:${highlightedTeam}:${groups.map((group) => group.join(",")).join("|")}`;
    if (signature.current !== key) {
      signature.current = key;
      setClusters(groups);
    }
  });
  const validClusters = clusters.filter(
    (group) =>
      group.every((id) => cityById.has(id)) &&
      !group.some((id) => selected?.kind === "stier" && selected.id === id),
  );
  const clusteredIds = new Set(validClusters.flat());
  const majorTex = useMemo(() => makeGlowTexture(MAJOR), []);
  const stierTex = useMemo(() => makeGlowTexture(STIER), []);
  const majorCup = useMemo(() => makeTrophyTexture(MAJOR), []);
  const stierCup = useMemo(() => makeTrophyTexture(STIER), []);
  useEffect(
    () => () => {
      majorTex.dispose();
      stierTex.dispose();
      majorCup.dispose();
      stierCup.dispose();
    },
    [majorTex, stierTex, majorCup, stierCup],
  );

  if (!visible) return null;

  return (
    <group>
      {validClusters.map((ids) => (
        <CityCluster key={ids.join(",")} cities={ids.map((id) => cityById.get(id)!)} />
      ))}
      {cities
        .filter((city) => !clusteredIds.has(city.id))
        .map((city) => {
          const comparedCity = comparison?.cities.find((row) => row.id === city.id);
          if (comparedCity)
            return (
              <ComparisonMarker
                key={city.id}
                city={city}
                membership={comparedCity.membership}
                label={`${city.cityZh}，${comparison!.sides[0].title} ${comparedCity.events[0].length} 冠，${comparison!.sides[1].title} ${comparedCity.events[1].length} 冠`}
                selected={selected?.kind === "stier" && selected.id === city.id}
              />
            );
          const major = city.events.some((ev) => ev.tier === "Major");
          const teamHit = highlightedTeam
            ? city.events.some((ev) => championKey(ev.champion) === highlightedTeam)
            : false;
          const dimmed = Boolean(highlightedTeam) && !teamHit;
          return (
            <TrophyMarker
              key={city.id}
              city={city}
              major={major}
              selected={selected?.kind === "stier" && selected.id === city.id}
              dimmed={dimmed}
              highlighted={teamHit}
              glowTex={major ? majorTex : stierTex}
              trophyTex={major ? majorCup : stierCup}
              badgeTex={null}
              onSelectCity={onSelectCity}
            />
          );
        })}
    </group>
  );
}

function CityCluster({ cities }: { cities: STierCity[] }) {
  const camera = useThree((state) => state.camera);
  const button = useRef<HTMLButtonElement>(null);
  const center = new Vector3();
  for (const city of cities) center.add(latLngToVector3(city.lat, city.lng));
  center.normalize().multiplyScalar(RADIUS);
  const target = vector3ToLatLng(center);
  useFrame(() => {
    if (button.current)
      button.current.hidden = !isFrontHemisphere(target.lat, target.lng, camera.position);
  });
  return (
    <Html center position={center} zIndexRange={[8, 0]} style={{ pointerEvents: "none" }}>
      <button
        ref={button}
        type="button"
        className="globe-cluster"
        style={{ pointerEvents: "auto" }}
        aria-label={`查看${cities.map((city) => city.cityZh).join("、")}，共 ${cities.length} 座赛事城市`}
        onClick={() => {
          const store = useGlobeStore.getState();
          if (store.pinMode) {
            store.setPendingPin(target);
            return;
          }
          store.setMarkerClusterIds(cities.map((city) => city.id));
          store.requestFlyTo(
            target.lat,
            target.lng,
            Math.max(1.42, 1 + (camera.position.length() - 1) * 0.45),
          );
        }}
      >
        {cities.length}
      </button>
    </Html>
  );
}

function ComparisonMarker({
  city,
  membership,
  label,
  selected,
}: {
  city: STierCity;
  membership: string;
  label: string;
  selected: boolean;
}) {
  const camera = useThree((state) => state.camera);
  const button = useRef<HTMLButtonElement>(null);
  useFrame(() => {
    if (button.current)
      button.current.hidden = !isFrontHemisphere(city.lat, city.lng, camera.position);
  });
  return (
    <Html
      center
      position={latLngToVector3(city.lat, city.lng, RADIUS)}
      zIndexRange={[8, 0]}
      style={{ pointerEvents: "none" }}
    >
      <button
        type="button"
        ref={button}
        className="comparison-map-marker"
        aria-label={label}
        aria-pressed={selected}
        onClick={() => {
          const store = useGlobeStore.getState();
          if (store.pinMode) {
            store.setPendingPin({ lat: city.lat, lng: city.lng });
            return;
          }
          store.selectMarker({ kind: "stier", id: city.id });
          store.setMobileDetailsExpanded(true);
          store.requestFlyTo(city.lat, city.lng, 1.62);
        }}
      >
        <span className={`comparison-dot membership-${membership}`} />
      </button>
    </Html>
  );
}
