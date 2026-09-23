import { X } from "lucide-react";
import {
  CHAMPION_LABEL,
  STIER_YEAR_MAX,
  STIER_YEAR_MIN,
  championKey,
  citiesUpToYear,
  countEventsUpToYear,
} from "@/data/s-tier-events";
import { useGlobeStore } from "@/store/globe-store";

const YEARS = Array.from(
  { length: STIER_YEAR_MAX - STIER_YEAR_MIN + 1 },
  (_, i) => STIER_YEAR_MIN + i,
);

export function YearSlider() {
  const year = useGlobeStore((s) => s.sTierYear);
  const setYear = useGlobeStore((s) => s.setSTierYear);
  const visible = useGlobeStore((s) => s.showSTier);
  const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
  const setHighlightedTeam = useGlobeStore((s) => s.setHighlightedTeam);
  const count = countEventsUpToYear(year);
  const dynastyCities = highlightedTeam
    ? citiesUpToYear(year).filter((c) =>
        c.events.some((ev) => championKey(ev.champion) === highlightedTeam),
      ).length
    : 0;

  if (!visible) return null;

  return (
    <div className="pointer-events-auto w-full max-w-xl rounded-xl bg-surface/90 px-4 py-3 shadow-[var(--shadow-border)]">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-xs font-medium tracking-wide text-fg-muted">电竞版图</p>
        <p className="font-mono text-xs tabular-nums text-fg-muted">
          {STIER_YEAR_MIN}–{year} · {count} 场
        </p>
      </div>
      {highlightedTeam ? (
        <div className="mt-2 flex items-center justify-between gap-2 rounded-md bg-surface-2 px-2 py-1.5">
          <p className="text-xs text-fg">
            {CHAMPION_LABEL[highlightedTeam] ?? highlightedTeam} 王朝
            <span className="ml-2 font-mono tabular-nums text-fg-muted">{dynastyCities} 城</span>
          </p>
          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-md text-fg-muted hover:text-fg"
            onClick={() => setHighlightedTeam(null)}
            aria-label="清除战队高亮"
          >
            <X className="size-3.5" />
          </button>
        </div>
      ) : null}
      <label className="mt-2 block">
        <span className="sr-only">筛选年份</span>
        <input
          type="range"
          min={STIER_YEAR_MIN}
          max={STIER_YEAR_MAX}
          step={1}
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="year-slider mt-1 w-full"
          aria-valuemin={STIER_YEAR_MIN}
          aria-valuemax={STIER_YEAR_MAX}
          aria-valuenow={year}
        />
      </label>
      <div className="mt-1 flex justify-between gap-px overflow-x-auto">
        {YEARS.map((y) => (
          <button
            key={y}
            type="button"
            className={
              y === year
                ? "shrink-0 font-mono text-[10px] tabular-nums text-fg sm:text-xs"
                : "shrink-0 font-mono text-[10px] tabular-nums text-fg-subtle hover:text-fg sm:text-xs"
            }
            onClick={() => setYear(y)}
          >
            {String(y).slice(2)}
          </button>
        ))}
      </div>
    </div>
  );
}
