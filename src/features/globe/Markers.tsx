import { memo, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  AdditiveBlending,
  CanvasTexture,
  Color,
  Group,
  Sprite,
  SpriteMaterial,
  type PerspectiveCamera,
} from "three";
import { CS2_MAJORS } from "@/data/cs2-majors";
import { MARKER_RADIUS, latLngToVector3 } from "@/lib/geo";
import { useGlobeStore } from "@/store/globe-store";
import { horizonCullCacheKey, horizonCullOnBeforeCompile, isFrontHemisphere } from "./horizon-cull";
import { globeInput } from "./input-state";

function makeGlowTexture(hex: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new CanvasTexture(canvas);
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "#ffffff");
  g.addColorStop(0.22, hex);
  g.addColorStop(0.55, `${hex}88`);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

const CS2 = "#7dd3fc";
const CUSTOM = "#e7eef8";

const PulseMarker = memo(function PulseMarker({
  id,
  kind,
  lat,
  lng,
  color,
  texture,
  selected,
}: {
  id: string;
  kind: "cs2" | "custom";
  lat: number;
  lng: number;
  color: string;
  texture: CanvasTexture;
  selected: boolean;
}) {
  const group = useRef<Group>(null);
  const core = useRef<Sprite>(null);
  const ring = useRef<Sprite>(null);
  const hit = useRef<Sprite>(null);
  const tint = useMemo(() => new Color(color), [color]);

  useFrame(({ camera, size }) => {
    const t = performance.now() / 1000;
    const dist = camera.position.length();
    const base = Math.max(0.045, 0.018 * dist) * (selected ? 1.35 : 1);
    if (core.current) {
      const s = base * (1 + Math.sin(t * 2.4) * 0.12);
      core.current.scale.setScalar(s);
    }
    if (ring.current) {
      const u = (t * 0.55) % 1;
      ring.current.scale.setScalar(base * (1.2 + u * 2.2));
      const mat = ring.current.material as SpriteMaterial;
      mat.opacity = (1 - u) * 0.45;
    }
    if (hit.current) {
      const fov = ((camera as PerspectiveCamera).fov * Math.PI) / 180;
      const world =
        (28 / Math.max(size.height, 1)) * 2 * Math.tan(fov / 2) * Math.max(dist, 1.2);
      hit.current.scale.setScalar(Math.max(world, base * 1.8));
    }
  });

  const pos = useMemo(() => latLngToVector3(lat, lng, MARKER_RADIUS), [lat, lng]);

  return (
    <group
      ref={group}
      position={pos}
      onClick={(e) => {
        if (globeInput.movedPx >= 5) return;
        if (!isFrontHemisphere(lat, lng, e.camera.position)) return;
        e.stopPropagation();
        const store = useGlobeStore.getState();
        store.selectCountry(null);
        store.selectMarker({ kind, id });
        store.requestFlyTo(lat, lng, 1.62);
      }}
    >
      <sprite ref={hit} renderOrder={3}>
        <spriteMaterial transparent opacity={0} depthWrite={false} depthTest={false} />
      </sprite>
      <sprite ref={core} renderOrder={2}>
        <spriteMaterial
          map={texture}
          color={tint}
          transparent
          depthWrite={false}
          onBeforeCompile={horizonCullOnBeforeCompile}
          customProgramCacheKey={horizonCullCacheKey}
          blending={AdditiveBlending}
          toneMapped={false}
        />
      </sprite>
      <sprite ref={ring} renderOrder={1}>
        <spriteMaterial
          map={texture}
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
    </group>
  );
});

export function Markers() {
  const custom = useGlobeStore((s) => s.customMarkers);
  const selected = useGlobeStore((s) => s.selectedMarker);
  const showCs2Majors = useGlobeStore((s) => s.showCs2Majors);
  const cs2Tex = useMemo(() => makeGlowTexture(CS2), []);
  const pinTex = useMemo(() => makeGlowTexture(CUSTOM), []);

  return (
    <group>
      {showCs2Majors
        ? CS2_MAJORS.map((m) => (
            <PulseMarker
              key={m.id}
              id={m.id}
              kind="cs2"
              lat={m.lat}
              lng={m.lng}
              color={CS2}
              texture={cs2Tex}
              selected={selected?.kind === "cs2" && selected.id === m.id}
            />
          ))
        : null}
      {custom.map((m) => (
        <PulseMarker
          key={m.id}
          id={m.id}
          kind="custom"
          lat={m.lat}
          lng={m.lng}
          color={CUSTOM}
          texture={pinTex}
          selected={selected?.kind === "custom" && selected.id === m.id}
        />
      ))}
    </group>
  );
}
