import { Globe2, Grid3x3, List, MapPinPlus, Medal, Trophy } from "lucide-react";
import { COUNTRY_BY_ISO, COUNTRY_COUNT } from "@/data/countries";
import { STIER_SOURCE } from "@/data/s-tier-events";
import { useGlobeStore } from "@/store/globe-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CountryCard } from "./CountryCard";
import { PinDialog } from "./PinDialog";
import { SearchBar } from "./SearchBar";
import { SidePanel } from "./SidePanel";
import { YearSlider } from "./YearSlider";

export function Hud() {
  const texturesReady = useGlobeStore((s) => s.texturesReady);
  const hoveredIso = useGlobeStore((s) => s.hoveredIso);
  const selectedIso = useGlobeStore((s) => s.selectedIso);
  const selectedMarker = useGlobeStore((s) => s.selectedMarker);
  const showGraticule = useGlobeStore((s) => s.showGraticule);
  const showCs2Majors = useGlobeStore((s) => s.showCs2Majors);
  const showSTier = useGlobeStore((s) => s.showSTier);
  const pinMode = useGlobeStore((s) => s.pinMode);
  const visited = useGlobeStore((s) => s.visited);
  const setShowGraticule = useGlobeStore((s) => s.setShowGraticule);
  const setShowCs2Majors = useGlobeStore((s) => s.setShowCs2Majors);
  const setShowSTier = useGlobeStore((s) => s.setShowSTier);
  const setPinMode = useGlobeStore((s) => s.setPinMode);
  const setPanelOpen = useGlobeStore((s) => s.setPanelOpen);
  const panelOpen = useGlobeStore((s) => s.panelOpen);

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
        <div className="pointer-events-auto flex shrink-0 items-center gap-1.5">
          <Button
            size="icon"
            variant={showSTier ? "secondary" : "ghost"}
            aria-pressed={showSTier}
            aria-label="S 级赛事图层"
            title="S 级赛事冠军地图"
            className={cn(showSTier && "text-marker-major")}
            onClick={() => setShowSTier(!showSTier)}
          >
            <Trophy className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={showCs2Majors ? "secondary" : "ghost"}
            aria-pressed={showCs2Majors}
            aria-label="CS Major 图层"
            title="CS Major"
            className={cn("hidden sm:inline-flex", showCs2Majors && "text-accent")}
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
            className={cn("hidden sm:inline-flex", showGraticule && "text-accent")}
            onClick={() => setShowGraticule(!showGraticule)}
          >
            <Grid3x3 className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={pinMode ? "default" : "ghost"}
            aria-pressed={pinMode}
            aria-label="放置标记"
            title="放置标记"
            onClick={() => setPinMode(!pinMode)}
          >
            <MapPinPlus className="size-4" />
          </Button>
          <Button
            size="icon"
            variant={panelOpen ? "secondary" : "ghost"}
            aria-pressed={panelOpen}
            aria-label="足迹列表"
            title="足迹"
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

      <footer className="absolute right-0 bottom-0 left-0 z-20 flex flex-col gap-3 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5">
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
          </div>
          <ul className="hidden items-center gap-4 text-xs text-fg-muted lg:flex">
            {showSTier ? (
              <>
                <li className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-marker-major" />
                  Major
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-marker-stier" />
                  S 级
                </li>
              </>
            ) : null}
            {showCs2Majors ? (
              <li className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-marker-cs2" />
                CS Major 史
              </li>
            ) : null}
            <li className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-marker-pin" />
              我的标记
            </li>
          </ul>
          <p className="max-w-44 text-right text-xs leading-relaxed text-fg-subtle sm:max-w-sm">
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
