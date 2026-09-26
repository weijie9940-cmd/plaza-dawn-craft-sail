import type { STierEvent } from "@/data/s-tier-events";

export type MajorTrophyPhoto = {
  src: string;
  width: number;
  height: number;
  credit?: string;
  sourceUrl?: string;
};

/** Curated Major trophy photos, keyed by majorEventId. Static; do not read tmp/ at runtime. */
export const MAJOR_TROPHY_PHOTOS: Record<string, MajorTrophyPhoto> = {
  "2013-11-dreamhack-winter-2013": {
    src: "/champions-major/2013-11-dreamhack-winter-2013.webp",
    width: 1024,
    height: 683,
    credit: "Rikard Söderberg / DreamHack",
    sourceUrl: "https://www.flickr.com/photos/dreamhack/sets/72157638141635073",
  },
  "2014-03-ems-one-katowice-2014": {
    src: "/champions-major/2014-03-ems-one-katowice-2014.webp",
    width: 1200,
    height: 800,
    credit: "Helena Kristiansson / ESL",
    sourceUrl: "https://www.flickr.com/photos/eslphotos/albums/72157642344467744",
  },
  "2014-08-esl-one-cologne-2014": {
    src: "/champions-major/2014-08-esl-one-cologne-2014.webp",
    width: 520,
    height: 275,
    credit: "Helena Kristiansson / ESL",
    sourceUrl: "https://www.flickr.com/photos/eslphotos/albums/72157646475069735",
  },
  "2014-11-dreamhack-winter-2014": {
    src: "/champions-major/2014-11-dreamhack-winter-2014.webp",
    width: 1200,
    height: 800,
    credit: "VaKarM.net / DreamHack",
    sourceUrl: "https://www.flickr.com/photos/202574431@N07/54509239536/",
  },
  "2015-03-esl-one-katowice-2015": {
    src: "/champions-major/2015-03-esl-one-katowice-2015.webp",
    width: 730,
    height: 487,
    credit: "Helena Kristiansson / ESL",
    sourceUrl: "https://www.flickr.com/photos/eslphotos/albums/72157651286253836",
  },
  "2015-08-esl-one-cologne-2015": {
    src: "/champions-major/2015-08-esl-one-cologne-2015.webp",
    width: 1200,
    height: 800,
    credit: "Helena Kristiansson / ESL",
    sourceUrl: "https://www.flickr.com/photos/eslphotos/albums/72157657625608401",
  },
  "2015-11-dreamhack-open-cluj-napoca-2015": {
    src: "/champions-major/2015-11-dreamhack-open-cluj-napoca-2015.webp",
    width: 1200,
    height: 800,
    credit: "Adela Sznajder / DreamHack",
    sourceUrl: "https://www.flickr.com/photos/dreamhack/22821994330/",
  },
  "2016-04-mlg-major-championship-columbus-2016": {
    src: "/champions-major/2016-04-mlg-major-championship-columbus-2016.webp",
    width: 1200,
    height: 800,
    credit: "MLG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:MLG_Columbus_CSGO_Major_cup.jpg",
  },
  "2016-07-esl-one-cologne-2016": {
    src: "/champions-major/2016-07-esl-one-cologne-2016.webp",
    width: 1600,
    height: 1066,
    credit: "Helena Kristiansson / ESL",
    sourceUrl: "https://www.flickr.com/photos/eslphotos/28169123891/",
  },
  "2017-01-eleague-major-atlanta-2017": {
    src: "/champions-major/2017-01-eleague-major-atlanta-2017.webp",
    width: 1200,
    height: 800,
    credit: "VaKarM.net / ELEAGUE",
    sourceUrl: "https://www.flickr.com/photos/202574431@N07/54525799410/",
  },
  "2017-07-pgl-major-krak-w-2017": {
    src: "/champions-major/2017-07-pgl-major-krak-w-2017.webp",
    width: 1600,
    height: 1068,
    credit: "PGL / João Ferreira",
    sourceUrl: "https://www.flickr.com/photos/pglesports/36073469456/",
  },
  "2018-01-eleague-major-boston-2018": {
    src: "/champions-major/2018-01-eleague-major-boston-2018.webp",
    width: 1200,
    height: 800,
    credit: "martiesports / ELEAGUE",
    sourceUrl: "https://www.flickr.com/photos/163136239@N03/39703564045/",
  },
  "2018-09-faceit-major-london-2018": {
    src: "/champions-major/2018-09-faceit-major-london-2018.webp",
    width: 1200,
    height: 800,
  },
  "2019-03-iem-katowice-major-2019": {
    src: "/champions-major/2019-03-iem-katowice-major-2019.webp",
    width: 1200,
    height: 800,
  },
  "2019-09-starladder-berlin-major-2019": {
    src: "/champions-major/2019-09-starladder-berlin-major-2019.webp",
    width: 1200,
    height: 800,
  },
  "2021-11-pgl-major-stockholm-2021": {
    src: "/champions-major/2021-11-pgl-major-stockholm-2021.webp",
    width: 1200,
    height: 800,
  },
  "2022-05-pgl-major-antwerp-2022": {
    src: "/champions-major/2022-05-pgl-major-antwerp-2022.webp",
    width: 1570,
    height: 1142,
  },
  "2022-11-iem-rio-major-2022": {
    src: "/champions-major/2022-11-iem-rio-major-2022.webp",
    width: 1200,
    height: 800,
  },
  "2023-05-blast-tv-paris-major-2023": {
    src: "/champions-major/2023-05-blast-tv-paris-major-2023.webp",
    width: 1200,
    height: 800,
  },
  "2024-03-pgl-major-copenhagen-2024": {
    src: "/champions-major/2024-03-pgl-major-copenhagen-2024.webp",
    width: 739,
    height: 415,
  },
  "2024-12-perfect-world-shanghai-major-2024": {
    src: "/champions-major/2024-12-perfect-world-shanghai-major-2024.webp",
    width: 597,
    height: 335,
  },
  "2025-06-blast-tv-austin-major-2025": {
    src: "/champions-major/2025-06-blast-tv-austin-major-2025.webp",
    width: 1024,
    height: 683,
  },
  "2025-12-starladder-budapest-major-2025": {
    src: "/champions-major/2025-12-starladder-budapest-major-2025.webp",
    width: 1600,
    height: 1067,
  },
  "2026-06-iem-cologne-major-2026": {
    src: "/champions-major/2026-06-iem-cologne-major-2026.webp",
    width: 1600,
    height: 1067,
  },
};

/** year-mm-name, lowercased, non-alnum runs collapsed to a single hyphen. */
export function majorEventId(ev: Pick<STierEvent, "year" | "month" | "name">) {
  const month = String(ev.month).padStart(2, "0");
  return `${ev.year}-${month}-${ev.name}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
