import { DataFreshness } from "./DataFreshness";
import { useEffect, useRef, useState } from "react";
import { Globe2, X } from "lucide-react";
import { CS2_MAJORS } from "@/data/cs2-majors";
import { COUNTRY_BY_ISO, COUNTRY_COUNT } from "@/data/countries";
import { STIER_SOURCE, citiesUpToYear } from "@/data/s-tier-events";
import { countMajorsUpToYear } from "@/lib/s-tier-stats";
import { useGlobeStore } from "@/store/globe-store";
import { PinDialog } from "./PinDialog";
import { SearchBar } from "./SearchBar";
import { SidePanel } from "./SidePanel";
import { TeamSnapshotSidePanel } from "./TeamSnapshotPanel";
import { WorldRankingPanel } from "./WorldRankingPanel";
import { YearSlider } from "./YearSlider";
import { Toolbar } from "./Toolbar";
import { ExploreIntro } from "./ExploreIntro";
import { SelectionPanel } from "./SelectionPanel";
import { ExploreSummary } from "./ExploreSummary";
import { StoryGuide } from "./StoryGuide";

export function Hud() {
  const s = useGlobeStore();
  const root = useRef<HTMLDivElement>(null);
  const footer = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!footer.current) return;
    const update = () =>
      root.current?.style.setProperty(
        "--hud-footer-height",
        `${footer.current?.getBoundingClientRect().height ?? 0}px`,
      );
    update();
    const observer = new ResizeObserver(update);
    observer.observe(footer.current);
    return () => observer.disconnect();
  }, []);
  const hovered = s.hoveredIso ? COUNTRY_BY_ISO.get(s.hoveredIso) : null;
  return (
    <div
      ref={root}
      data-overlay-open={s.rankingOpen || s.panelOpen || s.pinMode || undefined}
      className="hud pointer-events-none absolute inset-0 z-10"
    >
      <header className="hud-header">
        <div className="hud-brand">
          <p className="font-display text-lg font-medium tracking-tight">
            ORBITAL <span className="ml-1 text-xs font-normal text-fg-muted">寰宇</span>
          </p>
          <p className="brand-caption mt-0.5 text-[11px] tracking-wide text-fg-muted">
            在地球上探索 CS 电竞历史
          </p>
        </div>
        <div className="hud-search pointer-events-auto min-w-0">
          <SearchBar key={s.explorationResetKey} />
        </div>
        <Toolbar />
      </header>
      <ExploreSummary />
      <ExploreIntro />
      <StoryGuide />
      <SelectionPanel />
      {hovered && s.hoveredIso !== s.selectedIso ? (
        <p className="absolute top-36 right-5 hidden text-sm text-fg/90 sm:block">
          {hovered.nameZh}
          <span className="ml-2 text-fg-muted">{hovered.nameEn}</span>
        </p>
      ) : null}
      {s.pinMode ? (
        <div className="pin-hint pointer-events-auto flex items-center gap-3 rounded-xl border border-accent/30 bg-surface px-4 py-2 text-sm text-fg">
          点击地球放置标记
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-fg-muted"
            aria-label="取消放置标记"
            onClick={() => s.setPinMode(false)}
          >
            <X className="size-4" />
          </button>
        </div>
      ) : null}
      <div className="aux-panel">
        <SidePanel />
      </div>
      <TeamSnapshotSidePanel />
      <WorldRankingPanel />
      <footer ref={footer} className="hud-footer">
        <div className="flex justify-center">
          <YearSlider />
        </div>
        <div className="footer-meta flex items-end justify-between gap-3">
          <div className="flex shrink-0 items-center gap-2 text-[11px] text-fg-muted">
            <Globe2 className="size-3.5 text-accent" aria-hidden />
            <span>
              已点亮{" "}
              <span className="font-mono tabular-nums">
                {s.visited.length}/{COUNTRY_COUNT}
              </span>
            </span>
            <UtcReadout />
            <DataFreshness />
          </div>
          <ul
            className="hidden items-center gap-4 text-[11px] text-fg-muted lg:flex"
            aria-label="地图图例"
          >
            {s.comparisonTeams ? (
              <li>金 / 青 = 两队夺冠城市 · 双色 = 共同城市 · 数字 = 聚合城市数</li>
            ) : s.showSTier ? (
              <>
                <li>
                  <span className="mr-1.5 text-marker-major">◆</span>Major 城市 ·{" "}
                  {countMajorsUpToYear(s.sTierYear)} 场
                </li>
                <li>
                  <span className="mr-1.5 text-marker-stier">◆</span>S 级赛事 ·{" "}
                  {citiesUpToYear(s.sTierYear).length} 城
                </li>
                <li>数字 = 聚合城市数 · 点击放大</li>
              </>
            ) : null}
            {s.showCs2Majors && !s.showSTier ? (
              <li>
                <span className="mr-1.5 text-marker-cs2">●</span>Major 举办地 · {CS2_MAJORS.length}{" "}
                城
              </li>
            ) : null}
          </ul>
          <p className="max-w-44 text-right text-[10px] leading-relaxed text-fg-subtle sm:max-w-xs">
            <a href="https://xina-official.cn" className="pointer-events-auto underline">← Xina 作品集</a><br />
            <span className="hidden sm:inline">
              {s.showSTier ? (
                <>
                  {STIER_SOURCE}
                  <br />
                </>
              ) : null}
            </span>
            <span className="hidden sm:inline">边界 Natural Earth · 影像 </span>NASA Visible Earth
          </p>
        </div>
      </footer>
      <PinDialog />
      {!s.texturesReady ? (
        <div
          data-testid="globe-loading"
          role="status"
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center bg-bg"
        >
          <div className="orbit-ring mb-6" aria-hidden />
          <p className="font-display text-2xl font-medium tracking-tight text-fg">ORBITAL</p>
          <p className="mt-1 text-sm tracking-wide text-fg-muted">正在进入轨道</p>
        </div>
      ) : null}
    </div>
  );
}

function UtcReadout() {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => {
      const date = new Date();
      setLabel(
        `${String(date.getUTCHours()).padStart(2, "0")}:${String(date.getUTCMinutes()).padStart(2, "0")}`,
      );
    };
    tick();
    const timer = window.setInterval(tick, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return label ? <span className="hidden font-mono text-[10px] sm:inline">UTC {label}</span> : null;
}
