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
