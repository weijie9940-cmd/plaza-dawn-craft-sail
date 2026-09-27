import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Raycaster, Sphere, Vector2, Vector3, type Camera } from "three";
import { COUNTRY_BY_ISO } from "@/data/countries";
import { EARTH_RADIUS, vector3ToLatLng } from "@/lib/geo";
import { useGlobeStore } from "@/store/globe-store";
import { findCountry, worldRef } from "./GeoLayer";
import { globeInput } from "./input-state";

const hit = new Vector3();
const ndc = new Vector2();
const sphere = new Sphere(new Vector3(0, 0, 0), EARTH_RADIUS);
const raycaster = new Raycaster();

function intersectGlobe(camera: Camera, clientX: number, clientY: number, el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  ndc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  ndc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(ndc, camera);
  return raycaster.ray.intersectSphere(sphere, hit) ? hit : null;
}

export function GlobePicker() {
  const camera = useThree((s) => s.camera);
  const gl = useThree((s) => s.gl);
  const readyAt = useRef(performance.now() + 400);

  useEffect(() => {
    const el = gl.domElement;

    const clearHover = () => {
      const store = useGlobeStore.getState();
      if (store.hoveredIso) store.setHoveredIso(null);
    };

    const onMove = (e: PointerEvent) => {
      globeInput.pointerAt = performance.now();
      if (globeInput.dragging || globeInput.pinching) return;
      const pt = intersectGlobe(camera, e.clientX, e.clientY, el);
      const store = useGlobeStore.getState();
      if (!pt) {
        if (store.hoveredIso) store.setHoveredIso(null);
        return;
      }
      const { lat, lng } = vector3ToLatLng(pt);
      const iso = worldRef.current ? findCountry(lng, lat, worldRef.current) : null;
      if (iso !== store.hoveredIso) store.setHoveredIso(iso);
    };

    const onUp = (e: PointerEvent) => {
      if (performance.now() < readyAt.current) return;
      if (globeInput.movedPx > 6 || globeInput.pinching) return;
      const pt = intersectGlobe(camera, e.clientX, e.clientY, el);
      const store = useGlobeStore.getState();
      if (!pt) {
        if (!store.pinMode) store.clearSelection();
        return;
      }
      const { lat, lng } = vector3ToLatLng(pt);
      if (store.pinMode) {
        store.setPendingPin({ lat, lng });
        return;
      }
      const iso = worldRef.current ? findCountry(lng, lat, worldRef.current) : null;
      if (iso) {
        store.selectCountry(iso);
        store.selectMarker(null);
        const c = COUNTRY_BY_ISO.get(iso);
        if (c) store.requestFlyTo(c.lat, c.lng, 1.82);
      } else {
        store.clearSelection();
      }
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointerleave", clearHover);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointerleave", clearHover);
    };
  }, [camera, gl]);

  return null;
}
