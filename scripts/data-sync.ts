import { readFile, writeFile, rename, mkdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash, randomUUID } from "node:crypto";
import {
  mergeFeeds,
  emptySnapshot,
  snapshotSchema,
  type DataSnapshot,
} from "../src/lib/data-sync.ts";
import { BASE_S_TIER_EVENTS, BASE_CITY_METADATA } from "../src/data/s-tier-events.ts";
import { BASE_WORLD_RANKING } from "../src/data/world-ranking.ts";

const root = fileURLToPath(new URL("../", import.meta.url));
const defaultPath = join(root, "src/data/sync/current.json");
const baseline = {
  events: BASE_S_TIER_EVENTS,
  cities: BASE_CITY_METADATA,
  rankingDate: BASE_WORLD_RANKING.rankingDate,
};

export function validateSnapshot(input: unknown, now = new Date()): DataSnapshot {
  const snapshot = snapshotSchema.parse(input);
  for (const meta of [snapshot.eventSync, snapshot.rankingSync])
    if (
      meta &&
      (Date.parse(meta.sourceAsOf) > Date.parse(meta.lastSuccess) ||
        Date.parse(meta.lastSuccess) > now.getTime())
    )
      throw new Error("Invalid sync timestamps");
  if (
    (snapshot.events.length && !snapshot.eventSync) ||
    (snapshot.rankings.length && !snapshot.rankingSync)
  )
    throw new Error("Missing sync provenance");
  let replay = emptySnapshot();
  if (snapshot.eventSync)
    for (let offset = 0; offset < Math.max(1, snapshot.events.length); offset += 500)
      replay = mergeFeeds(
        replay,
        {
          events: {
            schemaVersion: 1,
            kind: "events",
            asOf: snapshot.eventSync.sourceAsOf,
            sourceName: snapshot.eventSync.sourceName,
            records: snapshot.events.slice(offset, offset + 500),
          },
        },
        baseline,
        now,
      );
  if (replay.events.length !== snapshot.events.length)
    throw new Error("Snapshot duplicates baseline archive");
  for (const ranking of snapshot.rankings)
    replay = mergeFeeds(
      replay,
      {
        rankings: {
          schemaVersion: 1,
          kind: "rankings",
          asOf: snapshot.rankingSync!.sourceAsOf,
          sourceName: "HLTV",
          ranking,
        },
      },
      baseline,
      now,
    );
  if (replay.rankings.length !== snapshot.rankings.length)
    throw new Error("Duplicate ranking editions");
  return snapshot;
}

/** Public normalized feed adapter. Credentials never enter output, browser code or logs. */
export async function fetchFeed(address: string, token?: string): Promise<unknown> {
  const url = new URL(address);
  if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash)
    throw new Error("Feed must use HTTPS with credentials supplied separately");
  const response = await fetch(url, {
    headers: { Accept: "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    redirect: "error",
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`Feed request failed (HTTP ${response.status})`);
  if (!response.headers.get("content-type")?.includes("application/json"))
    throw new Error("Feed is not JSON");
  if (Number(response.headers.get("content-length")) > 5_000_000)
    throw new Error("Feed exceeds size limit");
  const reader = response.body?.getReader();
  if (!reader) throw new Error("Empty feed response");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      size += part.value.length;
      if (size > 5_000_000) throw new Error("Feed exceeds size limit");
      chunks.push(part.value);
    }
  } finally {
    await reader.cancel();
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

export async function runSync(options: {
  events?: unknown;
  rankings?: unknown;
  path?: string;
  now?: Date;
}) {
  if (options.events === undefined && options.rankings === undefined)
    return { status: "not-configured" as const };
  const path = options.path ?? defaultPath;
  const now = options.now ?? new Date();
  const lock = `${path}.lock`;
  await writeFile(lock, String(process.pid), { flag: "wx" });
  try {
    const previous = validateSnapshot(JSON.parse(await readFile(path, "utf8")), now);
    const next = mergeFeeds(previous, options, baseline, now);
    validateSnapshot(next, now);
    const data = JSON.stringify(next, null, 2) + "\n";
    const revision = createHash("sha256").update(data).digest("hex").slice(0, 16);
    const history = join(dirname(path), "history");
    await mkdir(history, { recursive: true });
    // Save the prior and candidate revisions before changing the single public pointer.
    for (const value of [previous, next]) {
      const bytes = JSON.stringify(value, null, 2) + "\n";
      const hash = createHash("sha256").update(bytes).digest("hex").slice(0, 16);
      try {
        await writeFile(join(history, `${hash}.json`), bytes, { flag: "wx" });
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;
      }
    }
    const temporary = `${path}.${randomUUID()}.tmp`;
    try {
      await writeFile(temporary, data, { flag: "wx" });
      await rename(temporary, path);
    } finally {
      await rm(temporary, { force: true });
    }
    return {
      status: "updated" as const,
      revision,
      eventCount: next.events.length,
      rankingEditions: next.rankings.length,
    };
  } finally {
    await rm(lock, { force: true });
  }
}

async function main() {
  const args = process.argv.slice(2);
  if (args[0] === "--validate") {
    validateSnapshot(JSON.parse(await readFile(defaultPath, "utf8")));
    console.log("Data snapshot validation passed");
    return;
  }
  const kind = args[0] ?? "all";
  if (!["all", "events", "rankings"].includes(kind))
    throw new Error("Use all, events, rankings, or --validate");
  if (
    kind === "all" &&
    Boolean(process.env.ORBITAL_EVENTS_FEED_URL) !== Boolean(process.env.ORBITAL_RANKINGS_FEED_URL)
  )
    throw new Error("All mode requires both feeds; choose a single kind instead");
  const feeds: { events?: unknown; rankings?: unknown } = {};
  for (const name of ["events", "rankings"] as const) {
    if (kind !== "all" && kind !== name) continue;
    const key = name === "events" ? "ORBITAL_EVENTS_FEED_URL" : "ORBITAL_RANKINGS_FEED_URL";
    const address = process.env[key];
    if (address)
      feeds[name] = await fetchFeed(address, process.env[`${key.replace("_URL", "")}_TOKEN`]);
  }
  const result = await runSync(feeds);
  console.log(JSON.stringify(result));
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url))
  main().catch(() => {
    // Do not print upstream payloads, URLs or authorization values on failure.
    console.error(
      "Data sync failed validation or transport. Previous snapshot retained. Check feed schema and provider status.",
    );
    process.exitCode = 1;
  });
