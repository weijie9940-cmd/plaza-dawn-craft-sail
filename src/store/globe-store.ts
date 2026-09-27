import { create } from "zustand";
import { citiesUpToYear, STIER_YEAR_MAX } from "@/data/s-tier-events";
import { loadSave, saveSave, type CustomMarker } from "@/lib/storage";

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
  texturesReady: boolean;
  hydrated: boolean;
  showGraticule: boolean;
  showCs2Majors: boolean;
  showSTier: boolean;
  showDaylight: boolean;
  sTierYear: number;
  highlightedTeam: string | null;
  pinMode: boolean;
  hoveredIso: string | null;
  selectedIso: string | null;
  selectedMarker: SelectedMarker;
  visited: string[];
  customMarkers: CustomMarker[];
  pendingPin: { lat: number; lng: number } | null;
  flyTo: FlyTo | null;
  panelOpen: boolean;
  hydrate: () => void;
  setTexturesReady: (v: boolean) => void;
  setShowGraticule: (v: boolean) => void;
  setShowCs2Majors: (v: boolean) => void;
  setShowSTier: (v: boolean) => void;
  setShowDaylight: (v: boolean) => void;
  setSTierYear: (year: number) => void;
  setHighlightedTeam: (team: string | null) => void;
  setPinMode: (v: boolean) => void;
  setHoveredIso: (iso: string | null) => void;
  selectCountry: (iso: string | null) => void;
  selectMarker: (marker: SelectedMarker) => void;
  toggleVisited: (iso: string) => void;
  addMarker: (marker: Omit<CustomMarker, "id" | "createdAt">) => void;
  removeMarker: (id: string) => void;
  setPendingPin: (pin: { lat: number; lng: number } | null) => void;
  requestFlyTo: (lat: number, lng: number, radius?: number) => void;
  setPanelOpen: (v: boolean) => void;
  clearSelection: () => void;
};

function persist(visited: string[], customMarkers: CustomMarker[]) {
  saveSave({ visited, customMarkers });
}

export const useGlobeStore = create<GlobeState>((set, get) => ({
  texturesReady: false,
  hydrated: false,
  showGraticule: false,
  showCs2Majors: true,
  showSTier: true,
  showDaylight: true,
  sTierYear: STIER_YEAR_MAX,
  highlightedTeam: null,
  pinMode: false,
  hoveredIso: null,
  selectedIso: null,
  selectedMarker: null,
  visited: [],
  customMarkers: [],
  pendingPin: null,
  flyTo: null,
  panelOpen: false,
  hydrate: () => {
    if (get().hydrated) return;
    const saved = loadSave();
    set({ hydrated: true, visited: saved.visited, customMarkers: saved.customMarkers });
  },
  setTexturesReady: (v) => set({ texturesReady: v }),
  setShowGraticule: (v) => set({ showGraticule: v }),
  setShowCs2Majors: (v) => set({ showCs2Majors: v }),
  setShowDaylight: (v) => set({ showDaylight: v }),
  setShowSTier: (v) =>
    set({
      showSTier: v,
      highlightedTeam: v ? get().highlightedTeam : null,
      selectedMarker:
        !v && get().selectedMarker?.kind === "stier" ? null : get().selectedMarker,
    }),
  setSTierYear: (year) => {
    const selected = get().selectedMarker;
    const keep =
      selected?.kind === "stier"
        ? citiesUpToYear(year).some((c) => c.id === selected.id)
        : true;
    set({
      sTierYear: year,
      selectedMarker: keep ? selected : null,
      highlightedTeam: keep ? get().highlightedTeam : null,
    });
  },
  setHighlightedTeam: (team) => set({ highlightedTeam: team }),
  setPinMode: (v) => set({ pinMode: v, pendingPin: v ? get().pendingPin : null }),
  setHoveredIso: (iso) => set({ hoveredIso: iso }),
  selectCountry: (iso) =>
    set({
      selectedIso: iso,
      selectedMarker: null,
      pinMode: false,
      pendingPin: null,
    }),
  selectMarker: (marker) =>
    set({
      selectedMarker: marker,
      selectedIso: null,
      pinMode: false,
    }),
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
      pendingPin: null,
      pinMode: false,
      selectedMarker: { kind: "custom", id: next.id },
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
  setPendingPin: (pin) => set({ pendingPin: pin }),
  requestFlyTo: (lat, lng, radius = 1.85) =>
    set({ flyTo: { lat, lng, radius, key: Date.now() } }),
  setPanelOpen: (v) => set({ panelOpen: v }),
  clearSelection: () =>
    set({
      selectedIso: null,
      selectedMarker: null,
      pendingPin: null,
      hoveredIso: null,
      highlightedTeam: null,
    }),
}));
