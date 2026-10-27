// 来源 tmp/team-snapshots-final.json（2026-10 合并验收，201 条）
// 生成脚本 tmp/18-gen-snapshots.cjs
// 勿手改，改数据请重跑脚本
// 静态数据，运行时不读 tmp/

export type SnapshotPlayer = {
  nick: string;
  country: string;              // ISO2
  hltvPlayerUrl: string | null; // null = 无法核实编号，不显示链接
  standIn?: true;               // 替补
};

export type SnapshotCoach = {
  nick: string;
  country: string | null;
  hltvPlayerUrl: string | null;
};

export type SnapshotRanking = {
  rank: number;
  points: number;
  rankingDate: string;          // YYYY-MM-DD，开赛当天或之前最近一期 HLTV 周榜
  sourceUrl: string;
  sourceType: "HLTV" | "archive.org";
  pageTitle: string;
};

export type SnapshotHonour = {
  event: string;
  date: string;
  place: string;
  inProject: boolean;
};

export type TeamSnapshot = {
  eventId: string;
  team: string;                 // 当时的队名
  teamKey: string;              // = S_TIER_EVENTS 里的 champion
  eventStartDate: string;
  ranking: SnapshotRanking | null; // null = 2015-10-05 之前，HLTV 还没有排名
  roster: SnapshotPlayer[];
  coach: SnapshotCoach | null;
  honours: { countAtDate: number; list: SnapshotHonour[] };
  sources: string[];
  confidence: "high" | "medium" | "low";
};

export const TEAM_SNAPSHOTS: Record<string, TeamSnapshot> = {
  "2013-04-sltv-starseries-v-finals": {
    "eventId": "2013-04-sltv-starseries-v-finals",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2013-04-04",
    "ranking": null,
    "roster": [
      {
        "nick": "ANGE1",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/339/ange1"
      },
      {
        "nick": "Dosia",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/735/dosia"
      },
      {
        "nick": "Fox",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/737/fox"
      },
      {
        "nick": "AdreN",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/334/adren"
      },
      {
        "nick": "kUcheR",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/302/kucher"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/StarLadder/StarSeries/Season_V",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "high"
  },
  "2013-06-dreamhack-summer-2013": {
    "eventId": "2013-06-dreamhack-summer-2013",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2013-06-15",
    "ranking": null,
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "Fifflaren",
        "country": "SE",
        "hltvPlayerUrl": null
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/DreamHack/2013/Summer",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2013-06-raidcall-ems-one-summer-2013-finals": {
    "eventId": "2013-06-raidcall-ems-one-summer-2013-finals",
    "team": "VeryGames",
    "teamKey": "VeryGames",
    "eventStartDate": "2013-06-29",
    "ranking": null,
    "roster": [
      {
        "nick": "Ex6TenZ",
        "country": "BE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7166/ex6tenz"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "SmithZz",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7170/smithzz"
      },
      {
        "nick": "ScreaM",
        "country": "BE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7390/scream"
      },
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "RaidCall EMS One Summer 2013 Finals",
          "date": "2013-06-30",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/ESL/Major_Series_One/2013/Summer",
      "https://liquipedia.net/counterstrike/Team_VeryGames/Results"
    ],
    "confidence": "high"
  },
  "2013-07-sltv-starseries-vi-finals": {
    "eventId": "2013-07-sltv-starseries-vi-finals",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2013-07-04",
    "ranking": null,
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "Fifflaren",
        "country": "SE",
        "hltvPlayerUrl": null
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/StarLadder/StarSeries/Season_VI",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2013-09-dreamhack-bucharest-2013": {
    "eventId": "2013-09-dreamhack-bucharest-2013",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2013-09-14",
    "ranking": null,
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "Fifflaren",
        "country": "SE",
        "hltvPlayerUrl": null
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Global Finals Season 14",
          "date": "2013-08-18",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Bucharest 2013",
          "date": "2013-09-15",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/DreamHack/2013/Bucharest",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2013-10-sltv-starseries-vii-finals": {
    "eventId": "2013-10-sltv-starseries-vii-finals",
    "team": "VeryGames",
    "teamKey": "VeryGames",
    "eventStartDate": "2013-10-10",
    "ranking": null,
    "roster": [
      {
        "nick": "Ex6TenZ",
        "country": "BE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7166/ex6tenz"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "SmithZz",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7170/smithzz"
      },
      {
        "nick": "ScreaM",
        "country": "BE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7390/scream"
      },
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "RaidCall EMS One Summer 2013 Finals",
          "date": "2013-06-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VII Finals",
          "date": "2013-10-13",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/StarLadder/StarSeries/Season_VII",
      "https://liquipedia.net/counterstrike/Team_VeryGames/Results"
    ],
    "confidence": "high"
  },
  "2013-10-raidcall-ems-one-fall-2013-finals": {
    "eventId": "2013-10-raidcall-ems-one-fall-2013-finals",
    "team": "VeryGames",
    "teamKey": "VeryGames",
    "eventStartDate": "2013-10-26",
    "ranking": null,
    "roster": [
      {
        "nick": "Ex6TenZ",
        "country": "BE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7166/ex6tenz"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "SmithZz",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7170/smithzz"
      },
      {
        "nick": "ScreaM",
        "country": "BE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7390/scream"
      },
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "RaidCall EMS One Summer 2013 Finals",
          "date": "2013-06-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VII Finals",
          "date": "2013-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "RaidCall EMS One Fall 2013 Finals",
          "date": "2013-10-27",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/ESL/Major_Series_One/2013/Fall",
      "https://liquipedia.net/counterstrike/Team_VeryGames/Results"
    ],
    "confidence": "high"
  },
  "2013-11-eswc-2013": {
    "eventId": "2013-11-eswc-2013",
    "team": "Clan-Mystik",
    "teamKey": "Clan-Mystik",
    "eventStartDate": "2013-10-31",
    "ranking": null,
    "roster": [
      {
        "nick": "HaRts",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/156/harts"
      },
      {
        "nick": "kioShiMa",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/4959/kioshima"
      },
      {
        "nick": "KQLY",
        "country": "FR",
        "hltvPlayerUrl": null
      },
      {
        "nick": "ioRek",
        "country": "FR",
        "hltvPlayerUrl": null
      },
      {
        "nick": "Sf",
        "country": "FR",
        "hltvPlayerUrl": null
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ESWC 2013",
          "date": "2013-11-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/Electronic_Sports_World_Cup/2013",
      "https://liquipedia.net/counterstrike/Clan-Mystik",
      "https://liquipedia.net/counterstrike/Clan-Mystik/Results"
    ],
    "confidence": "high"
  },
  "2013-11-dreamhack-winter-2013": {
    "eventId": "2013-11-dreamhack-winter-2013",
    "team": "fnatic",
    "teamKey": "Fnatic",
    "eventStartDate": "2013-11-28",
    "ranking": null,
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "schneider",
        "country": "SE",
        "hltvPlayerUrl": null
      },
      {
        "nick": "Devilwalk",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7378/devilwalk"
      },
      {
        "nick": "pronax",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/41/pronax"
      }
    ],
    "coach": {
      "nick": "cArn",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/1270/dreamhack-winter-2013",
      "https://liquipedia.net/counterstrike/DreamHack/2013/Winter",
      "https://www.hltv.org/team/4991/fnatic"
    ],
    "confidence": "high"
  },
  "2014-03-ems-one-katowice-2014": {
    "eventId": "2014-03-ems-one-katowice-2014",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2014-03-13",
    "ranking": null,
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "Snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/1333/ems-one-katowice-2014",
      "https://liquipedia.net/counterstrike/ESL/Major_Series_One/2014/Katowice",
      "https://www.hltv.org/team/5378/virtuspro"
    ],
    "confidence": "high"
  },
  "2014-04-copenhagen-games-2014": {
    "eventId": "2014-04-copenhagen-games-2014",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2014-04-16",
    "ranking": null,
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "Fifflaren",
        "country": "SE",
        "hltvPlayerUrl": null
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Global Finals Season 14",
          "date": "2013-08-18",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Bucharest 2013",
          "date": "2013-09-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Copenhagen Games 2014",
          "date": "2014-04-20",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/Copenhagen_Games/2014",
      "https://www.hltv.org/team/4411/ninjas-in-pyjamas",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2014-05-sltv-starseries-ix-finals": {
    "eventId": "2014-05-sltv-starseries-ix-finals",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2014-05-02",
    "ranking": null,
    "roster": [
      {
        "nick": "starix",
        "country": "UA",
        "hltvPlayerUrl": null
      },
      {
        "nick": "Edward",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/483/edward"
      },
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "seized",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/3347/seized"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/StarLadder/StarSeries/Season_9",
      "https://www.hltv.org/team/4608/natus-vincere",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "high"
  },
  "2014-06-dreamhack-summer-2014": {
    "eventId": "2014-06-dreamhack-summer-2014",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2014-06-14",
    "ranking": null,
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "Fifflaren",
        "country": "SE",
        "hltvPlayerUrl": null
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Global Finals Season 14",
          "date": "2013-08-18",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Bucharest 2013",
          "date": "2013-09-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Copenhagen Games 2014",
          "date": "2014-04-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Summer 2014",
          "date": "2014-06-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/DreamHack/2014/Summer",
      "https://www.hltv.org/team/4411/ninjas-in-pyjamas",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2014-08-gfinity-g3": {
    "eventId": "2014-08-gfinity-g3",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2014-08-02",
    "ranking": null,
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "Snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity G3",
          "date": "2014-08-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/Gfinity/G3",
      "https://www.hltv.org/team/5378/virtuspro",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "high"
  },
  "2014-08-esl-one-cologne-2014": {
    "eventId": "2014-08-esl-one-cologne-2014",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2014-08-14",
    "ranking": null,
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "Fifflaren",
        "country": "SE",
        "hltvPlayerUrl": null
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      }
    ],
    "coach": {
      "nick": "pita",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Global Finals Season 14",
          "date": "2013-08-18",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Bucharest 2013",
          "date": "2013-09-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Copenhagen Games 2014",
          "date": "2014-04-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Summer 2014",
          "date": "2014-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2014",
          "date": "2014-08-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/1444/esl-one-cologne-2014",
      "https://liquipedia.net/counterstrike/ESL/One/2014/Cologne",
      "https://www.hltv.org/team/4411/ninjas-in-pyjamas"
    ],
    "confidence": "medium"
  },
  "2014-08-sltv-starseries-x-finals": {
    "eventId": "2014-08-sltv-starseries-x-finals",
    "team": "Fnatic",
    "teamKey": "Fnatic",
    "eventStartDate": "2014-08-30",
    "ranking": null,
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      },
      {
        "nick": "pronax",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/41/pronax"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      }
    ],
    "coach": {
      "nick": "Devilwalk",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/StarLadder/StarSeries/Season_10",
      "https://www.hltv.org/team/4991/fnatic",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2014-09-dreamhack-stockholm-invitational-2014": {
    "eventId": "2014-09-dreamhack-stockholm-invitational-2014",
    "team": "Titan",
    "teamKey": "Titan",
    "eventStartDate": "2014-09-25",
    "ranking": null,
    "roster": [
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "Ex6TenZ",
        "country": "BE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7166/ex6tenz"
      },
      {
        "nick": "KQLY",
        "country": "FR",
        "hltvPlayerUrl": null
      },
      {
        "nick": "Maniac",
        "country": "CH",
        "hltvPlayerUrl": "https://www.hltv.org/player/823/maniac"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "DreamHack Stockholm Invitational 2014",
          "date": "2014-09-26",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/DreamHack/2014/Stockholm",
      "https://liquipedia.net/counterstrike/Titan/Results"
    ],
    "confidence": "high"
  },
  "2014-10-sltv-starseries-xi-finals": {
    "eventId": "2014-10-sltv-starseries-xi-finals",
    "team": "LDLC",
    "teamKey": "LDLC",
    "eventStartDate": "2014-10-18",
    "ranking": null,
    "roster": [
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "SmithZz",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7170/smithzz"
      },
      {
        "nick": "kioShiMa",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/4959/kioshima"
      },
      {
        "nick": "Happy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7429/happy"
      },
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      }
    ],
    "coach": {
      "nick": "MoMaN",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "SLTV StarSeries XI Finals",
          "date": "2014-10-19",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/StarLadder/StarSeries/Season_11",
      "https://liquipedia.net/counterstrike/Team_LDLC.com/Results"
    ],
    "confidence": "high"
  },
  "2014-10-faceit-league-season-2-finals": {
    "eventId": "2014-10-faceit-league-season-2-finals",
    "team": "Fnatic",
    "teamKey": "Fnatic",
    "eventStartDate": "2014-10-24",
    "ranking": null,
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      },
      {
        "nick": "pronax",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/41/pronax"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      }
    ],
    "coach": {
      "nick": "Devilwalk",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/FACEIT/League/Season_2",
      "https://www.hltv.org/team/4991/fnatic",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2014-11-eswc-2014": {
    "eventId": "2014-11-eswc-2014",
    "team": "Fnatic",
    "teamKey": "Fnatic",
    "eventStartDate": "2014-10-29",
    "ranking": null,
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      },
      {
        "nick": "pronax",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/41/pronax"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      }
    ],
    "coach": {
      "nick": "Devilwalk",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/Electronic_Sports_World_Cup/2014",
      "https://www.hltv.org/team/4991/fnatic",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2014-11-dreamhack-winter-2014": {
    "eventId": "2014-11-dreamhack-winter-2014",
    "team": "Team LDLC.com",
    "teamKey": "Team LDLC.com",
    "eventStartDate": "2014-11-27",
    "ranking": null,
    "roster": [
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "SmithZz",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7170/smithzz"
      },
      {
        "nick": "kioShiMa",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/4959/kioshima"
      },
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      },
      {
        "nick": "Happy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7429/happy"
      }
    ],
    "coach": {
      "nick": "MoMaN",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "SLTV StarSeries XI Finals",
          "date": "2014-10-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Winter 2014",
          "date": "2014-11-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/1553/dreamhack-winter-2014",
      "https://liquipedia.net/counterstrike/DreamHack/2014/Winter",
      "https://www.hltv.org/team/4674/ldlc"
    ],
    "confidence": "high"
  },
  "2015-03-esl-one-katowice-2015": {
    "eventId": "2015-03-esl-one-katowice-2015",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2015-03-12",
    "ranking": null,
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "pronax",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/41/pronax"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      }
    ],
    "coach": {
      "nick": "Devilwalk",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/ESL/One/2015/Katowice",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2015-04-esea-invite-season-18-global-finals": {
    "eventId": "2015-04-esea-invite-season-18-global-finals",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2015-04-17",
    "ranking": null,
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "Snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": {
      "nick": "kuben",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity G3",
          "date": "2014-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Invite Season 18 Global Finals",
          "date": "2015-04-19",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/ESEA/Season_18/Invite",
      "https://www.hltv.org/team/5378/virtuspro",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "high"
  },
  "2015-07-esl-esea-pro-league-season-1-finals": {
    "eventId": "2015-07-esl-esea-pro-league-season-1-finals",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2015-07-02",
    "ranking": null,
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      },
      {
        "nick": "pronax",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/41/pronax"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      }
    ],
    "coach": {
      "nick": "vuggo",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/ESL_ESEA/Pro_League/Season/I/Finals",
      "https://www.hltv.org/team/4991/fnatic",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2015-07-faceit-league-2015-stage-2-finals": {
    "eventId": "2015-07-faceit-league-2015-stage-2-finals",
    "team": "Team SoloMid",
    "teamKey": "Team SoloMid",
    "eventStartDate": "2015-07-16",
    "ranking": null,
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "cajunb",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2469/cajunb"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "PGL CS:GO Championship Series Kick-off Season Finals",
          "date": "2015-04-26",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "FACEIT League 2015 Stage 1 Finals",
          "date": "2015-05-03",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Fragbite Masters Season 4",
          "date": "2015-06-07",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "FACEIT League 2015 Stage 2 Finals",
          "date": "2015-07-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/FACEIT/League/2015/Stage_2/Finals",
      "https://liquipedia.net/counterstrike/TSM/Results",
      "https://liquipedia.net/counterstrike/Team_SoloMid/Results"
    ],
    "confidence": "medium"
  },
  "2015-08-esl-one-cologne-2015": {
    "eventId": "2015-08-esl-one-cologne-2015",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2015-08-20",
    "ranking": null,
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "pronax",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/41/pronax"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      }
    ],
    "coach": {
      "nick": "vuggo",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 12,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2015",
          "date": "2015-08-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/1666/esl-one-cologne-2015",
      "https://liquipedia.net/counterstrike/ESL/One/2015/Cologne",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2015-09-esl-esea-dubai-invitational-2015": {
    "eventId": "2015-09-esl-esea-dubai-invitational-2015",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2015-09-10",
    "ranking": null,
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "Snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": {
      "nick": "kuben",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity G3",
          "date": "2014-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Invite Season 18 Global Finals",
          "date": "2015-04-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Season 7 Professional",
          "date": "2015-07-26",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Dubai Invitational 2015",
          "date": "2015-09-12",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/ESL_ESEA/Dubai_Invitational/2015",
      "https://www.hltv.org/team/5378/virtuspro",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "medium"
  },
  "2015-09-gfinity-champion-of-champions-2015": {
    "eventId": "2015-09-gfinity-champion-of-champions-2015",
    "team": "Team EnVyUs",
    "teamKey": "Team EnVyUs",
    "eventStartDate": "2015-09-26",
    "ranking": null,
    "roster": [
      {
        "nick": "Happy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7429/happy"
      },
      {
        "nick": "kioShiMa",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/4959/kioshima"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "Gfinity Spring Masters 1",
          "date": "2015-03-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XII",
          "date": "2015-03-29",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Masters Summer 1",
          "date": "2015-06-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters Season X - gamescom",
          "date": "2015-08-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open London 2015",
          "date": "2015-09-20",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Champion of Champions 2015",
          "date": "2015-09-27",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://liquipedia.net/counterstrike/Gfinity/Champion_of_Champions",
      "https://liquipedia.net/counterstrike/Team_EnVyUs/Results"
    ],
    "confidence": "medium"
  },
  "2015-11-dreamhack-open-cluj-napoca-2015": {
    "eventId": "2015-11-dreamhack-open-cluj-napoca-2015",
    "team": "Team EnVyUs",
    "teamKey": "Team EnVyUs",
    "eventStartDate": "2015-10-28",
    "ranking": {
      "rank": 4,
      "points": 778,
      "rankingDate": "2015-10-26",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2015/october/26",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 26th, 2015"
    },
    "roster": [
      {
        "nick": "Happy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7429/happy"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "kioShiMa",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/4959/kioshima"
      },
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      }
    ],
    "coach": {
      "nick": "Next",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "Gfinity Spring Masters 1",
          "date": "2015-03-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XII",
          "date": "2015-03-29",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Masters Summer 1",
          "date": "2015-06-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters Season X - gamescom",
          "date": "2015-08-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open London 2015",
          "date": "2015-09-20",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Champion of Champions 2015",
          "date": "2015-09-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Cluj-Napoca 2015",
          "date": "2015-11-01",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2015/october/26",
      "https://web.archive.org/web/20170223212042/http://www.hltv.org/ranking/teams/2015/october/26/",
      "https://liquipedia.net/counterstrike/DreamHack/2015/Cluj-Napoca",
      "https://liquipedia.net/counterstrike/Team_EnVyUs/Results"
    ],
    "confidence": "medium"
  },
  "2015-11-cevo-professional-season-8-finals": {
    "eventId": "2015-11-cevo-professional-season-8-finals",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2015-11-06",
    "ranking": {
      "rank": 4,
      "points": 722,
      "rankingDate": "2015-11-03",
      "sourceUrl": "https://web.archive.org/web/20181117104935/https://www.hltv.org/ranking/teams/2015/november/3/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on November 3rd, 2015"
    },
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "Snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": {
      "nick": "kuben",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity G3",
          "date": "2014-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Invite Season 18 Global Finals",
          "date": "2015-04-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Season 7 Professional",
          "date": "2015-07-26",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Dubai Invitational 2015",
          "date": "2015-09-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Professional Season 8 Finals",
          "date": "2015-11-08",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20181117104935/https://www.hltv.org/ranking/teams/2015/november/3/",
      "https://www.hltv.org/team/5378/virtuspro",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "medium"
  },
  "2015-11-intel-extreme-masters-x-san-jose-2015": {
    "eventId": "2015-11-intel-extreme-masters-x-san-jose-2015",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2015-11-21",
    "ranking": {
      "rank": 5,
      "points": 585,
      "rankingDate": "2015-11-16",
      "sourceUrl": "https://web.archive.org/web/20250822051952/https://www.hltv.org/ranking/teams/2015/november/16/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on November 16th, 2015"
    },
    "roster": [
      {
        "nick": "Edward",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/483/edward"
      },
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "seized",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/3347/seized"
      },
      {
        "nick": "flamie",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7594/flamie"
      }
    ],
    "coach": {
      "nick": "starix",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20250822051952/https://www.hltv.org/ranking/teams/2015/november/16/",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2015-11-faceit-league-2015-stage-3-finals": {
    "eventId": "2015-11-faceit-league-2015-stage-3-finals",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2015-11-26",
    "ranking": {
      "rank": 5,
      "points": 624,
      "rankingDate": "2015-11-24",
      "sourceUrl": "https://web.archive.org/web/20200605205712/https://www.hltv.org/ranking/teams/2015/november/24",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on November 24th, 2015"
    },
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "dennis",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/1146/dennis"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      }
    ],
    "coach": {
      "nick": "vuggo",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 13,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2015",
          "date": "2015-08-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League 2015 Stage 3 Finals",
          "date": "2015-11-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20200605205712/https://www.hltv.org/ranking/teams/2015/november/24",
      "https://www.hltv.org/team/4991/fnatic",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2015-12-esl-esea-pro-league-season-2-finals": {
    "eventId": "2015-12-esl-esea-pro-league-season-2-finals",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2015-12-10",
    "ranking": {
      "rank": 1,
      "points": 952,
      "rankingDate": "2015-12-08",
      "sourceUrl": "https://web.archive.org/web/20210305203517/https://www.hltv.org/ranking/teams/2015/december/8",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on December 8th, 2015"
    },
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "dennis",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/1146/dennis"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      }
    ],
    "coach": {
      "nick": "vuggo",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 15,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2015",
          "date": "2015-08-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League 2015 Stage 3 Finals",
          "date": "2015-11-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 5",
          "date": "2015-12-06",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 2 Finals",
          "date": "2015-12-13",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20210305203517/https://www.hltv.org/ranking/teams/2015/december/8",
      "https://www.hltv.org/team/4991/fnatic",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2016-01-starladder-i-league-starseries-xiv-finals-2016": {
    "eventId": "2016-01-starladder-i-league-starseries-xiv-finals-2016",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2016-01-13",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2016-01-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2016/january/11",
      "sourceType": "HLTV",
      "pageTitle": "CS:GO World ranking on January 11th, 2016"
    },
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "dennis",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/1146/dennis"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      }
    ],
    "coach": {
      "nick": "vuggo",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 16,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2015",
          "date": "2015-08-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League 2015 Stage 3 Finals",
          "date": "2015-11-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 5",
          "date": "2015-12-06",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 2 Finals",
          "date": "2015-12-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League StarSeries XIV Finals 2016",
          "date": "2016-01-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/1978/sl-i-league-starseries-xiv-finals",
      "https://www.hltv.org/ranking/teams/2016/january/11",
      "https://www.hltv.org/team/4991/fnatic",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2016-01-dreamhack-open-leipzig-2016": {
    "eventId": "2016-01-dreamhack-open-leipzig-2016",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2016-01-22",
    "ranking": {
      "rank": 2,
      "points": 729,
      "rankingDate": "2016-01-18",
      "sourceUrl": "https://web.archive.org/web/20220125024458/https://www.hltv.org/ranking/teams/2016/january/18",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on January 18th, 2016"
    },
    "roster": [
      {
        "nick": "Edward",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/483/edward"
      },
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "seized",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/3347/seized"
      },
      {
        "nick": "flamie",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7594/flamie"
      }
    ],
    "coach": {
      "nick": "starix",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/1977/dreamhack-zowie-open-leipzig-2016",
      "https://web.archive.org/web/20220125024458/https://www.hltv.org/ranking/teams/2016/january/18",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2016-02-game-show-global-esports-cup-2016-finals": {
    "eventId": "2016-02-game-show-global-esports-cup-2016-finals",
    "team": "Team EnVyUs",
    "teamKey": "Team EnVyUs",
    "eventStartDate": "2016-02-04",
    "ranking": {
      "rank": 3,
      "points": 667,
      "rankingDate": "2016-02-01",
      "sourceUrl": "https://web.archive.org/web/20241212072301/https://www.hltv.org/ranking/teams/2016/february/1",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on February 1st, 2016"
    },
    "roster": [
      {
        "nick": "Happy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7429/happy"
      },
      {
        "nick": "kioShiMa",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/4959/kioshima"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      }
    ],
    "coach": {
      "nick": "Maniac",
      "country": "CH",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "Gfinity Spring Masters 1",
          "date": "2015-03-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XII",
          "date": "2015-03-29",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Masters Summer 1",
          "date": "2015-06-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters Season X - gamescom",
          "date": "2015-08-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open London 2015",
          "date": "2015-09-20",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Champion of Champions 2015",
          "date": "2015-09-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Cluj-Napoca 2015",
          "date": "2015-11-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Game Show Global eSports Cup 2016 Finals",
          "date": "2016-02-07",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20241212072301/https://www.hltv.org/ranking/teams/2016/february/1",
      "https://liquipedia.net/counterstrike/Team_EnVyUs/Results"
    ],
    "confidence": "medium"
  },
  "2016-03-iem-katowice-2016": {
    "eventId": "2016-03-iem-katowice-2016",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2016-03-02",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2016-03-01",
      "sourceUrl": "https://web.archive.org/web/20221023171442/https://www.hltv.org/ranking/teams/2016/march/1",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on March 1st, 2016"
    },
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "dennis",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/1146/dennis"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      }
    ],
    "coach": {
      "nick": "vuggo",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 17,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2015",
          "date": "2015-08-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League 2015 Stage 3 Finals",
          "date": "2015-11-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 5",
          "date": "2015-12-06",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 2 Finals",
          "date": "2015-12-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League StarSeries XIV Finals 2016",
          "date": "2016-01-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2016",
          "date": "2016-03-05",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20221023171442/https://www.hltv.org/ranking/teams/2016/march/1",
      "https://www.hltv.org/team/4991/fnatic",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2016-04-mlg-major-championship-columbus-2016": {
    "eventId": "2016-04-mlg-major-championship-columbus-2016",
    "team": "Luminosity Gaming",
    "teamKey": "Luminosity Gaming",
    "eventStartDate": "2016-03-29",
    "ranking": {
      "rank": 4,
      "points": 517,
      "rankingDate": "2016-03-28",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2016/march/28",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 28th, 2016"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "fnx",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/557/fnx"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      }
    ],
    "coach": {
      "nick": "zews",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "MLG Major Championship: Columbus 2016",
          "date": "2016-04-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2027/mlg-columbus-2016",
      "https://www.hltv.org/ranking/teams/2016/march/28",
      "https://web.archive.org/web/20170218085707/http://www.hltv.org/ranking/teams/2016/march/28/",
      "https://liquipedia.net/counterstrike/MLG/2016/Columbus",
      "https://liquipedia.net/counterstrike/Luminosity_Gaming/Results"
    ],
    "confidence": "high"
  },
  "2016-04-dreamhack-masters-malm-2016": {
    "eventId": "2016-04-dreamhack-masters-malm-2016",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2016-04-12",
    "ranking": {
      "rank": 7,
      "points": 245,
      "rankingDate": "2016-04-11",
      "sourceUrl": "https://web.archive.org/web/20200428110310/https://www.hltv.org/ranking/teams/2016/april/11",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on April 11th, 2016"
    },
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      },
      {
        "nick": "pyth",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7527/pyth"
      }
    ],
    "coach": {
      "nick": "THREAT",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 12,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Global Finals Season 14",
          "date": "2013-08-18",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Bucharest 2013",
          "date": "2013-09-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Copenhagen Games 2014",
          "date": "2014-04-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Summer 2014",
          "date": "2014-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2014",
          "date": "2014-08-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2016",
          "date": "2016-04-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20200428110310/https://www.hltv.org/ranking/teams/2016/april/11",
      "https://www.hltv.org/team/4411/ninjas-in-pyjamas",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2016-05-cevo-pro-league-season-9-2016": {
    "eventId": "2016-05-cevo-pro-league-season-9-2016",
    "team": "Tempo Storm",
    "teamKey": "Tempo Storm",
    "eventStartDate": "2016-04-28",
    "ranking": {
      "rank": 15,
      "points": 142,
      "rankingDate": "2016-04-25",
      "sourceUrl": "https://web.archive.org/web/20201127105741/https://www.hltv.org/ranking/teams/2016/april/25",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on April 25th, 2016"
    },
    "roster": [
      {
        "nick": "HEN1",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8565/hen1"
      },
      {
        "nick": "LUCAS1",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8566/lucas1"
      },
      {
        "nick": "boltz",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8568/boltz"
      },
      {
        "nick": "felps",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9219/felps"
      },
      {
        "nick": "SHOOWTiME",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9220/shoowtime"
      }
    ],
    "coach": {
      "nick": "peacemaker",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "CEVO Pro League Season 9 2016",
          "date": "2016-05-01",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201127105741/https://www.hltv.org/ranking/teams/2016/april/25",
      "https://liquipedia.net/counterstrike/Tempo_Storm/Results"
    ],
    "confidence": "medium"
  },
  "2016-05-dreamhack-open-austin-2016": {
    "eventId": "2016-05-dreamhack-open-austin-2016",
    "team": "Luminosity Gaming",
    "teamKey": "Luminosity Gaming",
    "eventStartDate": "2016-05-06",
    "ranking": {
      "rank": 2,
      "points": 891,
      "rankingDate": "2016-05-02",
      "sourceUrl": "https://web.archive.org/web/20190827143409/https://www.hltv.org/ranking/teams/2016/may/2/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on May 2nd, 2016"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "fnx",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/557/fnx"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      }
    ],
    "coach": {
      "nick": "zews",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "MLG Major Championship: Columbus 2016",
          "date": "2016-04-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Austin 2016",
          "date": "2016-05-08",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20190827143409/https://www.hltv.org/ranking/teams/2016/may/2/",
      "https://liquipedia.net/counterstrike/DreamHack/2016/Austin",
      "https://liquipedia.net/counterstrike/Luminosity_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2016-05-esl-pro-league-season-3-finals-2016": {
    "eventId": "2016-05-esl-pro-league-season-3-finals-2016",
    "team": "Luminosity Gaming",
    "teamKey": "Luminosity Gaming",
    "eventStartDate": "2016-05-11",
    "ranking": {
      "rank": 1,
      "points": 968,
      "rankingDate": "2016-05-09",
      "sourceUrl": "https://web.archive.org/web/20201108130327/https://www.hltv.org/ranking/teams/2016/may/9/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on May 9th, 2016"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "fnx",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/557/fnx"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      }
    ],
    "coach": {
      "nick": "zews",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "MLG Major Championship: Columbus 2016",
          "date": "2016-04-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Austin 2016",
          "date": "2016-05-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 3 Finals 2016",
          "date": "2016-05-15",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201108130327/https://www.hltv.org/ranking/teams/2016/may/9/",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_3/Finals",
      "https://liquipedia.net/counterstrike/Luminosity_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2016-05-starladder-i-league-invitational-1-2016": {
    "eventId": "2016-05-starladder-i-league-invitational-1-2016",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2016-05-19",
    "ranking": {
      "rank": 6,
      "points": 312,
      "rankingDate": "2016-05-17",
      "sourceUrl": "https://web.archive.org/web/20201116152212/https://www.hltv.org/ranking/teams/2016/may/17/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on May 17th, 2016"
    },
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": {
      "nick": "kuben",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity G3",
          "date": "2014-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Invite Season 18 Global Finals",
          "date": "2015-04-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Season 7 Professional",
          "date": "2015-07-26",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Dubai Invitational 2015",
          "date": "2015-09-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Professional Season 8 Finals",
          "date": "2015-11-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League Invitational #1 2016",
          "date": "2016-05-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2187/sl-i-league-invitational-1",
      "https://web.archive.org/web/20201116152212/https://www.hltv.org/ranking/teams/2016/may/17/",
      "https://liquipedia.net/counterstrike/StarLadder/i-League_Invitational/Season_1",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "medium"
  },
  "2016-06-dreamhack-zowie-open-summer-2016": {
    "eventId": "2016-06-dreamhack-zowie-open-summer-2016",
    "team": "Immortals",
    "teamKey": "Immortals",
    "eventStartDate": "2016-06-18",
    "ranking": {
      "rank": 9,
      "points": 247,
      "rankingDate": "2016-06-13",
      "sourceUrl": "https://web.archive.org/web/20201116152154/https://www.hltv.org/ranking/teams/2016/june/13/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on June 13th, 2016"
    },
    "roster": [
      {
        "nick": "HEN1",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8565/hen1"
      },
      {
        "nick": "LUCAS1",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8566/lucas1"
      },
      {
        "nick": "boltz",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8568/boltz"
      },
      {
        "nick": "felps",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9219/felps"
      },
      {
        "nick": "SHOOWTiME",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9220/shoowtime"
      }
    ],
    "coach": {
      "nick": "zakk",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "DreamHack ZOWIE Open Summer 2016",
          "date": "2016-06-20",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201116152154/https://www.hltv.org/ranking/teams/2016/june/13/",
      "https://liquipedia.net/counterstrike/DreamHack/2016/Summer",
      "https://liquipedia.net/counterstrike/Immortals/Results"
    ],
    "confidence": "medium"
  },
  "2016-06-ecs-season-1-finals-2016": {
    "eventId": "2016-06-ecs-season-1-finals-2016",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2016-06-24",
    "ranking": {
      "rank": 6,
      "points": 391,
      "rankingDate": "2016-06-21",
      "sourceUrl": "https://web.archive.org/web/20250531044004/https://www.hltv.org/ranking/teams/2016/june/21",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on June 21st, 2016"
    },
    "roster": [
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      },
      {
        "nick": "ScreaM",
        "country": "BE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7390/scream"
      },
      {
        "nick": "RpK",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7169/rpk"
      },
      {
        "nick": "SmithZz",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7170/smithzz"
      },
      {
        "nick": "bodyy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8374/bodyy"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20250531044004/https://www.hltv.org/ranking/teams/2016/june/21",
      "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_1",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "medium"
  },
  "2016-07-esl-one-cologne-2016": {
    "eventId": "2016-07-esl-one-cologne-2016",
    "team": "SK Gaming",
    "teamKey": "SK Gaming",
    "eventStartDate": "2016-07-05",
    "ranking": {
      "rank": 1,
      "points": 964,
      "rankingDate": "2016-07-04",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2016/july/4",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 4th, 2016"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "fnx",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/557/fnx"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      }
    ],
    "coach": {
      "nick": "zews",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ESL One Cologne 2016",
          "date": "2016-07-10",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2062/esl-one-cologne-2016",
      "https://www.hltv.org/ranking/teams/2016/july/4",
      "https://en.wikipedia.org/wiki/ESL_One_Cologne_2016"
    ],
    "confidence": "high"
  },
  "2016-07-eleague-season-1-2016": {
    "eventId": "2016-07-eleague-season-1-2016",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2016-05-24",
    "ranking": {
      "rank": 6,
      "points": 375,
      "rankingDate": "2016-05-23",
      "sourceUrl": "https://web.archive.org/web/20250531044004/https://www.hltv.org/ranking/teams/2016/may/23",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on May 23rd, 2016"
    },
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": {
      "nick": "kuben",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity G3",
          "date": "2014-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Invite Season 18 Global Finals",
          "date": "2015-04-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Season 7 Professional",
          "date": "2015-07-26",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Dubai Invitational 2015",
          "date": "2015-09-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Professional Season 8 Finals",
          "date": "2015-11-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League Invitational #1 2016",
          "date": "2016-05-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Season 1 2016",
          "date": "2016-07-30",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20250531044004/https://www.hltv.org/ranking/teams/2016/may/23",
      "https://liquipedia.net/counterstrike/ELEAGUE/Season_1",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "medium"
  },
  "2016-09-northern-arena-2016-toronto": {
    "eventId": "2016-09-northern-arena-2016-toronto",
    "team": "Immortals",
    "teamKey": "Immortals",
    "eventStartDate": "2016-09-01",
    "ranking": {
      "rank": 17,
      "points": 138,
      "rankingDate": "2016-08-29",
      "sourceUrl": "https://web.archive.org/web/20250531044004/https://www.hltv.org/ranking/teams/2016/august/29",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on August 29th, 2016"
    },
    "roster": [
      {
        "nick": "HEN1",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8565/hen1"
      },
      {
        "nick": "LUCAS1",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8566/lucas1"
      },
      {
        "nick": "boltz",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8568/boltz"
      },
      {
        "nick": "felps",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9219/felps"
      },
      {
        "nick": "zews",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/6608/zews"
      }
    ],
    "coach": {
      "nick": "zakk",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "DreamHack ZOWIE Open Summer 2016",
          "date": "2016-06-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Northern Arena 2016 - Toronto",
          "date": "2016-09-04",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20250531044004/https://www.hltv.org/ranking/teams/2016/august/29",
      "https://liquipedia.net/counterstrike/Northern_Arena/2016/Toronto",
      "https://liquipedia.net/counterstrike/Immortals/Results"
    ],
    "confidence": "medium"
  },
  "2016-09-sl-i-league-starseries-season-2-finals-2016": {
    "eventId": "2016-09-sl-i-league-starseries-season-2-finals-2016",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2016-09-07",
    "ranking": {
      "rank": 7,
      "points": 324,
      "rankingDate": "2016-09-05",
      "sourceUrl": "https://web.archive.org/web/20251114134440/https://www.hltv.org/ranking/teams/2016/september/5",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on September 5th, 2016"
    },
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      },
      {
        "nick": "Maikelele",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/1045/maikelele",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "THREAT",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 13,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Global Finals Season 14",
          "date": "2013-08-18",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Bucharest 2013",
          "date": "2013-09-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Copenhagen Games 2014",
          "date": "2014-04-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Summer 2014",
          "date": "2014-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2014",
          "date": "2014-08-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2016",
          "date": "2016-04-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SL i-League StarSeries Season 2 Finals 2016",
          "date": "2016-09-11",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20251114134440/https://www.hltv.org/ranking/teams/2016/september/5",
      "https://liquipedia.net/counterstrike/StarLadder/i-League_StarSeries/Season_2",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2016-09-dreamhack-zowie-open-bucharest-2016": {
    "eventId": "2016-09-dreamhack-zowie-open-bucharest-2016",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2016-09-16",
    "ranking": {
      "rank": 2,
      "points": 587,
      "rankingDate": "2016-09-12",
      "sourceUrl": "https://web.archive.org/web/20251116064448/https://www.hltv.org/ranking/teams/2016/september/12",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on September 12th, 2016"
    },
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": {
      "nick": "kuben",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity G3",
          "date": "2014-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Invite Season 18 Global Finals",
          "date": "2015-04-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Season 7 Professional",
          "date": "2015-07-26",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Dubai Invitational 2015",
          "date": "2015-09-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Professional Season 8 Finals",
          "date": "2015-11-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League Invitational #1 2016",
          "date": "2016-05-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Season 1 2016",
          "date": "2016-07-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack ZOWIE Open Bucharest 2016",
          "date": "2016-09-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20251116064448/https://www.hltv.org/ranking/teams/2016/september/12",
      "https://liquipedia.net/counterstrike/DreamHack/2016/Bucharest",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "medium"
  },
  "2016-09-gfinity-cs-go-invitational-2016": {
    "eventId": "2016-09-gfinity-cs-go-invitational-2016",
    "team": "Team EnVyUs",
    "teamKey": "Team EnVyUs",
    "eventStartDate": "2016-09-23",
    "ranking": {
      "rank": 9,
      "points": 353,
      "rankingDate": "2016-09-19",
      "sourceUrl": "https://web.archive.org/web/20201116152223/https://www.hltv.org/ranking/teams/2016/september/19/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on September 19th, 2016"
    },
    "roster": [
      {
        "nick": "Happy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7429/happy"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "DEVIL",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8569/devil"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "Gfinity Spring Masters 1",
          "date": "2015-03-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XII",
          "date": "2015-03-29",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Masters Summer 1",
          "date": "2015-06-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters Season X - gamescom",
          "date": "2015-08-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open London 2015",
          "date": "2015-09-20",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Champion of Champions 2015",
          "date": "2015-09-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Cluj-Napoca 2015",
          "date": "2015-11-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Game Show Global eSports Cup 2016 Finals",
          "date": "2016-02-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity CS:GO Invitational 2016",
          "date": "2016-09-25",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201116152223/https://www.hltv.org/ranking/teams/2016/september/19/",
      "https://liquipedia.net/counterstrike/Gfinity/2016/CS:GO_Invitational",
      "https://liquipedia.net/counterstrike/Team_EnVyUs/Results"
    ],
    "confidence": "medium"
  },
  "2016-10-esl-one-new-york-2016": {
    "eventId": "2016-10-esl-one-new-york-2016",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2016-09-30",
    "ranking": {
      "rank": 10,
      "points": 334,
      "rankingDate": "2016-09-26",
      "sourceUrl": "https://web.archive.org/web/20260829140927/https://www.hltv.org/ranking/teams/2016/september/26",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on September 26th, 2016"
    },
    "roster": [
      {
        "nick": "Edward",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/483/edward"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "seized",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/3347/seized"
      },
      {
        "nick": "flamie",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7594/flamie"
      },
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      }
    ],
    "coach": {
      "nick": "starix",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2239/esl-one-new-york-2016",
      "https://web.archive.org/web/20260829140927/https://www.hltv.org/ranking/teams/2016/september/26",
      "https://liquipedia.net/counterstrike/ESL/One/2016/New_York",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2016-10-epicenter-2016": {
    "eventId": "2016-10-epicenter-2016",
    "team": "Team Dignitas",
    "teamKey": "Team Dignitas",
    "eventStartDate": "2016-10-17",
    "ranking": {
      "rank": 5,
      "points": 506,
      "rankingDate": "2016-10-17",
      "sourceUrl": "https://web.archive.org/web/20201116152228/https://www.hltv.org/ranking/teams/2016/october/17/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on October 17th, 2016"
    },
    "roster": [
      {
        "nick": "MSL",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7156/msl"
      },
      {
        "nick": "k0nfig",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9078/k0nfig"
      },
      {
        "nick": "RUBINO",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/1485/rubino"
      },
      {
        "nick": "cajunb",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2469/cajunb"
      },
      {
        "nick": "Magiskb0Y",
        "country": "DK",
        "hltvPlayerUrl": null
      }
    ],
    "coach": {
      "nick": "ruggah",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "Fragbite Masters Season 2",
          "date": "2014-03-30",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "EPICENTER 2016",
          "date": "2016-10-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201116152228/https://www.hltv.org/ranking/teams/2016/october/17/",
      "https://liquipedia.net/counterstrike/EPICENTER/2016",
      "https://liquipedia.net/counterstrike/Team_Dignitas/Results"
    ],
    "confidence": "medium"
  },
  "2016-10-esl-pro-league-season-4-finals-2016": {
    "eventId": "2016-10-esl-pro-league-season-4-finals-2016",
    "team": "Cloud9",
    "teamKey": "Cloud9",
    "eventStartDate": "2016-10-26",
    "ranking": {
      "rank": 7,
      "points": 379,
      "rankingDate": "2016-10-24",
      "sourceUrl": "https://web.archive.org/web/20201116152230/https://www.hltv.org/ranking/teams/2016/october/24/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on October 24th, 2016"
    },
    "roster": [
      {
        "nick": "n0thing",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/203/n0thing"
      },
      {
        "nick": "shroud",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8349/shroud"
      },
      {
        "nick": "Skadoodle",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7440/skadoodle"
      },
      {
        "nick": "Stewie2K",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8797/stewie2k"
      },
      {
        "nick": "autimatic",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8735/autimatic"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ESL Pro League Season 4 Finals 2016",
          "date": "2016-10-30",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2306/esl-pro-league-season-4-finals",
      "https://web.archive.org/web/20201116152230/https://www.hltv.org/ranking/teams/2016/october/24/",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_4/Finals",
      "https://liquipedia.net/counterstrike/Cloud9/Results"
    ],
    "confidence": "medium"
  },
  "2016-11-ibuypower-masters-2016": {
    "eventId": "2016-11-ibuypower-masters-2016",
    "team": "Immortals",
    "teamKey": "Immortals",
    "eventStartDate": "2016-11-12",
    "ranking": {
      "rank": 14,
      "points": 193,
      "rankingDate": "2016-11-07",
      "sourceUrl": "https://web.archive.org/web/20201116152233/https://www.hltv.org/ranking/teams/2016/november/7/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on November 7th, 2016"
    },
    "roster": [
      {
        "nick": "HEN1",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8565/hen1"
      },
      {
        "nick": "LUCAS1",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8566/lucas1"
      },
      {
        "nick": "boltz",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8568/boltz"
      },
      {
        "nick": "felps",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9219/felps"
      },
      {
        "nick": "steel",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7382/steel"
      }
    ],
    "coach": {
      "nick": "zakk",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "DreamHack ZOWIE Open Summer 2016",
          "date": "2016-06-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Northern Arena 2016 - Toronto",
          "date": "2016-09-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "iBUYPOWER Masters 2016",
          "date": "2016-11-13",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201116152233/https://www.hltv.org/ranking/teams/2016/november/7/",
      "https://liquipedia.net/counterstrike/IBUYPOWER/Masters/2016",
      "https://liquipedia.net/counterstrike/Immortals/Results"
    ],
    "confidence": "medium"
  },
  "2016-11-northern-arena-2016-montreal": {
    "eventId": "2016-11-northern-arena-2016-montreal",
    "team": "OpTic Gaming",
    "teamKey": "OpTic Gaming",
    "eventStartDate": "2016-11-10",
    "ranking": {
      "rank": 11,
      "points": 272,
      "rankingDate": "2016-11-07",
      "sourceUrl": "https://web.archive.org/web/20201116152233/https://www.hltv.org/ranking/teams/2016/november/7/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on November 7th, 2016"
    },
    "roster": [
      {
        "nick": "tarik",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8523/tarik"
      },
      {
        "nick": "mixwell",
        "country": "ES",
        "hltvPlayerUrl": "https://www.hltv.org/player/8370/mixwell"
      },
      {
        "nick": "stanislaw",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8507/stanislaw"
      },
      {
        "nick": "RUSH",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7805/rush"
      },
      {
        "nick": "NAF",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8520/naf"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ELEAGUE Season 2 2016",
          "date": "2016-12-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201116152233/https://www.hltv.org/ranking/teams/2016/november/7/",
      "https://liquipedia.net/counterstrike/Northern_Arena/2016/Montreal",
      "https://liquipedia.net/counterstrike/OpTic_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2016-11-iem-oakland-2016": {
    "eventId": "2016-11-iem-oakland-2016",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2016-11-16",
    "ranking": {
      "rank": 7,
      "points": 447,
      "rankingDate": "2016-11-14",
      "sourceUrl": "https://web.archive.org/web/20201116152234/https://www.hltv.org/ranking/teams/2016/november/14/",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on November 14th, 2016"
    },
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "friberg",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7148/friberg"
      },
      {
        "nick": "pyth",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7527/pyth"
      }
    ],
    "coach": {
      "nick": "THREAT",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 14,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Global Finals Season 14",
          "date": "2013-08-18",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Bucharest 2013",
          "date": "2013-09-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Copenhagen Games 2014",
          "date": "2014-04-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Summer 2014",
          "date": "2014-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2014",
          "date": "2014-08-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2016",
          "date": "2016-04-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SL i-League StarSeries Season 2 Finals 2016",
          "date": "2016-09-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Oakland 2016",
          "date": "2016-11-20",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2261/iem-oakland-2016",
      "https://web.archive.org/web/20201116152234/https://www.hltv.org/ranking/teams/2016/november/14/",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XI/Oakland",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2016-11-dreamhack-zowie-open-winter-2016": {
    "eventId": "2016-11-dreamhack-zowie-open-winter-2016",
    "team": "Gambit Esports",
    "teamKey": "Gambit Esports",
    "eventStartDate": "2016-11-24",
    "ranking": {
      "rank": 20,
      "points": 105,
      "rankingDate": "2016-11-21",
      "sourceUrl": "https://web.archive.org/web/20201112010824/https://www.hltv.org/ranking/teams/2016/november/21",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on November 21st, 2016"
    },
    "roster": [
      {
        "nick": "Dosia",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/735/dosia"
      },
      {
        "nick": "AdreN",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/334/adren"
      },
      {
        "nick": "mou",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/964/mou"
      },
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "HObbit",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/8528/hobbit"
      }
    ],
    "coach": {
      "nick": "kane",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "DreamHack ZOWIE Open Winter 2016",
          "date": "2016-11-27",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201112010824/https://www.hltv.org/ranking/teams/2016/november/21",
      "https://liquipedia.net/counterstrike/DreamHack/2016/Winter",
      "https://liquipedia.net/counterstrike/Gambit_Esports/Results"
    ],
    "confidence": "medium"
  },
  "2016-12-eleague-season-2-2016": {
    "eventId": "2016-12-eleague-season-2-2016",
    "team": "OpTic Gaming",
    "teamKey": "OpTic Gaming",
    "eventStartDate": "2016-10-21",
    "ranking": {
      "rank": 11,
      "points": 302,
      "rankingDate": "2016-10-17",
      "sourceUrl": "https://web.archive.org/web/20201116152228/https://www.hltv.org/ranking/teams/2016/october/17/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on October 17th, 2016"
    },
    "roster": [
      {
        "nick": "tarik",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8523/tarik"
      },
      {
        "nick": "mixwell",
        "country": "ES",
        "hltvPlayerUrl": "https://www.hltv.org/player/8370/mixwell"
      },
      {
        "nick": "stanislaw",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8507/stanislaw"
      },
      {
        "nick": "RUSH",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7805/rush"
      },
      {
        "nick": "NAF",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8520/naf"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ELEAGUE Season 2 2016",
          "date": "2016-12-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2407/eleague-season-2",
      "https://web.archive.org/web/20201116152228/https://www.hltv.org/ranking/teams/2016/october/17/",
      "https://liquipedia.net/counterstrike/ELEAGUE/Season_2",
      "https://liquipedia.net/counterstrike/OpTic_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2016-12-ecs-season-2-finals-2016": {
    "eventId": "2016-12-ecs-season-2-finals-2016",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2016-12-09",
    "ranking": {
      "rank": 4,
      "points": 710,
      "rankingDate": "2016-12-05",
      "sourceUrl": "https://web.archive.org/web/20201129025443/https://www.hltv.org/ranking/teams/2016/december/5",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on December 5th, 2016"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "Kjaerbye",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/8394/kjaerbye"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201129025443/https://www.hltv.org/ranking/teams/2016/december/5",
      "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_2",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "medium"
  },
  "2017-01-eleague-major-atlanta-2017": {
    "eventId": "2017-01-eleague-major-atlanta-2017",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2017-01-22",
    "ranking": {
      "rank": 1,
      "points": 967,
      "rankingDate": "2017-01-16",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/january/16",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on January 16th, 2017"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "Kjaerbye",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/8394/kjaerbye"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2471/eleague-major-2017",
      "https://www.hltv.org/ranking/teams/2017/january/16",
      "https://en.wikipedia.org/wiki/ELEAGUE_Major_2017"
    ],
    "confidence": "high"
  },
  "2017-01-wesg-2016-world-finals": {
    "eventId": "2017-01-wesg-2016-world-finals",
    "team": "EnVyUs",
    "teamKey": "EnVyUs",
    "eventStartDate": "2017-01-12",
    "ranking": {
      "rank": 11,
      "points": 344,
      "rankingDate": "2017-01-09",
      "sourceUrl": "https://web.archive.org/web/20201112015145/https://www.hltv.org/ranking/teams/2017/january/9/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on January 9th, 2017"
    },
    "roster": [
      {
        "nick": "Happy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7429/happy"
      },
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "SIXER",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/147/sixer"
      }
    ],
    "coach": null,
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "Gfinity Spring Masters 1",
          "date": "2015-03-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XII",
          "date": "2015-03-29",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Masters Summer 1",
          "date": "2015-06-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters Season X - gamescom",
          "date": "2015-08-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open London 2015",
          "date": "2015-09-20",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Champion of Champions 2015",
          "date": "2015-09-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Cluj-Napoca 2015",
          "date": "2015-11-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Game Show Global eSports Cup 2016 Finals",
          "date": "2016-02-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity CS:GO Invitational 2016",
          "date": "2016-09-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "WESG 2016 World Finals",
          "date": "2017-01-15",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201112015145/https://www.hltv.org/ranking/teams/2017/january/9/",
      "https://liquipedia.net/counterstrike/World_Electronic_Sports_Games/2016",
      "https://liquipedia.net/counterstrike/Team_EnVyUs/Results"
    ],
    "confidence": "medium"
  },
  "2017-02-dreamhack-masters-las-vegas-2017": {
    "eventId": "2017-02-dreamhack-masters-las-vegas-2017",
    "team": "Virtus.pro",
    "teamKey": "Virtus.pro",
    "eventStartDate": "2017-02-15",
    "ranking": {
      "rank": 2,
      "points": 769,
      "rankingDate": "2017-02-13",
      "sourceUrl": "https://web.archive.org/web/20251114221151/https://www.hltv.org/ranking/teams/2017/february/13",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on February 13th, 2017"
    },
    "roster": [
      {
        "nick": "TaZ",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/161/taz"
      },
      {
        "nick": "NEO",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/165/neo"
      },
      {
        "nick": "pashaBiceps",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/317/pashabiceps"
      },
      {
        "nick": "snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      },
      {
        "nick": "byali",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/5386/byali"
      }
    ],
    "coach": {
      "nick": "kuben",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "SLTV StarSeries V Finals",
          "date": "2013-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EMS One Katowice 2014",
          "date": "2014-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gfinity G3",
          "date": "2014-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Invite Season 18 Global Finals",
          "date": "2015-04-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Season 7 Professional",
          "date": "2015-07-26",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Dubai Invitational 2015",
          "date": "2015-09-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CEVO Professional Season 8 Finals",
          "date": "2015-11-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League Invitational #1 2016",
          "date": "2016-05-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Season 1 2016",
          "date": "2016-07-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack ZOWIE Open Bucharest 2016",
          "date": "2016-09-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Las Vegas 2017",
          "date": "2017-02-19",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2541/dreamhack-masters-las-vegas-2017",
      "https://web.archive.org/web/20251114221151/https://www.hltv.org/ranking/teams/2017/february/13",
      "https://liquipedia.net/counterstrike/DreamHack/2017/Las_Vegas",
      "https://liquipedia.net/counterstrike/Virtus.pro/Results"
    ],
    "confidence": "medium"
  },
  "2017-03-iem-katowice-2017": {
    "eventId": "2017-03-iem-katowice-2017",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2017-03-01",
    "ranking": {
      "rank": 1,
      "points": 930,
      "rankingDate": "2017-02-27",
      "sourceUrl": "https://web.archive.org/web/20201111212304/https://www.hltv.org/ranking/teams/2017/february/27/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on February 27th, 2017"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "Kjaerbye",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/8394/kjaerbye"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201111212304/https://www.hltv.org/ranking/teams/2017/february/27/",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XI/World_Championship",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "medium"
  },
  "2017-04-starseries-i-league-season-3": {
    "eventId": "2017-04-starseries-i-league-season-3",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2017-04-04",
    "ranking": {
      "rank": 4,
      "points": 523,
      "rankingDate": "2017-04-03",
      "sourceUrl": "https://web.archive.org/web/20201111180747/https://www.hltv.org/ranking/teams/2017/april/3/",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on April 3rd, 2017"
    },
    "roster": [
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "allu",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/695/allu"
      },
      {
        "nick": "kioShiMa",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/4959/kioshima"
      },
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2683/sl-i-league-starseries-season-3-finals",
      "https://web.archive.org/web/20201111180747/https://www.hltv.org/ranking/teams/2017/april/3/",
      "https://liquipedia.net/counterstrike/StarLadder/i-League_StarSeries/Season_3",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2017-04-cs-summit-1": {
    "eventId": "2017-04-cs-summit-1",
    "team": "SK Gaming",
    "teamKey": "SK Gaming",
    "eventStartDate": "2017-04-20",
    "ranking": {
      "rank": 4,
      "points": 460,
      "rankingDate": "2017-04-17",
      "sourceUrl": "https://web.archive.org/web/20251114134440/https://www.hltv.org/ranking/teams/2017/april/17",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on April 17th, 2017"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      },
      {
        "nick": "felps",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9219/felps"
      }
    ],
    "coach": {
      "nick": "dead",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "ESL One Cologne 2016",
          "date": "2016-07-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 1",
          "date": "2017-04-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20251114134440/https://www.hltv.org/ranking/teams/2017/april/17",
      "https://liquipedia.net/counterstrike/Cs_summit/1",
      "https://liquipedia.net/counterstrike/SK_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2017-05-iem-sydney-2017": {
    "eventId": "2017-05-iem-sydney-2017",
    "team": "SK Gaming",
    "teamKey": "SK Gaming",
    "eventStartDate": "2017-05-03",
    "ranking": {
      "rank": 4,
      "points": 526,
      "rankingDate": "2017-05-01",
      "sourceUrl": "https://web.archive.org/web/20251114134440/https://www.hltv.org/ranking/teams/2017/may/1",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on May 1st, 2017"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      },
      {
        "nick": "felps",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9219/felps"
      }
    ],
    "coach": {
      "nick": "dead",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "ESL One Cologne 2016",
          "date": "2016-07-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 1",
          "date": "2017-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2017",
          "date": "2017-05-07",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20251114134440/https://www.hltv.org/ranking/teams/2017/may/1",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XII/Sydney",
      "https://liquipedia.net/counterstrike/SK_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2017-06-esl-pro-league-season-5-finals": {
    "eventId": "2017-06-esl-pro-league-season-5-finals",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2017-05-30",
    "ranking": {
      "rank": 4,
      "points": 408,
      "rankingDate": "2017-05-29",
      "sourceUrl": "https://web.archive.org/web/20201111212830/https://www.hltv.org/ranking/teams/2017/may/29",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on May 29th, 2017"
    },
    "roster": [
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      },
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "bodyy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8374/bodyy"
      }
    ],
    "coach": {
      "nick": "SmithZz",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201111212830/https://www.hltv.org/ranking/teams/2017/may/29",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_5/Finals",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "medium"
  },
  "2017-06-ecs-season-3-finals": {
    "eventId": "2017-06-ecs-season-3-finals",
    "team": "SK Gaming",
    "teamKey": "SK Gaming",
    "eventStartDate": "2017-06-23",
    "ranking": {
      "rank": 1,
      "points": 876,
      "rankingDate": "2017-06-19",
      "sourceUrl": "https://web.archive.org/web/20201112004040/https://www.hltv.org/ranking/teams/2017/june/19",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on June 19th, 2017"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      },
      {
        "nick": "felps",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9219/felps"
      }
    ],
    "coach": {
      "nick": "dead",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "ESL One Cologne 2016",
          "date": "2016-07-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 1",
          "date": "2017-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2017",
          "date": "2017-05-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 3 Finals",
          "date": "2017-06-25",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201112004040/https://www.hltv.org/ranking/teams/2017/june/19",
      "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_3",
      "https://liquipedia.net/counterstrike/SK_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2017-07-esl-one-cologne-2017": {
    "eventId": "2017-07-esl-one-cologne-2017",
    "team": "SK Gaming",
    "teamKey": "SK Gaming",
    "eventStartDate": "2017-07-04",
    "ranking": {
      "rank": 1,
      "points": 982,
      "rankingDate": "2017-07-03",
      "sourceUrl": "https://web.archive.org/web/20201109023417/https://www.hltv.org/ranking/teams/2017/july/3",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on July 3rd, 2017"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      },
      {
        "nick": "felps",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9219/felps"
      }
    ],
    "coach": {
      "nick": "dead",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "ESL One Cologne 2016",
          "date": "2016-07-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 1",
          "date": "2017-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2017",
          "date": "2017-05-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 3 Finals",
          "date": "2017-06-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2017",
          "date": "2017-07-09",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20201109023417/https://www.hltv.org/ranking/teams/2017/july/3",
      "https://liquipedia.net/counterstrike/ESL/One/2017/Cologne",
      "https://liquipedia.net/counterstrike/SK_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2017-07-pgl-major-krak-w-2017": {
    "eventId": "2017-07-pgl-major-krak-w-2017",
    "team": "Gambit Esports",
    "teamKey": "Gambit Esports",
    "eventStartDate": "2017-07-16",
    "ranking": {
      "rank": 15,
      "points": 177,
      "rankingDate": "2017-07-10",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/july/10",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 10th, 2017"
    },
    "roster": [
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "Dosia",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/735/dosia"
      },
      {
        "nick": "AdreN",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/334/adren"
      },
      {
        "nick": "mou",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/964/mou"
      },
      {
        "nick": "HObbit",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/8528/hobbit"
      }
    ],
    "coach": {
      "nick": "kane",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "DreamHack ZOWIE Open Winter 2016",
          "date": "2016-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Kraków 2017",
          "date": "2017-07-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2720/pgl-major-krakow-2017",
      "https://www.hltv.org/ranking/teams/2017/july/10",
      "https://en.wikipedia.org/wiki/PGL_Major:_Kr%C3%A1k%C3%B3w_2017"
    ],
    "confidence": "high"
  },
  "2017-09-dreamhack-masters-malm-2017": {
    "eventId": "2017-09-dreamhack-masters-malm-2017",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2017-08-30",
    "ranking": {
      "rank": 5,
      "points": 434,
      "rankingDate": "2017-08-28",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/august/28",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 28th, 2017"
    },
    "roster": [
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      },
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "bodyy",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8374/bodyy"
      }
    ],
    "coach": {
      "nick": "SmithZz",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2017/august/28",
      "https://liquipedia.net/counterstrike/DreamHack/2017/Malm%C3%B6",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "high"
  },
  "2017-09-esg-tour-mykonos-2017": {
    "eventId": "2017-09-esg-tour-mykonos-2017",
    "team": "mousesports",
    "teamKey": "mousesports",
    "eventStartDate": "2017-09-07",
    "ranking": {
      "rank": 17,
      "points": 125,
      "rankingDate": "2017-09-04",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/september/4",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 4th, 2017"
    },
    "roster": [
      {
        "nick": "chrisJ",
        "country": "NL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2730/chrisj"
      },
      {
        "nick": "oskar",
        "country": "CZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/798/oskar"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "suNny",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/5479/sunny"
      },
      {
        "nick": "STYKO",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/6904/styko"
      }
    ],
    "coach": {
      "nick": "lmbt",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2017/september/4",
      "https://liquipedia.net/counterstrike/ESG_Tour/2017/Mykonos",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "high"
  },
  "2017-09-esl-one-new-york-2017": {
    "eventId": "2017-09-esl-one-new-york-2017",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2017-09-15",
    "ranking": {
      "rank": 8,
      "points": 337,
      "rankingDate": "2017-09-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/september/11",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 11th, 2017"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2017/september/11",
      "https://liquipedia.net/counterstrike/ESL/One/2017/New_York",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "high"
  },
  "2017-10-eleague-cs-go-premier-2017": {
    "eventId": "2017-10-eleague-cs-go-premier-2017",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2017-09-08",
    "ranking": {
      "rank": 8,
      "points": 333,
      "rankingDate": "2017-09-04",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/september/4",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 4th, 2017"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2017/september/4",
      "https://liquipedia.net/counterstrike/ELEAGUE/2017/Premier",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "high"
  },
  "2017-10-epicenter-2017": {
    "eventId": "2017-10-epicenter-2017",
    "team": "SK Gaming",
    "teamKey": "SK Gaming",
    "eventStartDate": "2017-10-24",
    "ranking": {
      "rank": 3,
      "points": 756,
      "rankingDate": "2017-10-23",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/october/23",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 23rd, 2017"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      },
      {
        "nick": "boltz",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8568/boltz",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "dead",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "ESL One Cologne 2016",
          "date": "2016-07-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 1",
          "date": "2017-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2017",
          "date": "2017-05-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 3 Finals",
          "date": "2017-06-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2017",
          "date": "2017-07-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2017",
          "date": "2017-10-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2017/october/23",
      "https://liquipedia.net/counterstrike/EPICENTER/2017",
      "https://liquipedia.net/counterstrike/SK_Gaming/Results"
    ],
    "confidence": "medium"
  },
  "2017-11-iem-oakland-2017": {
    "eventId": "2017-11-iem-oakland-2017",
    "team": "Ninjas in Pyjamas",
    "teamKey": "Ninjas in Pyjamas",
    "eventStartDate": "2017-11-14",
    "ranking": {
      "rank": 9,
      "points": 347,
      "rankingDate": "2017-11-13",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/november/13",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 13th, 2017"
    },
    "roster": [
      {
        "nick": "f0rest",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/29/f0rest"
      },
      {
        "nick": "GeT_RiGhT",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/39/getright"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt"
      },
      {
        "nick": "draken",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/9255/draken"
      },
      {
        "nick": "REZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/9278/rez"
      }
    ],
    "coach": {
      "nick": "THREAT",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 15,
      "list": [
        {
          "event": "Electronic Sports World Cup 2012",
          "date": "2012-11-04",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Winter 2012",
          "date": "2012-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "RaidCall EMS One Spring 2013 Finals",
          "date": "2013-04-14",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESEA Global Finals Season 13",
          "date": "2013-04-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Summer 2013",
          "date": "2013-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SLTV StarSeries VI Finals",
          "date": "2013-07-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESEA Global Finals Season 14",
          "date": "2013-08-18",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Bucharest 2013",
          "date": "2013-09-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Copenhagen Games 2014",
          "date": "2014-04-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Summer 2014",
          "date": "2014-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2014",
          "date": "2014-08-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2016",
          "date": "2016-04-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "SL i-League StarSeries Season 2 Finals 2016",
          "date": "2016-09-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Oakland 2016",
          "date": "2016-11-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Oakland 2017",
          "date": "2017-11-19",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/2956/iem-oakland-2017",
      "https://www.hltv.org/ranking/teams/2017/november/13",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XII/Oakland",
      "https://liquipedia.net/counterstrike/Ninjas_in_Pyjamas/Results"
    ],
    "confidence": "medium"
  },
  "2017-11-blast-pro-series-copenhagen-2017": {
    "eventId": "2017-11-blast-pro-series-copenhagen-2017",
    "team": "SK Gaming",
    "teamKey": "SK Gaming",
    "eventStartDate": "2017-11-25",
    "ranking": {
      "rank": 2,
      "points": 885,
      "rankingDate": "2017-11-20",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/november/20",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 20th, 2017"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      },
      {
        "nick": "boltz",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8568/boltz"
      }
    ],
    "coach": {
      "nick": "dead",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "ESL One Cologne 2016",
          "date": "2016-07-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 1",
          "date": "2017-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2017",
          "date": "2017-05-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 3 Finals",
          "date": "2017-06-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2017",
          "date": "2017-07-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2017",
          "date": "2017-10-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2017",
          "date": "2017-11-26",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2017/november/20",
      "https://liquipedia.net/counterstrike/BLAST_Pro_Series/2017/Copenhagen",
      "https://liquipedia.net/counterstrike/SK_Gaming/Results"
    ],
    "confidence": "high"
  },
  "2017-12-esl-pro-league-season-6-finals": {
    "eventId": "2017-12-esl-pro-league-season-6-finals",
    "team": "SK Gaming",
    "teamKey": "SK Gaming",
    "eventStartDate": "2017-12-05",
    "ranking": {
      "rank": 1,
      "points": 976,
      "rankingDate": "2017-12-04",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/december/4",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 4th, 2017"
    },
    "roster": [
      {
        "nick": "FalleN",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/2023/fallen"
      },
      {
        "nick": "fer",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8564/fer"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "TACO",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9217/taco"
      },
      {
        "nick": "boltz",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8568/boltz"
      }
    ],
    "coach": {
      "nick": "dead",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "ESL One Cologne 2016",
          "date": "2016-07-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 1",
          "date": "2017-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2017",
          "date": "2017-05-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 3 Finals",
          "date": "2017-06-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2017",
          "date": "2017-07-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2017",
          "date": "2017-10-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2017",
          "date": "2017-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 6 Finals",
          "date": "2017-12-10",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2017/december/4",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_6/Finals",
      "https://liquipedia.net/counterstrike/SK_Gaming/Results"
    ],
    "confidence": "high"
  },
  "2017-12-ecs-season-4-finals": {
    "eventId": "2017-12-ecs-season-4-finals",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2017-12-15",
    "ranking": {
      "rank": 2,
      "points": 817,
      "rankingDate": "2017-12-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2017/december/11",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 11th, 2017"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2017/december/11",
      "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_4",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "high"
  },
  "2018-01-eleague-major-boston-2018": {
    "eventId": "2018-01-eleague-major-boston-2018",
    "team": "Cloud9",
    "teamKey": "Cloud9",
    "eventStartDate": "2018-01-12",
    "ranking": {
      "rank": 5,
      "points": 400,
      "rankingDate": "2018-01-08",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/january/8",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on January 8th, 2018"
    },
    "roster": [
      {
        "nick": "Skadoodle",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7440/skadoodle"
      },
      {
        "nick": "Stewie2K",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8797/stewie2k"
      },
      {
        "nick": "autimatic",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8735/autimatic"
      },
      {
        "nick": "RUSH",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7805/rush"
      },
      {
        "nick": "tarik",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8523/tarik"
      }
    ],
    "coach": {
      "nick": "valens",
      "country": null,
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "ESL Pro League Season 4 Finals 2016",
          "date": "2016-10-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Boston 2018",
          "date": "2018-01-28",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3247/eleague-major-2018",
      "https://www.hltv.org/ranking/teams/2018/january/8",
      "https://en.wikipedia.org/wiki/ELEAGUE_Major:_Boston_2018"
    ],
    "confidence": "high"
  },
  "2018-02-starseries-i-league-season-4": {
    "eventId": "2018-02-starseries-i-league-season-4",
    "team": "mousesports",
    "teamKey": "mousesports",
    "eventStartDate": "2018-02-17",
    "ranking": {
      "rank": 8,
      "points": 323,
      "rankingDate": "2018-02-12",
      "sourceUrl": "https://web.archive.org/web/20201109021823/https://www.hltv.org/ranking/teams/2018/february/12",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on February 12th, 2018"
    },
    "roster": [
      {
        "nick": "chrisJ",
        "country": "NL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2730/chrisj"
      },
      {
        "nick": "oskar",
        "country": "CZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/798/oskar"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "suNny",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/5479/sunny"
      },
      {
        "nick": "STYKO",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/6904/styko"
      }
    ],
    "coach": {
      "nick": "lmbt",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 4",
          "date": "2018-02-25",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3486/starseries-i-league-season-4",
      "https://web.archive.org/web/20201109021823/https://www.hltv.org/ranking/teams/2018/february/12",
      "https://liquipedia.net/counterstrike/StarLadder/StarSeries_i-League/Season_4",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "medium"
  },
  "2018-03-iem-katowice-2018": {
    "eventId": "2018-03-iem-katowice-2018",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2018-02-27",
    "ranking": {
      "rank": 9,
      "points": 322,
      "rankingDate": "2018-02-26",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/february/26",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 26th, 2018"
    },
    "roster": [
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      },
      {
        "nick": "Lekr0",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/9261/lekr0"
      },
      {
        "nick": "Golden",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11110/golden"
      }
    ],
    "coach": {
      "nick": "Jumpy",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 18,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2015",
          "date": "2015-08-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League 2015 Stage 3 Finals",
          "date": "2015-11-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 5",
          "date": "2015-12-06",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 2 Finals",
          "date": "2015-12-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League StarSeries XIV Finals 2016",
          "date": "2016-01-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2016",
          "date": "2016-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2018",
          "date": "2018-03-04",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/february/26",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XII/World_Championship",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2018-03-wesg-2017-world-finals": {
    "eventId": "2018-03-wesg-2017-world-finals",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2018-03-13",
    "ranking": {
      "rank": 6,
      "points": 587,
      "rankingDate": "2018-03-12",
      "sourceUrl": "https://web.archive.org/web/20190921194807/https://www.hltv.org/ranking/teams/2018/march/12",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on March 12th, 2018"
    },
    "roster": [
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      },
      {
        "nick": "Lekr0",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/9261/lekr0"
      },
      {
        "nick": "Golden",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11110/golden"
      }
    ],
    "coach": {
      "nick": "Jumpy",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 19,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2015",
          "date": "2015-08-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League 2015 Stage 3 Finals",
          "date": "2015-11-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 5",
          "date": "2015-12-06",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 2 Finals",
          "date": "2015-12-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League StarSeries XIV Finals 2016",
          "date": "2016-01-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2016",
          "date": "2016-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2018",
          "date": "2018-03-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "WESG 2017 World Finals",
          "date": "2018-03-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20190921194807/https://www.hltv.org/ranking/teams/2018/march/12",
      "https://liquipedia.net/counterstrike/World_Electronic_Sports_Games/2017",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2018-04-dreamhack-masters-marseille-2018": {
    "eventId": "2018-04-dreamhack-masters-marseille-2018",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-04-18",
    "ranking": {
      "rank": 5,
      "points": 634,
      "rankingDate": "2018-04-16",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/april/16",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on April 16th, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3491/dreamhack-masters-marseille-2018",
      "https://www.hltv.org/ranking/teams/2018/april/16",
      "https://liquipedia.net/counterstrike/DreamHack/2018/Marseille",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2018-05-iem-sydney-2018": {
    "eventId": "2018-05-iem-sydney-2018",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2018-05-01",
    "ranking": {
      "rank": 4,
      "points": 697,
      "rankingDate": "2018-04-30",
      "sourceUrl": "https://web.archive.org/web/20190102225132/https://www.hltv.org/ranking/teams/2018/april/30",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on April 30th, 2018"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "Xizt",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/884/xizt",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3530/iem-sydney-2018",
      "https://web.archive.org/web/20190102225132/https://www.hltv.org/ranking/teams/2018/april/30",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XIII/Sydney",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2018-05-esl-pro-league-season-7-finals": {
    "eventId": "2018-05-esl-pro-league-season-7-finals",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-05-15",
    "ranking": {
      "rank": 1,
      "points": 974,
      "rankingDate": "2018-05-14",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/may/14",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 14th, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/may/14",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_7/Finals",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2018-02-cs-summit-2": {
    "eventId": "2018-02-cs-summit-2",
    "team": "Team Liquid",
    "teamKey": "Team Liquid",
    "eventStartDate": "2018-02-08",
    "ranking": {
      "rank": 11,
      "points": 170,
      "rankingDate": "2018-02-05",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/february/5",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 5th, 2018"
    },
    "roster": [
      {
        "nick": "nitr0",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7687/nitr0"
      },
      {
        "nick": "EliGE",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8738/elige"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "steel",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7382/steel"
      },
      {
        "nick": "NAF",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8520/naf"
      }
    ],
    "coach": {
      "nick": "zews",
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "cs_summit 2",
          "date": "2018-02-11",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/february/5",
      "https://liquipedia.net/counterstrike/Cs_summit/2",
      "https://liquipedia.net/counterstrike/Team_Liquid/Results"
    ],
    "confidence": "high"
  },
  "2018-06-starseries-i-league-season-5": {
    "eventId": "2018-06-starseries-i-league-season-5",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2018-05-28",
    "ranking": {
      "rank": 3,
      "points": 518,
      "rankingDate": "2018-05-28",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/may/28",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 28th, 2018"
    },
    "roster": [
      {
        "nick": "Edward",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/483/edward"
      },
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "flamie",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7594/flamie"
      },
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      },
      {
        "nick": "electronic",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/8918/electronic"
      }
    ],
    "coach": {
      "nick": "kane",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3666/starseries-i-league-season-5",
      "https://www.hltv.org/ranking/teams/2018/may/28",
      "https://liquipedia.net/counterstrike/StarLadder/StarSeries_i-League/Season_5",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2018-06-ecs-season-5-finals": {
    "eventId": "2018-06-ecs-season-5-finals",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-06-08",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2018-06-04",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/june/4",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 4th, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/june/4",
      "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_5",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2018-06-esl-one-belo-horizonte-2018": {
    "eventId": "2018-06-esl-one-belo-horizonte-2018",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2018-06-13",
    "ranking": {
      "rank": 3,
      "points": 566,
      "rankingDate": "2018-06-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/june/11",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 11th, 2018"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "cromen",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/10397/cromen",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/june/11",
      "https://liquipedia.net/counterstrike/ESL/One/2018/Belo_Horizonte",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2018-06-cs-go-asia-championships-2018": {
    "eventId": "2018-06-cs-go-asia-championships-2018",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2018-06-14",
    "ranking": {
      "rank": 2,
      "points": 574,
      "rankingDate": "2018-06-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/june/11",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 11th, 2018"
    },
    "roster": [
      {
        "nick": "Edward",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/483/edward"
      },
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "flamie",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7594/flamie"
      },
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      },
      {
        "nick": "electronic",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/8918/electronic"
      }
    ],
    "coach": {
      "nick": "kane",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/june/11",
      "https://liquipedia.net/counterstrike/CS:GO_Asia_Championships/2018",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2018-07-eleague-cs-go-premier-2018": {
    "eventId": "2018-07-eleague-cs-go-premier-2018",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-07-21",
    "ranking": {
      "rank": 1,
      "points": 932,
      "rankingDate": "2018-07-16",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/july/16",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 16th, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3515/eleague-csgo-premier-2018",
      "https://www.hltv.org/ranking/teams/2018/july/16",
      "https://liquipedia.net/counterstrike/ELEAGUE/2018/Premier",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2018-09-dreamhack-masters-stockholm-2018": {
    "eventId": "2018-09-dreamhack-masters-stockholm-2018",
    "team": "North",
    "teamKey": "North",
    "eventStartDate": "2018-08-29",
    "ranking": {
      "rank": 10,
      "points": 199,
      "rankingDate": "2018-08-27",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/august/27",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 27th, 2018"
    },
    "roster": [
      {
        "nick": "MSL",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7156/msl"
      },
      {
        "nick": "aizy",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/8095/aizy"
      },
      {
        "nick": "valde",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9031/valde"
      },
      {
        "nick": "Kjaerbye",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/8394/kjaerbye"
      },
      {
        "nick": "niko",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/10264/niko"
      }
    ],
    "coach": {
      "nick": "ave",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "DreamHack Masters Stockholm 2018",
          "date": "2018-09-02",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/august/27",
      "https://liquipedia.net/counterstrike/DreamHack/2018/Stockholm",
      "https://liquipedia.net/counterstrike/North/Results"
    ],
    "confidence": "high"
  },
  "2018-09-faceit-major-london-2018": {
    "eventId": "2018-09-faceit-major-london-2018",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-09-05",
    "ranking": {
      "rank": 1,
      "points": 982,
      "rankingDate": "2018-09-03",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/september/3",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 3rd, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3564/faceit-major-2018",
      "https://www.hltv.org/ranking/teams/2018/september/3",
      "https://en.wikipedia.org/wiki/FACEIT_Major:_London_2018"
    ],
    "confidence": "high"
  },
  "2018-09-blast-pro-series-istanbul-2018": {
    "eventId": "2018-09-blast-pro-series-istanbul-2018",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-09-28",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2018-09-24",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/september/24",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 24th, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/september/24",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2018/Istanbul",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2018-09-esl-one-new-york-2018": {
    "eventId": "2018-09-esl-one-new-york-2018",
    "team": "mousesports",
    "teamKey": "mousesports",
    "eventStartDate": "2018-09-26",
    "ranking": {
      "rank": 7,
      "points": 326,
      "rankingDate": "2018-09-24",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/september/24",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 24th, 2018"
    },
    "roster": [
      {
        "nick": "chrisJ",
        "country": "NL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2730/chrisj"
      },
      {
        "nick": "oskar",
        "country": "CZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/798/oskar"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "suNny",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/5479/sunny"
      },
      {
        "nick": "Snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      }
    ],
    "coach": {
      "nick": "lmbt",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 4",
          "date": "2018-02-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2018",
          "date": "2018-09-30",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/september/24",
      "https://liquipedia.net/counterstrike/ESL/One/2018/New_York",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "high"
  },
  "2018-10-starseries-i-league-season-6": {
    "eventId": "2018-10-starseries-i-league-season-6",
    "team": "ENCE",
    "teamKey": "ENCE",
    "eventStartDate": "2018-10-07",
    "ranking": {
      "rank": 20,
      "points": 89,
      "rankingDate": "2018-10-01",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/october/1",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 1st, 2018"
    },
    "roster": [
      {
        "nick": "allu",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/695/allu"
      },
      {
        "nick": "Aerial",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/4076/aerial"
      },
      {
        "nick": "xseveN",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/7248/xseven"
      },
      {
        "nick": "Aleksib",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/9816/aleksib"
      },
      {
        "nick": "sergej",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/11916/sergej"
      }
    ],
    "coach": {
      "nick": "Twista",
      "country": "FI",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "StarSeries i-League Season 6",
          "date": "2018-10-14",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/october/1",
      "https://liquipedia.net/counterstrike/StarSeries_i-League/Season_6",
      "https://liquipedia.net/counterstrike/ENCE/Results"
    ],
    "confidence": "high"
  },
  "2018-10-epicenter-2018": {
    "eventId": "2018-10-epicenter-2018",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2018-10-23",
    "ranking": {
      "rank": 6,
      "points": 292,
      "rankingDate": "2018-10-22",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/october/22",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 22nd, 2018"
    },
    "roster": [
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3985/epicenter-2018",
      "https://www.hltv.org/ranking/teams/2018/october/22",
      "https://liquipedia.net/counterstrike/EPICENTER/2018",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "high"
  },
  "2018-11-blast-pro-series-copenhagen-2018": {
    "eventId": "2018-11-blast-pro-series-copenhagen-2018",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2018-11-02",
    "ranking": {
      "rank": 2,
      "points": 630,
      "rankingDate": "2018-10-29",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/october/29",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 29th, 2018"
    },
    "roster": [
      {
        "nick": "Edward",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/483/edward"
      },
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "flamie",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7594/flamie"
      },
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      },
      {
        "nick": "electroNic",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/8918/electronic"
      }
    ],
    "coach": {
      "nick": "kane",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/october/29",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2018/Copenhagen",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2018-11-iem-chicago-2018": {
    "eventId": "2018-11-iem-chicago-2018",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-11-06",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2018-11-05",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/november/5",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 5th, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/november/5",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XIII/Chicago",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2018-11-ecs-season-6-finals": {
    "eventId": "2018-11-ecs-season-6-finals",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-11-22",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2018-11-19",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/november/19",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 19th, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/november/19",
      "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_6",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2018-11-cs-summit-3": {
    "eventId": "2018-11-cs-summit-3",
    "team": "NRG Esports",
    "teamKey": "NRG Esports",
    "eventStartDate": "2018-11-01",
    "ranking": {
      "rank": 7,
      "points": 240,
      "rankingDate": "2018-10-29",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/october/29",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 29th, 2018"
    },
    "roster": [
      {
        "nick": "daps",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8521/daps"
      },
      {
        "nick": "FugLy",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8522/fugly"
      },
      {
        "nick": "Brehze",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/9136/brehze"
      },
      {
        "nick": "CeRq",
        "country": "BG",
        "hltvPlayerUrl": "https://www.hltv.org/player/11219/cerq"
      },
      {
        "nick": "nahtE",
        "country": "US",
        "hltvPlayerUrl": null
      }
    ],
    "coach": {
      "nick": "ImAPet",
      "country": "US",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "cs_summit 3",
          "date": "2018-11-04",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2018/october/29",
      "https://liquipedia.net/counterstrike/Cs_summit/3",
      "https://liquipedia.net/counterstrike/NRG/Results"
    ],
    "confidence": "high"
  },
  "2018-12-esl-pro-league-season-8-finals": {
    "eventId": "2018-12-esl-pro-league-season-8-finals",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-12-04",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2018-12-03",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/december/3",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 3rd, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 12,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 8 Finals",
          "date": "2018-12-09",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3376/esl-pro-league-season-8-finals",
      "https://www.hltv.org/ranking/teams/2018/december/3",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_8/Finals",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2018-12-blast-pro-series-lisbon-2018": {
    "eventId": "2018-12-blast-pro-series-lisbon-2018",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2018-12-14",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2018-12-10",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2018/december/10",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 10th, 2018"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 13,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 8 Finals",
          "date": "2018-12-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Lisbon 2018",
          "date": "2018-12-15",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/4205/blast-pro-series-lisbon-2018",
      "https://www.hltv.org/ranking/teams/2018/december/10",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2018/Lisbon",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2019-03-iem-katowice-major-2019": {
    "eventId": "2019-03-iem-katowice-major-2019",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2019-02-13",
    "ranking": {
      "rank": 1,
      "points": 933,
      "rankingDate": "2019-02-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/february/11",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 11th, 2019"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 14,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 8 Finals",
          "date": "2018-12-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Lisbon 2018",
          "date": "2018-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice Major 2019",
          "date": "2019-03-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/3883/iem-katowice-2019",
      "https://www.hltv.org/ranking/teams/2019/february/11",
      "https://en.wikipedia.org/wiki/IEM_Katowice_Major_2019"
    ],
    "confidence": "high"
  },
  "2019-03-blast-pro-series-s-o-paulo-2019": {
    "eventId": "2019-03-blast-pro-series-s-o-paulo-2019",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2019-03-22",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2019-03-18",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/march/18",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 18th, 2019"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 15,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 8 Finals",
          "date": "2018-12-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Lisbon 2018",
          "date": "2018-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice Major 2019",
          "date": "2019-03-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series São Paulo 2019",
          "date": "2019-03-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/march/18",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2019/S%C3%A3o_Paulo",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2019-04-starseries-i-league-season-7": {
    "eventId": "2019-04-starseries-i-league-season-7",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2019-03-30",
    "ranking": {
      "rank": 4,
      "points": 362,
      "rankingDate": "2019-03-25",
      "sourceUrl": "https://web.archive.org/web/20191115080021/https://www.hltv.org/ranking/teams/2019/march/25",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on March 25th, 2019"
    },
    "roster": [
      {
        "nick": "Edward",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/483/edward"
      },
      {
        "nick": "Zeus",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/484/zeus"
      },
      {
        "nick": "flamie",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7594/flamie"
      },
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      },
      {
        "nick": "electroNic",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/8918/electronic"
      }
    ],
    "coach": {
      "nick": "kane",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 12,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20191115080021/https://www.hltv.org/ranking/teams/2019/march/25",
      "https://liquipedia.net/counterstrike/StarSeries_i-League/Season_7",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2019-04-blast-pro-series-miami-2019": {
    "eventId": "2019-04-blast-pro-series-miami-2019",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2019-04-12",
    "ranking": {
      "rank": 7,
      "points": 262,
      "rankingDate": "2019-04-08",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/april/8",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on April 8th, 2019"
    },
    "roster": [
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "GuardiaN",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/2757/guardian"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "AdreN",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/334/adren",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "YNk",
      "country": "RS",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/april/8",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2019/Miami",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2019-05-blast-pro-series-madrid-2019": {
    "eventId": "2019-05-blast-pro-series-madrid-2019",
    "team": "ENCE",
    "teamKey": "ENCE",
    "eventStartDate": "2019-05-10",
    "ranking": {
      "rank": 5,
      "points": 404,
      "rankingDate": "2019-05-06",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/may/6",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 6th, 2019"
    },
    "roster": [
      {
        "nick": "allu",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/695/allu"
      },
      {
        "nick": "Aerial",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/4076/aerial"
      },
      {
        "nick": "xseveN",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/7248/xseven"
      },
      {
        "nick": "Aleksib",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/9816/aleksib"
      },
      {
        "nick": "sergej",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/11916/sergej"
      }
    ],
    "coach": {
      "nick": "Twista",
      "country": "FI",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "StarSeries i-League Season 6",
          "date": "2018-10-14",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Madrid 2019",
          "date": "2019-05-11",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/may/6",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2019/Madrid",
      "https://liquipedia.net/counterstrike/ENCE/Results"
    ],
    "confidence": "high"
  },
  "2019-05-cs-summit-4": {
    "eventId": "2019-05-cs-summit-4",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2019-05-23",
    "ranking": {
      "rank": 11,
      "points": 262,
      "rankingDate": "2019-05-20",
      "sourceUrl": "https://web.archive.org/web/20190602063645/https://www.hltv.org/ranking/teams/2019/may/20",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on May 20th, 2019"
    },
    "roster": [
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "RpK",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7169/rpk"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ALEX",
        "country": "GB",
        "hltvPlayerUrl": "https://www.hltv.org/player/8184/alex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      }
    ],
    "coach": {
      "nick": "XTQZZZ",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/4566/cs-summit-4",
      "https://web.archive.org/web/20190602063645/https://www.hltv.org/ranking/teams/2019/may/20",
      "https://liquipedia.net/counterstrike/Cs_summit/4",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2019-06-dreamhack-masters-dallas-2019": {
    "eventId": "2019-06-dreamhack-masters-dallas-2019",
    "team": "Team Liquid",
    "teamKey": "Team Liquid",
    "eventStartDate": "2019-05-28",
    "ranking": {
      "rank": 2,
      "points": 799,
      "rankingDate": "2019-05-27",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/may/27",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 27th, 2019"
    },
    "roster": [
      {
        "nick": "nitr0",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7687/nitr0"
      },
      {
        "nick": "EliGE",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8738/elige"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "NAF",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8520/naf"
      },
      {
        "nick": "Stewie2K",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8797/stewie2k"
      }
    ],
    "coach": {
      "nick": "adreN",
      "country": "US",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "cs_summit 2",
          "date": "2018-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2019",
          "date": "2019-05-05",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Dallas 2019",
          "date": "2019-06-02",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/may/27",
      "https://liquipedia.net/counterstrike/DreamHack/2019/Dallas",
      "https://liquipedia.net/counterstrike/Team_Liquid/Results"
    ],
    "confidence": "medium"
  },
  "2019-06-esl-pro-league-season-9-finals": {
    "eventId": "2019-06-esl-pro-league-season-9-finals",
    "team": "Team Liquid",
    "teamKey": "Team Liquid",
    "eventStartDate": "2019-06-18",
    "ranking": {
      "rank": 1,
      "points": 987,
      "rankingDate": "2019-06-17",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/june/17",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 17th, 2019"
    },
    "roster": [
      {
        "nick": "nitr0",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7687/nitr0"
      },
      {
        "nick": "EliGE",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8738/elige"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "NAF",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8520/naf"
      },
      {
        "nick": "Stewie2K",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8797/stewie2k"
      }
    ],
    "coach": {
      "nick": "adreN",
      "country": "US",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "cs_summit 2",
          "date": "2018-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2019",
          "date": "2019-05-05",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Dallas 2019",
          "date": "2019-06-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 9 Finals",
          "date": "2019-06-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/june/17",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_9/Finals",
      "https://liquipedia.net/counterstrike/Team_Liquid/Results"
    ],
    "confidence": "medium"
  },
  "2019-06-ecs-season-7-finals": {
    "eventId": "2019-06-ecs-season-7-finals",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2019-06-06",
    "ranking": {
      "rank": 4,
      "points": 471,
      "rankingDate": "2019-06-03",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/june/3",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 3rd, 2019"
    },
    "roster": [
      {
        "nick": "NBK-",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7168/nbk"
      },
      {
        "nick": "RpK",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7169/rpk"
      },
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ALEX",
        "country": "GB",
        "hltvPlayerUrl": "https://www.hltv.org/player/8184/alex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      }
    ],
    "coach": {
      "nick": "XTQZZZ",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/june/3",
      "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_7",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "high"
  },
  "2019-07-blast-pro-series-los-angeles-2019": {
    "eventId": "2019-07-blast-pro-series-los-angeles-2019",
    "team": "Team Liquid",
    "teamKey": "Team Liquid",
    "eventStartDate": "2019-07-13",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2019-07-08",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/july/8",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 8th, 2019"
    },
    "roster": [
      {
        "nick": "nitr0",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7687/nitr0"
      },
      {
        "nick": "EliGE",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8738/elige"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "NAF",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8520/naf"
      },
      {
        "nick": "Stewie2K",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8797/stewie2k"
      }
    ],
    "coach": {
      "nick": "adreN",
      "country": "US",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "cs_summit 2",
          "date": "2018-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2019",
          "date": "2019-05-05",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Dallas 2019",
          "date": "2019-06-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 9 Finals",
          "date": "2019-06-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2019",
          "date": "2019-07-07",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Los Angeles 2019",
          "date": "2019-07-14",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/july/8",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2019/Los_Angeles",
      "https://liquipedia.net/counterstrike/Team_Liquid/Results"
    ],
    "confidence": "medium"
  },
  "2019-07-iem-chicago-2019": {
    "eventId": "2019-07-iem-chicago-2019",
    "team": "Team Liquid",
    "teamKey": "Team Liquid",
    "eventStartDate": "2019-07-18",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2019-07-15",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/july/15",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 15th, 2019"
    },
    "roster": [
      {
        "nick": "nitr0",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/7687/nitr0"
      },
      {
        "nick": "EliGE",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8738/elige"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "NAF",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8520/naf"
      },
      {
        "nick": "Stewie2K",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8797/stewie2k"
      }
    ],
    "coach": {
      "nick": "adreN",
      "country": "US",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "cs_summit 2",
          "date": "2018-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2019",
          "date": "2019-05-05",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Dallas 2019",
          "date": "2019-06-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 9 Finals",
          "date": "2019-06-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2019",
          "date": "2019-07-07",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Los Angeles 2019",
          "date": "2019-07-14",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2019",
          "date": "2019-07-21",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/4574/iem-chicago-2019",
      "https://www.hltv.org/ranking/teams/2019/july/15",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XIV/Chicago",
      "https://liquipedia.net/counterstrike/Team_Liquid/Results"
    ],
    "confidence": "medium"
  },
  "2019-09-starladder-berlin-major-2019": {
    "eventId": "2019-09-starladder-berlin-major-2019",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2019-08-23",
    "ranking": {
      "rank": 3,
      "points": 370,
      "rankingDate": "2019-08-19",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/august/19",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 19th, 2019"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 16,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 8 Finals",
          "date": "2018-12-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Lisbon 2018",
          "date": "2018-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice Major 2019",
          "date": "2019-03-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series São Paulo 2019",
          "date": "2019-03-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Berlin Major 2019",
          "date": "2019-09-08",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/august/19",
      "https://en.wikipedia.org/wiki/StarLadder_Major:_Berlin_2019"
    ],
    "confidence": "high"
  },
  "2019-09-blast-pro-series-moscow-2019": {
    "eventId": "2019-09-blast-pro-series-moscow-2019",
    "team": "AVANGAR",
    "teamKey": "AVANGAR",
    "eventStartDate": "2019-09-13",
    "ranking": {
      "rank": 6,
      "points": 380,
      "rankingDate": "2019-09-09",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/september/9",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 9th, 2019"
    },
    "roster": [
      {
        "nick": "buster",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/11942/buster"
      },
      {
        "nick": "qikert",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/13239/qikert"
      },
      {
        "nick": "Jame",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/13776/jame"
      },
      {
        "nick": "SANJI",
        "country": "UZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/11716/sanji"
      },
      {
        "nick": "AdreN",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/334/adren"
      }
    ],
    "coach": {
      "nick": "dastan",
      "country": "KZ",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "BLAST Pro Series Moscow 2019",
          "date": "2019-09-14",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/september/9",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2019/Moscow",
      "https://liquipedia.net/counterstrike/AVANGAR/Results"
    ],
    "confidence": "high"
  },
  "2019-09-esl-one-new-york-2019": {
    "eventId": "2019-09-esl-one-new-york-2019",
    "team": "Evil Geniuses",
    "teamKey": "Evil Geniuses",
    "eventStartDate": "2019-09-26",
    "ranking": {
      "rank": 4,
      "points": 486,
      "rankingDate": "2019-09-23",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/september/23",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 23rd, 2019"
    },
    "roster": [
      {
        "nick": "Brehze",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/9136/brehze"
      },
      {
        "nick": "CeRq",
        "country": "BG",
        "hltvPlayerUrl": "https://www.hltv.org/player/11219/cerq"
      },
      {
        "nick": "Ethan",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/10671/ethan"
      },
      {
        "nick": "tarik",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8523/tarik"
      },
      {
        "nick": "stanislaw",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8507/stanislaw"
      }
    ],
    "coach": {
      "nick": "ImAPet",
      "country": "US",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "ESL One New York 2019",
          "date": "2019-09-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/september/23",
      "https://liquipedia.net/counterstrike/ESL/One/2019/New_York",
      "https://liquipedia.net/counterstrike/Evil_Geniuses/Results"
    ],
    "confidence": "high"
  },
  "2019-10-dreamhack-masters-malm-2019": {
    "eventId": "2019-10-dreamhack-masters-malm-2019",
    "team": "fnatic",
    "teamKey": "fnatic",
    "eventStartDate": "2019-10-01",
    "ranking": {
      "rank": 23,
      "points": 67,
      "rankingDate": "2019-09-30",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/september/30",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 30th, 2019"
    },
    "roster": [
      {
        "nick": "JW",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3849/jw"
      },
      {
        "nick": "KRIMZ",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/7528/krimz"
      },
      {
        "nick": "Brollan",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/13666/brollan"
      },
      {
        "nick": "flusha",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/3055/flusha"
      },
      {
        "nick": "Golden",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11110/golden"
      }
    ],
    "coach": {
      "nick": "Samuelsson",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 20,
      "list": [
        {
          "event": "DreamHack Winter 2013",
          "date": "2013-11-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 1",
          "date": "2013-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "SLTV StarSeries X Finals",
          "date": "2014-08-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League Season 2 Finals",
          "date": "2014-10-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESWC 2014",
          "date": "2014-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 3",
          "date": "2014-11-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL One Katowice 2015",
          "date": "2015-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Tours 2015",
          "date": "2015-05-10",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Gfinity Spring Masters 2",
          "date": "2015-05-17",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Open Summer 2015",
          "date": "2015-06-15",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 1 Finals",
          "date": "2015-07-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Cologne 2015",
          "date": "2015-08-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT League 2015 Stage 3 Finals",
          "date": "2015-11-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Fragbite Masters Season 5",
          "date": "2015-12-06",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL ESEA Pro League Season 2 Finals",
          "date": "2015-12-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder i-League StarSeries XIV Finals 2016",
          "date": "2016-01-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2016",
          "date": "2016-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2018",
          "date": "2018-03-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "WESG 2017 World Finals",
          "date": "2018-03-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2019",
          "date": "2019-10-06",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/september/30",
      "https://liquipedia.net/counterstrike/DreamHack/2019/Malm%C3%B6",
      "https://liquipedia.net/counterstrike/Fnatic/Results"
    ],
    "confidence": "medium"
  },
  "2019-10-starseries-i-league-season-8": {
    "eventId": "2019-10-starseries-i-league-season-8",
    "team": "Evil Geniuses",
    "teamKey": "Evil Geniuses",
    "eventStartDate": "2019-10-21",
    "ranking": {
      "rank": 3,
      "points": 675,
      "rankingDate": "2019-10-21",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/october/21",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 21st, 2019"
    },
    "roster": [
      {
        "nick": "Brehze",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/9136/brehze"
      },
      {
        "nick": "CeRq",
        "country": "BG",
        "hltvPlayerUrl": "https://www.hltv.org/player/11219/cerq"
      },
      {
        "nick": "Ethan",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/10671/ethan"
      },
      {
        "nick": "tarik",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8523/tarik"
      },
      {
        "nick": "stanislaw",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/8507/stanislaw"
      }
    ],
    "coach": {
      "nick": "ImAPet",
      "country": "US",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "ESL One New York 2019",
          "date": "2019-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 8",
          "date": "2019-10-27",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/october/21",
      "https://liquipedia.net/counterstrike/StarSeries_i-League/Season_8",
      "https://liquipedia.net/counterstrike/Evil_Geniuses/Results"
    ],
    "confidence": "high"
  },
  "2019-11-iem-beijing-2019": {
    "eventId": "2019-11-iem-beijing-2019",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2019-11-07",
    "ranking": {
      "rank": 2,
      "points": 817,
      "rankingDate": "2019-11-04",
      "sourceUrl": "https://web.archive.org/web/20191120084139/https://www.hltv.org/ranking/teams/2019/november/4",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on November 4th, 2019"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 17,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 8 Finals",
          "date": "2018-12-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Lisbon 2018",
          "date": "2018-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice Major 2019",
          "date": "2019-03-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series São Paulo 2019",
          "date": "2019-03-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Berlin Major 2019",
          "date": "2019-09-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Beijing 2019",
          "date": "2019-11-10",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20191120084139/https://www.hltv.org/ranking/teams/2019/november/4",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XIV/Beijing",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "medium"
  },
  "2019-11-blast-pro-series-copenhagen-2019": {
    "eventId": "2019-11-blast-pro-series-copenhagen-2019",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2019-11-01",
    "ranking": {
      "rank": 21,
      "points": 114,
      "rankingDate": "2019-10-28",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/october/28",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 28th, 2019"
    },
    "roster": [
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "olofmeister",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/885/olofmeister"
      },
      {
        "nick": "coldzera",
        "country": "BR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9216/coldzera"
      },
      {
        "nick": "broky",
        "country": "LV",
        "hltvPlayerUrl": "https://www.hltv.org/player/18053/broky"
      }
    ],
    "coach": {
      "nick": "YNk",
      "country": "RS",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2019",
          "date": "2019-11-02",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/october/28",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2019/Copenhagen",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "high"
  },
  "2019-12-ecs-season-8-finals": {
    "eventId": "2019-12-ecs-season-8-finals",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2019-11-28",
    "ranking": {
      "rank": 1,
      "points": 927,
      "rankingDate": "2019-11-25",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/november/25",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 25th, 2019"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 18,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 8 Finals",
          "date": "2018-12-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Lisbon 2018",
          "date": "2018-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice Major 2019",
          "date": "2019-03-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series São Paulo 2019",
          "date": "2019-03-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Berlin Major 2019",
          "date": "2019-09-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Beijing 2019",
          "date": "2019-11-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 8 Finals",
          "date": "2019-12-01",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/november/25",
      "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_8",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2019-12-esl-pro-league-season-10-finals": {
    "eventId": "2019-12-esl-pro-league-season-10-finals",
    "team": "mousesports",
    "teamKey": "mousesports",
    "eventStartDate": "2019-12-03",
    "ranking": {
      "rank": 9,
      "points": 322,
      "rankingDate": "2019-12-02",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/december/2",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 2nd, 2019"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "chrisJ",
        "country": "NL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2730/chrisj"
      },
      {
        "nick": "woxic",
        "country": "TR",
        "hltvPlayerUrl": "https://www.hltv.org/player/8574/woxic"
      },
      {
        "nick": "frozen",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9960/frozen"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      }
    ],
    "coach": {
      "nick": "Rejin",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 4",
          "date": "2018-02-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2018",
          "date": "2018-09-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2019",
          "date": "2019-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 10 Finals",
          "date": "2019-12-08",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/december/2",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_10/Finals",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "medium"
  },
  "2019-12-blast-pro-series-global-final-2019": {
    "eventId": "2019-12-blast-pro-series-global-final-2019",
    "team": "Astralis",
    "teamKey": "Astralis",
    "eventStartDate": "2019-12-12",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2019-12-09",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/december/9",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 9th, 2019"
    },
    "roster": [
      {
        "nick": "device",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7592/device"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Xyp9x",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/4954/xyp9x"
      },
      {
        "nick": "gla1ve",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7412/gla1ve"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 19,
      "list": [
        {
          "event": "ECS Season 2 Finals 2016",
          "date": "2016-12-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major: Atlanta 2017",
          "date": "2017-01-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2017",
          "date": "2017-03-05",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Marseille 2018",
          "date": "2018-04-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 7 Finals",
          "date": "2018-05-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 5 Finals",
          "date": "2018-06-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2018",
          "date": "2018-07-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "FACEIT Major: London 2018",
          "date": "2018-09-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Istanbul 2018",
          "date": "2018-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Chicago 2018",
          "date": "2018-11-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 6 Finals",
          "date": "2018-11-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 8 Finals",
          "date": "2018-12-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Lisbon 2018",
          "date": "2018-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice Major 2019",
          "date": "2019-03-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series São Paulo 2019",
          "date": "2019-03-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Berlin Major 2019",
          "date": "2019-09-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Beijing 2019",
          "date": "2019-11-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 8 Finals",
          "date": "2019-12-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Global Final 2019",
          "date": "2019-12-14",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/december/9",
      "https://liquipedia.net/counterstrike/BLAST/Pro_Series/2019/Global_Final",
      "https://liquipedia.net/counterstrike/Astralis/Results"
    ],
    "confidence": "high"
  },
  "2019-12-cs-summit-5": {
    "eventId": "2019-12-cs-summit-5",
    "team": "mousesports",
    "teamKey": "mousesports",
    "eventStartDate": "2019-12-12",
    "ranking": {
      "rank": 5,
      "points": 635,
      "rankingDate": "2019-12-09",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/december/9",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 9th, 2019"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "chrisJ",
        "country": "NL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2730/chrisj"
      },
      {
        "nick": "frozen",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9960/frozen"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "NaToSaphiX",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9294/natosaphix",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "Rejin",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 4",
          "date": "2018-02-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2018",
          "date": "2018-09-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2019",
          "date": "2019-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 10 Finals",
          "date": "2019-12-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 5",
          "date": "2019-12-15",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/december/9",
      "https://liquipedia.net/counterstrike/Cs_summit/5",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "medium"
  },
  "2019-12-epicenter-2019": {
    "eventId": "2019-12-epicenter-2019",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2019-12-17",
    "ranking": {
      "rank": 8,
      "points": 314,
      "rankingDate": "2019-12-16",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/december/16",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 16th, 2019"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "RpK",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7169/rpk"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      },
      {
        "nick": "ALEX",
        "country": "GB",
        "hltvPlayerUrl": "https://www.hltv.org/player/8184/alex"
      },
      {
        "nick": "shox",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/1225/shox"
      }
    ],
    "coach": {
      "nick": "XTQZZZ",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/december/16",
      "https://liquipedia.net/counterstrike/EPICENTER/2019",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "high"
  },
  "2019-12-champions-cup-finals-2019": {
    "eventId": "2019-12-champions-cup-finals-2019",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2019-12-19",
    "ranking": {
      "rank": 11,
      "points": 247,
      "rankingDate": "2019-12-16",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2019/december/16",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 16th, 2019"
    },
    "roster": [
      {
        "nick": "kennyS",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7167/kennys"
      },
      {
        "nick": "JACKZ",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/284/jackz"
      },
      {
        "nick": "AMANEK",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/9616/amanek"
      },
      {
        "nick": "nexa",
        "country": "RS",
        "hltvPlayerUrl": "https://www.hltv.org/player/9618/nexa"
      },
      {
        "nick": "huNter-",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
      }
    ],
    "coach": {
      "nick": "maLeK",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Champions Cup Finals 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2019/december/16",
      "https://liquipedia.net/counterstrike/Champions_Cup/Finals",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "high"
  },
  "2020-03-iem-katowice-2020": {
    "eventId": "2020-03-iem-katowice-2020",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2020-02-24",
    "ranking": {
      "rank": 6,
      "points": 414,
      "rankingDate": "2020-02-24",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2020/february/24",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 24th, 2020"
    },
    "roster": [
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      },
      {
        "nick": "electroNic",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/8918/electronic"
      },
      {
        "nick": "flamie",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7594/flamie"
      },
      {
        "nick": "Boombl4",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/11840/boombl4"
      },
      {
        "nick": "Perfecto",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16947/perfecto"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 13,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2020/february/24",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XIV/World_Championship",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2021-07-iem-cologne-2021": {
    "eventId": "2021-07-iem-cologne-2021",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2021-07-06",
    "ranking": {
      "rank": 2,
      "points": 636,
      "rankingDate": "2021-07-05",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2021/july/5",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 5th, 2021"
    },
    "roster": [
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      },
      {
        "nick": "electroNic",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/8918/electronic"
      },
      {
        "nick": "Boombl4",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/11840/boombl4"
      },
      {
        "nick": "Perfecto",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16947/perfecto"
      },
      {
        "nick": "b1t",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/18987/b1t"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 16,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2021/july/5",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVI/Cologne",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2021-11-pgl-major-stockholm-2021": {
    "eventId": "2021-11-pgl-major-stockholm-2021",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2021-10-26",
    "ranking": {
      "rank": 1,
      "points": 919,
      "rankingDate": "2021-10-25",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2021/october/25",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 25th, 2021"
    },
    "roster": [
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      },
      {
        "nick": "electronic",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/8918/electronic"
      },
      {
        "nick": "Boombl4",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/11840/boombl4"
      },
      {
        "nick": "Perfecto",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16947/perfecto"
      },
      {
        "nick": "b1t",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/18987/b1t"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 18,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 14",
          "date": "2021-09-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Major Stockholm 2021",
          "date": "2021-11-07",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/4866/pgl-major-stockholm-2021",
      "https://www.hltv.org/ranking/teams/2021/october/25",
      "https://en.wikipedia.org/wiki/PGL_Major_Stockholm_2021"
    ],
    "confidence": "medium"
  },
  "2022-02-iem-katowice-2022": {
    "eventId": "2022-02-iem-katowice-2022",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2022-02-15",
    "ranking": {
      "rank": 9,
      "points": 180,
      "rankingDate": "2022-02-14",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/february/14",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 14th, 2022"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "broky",
        "country": "LV",
        "hltvPlayerUrl": "https://www.hltv.org/player/18053/broky"
      },
      {
        "nick": "jks",
        "country": "AU",
        "hltvPlayerUrl": "https://www.hltv.org/player/4679/jks",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2019",
          "date": "2019-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2022",
          "date": "2022-02-27",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/6136/iem-katowice-2022",
      "https://www.hltv.org/ranking/teams/2022/february/14",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVI/Katowice",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2022-04-esl-pro-league-season-15": {
    "eventId": "2022-04-esl-pro-league-season-15",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2022-03-09",
    "ranking": {
      "rank": 4,
      "points": 534,
      "rankingDate": "2022-03-07",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/march/7",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 7th, 2022"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "broky",
        "country": "LV",
        "hltvPlayerUrl": "https://www.hltv.org/player/18053/broky"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2019",
          "date": "2019-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2022",
          "date": "2022-02-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 15",
          "date": "2022-04-10",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2022/march/7",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_15",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "high"
  },
  "2022-05-pgl-major-antwerp-2022": {
    "eventId": "2022-05-pgl-major-antwerp-2022",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2022-05-09",
    "ranking": {
      "rank": 1,
      "points": 882,
      "rankingDate": "2022-05-09",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/may/9",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 9th, 2022"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "broky",
        "country": "LV",
        "hltvPlayerUrl": "https://www.hltv.org/player/18053/broky"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 12,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2019",
          "date": "2019-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2022",
          "date": "2022-02-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 15",
          "date": "2022-04-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Antwerp 2022",
          "date": "2022-05-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/6372/pgl-major-antwerp-2022",
      "https://www.hltv.org/ranking/teams/2022/may/9",
      "https://en.wikipedia.org/wiki/PGL_Major_Antwerp_2022"
    ],
    "confidence": "high"
  },
  "2022-06-iem-dallas-2022": {
    "eventId": "2022-06-iem-dallas-2022",
    "team": "Cloud9",
    "teamKey": "Cloud9",
    "eventStartDate": "2022-05-30",
    "ranking": {
      "rank": 9,
      "points": 268,
      "rankingDate": "2022-05-30",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/may/30",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 30th, 2022"
    },
    "roster": [
      {
        "nick": "nafany",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16921/nafany"
      },
      {
        "nick": "sh1ro",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16920/sh1ro"
      },
      {
        "nick": "Ax1Le",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16555/ax1le"
      },
      {
        "nick": "interz",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/15071/interz"
      },
      {
        "nick": "HObbit",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/8528/hobbit"
      }
    ],
    "coach": {
      "nick": "groove",
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "ESL Pro League Season 4 Finals 2016",
          "date": "2016-10-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE Major Boston 2018",
          "date": "2018-01-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2022",
          "date": "2022-06-05",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2022/may/30",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVII/Dallas",
      "https://liquipedia.net/counterstrike/Cloud9/Results"
    ],
    "confidence": "high"
  },
  "2022-06-blast-premier-spring-final-2022": {
    "eventId": "2022-06-blast-premier-spring-final-2022",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2022-06-15",
    "ranking": {
      "rank": 3,
      "points": 679,
      "rankingDate": "2022-06-13",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/june/13",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 13th, 2022"
    },
    "roster": [
      {
        "nick": "s1mple",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/7998/s1mple"
      },
      {
        "nick": "electroNic",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/8918/electronic"
      },
      {
        "nick": "Perfecto",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16947/perfecto"
      },
      {
        "nick": "b1t",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/18987/b1t"
      },
      {
        "nick": "sdy",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/12731/sdy",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 21,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 14",
          "date": "2021-09-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Major Stockholm 2021",
          "date": "2021-11-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Fall Finals 2021",
          "date": "2021-11-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: World Final 2021",
          "date": "2021-12-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Spring Final 2022",
          "date": "2022-06-19",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2022/june/13",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2022/Spring_Finals",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2022-07-iem-cologne-2022": {
    "eventId": "2022-07-iem-cologne-2022",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2022-07-05",
    "ranking": {
      "rank": 1,
      "points": 965,
      "rankingDate": "2022-07-04",
      "sourceUrl": "https://web.archive.org/web/20250907025515/https://www.hltv.org/ranking/teams/2022/july/4",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on July 4th, 2022"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "broky",
        "country": "LV",
        "hltvPlayerUrl": "https://www.hltv.org/player/18053/broky"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 13,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2019",
          "date": "2019-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2022",
          "date": "2022-02-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 15",
          "date": "2022-04-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Antwerp 2022",
          "date": "2022-05-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2022",
          "date": "2022-07-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/6140/iem-cologne-2022",
      "https://web.archive.org/web/20250907025515/https://www.hltv.org/ranking/teams/2022/july/4",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVII/Cologne",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2022-10-esl-pro-league-season-16": {
    "eventId": "2022-10-esl-pro-league-season-16",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2022-08-31",
    "ranking": {
      "rank": 7,
      "points": 327,
      "rankingDate": "2022-08-29",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/august/29",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 29th, 2022"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      },
      {
        "nick": "Spinx",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2022/august/29",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_16",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2022-11-iem-rio-major-2022": {
    "eventId": "2022-11-iem-rio-major-2022",
    "team": "Outsiders",
    "teamKey": "Outsiders",
    "eventStartDate": "2022-10-31",
    "ranking": {
      "rank": 8,
      "points": 431,
      "rankingDate": "2022-10-31",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/october/31",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 31st, 2022"
    },
    "roster": [
      {
        "nick": "Qikert",
        "country": "KZ",
        "hltvPlayerUrl": "https://www.hltv.org/player/13239/qikert"
      },
      {
        "nick": "Jame",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/13776/jame"
      },
      {
        "nick": "FL1T",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/12732/fl1t"
      },
      {
        "nick": "n0rb3r7",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16612/n0rb3r7"
      },
      {
        "nick": "fame",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/20101/fame"
      }
    ],
    "coach": {
      "nick": "dastan",
      "country": "KZ",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "IEM Rio Major 2022",
          "date": "2022-11-13",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/6586/iem-rio-major-2022",
      "https://www.hltv.org/ranking/teams/2022/october/31",
      "https://en.wikipedia.org/wiki/IEM_Rio_Major_2022"
    ],
    "confidence": "high"
  },
  "2022-11-blast-premier-fall-final-2022": {
    "eventId": "2022-11-blast-premier-fall-final-2022",
    "team": "Heroic",
    "teamKey": "Heroic",
    "eventStartDate": "2022-11-23",
    "ranking": {
      "rank": 2,
      "points": 755,
      "rankingDate": "2022-11-21",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/november/21",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 21st, 2022"
    },
    "roster": [
      {
        "nick": "cadiaN",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7964/cadian"
      },
      {
        "nick": "stavn",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/10994/stavn"
      },
      {
        "nick": "TeSeS",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/12018/teses"
      },
      {
        "nick": "sjuush",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/14148/sjuush"
      },
      {
        "nick": "jabbi",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/17956/jabbi"
      }
    ],
    "coach": {
      "nick": "Xizt",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "ESL One: Cologne 2020 Online - Europe",
          "date": "2020-08-30",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 13",
          "date": "2021-04-11",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Fall Final 2022",
          "date": "2022-11-27",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2022/november/21",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2022/Fall_Finals",
      "https://liquipedia.net/counterstrike/HEROIC/Results"
    ],
    "confidence": "medium"
  },
  "2022-12-blast-premier-world-final-2022": {
    "eventId": "2022-12-blast-premier-world-final-2022",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2022-12-14",
    "ranking": {
      "rank": 12,
      "points": 312,
      "rankingDate": "2022-12-12",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2022/december/12",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on December 12th, 2022"
    },
    "roster": [
      {
        "nick": "huNter-",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "m0NESY",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/19230/m0nesy"
      },
      {
        "nick": "jks",
        "country": "AU",
        "hltvPlayerUrl": "https://www.hltv.org/player/4679/jks"
      },
      {
        "nick": "HooXi",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/10096/hooxi"
      }
    ],
    "coach": {
      "nick": "Swani",
      "country": "DE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Champions Cup Finals 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2022",
          "date": "2022-12-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2022/december/12",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2022/World_Final",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "high"
  },
  "2023-02-iem-katowice-2023": {
    "eventId": "2023-02-iem-katowice-2023",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2023-02-01",
    "ranking": {
      "rank": 2,
      "points": 922,
      "rankingDate": "2023-01-30",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2023/january/30",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on January 30th, 2023"
    },
    "roster": [
      {
        "nick": "huNter-",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "m0NESY",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/19230/m0nesy"
      },
      {
        "nick": "jks",
        "country": "AU",
        "hltvPlayerUrl": "https://www.hltv.org/player/4679/jks"
      },
      {
        "nick": "HooXi",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/10096/hooxi"
      }
    ],
    "coach": {
      "nick": "Swani",
      "country": "DE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Champions Cup Finals 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2022",
          "date": "2022-12-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2023",
          "date": "2023-02-12",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2023/january/30",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVII/Katowice",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "high"
  },
  "2023-03-esl-pro-league-season-17": {
    "eventId": "2023-03-esl-pro-league-season-17",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2023-02-22",
    "ranking": {
      "rank": 4,
      "points": 536,
      "rankingDate": "2023-02-20",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2023/february/20",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 20th, 2023"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "broky",
        "country": "LV",
        "hltvPlayerUrl": "https://www.hltv.org/player/18053/broky"
      }
    ],
    "coach": {
      "nick": "RobbaN",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 14,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2019",
          "date": "2019-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2022",
          "date": "2022-02-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 15",
          "date": "2022-04-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Antwerp 2022",
          "date": "2022-05-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2022",
          "date": "2022-07-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 17",
          "date": "2023-03-26",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2023/february/20",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_17",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2023-04-iem-rio-2023": {
    "eventId": "2023-04-iem-rio-2023",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2023-04-17",
    "ranking": {
      "rank": 5,
      "points": 605,
      "rankingDate": "2023-04-17",
      "sourceUrl": "https://web.archive.org/web/20230502033238/https://www.hltv.org/ranking/teams/2023/april/17",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on April 17th, 2023"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      },
      {
        "nick": "Spinx",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20230502033238/https://www.hltv.org/ranking/teams/2023/april/17",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVII/Rio",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2023-05-blast-tv-paris-major-2023": {
    "eventId": "2023-05-blast-tv-paris-major-2023",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2023-05-08",
    "ranking": {
      "rank": 2,
      "points": 893,
      "rankingDate": "2023-05-08",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2023/may/8",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 8th, 2023"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      },
      {
        "nick": "dupreeh",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7398/dupreeh"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      },
      {
        "nick": "Spinx",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2023/may/8",
      "https://en.wikipedia.org/wiki/BLAST.tv_Paris_Major_2023"
    ],
    "confidence": "medium"
  },
  "2023-06-iem-dallas-2023": {
    "eventId": "2023-06-iem-dallas-2023",
    "team": "ENCE",
    "teamKey": "ENCE",
    "eventStartDate": "2023-05-29",
    "ranking": {
      "rank": 11,
      "points": 235,
      "rankingDate": "2023-05-29",
      "sourceUrl": "https://web.archive.org/web/20230605021819/https://www.hltv.org/ranking/teams/2023/may/29",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on May 29th, 2023"
    },
    "roster": [
      {
        "nick": "Snappi",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/922/snappi"
      },
      {
        "nick": "dycha",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/16080/dycha"
      },
      {
        "nick": "maden",
        "country": "ME",
        "hltvPlayerUrl": "https://www.hltv.org/player/11777/maden"
      },
      {
        "nick": "SunPayus",
        "country": "ES",
        "hltvPlayerUrl": "https://www.hltv.org/player/19164/sunpayus"
      },
      {
        "nick": "NertZ",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/9436/nertz"
      }
    ],
    "coach": {
      "nick": "sAw",
      "country": "PT",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "StarSeries i-League Season 6",
          "date": "2018-10-14",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Madrid 2019",
          "date": "2019-05-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2023",
          "date": "2023-06-04",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20230605021819/https://www.hltv.org/ranking/teams/2023/may/29",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVIII/Dallas",
      "https://liquipedia.net/counterstrike/ENCE/Results"
    ],
    "confidence": "medium"
  },
  "2023-06-blast-premier-spring-final-2023": {
    "eventId": "2023-06-blast-premier-spring-final-2023",
    "team": "Heroic",
    "teamKey": "Heroic",
    "eventStartDate": "2023-06-07",
    "ranking": {
      "rank": 2,
      "points": 834,
      "rankingDate": "2023-06-05",
      "sourceUrl": "https://web.archive.org/web/20230611182307/https://www.hltv.org/ranking/teams/2023/june/5",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on June 5th, 2023"
    },
    "roster": [
      {
        "nick": "cadiaN",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/7964/cadian"
      },
      {
        "nick": "stavn",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/10994/stavn"
      },
      {
        "nick": "TeSeS",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/12018/teses"
      },
      {
        "nick": "sjuush",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/14148/sjuush"
      },
      {
        "nick": "jabbi",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/17956/jabbi"
      }
    ],
    "coach": {
      "nick": "Xizt",
      "country": "SE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "ESL One: Cologne 2020 Online - Europe",
          "date": "2020-08-30",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 13",
          "date": "2021-04-11",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Fall Final 2022",
          "date": "2022-11-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2023",
          "date": "2023-06-11",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/6972/blast-premier-spring-final-2023",
      "https://web.archive.org/web/20230611182307/https://www.hltv.org/ranking/teams/2023/june/5",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2023/Spring",
      "https://liquipedia.net/counterstrike/Heroic/Results"
    ],
    "confidence": "medium"
  },
  "2023-08-iem-cologne-2023": {
    "eventId": "2023-08-iem-cologne-2023",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2023-07-25",
    "ranking": {
      "rank": 4,
      "points": 434,
      "rankingDate": "2023-07-24",
      "sourceUrl": "https://web.archive.org/web/20230730182948/https://www.hltv.org/ranking/teams/2023/july/24",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on July 24th, 2023"
    },
    "roster": [
      {
        "nick": "huNter-",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "m0NESY",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/19230/m0nesy"
      },
      {
        "nick": "jks",
        "country": "AU",
        "hltvPlayerUrl": "https://www.hltv.org/player/4679/jks"
      },
      {
        "nick": "HooXi",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/10096/hooxi"
      }
    ],
    "coach": {
      "nick": "Swani",
      "country": "DE",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Champions Cup Finals 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2022",
          "date": "2022-12-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2023",
          "date": "2023-02-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2023",
          "date": "2023-08-06",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20230730182948/https://www.hltv.org/ranking/teams/2023/july/24",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVIII/Cologne",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "medium"
  },
  "2023-08-gamers8-2023": {
    "eventId": "2023-08-gamers8-2023",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2023-08-16",
    "ranking": {
      "rank": 2,
      "points": 860,
      "rankingDate": "2023-08-14",
      "sourceUrl": "https://web.archive.org/web/20230821074306/https://www.hltv.org/ranking/teams/2023/august/14",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on August 14th, 2023"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      },
      {
        "nick": "Spinx",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
      },
      {
        "nick": "flameZ",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/16693/flamez"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20230821074306/https://www.hltv.org/ranking/teams/2023/august/14",
      "https://liquipedia.net/counterstrike/Gamers8/2023",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2023-10-esl-pro-league-season-18": {
    "eventId": "2023-10-esl-pro-league-season-18",
    "team": "MOUZ",
    "teamKey": "MOUZ",
    "eventStartDate": "2023-08-30",
    "ranking": {
      "rank": 12,
      "points": 172,
      "rankingDate": "2023-08-28",
      "sourceUrl": "https://web.archive.org/web/20230903191120/https://www.hltv.org/ranking/teams/2023/august/28",
      "sourceType": "archive.org",
      "pageTitle": "CS:GO World ranking on August 28th, 2023"
    },
    "roster": [
      {
        "nick": "frozen",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9960/frozen"
      },
      {
        "nick": "torzsi",
        "country": "HU",
        "hltvPlayerUrl": "https://www.hltv.org/player/18072/torzsi"
      },
      {
        "nick": "xertioN",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/20312/xertion"
      },
      {
        "nick": "siuhy",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/16820/siuhy"
      },
      {
        "nick": "Jimpphat",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/18850/jimpphat"
      }
    ],
    "coach": {
      "nick": "sycrone",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 4",
          "date": "2018-02-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2018",
          "date": "2018-09-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2019",
          "date": "2019-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 10 Finals",
          "date": "2019-12-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 5",
          "date": "2019-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 18",
          "date": "2023-10-01",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20230903191120/https://www.hltv.org/ranking/teams/2023/august/28",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_18",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "medium"
  },
  "2023-10-iem-sydney-2023": {
    "eventId": "2023-10-iem-sydney-2023",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2023-10-16",
    "ranking": {
      "rank": 7,
      "points": 332,
      "rankingDate": "2023-10-16",
      "sourceUrl": "https://web.archive.org/web/20231022195831/https://www.hltv.org/ranking/teams/2023/october/16",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on October 16th, 2023"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "Twistzz",
        "country": "CA",
        "hltvPlayerUrl": "https://www.hltv.org/player/10394/twistzz"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "broky",
        "country": "LV",
        "hltvPlayerUrl": "https://www.hltv.org/player/18053/broky"
      }
    ],
    "coach": {
      "nick": "NEO",
      "country": "PL",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 15,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2019",
          "date": "2019-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2022",
          "date": "2022-02-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 15",
          "date": "2022-04-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Antwerp 2022",
          "date": "2022-05-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2022",
          "date": "2022-07-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 17",
          "date": "2023-03-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2023",
          "date": "2023-10-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20231022195831/https://www.hltv.org/ranking/teams/2023/october/16",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVIII/Sydney",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2023-11-blast-premier-fall-final-2023": {
    "eventId": "2023-11-blast-premier-fall-final-2023",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2023-11-22",
    "ranking": {
      "rank": 5,
      "points": 405,
      "rankingDate": "2023-11-20",
      "sourceUrl": "https://web.archive.org/web/20231127025128/https://www.hltv.org/ranking/teams/2023/november/20",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on November 20th, 2023"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      },
      {
        "nick": "Spinx",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20231127025128/https://www.hltv.org/ranking/teams/2023/november/20",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2023/Fall_Finals",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2023-12-blast-premier-world-final-2023": {
    "eventId": "2023-12-blast-premier-world-final-2023",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2023-12-13",
    "ranking": {
      "rank": 2,
      "points": 816,
      "rankingDate": "2023-12-11",
      "sourceUrl": "https://web.archive.org/web/20231218003739/https://www.hltv.org/ranking/teams/2023/december/11",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on December 11th, 2023"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      },
      {
        "nick": "Spinx",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 12,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20231218003739/https://www.hltv.org/ranking/teams/2023/december/11",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2023/World_Final",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2024-02-iem-katowice-2024": {
    "eventId": "2024-02-iem-katowice-2024",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2024-01-31",
    "ranking": {
      "rank": 14,
      "points": 166,
      "rankingDate": "2024-01-29",
      "sourceUrl": "https://web.archive.org/web/20240204222842/https://www.hltv.org/ranking/teams/2024/january/29",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on January 29th, 2024"
    },
    "roster": [
      {
        "nick": "chopper",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7716/chopper"
      },
      {
        "nick": "magixx",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/18317/magixx"
      },
      {
        "nick": "donk",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/21167/donk"
      },
      {
        "nick": "zont1x",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20423/zont1x"
      },
      {
        "nick": "sh1ro",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16920/sh1ro"
      }
    ],
    "coach": {
      "nick": "hally",
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20240204222842/https://www.hltv.org/ranking/teams/2024/january/29",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2024/Katowice",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "medium"
  },
  "2024-03-pgl-major-copenhagen-2024": {
    "eventId": "2024-03-pgl-major-copenhagen-2024",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2024-03-17",
    "ranking": {
      "rank": 6,
      "points": 453,
      "rankingDate": "2024-03-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/march/11",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 11th, 2024"
    },
    "roster": [
      {
        "nick": "b1t",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/18987/b1t"
      },
      {
        "nick": "Aleksib",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/9816/aleksib"
      },
      {
        "nick": "jL",
        "country": "LT",
        "hltvPlayerUrl": "https://www.hltv.org/player/19206/jl"
      },
      {
        "nick": "iM",
        "country": "RO",
        "hltvPlayerUrl": "https://www.hltv.org/player/14759/im"
      },
      {
        "nick": "w0nderful",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20127/w0nderful"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 22,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 14",
          "date": "2021-09-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Major Stockholm 2021",
          "date": "2021-11-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Fall Finals 2021",
          "date": "2021-11-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: World Final 2021",
          "date": "2021-12-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Spring Final 2022",
          "date": "2022-06-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Copenhagen 2024",
          "date": "2024-03-31",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/march/11",
      "https://en.wikipedia.org/wiki/PGL_Major_Copenhagen_2024"
    ],
    "confidence": "medium"
  },
  "2024-04-iem-chengdu-2024": {
    "eventId": "2024-04-iem-chengdu-2024",
    "team": "FaZe Clan",
    "teamKey": "FaZe Clan",
    "eventStartDate": "2024-04-08",
    "ranking": {
      "rank": 1,
      "points": 967,
      "rankingDate": "2024-04-08",
      "sourceUrl": "https://web.archive.org/web/20240414213738/https://www.hltv.org/ranking/teams/2024/april/8",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on April 8th, 2024"
    },
    "roster": [
      {
        "nick": "karrigan",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/429/karrigan"
      },
      {
        "nick": "rain",
        "country": "NO",
        "hltvPlayerUrl": "https://www.hltv.org/player/8183/rain"
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      },
      {
        "nick": "broky",
        "country": "LV",
        "hltvPlayerUrl": "https://www.hltv.org/player/18053/broky"
      },
      {
        "nick": "frozen",
        "country": "SK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9960/frozen"
      }
    ],
    "coach": {
      "nick": "NEO",
      "country": "PL",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 18,
      "list": [
        {
          "event": "StarSeries i-League Season 3",
          "date": "2017-04-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2017",
          "date": "2017-09-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ELEAGUE CS:GO Premier 2017",
          "date": "2017-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 4 Finals",
          "date": "2017-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2018",
          "date": "2018-05-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One Belo Horizonte 2018",
          "date": "2018-06-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2018",
          "date": "2018-10-28",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Miami 2019",
          "date": "2019-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Pro Series Copenhagen 2019",
          "date": "2019-11-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2022",
          "date": "2022-02-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 15",
          "date": "2022-04-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Antwerp 2022",
          "date": "2022-05-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2022",
          "date": "2022-07-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 17",
          "date": "2023-03-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Sydney 2023",
          "date": "2023-10-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Thunderpick World Championship 2023",
          "date": "2023-11-05",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "CS Asia Championships 2023",
          "date": "2023-11-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Chengdu 2024",
          "date": "2024-04-14",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20240414213738/https://www.hltv.org/ranking/teams/2024/april/8",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2024/Chengdu",
      "https://liquipedia.net/counterstrike/FaZe_Clan/Results"
    ],
    "confidence": "medium"
  },
  "2024-05-esl-pro-league-season-19": {
    "eventId": "2024-05-esl-pro-league-season-19",
    "team": "MOUZ",
    "teamKey": "MOUZ",
    "eventStartDate": "2024-04-23",
    "ranking": {
      "rank": 3,
      "points": 612,
      "rankingDate": "2024-04-22",
      "sourceUrl": "https://web.archive.org/web/20240428182433/https://www.hltv.org/ranking/teams/2024/april/22",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on April 22nd, 2024"
    },
    "roster": [
      {
        "nick": "torzsi",
        "country": "HU",
        "hltvPlayerUrl": "https://www.hltv.org/player/18072/torzsi"
      },
      {
        "nick": "xertioN",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/20312/xertion"
      },
      {
        "nick": "siuhy",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/16820/siuhy"
      },
      {
        "nick": "Jimpphat",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/18850/jimpphat"
      },
      {
        "nick": "Brollan",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/13666/brollan"
      }
    ],
    "coach": {
      "nick": "sycrone",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 4",
          "date": "2018-02-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2018",
          "date": "2018-09-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2019",
          "date": "2019-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 10 Finals",
          "date": "2019-12-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 5",
          "date": "2019-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 18",
          "date": "2023-10-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 19",
          "date": "2024-05-12",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/7440/esl-pro-league-season-19",
      "https://web.archive.org/web/20240428182433/https://www.hltv.org/ranking/teams/2024/april/22",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_19",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "medium"
  },
  "2024-06-iem-dallas-2024": {
    "eventId": "2024-06-iem-dallas-2024",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2024-05-27",
    "ranking": {
      "rank": 5,
      "points": 498,
      "rankingDate": "2024-05-27",
      "sourceUrl": "https://web.archive.org/web/20240602104137/https://www.hltv.org/ranking/teams/2024/may/27",
      "sourceType": "archive.org",
      "pageTitle": "Counter-Strike World ranking on May 27th, 2024"
    },
    "roster": [
      {
        "nick": "huNter-",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "m0NESY",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/19230/m0nesy"
      },
      {
        "nick": "nexa",
        "country": "RS",
        "hltvPlayerUrl": "https://www.hltv.org/player/9618/nexa"
      },
      {
        "nick": "Stewie2K",
        "country": "US",
        "hltvPlayerUrl": "https://www.hltv.org/player/8797/stewie2k",
        "standIn": true
      }
    ],
    "coach": {
      "nick": "TaZ",
      "country": "PL",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Champions Cup Finals 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2022",
          "date": "2022-12-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2023",
          "date": "2023-02-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2023",
          "date": "2023-08-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2024",
          "date": "2024-06-02",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://web.archive.org/web/20240602104137/https://www.hltv.org/ranking/teams/2024/may/27",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2024/Dallas",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "medium"
  },
  "2024-06-blast-premier-spring-final-2024": {
    "eventId": "2024-06-blast-premier-spring-final-2024",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2024-06-12",
    "ranking": {
      "rank": 5,
      "points": 670,
      "rankingDate": "2024-06-10",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/june/10",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 10th, 2024"
    },
    "roster": [
      {
        "nick": "chopper",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7716/chopper"
      },
      {
        "nick": "magixx",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/18317/magixx"
      },
      {
        "nick": "donk",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/21167/donk"
      },
      {
        "nick": "zont1x",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20423/zont1x"
      },
      {
        "nick": "sh1ro",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16920/sh1ro"
      }
    ],
    "coach": {
      "nick": "hally",
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/june/10",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2024/Spring_Finals",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "high"
  },
  "2024-07-esports-world-cup-2024": {
    "eventId": "2024-07-esports-world-cup-2024",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2024-07-17",
    "ranking": {
      "rank": 5,
      "points": 734,
      "rankingDate": "2024-07-15",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/july/15",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 15th, 2024"
    },
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
        "nick": "jL",
        "country": "LT",
        "hltvPlayerUrl": "https://www.hltv.org/player/19206/jl"
      },
      {
        "nick": "w0nderful",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20127/w0nderful"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 23,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 14",
          "date": "2021-09-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Major Stockholm 2021",
          "date": "2021-11-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Fall Finals 2021",
          "date": "2021-11-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: World Final 2021",
          "date": "2021-12-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Spring Final 2022",
          "date": "2022-06-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Copenhagen 2024",
          "date": "2024-03-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Esports World Cup 2024",
          "date": "2024-07-21",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/july/15",
      "https://liquipedia.net/counterstrike/Esports_World_Cup/2024",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2024-08-iem-cologne-2024": {
    "eventId": "2024-08-iem-cologne-2024",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2024-08-07",
    "ranking": {
      "rank": 4,
      "points": 765,
      "rankingDate": "2024-08-05",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/august/5",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 5th, 2024"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
      },
      {
        "nick": "ZywOo",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/11893/zywoo"
      },
      {
        "nick": "Spinx",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 13,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/august/5",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2024/Cologne",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2024-09-esl-pro-league-season-20": {
    "eventId": "2024-09-esl-pro-league-season-20",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2024-09-03",
    "ranking": {
      "rank": 1,
      "points": 980,
      "rankingDate": "2024-09-02",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/september/2",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 2nd, 2024"
    },
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
        "nick": "jL",
        "country": "LT",
        "hltvPlayerUrl": "https://www.hltv.org/player/19206/jl"
      },
      {
        "nick": "w0nderful",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20127/w0nderful"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 24,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 14",
          "date": "2021-09-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Major Stockholm 2021",
          "date": "2021-11-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Fall Finals 2021",
          "date": "2021-11-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: World Final 2021",
          "date": "2021-12-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Spring Final 2022",
          "date": "2022-06-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Copenhagen 2024",
          "date": "2024-03-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Esports World Cup 2024",
          "date": "2024-07-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 20",
          "date": "2024-09-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/september/2",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_20",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2024-09-blast-premier-fall-final-2024": {
    "eventId": "2024-09-blast-premier-fall-final-2024",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2024-09-25",
    "ranking": {
      "rank": 3,
      "points": 635,
      "rankingDate": "2024-09-23",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/september/23",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 23rd, 2024"
    },
    "roster": [
      {
        "nick": "huNter-",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "m0NESY",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/19230/m0nesy"
      },
      {
        "nick": "malbsMd",
        "country": "GT",
        "hltvPlayerUrl": "https://www.hltv.org/player/11617/malbsmd"
      },
      {
        "nick": "Snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      }
    ],
    "coach": {
      "nick": "TaZ",
      "country": "PL",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Champions Cup Finals 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2022",
          "date": "2022-12-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2023",
          "date": "2023-02-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2023",
          "date": "2023-08-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2024",
          "date": "2024-06-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2024",
          "date": "2024-09-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/september/23",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2024/Fall_Finals",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "high"
  },
  "2024-10-iem-rio-2024": {
    "eventId": "2024-10-iem-rio-2024",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2024-10-07",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2024-10-07",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/october/7",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 7th, 2024"
    },
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
        "nick": "jL",
        "country": "LT",
        "hltvPlayerUrl": "https://www.hltv.org/player/19206/jl"
      },
      {
        "nick": "w0nderful",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20127/w0nderful"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 25,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 14",
          "date": "2021-09-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Major Stockholm 2021",
          "date": "2021-11-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Fall Finals 2021",
          "date": "2021-11-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: World Final 2021",
          "date": "2021-12-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Spring Final 2022",
          "date": "2022-06-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Copenhagen 2024",
          "date": "2024-03-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Esports World Cup 2024",
          "date": "2024-07-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 20",
          "date": "2024-09-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2024",
          "date": "2024-10-13",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/october/7",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2024/Rio",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2024-11-blast-premier-world-final-2024": {
    "eventId": "2024-11-blast-premier-world-final-2024",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2024-10-30",
    "ranking": {
      "rank": 2,
      "points": 592,
      "rankingDate": "2024-10-28",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/october/28",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 28th, 2024"
    },
    "roster": [
      {
        "nick": "huNter-",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
      },
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "m0NESY",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/19230/m0nesy"
      },
      {
        "nick": "malbsMd",
        "country": "GT",
        "hltvPlayerUrl": "https://www.hltv.org/player/11617/malbsmd"
      },
      {
        "nick": "Snax",
        "country": "PL",
        "hltvPlayerUrl": "https://www.hltv.org/player/2553/snax"
      }
    ],
    "coach": {
      "nick": "TaZ",
      "country": "PL",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Champions Cup Finals 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2022",
          "date": "2022-12-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2023",
          "date": "2023-02-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2023",
          "date": "2023-08-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2024",
          "date": "2024-06-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2024",
          "date": "2024-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2024",
          "date": "2024-11-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/october/28",
      "https://liquipedia.net/counterstrike/BLAST/Premier/2024/World_Final",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "high"
  },
  "2024-11-thunderpick-world-championship-2024": {
    "eventId": "2024-11-thunderpick-world-championship-2024",
    "team": "The MongolZ",
    "teamKey": "The MongolZ",
    "eventStartDate": "2024-10-21",
    "ranking": {
      "rank": 13,
      "points": 190,
      "rankingDate": "2024-10-21",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/october/21",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on October 21st, 2024"
    },
    "roster": [
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
        "nick": "Senzu",
        "country": "MN",
        "hltvPlayerUrl": "https://www.hltv.org/player/20903/senzu"
      },
      {
        "nick": "mzinho",
        "country": "MN",
        "hltvPlayerUrl": "https://www.hltv.org/player/21001/mzinho"
      },
      {
        "nick": "910",
        "country": "MN",
        "hltvPlayerUrl": "https://www.hltv.org/player/21809/910"
      }
    ],
    "coach": {
      "nick": "maaRaa",
      "country": "MN",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "YaLLa Compass 2024",
          "date": "2024-06-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Thunderpick World Championship 2024",
          "date": "2024-11-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/october/21",
      "https://liquipedia.net/counterstrike/Thunderpick/World_Championship/2024",
      "https://liquipedia.net/counterstrike/The_MongolZ/Results"
    ],
    "confidence": "medium"
  },
  "2024-12-perfect-world-shanghai-major-2024": {
    "eventId": "2024-12-perfect-world-shanghai-major-2024",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2024-11-30",
    "ranking": {
      "rank": 4,
      "points": 627,
      "rankingDate": "2024-11-25",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2024/november/25",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 25th, 2024"
    },
    "roster": [
      {
        "nick": "chopper",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7716/chopper"
      },
      {
        "nick": "magixx",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/18317/magixx"
      },
      {
        "nick": "donk",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/21167/donk"
      },
      {
        "nick": "zont1x",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20423/zont1x"
      },
      {
        "nick": "sh1ro",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16920/sh1ro"
      }
    ],
    "coach": {
      "nick": "hally",
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #2",
          "date": "2024-09-01",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Perfect World Shanghai Major 2024",
          "date": "2024-12-15",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2024/november/25",
      "https://en.wikipedia.org/wiki/Perfect_World_Shanghai_Major_2024"
    ],
    "confidence": "medium"
  },
  "2025-01-blast-bounty-2025-season-1-finals": {
    "eventId": "2025-01-blast-bounty-2025-season-1-finals",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2025-01-14",
    "ranking": {
      "rank": 1,
      "points": 996,
      "rankingDate": "2025-01-13",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/january/13",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on January 13th, 2025"
    },
    "roster": [
      {
        "nick": "chopper",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7716/chopper"
      },
      {
        "nick": "magixx",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/18317/magixx"
      },
      {
        "nick": "donk",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/21167/donk"
      },
      {
        "nick": "zont1x",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20423/zont1x"
      },
      {
        "nick": "sh1ro",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16920/sh1ro"
      }
    ],
    "coach": {
      "nick": "hally",
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 5,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #2",
          "date": "2024-09-01",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Perfect World Shanghai Major 2024",
          "date": "2024-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 1 Finals",
          "date": "2025-01-26",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2025/january/13",
      "https://liquipedia.net/counterstrike/BLAST/Bounty/2025/Season_1",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "medium"
  },
  "2025-02-iem-katowice-2025": {
    "eventId": "2025-02-iem-katowice-2025",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-01-29",
    "ranking": {
      "rank": 4,
      "points": 406,
      "rankingDate": "2025-01-27",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/january/27",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on January 27th, 2025"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
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
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      }
    ],
    "coach": {
      "nick": "XTQZZZ",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 14,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2025/january/27",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2025/Katowice",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2025-02-pgl-cluj-napoca-2025": {
    "eventId": "2025-02-pgl-cluj-napoca-2025",
    "team": "MOUZ",
    "teamKey": "MOUZ",
    "eventStartDate": "2025-02-14",
    "ranking": {
      "rank": 8,
      "points": 233,
      "rankingDate": "2025-02-10",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/february/10",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 10th, 2025"
    },
    "roster": [
      {
        "nick": "torzsi",
        "country": "HU",
        "hltvPlayerUrl": "https://www.hltv.org/player/18072/torzsi"
      },
      {
        "nick": "xertioN",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/20312/xertion"
      },
      {
        "nick": "Jimpphat",
        "country": "FI",
        "hltvPlayerUrl": "https://www.hltv.org/player/18850/jimpphat"
      },
      {
        "nick": "Brollan",
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/13666/brollan"
      },
      {
        "nick": "Spinx",
        "country": "IL",
        "hltvPlayerUrl": "https://www.hltv.org/player/18221/spinx"
      }
    ],
    "coach": {
      "nick": "sycrone",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 4",
          "date": "2018-02-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2018",
          "date": "2018-09-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2019",
          "date": "2019-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 10 Finals",
          "date": "2019-12-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 5",
          "date": "2019-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 18",
          "date": "2023-10-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 19",
          "date": "2024-05-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #1",
          "date": "2024-05-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Cluj-Napoca 2025",
          "date": "2025-02-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2025/february/10",
      "https://liquipedia.net/counterstrike/PGL/2025/Cluj-Napoca",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "medium"
  },
  "2025-03-esl-pro-league-season-21": {
    "eventId": "2025-03-esl-pro-league-season-21",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-03-01",
    "ranking": {
      "rank": 2,
      "points": 659,
      "rankingDate": "2025-02-24",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/february/24",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 24th, 2025"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 15,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8292/esl-pro-league-season-21",
      "https://www.hltv.org/ranking/teams/2025/february/24",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_21",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2025-03-blast-open-lisbon-2025": {
    "eventId": "2025-03-blast-open-lisbon-2025",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-03-19",
    "ranking": {
      "rank": 2,
      "points": 838,
      "rankingDate": "2025-03-17",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/march/17",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 17th, 2025"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 16,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2025/march/17",
      "https://liquipedia.net/counterstrike/BLAST/Open/2025/Spring",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2025-04-pgl-bucharest-2025": {
    "eventId": "2025-04-pgl-bucharest-2025",
    "team": "Team Falcons",
    "teamKey": "Team Falcons",
    "eventStartDate": "2025-04-06",
    "ranking": {
      "rank": 9,
      "points": 228,
      "rankingDate": "2025-03-31",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/march/31",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 31st, 2025"
    },
    "roster": [
      {
        "nick": "NiKo",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3741/niko"
      },
      {
        "nick": "Magisk",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/9032/magisk"
      },
      {
        "nick": "TeSeS",
        "country": "DK",
        "hltvPlayerUrl": "https://www.hltv.org/player/12018/teses"
      },
      {
        "nick": "degster",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/17306/degster"
      },
      {
        "nick": "kyxsan",
        "country": "MK",
        "hltvPlayerUrl": "https://www.hltv.org/player/19677/kyxsan"
      }
    ],
    "coach": {
      "nick": "zonic",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "PGL Bucharest 2025",
          "date": "2025-04-13",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8044/pgl-bucharest-2025",
      "https://www.hltv.org/ranking/teams/2025/march/31",
      "https://liquipedia.net/counterstrike/PGL/2025/Bucharest",
      "https://liquipedia.net/counterstrike/Team_Falcons/Results"
    ],
    "confidence": "high"
  },
  "2025-04-iem-melbourne-2025": {
    "eventId": "2025-04-iem-melbourne-2025",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-04-21",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2025-04-21",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/april/21",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on April 21st, 2025"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 17,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8036/iem-melbourne-2025",
      "https://www.hltv.org/ranking/teams/2025/april/21",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2025/Melbourne",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2025-05-blast-rivals-2025-season-1": {
    "eventId": "2025-05-blast-rivals-2025-season-1",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-04-30",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2025-04-28",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/april/28",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on April 28th, 2025"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 18,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/7905/blast-rivals-2025-season-1",
      "https://www.hltv.org/ranking/teams/2025/april/28",
      "https://liquipedia.net/counterstrike/BLAST/Rivals/2025/Spring",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2025-05-pgl-astana-2025": {
    "eventId": "2025-05-pgl-astana-2025",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2025-05-10",
    "ranking": {
      "rank": 2,
      "points": 562,
      "rankingDate": "2025-05-05",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/may/5",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 5th, 2025"
    },
    "roster": [
      {
        "nick": "chopper",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7716/chopper"
      },
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
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 6,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #2",
          "date": "2024-09-01",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Perfect World Shanghai Major 2024",
          "date": "2024-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 1 Finals",
          "date": "2025-01-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2025",
          "date": "2025-05-18",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8045/pgl-astana-2025",
      "https://www.hltv.org/ranking/teams/2025/may/5",
      "https://liquipedia.net/counterstrike/PGL/2025/Astana",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "medium"
  },
  "2025-05-iem-dallas-2025": {
    "eventId": "2025-05-iem-dallas-2025",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-05-19",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2025-05-19",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/may/19",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 19th, 2025"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 19,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8037/iem-dallas-2025",
      "https://www.hltv.org/ranking/teams/2025/may/19",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2025/Dallas",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2025-06-blast-tv-austin-major-2025": {
    "eventId": "2025-06-blast-tv-austin-major-2025",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-06-03",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2025-06-02",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/june/2",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 2nd, 2025"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
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
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      }
    ],
    "coach": {
      "nick": "XTQZZZ",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 20,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Austin Major 2025",
          "date": "2025-06-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2025/june/2",
      "https://liquipedia.net/counterstrike/BLAST/Major/2025/Austin"
    ],
    "confidence": "medium"
  },
  "2025-08-iem-cologne-2025": {
    "eventId": "2025-08-iem-cologne-2025",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2025-07-23",
    "ranking": {
      "rank": 4,
      "points": 406,
      "rankingDate": "2025-07-21",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/july/21",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 21st, 2025"
    },
    "roster": [
      {
        "nick": "chopper",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7716/chopper"
      },
      {
        "nick": "sh1ro",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16920/sh1ro"
      },
      {
        "nick": "zweih",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/23685/zweih"
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
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 7,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #2",
          "date": "2024-09-01",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Perfect World Shanghai Major 2024",
          "date": "2024-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 1 Finals",
          "date": "2025-01-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2025",
          "date": "2025-05-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2025",
          "date": "2025-08-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8038/iem-cologne-2025",
      "https://www.hltv.org/ranking/teams/2025/july/21",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2025/Cologne",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "medium"
  },
  "2025-08-blast-bounty-2025-season-2-finals": {
    "eventId": "2025-08-blast-bounty-2025-season-2-finals",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2025-08-14",
    "ranking": {
      "rank": 3,
      "points": 636,
      "rankingDate": "2025-08-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/august/11",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 11th, 2025"
    },
    "roster": [
      {
        "nick": "chopper",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/7716/chopper"
      },
      {
        "nick": "sh1ro",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/16920/sh1ro"
      },
      {
        "nick": "zweih",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/23685/zweih"
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
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 8,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #2",
          "date": "2024-09-01",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Perfect World Shanghai Major 2024",
          "date": "2024-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 1 Finals",
          "date": "2025-01-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2025",
          "date": "2025-05-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2025",
          "date": "2025-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 2 Finals",
          "date": "2025-08-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/7910/blast-bounty-2025-season-2-finals",
      "https://www.hltv.org/ranking/teams/2025/august/11",
      "https://liquipedia.net/counterstrike/BLAST/Bounty/2025/Fall",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "medium"
  },
  "2025-08-esports-world-cup-2025": {
    "eventId": "2025-08-esports-world-cup-2025",
    "team": "The MongolZ",
    "teamKey": "The MongolZ",
    "eventStartDate": "2025-08-20",
    "ranking": {
      "rank": 4,
      "points": 616,
      "rankingDate": "2025-08-18",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/august/18",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 18th, 2025"
    },
    "roster": [
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
        "nick": "Senzu",
        "country": "MN",
        "hltvPlayerUrl": "https://www.hltv.org/player/20903/senzu"
      },
      {
        "nick": "mzinho",
        "country": "MN",
        "hltvPlayerUrl": "https://www.hltv.org/player/21001/mzinho"
      },
      {
        "nick": "910",
        "country": "MN",
        "hltvPlayerUrl": "https://www.hltv.org/player/21809/910"
      }
    ],
    "coach": {
      "nick": "maaRaa",
      "country": "MN",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "YaLLa Compass 2024",
          "date": "2024-06-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Thunderpick World Championship 2024",
          "date": "2024-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Esports World Cup 2025",
          "date": "2025-08-24",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8039/esports-world-cup-2025",
      "https://www.hltv.org/ranking/teams/2025/august/18",
      "https://liquipedia.net/counterstrike/Esports_World_Cup/2025",
      "https://liquipedia.net/counterstrike/The_MongolZ/Results"
    ],
    "confidence": "medium"
  },
  "2025-09-blast-open-london-2025": {
    "eventId": "2025-09-blast-open-london-2025",
    "team": "G2 Esports",
    "teamKey": "G2 Esports",
    "eventStartDate": "2025-09-05",
    "ranking": {
      "rank": 12,
      "points": 204,
      "rankingDate": "2025-09-02",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/september/2",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 2nd, 2025"
    },
    "roster": [
      {
        "nick": "huNter-",
        "country": "BA",
        "hltvPlayerUrl": "https://www.hltv.org/player/3972/hunter"
      },
      {
        "nick": "malbsMd",
        "country": "GT",
        "hltvPlayerUrl": "https://www.hltv.org/player/11617/malbsmd"
      },
      {
        "nick": "SunPayus",
        "country": "ES",
        "hltvPlayerUrl": "https://www.hltv.org/player/19164/sunpayus"
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
      "country": "FI",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "ECS Season 1 Finals 2016",
          "date": "2016-06-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 5 Finals",
          "date": "2017-06-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Masters Malmö 2017",
          "date": "2017-09-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Champions Cup Finals 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2022",
          "date": "2022-12-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2023",
          "date": "2023-02-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2023",
          "date": "2023-08-06",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2024",
          "date": "2024-06-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2024",
          "date": "2024-09-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2024",
          "date": "2024-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open London 2025",
          "date": "2025-09-07",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/7912/blast-open-london-2025-finals",
      "https://www.hltv.org/ranking/teams/2025/september/2",
      "https://liquipedia.net/counterstrike/BLAST/Open/2025/Fall",
      "https://liquipedia.net/counterstrike/G2_Esports/Results"
    ],
    "confidence": "medium"
  },
  "2025-10-esl-pro-league-season-22": {
    "eventId": "2025-10-esl-pro-league-season-22",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-09-28",
    "ranking": {
      "rank": 1,
      "points": 910,
      "rankingDate": "2025-09-22",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/september/22",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on September 22nd, 2025"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 21,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Austin Major 2025",
          "date": "2025-06-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 22",
          "date": "2025-10-12",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8040/esl-pro-league-season-22",
      "https://www.hltv.org/ranking/teams/2025/september/22",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_22",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2025-11-iem-chengdu-2025": {
    "eventId": "2025-11-iem-chengdu-2025",
    "team": "FURIA",
    "teamKey": "FURIA",
    "eventStartDate": "2025-11-03",
    "ranking": {
      "rank": 2,
      "points": 665,
      "rankingDate": "2025-11-03",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/november/3",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 3rd, 2025"
    },
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
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 3,
      "list": [
        {
          "event": "ESL Pro League Season 12: North America",
          "date": "2020-09-27",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "FISSURE Playground #2",
          "date": "2025-09-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Chengdu 2025",
          "date": "2025-11-09",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8041/iem-chengdu-2025",
      "https://www.hltv.org/ranking/teams/2025/november/3",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2025/Chengdu",
      "https://liquipedia.net/counterstrike/FURIA/Results"
    ],
    "confidence": "medium"
  },
  "2025-11-blast-rivals-2025-season-2": {
    "eventId": "2025-11-blast-rivals-2025-season-2",
    "team": "FURIA",
    "teamKey": "FURIA",
    "eventStartDate": "2025-11-12",
    "ranking": {
      "rank": 2,
      "points": 796,
      "rankingDate": "2025-11-10",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/november/10",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 10th, 2025"
    },
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
      "country": "BR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 4,
      "list": [
        {
          "event": "ESL Pro League Season 12: North America",
          "date": "2020-09-27",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "FISSURE Playground #2",
          "date": "2025-09-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Chengdu 2025",
          "date": "2025-11-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 2",
          "date": "2025-11-16",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/7908/blast-rivals-2025-season-2",
      "https://www.hltv.org/ranking/teams/2025/november/10",
      "https://liquipedia.net/counterstrike/BLAST/Rivals/2025/Fall",
      "https://liquipedia.net/counterstrike/FURIA/Results"
    ],
    "confidence": "medium"
  },
  "2025-12-starladder-budapest-major-2025": {
    "eventId": "2025-12-starladder-budapest-major-2025",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2025-11-24",
    "ranking": {
      "rank": 2,
      "points": 921,
      "rankingDate": "2025-11-24",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2025/november/24",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on November 24th, 2025"
    },
    "roster": [
      {
        "nick": "apEX",
        "country": "FR",
        "hltvPlayerUrl": "https://www.hltv.org/player/7322/apex"
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
      },
      {
        "nick": "ropz",
        "country": "EE",
        "hltvPlayerUrl": "https://www.hltv.org/player/11816/ropz"
      }
    ],
    "coach": {
      "nick": "XTQZZZ",
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 22,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Austin Major 2025",
          "date": "2025-06-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 22",
          "date": "2025-10-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Budapest Major 2025",
          "date": "2025-12-14",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2025/november/24",
      "https://liquipedia.net/counterstrike/StarLadder/Major/2025/Budapest"
    ],
    "confidence": "medium"
  },
  "2026-01-blast-bounty-2026-season-1-finals": {
    "eventId": "2026-01-blast-bounty-2026-season-1-finals",
    "team": "PARIVISION",
    "teamKey": "PARIVISION",
    "eventStartDate": "2026-01-22",
    "ranking": {
      "rank": 17,
      "points": 112,
      "rankingDate": "2026-01-19",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/january/19",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on January 19th, 2026"
    },
    "roster": [
      {
        "nick": "Jame",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/13776/jame"
      },
      {
        "nick": "BELCHONOKK",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/19235/belchonokk"
      },
      {
        "nick": "xiELO",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/22471/xielo"
      },
      {
        "nick": "nota",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/22929/nota"
      },
      {
        "nick": "zweih",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/23685/zweih"
      }
    ],
    "coach": {
      "nick": "dastan",
      "country": "KZ",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "BLAST Bounty 2026 Season 1 Finals",
          "date": "2026-01-25",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8246/blast-bounty-2026-season-1-finals",
      "https://www.hltv.org/ranking/teams/2026/january/19",
      "https://liquipedia.net/counterstrike/BLAST/Bounty/2026/Winter",
      "https://liquipedia.net/counterstrike/PARIVISION/Results"
    ],
    "confidence": "medium"
  },
  "2026-02-iem-krak-w-2026": {
    "eventId": "2026-02-iem-krak-w-2026",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2026-01-28",
    "ranking": {
      "rank": 1,
      "points": 966,
      "rankingDate": "2026-01-26",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/january/26",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on January 26th, 2026"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 23,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Austin Major 2025",
          "date": "2025-06-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 22",
          "date": "2025-10-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Budapest Major 2025",
          "date": "2025-12-14",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Kraków 2026",
          "date": "2026-02-08",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8240/iem-krakw-2026",
      "https://www.hltv.org/ranking/teams/2026/january/26",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2026/Kraków",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2026-02-pgl-cluj-napoca-2026": {
    "eventId": "2026-02-pgl-cluj-napoca-2026",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2026-02-14",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2026-02-09",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/february/9",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on February 9th, 2026"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 24,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Austin Major 2025",
          "date": "2025-06-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 22",
          "date": "2025-10-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Budapest Major 2025",
          "date": "2025-12-14",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Kraków 2026",
          "date": "2026-02-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Cluj-Napoca 2026",
          "date": "2026-02-22",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2026/february/9",
      "https://liquipedia.net/counterstrike/PGL/2026/Cluj-Napoca",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2026-03-esl-pro-league-season-23": {
    "eventId": "2026-03-esl-pro-league-season-23",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2026-03-13",
    "ranking": {
      "rank": 9,
      "points": 256,
      "rankingDate": "2026-03-09",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/march/9",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 9th, 2026"
    },
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
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/22673/makazze"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 26,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 14",
          "date": "2021-09-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Major Stockholm 2021",
          "date": "2021-11-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Fall Finals 2021",
          "date": "2021-11-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: World Final 2021",
          "date": "2021-12-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Spring Final 2022",
          "date": "2022-06-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Copenhagen 2024",
          "date": "2024-03-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Esports World Cup 2024",
          "date": "2024-07-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 20",
          "date": "2024-09-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2024",
          "date": "2024-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 23",
          "date": "2026-03-15",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8413/esl-pro-league-season-23-finals",
      "https://www.hltv.org/ranking/teams/2026/march/9",
      "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_23",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2026-03-blast-open-rotterdam-2026": {
    "eventId": "2026-03-blast-open-rotterdam-2026",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2026-03-18",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2026-03-16",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/march/16",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 16th, 2026"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 25,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Austin Major 2025",
          "date": "2025-06-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 22",
          "date": "2025-10-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Budapest Major 2025",
          "date": "2025-12-14",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Kraków 2026",
          "date": "2026-02-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Cluj-Napoca 2026",
          "date": "2026-02-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Rotterdam 2026",
          "date": "2026-03-29",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8248/blast-open-rotterdam-2026",
      "https://www.hltv.org/ranking/teams/2026/march/16",
      "https://liquipedia.net/counterstrike/BLAST/Open/2026/Spring",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2026-04-pgl-bucharest-2026": {
    "eventId": "2026-04-pgl-bucharest-2026",
    "team": "FUT Esports",
    "teamKey": "FUT Esports",
    "eventStartDate": "2026-04-04",
    "ranking": {
      "rank": 13,
      "points": 144,
      "rankingDate": "2026-03-30",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/march/30",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on March 30th, 2026"
    },
    "roster": [
      {
        "nick": "dem0n",
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/20584/dem0n"
      },
      {
        "nick": "lauNX",
        "country": "RO",
        "hltvPlayerUrl": "https://www.hltv.org/player/20761/launx"
      },
      {
        "nick": "Krabeni",
        "country": "XK",
        "hltvPlayerUrl": "https://www.hltv.org/player/22203/krabeni"
      },
      {
        "nick": "cmtry",
        "country": "RU",
        "hltvPlayerUrl": "https://www.hltv.org/player/22674/cmtry"
      },
      {
        "nick": "dziugss",
        "country": "LT",
        "hltvPlayerUrl": "https://www.hltv.org/player/23553/dziugss"
      }
    ],
    "coach": {
      "nick": "coolio",
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 1,
      "list": [
        {
          "event": "PGL Bucharest 2026",
          "date": "2026-04-11",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8048/pgl-bucharest-2026",
      "https://www.hltv.org/ranking/teams/2026/march/30",
      "https://liquipedia.net/counterstrike/PGL/2026/Bucharest",
      "https://liquipedia.net/counterstrike/FUT_Esports/Results"
    ],
    "confidence": "high"
  },
  "2026-04-iem-rio-2026": {
    "eventId": "2026-04-iem-rio-2026",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2026-04-13",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2026-04-13",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/april/13",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on April 13th, 2026"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 26,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Austin Major 2025",
          "date": "2025-06-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 22",
          "date": "2025-10-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Budapest Major 2025",
          "date": "2025-12-14",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Kraków 2026",
          "date": "2026-02-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Cluj-Napoca 2026",
          "date": "2026-02-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Rotterdam 2026",
          "date": "2026-03-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2026",
          "date": "2026-04-19",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8242/iem-rio-2026",
      "https://www.hltv.org/ranking/teams/2026/april/13",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2026/Rio",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2026-05-blast-rivals-2026-season-1": {
    "eventId": "2026-05-blast-rivals-2026-season-1",
    "team": "Team Vitality",
    "teamKey": "Team Vitality",
    "eventStartDate": "2026-04-29",
    "ranking": {
      "rank": 1,
      "points": 1000,
      "rankingDate": "2026-04-27",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/april/27",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on April 27th, 2026"
    },
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
      "country": "FR",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 27,
      "list": [
        {
          "event": "cs_summit 4",
          "date": "2019-05-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ECS Season 7 Finals",
          "date": "2019-06-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "EPICENTER 2019",
          "date": "2019-12-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Intel Extreme Masters XV - Beijing Online: Europe",
          "date": "2020-11-22",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: Fall 2020",
          "date": "2020-12-13",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Winter 2021",
          "date": "2021-12-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 16",
          "date": "2022-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2023",
          "date": "2023-04-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Paris Major 2023",
          "date": "2023-05-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Gamers8 2023",
          "date": "2023-08-20",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Fall Final 2023",
          "date": "2023-11-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier World Final 2023",
          "date": "2023-12-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2024",
          "date": "2024-08-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2025",
          "date": "2025-02-09",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 21",
          "date": "2025-03-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Lisbon 2025",
          "date": "2025-03-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Melbourne 2025",
          "date": "2025-04-27",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2025 Season 1",
          "date": "2025-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Dallas 2025",
          "date": "2025-05-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST.tv Austin Major 2025",
          "date": "2025-06-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 22",
          "date": "2025-10-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarLadder Budapest Major 2025",
          "date": "2025-12-14",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Kraków 2026",
          "date": "2026-02-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Cluj-Napoca 2026",
          "date": "2026-02-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Rotterdam 2026",
          "date": "2026-03-29",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2026",
          "date": "2026-04-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Rivals 2026 Season 1",
          "date": "2026-05-03",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8250/blast-rivals-2026-season-1",
      "https://www.hltv.org/ranking/teams/2026/april/27",
      "https://liquipedia.net/counterstrike/BLAST/Rivals/2026/Spring",
      "https://liquipedia.net/counterstrike/Team_Vitality/Results"
    ],
    "confidence": "medium"
  },
  "2026-05-pgl-astana-2026": {
    "eventId": "2026-05-pgl-astana-2026",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2026-05-09",
    "ranking": {
      "rank": 6,
      "points": 327,
      "rankingDate": "2026-05-04",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/may/4",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 4th, 2026"
    },
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
      "nick": "S0tF1k",
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 9,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #2",
          "date": "2024-09-01",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Perfect World Shanghai Major 2024",
          "date": "2024-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 1 Finals",
          "date": "2025-01-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2025",
          "date": "2025-05-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2025",
          "date": "2025-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 2 Finals",
          "date": "2025-08-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2026",
          "date": "2026-05-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8049/pgl-astana-2026",
      "https://www.hltv.org/ranking/teams/2026/may/4",
      "https://liquipedia.net/counterstrike/PGL/2026/Astana",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "medium"
  },
  "2026-05-iem-atlanta-2026": {
    "eventId": "2026-05-iem-atlanta-2026",
    "team": "Natus Vincere",
    "teamKey": "Natus Vincere",
    "eventStartDate": "2026-05-11",
    "ranking": {
      "rank": 2,
      "points": 549,
      "rankingDate": "2026-05-11",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/may/11",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on May 11th, 2026"
    },
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
        "country": "UA",
        "hltvPlayerUrl": "https://www.hltv.org/player/22673/makazze"
      }
    ],
    "coach": {
      "nick": "B1ad3",
      "country": "UA",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 27,
      "list": [
        {
          "event": "SLTV StarSeries IX Finals",
          "date": "2014-05-04",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Winter 2014/15",
          "date": "2015-04-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "StarLadder StarSeries XIII",
          "date": "2015-06-21",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Electronic Sports World Cup 2015",
          "date": "2015-07-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Intel Extreme Masters X San Jose 2015",
          "date": "2015-11-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "DreamHack Open Leipzig 2016",
          "date": "2016-01-24",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2016",
          "date": "2016-10-02",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 5",
          "date": "2018-06-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2018",
          "date": "2018-06-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One: Cologne 2018",
          "date": "2018-07-08",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Pro Series Copenhagen 2018",
          "date": "2018-11-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 7",
          "date": "2019-04-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Katowice 2020",
          "date": "2020-03-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Global Final 2020",
          "date": "2021-01-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "DreamHack Masters Spring 2021",
          "date": "2021-05-09",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "IEM Cologne 2021",
          "date": "2021-07-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 14",
          "date": "2021-09-12",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Major Stockholm 2021",
          "date": "2021-11-07",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier: Fall Finals 2021",
          "date": "2021-11-28",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier: World Final 2021",
          "date": "2021-12-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "BLAST Premier Spring Final 2022",
          "date": "2022-06-19",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Major Copenhagen 2024",
          "date": "2024-03-31",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Esports World Cup 2024",
          "date": "2024-07-21",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 20",
          "date": "2024-09-22",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Rio 2024",
          "date": "2024-10-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 23",
          "date": "2026-03-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Atlanta 2026",
          "date": "2026-05-17",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8243/iem-atlanta-2026",
      "https://www.hltv.org/ranking/teams/2026/may/11",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2026/Atlanta",
      "https://liquipedia.net/counterstrike/Natus_Vincere/Results"
    ],
    "confidence": "medium"
  },
  "2026-06-iem-cologne-major-2026": {
    "eventId": "2026-06-iem-cologne-major-2026",
    "team": "Team Falcons",
    "teamKey": "Team Falcons",
    "eventStartDate": "2026-06-02",
    "ranking": {
      "rank": 4,
      "points": 509,
      "rankingDate": "2026-06-01",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/june/1",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on June 1st, 2026"
    },
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
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 2,
      "list": [
        {
          "event": "PGL Bucharest 2025",
          "date": "2025-04-13",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne Major 2026",
          "date": "2026-06-21",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/ranking/teams/2026/june/1",
      "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2026/Cologne_Major"
    ],
    "confidence": "high"
  },
  "2026-08-blast-bounty-2026-season-2-finals": {
    "eventId": "2026-08-blast-bounty-2026-season-2-finals",
    "team": "MOUZ",
    "teamKey": "MOUZ",
    "eventStartDate": "2026-07-30",
    "ranking": {
      "rank": 10,
      "points": 304,
      "rankingDate": "2026-07-27",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/july/27",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on July 27th, 2026"
    },
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
        "country": "SE",
        "hltvPlayerUrl": "https://www.hltv.org/player/24457/xelex"
      }
    ],
    "coach": {
      "nick": "sycrone",
      "country": "DK",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "ESG Tour Mykonos 2017",
          "date": "2017-09-10",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "StarSeries i-League Season 4",
          "date": "2018-02-25",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL One New York 2018",
          "date": "2018-09-30",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "CS:GO Asia Championships 2019",
          "date": "2019-11-24",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "ESL Pro League Season 10 Finals",
          "date": "2019-12-08",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "cs_summit 5",
          "date": "2019-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 18",
          "date": "2023-10-01",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "ESL Pro League Season 19",
          "date": "2024-05-12",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #1",
          "date": "2024-05-19",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "PGL Cluj-Napoca 2025",
          "date": "2025-02-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2026 Season 2 Finals",
          "date": "2026-08-02",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/events/8247/blast-bounty-2026-season-2-finals",
      "https://www.hltv.org/ranking/teams/2026/july/27",
      "https://liquipedia.net/counterstrike/BLAST/Bounty/2026/Summer",
      "https://liquipedia.net/counterstrike/MOUZ/Results"
    ],
    "confidence": "medium"
  },
  "2026-08-esports-world-cup-2026": {
    "eventId": "2026-08-esports-world-cup-2026",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2026-08-12",
    "ranking": {
      "rank": 2,
      "points": 752,
      "rankingDate": "2026-08-10",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/august/10",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 10th, 2026"
    },
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
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 10,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #2",
          "date": "2024-09-01",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Perfect World Shanghai Major 2024",
          "date": "2024-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 1 Finals",
          "date": "2025-01-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2025",
          "date": "2025-05-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2025",
          "date": "2025-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 2 Finals",
          "date": "2025-08-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2026",
          "date": "2026-05-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Esports World Cup 2026",
          "date": "2026-08-23",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.hltv.org/news/45376/donk-earns-esports-world-cup-mvp",
      "https://www.hltv.org/ranking/teams/2026/august/10",
      "https://liquipedia.net/counterstrike/Esports_World_Cup/2026",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "medium"
  },
  "2026-09-blast-open-porto-2026": {
    "eventId": "2026-09-blast-open-porto-2026",
    "team": "Team Spirit",
    "teamKey": "Team Spirit",
    "eventStartDate": "2026-08-26",
    "ranking": {
      "rank": 1,
      "points": 998,
      "rankingDate": "2026-08-24",
      "sourceUrl": "https://www.hltv.org/ranking/teams/2026/august/24",
      "sourceType": "HLTV",
      "pageTitle": "Counter-Strike World ranking on August 24th, 2026"
    },
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
      "country": "RU",
      "hltvPlayerUrl": null
    },
    "honours": {
      "countAtDate": 11,
      "list": [
        {
          "event": "IEM Katowice 2024",
          "date": "2024-02-11",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Premier Spring Final 2024",
          "date": "2024-06-16",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BetBoom Dacha Belgrade 2024 #2",
          "date": "2024-09-01",
          "place": "1st",
          "inProject": false
        },
        {
          "event": "Perfect World Shanghai Major 2024",
          "date": "2024-12-15",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 1 Finals",
          "date": "2025-01-26",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2025",
          "date": "2025-05-18",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "IEM Cologne 2025",
          "date": "2025-08-03",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Bounty 2025 Season 2 Finals",
          "date": "2025-08-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "PGL Astana 2026",
          "date": "2026-05-17",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "Esports World Cup 2026",
          "date": "2026-08-23",
          "place": "1st",
          "inProject": true
        },
        {
          "event": "BLAST Open Porto 2026",
          "date": "2026-09-06",
          "place": "1st",
          "inProject": true
        }
      ]
    },
    "sources": [
      "https://www.dust2.in/news/77594/spirit-wins-blast-open-porto-2026",
      "https://www.hltv.org/ranking/teams/2026/august/24",
      "https://liquipedia.net/counterstrike/BLAST/Open/2026/Fall",
      "https://liquipedia.net/counterstrike/Team_Spirit/Results"
    ],
    "confidence": "medium"
  }
};

export function teamSnapshot(eventId: string | null | undefined): TeamSnapshot | null {
  if (!eventId) return null;
  return TEAM_SNAPSHOTS[eventId] ?? null;
}

export function countryFlag(iso2: string | null | undefined): string {
  if (!iso2 || !/^[A-Z]{2}$/.test(iso2)) return "";
  return String.fromCodePoint(...[...iso2].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65));
}
