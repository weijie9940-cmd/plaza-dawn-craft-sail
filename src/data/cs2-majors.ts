import { DATA_SNAPSHOT } from "./sync/snapshot.ts";
export type MajorEvent = {
  name: string;
  year: number;
  winner: string;
};

export type MajorCity = {
  id: string;
  city: string;
  cityZh: string;
  country: string;
  countryZh: string;
  lat: number;
  lng: number;
  events: MajorEvent[];
};

export const CS2_MAJORS: MajorCity[] = [
  {
    id: "jonkoping",
    city: "Jönköping",
    cityZh: "延雪平",
    country: "Sweden",
    countryZh: "瑞典",
    lat: 57.7826,
    lng: 14.1618,
    events: [
      { name: "DreamHack Winter", year: 2013, winner: "fnatic" },
      { name: "DreamHack Winter", year: 2014, winner: "LDLC" },
    ],
  },
  {
    id: "katowice",
    city: "Katowice",
    cityZh: "卡托维兹",
    country: "Poland",
    countryZh: "波兰",
    lat: 50.2649,
    lng: 19.0238,
    events: [
      { name: "EMS One Katowice", year: 2014, winner: "Virtus.pro" },
      { name: "ESL One Katowice", year: 2015, winner: "fnatic" },
      { name: "IEM Katowice Major", year: 2019, winner: "Astralis" },
    ],
  },
  {
    id: "cologne",
    city: "Cologne",
    cityZh: "科隆",
    country: "Germany",
    countryZh: "德国",
    lat: 50.9375,
    lng: 6.9603,
    events: [
      { name: "ESL One Cologne", year: 2014, winner: "Ninjas in Pyjamas" },
      { name: "ESL One Cologne", year: 2015, winner: "fnatic" },
      { name: "ESL One Cologne", year: 2016, winner: "SK Gaming" },
      { name: "IEM Cologne Major", year: 2026, winner: "Falcons" },
    ],
  },
  {
    id: "cluj",
    city: "Cluj-Napoca",
    cityZh: "克卢日-纳波卡",
    country: "Romania",
    countryZh: "罗马尼亚",
    lat: 46.7712,
    lng: 23.6236,
    events: [{ name: "DreamHack Open Cluj-Napoca", year: 2015, winner: "Envy" }],
  },
  {
    id: "columbus",
    city: "Columbus",
    cityZh: "哥伦布",
    country: "United States",
    countryZh: "美国",
    lat: 39.9612,
    lng: -82.9988,
    events: [{ name: "MLG Columbus", year: 2016, winner: "Luminosity" }],
  },
  {
    id: "atlanta",
    city: "Atlanta",
    cityZh: "亚特兰大",
    country: "United States",
    countryZh: "美国",
    lat: 33.749,
    lng: -84.388,
    events: [{ name: "ELEAGUE Major Atlanta", year: 2017, winner: "Astralis" }],
  },
  {
    id: "krakow",
    city: "Kraków",
    cityZh: "克拉科夫",
    country: "Poland",
    countryZh: "波兰",
    lat: 50.0647,
    lng: 19.945,
    events: [{ name: "PGL Major Kraków", year: 2017, winner: "Gambit" }],
  },
  {
    id: "boston",
    city: "Boston",
    cityZh: "波士顿",
    country: "United States",
    countryZh: "美国",
    lat: 42.3601,
    lng: -71.0589,
    events: [{ name: "ELEAGUE Major Boston", year: 2018, winner: "Cloud9" }],
  },
  {
    id: "london",
    city: "London",
    cityZh: "伦敦",
    country: "United Kingdom",
    countryZh: "英国",
    lat: 51.5074,
    lng: -0.1278,
    events: [{ name: "FACEIT Major London", year: 2018, winner: "Astralis" }],
  },
  {
    id: "berlin",
    city: "Berlin",
    cityZh: "柏林",
    country: "Germany",
    countryZh: "德国",
    lat: 52.52,
    lng: 13.405,
    events: [{ name: "StarLadder Berlin Major", year: 2019, winner: "Astralis" }],
  },
  {
    id: "stockholm",
    city: "Stockholm",
    cityZh: "斯德哥尔摩",
    country: "Sweden",
    countryZh: "瑞典",
    lat: 59.3293,
    lng: 18.0686,
    events: [{ name: "PGL Major Stockholm", year: 2021, winner: "Natus Vincere" }],
  },
  {
    id: "antwerp",
    city: "Antwerp",
    cityZh: "安特卫普",
    country: "Belgium",
    countryZh: "比利时",
    lat: 51.2194,
    lng: 4.4025,
    events: [{ name: "PGL Major Antwerp", year: 2022, winner: "FaZe Clan" }],
  },
  {
    id: "rio",
    city: "Rio de Janeiro",
    cityZh: "里约热内卢",
    country: "Brazil",
    countryZh: "巴西",
    lat: -22.9068,
    lng: -43.1729,
    events: [{ name: "IEM Rio Major", year: 2022, winner: "Outsiders" }],
  },
  {
    id: "paris",
    city: "Paris",
    cityZh: "巴黎",
    country: "France",
    countryZh: "法国",
    lat: 48.8566,
    lng: 2.3522,
    events: [{ name: "BLAST.tv Paris Major", year: 2023, winner: "Vitality" }],
  },
  {
    id: "copenhagen",
    city: "Copenhagen",
    cityZh: "哥本哈根",
    country: "Denmark",
    countryZh: "丹麦",
    lat: 55.6761,
    lng: 12.5683,
    events: [{ name: "PGL Major Copenhagen", year: 2024, winner: "Natus Vincere" }],
  },
  {
    id: "shanghai",
    city: "Shanghai",
    cityZh: "上海",
    country: "China",
    countryZh: "中国",
    lat: 31.2304,
    lng: 121.4737,
    events: [{ name: "Perfect World Shanghai Major", year: 2024, winner: "Team Spirit" }],
  },
  {
    id: "austin",
    city: "Austin",
    cityZh: "奥斯汀",
    country: "United States",
    countryZh: "美国",
    lat: 30.2672,
    lng: -97.7431,
    events: [{ name: "BLAST.tv Austin Major", year: 2025, winner: "Vitality" }],
  },
  {
    id: "budapest",
    city: "Budapest",
    cityZh: "布达佩斯",
    country: "Hungary",
    countryZh: "匈牙利",
    lat: 47.4979,
    lng: 19.0402,
    events: [{ name: "StarLadder Budapest Major", year: 2025, winner: "Vitality" }],
  },
];

// Extend the Major-only view from the same validated additions as the full map.
for (const row of DATA_SNAPSHOT.events) {
  if (row.event.tier !== "Major") continue;
  let city = CS2_MAJORS.find(city => city.id === row.city.id);
  if (!city) {
    city = { ...row.city, country: "", countryZh: "国家资料待补充", events: [] };
    CS2_MAJORS.push(city);
  }
  if (!city.events.some(event => event.name === row.event.name && event.year === row.event.year)) {
    city.events.push({name: row.event.name,year: row.event.year,winner: row.event.champion});
  }
}
