import { lazy, Suspense, useEffect, useState } from "react";
import { Hud } from "@/features/hud/Hud";
import { useGlobeStore } from "@/store/globe-store";

const GlobeCanvas = lazy(() =>
  import("@/features/globe/GlobeCanvas").then((m) => ({ default: m.GlobeCanvas })),
);

export function App() {
  const [mounted, setMounted] = useState(false);
  const hydrate = useGlobeStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
    setMounted(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      if (e.key === "Escape") {
        const s = useGlobeStore.getState();
        if (s.timelinePlaying) s.setTimelinePlaying(false);
        else if (s.pendingPin) s.setPendingPin(null);
        else if (s.pinMode) s.setPinMode(false);
        else if (s.rankingOpen) s.setRankingOpen(false);
        else if (s.panelOpen) s.setPanelOpen(false);
        else if (s.markerClusterIds.length) s.setMarkerClusterIds([]);
        else if (s.teamSnapshotId) s.setTeamSnapshotId(null);
        else if (s.activeStoryId && (s.selectedMarker || s.selectedIso)) s.clearSelection();
        else if (s.mobileDetailsExpanded && window.innerWidth < 640)
          s.setMobileDetailsExpanded(false);
        else if (s.comparisonTeams) s.setComparisonTeams(null);
        else if (s.highlightedTeam) s.setHighlightedTeam(null);
        else if (s.storyPickerOpen) s.setStoryPickerOpen(false);
        else if (s.activeStoryId) s.stopStory();
        else s.clearSelection();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hydrate]);

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-bg text-fg">
      <h1 className="sr-only">ORBITAL 寰宇 · CS 电竞历史地图</h1>
      {mounted ? (
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <GlobeCanvas />
          </Suspense>
        </div>
      ) : null}
      <Hud />
    </main>
  );
}
