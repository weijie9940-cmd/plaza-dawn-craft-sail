import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Spherical, Vector3 } from "three";
import { easeInOutCubic, latLngToVector3, shortestAngle } from "@/lib/geo";
import { useGlobeStore } from "@/store/globe-store";
import { globeInput } from "./input-state";

const PHI_MIN = 0.18;
const PHI_MAX = Math.PI - 0.18;
const RADIUS_MIN = 1.42;
const RADIUS_MAX = 4.6;
const IDLE_MS = 4200;
const AUTO_THETA = 0.055;
const DAMP = 4.2;

export function GlobeControls() {
  const camera = useThree((s) => s.camera);
  const gl = useThree((s) => s.gl);
  const size = useThree((s) => s.size);
  const flyTo = useGlobeStore((s) => s.flyTo);
  const pinMode = useGlobeStore((s) => s.pinMode);

  const sph = useRef(new Spherical(2.65, Math.PI / 2 - 0.22, 0.55));
  const vel = useRef({ phi: 0, theta: 0 });
  const idleAt = useRef(performance.now());
  const fly = useRef<{
    fromR: number;
    fromPhi: number;
    fromTheta: number;
    toR: number;
    toPhi: number;
    toTheta: number;
    t: number;
    dur: number;
  } | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStart = useRef<number | null>(null);
  const pinchRadius = useRef(2.65);

  useEffect(() => {
    camera.position.setFromSpherical(sph.current);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useEffect(() => {
    if (!flyTo) return;
    const target = latLngToVector3(flyTo.lat, flyTo.lng, 1, new Vector3());
    const to = new Spherical().setFromVector3(target);
    to.radius = flyTo.radius;
    fly.current = {
      fromR: sph.current.radius,
      fromPhi: sph.current.phi,
      fromTheta: sph.current.theta,
      toR: to.radius,
      toPhi: to.phi,
      toTheta: sph.current.theta + shortestAngle(sph.current.theta, to.theta),
      t: 0,
      dur: 1.15,
    };
    vel.current.phi = 0;
    vel.current.theta = 0;
    idleAt.current = performance.now();
  }, [flyTo]);

  useEffect(() => {
    const el = gl.domElement;
    el.style.touchAction = "none";
    el.style.cursor = pinMode ? "crosshair" : "grab";

    const bumpIdle = () => {
      idleAt.current = performance.now();
    };

    const onDown = (e: PointerEvent) => {
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      globeInput.movedPx = 0;
      fly.current = null;
      bumpIdle();
      if (pointers.current.size === 1) {
        globeInput.dragging = false;
        vel.current.phi = 0;
        vel.current.theta = 0;
        el.style.cursor = pinMode ? "crosshair" : "grabbing";
      }
      if (pointers.current.size === 2) {
        globeInput.pinching = true;
        globeInput.dragging = true;
        const [a, b] = [...pointers.current.values()];
        pinchStart.current = Math.hypot(a.x - b.x, a.y - b.y);
        pinchRadius.current = sph.current.radius;
      }
    };

    const onMove = (e: PointerEvent) => {
      const prev = pointers.current.get(e.pointerId);
      if (!prev) return;
      const nx = e.clientX;
      const ny = e.clientY;
      pointers.current.set(e.pointerId, { x: nx, y: ny });

      if (pointers.current.size === 2 && pinchStart.current) {
        const pts = [...pointers.current.values()];
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        const scale = pinchStart.current / Math.max(24, dist);
        sph.current.radius = Math.min(
          RADIUS_MAX,
          Math.max(RADIUS_MIN, pinchRadius.current * scale),
        );
        globeInput.movedPx += 8;
        bumpIdle();
        return;
      }

      if (pointers.current.size !== 1) return;
      const dx = nx - prev.x;
      const dy = ny - prev.y;
      globeInput.movedPx += Math.hypot(dx, dy);
      if (globeInput.movedPx > 5 && !globeInput.dragging) {
        globeInput.dragging = true;
        try {
          el.setPointerCapture(e.pointerId);
        } catch {
          /* already captured or released */
        }
      }
      if (!globeInput.dragging) return;

      const k = 2.15 / Math.max(size.height, 1);
      sph.current.theta -= dx * k;
      sph.current.phi -= dy * k;
      sph.current.phi = Math.min(PHI_MAX, Math.max(PHI_MIN, sph.current.phi));
      vel.current.theta = -dx * k * 60;
      vel.current.phi = -dy * k * 60;
      bumpIdle();
    };

    const onUp = (e: PointerEvent) => {
      pointers.current.delete(e.pointerId);
      if (pointers.current.size < 2) {
        globeInput.pinching = false;
        pinchStart.current = null;
      }
      if (pointers.current.size === 0) {
        globeInput.dragging = false;
        el.style.cursor = pinMode ? "crosshair" : "grab";
      }
      bumpIdle();
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      fly.current = null;
      const delta = e.deltaY;
      sph.current.radius = Math.min(
        RADIUS_MAX,
        Math.max(RADIUS_MIN, sph.current.radius * Math.exp(delta * 0.00115)),
      );
      bumpIdle();
    };

    const onLost = () => {
      pointers.current.clear();
      globeInput.dragging = false;
      globeInput.pinching = false;
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("lostpointercapture", onLost);
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("lostpointercapture", onLost);
      el.removeEventListener("wheel", onWheel);
    };
  }, [gl, pinMode, size.height]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.1);
    const anim = fly.current;
    if (anim) {
      anim.t += dt;
      const u = easeInOutCubic(Math.min(1, anim.t / anim.dur));
      sph.current.radius = anim.fromR + (anim.toR - anim.fromR) * u;
      sph.current.phi = anim.fromPhi + (anim.toPhi - anim.fromPhi) * u;
      sph.current.theta = anim.fromTheta + (anim.toTheta - anim.fromTheta) * u;
      if (u >= 1) fly.current = null;
    } else if (!globeInput.dragging && !globeInput.pinching) {
      const decay = Math.exp(-DAMP * dt);
      vel.current.theta *= decay;
      vel.current.phi *= decay;
      sph.current.theta += vel.current.theta * dt;
      sph.current.phi += vel.current.phi * dt;
      const idle = performance.now() - idleAt.current > IDLE_MS;
      const spinning = Math.abs(vel.current.theta) + Math.abs(vel.current.phi) < 0.02;
      if (idle && spinning) {
        sph.current.theta += AUTO_THETA * dt;
      }
    }

    sph.current.phi = Math.min(PHI_MAX, Math.max(PHI_MIN, sph.current.phi));
    sph.current.radius = Math.min(RADIUS_MAX, Math.max(RADIUS_MIN, sph.current.radius));
    camera.position.setFromSpherical(sph.current);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
