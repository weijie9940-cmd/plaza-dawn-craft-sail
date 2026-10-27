import { test } from "node:test";
import assert from "node:assert/strict";
import { searchEsports } from "./explore-search.ts";

test("team abbreviations find a single canonical team and its winning cities", () => {
  const results = searchEsports(" NaVi ");
  const team = results.find((r) => r.kind === "team");
  assert.equal(team?.team, "navi");
  assert.equal(results.filter((r) => r.kind === "team" && r.team === "navi").length, 1);
  assert.ok(team && team.cityCount > 1);
});

test("cities are searchable in Chinese and without accents", () => {
  assert.equal(searchEsports("科隆").find((r) => r.kind === "city")?.label, "科隆");
  assert.equal(searchEsports("jonkoping").find((r) => r.kind === "city")?.label, "延雪平");
});

test("event searches carry the city, year and stable event identifier for navigation", () => {
  const result = searchEsports("PGL Major Stockholm").find((r) => r.kind === "event");
  assert.ok(result);
  assert.equal(result.year, 2021);
  assert.ok(result.eventId?.includes("2021"));
  assert.ok(result.cityId);
  assert.ok(Number.isFinite(result.lat));
});

test("multiword queries match across event metadata and limits are respected", () => {
  assert.ok(searchEsports("2022 cologne").some((r) => r.kind === "event"));
  assert.equal(searchEsports("", 8).length, 0);
  assert.equal(searchEsports("no-such-esports-team-xyz", 8).length, 0);
  assert.ok(searchEsports("major", 5).length <= 5);
});
