import { z } from "zod";

const text = z.string().trim().min(1).max(300);
const url = z
  .string()
  .url()
  .max(1000)
  .refine((value) => {
    const u = new URL(value);
    return u.protocol === "https:" && !u.username && !u.password && !u.search && !u.hash;
  }, "Public HTTPS source URL without credentials or query required");
const date = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine(
    (value) =>
      Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value,
  );
const stamp = z.string().datetime();
export const eventSchema = z
  .object({
    year: z.number().int().min(2013).max(2100),
    month: z.number().int().min(1).max(12),
    name: text,
    cityZh: text,
    cityEn: text,
    venue: text.nullable(),
    champion: text,
    tier: z.enum(["Major", "S"]),
    note: z.string().max(1000).nullable(),
  })
  .strict();
export const citySchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-z0-9-]+$/)
      .max(100),
    city: text,
    cityZh: text,
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
  })
  .strict();
const eventRecord = z
  .object({
    sourceId: text,
    sourceUrl: url,
    completed: z.literal(true),
    resultType: z.literal("tournament_champion"),
    endedAt: stamp,
    city: citySchema,
    event: eventSchema,
  })
  .strict();
const player = z
  .object({ nick: text, country: z.string().min(2).max(3), hltvPlayerUrl: url.nullable() })
  .strict();
const team = z
  .object({
    rank: z.number().int().min(1),
    team: text,
    teamKey: text,
    points: z.number().int().nonnegative(),
    change: z.string().regex(/^(0|[+-]\d+)$/),
    roster: z.array(player).max(10),
    coach: z
      .object({ nick: text, country: z.string().min(2).max(3) })
      .strict()
      .nullable(),
    honours: z
      .object({
        count: z.number().int().nonnegative(),
        list: z
          .array(
            z.object({ event: text, date, tier: z.enum(["Major", "S"]), place: text }).strict(),
          )
          .max(200),
      })
      .strict(),
    teamPageUrl: url,
    liquipediaUrl: url,
    confidence: z.enum(["high", "medium", "low"]),
  })
  .strict();
export const rankingSchema = z
  .object({
    rankingDate: date,
    pageTitle: text,
    sourceUrl: url.refine(
      (value) =>
        new URL(value).hostname === "www.hltv.org" || new URL(value).hostname === "hltv.org",
    ),
    teams: z.array(team).min(20).max(100),
  })
  .strict();
const eventFeed = z
  .object({
    schemaVersion: z.literal(1),
    kind: z.literal("events"),
    asOf: stamp,
    sourceName: text,
    records: z.array(eventRecord).max(500),
  })
  .strict();
const rankingFeed = z
  .object({
    schemaVersion: z.literal(1),
    kind: z.literal("rankings"),
    asOf: stamp,
    sourceName: z.literal("HLTV"),
    ranking: rankingSchema,
  })
  .strict();
const freshness = z
  .object({ lastSuccess: stamp, sourceAsOf: stamp, sourceName: text })
  .strict()
  .nullable();
export const snapshotSchema = z
  .object({
    schemaVersion: z.literal(1),
    events: z.array(eventRecord),
    rankings: z.array(rankingSchema),
    eventSync: freshness,
    rankingSync: freshness,
  })
  .strict();
export type DataSnapshot = z.infer<typeof snapshotSchema>;
export const emptySnapshot = (): DataSnapshot => ({
  schemaVersion: 1,
  events: [],
  rankings: [],
  eventSync: null,
  rankingSync: null,
});
export function archiveEventId(event: { year: number; month: number; name: string }) {
  return `${event.year}-${String(event.month).padStart(2, "0")}-${event.name}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const equal = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
const fail = (message: string): never => {
  throw new Error(message);
};
type Context = {
  events: z.infer<typeof eventSchema>[];
  cities: z.infer<typeof citySchema>[];
  rankingDate: string;
};

/** Pure, all-or-nothing merge. Historical identities and ranking editions are immutable. */
export function mergeFeeds(
  previous: DataSnapshot,
  feeds: { events?: unknown; rankings?: unknown },
  baseline: Context,
  now = new Date(),
): DataSnapshot {
  const next = snapshotSchema.parse(previous);
  const checkTime = (asOf: string, last: string | null = null) => {
    if (Date.parse(asOf) > now.getTime() || (last && Date.parse(asOf) < Date.parse(last)))
      fail("Future or older source snapshot rejected");
  };
  if (feeds.events !== undefined) {
    const feed = eventFeed.parse(feeds.events);
    checkTime(feed.asOf, next.eventSync?.sourceAsOf ?? null);
    const ids = new Set<string>();
    const sourceIds = new Set<string>();
    const knownEvents = new Map(baseline.events.map((event) => [archiveEventId(event), event]));
    const knownCities = new Map(baseline.cities.map((city) => [city.id, city]));
    for (const item of next.events) {
      knownEvents.set(archiveEventId(item.event), item.event);
      knownCities.set(item.city.id, item.city);
    }
    for (const item of feed.records) {
      const id = archiveEventId(item.event);
      if (ids.has(id) || sourceIds.has(item.sourceId)) fail("Duplicate event in incoming feed");
      ids.add(id);
      sourceIds.add(item.sourceId);
      if (
        Date.parse(item.endedAt) > Date.parse(feed.asOf) ||
        item.endedAt.slice(0, 7) !==
          `${item.event.year}-${String(item.event.month).padStart(2, "0")}`
      )
        fail("Event completion date does not match confirmed result");
      if (item.city.city !== item.event.cityEn || item.city.cityZh !== item.event.cityZh)
        fail("City metadata must match the event");
      const oldCity = knownCities.get(item.city.id);
      if (oldCity && !equal(oldCity, item.city)) fail("City identity conflict requires review");
      for (const known of knownCities.values())
        if (known.city === item.city.city && known.id !== item.city.id)
          fail("City name maps to a different identity");
      const oldSource = next.events.find((row) => row.sourceId === item.sourceId);
      if (oldSource && !equal(oldSource, item))
        fail("Existing provider record changed; review required");
      const oldEvent = knownEvents.get(id);
      if (oldEvent && !equal(oldEvent, item.event))
        fail("Existing archive event changed; review required");
      if (!oldEvent) {
        next.events.push(item);
        knownEvents.set(id, item.event);
        knownCities.set(item.city.id, item.city);
      }
    }
    next.events.sort((a, b) => archiveEventId(a.event).localeCompare(archiveEventId(b.event)));
    next.eventSync = {
      lastSuccess: now.toISOString(),
      sourceAsOf: feed.asOf,
      sourceName: feed.sourceName,
    };
  }
  if (feeds.rankings !== undefined) {
    const feed = rankingFeed.parse(feeds.rankings);
    checkTime(feed.asOf, next.rankingSync?.sourceAsOf ?? null);
    const ranking = feed.ranking;
    const latest = next.rankings.at(-1)?.rankingDate ?? baseline.rankingDate;
    if (
      ranking.rankingDate <= baseline.rankingDate ||
      ranking.rankingDate < latest ||
      ranking.rankingDate > feed.asOf.slice(0, 10)
    )
      fail("Stale or future ranking edition rejected");
    const keys = new Set(ranking.teams.map((t) => t.teamKey));
    if (keys.size !== ranking.teams.length || ranking.teams.some((t, i) => t.rank !== i + 1))
      fail("Ranking must have unique teams and contiguous ordered ranks");
    const existing = next.rankings.find((row) => row.rankingDate === ranking.rankingDate);
    if (existing && !equal(existing, ranking)) fail("Published ranking edition is immutable");
    if (!existing) next.rankings.push(ranking);
    next.rankingSync = {
      lastSuccess: now.toISOString(),
      sourceAsOf: feed.asOf,
      sourceName: feed.sourceName,
    };
  }
  return next;
}
