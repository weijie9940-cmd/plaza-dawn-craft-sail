import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile, rm, readdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { runSync, validateSnapshot } from "../../scripts/data-sync.ts";
import { emptySnapshot } from "./data-sync.ts";

test("invalid input cannot replace a previously published snapshot", async () => {
  const dir = await mkdtemp(join(tmpdir(), "orbital-sync-"));
  try {
    const path = join(dir, "current.json");
    const old = JSON.stringify(emptySnapshot());
    await writeFile(path, old);
    await assert.rejects(runSync({ events: { invalid: true }, path }));
    assert.equal(await readFile(path, "utf8"), old);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
test("no source input is a no-op rather than a false successful update", async () => {
  const result = await runSync({});
  assert.equal(result.status, "not-configured");
});
test("snapshot validation rejects undeclared or inconsistent published metadata", () => {
  assert.doesNotThrow(() => validateSnapshot(emptySnapshot()));
  assert.throws(() =>
    validateSnapshot({
      ...emptySnapshot(),
      eventSync: {
        lastSuccess: "2000-01-01T00:00:00Z",
        sourceAsOf: "2026-10-01T00:00:00Z",
        sourceName: "Test",
      },
    }),
  );
});

test("successful writes retain both revisions; an existing lock prevents concurrent overwrite", async () => {
  const dir = await mkdtemp(join(tmpdir(), "orbital-sync-"));
  try {
    const path = join(dir, "current.json");
    await writeFile(path, JSON.stringify(emptySnapshot()));
    const now = new Date("2026-10-22T12:00:00Z");
    const events = {
      schemaVersion: 1,
      kind: "events",
      asOf: "2026-10-22T12:00:00Z",
      sourceName: "Test",
      records: [],
    };
    const result = await runSync({ events, path, now });
    assert.equal(result.status, "updated");
    const saved = await readFile(path, "utf8");
    assert.equal(JSON.parse(saved).eventSync.lastSuccess, now.toISOString());
    assert.equal((await readdir(join(dir, "history"))).length, 2);
    await writeFile(`${path}.lock`, "test lock");
    await assert.rejects(runSync({ events, path, now }));
    assert.equal(await readFile(path, "utf8"), saved);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test("cumulative archive can exceed the per-request event batch limit", () => {
  const snapshot = emptySnapshot();
  snapshot.eventSync = {
    lastSuccess: "2026-10-22T12:00:00.000Z",
    sourceAsOf: "2026-10-22T12:00:00Z",
    sourceName: "Test",
  };
  snapshot.events = Array.from({ length: 501 }, (_, i) => ({
    sourceId: `test:${i}`,
    sourceUrl: "https://example.com/event",
    completed: true,
    resultType: "tournament_champion",
    endedAt: "2026-10-20T00:00:00Z",
    city: { id: "test-city", city: "Test City", cityZh: "测试城", lat: 30, lng: 120 },
    event: {
      year: 2026,
      month: 10,
      name: `Test Event ${i}`,
      cityZh: "测试城",
      cityEn: "Test City",
      venue: null,
      champion: "Natus Vincere",
      tier: "S",
      note: null,
    },
  }));
  assert.equal(validateSnapshot(snapshot, new Date("2026-10-23T00:00:00Z")).events.length, 501);
});
