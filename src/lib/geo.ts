import { Vector3 } from "three";

export const EARTH_RADIUS = 1;
export const BORDER_RADIUS = 1.006;
export const FILL_RADIUS = 1.004;
export const MARKER_RADIUS = 1.02;
export const GRATICULE_RADIUS = 1.002;

const DEG = Math.PI / 180;
const RAD = 180 / Math.PI;

/** Convert geodetic lat/lng (degrees) to a point on a sphere matching THREE.SphereGeometry UVs. */
export function latLngToVector3(lat: number, lng: number, radius = EARTH_RADIUS, target = new Vector3()) {
  const phi = (90 - lat) * DEG;
  const theta = (lng + 180) * DEG;
  const sinPhi = Math.sin(phi);
  return target.set(
    -radius * Math.cos(theta) * sinPhi,
    radius * Math.cos(phi),
    radius * Math.sin(theta) * sinPhi,
  );
}

export function vector3ToLatLng(v: Vector3): { lat: number; lng: number } {
  const r = v.length() || 1;
  const lat = 90 - Math.acos(Math.min(1, Math.max(-1, v.y / r))) * RAD;
  let lng = Math.atan2(v.z, -v.x) * RAD - 180;
  if (lng < -180) lng += 360;
  if (lng > 180) lng -= 360;
  return { lat, lng };
}

export function wrapLng(lng: number) {
  let x = lng;
  while (x < -180) x += 360;
  while (x > 180) x -= 360;
  return x;
}

export function formatCoord(lat: number, lng: number) {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(2)}°${ns}  ${Math.abs(lng).toFixed(2)}°${ew}`;
}

export function shortestAngle(from: number, to: number) {
  let d = to - from;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

export function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}
