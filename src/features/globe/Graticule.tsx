import { useMemo } from "react";
import { BufferAttribute, BufferGeometry } from "three";
import { GRATICULE_RADIUS, latLngToVector3 } from "@/lib/geo";
import { useGlobeStore } from "@/store/globe-store";
import { horizonCullCacheKey, horizonCullOnBeforeCompile } from "./horizon-cull";

export function Graticule() {
  const show = useGlobeStore((s) => s.showGraticule);
  const geometry = useMemo(() => {
    const positions: number[] = [];
    const tmp = latLngToVector3(0, 0, GRATICULE_RADIUS);
    const step = 6;
    for (let lng = -180; lng < 180; lng += 30) {
      for (let lat = -90; lat < 90; lat += step) {
        const a = latLngToVector3(lat, lng, GRATICULE_RADIUS, tmp.clone());
        const b = latLngToVector3(lat + step, lng, GRATICULE_RADIUS, tmp.clone());
        positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      for (let lng = -180; lng < 180; lng += step) {
        const a = latLngToVector3(lat, lng, GRATICULE_RADIUS, tmp.clone());
        const b = latLngToVector3(lat, lng + step, GRATICULE_RADIUS, tmp.clone());
        positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
    return geo;
  }, []);

  if (!show) return null;

  return (
    <lineSegments geometry={geometry} frustumCulled={false}>
      <lineBasicMaterial
        color="#8fb6d6"
        transparent
        opacity={0.28}
        depthWrite={false}
        depthTest={false}
        onBeforeCompile={horizonCullOnBeforeCompile}
        customProgramCacheKey={horizonCullCacheKey}
      />
    </lineSegments>
  );
}
