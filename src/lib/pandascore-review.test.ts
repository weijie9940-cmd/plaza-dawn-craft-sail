import assert from "node:assert/strict";
import test from "node:test";
import { buildPandascoreReview, fetchPandascoreReview } from "../../scripts/pandascore-review.ts";

const now = new Date("2026-10-26T12:00:00.000Z");
const tournament = {
  id: 123,
  name: "Example Finals",
  tier: "s",
  begin_at: "2026-10-20T10:00:00Z",
  end_at: "2026-10-22T20:00:00Z",
  videogame_title: { slug: "cs-2" },
  league: { name: "Example League" },
  serie: { name: "Autumn", full_name: "Autumn 2026" },
  winner: { name: "Example Team" },
};

test("PandaScore review keeps only completed S-tier candidates and never invents a champion or city", () => {
  const report = buildPandascoreReview([
    tournament,
    { ...tournament, id: 124, tier: "a" },
    { ...tournament, id: 125, end_at: "2026-11-01T20:00:00Z" },
    { ...tournament, id: 126, end_at: null },
  ], now);
  assert.equal(report.candidates.length, 1);
  assert.deepEqual(report.candidates[0], {
    sourceId: "pandascore:tournament:123",
    sourceUrl: "https://api.pandascore.co/tournaments/123",
    name: "Example Finals",
    leagueName: "Example League",
    serieName: "Autumn",
    serieFullName: "Autumn 2026",
    stageWinnerName: "Example Team",
    playoffStandingsLeader: null,
    standingsStatus: "not_checked",
    tier: "s",
    videogameTitle: "cs-2",
    beginAt: "2026-10-20T10:00:00Z",
    endAt: "2026-10-22T20:00:00Z",
    reviewRequired: ["tournament_champion", "major_or_s_classification", "offline_host_city", "venue"],
  });
  assert.equal(report.fetchedAt, now.toISOString());
});

test("PandaScore requests are bounded, authenticated in headers, and report HTTP failures without exposing the token", async () => {
  const token = "private-test-token";
  let requestedUrl = "";
  const fetcher: typeof fetch = async (input, init) => {
    if (String(input).includes("/tournaments/past")) requestedUrl = String(input);
    assert.equal(new Headers(init?.headers).get("Authorization"), `Bearer ${token}`);
    return new Response(JSON.stringify([tournament]), {
      status: 200,
      headers: { "Content-Type": "application/json", "X-Rate-Limit-Remaining": "999" },
    });
  };
  const report = await fetchPandascoreReview(token, { fetcher, now });
  assert.match(requestedUrl, /^https:\/\/api\.pandascore\.co\/csgo\/tournaments\/past\?/);
  assert.match(requestedUrl, /page%5Bsize%5D=20/);
  assert.equal(requestedUrl.includes(token), false);
  assert.equal(report.rateLimitRemaining, 999);
  assert.equal(report.candidates.length, 1);

  await assert.rejects(
    fetchPandascoreReview(token, { fetcher: async () => new Response("denied", { status: 401 }), now }),
    (error: Error) => error.message === "PandaScore request failed (HTTP 401)",
  );
});

test("playoff standings leader is review evidence, not an automatically published champion", async () => {
  const requested: string[] = [];
  const fetcher: typeof fetch = async (input) => {
    const url = String(input);
    requested.push(url);
    const payload = url.includes("/standings")
      ? [{ rank: 1, team: { id: 9, name: "Example Team" } }, { rank: 2, team: { id: 10, name: "Runner Up" } }]
      : [tournament];
    return new Response(JSON.stringify(payload), { headers: { "Content-Type": "application/json" } });
  };
  const report = await fetchPandascoreReview("private-test-token", { fetcher, now });
  assert.equal(requested.length, 2);
  assert.match(requested[1], /\/tournaments\/123\/standings$/);
  assert.deepEqual(report.candidates[0].playoffStandingsLeader, {
    teamId: 9,
    teamName: "Example Team",
    sourceUrl: "https://api.pandascore.co/tournaments/123/standings",
  });
  assert.deepEqual(report.candidates[0].reviewRequired, [
    "tournament_champion", "major_or_s_classification", "offline_host_city", "venue",
  ]);
});
