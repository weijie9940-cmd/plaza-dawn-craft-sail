import {
  S_TIER_CITIES,
  championKey,
  type STierCity,
  type STierEvent,
} from "../data/s-tier-events.ts";
import { majorEventId } from "../data/major-trophy-photos.ts";

export type StoryId = "majors" | "navi" | "astralis" | "faze" | "vitality" | "fnatic";

export type StoryStop = {
  eventId: string;
  cityId: string;
  cityZh: string;
  lat: number;
  lng: number;
  event: STierEvent;
  caption: string;
};

export type StoryOption = { id: StoryId; title: string; description: string };
export type Story = StoryOption & { stops: StoryStop[] };

export const STORY_OPTIONS: StoryOption[] = [
  { id: "majors", title: "Major 跨城旅程", description: "循着五座城市，走过 Major 的不同年代" },
  { id: "navi", title: "NAVI 夺冠足迹", description: "沿着 NAVI 的冠军城市前进" },
  { id: "astralis", title: "Astralis 夺冠足迹", description: "从冠军赛事看 Astralis 的地图轨迹" },
  { id: "faze", title: "FaZe 夺冠足迹", description: "跨城市追随 FaZe 的冠军记录" },
  { id: "vitality", title: "Vitality 夺冠足迹", description: "探索 Vitality 的冠军旅程" },
  { id: "fnatic", title: "fnatic 夺冠足迹", description: "回到 fnatic 的早期与后续夺冠城市" },
];

const MAJOR_NAMES = [
  "DreamHack Winter 2013",
  "MLG Major Championship: Columbus 2016",
  "PGL Major Stockholm 2021",
  "Perfect World Shanghai Major 2024",
  "BLAST.tv Austin Major 2025",
];

// Keep chapters stable when the archive is refreshed. Missing events are
// omitted until an editor chooses a replacement for that chapter.
const TEAM_EVENT_IDS: Record<Exclude<StoryId, "majors">, string[]> = {
  navi: [
    "2014-05-sltv-starseries-ix-finals",
    "2018-06-cs-go-asia-championships-2018",
    "2021-11-pgl-major-stockholm-2021",
    "2024-03-pgl-major-copenhagen-2024",
    "2026-05-iem-atlanta-2026",
  ],
  astralis: [
    "2016-12-ecs-season-2-finals-2016",
    "2017-01-eleague-major-atlanta-2017",
    "2018-09-faceit-major-london-2018",
    "2019-03-iem-katowice-major-2019",
    "2019-09-starladder-berlin-major-2019",
  ],
  faze: [
    "2017-04-starseries-i-league-season-3",
    "2018-05-iem-sydney-2018",
    "2019-04-blast-pro-series-miami-2019",
    "2022-05-pgl-major-antwerp-2022",
    "2024-04-iem-chengdu-2024",
  ],
  vitality: [
    "2019-05-cs-summit-4",
    "2023-05-blast-tv-paris-major-2023",
    "2025-03-blast-open-lisbon-2025",
    "2025-06-blast-tv-austin-major-2025",
    "2025-12-starladder-budapest-major-2025",
  ],
  fnatic: [
    "2013-11-dreamhack-winter-2013",
    "2014-11-eswc-2014",
    "2015-03-esl-one-katowice-2015",
    "2015-08-esl-one-cologne-2015",
    "2019-10-dreamhack-masters-malm-2019",
  ],
};

type LocatedEvent = { city: STierCity; event: STierEvent };

export function clampStoryStep(current: number, delta: number, length: number) {
  return Math.max(0, Math.min(current + delta, Math.max(0, length - 1)));
}

export function getStory(id: StoryId, cities: readonly STierCity[] = S_TIER_CITIES): Story {
  const option = STORY_OPTIONS.find((row) => row.id === id);
  if (!option) throw new Error(`Unknown story: ${id}`);
  const events: LocatedEvent[] = cities.flatMap((city) =>
    city.events.map((event) => ({ city, event })),
  );
  const selected = id === "majors"
    ? MAJOR_NAMES.flatMap((name) => events.find((row) => row.event.name === name && row.event.tier === "Major") ?? [])
    : TEAM_EVENT_IDS[id].flatMap((eventId) =>
      events.find((row) => majorEventId(row.event) === eventId && championKey(row.event.champion) === id) ?? [],
    );
  const stops = selected.map(({ city, event }): StoryStop => ({
    eventId: majorEventId(event),
    cityId: city.id,
    cityZh: city.cityZh,
    lat: city.lat,
    lng: city.lng,
    event,
    caption: id === "majors"
      ? `${event.year} 年，${city.cityZh}这场 Major 的冠军是 ${event.champion}。`
      : `${event.year} 年，${event.champion} 在${city.cityZh}赢得这场赛事。`,
  }));
  return { ...option, stops };
}
