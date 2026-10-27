import { BookOpen, RotateCcw } from "lucide-react";
import { CHAMPION_LABEL, STIER_YEAR_MAX, S_TIER_CITIES } from "@/data/s-tier-events";
import { CS2_MAJORS } from "@/data/cs2-majors";
import { COUNTRY_BY_ISO } from "@/data/countries";
import { useGlobeStore } from "@/store/globe-store";

export function ExploreSummary() {
  const s = useGlobeStore();
  const layer = s.showSTier ? "S 级与 Major" : s.showCs2Majors ? "仅 Major" : "赛事图层已隐藏";
  const city =
    s.selectedMarker?.kind === "stier"
      ? S_TIER_CITIES.find((city) => city.id === s.selectedMarker?.id)?.cityZh
      : s.selectedMarker?.kind === "cs2"
        ? CS2_MAJORS.find((city) => city.id === s.selectedMarker?.id)?.cityZh
        : null;
  const place =
    s.highlightedTeam && s.teamJourneyOpen
      ? null
      : (city ?? (s.selectedIso ? COUNTRY_BY_ISO.get(s.selectedIso)?.nameZh : null));
  const changed =
    Boolean(s.comparisonTeams) ||
    s.sTierYear !== STIER_YEAR_MAX ||
    !s.showSTier ||
    !s.showCs2Majors ||
    Boolean(s.highlightedTeam || s.selectedMarker || s.selectedIso || s.markerClusterIds.length);
  return (
    <section className="explore-summary pointer-events-auto" aria-label="当前地图筛选">
      <p className="min-w-0 truncate text-xs text-fg-muted" aria-live="polite">
        <span className="font-mono text-fg">截至 {s.sTierYear} 年</span>
        <span className="mx-2 text-fg-subtle">·</span>
        {layer}
        {place ? <span className="ml-2 text-fg">/ {place}</span> : null}
      </p>
      <button
        type="button"
        className="summary-team inline-flex shrink-0 items-center gap-1"
        aria-label="故事探索"
        aria-pressed={Boolean(s.activeStoryId || s.storyPickerOpen)}
        onClick={() => s.setStoryPickerOpen(!s.storyPickerOpen)}
      >
        <BookOpen className="size-3.5" />
        <span className="hidden sm:inline">故事探索</span>
        <span className="sm:hidden">故事</span>
      </button>
      <button
        type="button"
        className="summary-team"
        aria-pressed={Boolean(s.comparisonTeams)}
        onClick={() => {
          if (s.comparisonTeams) {
            s.setMobileDetailsExpanded(true);
            s.setPanelOpen(false);
            s.setRankingOpen(false);
            return;
          }
          const first = s.highlightedTeam ?? "navi";
          s.setComparisonTeams([first, first === "astralis" ? "navi" : "astralis"]);
          s.requestFlyTo(45, 15, 2.6);
        }}
      >
        {s.comparisonTeams ? "对比中" : "双队对比"}
      </button>
      {s.highlightedTeam ? (
        <button
          type="button"
          className="summary-team"
          aria-label="查看队伍夺冠历程"
          onClick={() => {
            if (s.markerClusterIds.length) s.setMarkerClusterIds([]);
            s.setTeamJourneyOpen(true);
            s.setMobileDetailsExpanded(true);
            s.setPanelOpen(false);
            s.setRankingOpen(false);
          }}
        >
          {CHAMPION_LABEL[s.highlightedTeam] ?? s.highlightedTeam}
          <span aria-hidden> ↗</span>
        </button>
      ) : null}
      {changed ? (
        <button
          type="button"
          className="summary-reset"
          onClick={s.resetExploration}
          aria-label="重置地图筛选"
        >
          <RotateCcw className="size-3.5" />
          <span>重置</span>
        </button>
      ) : null}
    </section>
  );
}
