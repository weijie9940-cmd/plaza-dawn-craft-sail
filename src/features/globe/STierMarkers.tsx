import { memo, useCallback, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  AdditiveBlending,
  CanvasTexture,
  Color,
  Sprite,
  SpriteMaterial,
} from "three";
import {
  championKey,
  citiesUpToYear,
  type STierCity,
} from "@/data/s-tier-events";
import { MARKER_RADIUS, latLngToVector3 } from "@/lib/geo";
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

function makeBadgeTexture(n: number) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new CanvasTexture(canvas);
  ctx.beginPath();
  ctx.arc(32, 32, 26, 0, Math.PI * 2);
  ctx.fillStyle = "#10141c";
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#e7eef8";
  ctx.stroke();
  ctx.fillStyle = "#e7eef8";
  ctx.font = "700 28px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(n), 32, 34);
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
  const color = major ? MAJOR : STIER;
  const tint = useMemo(() => new Color(color), [color]);
  const holy = city.holy;
  const pos = useMemo(() => latLngToVector3(city.lat, city.lng, RADIUS), [city.lat, city.lng]);

  useFrame(({ camera }) => {
    const t = performance.now() / 1000;
    const dist = camera.position.length();
    const holyMul = holy ? 1.55 : 1;
    const hiMul = highlighted ? 1.2 : 1;
    const base = Math.max(0.04, 0.016 * dist) * (selected ? 1.28 : 1) * holyMul * hiMul;
    const opacity = dimmed ? 0.16 : 1;
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
      mat.opacity = (1 - u) * (dimmed ? 0.08 : holy ? 0.55 : 0.4);
    }
    if (halo.current) {
      const s = base * (2.4 + Math.sin(t * 1.4) * 0.25);
      halo.current.scale.setScalar(s);
      (halo.current.material as SpriteMaterial).opacity = dimmed ? 0.04 : 0.28;
    }
    if (badge.current) {
      badge.current.scale.setScalar(base * 0.42);
      (badge.current.material as SpriteMaterial).opacity = dimmed ? 0.2 : 1;
    }
  });

  return (
    <group
      position={pos}
      onClick={(e) => {
        if (globeInput.movedPx > 6) return;
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
      {badgeTex ? (
        <sprite ref={badge} renderOrder={5} position={[0.018, 0.018, 0.018]}>
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
  const visible = useGlobeStore((s) => s.showSTier);
  const year = useGlobeStore((s) => s.sTierYear);
  const selected = useGlobeStore((s) => s.selectedMarker);
  const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
  const onSelectCity = useCallback((city: STierCity) => {
    const store = useGlobeStore.getState();
    store.selectCountry(null);
    store.selectMarker({ kind: "stier", id: city.id });
    store.requestFlyTo(city.lat, city.lng, 1.62);
  }, []);

  const cities = useMemo(() => citiesUpToYear(year), [year]);
  const majorTex = useMemo(() => makeGlowTexture(MAJOR), []);
  const stierTex = useMemo(() => makeGlowTexture(STIER), []);
  const majorCup = useMemo(() => makeTrophyTexture(MAJOR), []);
  const stierCup = useMemo(() => makeTrophyTexture(STIER), []);
  const badges = useMemo(() => {
    const map = new Map<number, CanvasTexture>();
    for (const c of cities) {
      if (c.events.length > 1 && !map.has(c.events.length)) {
        map.set(c.events.length, makeBadgeTexture(c.events.length));
      }
    }
    return map;
  }, [cities]);

  if (!visible) return null;

  return (
    <group>
      {cities.map((city) => {
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
            badgeTex={city.events.length > 1 ? (badges.get(city.events.length) ?? null) : null}
            onSelectCity={onSelectCity}
          />
        );
      })}
    </group>
  );
}
