/** Local MVP medal portraits. Paths are same-origin; do not hotlink. */

const PHOTO_IDS = [
  "Brehze",
  "EliGE",
  "Ethan",
  "FalleN",
  "GuardiaN",
  "Jame",
  "KRIMZ",
  "MSL",
  "Magisk",
  "NAF",
  "NiKo",
  "REZ",
  "Snax",
  "Spinx",
  "SunPayus",
  "Techno",
  "Xyp9x",
  "ZywOo",
  "autimatic",
  "broky",
  "cmtry",
  "coldzera",
  "degster",
  "device",
  "donk",
  "dupreeh",
  "felps",
  "fer",
  "flusha",
  "gla1ve",
  "huNter-",
  "iM",
  "jL",
  "jabbi",
  "k0nfig",
  "kennyS",
  "m0NESY",
  "makazze",
  "molodoy",
  "oskar",
  "rain",
  "s1mple",
  "sergej",
  "tarik",
  "torzsi",
] as const;

const NO_PHOTO_IDS = [
  "AdreN",
  "Aerial",
  "Ax1Le",
  "Dosia",
  "GeT_RiGhT",
  "HObbit",
  "Happy",
  "HeavyGod",
  "JW",
  "Kjaerbye",
  "NBK-",
  "NEO",
  "RUSH",
  "ScreaM",
  "Twistzz",
  "Xizt",
  "b1t",
  "boltz",
  "f0rest",
  "flamie",
  "friberg",
  "kioShiMa",
  "olofmeister",
  "pashaBiceps",
  "ropz",
  "seized",
  "shox",
  "w0nderful",
] as const;

/** Historical spelling. Same player and the same local file as KRIMZ. */
const ALIASES: Record<string, string> = {
  KRiMZ: "KRIMZ",
};

const PHOTO_ID_SET = new Set<string>(PHOTO_IDS);
const NO_PHOTO_SET = new Set<string>(NO_PHOTO_IDS);

export function canonicalMvpId(id: string) {
  return ALIASES[id] ?? id;
}

/** Local photo URL, or null when this id must not trigger an image request. */
export function mvpPhotoSrc(id: string): string | null {
  const key = canonicalMvpId(id);
  if (NO_PHOTO_SET.has(key) || !PHOTO_ID_SET.has(key)) return null;
  return `/mvp-photos/${key}.jpg`;
}

export const MVP_PHOTO_ROSTER: { id: string; src: string | null }[] = [
  ...PHOTO_IDS.map((id) => ({ id, src: `/mvp-photos/${id}.jpg` })),
  ...NO_PHOTO_IDS.map((id) => ({ id, src: null })),
];
