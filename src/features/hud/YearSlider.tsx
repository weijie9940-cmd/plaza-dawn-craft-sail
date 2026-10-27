import { useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { compareTeams } from "@/lib/team-comparison";
import { STIER_YEAR_MAX, STIER_YEAR_MIN, countEventsUpToYear } from "@/data/s-tier-events";
import { countMajorsUpToYear } from "@/lib/s-tier-stats";
import { useGlobeStore } from "@/store/globe-store";
import { teamJourney } from "@/lib/team-journey";

const YEARS = Array.from(
  { length: STIER_YEAR_MAX - STIER_YEAR_MIN + 1 },
  (_, i) => STIER_YEAR_MIN + i,
);

export function YearSlider() {
  const playing = useGlobeStore((s) => s.timelinePlaying);
  const speed = useGlobeStore((s) => s.timelineSpeed);
  const ready = useGlobeStore((s) => s.texturesReady);
  const teams = useGlobeStore((s) => s.comparisonTeams);
  useEffect(() => {
    if (!playing || !ready) return;
    const timer = window.setInterval(
      () => useGlobeStore.getState().advanceTimeline(),
      2000 / speed,
    );
    const pauseWhenHidden = () => {
      if (document.hidden) useGlobeStore.getState().setTimelinePlaying(false);
    };
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", pauseWhenHidden);
    };
  }, [playing, speed, ready]);
  const year = useGlobeStore((s) => s.sTierYear);
  const setYear = useGlobeStore((s) => s.setSTierYear);
  const showSTier = useGlobeStore((s) => s.showSTier);
  const showCs2Majors = useGlobeStore((s) => s.showCs2Majors);
  const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
  const count = countEventsUpToYear(year);
  const majors = countMajorsUpToYear(year);
  const comparison = teams ? compareTeams(teams, year) : null;
  const journey = highlightedTeam ? teamJourney(highlightedTeam, year) : null;

  if (!showSTier && !showCs2Majors) return null;

  return (
    <div className="timeline pointer-events-auto w-full max-w-xl rounded-xl border border-white/10 bg-surface/95 px-4 py-3">
      <div className="flex items-baseline justify-between gap-3">
        <p className="shrink-0 text-xs text-fg-muted">
          截至{" "}
          <strong className="font-mono text-lg font-medium tabular-nums text-marker-major">
            {year}
          </strong>{" "}
          年
        </p>
        <p className="text-right text-[11px] tabular-nums text-fg-muted" aria-live="polite">
          {comparison ? (
            <>
              两队累计 {comparison.sides[0].events.length + comparison.sides[1].events.length} 冠 ·{" "}
              {comparison.cities.length} 城
            </>
          ) : journey ? (
            <>
              累计 {journey.events.length} 冠 · {journey.cityCount} 城 · {journey.majorCount} Major
            </>
          ) : showSTier ? (
            <>
              累计 {count} 场 · 含 {majors} 场 Major
            </>
          ) : (
            <>累计 {majors} 场 Major</>
          )}
        </p>
      </div>
      <div className="timeline-playback">
        <button
          type="button"
          disabled={!ready}
          onClick={() => useGlobeStore.getState().setTimelinePlaying(!playing)}
          aria-label={playing ? "暂停年份播放" : "播放年份演进"}
        >
          {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
          {playing ? "暂停" : year === STIER_YEAR_MAX ? "从头播放" : "播放"}
        </button>
        <label className="flex items-center gap-1">
          <span className="sr-only">播放速度</span>
          <select
            aria-label="播放速度"
            value={speed}
            onChange={(event) =>
              useGlobeStore.getState().setTimelineSpeed(Number(event.target.value))
            }
          >
            <option value={0.5}>0.5×</option>
            <option value={1}>1×</option>
            <option value={2}>2×</option>
          </select>
        </label>
        <span className="ml-auto text-[10px] text-fg-muted">
          {year} 新增{" "}
          {comparison
            ? `${comparison.newWins} 冠`
            : journey
              ? `${journey.events.filter((row) => row.event.year === year).length} 冠`
              : `${showSTier ? count - countEventsUpToYear(year - 1) : majors - countMajorsUpToYear(year - 1)} 场`}
        </span>
      </div>
      <label className="mt-1 flex h-7 items-center">
        <span className="sr-only">筛选年份</span>
        <input
          type="range"
          min={STIER_YEAR_MIN}
          max={STIER_YEAR_MAX}
          step={1}
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="year-slider w-full"
          aria-label="截至年份，显示从 2013 年到所选年份的累计赛事"
          aria-valuetext={
            journey
              ? `截至 ${year} 年，${journey.title}累计 ${journey.events.length} 场冠军，${journey.cityCount} 座城市`
              : `截至 ${year} 年，累计 ${showSTier ? count : majors} 场${showSTier ? "赛事" : "Major"}`
          }
          aria-valuemin={STIER_YEAR_MIN}
          aria-valuemax={STIER_YEAR_MAX}
          aria-valuenow={year}
        />
      </label>
      <div className="flex justify-between gap-px">
        {YEARS.map((y) => (
          <button
            key={y}
            type="button"
            className={
              y === year
                ? "year-tick shrink-0 font-mono text-[10px] tabular-nums text-marker-major sm:text-xs"
                : "year-tick shrink-0 font-mono text-[10px] tabular-nums text-fg-subtle hover:text-fg sm:text-xs"
            }
            onClick={() => setYear(y)}
            aria-label={`截至 ${y} 年`}
            aria-pressed={y === year}
          >
            {String(y).slice(2)}
          </button>
        ))}
      </div>
    </div>
  );
}
