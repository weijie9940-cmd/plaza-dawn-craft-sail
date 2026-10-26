import { test } from "node:test";
import assert from "node:assert/strict";
import { clusterProjectedMarkers } from "./marker-clusters.ts";

test("nearby cities merge while distant and selected cities remain separate", () => {
  const groups = clusterProjectedMarkers(
    [
      { id: "a", x: 0, y: 0 },
      { id: "b", x: 10, y: 10 },
      { id: "c", x: 100, y: 100 },
      { id: "selected", x: 4, y: 4, protected: true },
    ],
    32,
  );
  assert.deepEqual(groups, [["a", "b"], ["c"], ["selected"]]);
});
test("clusters cannot chain across an entire region and preserve every city exactly once", () => {
  const input = [
    { id: "a", x: 0, y: 0 },
    { id: "b", x: 25, y: 0 },
    { id: "c", x: 50, y: 0 },
  ];
  const groups = clusterProjectedMarkers(input, 32);
  assert.deepEqual(groups, [["a", "b"], ["c"]]);
  assert.deepEqual(groups.flat().sort(), input.map((p) => p.id).sort());
  assert.deepEqual(clusterProjectedMarkers([...input].reverse(), 32), groups);
});
