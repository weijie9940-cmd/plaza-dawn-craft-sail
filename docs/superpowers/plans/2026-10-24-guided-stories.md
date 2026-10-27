# ORBITAL Guided Stories Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add guided Major and multi-team championship routes that move the globe and year timeline through real archive events.

**Architecture:** Build a small pure route selector on the existing S-tier city archive. Add guided-story state and navigation to the existing Zustand globe store. Render a route picker and chapter card in the HUD, reusing the existing city detail panel.

**Tech Stack:** React 19, TypeScript, Zustand, Tailwind CSS, Node test runner, Vite/TanStack Start.

**Spec:** `docs/superpowers/specs/2026-10-24-guided-stories-design.md`

## Global Constraints

- Stories use only current archive event records; no invented result, lineup, score, or external feed.
- Keep existing globe palette and typography. No auth, database, or new dependency.
- Five team routes: NAVI, Astralis, FaZe, Vitality, Fnatic; one cross-city Major route.
- Preview stays live; preserve pre-existing working-tree changes.

## Review Focus

- Missing route event in a future snapshot: skip it and keep chapter indexes valid (Task 1 test).
- Team with fewer than five distinct eligible cities: show only real available stops (Task 1 test).
- Clicking a chapter's event detail: keep current story and step while opening city details (Task 2 test).
- Manual search, year drag, ranking, comparison, or globe selection: end the story (Task 2 test).
- Narrow viewport and reduced motion: chapter controls remain visible and usable (Task 3 browser QA).

---

### Task 1: Derive trustworthy story routes

**Files:** Create `src/lib/guided-stories.ts`, `src/lib/guided-stories.test.ts`.

**Interfaces:** `StoryId` is `"majors" | "navi" | "astralis" | "faze" | "vitality" | "fnatic"`; `StoryStop` contains `eventId`, `cityId`, `cityZh`, `lat`, `lng`, `event: STierEvent`, `caption`; `getStory(id: StoryId): Story` returns title/description/stops; `STORY_OPTIONS` supplies picker order.

- [ ] Write tests asserting each route has 4–5 ascending stops from `S_TIER_CITIES`, unique city IDs, exact matching event records, and missing input is skipped.
- [ ] Run `node --experimental-strip-types --test src/lib/guided-stories.test.ts`; verify RED.
- [ ] Implement curated Major event-name references and deterministic team stop selection from `teamJourney`, using actual archive city/event IDs.
- [ ] Run focused test; verify GREEN.

### Task 2: Coordinate story navigation with globe state

**Files:** Modify `src/store/globe-store.ts`; create `src/lib/guided-story-state.test.ts` if pure state extraction is useful.

**Interfaces:** Store adds `activeStoryId: StoryId | null`, `storyStep: number`, `startStory(id)`, `moveStory(delta)`, `stopStory()`, `openStoryEvent()`.

- [ ] Write tests for start/next/previous/clamping, opening detail without losing route, and exiting on manual navigation.
- [ ] Run focused test; verify RED.
- [ ] Implement state changes using current `requestFlyTo`, year range, selectedMarker and focusedEventId conventions; route start closes competing overlays and disables timeline playback.
- [ ] Run focused and existing exploration tests; verify GREEN.

### Task 3: Add picker and chapter UI

**Files:** Create `src/features/hud/StoryGuide.tsx`; modify `src/features/hud/Hud.tsx`, `Toolbar.tsx`, `ExploreIntro.tsx`, `src/features/app/App.tsx`, `src/styles.css`.

**Interfaces:** Toolbar opens story picker; starting a route shows card; card exposes previous/next/open details/exit and progress. Existing detail closes back to same chapter.

- [ ] Add picker and chapter card with semantic buttons, chapter count, real event title/champion, and a short factual caption.
- [ ] Add story launch to intro and hide intro during a story; use existing dark/gold token system and responsive layout.
- [ ] Typecheck and build; correct any errors.
- [ ] Browser-test both routes and detail return on desktop and 390px mobile; run dev and built-output smoke checks and visually inspect screenshots.

No automatic commits: this checkout already contains user and prior-round uncommitted changes.
