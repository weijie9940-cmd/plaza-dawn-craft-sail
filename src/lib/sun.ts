import { Vector3 } from "three";
import { latLngToVector3 } from "./geo";

/**
 * Subsolar latitude/longitude for a UTC instant.
 * NOAA low-precision declination and equation of time (365-day year).
 */
export function getSubsolarPoint(date: Date): { lat: number; lng: number } {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const dayOfYear = (date.getTime() - start) / 86_400_000;
  const gamma = ((2 * Math.PI) / 365) * (dayOfYear - 1.5);
  const cosG = Math.cos(gamma);
  const sinG = Math.sin(gamma);
  const cos2 = Math.cos(2 * gamma);
  const sin2 = Math.sin(2 * gamma);
  const cos3 = Math.cos(3 * gamma);
  const sin3 = Math.sin(3 * gamma);
  const decl =
    0.006918 -
    0.399912 * cosG +
    0.070257 * sinG -
    0.006758 * cos2 +
    0.000907 * sin2 -
    0.002697 * cos3 +
    0.00148 * sin3;
  const eqtime =
    229.18 * (0.000075 + 0.001868 * cosG - 0.032077 * sinG - 0.014615 * cos2 - 0.040849 * sin2);
  const utcHours =
    date.getUTCHours() +
    date.getUTCMinutes() / 60 +
    date.getUTCSeconds() / 3600 +
    date.getUTCMilliseconds() / 3_600_000;
  let lng = -15 * (utcHours - 12 + eqtime / 60);
  lng = ((((lng + 180) % 360) + 360) % 360) - 180;
  return { lat: (decl * 180) / Math.PI, lng };
}

export function getSunDirection(date = new Date(), target = new Vector3()) {
  const { lat, lng } = getSubsolarPoint(date);
  return latLngToVector3(lat, lng, 1, target);
}
