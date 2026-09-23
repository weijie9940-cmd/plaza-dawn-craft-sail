export type EventTier = "Major" | "S";

export type STierEvent = {
  year: number;
  month: number;
  name: string;
  cityZh: string;
  cityEn: string;
  venue: string | null;
  champion: string;
  tier: EventTier;
  /** Set when the source note contains 级别边缘. */
  note: string | null;
};

export type STierCity = {
  id: string;
  city: string;
  cityZh: string;
  lat: number;
  lng: number;
  holy: boolean;
  events: STierEvent[];
};

/** LAN S-tier / Major events 2013–2026. Source: HLTV.org, compiled 2026-09. */
export const S_TIER_EVENTS: STierEvent[] = [
  { year: 2013, month: 4, name: "SLTV StarSeries V Finals", cityZh: "基辅", cityEn: "Kyiv", venue: null, champion: "Virtus.pro", tier: "S", note: null },
  { year: 2013, month: 6, name: "DreamHack Summer 2013", cityZh: "延雪平", cityEn: "Jönköping", venue: "Elmia", champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2013, month: 6, name: "RaidCall EMS One Summer 2013 Finals", cityZh: "科隆", cityEn: "Cologne", venue: null, champion: "VeryGames", tier: "S", note: null },
  { year: 2013, month: 7, name: "SLTV StarSeries VI Finals", cityZh: "基辅", cityEn: "Kyiv", venue: null, champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2013, month: 9, name: "DreamHack Bucharest 2013", cityZh: "布加勒斯特", cityEn: "Bucharest", venue: null, champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2013, month: 10, name: "SLTV StarSeries VII Finals", cityZh: "基辅", cityEn: "Kyiv", venue: null, champion: "VeryGames", tier: "S", note: null },
  { year: 2013, month: 10, name: "RaidCall EMS One Fall 2013 Finals", cityZh: "科隆", cityEn: "Cologne", venue: "ESL TV Studio", champion: "VeryGames", tier: "S", note: null },
  { year: 2013, month: 11, name: "ESWC 2013", cityZh: "巴黎", cityEn: "Paris", venue: null, champion: "Clan-Mystik", tier: "S", note: null },
  { year: 2013, month: 11, name: "DreamHack Winter 2013", cityZh: "延雪平", cityEn: "Jönköping", venue: "Elmia Exhibition and Convention Centre", champion: "Fnatic", tier: "Major", note: null },
  { year: 2014, month: 3, name: "EMS One Katowice 2014", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "Virtus.pro", tier: "Major", note: null },
  { year: 2014, month: 4, name: "Copenhagen Games 2014", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: null, champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2014, month: 5, name: "SLTV StarSeries IX Finals", cityZh: "基辅", cityEn: "Kyiv", venue: "Kiev Cybersport Arena", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2014, month: 6, name: "DreamHack Summer 2014", cityZh: "延雪平", cityEn: "Jönköping", venue: null, champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2014, month: 8, name: "Gfinity G3", cityZh: "伦敦", cityEn: "London", venue: "Copper Box Arena", champion: "Virtus.pro", tier: "S", note: null },
  { year: 2014, month: 8, name: "ESL One Cologne 2014", cityZh: "科隆", cityEn: "Cologne", venue: "Cologne Exhibition Centre", champion: "Ninjas in Pyjamas", tier: "Major", note: null },
  { year: 2014, month: 8, name: "SLTV StarSeries X Finals", cityZh: "基辅", cityEn: "Kyiv", venue: null, champion: "Fnatic", tier: "S", note: null },
  { year: 2014, month: 9, name: "DreamHack Stockholm Invitational 2014", cityZh: "斯德哥尔摩", cityEn: "Stockholm", venue: null, champion: "Titan", tier: "S", note: null },
  { year: 2014, month: 10, name: "SLTV StarSeries XI Finals", cityZh: "基辅", cityEn: "Kyiv", venue: null, champion: "LDLC", tier: "S", note: null },
  { year: 2014, month: 10, name: "FACEIT League Season 2 Finals", cityZh: "米兰", cityEn: "Milan", venue: null, champion: "Fnatic", tier: "S", note: null },
  { year: 2014, month: 11, name: "ESWC 2014", cityZh: "巴黎", cityEn: "Paris", venue: null, champion: "Fnatic", tier: "S", note: null },
  { year: 2014, month: 11, name: "DreamHack Winter 2014", cityZh: "延雪平", cityEn: "Jönköping", venue: "Elmia", champion: "Team LDLC.com", tier: "Major", note: null },
  { year: 2015, month: 3, name: "ESL One Katowice 2015", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "fnatic", tier: "Major", note: null },
  { year: 2015, month: 4, name: "ESEA Invite Season 18 Global Finals", cityZh: "达拉斯", cityEn: "Dallas", venue: null, champion: "Virtus.pro", tier: "S", note: null },
  { year: 2015, month: 7, name: "ESL ESEA Pro League Season 1 Finals", cityZh: "科隆", cityEn: "Cologne", venue: "ESL Studios Cologne", champion: "fnatic", tier: "S", note: null },
  { year: 2015, month: 7, name: "FACEIT League 2015 Stage 2 Finals", cityZh: "瓦伦西亚", cityEn: "Valencia", venue: "Feria Valencia", champion: "Team SoloMid", tier: "S", note: null },
  { year: 2015, month: 8, name: "ESL One Cologne 2015", cityZh: "科隆", cityEn: "Cologne", venue: "LANXESS Arena", champion: "fnatic", tier: "Major", note: null },
  { year: 2015, month: 9, name: "ESL ESEA Dubai Invitational 2015", cityZh: "迪拜", cityEn: "Dubai", venue: "Dubai International Marina Club", champion: "Virtus.pro", tier: "S", note: null },
  { year: 2015, month: 9, name: "Gfinity Champion of Champions 2015", cityZh: "伯明翰", cityEn: "Birmingham", venue: "National Exhibition Centre", champion: "Team EnVyUs", tier: "S", note: null },
  { year: 2015, month: 11, name: "DreamHack Open Cluj-Napoca 2015", cityZh: "克卢日-纳波卡", cityEn: "Cluj-Napoca", venue: "Sala Polivalentă", champion: "Team EnVyUs", tier: "Major", note: null },
  { year: 2015, month: 11, name: "CEVO Professional Season 8 Finals", cityZh: "哥伦布", cityEn: "Columbus", venue: "MLG.tv Arena", champion: "Virtus.pro", tier: "S", note: null },
  { year: 2015, month: 11, name: "Intel Extreme Masters X San Jose 2015", cityZh: "圣何塞", cityEn: "San Jose", venue: "SAP Center at San Jose", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2015, month: 11, name: "FACEIT League 2015 Stage 3 Finals", cityZh: "延雪平", cityEn: "Jönköping", venue: "Elmia", champion: "fnatic", tier: "S", note: null },
  { year: 2015, month: 12, name: "ESL ESEA Pro League Season 2 Finals", cityZh: "伯班克", cityEn: "Burbank", venue: "ESL Studios Burbank", champion: "fnatic", tier: "S", note: null },
  { year: 2016, month: 1, name: "StarLadder i-League StarSeries XIV Finals 2016", cityZh: "明斯克", cityEn: "Minsk", venue: "Minsk Arena", champion: "fnatic", tier: "S", note: null },
  { year: 2016, month: 1, name: "DreamHack Open Leipzig 2016", cityZh: "莱比锡", cityEn: "Leipzig", venue: "Leipzig Trade Fair", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2016, month: 2, name: "Game Show Global eSports Cup 2016 Finals", cityZh: "维尔纽斯", cityEn: "Vilnius", venue: "Game Show Studios", champion: "Team EnVyUs", tier: "S", note: null },
  { year: 2016, month: 3, name: "IEM Katowice 2016", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "fnatic", tier: "S", note: null },
  { year: 2016, month: 4, name: "MLG Major Championship: Columbus 2016", cityZh: "哥伦布", cityEn: "Columbus", venue: "Nationwide Arena", champion: "Luminosity Gaming", tier: "Major", note: null },
  { year: 2016, month: 4, name: "DreamHack Masters Malmö 2016", cityZh: "马尔默", cityEn: "Malmö", venue: "Malmö Arena", champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2016, month: 5, name: "CEVO Pro League Season 9 2016", cityZh: "伦敦", cityEn: "London", venue: "Gfinity Arena", champion: "Tempo Storm", tier: "S", note: null },
  { year: 2016, month: 5, name: "DreamHack Open Austin 2016", cityZh: "奥斯汀", cityEn: "Austin", venue: "Austin Convention Center", champion: "Luminosity Gaming", tier: "S", note: null },
  { year: 2016, month: 5, name: "ESL Pro League Season 3 Finals 2016", cityZh: "伦敦", cityEn: "London", venue: "indigo at The O2", champion: "Luminosity Gaming", tier: "S", note: null },
  { year: 2016, month: 5, name: "StarLadder i-League Invitational #1 2016", cityZh: "基辅", cityEn: "Kyiv", venue: "NSK \"Olympic\"", champion: "Virtus.pro", tier: "S", note: null },
  { year: 2016, month: 6, name: "DreamHack ZOWIE Open Summer 2016", cityZh: "延雪平", cityEn: "Jönköping", venue: "Elmia Exhibition Centre", champion: "Immortals", tier: "S", note: null },
  { year: 2016, month: 6, name: "ECS Season 1 Finals 2016", cityZh: "伦敦", cityEn: "London", venue: "The SSE Arena, Wembley", champion: "G2 Esports", tier: "S", note: null },
  { year: 2016, month: 7, name: "ESL One Cologne 2016", cityZh: "科隆", cityEn: "Cologne", venue: "LANXESS Arena", champion: "SK Gaming", tier: "Major", note: null },
  { year: 2016, month: 7, name: "ELEAGUE Season 1 2016", cityZh: "亚特兰大", cityEn: "Atlanta", venue: "Turner Studios", champion: "Virtus.pro", tier: "S", note: null },
  { year: 2016, month: 9, name: "Northern Arena 2016 - Toronto", cityZh: "多伦多", cityEn: "Toronto", venue: "Metro Toronto Convention Centre", champion: "Immortals", tier: "S", note: null },
  { year: 2016, month: 9, name: "SL i-League StarSeries Season 2 Finals 2016", cityZh: "基辅", cityEn: "Kyiv", venue: "National Palace of Arts \"Ukraina\"", champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2016, month: 9, name: "DreamHack ZOWIE Open Bucharest 2016", cityZh: "布加勒斯特", cityEn: "Bucharest", venue: "Polyvalent Hall", champion: "Virtus.pro", tier: "S", note: null },
  { year: 2016, month: 9, name: "Gfinity CS:GO Invitational 2016", cityZh: "伯明翰", cityEn: "Birmingham", venue: null, champion: "Team EnVyUs", tier: "S", note: null },
  { year: 2016, month: 10, name: "ESL One New York 2016", cityZh: "纽约", cityEn: "New York", venue: "Barclays Center", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2016, month: 10, name: "EPICENTER 2016", cityZh: "莫斯科", cityEn: "Moscow", venue: "VTB Ice Palace", champion: "Team Dignitas", tier: "S", note: null },
  { year: 2016, month: 10, name: "ESL Pro League Season 4 Finals 2016", cityZh: "圣保罗", cityEn: "São Paulo", venue: "Ginásio do Ibirapuera", champion: "Cloud9", tier: "S", note: null },
  { year: 2016, month: 11, name: "iBUYPOWER Masters 2016", cityZh: "科斯塔梅萨", cityEn: "Costa Mesa", venue: "Orange County Fairgrounds", champion: "Immortals", tier: "S", note: null },
  { year: 2016, month: 11, name: "Northern Arena 2016 - Montreal", cityZh: "蒙特利尔", cityEn: "Montreal", venue: "Bell Centre", champion: "OpTic Gaming", tier: "S", note: null },
  { year: 2016, month: 11, name: "IEM Oakland 2016", cityZh: "奥克兰", cityEn: "Oakland", venue: "Oracle Arena", champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2016, month: 11, name: "DreamHack ZOWIE Open Winter 2016", cityZh: "延雪平", cityEn: "Jönköping", venue: "Elmia Exhibition and Convention Centre", champion: "Gambit Esports", tier: "S", note: null },
  { year: 2016, month: 12, name: "ELEAGUE Season 2 2016", cityZh: "亚特兰大", cityEn: "Atlanta", venue: "Turner Studios", champion: "OpTic Gaming", tier: "S", note: null },
  { year: 2016, month: 12, name: "ECS Season 2 Finals 2016", cityZh: "阿纳海姆", cityEn: "Anaheim", venue: "Anaheim Convention Center Arena", champion: "Astralis", tier: "S", note: null },
  { year: 2017, month: 1, name: "ELEAGUE Major Atlanta 2017", cityZh: "亚特兰大", cityEn: "Atlanta", venue: "Fox Theatre", champion: "Astralis", tier: "Major", note: null },
  { year: 2017, month: 1, name: "WESG 2016 World Finals", cityZh: "常州", cityEn: "Changzhou", venue: null, champion: "EnVyUs", tier: "S", note: null },
  { year: 2017, month: 2, name: "DreamHack Masters Las Vegas 2017", cityZh: "拉斯维加斯", cityEn: "Las Vegas", venue: "MGM Grand Garden Arena", champion: "Virtus.pro", tier: "S", note: null },
  { year: 2017, month: 3, name: "IEM Katowice 2017", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek Arena", champion: "Astralis", tier: "S", note: null },
  { year: 2017, month: 4, name: "StarSeries i-League Season 3", cityZh: "基辅", cityEn: "Kyiv", venue: "National Palace of Arts \"Ukraina\"", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2017, month: 4, name: "cs_summit 1", cityZh: "洛杉矶", cityEn: "Los Angeles", venue: "Summit House", champion: "SK Gaming", tier: "S", note: null },
  { year: 2017, month: 5, name: "IEM Sydney 2017", cityZh: "悉尼", cityEn: "Sydney", venue: "Qudos Bank Arena", champion: "SK Gaming", tier: "S", note: null },
  { year: 2017, month: 6, name: "ESL Pro League Season 5 Finals", cityZh: "达拉斯", cityEn: "Dallas", venue: "Verizon Theatre", champion: "G2 Esports", tier: "S", note: null },
  { year: 2017, month: 6, name: "ECS Season 3 Finals", cityZh: "伦敦", cityEn: "London", venue: "SSE Arena Wembley", champion: "SK Gaming", tier: "S", note: null },
  { year: 2017, month: 7, name: "ESL One Cologne 2017", cityZh: "科隆", cityEn: "Cologne", venue: "Lanxess Arena", champion: "SK Gaming", tier: "S", note: null },
  { year: 2017, month: 7, name: "PGL Major Kraków 2017", cityZh: "克拉科夫", cityEn: "Kraków", venue: "Tauron Arena Kraków", champion: "Gambit Esports", tier: "Major", note: null },
  { year: 2017, month: 9, name: "DreamHack Masters Malmö 2017", cityZh: "马尔默", cityEn: "Malmö", venue: "Malmö Arena", champion: "G2 Esports", tier: "S", note: null },
  { year: 2017, month: 9, name: "ESG Tour Mykonos 2017", cityZh: "米科诺斯", cityEn: "Mykonos", venue: "Destiny Villa", champion: "mousesports", tier: "S", note: null },
  { year: 2017, month: 9, name: "ESL One New York 2017", cityZh: "纽约", cityEn: "New York", venue: "Barclays Center", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2017, month: 10, name: "ELEAGUE CS:GO Premier 2017", cityZh: "亚特兰大", cityEn: "Atlanta", venue: "Turner Studios", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2017, month: 10, name: "EPICENTER 2017", cityZh: "圣彼得堡", cityEn: "Saint Petersburg", venue: "Yubileyny Sports Palace", champion: "SK Gaming", tier: "S", note: null },
  { year: 2017, month: 11, name: "IEM Oakland 2017", cityZh: "奥克兰", cityEn: "Oakland", venue: "Oracle Arena", champion: "Ninjas in Pyjamas", tier: "S", note: null },
  { year: 2017, month: 11, name: "BLAST Pro Series Copenhagen 2017", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "Royal Arena", champion: "SK Gaming", tier: "S", note: null },
  { year: 2017, month: 12, name: "ESL Pro League Season 6 Finals", cityZh: "欧登塞", cityEn: "Odense", venue: "Sparekassen Fyn Arena", champion: "SK Gaming", tier: "S", note: null },
  { year: 2017, month: 12, name: "ECS Season 4 Finals", cityZh: "坎昆", cityEn: "Cancun", venue: "Hard Rock Hotel", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2018, month: 1, name: "ELEAGUE Major Boston 2018", cityZh: "波士顿", cityEn: "Boston", venue: "Agganis Arena", champion: "Cloud9", tier: "Major", note: null },
  { year: 2018, month: 2, name: "StarSeries i-League Season 4", cityZh: "基辅", cityEn: "Kyiv", venue: "Kyiv Cybersport Arena", champion: "mousesports", tier: "S", note: null },
  { year: 2018, month: 3, name: "IEM Katowice 2018", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "fnatic", tier: "S", note: null },
  { year: 2018, month: 3, name: "WESG 2017 World Finals", cityZh: "海口", cityEn: "Haikou", venue: "Haikou Exhibition & Convention Center", champion: "fnatic", tier: "S", note: null },
  { year: 2018, month: 4, name: "DreamHack Masters Marseille 2018", cityZh: "马赛", cityEn: "Marseille", venue: "Le Dôme de Marseille", champion: "Astralis", tier: "S", note: null },
  { year: 2018, month: 5, name: "IEM Sydney 2018", cityZh: "悉尼", cityEn: "Sydney", venue: "Qudos Bank Arena", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2018, month: 5, name: "ESL Pro League Season 7 Finals", cityZh: "达拉斯", cityEn: "Dallas", venue: "Verizon Theatre", champion: "Astralis", tier: "S", note: null },
  { year: 2018, month: 5, name: "cs_summit 2", cityZh: "洛杉矶", cityEn: "Los Angeles", venue: null, champion: "Team Liquid", tier: "S", note: null },
  { year: 2018, month: 6, name: "StarSeries i-League Season 5", cityZh: "基辅", cityEn: "Kyiv", venue: "National Palace of Arts \"Ukraina\"", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2018, month: 6, name: "ECS Season 5 Finals", cityZh: "伦敦", cityEn: "London", venue: "SSE Arena Wembley", champion: "Astralis", tier: "S", note: null },
  { year: 2018, month: 6, name: "ESL One Belo Horizonte 2018", cityZh: "贝洛奥里藏特", cityEn: "Belo Horizonte", venue: "Mineirinho Arena", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2018, month: 6, name: "CS:GO Asia Championships 2018", cityZh: "上海", cityEn: "Shanghai", venue: "Yuanshen Gymnasium", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2018, month: 7, name: "ELEAGUE CS:GO Premier 2018", cityZh: "亚特兰大", cityEn: "Atlanta", venue: "Turner Studios", champion: "Astralis", tier: "S", note: null },
  { year: 2018, month: 9, name: "DreamHack Masters Stockholm 2018", cityZh: "斯德哥尔摩", cityEn: "Stockholm", venue: "Ericsson Globe", champion: "North", tier: "S", note: null },
  { year: 2018, month: 9, name: "FACEIT Major London 2018", cityZh: "伦敦", cityEn: "London", venue: "SSE Arena Wembley", champion: "Astralis", tier: "Major", note: null },
  { year: 2018, month: 9, name: "BLAST Pro Series Istanbul 2018", cityZh: "伊斯坦布尔", cityEn: "Istanbul", venue: "Ülker Sports Arena", champion: "Astralis", tier: "S", note: null },
  { year: 2018, month: 9, name: "ESL One New York 2018", cityZh: "纽约", cityEn: "New York", venue: "Barclays Center", champion: "mousesports", tier: "S", note: null },
  { year: 2018, month: 10, name: "StarSeries i-League Season 6", cityZh: "基辅", cityEn: "Kyiv", venue: "Kyiv Cybersport Arena", champion: "ENCE", tier: "S", note: null },
  { year: 2018, month: 10, name: "EPICENTER 2018", cityZh: "莫斯科", cityEn: "Moscow", venue: "CSKA Arena", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2018, month: 11, name: "BLAST Pro Series Copenhagen 2018", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "Royal Arena", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2018, month: 11, name: "IEM Chicago 2018", cityZh: "芝加哥", cityEn: "Chicago", venue: "Wintrust Arena", champion: "Astralis", tier: "S", note: null },
  { year: 2018, month: 11, name: "ECS Season 6 Finals", cityZh: "阿灵顿", cityEn: "Arlington", venue: "Esports Stadium Arlington", champion: "Astralis", tier: "S", note: null },
  { year: 2018, month: 11, name: "cs_summit 3", cityZh: "洛杉矶", cityEn: "Los Angeles", venue: null, champion: "NRG Esports", tier: "S", note: null },
  { year: 2018, month: 12, name: "ESL Pro League Season 8 Finals", cityZh: "欧登塞", cityEn: "Odense", venue: "Sparekassen Fyn Arena", champion: "Astralis", tier: "S", note: null },
  { year: 2018, month: 12, name: "BLAST Pro Series Lisbon 2018", cityZh: "里斯本", cityEn: "Lisbon", venue: "Altice Arena", champion: "Astralis", tier: "S", note: null },
  { year: 2019, month: 3, name: "IEM Katowice Major 2019", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "Astralis", tier: "Major", note: null },
  { year: 2019, month: 3, name: "BLAST Pro Series São Paulo 2019", cityZh: "圣保罗", cityEn: "São Paulo", venue: "Ginásio do Ibirapuera", champion: "Astralis", tier: "S", note: null },
  { year: 2019, month: 4, name: "StarSeries i-League Season 7", cityZh: "上海", cityEn: "Shanghai", venue: null, champion: "Natus Vincere", tier: "S", note: null },
  { year: 2019, month: 4, name: "BLAST Pro Series Miami 2019", cityZh: "迈阿密", cityEn: "Miami", venue: "Watsco Center", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2019, month: 5, name: "BLAST Pro Series Madrid 2019", cityZh: "马德里", cityEn: "Madrid", venue: "Madrid Arena", champion: "ENCE", tier: "S", note: null },
  { year: 2019, month: 5, name: "cs_summit 4", cityZh: "洛杉矶", cityEn: "Los Angeles", venue: null, champion: "Team Liquid", tier: "S", note: null },
  { year: 2019, month: 6, name: "DreamHack Masters Dallas 2019", cityZh: "达拉斯", cityEn: "Dallas", venue: "Kay Bailey Hutchison Convention Center", champion: "Team Liquid", tier: "S", note: null },
  { year: 2019, month: 6, name: "ESL Pro League Season 9 Finals", cityZh: "蒙彼利埃", cityEn: "Montpellier", venue: null, champion: "Team Liquid", tier: "S", note: null },
  { year: 2019, month: 6, name: "ECS Season 7 Finals", cityZh: "伦敦", cityEn: "London", venue: "SSE Arena Wembley", champion: "Team Vitality", tier: "S", note: null },
  { year: 2019, month: 7, name: "BLAST Pro Series Los Angeles 2019", cityZh: "洛杉矶", cityEn: "Los Angeles", venue: null, champion: "Team Liquid", tier: "S", note: null },
  { year: 2019, month: 7, name: "IEM Chicago 2019", cityZh: "芝加哥", cityEn: "Chicago", venue: null, champion: "Team Liquid", tier: "S", note: null },
  { year: 2019, month: 9, name: "StarLadder Berlin Major 2019", cityZh: "柏林", cityEn: "Berlin", venue: "Mercedes-Benz Arena", champion: "Astralis", tier: "Major", note: null },
  { year: 2019, month: 9, name: "BLAST Pro Series Moscow 2019", cityZh: "莫斯科", cityEn: "Moscow", venue: "VTB Arena", champion: "AVANGAR", tier: "S", note: null },
  { year: 2019, month: 9, name: "ESL One New York 2019", cityZh: "纽约", cityEn: "New York", venue: "Barclays Center", champion: "Evil Geniuses", tier: "S", note: null },
  { year: 2019, month: 10, name: "DreamHack Masters Malmö 2019", cityZh: "马尔默", cityEn: "Malmö", venue: "Malmö Arena", champion: "fnatic", tier: "S", note: null },
  { year: 2019, month: 10, name: "StarSeries i-League Season 8", cityZh: "贝莱克", cityEn: "Belek", venue: null, champion: "Evil Geniuses", tier: "S", note: null },
  { year: 2019, month: 11, name: "IEM Beijing 2019", cityZh: "北京", cityEn: "Beijing", venue: null, champion: "Astralis", tier: "S", note: null },
  { year: 2019, month: 11, name: "BLAST Pro Series Copenhagen 2019", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "Royal Arena", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2019, month: 12, name: "ECS Season 8 Finals", cityZh: "阿灵顿", cityEn: "Arlington", venue: "Esports Stadium Arlington", champion: "Astralis", tier: "S", note: null },
  { year: 2019, month: 12, name: "ESL Pro League Season 10 Finals", cityZh: "欧登塞", cityEn: "Odense", venue: null, champion: "mousesports", tier: "S", note: null },
  { year: 2019, month: 12, name: "BLAST Pro Series Global Final 2019", cityZh: "里法", cityEn: "Riffa", venue: "ISA Sports City", champion: "Astralis", tier: "S", note: null },
  { year: 2019, month: 12, name: "cs_summit 5", cityZh: "洛杉矶", cityEn: "Los Angeles", venue: null, champion: "mousesports", tier: "S", note: null },
  { year: 2019, month: 12, name: "EPICENTER 2019", cityZh: "莫斯科", cityEn: "Moscow", venue: null, champion: "Team Vitality", tier: "S", note: null },
  { year: 2019, month: 12, name: "Champions Cup Finals 2019", cityZh: "圣朱利安斯", cityEn: "St. Julian's", venue: "Intercontinental Conference Centre Arena", champion: "G2 Esports", tier: "S", note: null },
  { year: 2020, month: 3, name: "IEM Katowice 2020", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2021, month: 7, name: "IEM Cologne 2021", cityZh: "科隆", cityEn: "Cologne", venue: "Lanxess Arena", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2021, month: 11, name: "PGL Major Stockholm 2021", cityZh: "斯德哥尔摩", cityEn: "Stockholm", venue: "Avicii Arena", champion: "Natus Vincere", tier: "Major", note: null },
  { year: 2022, month: 2, name: "IEM Katowice 2022", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2022, month: 4, name: "ESL Pro League Season 15", cityZh: "杜塞尔多夫", cityEn: "Düsseldorf", venue: null, champion: "FaZe Clan", tier: "S", note: null },
  { year: 2022, month: 5, name: "PGL Major Antwerp 2022", cityZh: "安特卫普", cityEn: "Antwerp", venue: "Sportpaleis", champion: "FaZe Clan", tier: "Major", note: null },
  { year: 2022, month: 6, name: "IEM Dallas 2022", cityZh: "达拉斯", cityEn: "Dallas", venue: "Kay Bailey Hutchison Convention Center", champion: "Cloud9", tier: "S", note: null },
  { year: 2022, month: 6, name: "BLAST Premier Spring Final 2022", cityZh: "里斯本", cityEn: "Lisbon", venue: "Altice Arena", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2022, month: 7, name: "IEM Cologne 2022", cityZh: "科隆", cityEn: "Cologne", venue: "Lanxess Arena", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2022, month: 10, name: "ESL Pro League Season 16", cityZh: "马耳他", cityEn: "Malta", venue: "Salini Resort", champion: "Team Vitality", tier: "S", note: null },
  { year: 2022, month: 11, name: "IEM Rio Major 2022", cityZh: "里约热内卢", cityEn: "Rio de Janeiro", venue: "Jeunesse Arena", champion: "Outsiders", tier: "Major", note: null },
  { year: 2022, month: 11, name: "BLAST Premier Fall Final 2022", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "Royal Arena", champion: "Heroic", tier: "S", note: null },
  { year: 2022, month: 12, name: "BLAST Premier World Final 2022", cityZh: "阿布扎比", cityEn: "Abu Dhabi", venue: "Etihad Arena", champion: "G2 Esports", tier: "S", note: null },
  { year: 2023, month: 2, name: "IEM Katowice 2023", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "G2 Esports", tier: "S", note: null },
  { year: 2023, month: 3, name: "ESL Pro League Season 17", cityZh: "马耳他", cityEn: "Malta", venue: null, champion: "FaZe Clan", tier: "S", note: null },
  { year: 2023, month: 4, name: "IEM Rio 2023", cityZh: "里约热内卢", cityEn: "Rio de Janeiro", venue: "Jeunesse Arena", champion: "Team Vitality", tier: "S", note: null },
  { year: 2023, month: 5, name: "BLAST.tv Paris Major 2023", cityZh: "巴黎", cityEn: "Paris", venue: "Accor Arena", champion: "Team Vitality", tier: "Major", note: null },
  { year: 2023, month: 6, name: "IEM Dallas 2023", cityZh: "达拉斯", cityEn: "Dallas", venue: "Kay Bailey Hutchison Convention Center", champion: "ENCE", tier: "S", note: null },
  { year: 2023, month: 6, name: "BLAST Premier Spring Final 2023", cityZh: "华盛顿", cityEn: "Washington, D.C.", venue: "Entertainment & Sports Arena", champion: "Team Vitality", tier: "S", note: null },
  { year: 2023, month: 8, name: "IEM Cologne 2023", cityZh: "科隆", cityEn: "Cologne", venue: "Lanxess Arena", champion: "G2 Esports", tier: "S", note: null },
  { year: 2023, month: 8, name: "Gamers8 2023", cityZh: "利雅得", cityEn: "Riyadh", venue: null, champion: "Team Vitality", tier: "S", note: null },
  { year: 2023, month: 10, name: "ESL Pro League Season 18", cityZh: "马耳他", cityEn: "Malta", venue: null, champion: "MOUZ", tier: "S", note: null },
  { year: 2023, month: 10, name: "IEM Sydney 2023", cityZh: "悉尼", cityEn: "Sydney", venue: "Aware Super Theatre", champion: "FaZe Clan", tier: "S", note: null },
  { year: 2023, month: 11, name: "BLAST Premier Fall Final 2023", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "Royal Arena", champion: "Team Vitality", tier: "S", note: null },
  { year: 2023, month: 12, name: "BLAST Premier World Final 2023", cityZh: "阿布扎比", cityEn: "Abu Dhabi", venue: "Etihad Arena", champion: "Team Vitality", tier: "S", note: null },
  { year: 2024, month: 2, name: "IEM Katowice 2024", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "Team Spirit", tier: "S", note: null },
  { year: 2024, month: 3, name: "PGL Major Copenhagen 2024", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "Royal Arena", champion: "Natus Vincere", tier: "Major", note: null },
  { year: 2024, month: 4, name: "IEM Chengdu 2024", cityZh: "成都", cityEn: "Chengdu", venue: null, champion: "FaZe Clan", tier: "S", note: null },
  { year: 2024, month: 5, name: "ESL Pro League Season 19", cityZh: "马耳他", cityEn: "Malta", venue: null, champion: "MOUZ", tier: "S", note: null },
  { year: 2024, month: 6, name: "IEM Dallas 2024", cityZh: "达拉斯", cityEn: "Dallas", venue: "Kay Bailey Hutchison Convention Center", champion: "G2 Esports", tier: "S", note: null },
  { year: 2024, month: 6, name: "BLAST Premier Spring Final 2024", cityZh: "伦敦", cityEn: "London", venue: "OVO Arena Wembley", champion: "Team Spirit", tier: "S", note: null },
  { year: 2024, month: 7, name: "Esports World Cup 2024", cityZh: "利雅得", cityEn: "Riyadh", venue: null, champion: "Natus Vincere", tier: "S", note: null },
  { year: 2024, month: 8, name: "IEM Cologne 2024", cityZh: "科隆", cityEn: "Cologne", venue: "Lanxess Arena", champion: "Team Vitality", tier: "S", note: null },
  { year: 2024, month: 9, name: "ESL Pro League Season 20", cityZh: "马耳他", cityEn: "Malta", venue: null, champion: "Natus Vincere", tier: "S", note: null },
  { year: 2024, month: 9, name: "BLAST Premier Fall Final 2024", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "Forum Copenhagen", champion: "G2 Esports", tier: "S", note: null },
  { year: 2024, month: 10, name: "IEM Rio 2024", cityZh: "里约热内卢", cityEn: "Rio de Janeiro", venue: "Farmasi Arena", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2024, month: 11, name: "BLAST Premier World Final 2024", cityZh: "新加坡", cityEn: "Singapore", venue: null, champion: "G2 Esports", tier: "S", note: null },
  { year: 2024, month: 11, name: "Thunderpick World Championship 2024", cityZh: "柏林", cityEn: "Berlin", venue: null, champion: "The MongolZ", tier: "S", note: null },
  { year: 2024, month: 12, name: "Perfect World Shanghai Major 2024", cityZh: "上海", cityEn: "Shanghai", venue: "Shanghai Oriental Sports Center", champion: "Team Spirit", tier: "Major", note: null },
  { year: 2025, month: 1, name: "BLAST Bounty 2025 Season 1 Finals", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "BLAST Studio", champion: "Team Spirit", tier: "S", note: null },
  { year: 2025, month: 2, name: "IEM Katowice 2025", cityZh: "卡托维兹", cityEn: "Katowice", venue: "Spodek", champion: "Team Vitality", tier: "S", note: null },
  { year: 2025, month: 2, name: "PGL Cluj-Napoca 2025", cityZh: "克卢日-纳波卡", cityEn: "Cluj-Napoca", venue: "BTarena", champion: "MOUZ", tier: "S", note: null },
  { year: 2025, month: 3, name: "ESL Pro League Season 21", cityZh: "斯德哥尔摩", cityEn: "Stockholm", venue: null, champion: "Team Vitality", tier: "S", note: null },
  { year: 2025, month: 3, name: "BLAST Open Lisbon 2025", cityZh: "里斯本", cityEn: "Lisbon", venue: "MEO Arena", champion: "Team Vitality", tier: "S", note: null },
  { year: 2025, month: 4, name: "PGL Bucharest 2025", cityZh: "布加勒斯特", cityEn: "Bucharest", venue: null, champion: "Team Falcons", tier: "S", note: null },
  { year: 2025, month: 4, name: "IEM Melbourne 2025", cityZh: "墨尔本", cityEn: "Melbourne", venue: null, champion: "Team Vitality", tier: "S", note: null },
  { year: 2025, month: 5, name: "BLAST Rivals 2025 Season 1", cityZh: "哥本哈根", cityEn: "Copenhagen", venue: "BLAST Studio", champion: "Team Vitality", tier: "S", note: null },
  { year: 2025, month: 5, name: "PGL Astana 2025", cityZh: "阿斯塔纳", cityEn: "Astana", venue: "Barys Arena", champion: "Team Spirit", tier: "S", note: null },
  { year: 2025, month: 5, name: "IEM Dallas 2025", cityZh: "达拉斯", cityEn: "Dallas", venue: null, champion: "Team Spirit", tier: "S", note: null },
  { year: 2025, month: 6, name: "BLAST.tv Austin Major 2025", cityZh: "奥斯汀", cityEn: "Austin", venue: null, champion: "Team Vitality", tier: "Major", note: null },
  { year: 2025, month: 8, name: "IEM Cologne 2025", cityZh: "科隆", cityEn: "Cologne", venue: "Lanxess Arena", champion: "Team Spirit", tier: "S", note: null },
  { year: 2025, month: 8, name: "BLAST Bounty 2025 Season 2 Finals", cityZh: "阿塔德", cityEn: "Attard", venue: "BLAST Studio", champion: "Team Spirit", tier: "S", note: null },
  { year: 2025, month: 8, name: "Esports World Cup 2025", cityZh: "利雅得", cityEn: "Riyadh", venue: "Boulevard Riyadh City", champion: "The MongolZ", tier: "S", note: null },
  { year: 2025, month: 9, name: "BLAST Open London 2025", cityZh: "伦敦", cityEn: "London", venue: "OVO Arena Wembley", champion: "G2 Esports", tier: "S", note: null },
  { year: 2025, month: 10, name: "ESL Pro League Season 22", cityZh: "斯德哥尔摩", cityEn: "Stockholm", venue: null, champion: "Team Vitality", tier: "S", note: null },
  { year: 2025, month: 11, name: "IEM Chengdu 2025", cityZh: "成都", cityEn: "Chengdu", venue: "Chengdu Financial City Performing Arts Center", champion: "FURIA", tier: "S", note: null },
  { year: 2025, month: 11, name: "BLAST Rivals 2025 Season 2", cityZh: "香港", cityEn: "Hong Kong", venue: "AsiaWorld-Arena", champion: "FURIA", tier: "S", note: null },
  { year: 2025, month: 12, name: "StarLadder Budapest Major 2025", cityZh: "布达佩斯", cityEn: "Budapest", venue: "MTK Sportpark / MVM Dome", champion: "Team Vitality", tier: "Major", note: null },
  { year: 2026, month: 1, name: "BLAST Bounty 2026 Season 1 Finals", cityZh: "阿塔德", cityEn: "Attard", venue: "BLAST Studio", champion: "PARIVISION", tier: "S", note: null },
  { year: 2026, month: 2, name: "IEM Kraków 2026", cityZh: "克拉科夫", cityEn: "Kraków", venue: "TAURON Arena Kraków", champion: "Team Vitality", tier: "S", note: null },
  { year: 2026, month: 2, name: "PGL Cluj-Napoca 2026", cityZh: "克卢日-纳波卡", cityEn: "Cluj-Napoca", venue: "BTarena", champion: "Team Vitality", tier: "S", note: null },
  { year: 2026, month: 3, name: "ESL Pro League Season 23", cityZh: "斯德哥尔摩", cityEn: "Stockholm", venue: "Annexet", champion: "Natus Vincere", tier: "S", note: null },
  { year: 2026, month: 3, name: "BLAST Open Rotterdam 2026", cityZh: "鹿特丹", cityEn: "Rotterdam", venue: "Rotterdam Ahoy", champion: "Team Vitality", tier: "S", note: null },
  { year: 2026, month: 4, name: "PGL Bucharest 2026", cityZh: "布加勒斯特", cityEn: "Bucharest", venue: null, champion: "FUT Esports", tier: "S", note: null },
  { year: 2026, month: 4, name: "IEM Rio 2026", cityZh: "里约热内卢", cityEn: "Rio de Janeiro", venue: null, champion: "Team Vitality", tier: "S", note: null },
  { year: 2026, month: 5, name: "BLAST Rivals 2026 Season 1", cityZh: "沃思堡", cityEn: "Fort Worth", venue: "Dickies Arena", champion: "Team Vitality", tier: "S", note: null },
  { year: 2026, month: 5, name: "PGL Astana 2026", cityZh: "阿斯塔纳", cityEn: "Astana", venue: "Barys Arena", champion: "Team Spirit", tier: "S", note: null },
  { year: 2026, month: 5, name: "IEM Atlanta 2026", cityZh: "亚特兰大", cityEn: "Atlanta", venue: null, champion: "Natus Vincere", tier: "S", note: null },
  { year: 2026, month: 6, name: "IEM Cologne Major 2026", cityZh: "科隆", cityEn: "Cologne", venue: "LANXESS Arena", champion: "Team Falcons", tier: "Major", note: null },
  { year: 2026, month: 8, name: "BLAST Bounty 2026 Season 2 Finals", cityZh: "阿塔德", cityEn: "Attard", venue: "BLAST Studio", champion: "MOUZ", tier: "S", note: null },
  { year: 2026, month: 8, name: "Esports World Cup 2026", cityZh: "巴黎", cityEn: "Paris", venue: "Accor Arena", champion: "Team Spirit", tier: "S", note: null },
  { year: 2026, month: 9, name: "BLAST Open Porto 2026", cityZh: "波尔图", cityEn: "Porto", venue: "Super Bock Arena", champion: "Team Spirit", tier: "S", note: null },
];

export const STIER_YEAR_MIN = 2013;
export const STIER_YEAR_MAX = 2026;
export const STIER_SOURCE = "数据来源：HLTV.org，整理于 2026-09";

type CityMeta = { id: string; city: string; cityZh: string; lat: number; lng: number };

const CITY_BY_EN: Record<string, CityMeta> = {
  Katowice: { id: "katowice", city: "Katowice", cityZh: "卡托维兹", lat: 50.2649, lng: 19.0238 },
  "São Paulo": { id: "sao-paulo", city: "São Paulo", cityZh: "圣保罗", lat: -23.5505, lng: -46.6333 },
  Shanghai: { id: "shanghai", city: "Shanghai", cityZh: "上海", lat: 31.2304, lng: 121.4737 },
  Miami: { id: "miami", city: "Miami", cityZh: "迈阿密", lat: 25.7617, lng: -80.1918 },
  Madrid: { id: "madrid", city: "Madrid", cityZh: "马德里", lat: 40.4168, lng: -3.7038 },
  "Los Angeles": { id: "los-angeles", city: "Los Angeles", cityZh: "洛杉矶", lat: 34.0522, lng: -118.2437 },
  Dallas: { id: "dallas", city: "Dallas", cityZh: "达拉斯", lat: 32.7767, lng: -96.797 },
  Montpellier: { id: "montpellier", city: "Montpellier", cityZh: "蒙彼利埃", lat: 43.6108, lng: 3.8767 },
  London: { id: "london", city: "London", cityZh: "伦敦", lat: 51.5074, lng: -0.1278 },
  Chicago: { id: "chicago", city: "Chicago", cityZh: "芝加哥", lat: 41.8781, lng: -87.6298 },
  Berlin: { id: "berlin", city: "Berlin", cityZh: "柏林", lat: 52.52, lng: 13.405 },
  Moscow: { id: "moscow", city: "Moscow", cityZh: "莫斯科", lat: 55.7558, lng: 37.6173 },
  "New York": { id: "new-york", city: "New York", cityZh: "纽约", lat: 40.7128, lng: -74.006 },
  Malmö: { id: "malmo", city: "Malmö", cityZh: "马尔默", lat: 55.605, lng: 13.0038 },
  Belek: { id: "belek", city: "Belek", cityZh: "贝莱克", lat: 36.8625, lng: 31.0606 },
  Beijing: { id: "beijing", city: "Beijing", cityZh: "北京", lat: 39.9042, lng: 116.4074 },
  Copenhagen: { id: "copenhagen", city: "Copenhagen", cityZh: "哥本哈根", lat: 55.6761, lng: 12.5683 },
  Arlington: { id: "arlington", city: "Arlington", cityZh: "阿灵顿", lat: 32.7357, lng: -97.1081 },
  Odense: { id: "odense", city: "Odense", cityZh: "欧登塞", lat: 55.4038, lng: 10.4024 },
  Riffa: { id: "riffa", city: "Riffa", cityZh: "里法", lat: 26.13, lng: 50.555 },
  "St. Julian's": { id: "malta", city: "Malta", cityZh: "马耳他", lat: 35.9136, lng: 14.4786 },
  Malta: { id: "malta", city: "Malta", cityZh: "马耳他", lat: 35.9136, lng: 14.4786 },
  Attard: { id: "malta", city: "Malta", cityZh: "马耳他", lat: 35.9136, lng: 14.4786 },
  Cologne: { id: "cologne", city: "Cologne", cityZh: "科隆", lat: 50.9375, lng: 6.9603 },
  Stockholm: { id: "stockholm", city: "Stockholm", cityZh: "斯德哥尔摩", lat: 59.3293, lng: 18.0686 },
  Düsseldorf: { id: "dusseldorf", city: "Düsseldorf", cityZh: "杜塞尔多夫", lat: 51.2277, lng: 6.7735 },
  Antwerp: { id: "antwerp", city: "Antwerp", cityZh: "安特卫普", lat: 51.2194, lng: 4.4025 },
  Lisbon: { id: "lisbon", city: "Lisbon", cityZh: "里斯本", lat: 38.7223, lng: -9.1393 },
  "Rio de Janeiro": { id: "rio", city: "Rio de Janeiro", cityZh: "里约热内卢", lat: -22.9068, lng: -43.1729 },
  "Abu Dhabi": { id: "abu-dhabi", city: "Abu Dhabi", cityZh: "阿布扎比", lat: 24.4539, lng: 54.3773 },
  Paris: { id: "paris", city: "Paris", cityZh: "巴黎", lat: 48.8566, lng: 2.3522 },
  "Washington, D.C.": { id: "washington", city: "Washington, D.C.", cityZh: "华盛顿", lat: 38.9072, lng: -77.0369 },
  Riyadh: { id: "riyadh", city: "Riyadh", cityZh: "利雅得", lat: 24.7136, lng: 46.6753 },
  Sydney: { id: "sydney", city: "Sydney", cityZh: "悉尼", lat: -33.8688, lng: 151.2093 },
  Chengdu: { id: "chengdu", city: "Chengdu", cityZh: "成都", lat: 30.5728, lng: 104.0668 },
  Singapore: { id: "singapore", city: "Singapore", cityZh: "新加坡", lat: 1.3521, lng: 103.8198 },
  "Cluj-Napoca": { id: "cluj", city: "Cluj-Napoca", cityZh: "克卢日-纳波卡", lat: 46.7712, lng: 23.6236 },
  Bucharest: { id: "bucharest", city: "Bucharest", cityZh: "布加勒斯特", lat: 44.4268, lng: 26.1025 },
  Melbourne: { id: "melbourne", city: "Melbourne", cityZh: "墨尔本", lat: -37.8136, lng: 144.9631 },
  Astana: { id: "astana", city: "Astana", cityZh: "阿斯塔纳", lat: 51.1694, lng: 71.4491 },
  Austin: { id: "austin", city: "Austin", cityZh: "奥斯汀", lat: 30.2672, lng: -97.7431 },
  "Hong Kong": { id: "hong-kong", city: "Hong Kong", cityZh: "香港", lat: 22.3193, lng: 114.1694 },
  Budapest: { id: "budapest", city: "Budapest", cityZh: "布达佩斯", lat: 47.4979, lng: 19.0402 },
  Kraków: { id: "krakow", city: "Kraków", cityZh: "克拉科夫", lat: 50.0647, lng: 19.945 },
  Rotterdam: { id: "rotterdam", city: "Rotterdam", cityZh: "鹿特丹", lat: 51.9244, lng: 4.4777 },
  "Fort Worth": { id: "fort-worth", city: "Fort Worth", cityZh: "沃思堡", lat: 32.7555, lng: -97.3308 },
  Atlanta: { id: "atlanta", city: "Atlanta", cityZh: "亚特兰大", lat: 33.749, lng: -84.388 },
  Porto: { id: "porto", city: "Porto", cityZh: "波尔图", lat: 41.1579, lng: -8.6291 },

  // Added for 2013–2018 hosts. Existing coordinates above are unchanged.
  "Jönköping": { id: "jonkoping", city: "Jönköping", cityZh: "延雪平", lat: 57.7826, lng: 14.1618 },
  Kyiv: { id: "kyiv", city: "Kyiv", cityZh: "基辅", lat: 50.4501, lng: 30.5234 },
  Kiev: { id: "kyiv", city: "Kyiv", cityZh: "基辅", lat: 50.4501, lng: 30.5234 },
  Columbus: { id: "columbus", city: "Columbus", cityZh: "哥伦布", lat: 39.9612, lng: -82.9988 },
  Oakland: { id: "oakland", city: "Oakland", cityZh: "奥克兰", lat: 37.8044, lng: -122.2712 },
  "San Jose": { id: "san-jose", city: "San Jose", cityZh: "圣何塞", lat: 37.3382, lng: -121.8863 },
  "Las Vegas": { id: "las-vegas", city: "Las Vegas", cityZh: "拉斯维加斯", lat: 36.1699, lng: -115.1398 },
  "Belo Horizonte": { id: "belo-horizonte", city: "Belo Horizonte", cityZh: "贝洛奥里藏特", lat: -19.9167, lng: -43.9345 },
  Birmingham: { id: "birmingham", city: "Birmingham", cityZh: "伯明翰", lat: 52.4862, lng: -1.8904 },
  Cancun: { id: "cancun", city: "Cancun", cityZh: "坎昆", lat: 21.1619, lng: -86.8515 },
  Toronto: { id: "toronto", city: "Toronto", cityZh: "多伦多", lat: 43.6532, lng: -79.3832 },
  Montreal: { id: "montreal", city: "Montreal", cityZh: "蒙特利尔", lat: 45.5017, lng: -73.5673 },
  Marseille: { id: "marseille", city: "Marseille", cityZh: "马赛", lat: 43.2965, lng: 5.3698 },
  Boston: { id: "boston", city: "Boston", cityZh: "波士顿", lat: 42.3601, lng: -71.0589 },
  "Saint Petersburg": { id: "saint-petersburg", city: "Saint Petersburg", cityZh: "圣彼得堡", lat: 59.9311, lng: 30.3609 },
  Minsk: { id: "minsk", city: "Minsk", cityZh: "明斯克", lat: 53.9006, lng: 27.559 },
  Istanbul: { id: "istanbul", city: "Istanbul", cityZh: "伊斯坦布尔", lat: 41.0082, lng: 28.9784 },
  Dubai: { id: "dubai", city: "Dubai", cityZh: "迪拜", lat: 25.2048, lng: 55.2708 },
  Milan: { id: "milan", city: "Milan", cityZh: "米兰", lat: 45.4642, lng: 9.19 },
  Leipzig: { id: "leipzig", city: "Leipzig", cityZh: "莱比锡", lat: 51.3397, lng: 12.3731 },
  Valencia: { id: "valencia", city: "Valencia", cityZh: "瓦伦西亚", lat: 39.4699, lng: -0.3763 },
  Vilnius: { id: "vilnius", city: "Vilnius", cityZh: "维尔纽斯", lat: 54.6872, lng: 25.2797 },
  Burbank: { id: "burbank", city: "Burbank", cityZh: "伯班克", lat: 34.1808, lng: -118.309 },
  "Costa Mesa": { id: "costa-mesa", city: "Costa Mesa", cityZh: "科斯塔梅萨", lat: 33.6411, lng: -117.9187 },
  Anaheim: { id: "anaheim", city: "Anaheim", cityZh: "阿纳海姆", lat: 33.8366, lng: -117.9143 },
  Mykonos: { id: "mykonos", city: "Mykonos", cityZh: "米科诺斯", lat: 37.4467, lng: 25.3289 },
  Haikou: { id: "haikou", city: "Haikou", cityZh: "海口", lat: 20.044, lng: 110.1999 },
  Changzhou: { id: "changzhou", city: "Changzhou", cityZh: "常州", lat: 31.8107, lng: 119.9741 },
};

const HOLY_IDS = new Set(["katowice", "cologne", "copenhagen", "dallas", "malta", "stockholm", "rio"]);

const CHAMPION_KEYS: [RegExp, string][] = [
  [/vitality/i, "vitality"],
  [/natus|navi/i, "navi"],
  [/spirit/i, "spirit"],
  [/faze/i, "faze"],
  [/^g2\b/i, "g2"],
  [/liquid/i, "liquid"],
  [/mouz|mousesports/i, "mouz"],
  [/heroic/i, "heroic"],
  [/astralis/i, "astralis"],
  [/ence/i, "ence"],
  [/evil genius/i, "eg"],
  [/fnatic/i, "fnatic"],
  [/cloud\s?9/i, "cloud9"],
  [/outsider/i, "outsiders"],
  [/mongol/i, "mongolz"],
  [/falcon/i, "falcons"],
  [/furia/i, "furia"],
  [/parivision/i, "parivision"],
  [/\bfut\b/i, "fut"],
  [/avangar/i, "avangar"],
  [/ninjas in pyjamas/i, "nip"],
  [/virtus\.?\s?pro/i, "virtuspro"],
  [/verygames/i, "verygames"],
  [/clan-mystik/i, "clanmystik"],
  [/ldlc/i, "ldlc"],
  [/solo\s?mid/i, "tsm"],
  [/envyus/i, "envyus"],
  [/luminosity/i, "luminosity"],
  [/tempo storm/i, "tempo"],
  [/immortals/i, "immortals"],
  [/\bsk gaming\b/i, "sk"],
  [/optic/i, "optic"],
  [/dignitas/i, "dignitas"],
  [/gambit/i, "gambit"],
  [/^north$/i, "north"],
  [/\bnrg\b/i, "nrg"],
  [/^titan$/i, "titan"],
];

export function championKey(name: string) {
  for (const [re, key] of CHAMPION_KEYS) {
    if (re.test(name)) return key;
  }
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const CHAMPION_LABEL: Record<string, string> = {
  vitality: "Team Vitality",
  navi: "Natus Vincere",
  spirit: "Team Spirit",
  faze: "FaZe Clan",
  g2: "G2 Esports",
  liquid: "Team Liquid",
  mouz: "MOUZ",
  heroic: "Heroic",
  astralis: "Astralis",
  ence: "ENCE",
  eg: "Evil Geniuses",
  fnatic: "fnatic",
  cloud9: "Cloud9",
  outsiders: "Outsiders",
  mongolz: "The MongolZ",
  falcons: "Team Falcons",
  furia: "FURIA",
  parivision: "PARIVISION",
  fut: "FUT Esports",
  avangar: "AVANGAR",
  nip: "Ninjas in Pyjamas",
  virtuspro: "Virtus.pro",
  verygames: "VeryGames",
  clanmystik: "Clan-Mystik",
  ldlc: "LDLC",
  tsm: "Team SoloMid",
  envyus: "EnVyUs",
  luminosity: "Luminosity Gaming",
  tempo: "Tempo Storm",
  immortals: "Immortals",
  sk: "SK Gaming",
  optic: "OpTic Gaming",
  dignitas: "Team Dignitas",
  gambit: "Gambit Esports",
  north: "North",
  nrg: "NRG Esports",
  titan: "Titan",
};

function buildCities(events: STierEvent[]): STierCity[] {
  const map = new Map<string, STierCity>();
  for (const ev of events) {
    const meta = CITY_BY_EN[ev.cityEn];
    if (!meta) continue;
    let city = map.get(meta.id);
    if (!city) {
      city = {
        id: meta.id,
        city: meta.city,
        cityZh: meta.cityZh,
        lat: meta.lat,
        lng: meta.lng,
        holy: HOLY_IDS.has(meta.id),
        events: [],
      };
      map.set(meta.id, city);
    }
    city.events.push(ev);
  }
  for (const city of map.values()) {
    city.events.sort((a, b) => b.year - a.year || b.month - a.month);
    if (city.events.length >= 4) city.holy = true;
  }
  return [...map.values()].sort((a, b) => b.events.length - a.events.length);
}

export const S_TIER_CITIES: STierCity[] = buildCities(S_TIER_EVENTS);

export function eventStamp(ev: STierEvent) {
  return ev.year * 100 + ev.month;
}

export function citiesUpToYear(year: number): STierCity[] {
  return S_TIER_CITIES.map((city) => ({
    ...city,
    events: city.events.filter((ev) => ev.year <= year),
  })).filter((city) => city.events.length > 0);
}

export function cityHasTeam(city: STierCity, team: string | null) {
  if (!team) return false;
  return city.events.some((ev) => championKey(ev.champion) === team);
}

export function countEventsUpToYear(year: number) {
  return S_TIER_EVENTS.filter((ev) => ev.year <= year).length;
}

export function formatEventLine(ev: STierEvent) {
  return `${ev.year}年${ev.month}月 —— ${ev.champion} —— ${ev.name}`;
}
