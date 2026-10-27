import data from "./countries.json";

export type Country = {
  iso: string;
  nameEn: string;
  nameZh: string;
  capital: string;
  capitalZh: string;
  lat: number;
  lng: number;
};

export const COUNTRIES: Country[] = data as Country[];
export const COUNTRY_BY_ISO = new Map(COUNTRIES.map((c) => [c.iso, c]));
export const COUNTRY_COUNT = COUNTRIES.length;

/** Capital city centers for roster countries. Missing keys fall back to the country centroid. */
export const CAPITAL_COORDS: Record<string, { lat: number; lng: number }> = {
  AR: { lat: -34.6, lng: -58.38 },
  AT: { lat: 48.21, lng: 16.37 },
  AU: { lat: -35.28, lng: 149.13 },
  BA: { lat: 43.86, lng: 18.41 },
  BE: { lat: 50.85, lng: 4.35 },
  BG: { lat: 42.7, lng: 23.32 },
  BR: { lat: -15.79, lng: -47.88 },
  BY: { lat: 53.9, lng: 27.56 },
  CA: { lat: 45.42, lng: -75.7 },
  CH: { lat: 46.95, lng: 7.45 },
  CL: { lat: -33.45, lng: -70.67 },
  CZ: { lat: 50.08, lng: 14.44 },
  DE: { lat: 52.52, lng: 13.4 },
  DK: { lat: 55.68, lng: 12.57 },
  EE: { lat: 59.44, lng: 24.75 },
  ES: { lat: 40.42, lng: -3.7 },
  FI: { lat: 60.17, lng: 24.94 },
  FR: { lat: 48.86, lng: 2.35 },
  GB: { lat: 51.51, lng: -0.13 },
  GT: { lat: 14.63, lng: -90.51 },
  HU: { lat: 47.5, lng: 19.04 },
  IL: { lat: 31.77, lng: 35.21 },
  KZ: { lat: 51.17, lng: 71.43 },
  LT: { lat: 54.69, lng: 25.28 },
  LV: { lat: 56.95, lng: 24.11 },
  ME: { lat: 42.43, lng: 19.26 },
  MK: { lat: 42.0, lng: 21.43 },
  MN: { lat: 47.89, lng: 106.91 },
  NL: { lat: 52.37, lng: 4.9 },
  NO: { lat: 59.91, lng: 10.75 },
  PL: { lat: 52.23, lng: 21.01 },
  PT: { lat: 38.72, lng: -9.14 },
  RO: { lat: 44.43, lng: 26.1 },
  RS: { lat: 44.79, lng: 20.45 },
  RU: { lat: 55.76, lng: 37.62 },
  SE: { lat: 59.33, lng: 18.07 },
  SK: { lat: 48.15, lng: 17.11 },
  TR: { lat: 39.93, lng: 32.86 },
  UA: { lat: 50.45, lng: 30.52 },
  US: { lat: 38.91, lng: -77.04 },
  UY: { lat: -34.9, lng: -56.16 },
  UZ: { lat: 41.3, lng: 69.24 },
  XK: { lat: 42.66, lng: 21.17 },
  ZA: { lat: -25.75, lng: 28.19 },
};

export function flyTargetForCountry(iso: string): { lat: number; lng: number } | null {
  const capital = CAPITAL_COORDS[iso];
  if (capital && Number.isFinite(capital.lat) && Number.isFinite(capital.lng)) return capital;
  const country = COUNTRY_BY_ISO.get(iso);
  if (country && Number.isFinite(country.lat) && Number.isFinite(country.lng)) {
    return { lat: country.lat, lng: country.lng };
  }
  return null;
}

const ALIASES: Record<string, string[]> = {
  US: ["usa", "america", "united states of america", "美利坚"],
  GB: ["uk", "britain", "england", "great britain", "英国"],
  KR: ["korea", "south korea", "hanguk"],
  KP: ["dprk", "north korea"],
  RU: ["russia", "俄国", "苏联"],
  CN: ["prc", "china", "中华", "china"],
  TW: ["taiwan", "taipei"],
  JP: ["japan", "nippon"],
  DE: ["germany", "deutschland"],
  FR: ["france"],
  AE: ["uae", "emirates"],
  CZ: ["czech", "czechia"],
  NL: ["holland", "netherlands"],
  CH: ["switzerland"],
  CD: ["drc", "congo-kinshasa"],
  CG: ["congo-brazzaville"],
};

export function searchCountries(query: string, limit = 8): Country[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const scored: { c: Country; s: number }[] = [];
  for (const c of COUNTRIES) {
    const hay = [
      c.nameZh,
      c.nameEn,
      c.iso,
      c.capital,
      c.capitalZh,
      ...(ALIASES[c.iso] ?? []),
    ].map((x) => x.toLowerCase());
    let s = 0;
    if (c.nameZh === query.trim() || c.nameEn.toLowerCase() === q) s = 100;
    else if (c.nameZh.startsWith(query.trim()) || c.nameEn.toLowerCase().startsWith(q)) s = 80;
    else if (c.iso.toLowerCase() === q) s = 90;
    else if (hay.some((h) => h.startsWith(q))) s = 70;
    else if (hay.some((h) => h.includes(q))) s = 40;
    if (s) scored.push({ c, s });
  }
  scored.sort((a, b) => b.s - a.s || a.c.nameZh.localeCompare(b.c.nameZh, "zh-CN"));
  return scored.slice(0, limit).map((x) => x.c);
}
