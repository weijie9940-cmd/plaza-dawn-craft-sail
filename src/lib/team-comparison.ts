import {
  S_TIER_CITIES,
  STIER_YEAR_MIN,
  STIER_YEAR_MAX,
  CHAMPION_LABEL,
  championKey,
} from "../data/s-tier-events.ts";
import { teamJourney, type JourneyEvent } from "./team-journey.ts";

export const comparisonOptions = [
  ...new Set(
    S_TIER_CITIES.flatMap((city) => city.events.map((event) => championKey(event.champion))),
  ),
]
  .filter(Boolean)
  .map((key) => ({ key, label: CHAMPION_LABEL[key] ?? key }))
  .sort((a, b) => a.label.localeCompare(b.label));

export function compareTeams(teams: [string, string], year: number) {
  const sides = [teamJourney(teams[0], year), teamJourney(teams[1], year)] as const;
  const cities = S_TIER_CITIES.flatMap((city) => {
    const events: [JourneyEvent[], JourneyEvent[]] = [
      sides[0].events.filter((row) => row.cityId === city.id),
      sides[1].events.filter((row) => row.cityId === city.id),
    ];
    if (!events[0].length && !events[1].length) return [];
    return [
      {
        ...city,
        events,
        membership: events[0].length && events[1].length ? "both" : events[0].length ? "a" : "b",
      },
    ];
  }).sort(
    (a, b) => b.events[0].length + b.events[1].length - a.events[0].length - a.events[1].length,
  );
  return {
    sides,
    cities,
    newWins: sides.flatMap((side) => side.events).filter((row) => row.event.year === year).length,
  };
}
export function playbackStart(year: number) {
  return year >= STIER_YEAR_MAX ? STIER_YEAR_MIN : year;
}

export type ComparisonCitySort = "total" | "a" | "b" | "latest";
type ComparisonCity = ReturnType<typeof compareTeams>["cities"][number];

/** List-only controls leave the full map and cumulative team totals unchanged. */
export function comparisonCityList(
  cities: ComparisonCity[],
  commonOnly: boolean,
  sort: ComparisonCitySort,
  clusterIds: string[] = [],
) {
  const score = (city: ComparisonCity) => {
    if (sort === "a") return city.events[0].length;
    if (sort === "b") return city.events[1].length;
    if (sort === "latest")
      return Math.max(...city.events.flat().map((row) => row.event.year * 12 + row.event.month));
    return city.events[0].length + city.events[1].length;
  };
  return cities
    .filter(
      (city) =>
        (!commonOnly || city.membership === "both") &&
        (!clusterIds.length || clusterIds.includes(city.id)),
    )
    .sort((a, b) => score(b) - score(a) || a.id.localeCompare(b.id));
}
export function playbackStep(year: number) {
  const next = Math.min(year + 1, STIER_YEAR_MAX);
  return { year: next, playing: next < STIER_YEAR_MAX };
}
