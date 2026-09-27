import { S_TIER_EVENTS } from "@/data/s-tier-events";

export function countMajorsUpToYear(year: number) {
  return S_TIER_EVENTS.filter((ev) => ev.year <= year && ev.tier === "Major").length;
}
