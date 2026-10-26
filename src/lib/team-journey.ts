import {
  CHAMPION_LABEL,
  S_TIER_CITIES,
  championKey,
  type STierEvent,
} from "../data/s-tier-events.ts";
import { majorEventId } from "../data/major-trophy-photos.ts";

export type JourneyEvent = {
  id: string;
  event: STierEvent;
  cityId: string;
  cityZh: string;
  lat: number;
  lng: number;
};

/** Statistics use the same mapped archive and cumulative year as the globe. */
export function teamJourney(team: string, year: number) {
  const events: JourneyEvent[] = S_TIER_CITIES.flatMap((city) =>
    city.events
      .filter((event) => event.year <= year && championKey(event.champion) === team)
      .map((event) => ({
        id: majorEventId(event),
        event,
        cityId: city.id,
        cityZh: city.cityZh,
        lat: city.lat,
        lng: city.lng,
      })),
  ).sort(
    (a, b) =>
      b.event.year - a.event.year || b.event.month - a.event.month || a.id.localeCompare(b.id),
  );
  return {
    title: CHAMPION_LABEL[team] ?? team,
    cityCount: new Set(events.map((row) => row.cityId)).size,
    majorCount: events.filter((row) => row.event.tier === "Major").length,
    events,
  };
}
