import { useEffect, useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  BackSide,
  Color,
  FrontSide,
  ShaderMaterial,
  TextureLoader,
  Vector3,
  SRGBColorSpace,
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

export function Earth() {
  const dayMap = useLoader(TextureLoader, "/textures/earth-day.jpg");
  const nightMap = useLoader(TextureLoader, "/textures/earth-night.jpg");
  const matRef = useRef<ShaderMaterial>(null);
  const setReady = useGlobeStore((s) => s.setTexturesReady);

  useEffect(() => {
    dayMap.colorSpace = SRGBColorSpace;
    nightMap.colorSpace = SRGBColorSpace;
    dayMap.anisotropy = 4;
    nightMap.anisotropy = 4;
    setReady(true);
  }, [dayMap, nightMap, setReady]);

  const uniforms = useMemo(
    () => ({
      dayMap: { value: dayMap },
      nightMap: { value: nightMap },
      sunDirection: { value: getSunDirection(new Date(), sunDir) },
    }),
    [dayMap, nightMap],
  );

  useFrame(() => {
    if (!matRef.current) return;
    getSunDirection(new Date(), sunDir);
    matRef.current.uniforms.sunDirection.value.copy(sunDir);
  });

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
    }),
    [],
  );
  const outer = useMemo(
    () => ({
      glowColor: { value: new Color("#4d8fd6") },
      intensity: { value: 1.15 },
      power: { value: 3.4 },
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
