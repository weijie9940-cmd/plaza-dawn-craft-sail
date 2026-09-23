import { Vector3 } from "three";
import { latLngToVector3 } from "./geo";

/**
 * Approximate subsolar point for the given UTC instant, then return a unit
 * direction in globe space (same basis as latLngToVector3).
 */
export function getSunDirection(date = new Date(), target = new Vector3()) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const dayOfYear = (date.getTime() - start) / 86_400_000;
  const declination =
    ((-23.44 * Math.PI) / 180) * Math.cos((2 * Math.PI * (dayOfYear + 10)) / 365);
  const utcHours =
    date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  let lng = 180 - 15 * utcHours;
  if (lng > 180) lng -= 360;
  if (lng < -180) lng += 360;
  const lat = (declination * 180) / Math.PI;
  return latLngToVector3(lat, lng, 1, target);
}
