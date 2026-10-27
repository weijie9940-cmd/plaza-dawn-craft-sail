import { comparisonOptions, playbackStart, playbackStep } from "@/lib/team-comparison";
import { create } from "zustand";
import { CS2_MAJORS } from "@/data/cs2-majors";
import { citiesUpToYear, STIER_YEAR_MAX } from "@/data/s-tier-events";
import { loadSave, saveSave, type CustomMarker } from "@/lib/storage";
import { clampStoryStep, getStory, type StoryId } from "@/lib/guided-stories";

export type { CustomMarker };

export type FlyTo = {
  lat: number;
  lng: number;
  radius: number;
  key: number;
};

export type SelectedMarker =
  | { kind: "cs2"; id: string }
  | { kind: "stier"; id: string }
  | { kind: "custom"; id: string }
  | null;

type GlobeState = {
  activeStoryId: StoryId | null;
  storyStep: number;
  storyPickerOpen: boolean;
  setStoryPickerOpen: (open: boolean) => void;
  startStory: (id: StoryId) => void;
  moveStory: (delta: number) => void;
  openStoryEvent: () => void;
  stopStory: () => void;
  comparisonTeams: [string, string] | null;
  setComparisonTeams: (teams: [string, string] | null) => void;
  timelinePlaying: boolean;
  timelineSpeed: number;
  setTimelinePlaying: (playing: boolean) => void;
  setTimelineSpeed: (speed: number) => void;
  advanceTimeline: () => void;
  texturesReady: boolean;
  hydrated: boolean;
  showGraticule: boolean;
  showCs2Majors: boolean;
  showSTier: boolean;
  showDaylight: boolean;
  sTierYear: number;
  highlightedTeam: string | null;
  teamJourneyOpen: boolean;
  setTeamJourneyOpen: (open: boolean) => void;
  resetExploration: () => void;
  explorationResetKey: number;
  pinMode: boolean;
  hoveredIso: string | null;
  selectedIso: string | null;
  highlightIso: string | null;
  selectedMarker: SelectedMarker;
  visited: string[];
  customMarkers: CustomMarker[];
  pendingPin: { lat: number; lng: number } | null;
  flyTo: FlyTo | null;
  panelOpen: boolean;
  teamSnapshotId: string | null;
  rankingOpen: boolean;
  focusedEventId: string | null;
  mobileDetailsExpanded: boolean;
  markerClusterIds: string[];
  setMarkerClusterIds: (ids: string[]) => void;
  setFocusedEventId: (id: string | null) => void;
  setMobileDetailsExpanded: (expanded: boolean) => void;
  setTeamSnapshotId: (id: string | null) => void;
  setRankingOpen: (v: boolean) => void;
  hydrate: () => void;
  setTexturesReady: (v: boolean) => void;
  setShowGraticule: (v: boolean) => void;
  setShowCs2Majors: (v: boolean) => void;
  setShowSTier: (v: boolean) => void;
  setShowDaylight: (v: boolean) => void;
  setSTierYear: (year: number, fromPlayback?: boolean) => void;
  setHighlightedTeam: (team: string | null) => void;
  setPinMode: (v: boolean) => void;
  setHoveredIso: (iso: string | null) => void;
  setHighlightIso: (iso: string | null) => void;
  selectCountry: (iso: string | null) => void;
  selectMarker: (marker: SelectedMarker) => void;
  toggleVisited: (iso: string) => void;
  addMarker: (marker: Omit<CustomMarker, "id" | "createdAt">) => void;
  removeMarker: (id: string) => void;
  setPendingPin: (pin: { lat: number; lng: number } | null) => void;
  requestFlyTo: (lat: number, lng: number, radius?: number) => void;
  setPanelOpen: (v: boolean) => void;
  closeCountryCard: () => void;
  clearSelection: () => void;
};

function persist(visited: string[], customMarkers: CustomMarker[]) {
  saveSave({ visited, customMarkers });
}

export const useGlobeStore = create<GlobeState>((set, get) => ({
  activeStoryId: null,
  storyStep: 0,
  storyPickerOpen: false,
  setStoryPickerOpen: (open) => set(open ? {
    storyPickerOpen: true,
    selectedMarker: null,
    selectedIso: null,
    markerClusterIds: [],
    focusedEventId: null,
    mobileDetailsExpanded: false,
    rankingOpen: false,
    panelOpen: false,
    teamSnapshotId: null,
  } : { storyPickerOpen: false }),
  startStory: (id) => {
    const first = getStory(id).stops[0];
    if (!first) return;
    set({
      activeStoryId: id,
      storyStep: 0,
      storyPickerOpen: false,
      timelinePlaying: false,
      comparisonTeams: null,
      highlightedTeam: null,
      teamJourneyOpen: false,
      selectedMarker: null,
      selectedIso: null,
      highlightIso: null,
      focusedEventId: null,
      mobileDetailsExpanded: false,
      markerClusterIds: [],
      rankingOpen: false,
      panelOpen: false,
      teamSnapshotId: null,
      pinMode: false,
      showSTier: true,
      showCs2Majors: true,
      sTierYear: first.event.year,
    });
    get().requestFlyTo(first.lat, first.lng, 1.7);
  },
  moveStory: (delta) => {
    const id = get().activeStoryId;
    if (!id) return;
    const stops = getStory(id).stops;
    if (!stops.length) return get().stopStory();
    const step = clampStoryStep(get().storyStep, delta, stops.length);
    const stop = stops[step];
    set({
      storyStep: step,
      timelinePlaying: false,
      sTierYear: stop.event.year,
      selectedMarker: null,
      selectedIso: null,
      highlightIso: null,
      focusedEventId: null,
      mobileDetailsExpanded: false,
      markerClusterIds: [],
      teamSnapshotId: null,
    });
    get().requestFlyTo(stop.lat, stop.lng, 1.7);
  },
  openStoryEvent: () => {
    const id = get().activeStoryId;
    if (!id) return;
    const stop = getStory(id).stops[get().storyStep];
    if (!stop) return;
    set({
      selectedMarker: { kind: "stier", id: stop.cityId },
      selectedIso: null,
      highlightIso: null,
      focusedEventId: stop.eventId,
      mobileDetailsExpanded: true,
      markerClusterIds: [],
    });
    get().requestFlyTo(stop.lat, stop.lng, 1.62);
  },
  stopStory: () => set({ activeStoryId: null, storyStep: 0, storyPickerOpen: false }),
  comparisonTeams: null,
  timelinePlaying: false,
  timelineSpeed: 1,
  setComparisonTeams: (teams) => {
    if (
      teams &&
      (teams[0] === teams[1] ||
        teams.some((team) => !comparisonOptions.some((option) => option.key === team)))
    )
      return;
    get().clearSelection();
    set({
      comparisonTeams: teams,
      timelinePlaying: false,
      highlightedTeam: null,
      teamJourneyOpen: false,
      panelOpen: false,
      rankingOpen: false,
      pinMode: false,
      showSTier: teams ? true : get().showSTier,
      mobileDetailsExpanded: true,
      activeStoryId: null,
      storyPickerOpen: false,
    });
  },
  setTimelinePlaying: (playing) => {
    if (playing) {
      get().stopStory();
      const team = get().highlightedTeam;
      get().clearSelection();
      set({ highlightedTeam: team, teamJourneyOpen: Boolean(team) });
      get().setSTierYear(playbackStart(get().sTierYear), true);
    }
    set({ timelinePlaying: playing, panelOpen: false, rankingOpen: false, pinMode: false });
  },
  setTimelineSpeed: (speed) => {
    if ([0.5, 1, 2].includes(speed)) set({ timelineSpeed: speed });
  },
  advanceTimeline: () => {
    if (!get().timelinePlaying) return;
    const next = playbackStep(get().sTierYear);
    get().setSTierYear(next.year, true);
    set({ timelinePlaying: next.playing });
  },
  texturesReady: false,
  hydrated: false,
  showGraticule: false,
  showCs2Majors: true,
  showSTier: true,
  showDaylight: true,
  sTierYear: STIER_YEAR_MAX,
  highlightedTeam: null,
  teamJourneyOpen: false,
  explorationResetKey: 0,
  setTeamJourneyOpen: (open) =>
    set({ teamJourneyOpen: open, timelinePlaying: open ? false : get().timelinePlaying }),
  resetExploration: () => {
    get().clearSelection();
    set({
      comparisonTeams: null,
      timelinePlaying: false,
      sTierYear: STIER_YEAR_MAX,
      showSTier: true,
      showCs2Majors: true,
      panelOpen: false,
      rankingOpen: false,
      pinMode: false,
      teamJourneyOpen: false,
      activeStoryId: null,
      storyPickerOpen: false,
      explorationResetKey: get().explorationResetKey + 1,
    });
    get().requestFlyTo(30, 15, 3.2);
  },
  pinMode: false,
  hoveredIso: null,
  selectedIso: null,
  highlightIso: null,
  selectedMarker: null,
  visited: [],
  customMarkers: [],
  pendingPin: null,
  flyTo: null,
  panelOpen: false,
  teamSnapshotId: null,
  rankingOpen: false,
  focusedEventId: null,
  mobileDetailsExpanded: false,
  markerClusterIds: [],
  setMarkerClusterIds: (ids) =>
    set({
      timelinePlaying: false,
      activeStoryId: ids.length ? null : get().activeStoryId,
      storyPickerOpen: false,
      markerClusterIds: ids,
      selectedMarker: null,
      selectedIso: null,
      highlightIso: null,
      focusedEventId: null,
      teamSnapshotId: null,
      mobileDetailsExpanded: false,
    }),
  setFocusedEventId: (id) => set({ focusedEventId: id }),
  setMobileDetailsExpanded: (expanded) =>
    set({
      mobileDetailsExpanded: expanded,
      timelinePlaying: expanded ? false : get().timelinePlaying,
    }),
  hydrate: () => {
    if (get().hydrated) return;
    const saved = loadSave();
    set({ hydrated: true, visited: saved.visited, customMarkers: saved.customMarkers });
  },
  setTexturesReady: (v) => set({ texturesReady: v }),
  setShowGraticule: (v) => set({ showGraticule: v }),
  setShowCs2Majors: (v) =>
    set({
      timelinePlaying: false,
      activeStoryId: null,
      storyPickerOpen: false,
      showCs2Majors: v,
      ...(!v && get().selectedMarker?.kind === "cs2"
        ? {
            selectedMarker: null,
            focusedEventId: null,
            mobileDetailsExpanded: false,
            teamSnapshotId: null,
          }
        : {}),
    }),
  setShowDaylight: (v) => set({ showDaylight: v }),
  setShowSTier: (v) =>
    set({
      timelinePlaying: false,
      activeStoryId: null,
      storyPickerOpen: false,
      comparisonTeams: v ? get().comparisonTeams : null,
      showSTier: v,
      markerClusterIds: [],
      highlightedTeam: v ? get().highlightedTeam : null,
      selectedMarker: !v && get().selectedMarker?.kind === "stier" ? null : get().selectedMarker,
    }),
  setSTierYear: (year, fromPlayback = false) => {
    const selected = get().selectedMarker;
    const keep =
      selected?.kind === "stier"
        ? citiesUpToYear(year).some((c) => c.id === selected.id)
        : selected?.kind === "cs2"
          ? CS2_MAJORS.some(
              (city) => city.id === selected.id && city.events.some((event) => event.year <= year),
            )
          : true;
    set({
      timelinePlaying: fromPlayback ? get().timelinePlaying : false,
      activeStoryId: null,
      storyPickerOpen: false,
      sTierYear: year,
      markerClusterIds: [],
      focusedEventId: null,
      teamSnapshotId: null,
      selectedMarker: keep ? selected : null,
      teamJourneyOpen: get().teamJourneyOpen || (!keep && Boolean(get().highlightedTeam)),
    });
  },
  setHighlightedTeam: (team) =>
    set({
      comparisonTeams: null,
      timelinePlaying: false,
      activeStoryId: null,
      storyPickerOpen: false,
      highlightedTeam: team,
      teamJourneyOpen: team ? get().teamJourneyOpen : false,
    }),
  setPinMode: (v) =>
    set({ timelinePlaying: false, activeStoryId: null, storyPickerOpen: false, pinMode: v, pendingPin: v ? get().pendingPin : null }),
  setHoveredIso: (iso) => set({ hoveredIso: iso }),
  setHighlightIso: (iso) => set({ highlightIso: iso }),
  selectCountry: (iso) =>
    set({
      timelinePlaying: false,
      activeStoryId: null,
      storyPickerOpen: false,
      selectedIso: iso,
      teamJourneyOpen: false,
      markerClusterIds: [],
      focusedEventId: null,
      mobileDetailsExpanded: false,
      teamSnapshotId: null,
      highlightIso: iso,
      selectedMarker: null,
      pinMode: false,
      pendingPin: null,
    }),
  selectMarker: (marker) =>
    set(
      marker
        ? {
            timelinePlaying: false,
            activeStoryId: null,
            storyPickerOpen: false,
            comparisonTeams: marker.kind === "custom" ? null : get().comparisonTeams,
            selectedMarker: marker,
            teamJourneyOpen: false,
            selectedIso: null,
            highlightIso: null,
            pinMode: false,
            focusedEventId: null,
            mobileDetailsExpanded: false,
            teamSnapshotId: null,
            markerClusterIds: [],
          }
        : {
            selectedMarker: null,
            pinMode: false,
            focusedEventId: null,
            mobileDetailsExpanded: false,
          },
    ),
  toggleVisited: (iso) => {
    const visited = get().visited.includes(iso)
      ? get().visited.filter((id) => id !== iso)
      : [...get().visited, iso];
    set({ visited });
    persist(visited, get().customMarkers);
  },
  addMarker: (marker) => {
    const next: CustomMarker = {
      ...marker,
      id: `m_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
      createdAt: Date.now(),
    };
    const customMarkers = [...get().customMarkers, next];
    set({
      customMarkers,
      comparisonTeams: null,
      timelinePlaying: false,
      activeStoryId: null,
      storyPickerOpen: false,
      pendingPin: null,
      pinMode: false,
      selectedMarker: { kind: "custom", id: next.id },
      teamJourneyOpen: false,
      markerClusterIds: [],
      focusedEventId: null,
      mobileDetailsExpanded: true,
      teamSnapshotId: null,
      selectedIso: null,
      highlightIso: null,
    });
    persist(get().visited, customMarkers);
  },
  removeMarker: (id) => {
    const customMarkers = get().customMarkers.filter((m) => m.id !== id);
    const selected = get().selectedMarker;
    set({
      customMarkers,
      selectedMarker: selected?.kind === "custom" && selected.id === id ? null : selected,
    });
    persist(get().visited, customMarkers);
  },
  setPendingPin: (pin) => set({ timelinePlaying: false, activeStoryId: pin ? null : get().activeStoryId, storyPickerOpen: pin ? false : get().storyPickerOpen, pendingPin: pin }),
  requestFlyTo: (lat, lng, radius = 1.85) => set({ flyTo: { lat, lng, radius, key: Date.now() } }),
  setPanelOpen: (v) =>
    set(
      v
        ? { timelinePlaying: false, activeStoryId: null, storyPickerOpen: false, panelOpen: true, teamSnapshotId: null, rankingOpen: false }
        : { panelOpen: false },
    ),
  setTeamSnapshotId: (id) =>
    set(
      id
        ? { timelinePlaying: false, activeStoryId: null, storyPickerOpen: false, teamSnapshotId: id, panelOpen: false, rankingOpen: false }
        : { teamSnapshotId: null },
    ),
  setRankingOpen: (v) =>
    set(
      v
        ? { timelinePlaying: false, activeStoryId: null, storyPickerOpen: false, rankingOpen: true, panelOpen: false, teamSnapshotId: null }
        : { rankingOpen: false },
    ),
  closeCountryCard: () => set({ selectedIso: null }),
  clearSelection: () =>
    set({
      selectedIso: null,
      selectedMarker: null,
      markerClusterIds: [],
      highlightIso: null,
      pendingPin: null,
      hoveredIso: null,
      highlightedTeam: null,
      teamJourneyOpen: false,
      focusedEventId: null,
      mobileDetailsExpanded: false,
      teamSnapshotId: null,
    }),
}));
