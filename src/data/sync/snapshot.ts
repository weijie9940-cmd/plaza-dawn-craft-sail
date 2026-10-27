import raw from "./current.json" with { type: "json" };
import type { DataSnapshot } from "../../lib/data-sync.ts";

// Generated JSON is validated by data:validate before any production build.
export const DATA_SNAPSHOT = raw as DataSnapshot;
