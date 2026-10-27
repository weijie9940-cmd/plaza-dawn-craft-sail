import test from "node:test";
import assert from "node:assert/strict";
import {
  compareTeams,
  playbackStep,
  playbackStart,
  comparisonCityList,
} from "./team-comparison.ts";

test("comparison partitions cities by actual victories, keeping both sides' events", () => {
  const result = compareTeams(["navi", "astralis"], 2026);
  assert.equal(result.sides[0].events.length, 18);
  assert.equal(result.sides[0].cityCount, 14);
  assert.ok(result.cities.some((city) => city.membership === "both"));
  for (const city of result.cities) {
    assert.ok(city.events[0].length || city.events[1].length);
    assert.equal(
      city.membership === "both",
      Boolean(city.events[0].length && city.events[1].length),
    );
  }
  assert.equal(
    result.cities.reduce((sum, city) => sum + city.events[0].length, 0),
    result.sides[0].events.length,
  );
  assert.equal(
    result.cities.reduce((sum, city) => sum + city.events[1].length, 0),
    result.sides[1].events.length,
  );
});
test("year filters both sides; swapping teams swaps statistics and city records", () => {
  const original = compareTeams(["navi", "astralis"], 2021);
  const swapped = compareTeams(["astralis", "navi"], 2021);
  assert.deepEqual(original.sides[0], swapped.sides[1]);
  assert.ok(original.sides.every((side) => side.events.every((row) => row.event.year <= 2021)));
  assert.equal(
    original.newWins,
    original.sides.flatMap((side) => side.events).filter((row) => row.event.year === 2021).length,
  );
});
test("an empty year preserves both teams with zero counts", () => {
  const result = compareTeams(["navi", "astralis"], 2013);
  assert.equal(result.cities.length, 0);
  assert.equal(result.sides[0].events.length, 0);
  assert.equal(result.sides[1].events.length, 0);
});
test("playback restarts at archive start only when already at the end", () => {
  assert.equal(playbackStart(2026), 2013);
  assert.equal(playbackStart(2020), 2020);
});
test("playback advances one year and stops exactly at the archive end", () => {
  assert.deepEqual(playbackStep(2020), { year: 2021, playing: true });
  assert.deepEqual(playbackStep(2025), { year: 2026, playing: false });
  assert.deepEqual(playbackStep(2026), { year: 2026, playing: false });
});

test("common-city filtering intersects cluster selection without changing aggregate statistics", () => {
  const result = compareTeams(["navi", "astralis"], 2026);
  const before = structuredClone(result);
  const common = comparisonCityList(result.cities, true, "total");
  assert.equal(common.length, 3);
  assert.ok(common.every((city) => city.events[0].length && city.events[1].length));
  assert.deepEqual(
    comparisonCityList(result.cities, true, "total", [common[0].id]).map((city) => city.id),
    [common[0].id],
  );
  assert.deepEqual(comparisonCityList(result.cities, true, "total", ["missing"]), []);
  assert.deepEqual(result, before);
});

test("championship sorting follows either team, and latest sorting respects the filtered year", () => {
  const result = compareTeams(["navi", "astralis"], 2021);
  for (const sort of ["total", "a", "b", "latest"] as const) {
    const cities = comparisonCityList(result.cities, false, sort);
    const values = cities.map((city) =>
      sort === "a"
        ? city.events[0].length
        : sort === "b"
          ? city.events[1].length
          : sort === "total"
            ? city.events[0].length + city.events[1].length
            : Math.max(...city.events.flat().map((row) => row.event.year * 12 + row.event.month)),
    );
    assert.deepEqual(
      values,
      [...values].sort((a, b) => b - a),
    );
    assert.ok(cities.every((city) => city.events.flat().every((row) => row.event.year <= 2021)));
  }
  assert.deepEqual(comparisonCityList([], true, "latest"), []);
});
