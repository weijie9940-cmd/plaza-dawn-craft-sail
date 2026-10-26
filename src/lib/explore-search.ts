import {
  CHAMPION_LABEL,
  S_TIER_CITIES,
  STIER_YEAR_MAX,
  championKey,
} from "../data/s-tier-events.ts";

export type EsportsResult = {
  kind: "team" | "city" | "event";
  id: string;
  label: string;
  detail: string;
  lat: number;
  lng: number;
  year: number;
  cityId: string;
  cityCount: number;
  team?: string;
  eventId?: string;
};
const TEAM_ALIASES: Record<string, string> = {
  navi: "navi 纳维",
  vitality: "vitality 小蜜蜂",
  spirit: "spirit 绿龙",
  faze: "faze 银河战舰",
  nip: "nip 睡衣忍者",
  virtuspro: "vp virtus pro",
  mouz: "mouz mousesports 老鼠",
  astralis: "a队",
  liquid: "液体",
  mongolz: "蒙古",
  fnatic: "fnatic f队",
};
function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
const entries: { result: EsportsResult; text: string }[] = [];
const teams = new Map<
  string,
  { cities: Set<string>; count: number; anchor: (typeof S_TIER_CITIES)[number] }
>();
for (const city of S_TIER_CITIES) {
  const base = { lat: city.lat, lng: city.lng, cityId: city.id, cityCount: 1 };
  entries.push({
    result: {
      ...base,
      kind: "city",
      id: `city:${city.id}`,
      label: city.cityZh,
      detail: `${city.city} · ${city.events.length} 场赛事`,
      year: STIER_YEAR_MAX,
    },
    text: normalize(`${city.cityZh} ${city.city}`),
  });
  for (const event of city.events) {
    const team = championKey(event.champion);
    const group = teams.get(team) ?? { cities: new Set<string>(), count: 0, anchor: city };
    group.cities.add(city.id);
    group.count++;
    teams.set(team, group);
    const eventId = `${event.year}-${String(event.month).padStart(2, "0")}-${event.name}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    entries.push({
      result: {
        ...base,
        kind: "event",
        id: `event:${eventId}`,
        label: event.name,
        eventId,
        detail: `${event.year} · ${city.cityZh} · 冠军 ${event.champion}`,
        year: event.year,
      },
      text: normalize(`${event.name} ${event.year} ${city.city} ${city.cityZh}`),
    });
  }
}
for (const [team, group] of teams) {
  const label = CHAMPION_LABEL[team] ?? team;
  entries.push({
    result: {
      kind: "team",
      id: `team:${team}`,
      label,
      team,
      cityId: group.anchor.id,
      detail: `夺冠版图 · ${group.count} 场冠军 · ${group.cities.size} 城`,
      lat: group.anchor.lat,
      lng: group.anchor.lng,
      year: STIER_YEAR_MAX,
      cityCount: group.cities.size,
    },
    text: normalize(`${label} ${team} ${TEAM_ALIASES[team] ?? ""}`),
  });
}
/** Search the complete archive; picking a result reveals its year on the map. */
export function searchEsports(query: string, limit = 8): EsportsResult[] {
  const q = normalize(query);
  if (!q) return [];
  const words = q.split(/\s+/);
  return entries
    .filter(({ text }) => words.every((word) => text.includes(word)))
    .map((entry) => ({
      ...entry,
      score:
        (normalize(entry.result.label) === q ? 100 : 0) +
        (entry.result.kind === "team" ? 30 : entry.result.kind === "city" ? 20 : 0),
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.result.year - a.result.year ||
        a.result.label.localeCompare(b.result.label),
    )
    .slice(0, limit)
    .map(({ result }) => result);
}
