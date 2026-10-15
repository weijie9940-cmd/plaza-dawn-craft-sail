// 来源 tmp/current-ranking-final.json（HLTV 2026-10-05 周榜，2026-10 验收）
// 生成脚本 tmp/20-gen-ranking.cjs
// 勿手改，改数据请重跑脚本
// 静态数据，运行时不读 tmp/

export type RankingPlayer = { nick: string; country: string; hltvPlayerUrl: string | null };
export type RankingCoach = { nick: string; country: string };
export type RankingHonour = { event: string; date: string; place: string; tier: "S" | "Major" };
export type WorldRankingTeam = {
  rank: number;
  team: string; // 榜单上的队名
  teamKey: string; // 与 S_TIER_EVENTS 的 champion 写法对齐（可能不在本站赛事里）
  points: number;
  change: string; // "0" | "+N" | "-N"，相对上一期
  roster: RankingPlayer[];
  coach: RankingCoach | null;
  honours: { count: number; list: RankingHonour[] };
  teamPageUrl: string;
  liquipediaUrl: string;
  confidence: "high" | "medium" | "low";
};
export const WORLD_RANKING: {
  rankingDate: string;
  pageTitle: string;
  sourceUrl: string;
  teams: WorldRankingTeam[];
} = {
  "rankingDate": "2026-10-05",
  "pageTitle": "Counter-Strike World ranking on October 5th, 2026",
  "sourceUrl": "https://www.hltv.org/ranking/teams/2026/october/5",
  "teams": [
    {
      "rank": 1,
      "team": "Spirit",
      "teamKey": "Team Spirit",
      "points": 1000,
      "change": "0",
      "roster": [
        {
          "nick": "sh1ro",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/16920/sh1ro"
        },
        {
          "nick": "magixx",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/18317/magixx"
        },
        {
          "nick": "tN1R",
          "country": "BY",
          "hltvPlayerUrl": "https://www.hltv.org/player/19808/tn1r"
        },
        {
          "nick": "zont1x",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/20423/zont1x"
        },
        {
          "nick": "donk",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/21167/donk"
        }
      ],
      "coach": {
        "nick": "hally",
        "country": "RU"
      },
      "honours": {
        "count": 11,
        "list": [
          {
            "event": "IEM Katowice 2024",
            "date": "2024-02-11",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier Spring Final 2024",
            "date": "2024-06-16",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BetBoom Dacha Belgrade 2024 #2",
            "date": "2024-09-01",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Perfect World Shanghai Major 2024",
            "date": "2024-12-15",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "BLAST Bounty 2025 Season 1 Finals",
            "date": "2025-01-26",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "PGL Astana 2025",
            "date": "2025-05-18",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Cologne 2025",
            "date": "2025-08-03",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Bounty 2025 Season 2 Finals",
            "date": "2025-08-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "PGL Astana 2026",
            "date": "2026-05-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Esports World Cup 2026",
            "date": "2026-08-23",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Open Porto 2026",
            "date": "2026-09-06",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/7020/spirit",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Team_Spirit",
      "confidence": "high"
    },
    {
      "rank": 2,
      "team": "Vitality",
      "teamKey": "Team Vitality",
      "points": 686,
      "change": "0",
      "roster": [
        {
          "nick": "apEX",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
        },
        {
          "nick": "ropz",
          "country": "EE",
          "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
        },
        {
          "nick": "ZywOo",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
        },
        {
          "nick": "flameZ",
          "country": "IL",
          "hltvPlayerUrl": "https://www.hltv.org/player/16693/flamez"
        },
        {
          "nick": "mezii",
          "country": "GB",
          "hltvPlayerUrl": "https://www.hltv.org/player/18462/mezii"
        }
      ],
      "coach": {
        "nick": "XTQZZZ",
        "country": "FR"
      },
      "honours": {
        "count": 28,
        "list": [
          {
            "event": "cs_summit 4",
            "date": "2019-05-26",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ECS Season 7 Finals",
            "date": "2019-06-09",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "EPICENTER 2019",
            "date": "2019-12-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Intel Extreme Masters XV - Beijing Online: Europe",
            "date": "2020-11-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier: Fall 2020",
            "date": "2020-12-13",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Winter 2021",
            "date": "2021-12-12",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 16",
            "date": "2022-10-02",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Rio 2023",
            "date": "2023-04-23",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST.tv Paris Major 2023",
            "date": "2023-05-21",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "Gamers8 2023",
            "date": "2023-08-20",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier Fall Final 2023",
            "date": "2023-11-26",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier World Final 2023",
            "date": "2023-12-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Cologne 2024",
            "date": "2024-08-18",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Katowice 2025",
            "date": "2025-02-09",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 21",
            "date": "2025-03-16",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Open Lisbon 2025",
            "date": "2025-03-30",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Melbourne 2025",
            "date": "2025-04-27",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Rivals 2025 Season 1",
            "date": "2025-05-04",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Dallas 2025",
            "date": "2025-05-25",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST.tv Austin Major 2025",
            "date": "2025-06-22",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "ESL Pro League Season 22",
            "date": "2025-10-12",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "StarLadder Budapest Major 2025",
            "date": "2025-12-14",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "IEM Kraków 2026",
            "date": "2026-02-08",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "PGL Cluj-Napoca 2026",
            "date": "2026-02-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Open Rotterdam 2026",
            "date": "2026-03-29",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Rio 2026",
            "date": "2026-04-19",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Rivals 2026 Season 1",
            "date": "2026-05-03",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "StarLadder StarSeries Fall 2026",
            "date": "2026-09-20",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/9565/vitality",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Team_Vitality",
      "confidence": "medium"
    },
    {
      "rank": 3,
      "team": "MOUZ",
      "teamKey": "MOUZ",
      "points": 562,
      "change": "+1",
      "roster": [
        {
          "nick": "torzsi",
          "country": "HU",
          "hltvPlayerUrl": "https://www.hltv.org/player/18072/torzsi"
        },
        {
          "nick": "Spinx",
          "country": "IL",
          "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
        },
        {
          "nick": "xertioN",
          "country": "IL",
          "hltvPlayerUrl": "https://www.hltv.org/player/20312/xertion"
        },
        {
          "nick": "PR",
          "country": "CZ",
          "hltvPlayerUrl": "https://www.hltv.org/player/22279/pr"
        },
        {
          "nick": "xelex",
          "country": "HU",
          "hltvPlayerUrl": "https://www.hltv.org/player/24457/xelex"
        }
      ],
      "coach": {
        "nick": "sycrone",
        "country": "DK"
      },
      "honours": {
        "count": 11,
        "list": [
          {
            "event": "ESG Tour Mykonos 2017",
            "date": "2017-09-10",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "StarSeries i-League Season 4",
            "date": "2018-02-25",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL One New York 2018",
            "date": "2018-09-30",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "CS:GO Asia Championships 2019",
            "date": "2019-11-24",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 10 Finals",
            "date": "2019-12-08",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "cs_summit 5",
            "date": "2019-12-15",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 18",
            "date": "2023-10-01",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 19",
            "date": "2024-05-12",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BetBoom Dacha Belgrade 2024 #1",
            "date": "2024-05-19",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "PGL Cluj-Napoca 2025",
            "date": "2025-02-23",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Bounty 2026 Season 2 Finals",
            "date": "2026-08-02",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/4494/mouz",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/MOUZ",
      "confidence": "high"
    },
    {
      "rank": 4,
      "team": "FURIA",
      "teamKey": "FURIA",
      "points": 534,
      "change": "-1",
      "roster": [
        {
          "nick": "FalleN",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
        },
        {
          "nick": "yuurih",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/12553/yuurih"
        },
        {
          "nick": "YEKINDAR",
          "country": "LV",
          "hltvPlayerUrl": "https://www.hltv.org/player/13915/yekindar"
        },
        {
          "nick": "KSCERATO",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/15631/kscerato"
        },
        {
          "nick": "molodoy",
          "country": "KZ",
          "hltvPlayerUrl": "https://www.hltv.org/player/24144/molodoy"
        }
      ],
      "coach": {
        "nick": "sidde",
        "country": "BR"
      },
      "honours": {
        "count": 4,
        "list": [
          {
            "event": "ESL Pro League Season 12: North America",
            "date": "2020-09-27",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "FISSURE Playground #2",
            "date": "2025-09-21",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Chengdu 2025",
            "date": "2025-11-09",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Rivals 2025 Season 2",
            "date": "2025-11-16",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/8297/furia",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/FURIA_Esports",
      "confidence": "high"
    },
    {
      "rank": 5,
      "team": "Falcons",
      "teamKey": "Team Falcons",
      "points": 496,
      "change": "0",
      "roster": [
        {
          "nick": "karrigan",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
        },
        {
          "nick": "NiKo",
          "country": "BA",
          "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
        },
        {
          "nick": "TeSeS",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/12018/teses"
        },
        {
          "nick": "m0NESY",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/19230/m0nesy"
        },
        {
          "nick": "kyousuke",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/24177/kyousuke"
        }
      ],
      "coach": {
        "nick": "zonic",
        "country": "DK"
      },
      "honours": {
        "count": 2,
        "list": [
          {
            "event": "PGL Bucharest 2025",
            "date": "2025-04-13",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Cologne Major 2026",
            "date": "2026-06-21",
            "place": "1st",
            "tier": "Major"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/11283/falcons",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Team_Falcons",
      "confidence": "high"
    },
    {
      "rank": 6,
      "team": "Legacy",
      "teamKey": "Legacy",
      "points": 430,
      "change": "0",
      "roster": [
        {
          "nick": "arT",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/12521/art"
        },
        {
          "nick": "dumau",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/15698/dumau"
        },
        {
          "nick": "latto",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/19045/latto"
        },
        {
          "nick": "n1ssim",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/19686/n1ssim"
        },
        {
          "nick": "try",
          "country": "AR",
          "hltvPlayerUrl": "https://www.hltv.org/player/19869/try"
        }
      ],
      "coach": {
        "nick": "adrrr",
        "country": "BR"
      },
      "honours": {
        "count": 2,
        "list": [
          {
            "event": "CS Asia Championships 2026",
            "date": "2026-05-24",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "FISSURE Playground #3",
            "date": "2026-09-13",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/12468/legacy",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Legacy",
      "confidence": "medium"
    },
    {
      "rank": 7,
      "team": "G2",
      "teamKey": "G2 Esports",
      "points": 384,
      "change": "+1",
      "roster": [
        {
          "nick": "huNter-",
          "country": "BA",
          "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
        },
        {
          "nick": "NertZ",
          "country": "IL",
          "hltvPlayerUrl": "https://www.hltv.org/player/9436/nertz"
        },
        {
          "nick": "r1nkle",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/20425/r1nkle"
        },
        {
          "nick": "HeavyGod",
          "country": "IL",
          "hltvPlayerUrl": "https://www.hltv.org/player/20447/heavygod"
        },
        {
          "nick": "MATYS",
          "country": "SK",
          "hltvPlayerUrl": "https://www.hltv.org/player/21062/matys"
        }
      ],
      "coach": {
        "nick": "sAw",
        "country": "FI"
      },
      "honours": {
        "count": 11,
        "list": [
          {
            "event": "ECS Season 1 Finals 2016",
            "date": "2016-06-26",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 5 Finals",
            "date": "2017-06-04",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Masters Malmö 2017",
            "date": "2017-09-03",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Champions Cup Finals 2019",
            "date": "2019-12-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier World Final 2022",
            "date": "2022-12-18",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Katowice 2023",
            "date": "2023-02-12",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Cologne 2023",
            "date": "2023-08-06",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Dallas 2024",
            "date": "2024-06-02",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier Fall Final 2024",
            "date": "2024-09-29",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier World Final 2024",
            "date": "2024-11-03",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Open London 2025",
            "date": "2025-09-07",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/5995/g2",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/G2_Esports",
      "confidence": "high"
    },
    {
      "rank": 8,
      "team": "FUT",
      "teamKey": "FUT Esports",
      "points": 359,
      "change": "-1",
      "roster": [
        {
          "nick": "SunPayus",
          "country": "ES",
          "hltvPlayerUrl": "https://www.hltv.org/player/19164/sunpayus"
        },
        {
          "nick": "xfl0ud",
          "country": "TR",
          "hltvPlayerUrl": "https://www.hltv.org/player/19187/xfl0ud"
        },
        {
          "nick": "dem0n",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/20584/dem0n"
        },
        {
          "nick": "Krabeni",
          "country": "XK",
          "hltvPlayerUrl": "https://www.hltv.org/player/22203/krabeni"
        },
        {
          "nick": "dziugss",
          "country": "LT",
          "hltvPlayerUrl": "https://www.hltv.org/player/23553/dziugss"
        }
      ],
      "coach": {
        "nick": "coolio",
        "country": "HU"
      },
      "honours": {
        "count": 1,
        "list": [
          {
            "event": "PGL Bucharest 2026",
            "date": "2026-04-11",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/13286/fut",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/FUT_Esports",
      "confidence": "high"
    },
    {
      "rank": 9,
      "team": "Aurora",
      "teamKey": "Aurora",
      "points": 350,
      "change": "0",
      "roster": [
        {
          "nick": "XANTARES",
          "country": "TR",
          "hltvPlayerUrl": "https://www.hltv.org/player/7938/xantares"
        },
        {
          "nick": "woxic",
          "country": "TR",
          "hltvPlayerUrl": "https://www.hltv.org/player/8574/woxic"
        },
        {
          "nick": "Jimpphat",
          "country": "FI",
          "hltvPlayerUrl": "https://www.hltv.org/player/18850/jimpphat"
        },
        {
          "nick": "kyxsan",
          "country": "MK",
          "hltvPlayerUrl": "https://www.hltv.org/player/19677/kyxsan"
        },
        {
          "nick": "Wicadia",
          "country": "TR",
          "hltvPlayerUrl": "https://www.hltv.org/player/21243/wicadia"
        }
      ],
      "coach": {
        "nick": "ash",
        "country": "GB"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/11861/aurora",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Aurora_Gaming",
      "confidence": "high"
    },
    {
      "rank": 10,
      "team": "Natus Vincere",
      "teamKey": "Natus Vincere",
      "points": 241,
      "change": "0",
      "roster": [
        {
          "nick": "Aleksib",
          "country": "FI",
          "hltvPlayerUrl": "https://www.hltv.org/player/9816/aleksib"
        },
        {
          "nick": "iM",
          "country": "RO",
          "hltvPlayerUrl": "https://www.hltv.org/player/14759/im"
        },
        {
          "nick": "b1t",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/18987/b1t"
        },
        {
          "nick": "w0nderful",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/20127/w0nderful"
        },
        {
          "nick": "makazze",
          "country": "XK",
          "hltvPlayerUrl": "https://www.hltv.org/player/22673/makazze"
        }
      ],
      "coach": {
        "nick": "B1ad3",
        "country": "UA"
      },
      "honours": {
        "count": 27,
        "list": [
          {
            "event": "SLTV StarSeries IX Finals",
            "date": "2014-05-04",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Winter 2014/15",
            "date": "2015-04-12",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "StarLadder StarSeries XIII",
            "date": "2015-06-21",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Electronic Sports World Cup 2015",
            "date": "2015-07-12",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Intel Extreme Masters X San Jose 2015",
            "date": "2015-11-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Open Leipzig 2016",
            "date": "2016-01-24",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL One New York 2016",
            "date": "2016-10-02",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "StarSeries i-League Season 5",
            "date": "2018-06-03",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "CS:GO Asia Championships 2018",
            "date": "2018-06-18",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL One: Cologne 2018",
            "date": "2018-07-08",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Pro Series Copenhagen 2018",
            "date": "2018-11-03",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "StarSeries i-League Season 7",
            "date": "2019-04-07",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Katowice 2020",
            "date": "2020-03-01",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier: Global Final 2020",
            "date": "2021-01-24",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Masters Spring 2021",
            "date": "2021-05-09",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Cologne 2021",
            "date": "2021-07-18",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 14",
            "date": "2021-09-12",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "PGL Major Stockholm 2021",
            "date": "2021-11-07",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "BLAST Premier: Fall Finals 2021",
            "date": "2021-11-28",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier: World Final 2021",
            "date": "2021-12-19",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier Spring Final 2022",
            "date": "2022-06-19",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "PGL Major Copenhagen 2024",
            "date": "2024-03-31",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "Esports World Cup 2024",
            "date": "2024-07-21",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 20",
            "date": "2024-09-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Rio 2024",
            "date": "2024-10-13",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 23",
            "date": "2026-03-15",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Atlanta 2026",
            "date": "2026-05-17",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/4608/natus-vincere",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Natus_Vincere",
      "confidence": "high"
    },
    {
      "rank": 11,
      "team": "Astralis",
      "teamKey": "Astralis",
      "points": 220,
      "change": "0",
      "roster": [
        {
          "nick": "HooXi",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/10096/hooxi"
        },
        {
          "nick": "phzy",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/16726/phzy"
        },
        {
          "nick": "jabbi",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/17956/jabbi"
        },
        {
          "nick": "Staehr",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/20304/staehr"
        },
        {
          "nick": "ryu",
          "country": "LT",
          "hltvPlayerUrl": "https://www.hltv.org/player/21217/ryu"
        }
      ],
      "coach": {
        "nick": "NEO",
        "country": "PL"
      },
      "honours": {
        "count": 22,
        "list": [
          {
            "event": "ECS Season 2 Finals 2016",
            "date": "2016-12-11",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ELEAGUE Major: Atlanta 2017",
            "date": "2017-01-29",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "IEM Katowice 2017",
            "date": "2017-03-05",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Masters Marseille 2018",
            "date": "2018-04-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 7 Finals",
            "date": "2018-05-20",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ECS Season 5 Finals",
            "date": "2018-06-10",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ELEAGUE CS:GO Premier 2018",
            "date": "2018-07-29",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "FACEIT Major: London 2018",
            "date": "2018-09-23",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "BLAST Pro Series Istanbul 2018",
            "date": "2018-09-29",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Chicago 2018",
            "date": "2018-11-11",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ECS Season 6 Finals",
            "date": "2018-11-25",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 8 Finals",
            "date": "2018-12-09",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Pro Series Lisbon 2018",
            "date": "2018-12-15",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Katowice Major 2019",
            "date": "2019-03-03",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "BLAST Pro Series São Paulo 2019",
            "date": "2019-03-23",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "StarLadder Berlin Major 2019",
            "date": "2019-09-08",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "IEM Beijing 2019",
            "date": "2019-11-10",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ECS Season 8 Finals",
            "date": "2019-12-01",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Pro Series Global Final 2019",
            "date": "2019-12-14",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 12: Europe",
            "date": "2020-10-04",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Masters Winter 2020: Europe",
            "date": "2020-12-06",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Global Challenge 2020",
            "date": "2020-12-20",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/6665/astralis",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Astralis",
      "confidence": "medium"
    },
    {
      "rank": 12,
      "team": "MIBR",
      "teamKey": "MIBR",
      "points": 169,
      "change": "0",
      "roster": [
        {
          "nick": "LNZ",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/19310/lnz"
        },
        {
          "nick": "nqz",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/19694/nqz"
        },
        {
          "nick": "insani",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/21037/insani"
        },
        {
          "nick": "venomzera",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/21288/venomzera"
        },
        {
          "nick": "tomaszin",
          "country": "AR",
          "hltvPlayerUrl": "https://www.hltv.org/player/22570/tomaszin"
        }
      ],
      "coach": {
        "nick": "LETN1",
        "country": "RS"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/9215/mibr",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/MIBR",
      "confidence": "high"
    },
    {
      "rank": 13,
      "team": "BETBOOM",
      "teamKey": "BETBOOM",
      "points": 148,
      "change": "+2",
      "roster": [
        {
          "nick": "Boombl4",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/11840/boombl4"
        },
        {
          "nick": "zorte",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/15662/zorte"
        },
        {
          "nick": "S1ren",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/18506/s1ren"
        },
        {
          "nick": "d1Ledez",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/20357/d1ledez"
        },
        {
          "nick": "Magnojez",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/21667/magnojez"
        }
      ],
      "coach": {
        "nick": "Fierce",
        "country": "RU"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/12394/betboom",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/BetBoom_Team",
      "confidence": "high"
    },
    {
      "rank": 14,
      "team": "FaZe",
      "teamKey": "FaZe Clan",
      "points": 147,
      "change": "-1",
      "roster": [
        {
          "nick": "frozen",
          "country": "SK",
          "hltvPlayerUrl": "https://www.hltv.org/player/9960/frozen"
        },
        {
          "nick": "Twistzz",
          "country": "CA",
          "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
        },
        {
          "nick": "Neityu",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/21972/neityu"
        },
        {
          "nick": "jcobbb",
          "country": "PL",
          "hltvPlayerUrl": "https://www.hltv.org/player/22383/jcobbb"
        },
        {
          "nick": "JBOEN",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/22866/jboen"
        }
      ],
      "coach": {
        "nick": "enkay J",
        "country": "DE"
      },
      "honours": {
        "count": 18,
        "list": [
          {
            "event": "StarSeries i-League Season 3",
            "date": "2017-04-09",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL One New York 2017",
            "date": "2017-09-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ELEAGUE CS:GO Premier 2017",
            "date": "2017-10-13",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ECS Season 4 Finals",
            "date": "2017-12-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Sydney 2018",
            "date": "2018-05-06",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL One Belo Horizonte 2018",
            "date": "2018-06-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "EPICENTER 2018",
            "date": "2018-10-28",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Pro Series Miami 2019",
            "date": "2019-04-13",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Pro Series Copenhagen 2019",
            "date": "2019-11-02",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Katowice 2022",
            "date": "2022-02-27",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 15",
            "date": "2022-04-10",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "PGL Major Antwerp 2022",
            "date": "2022-05-22",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "IEM Cologne 2022",
            "date": "2022-07-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 17",
            "date": "2023-03-26",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Sydney 2023",
            "date": "2023-10-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Thunderpick World Championship 2023",
            "date": "2023-11-05",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "CS Asia Championships 2023",
            "date": "2023-11-12",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Chengdu 2024",
            "date": "2024-04-14",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/6667/faze",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/FaZe_Clan",
      "confidence": "high"
    },
    {
      "rank": 15,
      "team": "B8",
      "teamKey": "B8",
      "points": 130,
      "change": "-1",
      "roster": [
        {
          "nick": "alex666",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/20112/alex666"
        },
        {
          "nick": "npl",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/21708/npl"
        },
        {
          "nick": "kensizor",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/22842/kensizor"
        },
        {
          "nick": "esenthial",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/23643/esenthial"
        },
        {
          "nick": "s1zzi",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/25619/s1zzi"
        }
      ],
      "coach": {
        "nick": "maddened",
        "country": "RU"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/11241/b8",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/B8",
      "confidence": "high"
    },
    {
      "rank": 16,
      "team": "9z",
      "teamKey": "9z",
      "points": 124,
      "change": "+1",
      "roster": [
        {
          "nick": "max",
          "country": "UY",
          "hltvPlayerUrl": "https://www.hltv.org/player/12092/max"
        },
        {
          "nick": "dgt",
          "country": "UY",
          "hltvPlayerUrl": "https://www.hltv.org/player/14736/dgt"
        },
        {
          "nick": "meyern",
          "country": "AR",
          "hltvPlayerUrl": "https://www.hltv.org/player/14737/meyern"
        },
        {
          "nick": "luchov",
          "country": "AR",
          "hltvPlayerUrl": "https://www.hltv.org/player/20394/luchov"
        },
        {
          "nick": "HUASOPEEK",
          "country": "CL",
          "hltvPlayerUrl": "https://www.hltv.org/player/22613/huasopeek"
        }
      ],
      "coach": {
        "nick": "BIT",
        "country": "BR"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/9996/9z",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/9z_Team",
      "confidence": "high"
    },
    {
      "rank": 17,
      "team": "The MongolZ",
      "teamKey": "The MongolZ",
      "points": 116,
      "change": "-1",
      "roster": [
        {
          "nick": "nin9",
          "country": "MN",
          "hltvPlayerUrl": "https://www.hltv.org/player/15072/nin9"
        },
        {
          "nick": "bLitz",
          "country": "MN",
          "hltvPlayerUrl": "https://www.hltv.org/player/20194/blitz"
        },
        {
          "nick": "Techno",
          "country": "MN",
          "hltvPlayerUrl": "https://www.hltv.org/player/20275/techno"
        },
        {
          "nick": "910",
          "country": "MN",
          "hltvPlayerUrl": "https://www.hltv.org/player/21809/910"
        },
        {
          "nick": "cobrazera",
          "country": "MN",
          "hltvPlayerUrl": "https://www.hltv.org/player/23402/cobrazera"
        }
      ],
      "coach": {
        "nick": "maaRaa",
        "country": "MN"
      },
      "honours": {
        "count": 3,
        "list": [
          {
            "event": "YaLLa Compass 2024",
            "date": "2024-06-09",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Thunderpick World Championship 2024",
            "date": "2024-11-03",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Esports World Cup 2025",
            "date": "2025-08-24",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/6248/the-mongolz",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/The_MongolZ",
      "confidence": "high"
    },
    {
      "rank": 18,
      "team": "magic",
      "teamKey": "magic",
      "points": 116,
      "change": "0",
      "roster": [
        {
          "nick": "MaSvAl",
          "country": "BY",
          "hltvPlayerUrl": "https://www.hltv.org/player/19874/masval"
        },
        {
          "nick": "sFade8",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/22075/sfade8"
        },
        {
          "nick": "AW",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/22076/aw"
        },
        {
          "nick": "mo0N",
          "country": "KZ",
          "hltvPlayerUrl": "https://www.hltv.org/player/23858/mo0n"
        },
        {
          "nick": "tenzy",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/24173/tenzy"
        }
      ],
      "coach": {
        "nick": "eksiver",
        "country": "RU"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/13592/magic",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Magic",
      "confidence": "high"
    },
    {
      "rank": 19,
      "team": "GamerLegion",
      "teamKey": "GamerLegion",
      "points": 110,
      "change": "0",
      "roster": [
        {
          "nick": "Snax",
          "country": "PL",
          "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
        },
        {
          "nick": "REZ",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/9278/rez"
        },
        {
          "nick": "Tauson",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/20301/tauson"
        },
        {
          "nick": "FL4MUS",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/20994/fl4mus"
        },
        {
          "nick": "hypex",
          "country": "PL",
          "hltvPlayerUrl": "https://www.hltv.org/player/23766/hypex"
        }
      ],
      "coach": {
        "nick": "imd",
        "country": "PL"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/9928/gamerlegion",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/GamerLegion",
      "confidence": "high"
    },
    {
      "rank": 20,
      "team": "PARIVISION",
      "teamKey": "PARIVISION",
      "points": 108,
      "change": "+1",
      "roster": [
        {
          "nick": "HObbit",
          "country": "KZ",
          "hltvPlayerUrl": "https://www.hltv.org/player/8528/hobbit"
        },
        {
          "nick": "FL1T",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/12732/fl1t"
        },
        {
          "nick": "Jame",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/13776/jame"
        },
        {
          "nick": "xiELO",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/22471/xielo"
        },
        {
          "nick": "zweih",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/23685/zweih"
        }
      ],
      "coach": {
        "nick": "dastan",
        "country": "KZ"
      },
      "honours": {
        "count": 1,
        "list": [
          {
            "event": "BLAST Bounty 2026 Season 1 Finals",
            "date": "2026-01-25",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/12467/parivision",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/PARIVISION",
      "confidence": "high"
    },
    {
      "rank": 21,
      "team": "Envy",
      "teamKey": "Team EnVyUs",
      "points": 102,
      "change": "-1",
      "roster": [
        {
          "nick": "Maka",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/13138/maka"
        },
        {
          "nick": "Lucky",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/13497/lucky"
        },
        {
          "nick": "misutaaa",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/14176/misutaaa"
        },
        {
          "nick": "Kursy",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/20482/kursy"
        },
        {
          "nick": "Graviti",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/21969/graviti"
        }
      ],
      "coach": null,
      "honours": {
        "count": 10,
        "list": [
          {
            "event": "Gfinity Spring Masters 1",
            "date": "2015-03-22",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "StarLadder StarSeries XII",
            "date": "2015-03-29",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Gfinity Masters Summer 1",
            "date": "2015-06-28",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Intel Extreme Masters Season X - gamescom",
            "date": "2015-08-08",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Open London 2015",
            "date": "2015-09-20",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Gfinity Champion of Champions 2015",
            "date": "2015-09-27",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Open Cluj-Napoca 2015",
            "date": "2015-11-01",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "Game Show Global eSports Cup 2016 Finals",
            "date": "2016-02-07",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Gfinity CS:GO Invitational 2016",
            "date": "2016-09-25",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "WESG 2016 World Finals",
            "date": "2017-01-15",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/5991/envy",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Team_Envy",
      "confidence": "medium"
    },
    {
      "rank": 22,
      "team": "Nemiga",
      "teamKey": "Nemiga",
      "points": 89,
      "change": "+16",
      "roster": [
        {
          "nick": "KaiR0N-",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/19920/kair0n"
        },
        {
          "nick": "Xant3r",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/20387/xant3r"
        },
        {
          "nick": "robo",
          "country": "RU",
          "hltvPlayerUrl": "https://www.hltv.org/player/22864/robo"
        },
        {
          "nick": "khaN",
          "country": "KZ",
          "hltvPlayerUrl": "https://www.hltv.org/player/23317/khan"
        },
        {
          "nick": "syph0",
          "country": "KZ",
          "hltvPlayerUrl": "https://www.hltv.org/player/23319/syph0"
        }
      ],
      "coach": {
        "nick": "boX",
        "country": "BY"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/7969/nemiga",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Nemiga_Gaming",
      "confidence": "high"
    },
    {
      "rank": 23,
      "team": "Alliance",
      "teamKey": "Alliance",
      "points": 78,
      "change": "-1",
      "roster": [
        {
          "nick": "twist",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/7443/twist"
        },
        {
          "nick": "eraa",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/16487/eraa"
        },
        {
          "nick": "bobeksde",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/21159/bobeksde"
        },
        {
          "nick": "upE",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/22760/upe"
        },
        {
          "nick": "avid",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/22860/avid"
        }
      ],
      "coach": {
        "nick": "Hawk",
        "country": "SE"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/12474/alliance",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Alliance",
      "confidence": "high"
    },
    {
      "rank": 24,
      "team": "Luminosity",
      "teamKey": "Luminosity Gaming",
      "points": 78,
      "change": "+6",
      "roster": [
        {
          "nick": "Rainwaker",
          "country": "BG",
          "hltvPlayerUrl": "https://www.hltv.org/player/17145/rainwaker"
        },
        {
          "nick": "afro",
          "country": "FR",
          "hltvPlayerUrl": "https://www.hltv.org/player/19926/afro"
        },
        {
          "nick": "lux",
          "country": "BR",
          "hltvPlayerUrl": "https://www.hltv.org/player/20563/lux"
        },
        {
          "nick": "yxngstxr",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/22047/yxngstxr"
        },
        {
          "nick": "AZUWU",
          "country": "GB",
          "hltvPlayerUrl": "https://www.hltv.org/player/22106/azuwu"
        }
      ],
      "coach": {
        "nick": "kakafu",
        "country": "AT"
      },
      "honours": {
        "count": 3,
        "list": [
          {
            "event": "MLG Major Championship: Columbus 2016",
            "date": "2016-04-03",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "DreamHack Open Austin 2016",
            "date": "2016-05-08",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 3 Finals 2016",
            "date": "2016-05-15",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/6290/luminosity",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Luminosity_Gaming",
      "confidence": "high"
    },
    {
      "rank": 25,
      "team": "Liquid",
      "teamKey": "Team Liquid",
      "points": 76,
      "change": "-1",
      "roster": [
        {
          "nick": "NAF",
          "country": "CA",
          "hltvPlayerUrl": "https://www.hltv.org/player/8520/naf"
        },
        {
          "nick": "EliGE",
          "country": "US",
          "hltvPlayerUrl": "https://www.hltv.org/player/8738/elige"
        },
        {
          "nick": "malbsMd",
          "country": "GT",
          "hltvPlayerUrl": "https://www.hltv.org/player/11617/malbsmd"
        },
        {
          "nick": "JT",
          "country": "ZA",
          "hltvPlayerUrl": "https://www.hltv.org/player/11630/jt"
        },
        {
          "nick": "Jorko",
          "country": "BG",
          "hltvPlayerUrl": "https://www.hltv.org/player/24203/jorko"
        }
      ],
      "coach": {
        "nick": "flashie",
        "country": "HU"
      },
      "honours": {
        "count": 8,
        "list": [
          {
            "event": "cs_summit 2",
            "date": "2018-02-11",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Sydney 2019",
            "date": "2019-05-05",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Masters Dallas 2019",
            "date": "2019-06-02",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 9 Finals",
            "date": "2019-06-23",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL One: Cologne 2019",
            "date": "2019-07-07",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Pro Series Los Angeles 2019",
            "date": "2019-07-14",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Chicago 2019",
            "date": "2019-07-21",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 11: North America",
            "date": "2020-04-12",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/5973/liquid",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Team_Liquid",
      "confidence": "medium"
    },
    {
      "rank": 26,
      "team": "Ninjas in Pyjamas",
      "teamKey": "Ninjas in Pyjamas",
      "points": 75,
      "change": "+11",
      "roster": [
        {
          "nick": "stavn",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/10994/stavn"
        },
        {
          "nick": "sjuush",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/14148/sjuush"
        },
        {
          "nick": "Krimbo",
          "country": "DE",
          "hltvPlayerUrl": "https://www.hltv.org/player/19899/krimbo"
        },
        {
          "nick": "adamb",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/20878/adamb"
        },
        {
          "nick": "xKacpersky",
          "country": "PL",
          "hltvPlayerUrl": "https://www.hltv.org/player/23372/xkacpersky"
        }
      ],
      "coach": {
        "nick": "Xizt",
        "country": "SE"
      },
      "honours": {
        "count": 16,
        "list": [
          {
            "event": "Electronic Sports World Cup 2012",
            "date": "2012-11-04",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Winter 2012",
            "date": "2012-11-24",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "RaidCall EMS One Spring 2013 Finals",
            "date": "2013-04-14",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESEA Global Finals Season 13",
            "date": "2013-04-21",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Summer 2013",
            "date": "2013-06-18",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "SLTV StarSeries VI Finals",
            "date": "2013-07-07",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESEA Global Finals Season 14",
            "date": "2013-08-18",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Bucharest 2013",
            "date": "2013-09-15",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Fragbite Masters Season 1",
            "date": "2013-12-13",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "Copenhagen Games 2014",
            "date": "2014-04-20",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "DreamHack Summer 2014",
            "date": "2014-06-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL One Cologne 2014",
            "date": "2014-08-17",
            "place": "1st",
            "tier": "Major"
          },
          {
            "event": "DreamHack Masters Malmö 2016",
            "date": "2016-04-17",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "SL i-League StarSeries Season 2 Finals 2016",
            "date": "2016-09-11",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Oakland 2016",
            "date": "2016-11-20",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "IEM Oakland 2017",
            "date": "2017-11-19",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/4411/ninjas-in-pyjamas",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas",
      "confidence": "medium"
    },
    {
      "rank": 27,
      "team": "M80",
      "teamKey": "M80",
      "points": 73,
      "change": "-2",
      "roster": [
        {
          "nick": "slaxz-",
          "country": "DE",
          "hltvPlayerUrl": "https://www.hltv.org/player/15370/slaxz"
        },
        {
          "nick": "Swisher",
          "country": "US",
          "hltvPlayerUrl": "https://www.hltv.org/player/16599/swisher"
        },
        {
          "nick": "s1n",
          "country": "DE",
          "hltvPlayerUrl": "https://www.hltv.org/player/20104/s1n"
        },
        {
          "nick": "JBa",
          "country": "US",
          "hltvPlayerUrl": "https://www.hltv.org/player/21665/jba"
        },
        {
          "nick": "Lake",
          "country": "US",
          "hltvPlayerUrl": "https://www.hltv.org/player/22921/lake"
        }
      ],
      "coach": {
        "nick": "dephh",
        "country": "GB"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/12376/m80",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/M80",
      "confidence": "high"
    },
    {
      "rank": 28,
      "team": "Inner Circle",
      "teamKey": "Inner Circle",
      "points": 71,
      "change": "-5",
      "roster": [
        {
          "nick": "cptkurtka023",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/16147/cptkurtka023"
        },
        {
          "nick": "headtr1ck",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/19592/headtr1ck"
        },
        {
          "nick": "zeRRoFIX",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/23415/zerrofix"
        },
        {
          "nick": "onic",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/24168/onic"
        },
        {
          "nick": "Dawy",
          "country": "UA",
          "hltvPlayerUrl": "https://www.hltv.org/player/24282/dawy"
        }
      ],
      "coach": {
        "nick": "jR",
        "country": "UA"
      },
      "honours": {
        "count": 0,
        "list": []
      },
      "teamPageUrl": "https://www.hltv.org/team/13117/inner-circle",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/IC_Esports",
      "confidence": "high"
    },
    {
      "rank": 29,
      "team": "HEROIC",
      "teamKey": "Heroic",
      "points": 64,
      "change": "-3",
      "roster": [
        {
          "nick": "Brollan",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/13666/brollan"
        },
        {
          "nick": "nilo",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/20119/nilo"
        },
        {
          "nick": "susp",
          "country": "SE",
          "hltvPlayerUrl": "https://www.hltv.org/player/21163/susp"
        },
        {
          "nick": "MartinezSa",
          "country": "ES",
          "hltvPlayerUrl": "https://www.hltv.org/player/21239/martinezsa"
        },
        {
          "nick": "Chr1zN",
          "country": "DK",
          "hltvPlayerUrl": "https://www.hltv.org/player/21983/chr1zn"
        }
      ],
      "coach": {
        "nick": "Snappi",
        "country": "DK"
      },
      "honours": {
        "count": 4,
        "list": [
          {
            "event": "ESL One: Cologne 2020 Online - Europe",
            "date": "2020-08-30",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "ESL Pro League Season 13",
            "date": "2021-04-11",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier Fall Final 2022",
            "date": "2022-11-27",
            "place": "1st",
            "tier": "S"
          },
          {
            "event": "BLAST Premier Spring Final 2023",
            "date": "2023-06-11",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/7175/heroic",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/Heroic",
      "confidence": "high"
    },
    {
      "rank": 30,
      "team": "NRG",
      "teamKey": "NRG Esports",
      "points": 62,
      "change": "-2",
      "roster": [
        {
          "nick": "nitr0",
          "country": "US",
          "hltvPlayerUrl": "https://www.hltv.org/player/7687/nitr0"
        },
        {
          "nick": "Sonic",
          "country": "ZA",
          "hltvPlayerUrl": "https://www.hltv.org/player/8711/sonic"
        },
        {
          "nick": "hallzerk",
          "country": "NO",
          "hltvPlayerUrl": "https://www.hltv.org/player/12840/hallzerk"
        },
        {
          "nick": "Grim",
          "country": "US",
          "hltvPlayerUrl": "https://www.hltv.org/player/13578/grim"
        },
        {
          "nick": "Jeorge",
          "country": "US",
          "hltvPlayerUrl": "https://www.hltv.org/player/20333/jeorge"
        }
      ],
      "coach": {
        "nick": "daps",
        "country": "CA"
      },
      "honours": {
        "count": 1,
        "list": [
          {
            "event": "cs_summit 3",
            "date": "2018-11-04",
            "place": "1st",
            "tier": "S"
          }
        ]
      },
      "teamPageUrl": "https://www.hltv.org/team/6673/nrg",
      "liquipediaUrl": "https://liquipedia.net/counterstrike/NRG",
      "confidence": "high"
    }
  ]
};
