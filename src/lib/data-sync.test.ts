import test from "node:test";
import assert from "node:assert/strict";
import { mergeFeeds, emptySnapshot } from "./data-sync.ts";

const now = new Date("2026-10-22T12:00:00Z");
const city = { id: "test-city", city: "Test City", cityZh: "测试城", lat: 30, lng: 120 };
const record = {
  sourceId: "provider:1",
  sourceUrl: "https://example.com/tournament/1",
  completed: true,
  resultType: "tournament_champion",
  endedAt: "2026-10-20T20:00:00Z",
  city,
  event: {
    year: 2026,
    month: 10,
    name: "Test Final 2026",
    cityZh: "测试城",
    cityEn: "Test City",
    venue: null,
    champion: "Natus Vincere",
    tier: "S" as const,
    note: null,
  },
};
const events = {
  schemaVersion: 1,
  kind: "events",
  asOf: now.toISOString(),
  sourceName: "Test Provider",
  records: [record],
};
const context = { events: [], cities: [], rankingDate: "2026-10-12" };
const team = (rank: number) => ({
  rank,
  team: `Team ${rank}`,
  teamKey: `team-${rank}`,
  points: 1000 - rank,
  change: "0",
  roster: [],
  coach: null,
  honours: { count: 0, list: [] },
  teamPageUrl: `https://www.hltv.org/team/${rank}/team`,
  liquipediaUrl: `https://liquipedia.net/counterstrike/Team_${rank}`,
  confidence: "high",
});
const ranking = {
  rankingDate: "2026-10-19",
  pageTitle: "HLTV World Ranking",
  sourceUrl: "https://www.hltv.org/ranking/teams/2026/october/19",
  teams: Array.from({ length: 20 }, (_, i) => team(i + 1)),
};
const rankings = {
  schemaVersion: 1,
  kind: "rankings",
  asOf: now.toISOString(),
  sourceName: "HLTV",
  ranking,
};

test("valid feeds merge idempotently and retain every immutable ranking edition", () => {
  const original = emptySnapshot();
  const first = mergeFeeds(original, { events, rankings }, context, now);
  assert.equal(first.events.length, 1);
  assert.equal(first.rankings.length, 1);
  assert.equal(original.events.length, 0);
  assert.deepEqual(mergeFeeds(first, { events, rankings }, context, now), first);
  const next = mergeFeeds(
    first,
    { rankings: { ...rankings, ranking: { ...ranking, rankingDate: "2026-10-20" } } },
    context,
    now,
  );
  assert.equal(next.rankings.length, 2);
  assert.equal(next.events.length, 1);
});
test("unfinished, future, invalid coordinate and duplicate event inputs are rejected", () => {
  for (const bad of [
    { ...record, completed: false },
    { ...record, endedAt: "2027-01-01T00:00:00Z" },
    { ...record, city: { ...city, lat: 91 } },
    { ...record, resultType: "match_winner" },
    { ...record, sourceUrl: "javascript:alert(1)" },
  ]) {
    assert.throws(() =>
      mergeFeeds(emptySnapshot(), { events: { ...events, records: [bad] } }, context, now),
    );
  }
  assert.throws(() =>
    mergeFeeds(emptySnapshot(), { events: { ...events, records: [record, record] } }, context, now),
  );
});
test("existing archive and provider identities cannot be silently overwritten", () => {
  const first = mergeFeeds(emptySnapshot(), { events }, context, now);
  assert.throws(() =>
    mergeFeeds(
      first,
      {
        events: {
          ...events,
          records: [{ ...record, event: { ...record.event, champion: "Astralis" } }],
        },
      },
      context,
      now,
    ),
  );
  assert.throws(() =>
    mergeFeeds(
      emptySnapshot(),
      { events },
      { ...context, events: [{ ...record.event, champion: "Astralis" }] },
      now,
    ),
  );
  assert.throws(() =>
    mergeFeeds(emptySnapshot(), { events }, { ...context, cities: [{ ...city, lat: 40 }] }, now),
  );
});
test("stale or partial ranking editions never replace the last good version", () => {
  const first = mergeFeeds(emptySnapshot(), { rankings }, context, now);
  for (const bad of [
    { ...ranking, rankingDate: "2026-10-05" },
    { ...ranking, teams: ranking.teams.slice(0, 3) },
    { ...ranking, teams: [...ranking.teams.slice(1), ranking.teams[1]] },
    { ...ranking, teams: ranking.teams.map((t) => ({ ...t, points: 4 })) },
  ]) {
    assert.throws(() =>
      mergeFeeds(first, { rankings: { ...rankings, ranking: bad } }, context, now),
    );
  }
  assert.equal(first.rankings[0].rankingDate, "2026-10-19");
});
