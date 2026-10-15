import { useEffect, useRef, useState, type RefObject } from "react";
import { X } from "lucide-react";
import { COUNTRY_BY_ISO } from "@/data/countries";
import { S_TIER_EVENTS, championKey } from "@/data/s-tier-events";
import { countryFlag } from "@/data/team-snapshots";
import { WORLD_RANKING, type WorldRankingTeam } from "@/data/world-ranking";
import { cn } from "@/lib/utils";
import { useGlobeStore } from "@/store/globe-store";
import { useIsDesktop } from "./TeamSnapshotPanel";

const TEAMS_ON_MAP = new Set(S_TIER_EVENTS.map((ev) => championKey(ev.champion)));

function flagMark(iso: string) {
  const flag = countryFlag(iso);
  // XK 的区域指示符在部分系统上是空白，flag 槽改显示代码。
  if (!flag || iso === "XK") return iso;
  return flag;
}

function changeParts(change: string) {
  if (change.startsWith("+")) {
    const n = change.slice(1);
    return { glyph: `▲${n}`, className: "text-emerald-400", title: `较上期上升 ${n} 名` };
  }
  if (change.startsWith("-")) {
    const n = change.slice(1);
    return { glyph: `▼${n}`, className: "text-red-400", title: `较上期下降 ${n} 名` };
  }
  return { glyph: "–", className: "text-fg-subtle", title: "持平" };
}

export function WorldRankingPanel() {
  const rankingOpen = useGlobeStore((s) => s.rankingOpen);
  const setRankingOpen = useGlobeStore((s) => s.setRankingOpen);
  const isDesktop = useIsDesktop();
  const [openRank, setOpenRank] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (!rankingOpen) return null;

  return (
    <aside
      data-testid="world-ranking"
      className={cn(
        "pointer-events-auto absolute top-20 z-20 flex flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
        isDesktop
          ? "right-3 w-[min(100vw-2.5rem,24rem)] max-h-[calc(100dvh-20.5rem)] sm:right-5"
          : "right-3 left-3 max-h-[calc(100dvh-23rem)]",
      )}
      onWheel={(event) => event.stopPropagation()}
    >
      <header className="relative shrink-0 px-4 pt-4 pb-3">
        <button
          type="button"
          onClick={() => setRankingOpen(false)}
          aria-label="关闭世界排名"
          title="关闭世界排名"
          className="absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-md border border-white/30 bg-surface-2 text-fg hover:bg-white/10"
        >
          <X className="size-4" />
        </button>
        <div className="pr-10">
          <p className="text-xs font-medium tracking-wide text-marker-major uppercase">HLTV 世界排名</p>
          <h2 className="mt-1 font-display text-xl font-medium tracking-tight text-fg">
            {WORLD_RANKING.rankingDate}
          </h2>
          <a
            href={WORLD_RANKING.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-xs text-fg-muted underline-offset-2 hover:underline"
          >
            查看 HLTV 原榜单
          </a>
        </div>
      </header>
      <div ref={scrollerRef} className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
        <ol>
          {WORLD_RANKING.teams.map((team) => (
            <RankingRow
              key={team.rank}
              team={team}
              open={openRank === team.rank}
              scrollerRef={scrollerRef}
              onToggle={() => setOpenRank((current) => (current === team.rank ? null : team.rank))}
            />
          ))}
        </ol>
      </div>
    </aside>
  );
}

function RankingRow({
  team,
  open,
  onToggle,
  scrollerRef,
}: {
  team: WorldRankingTeam;
  open: boolean;
  onToggle: () => void;
  scrollerRef: RefObject<HTMLDivElement | null>;
}) {
  const rowRef = useRef<HTMLLIElement>(null);
  const change = changeParts(team.change);

  useEffect(() => {
    if (!open || !rowRef.current || !scrollerRef.current) return;
    const row = rowRef.current;
    const scroller = scrollerRef.current;
    const rowBox = row.getBoundingClientRect();
    const box = scroller.getBoundingClientRect();
    if (rowBox.top < box.top) {
      scroller.scrollTop -= box.top - rowBox.top;
    } else if (rowBox.bottom > box.bottom) {
      scroller.scrollTop += Math.min(rowBox.bottom - box.bottom, rowBox.top - box.top);
    }
  }, [open, scrollerRef]);

  return (
    <li ref={rowRef} className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center gap-2 px-2 py-2 text-left hover:bg-white/5"
        onClick={onToggle}
      >
        <span className="w-9 shrink-0 font-mono text-sm tabular-nums text-fg-muted">#{team.rank}</span>
        <span className="min-w-0 flex-1 truncate text-sm font-medium text-fg">{team.team}</span>
        <span className="shrink-0 font-mono text-sm tabular-nums text-fg">
          {team.points}
          <span className="ml-0.5 text-[10px] font-sans text-fg-subtle">分</span>
        </span>
        <span
          className={cn("w-10 shrink-0 text-right font-mono text-xs tabular-nums", change.className)}
          title={change.title}
        >
          {change.glyph}
        </span>
      </button>
      {open ? <TeamDetail team={team} /> : null}
    </li>
  );
}

function TeamDetail({ team }: { team: WorldRankingTeam }) {
  const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
  const setHighlightedTeam = useGlobeStore((s) => s.setHighlightedTeam);
  const key = championKey(team.teamKey);
  const onMap = TEAMS_ON_MAP.has(key);
  const highlighted = highlightedTeam === key;

  return (
    <div className="mb-2 rounded-lg bg-surface-2 p-3">
      <section>
        <h3 className="text-xs text-fg-subtle">出场选手</h3>
        <ul className="mt-2 grid grid-cols-2 gap-2">
          {team.roster.map((player) => {
            const countryZh = COUNTRY_BY_ISO.get(player.country)?.nameZh ?? player.country;
            const content = (
              <>
                <p className="flex min-w-0 items-center text-sm font-medium text-fg">
                  <span className="mr-1 shrink-0" aria-label={player.country}>
                    {flagMark(player.country)}
                  </span>
                  <span className="min-w-0 truncate">{player.nick}</span>
                </p>
                <p className="truncate text-xs text-fg-muted">{countryZh}</p>
              </>
            );
            return (
              <li key={player.nick} className="min-w-0">
                {player.hltvPlayerUrl !== null ? (
                  <a
                    href={player.hltvPlayerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`在 HLTV 查看 ${player.nick}`}
                    className="block min-w-0 rounded-lg bg-white/5 px-2 py-1.5 hover:bg-white/10"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="block min-w-0 rounded-lg bg-white/5 px-2 py-1.5">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {team.coach ? (
        <p className="mt-3 text-sm text-fg">
          教练 ·{" "}
          <span className="mr-1" aria-label={team.coach.country}>
            {flagMark(team.coach.country)}
          </span>
          {team.coach.nick}
        </p>
      ) : null}

      <Honours team={team} />

      <p className="mt-3 text-xs leading-relaxed text-fg-subtle">
        <a
          href={team.teamPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          HLTV 战队页
        </a>
        <span> · </span>
        <a
          href={team.liquipediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          Liquipedia
        </a>
      </p>
      {team.confidence !== "high" ? (
        <p className="mt-1 text-xs text-fg-subtle">荣誉列表经人工补全，仅供参考</p>
      ) : null}
      {onMap ? (
        <button
          type="button"
          aria-pressed={highlighted}
          className="mt-2 text-xs text-marker-major underline-offset-2 hover:underline"
          onClick={() => setHighlightedTeam(highlighted ? null : key)}
        >
          在地图上高亮
        </button>
      ) : null}
    </div>
  );
}

function Honours({ team }: { team: WorldRankingTeam }) {
  const [open, setOpen] = useState(false);
  const list = [...team.honours.list].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const shown = open ? list : list.slice(0, 5);

  return (
    <section className="mt-3">
      <h3 className="text-sm text-fg">S 级及 Major 冠军 ({list.length})</h3>
      <p className="mt-1 text-xs text-fg-subtle">
        按战队（组织）统计，更名前的冠军不合并；含 Liquipedia 记为 S 级的冠军和全部 Major 冠军。
      </p>
      {list.length === 0 ? (
        <p className="mt-2 text-sm text-fg-muted">暂无 S 级或 Major 冠军</p>
      ) : (
        <ul className="mt-2 space-y-1">
          {shown.map((item) => (
            <li
              key={`${item.date}-${item.event}`}
              className="flex items-start justify-between gap-3 text-sm"
            >
              <span
                className={cn(
                  "min-w-0 break-words",
                  item.tier === "Major" ? "text-marker-major" : "text-fg",
                )}
              >
                {item.event}
                {item.tier === "Major" ? (
                  <span className="ml-1 inline-block shrink-0 rounded bg-white/10 px-1 text-[10px] font-normal text-fg-muted">
                    Major
                  </span>
                ) : null}
              </span>
              <span className="shrink-0 font-mono text-xs text-fg-muted">{item.date}</span>
            </li>
          ))}
        </ul>
      )}
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
