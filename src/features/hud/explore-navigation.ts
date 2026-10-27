import type { EsportsResult } from "@/lib/explore-search";
import { useGlobeStore } from "@/store/globe-store";

export function activateEsportsResult(result: EsportsResult) {
  const store = useGlobeStore.getState();
  store.setPanelOpen(false);
  store.setRankingOpen(false);
  store.setShowSTier(true);
  store.setSTierYear(
    result.kind === "event" ? Math.max(store.sTierYear, result.year) : result.year,
  );
  store.selectMarker({ kind: "stier", id: result.cityId });
  store.setHighlightedTeam(result.kind === "team" ? (result.team ?? null) : null);
  store.setTeamJourneyOpen(result.kind === "team");
  if (result.kind === "event") {
    store.setFocusedEventId(result.eventId ?? null);
    store.setMobileDetailsExpanded(true);
  }
  store.requestFlyTo(result.lat, result.lng, result.kind === "team" ? 2.65 : 1.62);
}
