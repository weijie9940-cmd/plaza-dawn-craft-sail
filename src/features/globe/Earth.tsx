import { useEffect, useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import {
  BackSide,
  Color,
  FrontSide,
  ShaderMaterial,
  NoColorSpace,
  Texture,
  TextureLoader,
  Vector3,
} from "three";
import { EARTH_RADIUS } from "@/lib/geo";
import { getSunDirection } from "@/lib/sun";
import { useGlobeStore } from "@/store/globe-store";
import {
  atmosphereFragment,
  atmosphereVertex,
  earthFragment,
  earthVertex,
} from "./shaders";

const sunDir = new Vector3();
const daylightUniform = { value: 1 };

function markPassthrough(map: Texture) {
  map.anisotropy = 4;
  if (map.userData.passthrough) return;
  map.colorSpace = NoColorSpace;
  map.needsUpdate = true;
  map.userData.passthrough = true;
}

export function Earth() {
  const dayMap = useLoader(TextureLoader, "/textures/earth-day.jpg");
  const nightMap = useLoader(TextureLoader, "/textures/earth-night.jpg");
  const matRef = useRef<ShaderMaterial>(null);
  const setReady = useGlobeStore((s) => s.setTexturesReady);

  markPassthrough(dayMap);
  markPassthrough(nightMap);
  daylightUniform.value = useGlobeStore.getState().showDaylight ? 1 : 0;

  const uniforms = useMemo(
    () => ({
      dayMap: { value: dayMap },
      nightMap: { value: nightMap },
      sunDirection: { value: getSunDirection(new Date(), sunDir) },
      daylight: daylightUniform,
    }),
    [dayMap, nightMap],
  );

  useEffect(() => {
    setReady(true);
  }, [dayMap, nightMap, setReady]);

  useEffect(() => {
    const applySun = () => {
      const mat = matRef.current;
      if (!mat) return;
      getSunDirection(new Date(), sunDir);
      mat.uniforms.daylight.value = useGlobeStore.getState().showDaylight ? 1 : 0;
    };
    applySun();
    const timer = window.setInterval(applySun, 60_000);
    const onVisible = () => {
      if (document.visibilityState === "visible") applySun();
    };
    let prevDaylight = useGlobeStore.getState().showDaylight;
    const unsub = useGlobeStore.subscribe((state) => {
      if (state.showDaylight === prevDaylight) return;
      prevDaylight = state.showDaylight;
      const mat = matRef.current;
      if (!mat) return;
      mat.uniforms.daylight.value = state.showDaylight ? 1 : 0;
    });
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
      unsub();
    };
  }, []);

  const segs = 64;

  return (
    <group>
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS, segs, segs]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={earthVertex}
          fragmentShader={earthFragment}
          uniforms={uniforms}
          toneMapped={false}
        />
      </mesh>
      <Atmosphere />
    </group>
  );
}

function Atmosphere() {
  const inner = useMemo(
    () => ({
      glowColor: { value: new Color("#7eb8e8") },
      intensity: { value: 0.85 },
      power: { value: 2.6 },
      sunDirection: { value: sunDir },
      daylight: daylightUniform,
    }),
    [],
  );
  const outer = useMemo(
    () => ({
      glowColor: { value: new Color("#4d8fd6") },
      intensity: { value: 1.15 },
      power: { value: 3.4 },
      sunDirection: { value: sunDir },
      daylight: daylightUniform,
    }),
    [],
  );

  return (
    <>
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS * 1.018, 48, 48]} />
        <shaderMaterial
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          uniforms={inner}
          transparent
          depthWrite={false}
          side={FrontSide}
          toneMapped={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS * 1.08, 48, 48]} />
        <shaderMaterial
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          uniforms={outer}
          transparent
          depthWrite={false}
          side={BackSide}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}
