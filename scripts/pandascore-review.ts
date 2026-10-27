import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const endpoint = new URL("https://api.pandascore.co/csgo/tournaments/past");
endpoint.searchParams.set("filter[tier]", "s,a");
endpoint.searchParams.set("sort", "-end_at");
endpoint.searchParams.set("page[size]", "100");

type Candidate = {
  sourceId: string;
  sourceUrl: string;
  name: string;
  leagueName: string | null;
  serieName: string | null;
  serieFullName: string | null;
  stageWinnerName: string | null;
  playoffStandingsLeader: { teamId: number; teamName: string; sourceUrl: string } | null;
  standingsStatus: "not_applicable" | "not_checked" | "available" | "unavailable";
  tier: "s" | "a";
  videogameTitle: string | null;
  beginAt: string | null;
  endAt: string;
  reviewRequired: string[];
};

function object(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : null;
}

const optionalName = (value: unknown) =>
  typeof value === "string" && value.trim() ? value.trim() : null;

async function readBoundedJson(response: Response, limit: number): Promise<unknown> {
  if (Number(response.headers.get("content-length")) > limit)
    throw new Error("PandaScore response exceeded size limit");
  const reader = response.body?.getReader();
  if (!reader) throw new Error("PandaScore response was empty");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      size += part.value.byteLength;
      if (size > limit) throw new Error("PandaScore response exceeded size limit");
      chunks.push(part.value);
    }
  } finally {
    await reader.cancel().catch(() => undefined);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

export function buildPandascoreReview(payload: unknown, now = new Date()) {
  if (!Array.isArray(payload)) throw new Error("PandaScore tournament list is not an array");
  const candidates: Candidate[] = [];
  const seen = new Set<number>();
  for (const value of payload) {
    const row = object(value);
    if (!row) continue;
    const id = row.id;
    const endAt = row.end_at;
    if (
      typeof id !== "number" || !Number.isSafeInteger(id) || id <= 0 || seen.has(id) ||
      typeof row.name !== "string" || !row.name.trim() || (row.tier !== "s" && row.tier !== "a") ||
      typeof endAt !== "string" || !Number.isFinite(Date.parse(endAt)) ||
      Date.parse(endAt) > now.getTime()
    ) continue;
    seen.add(id);
    const title = object(row.videogame_title);
    const league = object(row.league);
    const serie = object(row.serie);
    const stageWinner = object(row.winner);
    candidates.push({
      sourceId: `pandascore:tournament:${id}`,
      sourceUrl: `https://api.pandascore.co/tournaments/${id}`,
      name: row.name.trim(),
      leagueName: optionalName(league?.name),
      serieName: optionalName(serie?.name),
      serieFullName: optionalName(serie?.full_name),
      stageWinnerName: optionalName(stageWinner?.name),
      playoffStandingsLeader: null,
      standingsStatus: /playoff|final/i.test(row.name) ? "not_checked" : "not_applicable",
      tier: row.tier,
      videogameTitle: typeof title?.slug === "string" ? title.slug :
        typeof row.videogame_title === "string" ? row.videogame_title : null,
      beginAt: typeof row.begin_at === "string" ? row.begin_at : null,
      endAt,
      reviewRequired: ["tournament_champion", "major_or_s_classification", "offline_host_city", "venue"],
    });
  }
  return { fetchedAt: now.toISOString(), candidates };
}

export async function fetchPandascoreReview(
  token: string,
  options: { fetcher?: typeof fetch; now?: Date } = {},
) {
  if (!token.trim()) throw new Error("PANDASCORE_API_TOKEN is not configured");
  const response = await (options.fetcher ?? fetch)(endpoint, {
    headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
    redirect: "error",
    signal: AbortSignal.timeout(45_000),
  });
  if (!response.ok) throw new Error(`PandaScore request failed (HTTP ${response.status})`);
  if (!response.headers.get("content-type")?.includes("application/json"))
    throw new Error("PandaScore returned non-JSON content");
  const report = buildPandascoreReview(await readBoundedJson(response, 8_000_000), options.now);
  await Promise.all(report.candidates.filter((candidate) => candidate.standingsStatus === "not_checked")
    .slice(0, 8).map(async (candidate) => {
      const id = candidate.sourceId.split(":").at(-1);
      const standingsUrl = `https://api.pandascore.co/tournaments/${id}/standings`;
      try {
        const standingsResponse = await (options.fetcher ?? fetch)(standingsUrl, {
          headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
          redirect: "error",
          signal: AbortSignal.timeout(15_000),
        });
        if (!standingsResponse.ok || !standingsResponse.headers.get("content-type")?.includes("application/json"))
          throw new Error("Standings unavailable");
        const standings = await readBoundedJson(standingsResponse, 1_000_000);
        if (!Array.isArray(standings)) throw new Error("Standings invalid");
        const leaders = standings.filter((row) => object(row)?.rank === 1);
        if (leaders.length !== 1) throw new Error("Standings leader ambiguous");
        const team = object(object(leaders[0])?.team);
        if (typeof team?.id !== "number" || !Number.isSafeInteger(team.id) || team.id <= 0 ||
          !optionalName(team.name)) throw new Error("Standings leader invalid");
        candidate.playoffStandingsLeader = {
          teamId: team.id,
          teamName: optionalName(team.name)!,
          sourceUrl: standingsUrl,
        };
        candidate.standingsStatus = "available";
      } catch {
        candidate.standingsStatus = "unavailable";
      }
    }));
  const remainingHeader = response.headers.get("x-rate-limit-remaining");
  const remaining = remainingHeader === null ? NaN : Number(remainingHeader);
  return { ...report, rateLimitRemaining: Number.isFinite(remaining) ? remaining : null };
}

async function main() {
  let token = process.env.PANDASCORE_API_TOKEN ?? "";
  if (process.argv.includes("--stdin")) {
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
    token = await new Promise<string>((resolve, reject) => {
      let value = "";
      process.stdin.setEncoding("utf8");
      process.stdin.on("data", (chunk: string) => {
        value += chunk;
        if (value.length > 512) { reject(new Error("Token input was too long")); return; }
        if (value.includes("\n") || value.includes("\r")) {
          if (process.stdin.isTTY) process.stdin.setRawMode(false);
          process.stdin.pause();
          resolve(value.split(/[\r\n]/, 1)[0]);
        }
      });
      process.stdin.once("end", () => reject(new Error("Token input was empty")));
    });
  }
  const report = await fetchPandascoreReview(token);
  const target = join(root, "screenshots", "pandascore-review.json");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, JSON.stringify(report, null, 2) + "\n", { flag: "w" });
  console.log(`PandaScore review prepared: ${report.candidates.length} candidates; ${report.rateLimitRemaining ?? "unknown"} requests remaining.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url))
  main().catch((error: Error) => {
    // Never print upstream payloads, request headers, or the token.
    const safeMessages = new Set([
      "PANDASCORE_API_TOKEN is not configured",
      "PandaScore returned non-JSON content",
      "PandaScore response exceeded size limit",
      "PandaScore tournament list is not an array",
      "Token input was empty",
      "Token input was too long",
    ]);
    console.error(error.message.startsWith("PandaScore request failed (HTTP") || safeMessages.has(error.message) ? error.message :
      error.name === "TimeoutError" ? "PandaScore request timed out; no archive data was changed." :
      error.name === "SyntaxError" ? "PandaScore returned invalid JSON; no archive data was changed." :
      "PandaScore review failed; no archive data was changed.");
    process.exitCode = 1;
  });
