import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { X } from "lucide-react";
import { COUNTRY_BY_ISO, flyTargetForCountry } from "@/data/countries";
import { majorEventId } from "@/data/major-trophy-photos";
import { S_TIER_EVENTS } from "@/data/s-tier-events";
import { countryFlag, teamSnapshot, type TeamSnapshot } from "@/data/team-snapshots";
import { cn } from "@/lib/utils";
import { useGlobeStore } from "@/store/globe-store";

const DESKTOP_QUERY = "(min-width: 640px)";

function subscribeDesktop(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function useIsDesktop() {
  return useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => true,
  );
}

const CONFIDENCE_LABEL = { high: "高", medium: "中", low: "低" } as const;

export function CountryOnGlobe({
  iso,
  className,
  children,
}: {
  iso: string;
  className?: string;
  children: ReactNode;
}) {
  const target = flyTargetForCountry(iso);
  if (!target) {
    return <span className={className}>{children}</span>;
  }
  return (
    <button
      type="button"
      title="在地球上查看"
      className={cn(
        "cursor-pointer rounded-md underline-offset-2 hover:bg-white/10 hover:text-marker-major hover:underline",
        className,
      )}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        const store = useGlobeStore.getState();
        store.requestFlyTo(target.lat, target.lng, 1.82);
        store.setHighlightIso(iso);
      }}
    >
      {children}
    </button>
  );
}

function sourceLinks(sources: string[]) {
  const seen = new Map<string, string>();
  for (const url of sources) {
    let host = url;
    try {
      host = new URL(url).hostname.replace(/^www\./, "");
    } catch {
      /* keep the raw string */
    }
    if (!seen.has(host)) seen.set(host, url);
  }
  return [...seen.entries()];
}

export function TeamSnapshotView({
  snapshot,
  eventName,
  onClose,
  variant,
}: {
  snapshot: TeamSnapshot;
  eventName: string;
  onClose?: () => void;
  variant: "side" | "inline";
}) {
  return (
    <div
      data-testid="team-snapshot"
      data-snapshot-event-id={snapshot.eventId}
      className={
        variant === "side"
          ? "pointer-events-auto relative w-[min(100vw-2.5rem,22rem)] max-h-[calc(100dvh-20.5rem)] overflow-y-auto rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]"
          : "mt-2 rounded-lg bg-surface-2 p-3"
      }
      onWheel={(event) => event.stopPropagation()}
    >
      {variant === "side" && onClose ? (
        <button
          type="button"
          onClick={onClose}
          aria-label="关闭战队快照"
          title="关闭战队快照"
          className="absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-md border border-white/30 bg-surface-2 text-fg hover:bg-white/10"
        >
          <X className="size-4" />
        </button>
      ) : null}
      <div className={variant === "side" ? "pr-10" : undefined}>
        <p className="text-xs font-medium tracking-wide text-marker-major uppercase">战队快照</p>
        <h2 className="mt-1 font-display text-xl font-medium tracking-tight text-fg">{snapshot.team}</h2>
        <p className="mt-1 text-sm text-fg-muted">
          {eventName} · 开赛 {snapshot.eventStartDate}
        </p>
      </div>

      <section className="mt-3">
        <h3 className="text-xs text-fg-subtle">HLTV 世界排名</h3>
        <Ranking snapshot={snapshot} />
      </section>

      <section className="mt-3">
        <h3 className="text-xs text-fg-subtle">出场选手</h3>
        <ul className="mt-2 grid grid-cols-2 gap-2">
          {snapshot.roster.map((player) => {
            const countryZh = COUNTRY_BY_ISO.get(player.country)?.nameZh ?? player.country;
            const cardClass =
              variant === "inline"
                ? "block min-w-0 rounded-lg bg-white/5 px-2 py-1.5"
                : "block min-w-0 rounded-lg bg-surface-2 px-2 py-1.5";
            return (
              <li key={player.nick} className="min-w-0">
                <div className={cardClass}>
                  <p className="flex min-w-0 items-center text-sm font-medium text-fg">
                    <CountryOnGlobe
                      iso={player.country}
                      className="mr-1 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center"
                    >
                      <span aria-label={player.country}>{countryFlag(player.country)}</span>
                    </CountryOnGlobe>
                    {player.hltvPlayerUrl !== null ? (
                      <a
                        href={player.hltvPlayerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={
                          player.standIn ? `在 HLTV 查看 ${player.nick}（替补）` : `在 HLTV 查看 ${player.nick}`
                        }
                        aria-label={player.standIn ? `${player.nick}（替补）` : player.nick}
                        className="min-w-0 truncate underline-offset-2 hover:underline"
                      >
                        {player.nick}
                      </a>
                    ) : (
                      <span
                        aria-label={player.standIn ? `${player.nick}（替补）` : player.nick}
                        className="min-w-0 truncate"
                      >
                        {player.nick}
                      </span>
                    )}
                    {player.standIn ? (
                      <span className="ml-1 shrink-0 rounded bg-white/10 px-1 text-[10px] font-normal text-fg-muted">
                        替补
                      </span>
                    ) : null}
                  </p>
                  <CountryOnGlobe
                    iso={player.country}
                    className="flex min-h-11 w-full items-center truncate text-left text-xs text-fg-muted"
                  >
                    {countryZh}
                  </CountryOnGlobe>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {snapshot.coach ? (
        <p className="mt-3 flex flex-wrap items-center gap-x-1 text-sm text-fg">
          <span>教练 ·</span>
          {snapshot.coach.country ? (
            <CountryOnGlobe
              iso={snapshot.coach.country}
              className="inline-flex min-h-11 items-center gap-1 px-1"
            >
              <span aria-label={snapshot.coach.country}>{countryFlag(snapshot.coach.country)}</span>
              <span>
                {COUNTRY_BY_ISO.get(snapshot.coach.country)?.nameZh ?? snapshot.coach.country}
              </span>
            </CountryOnGlobe>
          ) : null}
          {snapshot.coach.hltvPlayerUrl ? (
            <a
              href={snapshot.coach.hltvPlayerUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`在 HLTV 查看 ${snapshot.coach.nick}`}
              className="underline-offset-2 hover:underline"
            >
              {snapshot.coach.nick}
            </a>
          ) : (
            snapshot.coach.nick
          )}
        </p>
      ) : null}

      <Honours snapshot={snapshot} />

      <footer className="mt-3 text-xs leading-relaxed text-fg-subtle">
        <p>
          数据整理自公开页面：
          {sourceLinks(snapshot.sources).map(([host, url], index) => (
            <span key={host}>
              {index > 0 ? "、" : ""}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                {host}
              </a>
            </span>
          ))}
        </p>
        <p>可信度：{CONFIDENCE_LABEL[snapshot.confidence]}</p>
        {snapshot.confidence !== "high" ? <p>部分数据来自存档，仅供参考</p> : null}
      </footer>
    </div>
  );
}

function Ranking({ snapshot }: { snapshot: TeamSnapshot }) {
  if (snapshot.ranking === null) {
    return <p className="mt-1 text-sm text-fg">无排名（HLTV 排名始于 2015 年 10 月）</p>;
  }
  return (
    <div className="mt-1">
      <p className="text-fg">
        <span className="font-mono text-2xl tabular-nums">#{snapshot.ranking.rank}</span>
        <span className="ml-2 text-sm">{snapshot.ranking.points} 分</span>
      </p>
      <p className="text-xs text-fg-muted">
        <a
          href={snapshot.ranking.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          {snapshot.ranking.rankingDate} 榜单（开赛前最近一期）
        </a>
        {snapshot.ranking.sourceType === "archive.org" ? " · 存档" : null}
      </p>
    </div>
  );
}

function Honours({ snapshot }: { snapshot: TeamSnapshot }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [snapshot.eventId]);
  const list = [...snapshot.honours.list].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const shown = open ? list : list.slice(0, 5);
  return (
    <section className="mt-3">
      <h3 className="text-sm text-fg">S 级及 Major 冠军 ({snapshot.honours.list.length})</h3>
      <p className="mt-1 text-xs text-fg-subtle">
        按战队（组织）统计，更名前的冠军不合并；含 Liquipedia 记为 S 级的冠军和全部 Major 冠军，截至本场（含本场）。灰色为本站地图未收录的赛事。
      </p>
      <ul className="mt-2 space-y-1">
        {shown.map((item) => (
          <li
            key={`${item.date}-${item.event}`}
            className={cn(
              "flex items-start justify-between gap-3 text-sm",
              item.inProject ? "text-fg" : "text-fg-muted",
            )}
          >
            <span className="min-w-0 break-words">{item.event}</span>
            <span className="shrink-0 font-mono text-xs text-fg-muted">{item.date}</span>
          </li>
        ))}
      </ul>
      {list.length > 5 ? (
        <button
          type="button"
          className="mt-2 text-xs text-marker-major underline-offset-2 hover:underline"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "收起" : `展开全部 (${list.length})`}
        </button>
      ) : null}
    </section>
  );
}

export function TeamSnapshotSidePanel() {
  const isDesktop = useIsDesktop();
  const teamSnapshotId = useGlobeStore((s) => s.teamSnapshotId);
  const setTeamSnapshotId = useGlobeStore((s) => s.setTeamSnapshotId);
  const snapshot = teamSnapshot(teamSnapshotId);
  if (!isDesktop || !snapshot) return null;
  const event = S_TIER_EVENTS.find((item) => majorEventId(item) === snapshot.eventId);
  return (
    <div className="pointer-events-auto absolute top-20 right-3 z-20 sm:right-5">
      <TeamSnapshotView
        snapshot={snapshot}
        eventName={event?.name ?? snapshot.eventId}
        variant="side"
        onClose={() => setTeamSnapshotId(null)}
      />
    </div>
  );
}
