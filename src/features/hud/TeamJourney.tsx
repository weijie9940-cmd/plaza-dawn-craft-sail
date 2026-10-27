import { ArrowLeft, MapPin, Trophy } from "lucide-react";
import { STIER_YEAR_MAX } from "@/data/s-tier-events";
import { teamJourney, type JourneyEvent } from "@/lib/team-journey";
import { useGlobeStore } from "@/store/globe-store";

export function visitJourneyEvent(row: JourneyEvent) {
  const s = useGlobeStore.getState();
  s.selectMarker({ kind: "stier", id: row.cityId });
  s.setTeamJourneyOpen(false);
  s.setFocusedEventId(row.id);
  s.setMobileDetailsExpanded(true);
  s.requestFlyTo(row.lat, row.lng, 1.62);
}

export function TeamJourney() {
  const s = useGlobeStore();
  if (!s.highlightedTeam) return null;
  const journey = teamJourney(s.highlightedTeam, s.sTierYear);
  return (
    <article className="team-journey p-4" aria-label={`${journey.title}夺冠历程`}>
      <p className="text-[11px] tracking-widest text-marker-major">
        夺冠历程 · 截至 {s.sTierYear} 年
      </p>
      <h2 className="mt-2 pr-10 font-display text-xl font-medium">{journey.title}</h2>
      <dl className="my-4 grid grid-cols-3 gap-3 border-y border-white/10 py-3">
        {[
          ["冠军", journey.events.length],
          ["Major", journey.majorCount],
          ["夺冠城市", journey.cityCount],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col">
            <dt className="order-2 mt-1 text-[11px] text-fg-muted">{label}</dt>
            <dd className="order-1 font-mono text-2xl tabular-nums text-marker-major">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mb-3 flex items-center justify-between text-xs text-fg-muted">
        <span>冠军足迹 · 由近及远</span>
        <span className="flex items-center gap-1">
          <MapPin className="size-3" />
          点击赛事定位
        </span>
      </div>
      {journey.events.length ? (
        <ol className="journey-events" aria-label="冠军赛事时间线">
          {journey.events.map((row) => (
            <li key={row.id}>
              <button
                type="button"
                className="journey-event"
                onClick={() => visitJourneyEvent(row)}
                aria-label={`${row.event.year}年${row.event.month}月 ${row.event.name}，定位${row.cityZh}`}
              >
                <time
                  className="font-mono text-[11px] tabular-nums text-fg-muted"
                  dateTime={`${row.event.year}-${String(row.event.month).padStart(2, "0")}`}
                >
                  {row.event.year}.{String(row.event.month).padStart(2, "0")}
                </time>
                <span className="mt-1 flex items-start gap-2 text-sm leading-5">
                  <span className="flex-1">{row.event.name}</span>
                  {row.event.tier === "Major" ? (
                    <Trophy
                      className="mt-0.5 size-3.5 shrink-0 text-marker-major"
                      aria-label="Major 冠军"
                    />
                  ) : null}
                </span>
                <span className="mt-1 block text-xs text-fg-muted">
                  {row.cityZh}
                  <span className="float-right text-marker-major">查看赛事 ›</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <div className="py-5 text-sm leading-6 text-fg-muted">
          <p>截至 {s.sTierYear} 年，当前档案尚无这支队伍的夺冠记录。</p>
          <button
            type="button"
            className="mt-3 min-h-11 text-marker-major"
            onClick={() => s.setSTierYear(STIER_YEAR_MAX)}
          >
            查看全部年份的足迹 →
          </button>
        </div>
      )}
      <p className="mt-4 text-[10px] leading-5 text-fg-subtle">
        按当前地图收录的线下 S 级及 Major 赛事统计。
      </p>
    </article>
  );
}

export function BackToTeamJourney() {
  const s = useGlobeStore();
  return (
    <button
      type="button"
      className="flex min-h-11 w-full items-center gap-2 border-b border-white/10 px-4 text-left text-xs text-marker-major"
      onClick={() => {
        s.setTeamJourneyOpen(true);
        s.setTeamSnapshotId(null);
      }}
    >
      <ArrowLeft className="size-3.5" />
      返回队伍夺冠历程
    </button>
  );
}
