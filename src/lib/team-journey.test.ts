import test from "node:test";
import assert from "node:assert/strict";
import { teamJourney } from "./team-journey.ts";
import { S_TIER_CITIES, championKey } from "../data/s-tier-events.ts";

test("team journey counts mapped championships and cities without duplicates", () => {
  const journey = teamJourney("navi", 2026);
  assert.equal(journey.title, "Natus Vincere");
  assert.equal(journey.events.length, 18);
  assert.equal(journey.cityCount, 14);
  assert.equal(
    journey.majorCount,
    journey.events.filter((row) => row.event.tier === "Major").length,
  );
  assert.equal(new Set(journey.events.map((row) => row.id)).size, 18);
  for (const row of journey.events) {
    assert.equal(championKey(row.event.champion), "navi");
    assert.ok(S_TIER_CITIES.some((city) => city.id === row.cityId));
  }
});

test("journey follows the selected year and lists newest victories first", () => {
  const journey = teamJourney("navi", 2021);
  assert.ok(journey.events.length > 0);
  assert.ok(journey.events.every((row) => row.event.year <= 2021));
  const stamps = journey.events.map((row) => row.event.year * 100 + row.event.month);
  assert.deepEqual(
    stamps,
    [...stamps].sort((a, b) => b - a),
  );
  const stockholm = journey.events.find((row) => row.event.name === "PGL Major Stockholm 2021");
  assert.equal(stockholm?.id, "2021-11-pgl-major-stockholm-2021");
});

test("no victories in the selected period returns an empty journey, retaining the team", () => {
  const journey = teamJourney("vitality", 2013);
  assert.equal(journey.title, "Team Vitality");
  assert.equal(journey.cityCount, 0);
  assert.equal(journey.majorCount, 0);
  assert.deepEqual(journey.events, []);
});
