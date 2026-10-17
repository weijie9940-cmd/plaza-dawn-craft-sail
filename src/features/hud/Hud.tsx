import { useEffect, useState } from "react";
import { Globe2, Grid3x3, List, ListOrdered, MapPinPlus, Medal, Sun, Trophy } from "lucide-react";
import { CS2_MAJORS } from "@/data/cs2-majors";
import { COUNTRY_BY_ISO, COUNTRY_COUNT } from "@/data/countries";
import { STIER_SOURCE, citiesUpToYear } from "@/data/s-tier-events";
import { countMajorsUpToYear } from "@/lib/s-tier-stats";
import { useGlobeStore } from "@/store/globe-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CountryCard } from "./CountryCard";
import { PinDialog } from "./PinDialog";
import { SearchBar } from "./SearchBar";
import { SidePanel } from "./SidePanel";
import { TeamSnapshotSidePanel } from "./TeamSnapshotPanel";
import { WorldRankingPanel } from "./WorldRankingPanel";
import { YearSlider } from "./YearSlider";

export function Hud() {
  const texturesReady = useGlobeStore((s) => s.texturesReady);
  const hoveredIso = useGlobeStore((s) => s.hoveredIso);
  const selectedIso = useGlobeStore((s) => s.selectedIso);
  const selectedMarker = useGlobeStore((s) => s.selectedMarker);
  const showGraticule = useGlobeStore((s) => s.showGraticule);
  const showCs2Majors = useGlobeStore((s) => s.showCs2Majors);
  const showSTier = useGlobeStore((s) => s.showSTier);
  const showDaylight = useGlobeStore((s) => s.showDaylight);
  const pinMode = useGlobeStore((s) => s.pinMode);
  const visited = useGlobeStore((s) => s.visited);
  const setShowGraticule = useGlobeStore((s) => s.setShowGraticule);
  const setShowCs2Majors = useGlobeStore((s) => s.setShowCs2Majors);
  const setShowSTier = useGlobeStore((s) => s.setShowSTier);
  const setShowDaylight = useGlobeStore((s) => s.setShowDaylight);
  const setPinMode = useGlobeStore((s) => s.setPinMode);
  const setPanelOpen = useGlobeStore((s) => s.setPanelOpen);
  const panelOpen = useGlobeStore((s) => s.panelOpen);
  const rankingOpen = useGlobeStore((s) => s.rankingOpen);
  const setRankingOpen = useGlobeStore((s) => s.setRankingOpen);
  const sTierYear = useGlobeStore((s) => s.sTierYear);
  const majorEvents = countMajorsUpToYear(sTierYear);
  const sTierCities = citiesUpToYear(sTierYear).length;

  const hovered = hoveredIso ? COUNTRY_BY_ISO.get(hoveredIso) : null;
  const showCard = Boolean(selectedIso || selectedMarker);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <header className="absolute top-0 right-0 left-0 z-20 flex items-start justify-between gap-3 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-5">
        <div className="pointer-events-none hidden min-w-36 sm:block">
          <p className="font-display text-lg font-medium tracking-tight text-fg">ORBITAL</p>
          <p className="text-xs tracking-wide text-fg-muted">寰宇</p>
        </div>
        <div className="pointer-events-auto min-w-0 flex-1 sm:flex sm:justify-center">
          <SearchBar />
        </div>
        <div className="pointer-events-auto flex shrink-0 items-center gap-1">
          <Button
            size="icon"
            variant={showSTier ? "secondary" : "ghost"}
            aria-pressed={showSTier}
            aria-label="S 级赛事城市与 Major 冠军所在城市"
            title="S 级赛事城市与 Major 冠军所在城市"
            className={cn("size-9 sm:size-11", showSTier && "text-marker-major")}
            onClick={() => setShowSTier(!showSTier)}
          >
            <Trophy className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={showCs2Majors ? "secondary" : "ghost"}
            aria-pressed={showCs2Majors}
            aria-label="历届 Major 举办城市"
            title="历届 Major 举办城市"
            className={cn("size-9 sm:size-11", showCs2Majors && "text-accent")}
            onClick={() => setShowCs2Majors(!showCs2Majors)}
          >
            <Medal className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={showGraticule ? "secondary" : "ghost"}
            aria-pressed={showGraticule}
            aria-label="经纬网"
            title="经纬网"
            className={cn("size-9 sm:size-11", showGraticule && "text-accent")}
            onClick={() => setShowGraticule(!showGraticule)}
          >
            <Grid3x3 className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={showDaylight ? "secondary" : "ghost"}
            aria-pressed={showDaylight}
            aria-label="日照"
            title="日照"
            className={cn("size-9 sm:size-11", showDaylight && "text-marker-major")}
            onClick={() => setShowDaylight(!showDaylight)}
          >
            <Sun className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={pinMode ? "default" : "ghost"}
            aria-pressed={pinMode}
            aria-label="放置标记"
            title="放置标记"
            className="size-9 sm:size-11"
            onClick={() => setPinMode(!pinMode)}
          >
            <MapPinPlus className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={rankingOpen ? "secondary" : "ghost"}
            aria-pressed={rankingOpen}
            aria-label="世界排名"
            title="HLTV 世界排名"
            className="size-9 sm:size-11"
            onClick={() => setRankingOpen(!rankingOpen)}
          >
            <ListOrdered className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={panelOpen ? "secondary" : "ghost"}
            aria-pressed={panelOpen}
            aria-label="足迹列表"
            title="足迹列表"
            className="size-9 sm:size-11"
            onClick={() => setPanelOpen(!panelOpen)}
          >
            <List className="size-4" />
          </Button>
        </div>
      </header>

      <div className="absolute top-20 left-3 z-20 w-[min(100%-1.5rem,24rem)] max-h-[calc(100dvh-14rem)] overflow-y-auto sm:top-24 sm:left-5">
        {hovered && hoveredIso !== selectedIso ? (
          <p className="pointer-events-none mb-2 px-1 text-sm text-fg/90">
            {hovered.nameZh}
            <span className="ml-2 text-fg-muted">{hovered.nameEn}</span>
          </p>
        ) : null}
        {pinMode ? (
          <p className="pointer-events-none mb-2 rounded-md bg-surface/90 px-3 py-2 text-sm text-fg-muted shadow-[var(--shadow-border)]">
            点击地球任意位置放置标记
          </p>
        ) : null}
        {showCard ? <CountryCard /> : null}
      </div>

      <div className="absolute top-20 right-3 z-20 sm:top-5 sm:right-5 sm:pt-14">
        <SidePanel />
      </div>
      <TeamSnapshotSidePanel />
      <WorldRankingPanel />

      <footer className="absolute right-0 bottom-0 left-0 z-30 flex flex-col gap-3 bg-bg/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5">
        <div className="flex justify-center">
          <YearSlider />
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="pointer-events-auto flex items-center gap-3 rounded-lg bg-surface/90 px-3 py-2 shadow-[var(--shadow-border)]">
            <Globe2 className="size-4 text-accent" aria-hidden />
            <p className="text-sm text-fg">
              已点亮{" "}
              <span className="font-mono tabular-nums">
                {visited.length}/{COUNTRY_COUNT}
              </span>
            </p>
            <UtcReadout />
          </div>
          <ul className="hidden items-center gap-4 rounded-lg bg-surface px-3 py-2 text-xs text-fg-muted lg:flex">
            {showSTier ? (
              <>
                <li className="flex items-center gap-1.5">
                  <TrophyGlyph className="text-marker-major" />
                  Major 冠军所在城市（{majorEvents}）
                </li>
                <li className="flex items-center gap-1.5">
                  <TrophyGlyph className="text-marker-stier" />
                  S 级赛事城市（{sTierCities}）
                </li>
              </>
            ) : null}
            {showCs2Majors ? (
              <li className="flex items-center gap-1.5">
                <PulseGlyph className="bg-marker-cs2" />
                历届 Major 举办城市（{CS2_MAJORS.length}）
              </li>
            ) : null}
            <li className="flex items-center gap-1.5">
              <PulseGlyph className="bg-marker-pin" />
              我的标记
            </li>
          </ul>
          <p className="max-w-44 text-right text-xs leading-relaxed text-fg-subtle sm:max-w-sm">
            <a
              href="https://xina-official.cn"
              className="pointer-events-auto text-[11px] text-fg-subtle underline-offset-2 hover:text-fg-muted hover:underline"
            >
              ← Xina 作品集
            </a>
            <br />
            {showSTier ? (
              <>
                {STIER_SOURCE}
                <br />
              </>
            ) : null}
            边界 Natural Earth · 影像 NASA Visible Earth
          </p>
        </div>
      </footer>

      <PinDialog />

      {!texturesReady ? (
        <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center bg-bg">
          <div className="orbit-ring mb-6" aria-hidden />
          <p className="font-display text-2xl font-medium tracking-tight text-fg">ORBITAL</p>
          <p className="mt-1 text-sm tracking-wide text-fg-muted">正在进入轨道</p>
        </div>
      ) : null}
    </div>
  );
}

function formatUtc(date: Date) {
  const h = String(date.getUTCHours()).padStart(2, "0");
  const m = String(date.getUTCMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

function UtcReadout() {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setLabel(formatUtc(new Date()));
    tick();
    const timer = window.setInterval(tick, 60_000);
    const onVisible = () => {
      if (document.visibilityState === "visible") tick();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);
  if (!label) return null;
  return <p className="font-mono text-xs text-fg-muted">UTC {label}</p>;
}

function TrophyGlyph({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M8 3h8v2h2.4c.5 0 .8.5.6 1C18.4 8.6 16.7 10.2 14.8 10.7 14.3 12.1 13.3 13 12 13.2V16h2.5v1.8h-5V16H12v-2.8c-1.3-.2-2.3-1.1-2.8-2.5C7.3 10.2 5.6 8.6 5 6c-.2-.5.1-1 .6-1H8V3z"
      />
    </svg>
  );
}

function PulseGlyph({ className }: { className: string }) {
  return (
    <span className="relative inline-flex size-3.5 shrink-0 items-center justify-center" aria-hidden>
      <span className={cn("absolute size-3 rounded-full opacity-45 blur-[2px]", className)} />
      <span className={cn("size-1.5 rounded-full", className)} />
    </span>
  );
}
