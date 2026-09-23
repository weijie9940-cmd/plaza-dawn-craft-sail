import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import { Earth } from "./Earth";
import { GeoLayer } from "./GeoLayer";
import { GlobeControls } from "./GlobeControls";
import { GlobePicker } from "./GlobePicker";
import { Graticule } from "./Graticule";
import { Markers } from "./Markers";
import { STierMarkers } from "./STierMarkers";
import { Starfield } from "./Starfield";

function Scene() {
  const starCount = useMemo(() => {
    if (typeof window === "undefined") return 1600;
    return window.innerWidth < 640 ? 1100 : 2400;
  }, []);

  return (
    <>
      <color attach="background" args={["#05070c"]} />
      <GlobeControls />
      <GlobePicker />
      <Starfield count={starCount} />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <Graticule />
      <GeoLayer />
      <Markers />
      <STierMarkers />
    </>
  );
}

export function GlobeCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.55, 2.65], fov: 42, near: 0.1, far: 200 }}
      dpr={[1, 1.6]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new Color("#05070c"));
        gl.domElement.style.touchAction = "none";
      }}
      style={{ width: "100%", height: "100%", touchAction: "none" }}
    >
      <Scene />
    </Canvas>
  );
}
