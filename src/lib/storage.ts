const KEY = "orbital-globe-v1";
const VERSION = 1;

export type CustomMarker = {
  id: string;
  name: string;
  note: string;
  lat: number;
  lng: number;
  createdAt: number;
};

export type PersistedState = {
  version: number;
  visited: string[];
  customMarkers: CustomMarker[];
};

const empty: PersistedState = { version: VERSION, visited: [], customMarkers: [] };

export function loadSave(): PersistedState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    if (!parsed || typeof parsed !== "object") return empty;
    return {
      version: VERSION,
      visited: Array.isArray(parsed.visited)
        ? parsed.visited.filter((id): id is string => typeof id === "string")
        : [],
      customMarkers: Array.isArray(parsed.customMarkers)
        ? parsed.customMarkers.filter(isMarker)
        : [],
    };
  } catch {
    return empty;
  }
}

export function saveSave(state: Omit<PersistedState, "version">) {
  try {
    const payload: PersistedState = { version: VERSION, ...state };
    localStorage.setItem(KEY, JSON.stringify(payload));
  } catch {
    // private mode / quota — keep running in memory
  }
}

function isMarker(value: unknown): value is CustomMarker {
  if (!value || typeof value !== "object") return false;
  const m = value as CustomMarker;
  return (
    typeof m.id === "string" &&
    typeof m.name === "string" &&
    typeof m.note === "string" &&
    typeof m.lat === "number" &&
    typeof m.lng === "number" &&
    typeof m.createdAt === "number"
  );
}
