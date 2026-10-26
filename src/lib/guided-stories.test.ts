import assert from "node:assert/strict";
import test from "node:test";
import { S_TIER_CITIES, STIER_YEAR_MAX } from "../data/s-tier-events.ts";
import { clampStoryStep, getStory, STORY_OPTIONS } from "./guided-stories.ts";

test("guided routes use real events in chronological, distinct-city stops", () => {
  assert.deepEqual(STORY_OPTIONS.map((option) => option.id), [
    "majors", "navi", "astralis", "faze", "vitality", "fnatic",
  ]);
  for (const option of STORY_OPTIONS) {
    const story = getStory(option.id);
    assert.equal(story.id, option.id);
    assert.ok(story.stops.length >= 4 && story.stops.length <= 5, option.id);
    assert.equal(new Set(story.stops.map((stop) => stop.cityId)).size, story.stops.length);
    for (const stop of story.stops) {
      const city = S_TIER_CITIES.find((row) => row.id === stop.cityId);
      assert.ok(city, stop.cityId);
      assert.ok(city.events.some((event) => event === stop.event), stop.event.name);
      assert.equal(stop.cityZh, city.cityZh);
      assert.equal(stop.lat, city.lat);
      assert.equal(stop.lng, city.lng);
      assert.ok(stop.event.year <= STIER_YEAR_MAX);
      assert.ok(stop.caption.includes(stop.event.champion));
    }
    const dates = story.stops.map((stop) => stop.event.year * 12 + stop.event.month);
    assert.deepEqual(dates, [...dates].sort((a, b) => a - b));
  }
});

test("story navigation clamps at both ends, including an empty archive", () => {
  assert.equal(clampStoryStep(0, -1, 5), 0);
  assert.equal(clampStoryStep(0, 1, 5), 1);
  assert.equal(clampStoryStep(4, 1, 5), 4);
  assert.equal(clampStoryStep(3, -2, 5), 1);
  assert.equal(clampStoryStep(2, 1, 0), 0);
});

test("missing curated events are omitted and sparse team archives keep only real stops", () => {
  const city = S_TIER_CITIES.find((row) =>
    row.events.some((event) => event.name === "DreamHack Winter 2013"),
  );
  assert.ok(city);
  const majors = getStory("majors", [city]);
  assert.equal(majors.stops.length, 1);
  assert.equal(majors.stops[0].event.name, "DreamHack Winter 2013");
  const team = getStory("fnatic", [city]);
  assert.ok(team.stops.length <= 1);
  for (const stop of team.stops) assert.equal(stop.cityId, city.id);
});

test("a newly synced championship does not silently rewrite curated team chapters", () => {
  const original = getStory("navi").stops.map((stop) => stop.eventId);
  const sample = S_TIER_CITIES[0].events[0];
  const expanded = getStory("navi", [...S_TIER_CITIES, {
    id: "future-host",
    city: "Future host",
    cityZh: "新举办地",
    lat: 10,
    lng: 10,
    holy: false,
    events: [{ ...sample, year: 2027, month: 1, name: "New championship", cityEn: "Future host", cityZh: "新举办地", champion: "Natus Vincere" }],
  }]);
  assert.deepEqual(expanded.stops.map((stop) => stop.eventId), original);
});
