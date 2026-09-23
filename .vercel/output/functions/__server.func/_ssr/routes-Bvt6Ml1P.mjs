import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Vector3 } from "../_libs/@react-three/fiber+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as Navigation, c as MapPinPlus, d as Earth, f as Check, i as Search, l as List, n as Trophy, o as Medal, s as MapPin, t as X, u as Grid3x3 } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bvt6Ml1P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var BORDER_RADIUS = 1.006;
var FILL_RADIUS = 1.004;
var MARKER_RADIUS = 1.02;
var GRATICULE_RADIUS = 1.002;
var DEG = Math.PI / 180;
var RAD = 180 / Math.PI;
/** Convert geodetic lat/lng (degrees) to a point on a sphere matching THREE.SphereGeometry UVs. */
function latLngToVector3(lat, lng, radius = 1, target = new Vector3()) {
	const phi = (90 - lat) * DEG;
	const theta = (lng + 180) * DEG;
	const sinPhi = Math.sin(phi);
	return target.set(-radius * Math.cos(theta) * sinPhi, radius * Math.cos(phi), radius * Math.sin(theta) * sinPhi);
}
function vector3ToLatLng(v) {
	const r = v.length() || 1;
	const lat = 90 - Math.acos(Math.min(1, Math.max(-1, v.y / r))) * RAD;
	let lng = Math.atan2(v.z, -v.x) * RAD - 180;
	if (lng < -180) lng += 360;
	if (lng > 180) lng -= 360;
	return {
		lat,
		lng
	};
}
function formatCoord(lat, lng) {
	const ns = lat >= 0 ? "N" : "S";
	const ew = lng >= 0 ? "E" : "W";
	return `${Math.abs(lat).toFixed(2)}°${ns}  ${Math.abs(lng).toFixed(2)}°${ew}`;
}
function shortestAngle(from, to) {
	let d = to - from;
	while (d > Math.PI) d -= Math.PI * 2;
	while (d < -Math.PI) d += Math.PI * 2;
	return d;
}
function easeInOutCubic(t) {
	return t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}
/** LAN S-tier / Major events 2013–2026. Source: HLTV.org, compiled 2026-09. */
var S_TIER_EVENTS = [
	{
		year: 2013,
		month: 4,
		name: "SLTV StarSeries V Finals",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: null,
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2013,
		month: 6,
		name: "DreamHack Summer 2013",
		cityZh: "延雪平",
		cityEn: "Jönköping",
		venue: "Elmia",
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2013,
		month: 6,
		name: "RaidCall EMS One Summer 2013 Finals",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: null,
		champion: "VeryGames",
		tier: "S",
		note: null
	},
	{
		year: 2013,
		month: 7,
		name: "SLTV StarSeries VI Finals",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: null,
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2013,
		month: 9,
		name: "DreamHack Bucharest 2013",
		cityZh: "布加勒斯特",
		cityEn: "Bucharest",
		venue: null,
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2013,
		month: 10,
		name: "SLTV StarSeries VII Finals",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: null,
		champion: "VeryGames",
		tier: "S",
		note: null
	},
	{
		year: 2013,
		month: 10,
		name: "RaidCall EMS One Fall 2013 Finals",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "ESL TV Studio",
		champion: "VeryGames",
		tier: "S",
		note: null
	},
	{
		year: 2013,
		month: 11,
		name: "ESWC 2013",
		cityZh: "巴黎",
		cityEn: "Paris",
		venue: null,
		champion: "Clan-Mystik",
		tier: "S",
		note: null
	},
	{
		year: 2013,
		month: 11,
		name: "DreamHack Winter 2013",
		cityZh: "延雪平",
		cityEn: "Jönköping",
		venue: "Elmia Exhibition and Convention Centre",
		champion: "Fnatic",
		tier: "Major",
		note: null
	},
	{
		year: 2014,
		month: 3,
		name: "EMS One Katowice 2014",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "Virtus.pro",
		tier: "Major",
		note: null
	},
	{
		year: 2014,
		month: 4,
		name: "Copenhagen Games 2014",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: null,
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 5,
		name: "SLTV StarSeries IX Finals",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: "Kiev Cybersport Arena",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 6,
		name: "DreamHack Summer 2014",
		cityZh: "延雪平",
		cityEn: "Jönköping",
		venue: null,
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 8,
		name: "Gfinity G3",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "Copper Box Arena",
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 8,
		name: "ESL One Cologne 2014",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "Cologne Exhibition Centre",
		champion: "Ninjas in Pyjamas",
		tier: "Major",
		note: null
	},
	{
		year: 2014,
		month: 8,
		name: "SLTV StarSeries X Finals",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: null,
		champion: "Fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 9,
		name: "DreamHack Stockholm Invitational 2014",
		cityZh: "斯德哥尔摩",
		cityEn: "Stockholm",
		venue: null,
		champion: "Titan",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 10,
		name: "SLTV StarSeries XI Finals",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: null,
		champion: "LDLC",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 10,
		name: "FACEIT League Season 2 Finals",
		cityZh: "米兰",
		cityEn: "Milan",
		venue: null,
		champion: "Fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 11,
		name: "ESWC 2014",
		cityZh: "巴黎",
		cityEn: "Paris",
		venue: null,
		champion: "Fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2014,
		month: 11,
		name: "DreamHack Winter 2014",
		cityZh: "延雪平",
		cityEn: "Jönköping",
		venue: "Elmia",
		champion: "Team LDLC.com",
		tier: "Major",
		note: null
	},
	{
		year: 2015,
		month: 3,
		name: "ESL One Katowice 2015",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "fnatic",
		tier: "Major",
		note: null
	},
	{
		year: 2015,
		month: 4,
		name: "ESEA Invite Season 18 Global Finals",
		cityZh: "达拉斯",
		cityEn: "Dallas",
		venue: null,
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2015,
		month: 7,
		name: "ESL ESEA Pro League Season 1 Finals",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "ESL Studios Cologne",
		champion: "fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2015,
		month: 7,
		name: "FACEIT League 2015 Stage 2 Finals",
		cityZh: "瓦伦西亚",
		cityEn: "Valencia",
		venue: "Feria Valencia",
		champion: "Team SoloMid",
		tier: "S",
		note: null
	},
	{
		year: 2015,
		month: 8,
		name: "ESL One Cologne 2015",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "LANXESS Arena",
		champion: "fnatic",
		tier: "Major",
		note: null
	},
	{
		year: 2015,
		month: 9,
		name: "ESL ESEA Dubai Invitational 2015",
		cityZh: "迪拜",
		cityEn: "Dubai",
		venue: "Dubai International Marina Club",
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2015,
		month: 9,
		name: "Gfinity Champion of Champions 2015",
		cityZh: "伯明翰",
		cityEn: "Birmingham",
		venue: "National Exhibition Centre",
		champion: "Team EnVyUs",
		tier: "S",
		note: null
	},
	{
		year: 2015,
		month: 11,
		name: "DreamHack Open Cluj-Napoca 2015",
		cityZh: "克卢日-纳波卡",
		cityEn: "Cluj-Napoca",
		venue: "Sala Polivalentă",
		champion: "Team EnVyUs",
		tier: "Major",
		note: null
	},
	{
		year: 2015,
		month: 11,
		name: "CEVO Professional Season 8 Finals",
		cityZh: "哥伦布",
		cityEn: "Columbus",
		venue: "MLG.tv Arena",
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2015,
		month: 11,
		name: "Intel Extreme Masters X San Jose 2015",
		cityZh: "圣何塞",
		cityEn: "San Jose",
		venue: "SAP Center at San Jose",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2015,
		month: 11,
		name: "FACEIT League 2015 Stage 3 Finals",
		cityZh: "延雪平",
		cityEn: "Jönköping",
		venue: "Elmia",
		champion: "fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2015,
		month: 12,
		name: "ESL ESEA Pro League Season 2 Finals",
		cityZh: "伯班克",
		cityEn: "Burbank",
		venue: "ESL Studios Burbank",
		champion: "fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 1,
		name: "StarLadder i-League StarSeries XIV Finals 2016",
		cityZh: "明斯克",
		cityEn: "Minsk",
		venue: "Minsk Arena",
		champion: "fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 1,
		name: "DreamHack Open Leipzig 2016",
		cityZh: "莱比锡",
		cityEn: "Leipzig",
		venue: "Leipzig Trade Fair",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 2,
		name: "Game Show Global eSports Cup 2016 Finals",
		cityZh: "维尔纽斯",
		cityEn: "Vilnius",
		venue: "Game Show Studios",
		champion: "Team EnVyUs",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 3,
		name: "IEM Katowice 2016",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 4,
		name: "MLG Major Championship: Columbus 2016",
		cityZh: "哥伦布",
		cityEn: "Columbus",
		venue: "Nationwide Arena",
		champion: "Luminosity Gaming",
		tier: "Major",
		note: null
	},
	{
		year: 2016,
		month: 4,
		name: "DreamHack Masters Malmö 2016",
		cityZh: "马尔默",
		cityEn: "Malmö",
		venue: "Malmö Arena",
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 5,
		name: "CEVO Pro League Season 9 2016",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "Gfinity Arena",
		champion: "Tempo Storm",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 5,
		name: "DreamHack Open Austin 2016",
		cityZh: "奥斯汀",
		cityEn: "Austin",
		venue: "Austin Convention Center",
		champion: "Luminosity Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 5,
		name: "ESL Pro League Season 3 Finals 2016",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "indigo at The O2",
		champion: "Luminosity Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 5,
		name: "StarLadder i-League Invitational #1 2016",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: "NSK \"Olympic\"",
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 6,
		name: "DreamHack ZOWIE Open Summer 2016",
		cityZh: "延雪平",
		cityEn: "Jönköping",
		venue: "Elmia Exhibition Centre",
		champion: "Immortals",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 6,
		name: "ECS Season 1 Finals 2016",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "The SSE Arena, Wembley",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 7,
		name: "ESL One Cologne 2016",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "LANXESS Arena",
		champion: "SK Gaming",
		tier: "Major",
		note: null
	},
	{
		year: 2016,
		month: 7,
		name: "ELEAGUE Season 1 2016",
		cityZh: "亚特兰大",
		cityEn: "Atlanta",
		venue: "Turner Studios",
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 9,
		name: "Northern Arena 2016 - Toronto",
		cityZh: "多伦多",
		cityEn: "Toronto",
		venue: "Metro Toronto Convention Centre",
		champion: "Immortals",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 9,
		name: "SL i-League StarSeries Season 2 Finals 2016",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: "National Palace of Arts \"Ukraina\"",
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 9,
		name: "DreamHack ZOWIE Open Bucharest 2016",
		cityZh: "布加勒斯特",
		cityEn: "Bucharest",
		venue: "Polyvalent Hall",
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 9,
		name: "Gfinity CS:GO Invitational 2016",
		cityZh: "伯明翰",
		cityEn: "Birmingham",
		venue: null,
		champion: "Team EnVyUs",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 10,
		name: "ESL One New York 2016",
		cityZh: "纽约",
		cityEn: "New York",
		venue: "Barclays Center",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 10,
		name: "EPICENTER 2016",
		cityZh: "莫斯科",
		cityEn: "Moscow",
		venue: "VTB Ice Palace",
		champion: "Team Dignitas",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 10,
		name: "ESL Pro League Season 4 Finals 2016",
		cityZh: "圣保罗",
		cityEn: "São Paulo",
		venue: "Ginásio do Ibirapuera",
		champion: "Cloud9",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 11,
		name: "iBUYPOWER Masters 2016",
		cityZh: "科斯塔梅萨",
		cityEn: "Costa Mesa",
		venue: "Orange County Fairgrounds",
		champion: "Immortals",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 11,
		name: "Northern Arena 2016 - Montreal",
		cityZh: "蒙特利尔",
		cityEn: "Montreal",
		venue: "Bell Centre",
		champion: "OpTic Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 11,
		name: "IEM Oakland 2016",
		cityZh: "奥克兰",
		cityEn: "Oakland",
		venue: "Oracle Arena",
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 11,
		name: "DreamHack ZOWIE Open Winter 2016",
		cityZh: "延雪平",
		cityEn: "Jönköping",
		venue: "Elmia Exhibition and Convention Centre",
		champion: "Gambit Esports",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 12,
		name: "ELEAGUE Season 2 2016",
		cityZh: "亚特兰大",
		cityEn: "Atlanta",
		venue: "Turner Studios",
		champion: "OpTic Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2016,
		month: 12,
		name: "ECS Season 2 Finals 2016",
		cityZh: "阿纳海姆",
		cityEn: "Anaheim",
		venue: "Anaheim Convention Center Arena",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 1,
		name: "ELEAGUE Major Atlanta 2017",
		cityZh: "亚特兰大",
		cityEn: "Atlanta",
		venue: "Fox Theatre",
		champion: "Astralis",
		tier: "Major",
		note: null
	},
	{
		year: 2017,
		month: 1,
		name: "WESG 2016 World Finals",
		cityZh: "常州",
		cityEn: "Changzhou",
		venue: null,
		champion: "EnVyUs",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 2,
		name: "DreamHack Masters Las Vegas 2017",
		cityZh: "拉斯维加斯",
		cityEn: "Las Vegas",
		venue: "MGM Grand Garden Arena",
		champion: "Virtus.pro",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 3,
		name: "IEM Katowice 2017",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek Arena",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 4,
		name: "StarSeries i-League Season 3",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: "National Palace of Arts \"Ukraina\"",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 4,
		name: "cs_summit 1",
		cityZh: "洛杉矶",
		cityEn: "Los Angeles",
		venue: "Summit House",
		champion: "SK Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 5,
		name: "IEM Sydney 2017",
		cityZh: "悉尼",
		cityEn: "Sydney",
		venue: "Qudos Bank Arena",
		champion: "SK Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 6,
		name: "ESL Pro League Season 5 Finals",
		cityZh: "达拉斯",
		cityEn: "Dallas",
		venue: "Verizon Theatre",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 6,
		name: "ECS Season 3 Finals",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "SSE Arena Wembley",
		champion: "SK Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 7,
		name: "ESL One Cologne 2017",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "Lanxess Arena",
		champion: "SK Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 7,
		name: "PGL Major Kraków 2017",
		cityZh: "克拉科夫",
		cityEn: "Kraków",
		venue: "Tauron Arena Kraków",
		champion: "Gambit Esports",
		tier: "Major",
		note: null
	},
	{
		year: 2017,
		month: 9,
		name: "DreamHack Masters Malmö 2017",
		cityZh: "马尔默",
		cityEn: "Malmö",
		venue: "Malmö Arena",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 9,
		name: "ESG Tour Mykonos 2017",
		cityZh: "米科诺斯",
		cityEn: "Mykonos",
		venue: "Destiny Villa",
		champion: "mousesports",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 9,
		name: "ESL One New York 2017",
		cityZh: "纽约",
		cityEn: "New York",
		venue: "Barclays Center",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 10,
		name: "ELEAGUE CS:GO Premier 2017",
		cityZh: "亚特兰大",
		cityEn: "Atlanta",
		venue: "Turner Studios",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 10,
		name: "EPICENTER 2017",
		cityZh: "圣彼得堡",
		cityEn: "Saint Petersburg",
		venue: "Yubileyny Sports Palace",
		champion: "SK Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 11,
		name: "IEM Oakland 2017",
		cityZh: "奥克兰",
		cityEn: "Oakland",
		venue: "Oracle Arena",
		champion: "Ninjas in Pyjamas",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 11,
		name: "BLAST Pro Series Copenhagen 2017",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "Royal Arena",
		champion: "SK Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 12,
		name: "ESL Pro League Season 6 Finals",
		cityZh: "欧登塞",
		cityEn: "Odense",
		venue: "Sparekassen Fyn Arena",
		champion: "SK Gaming",
		tier: "S",
		note: null
	},
	{
		year: 2017,
		month: 12,
		name: "ECS Season 4 Finals",
		cityZh: "坎昆",
		cityEn: "Cancun",
		venue: "Hard Rock Hotel",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 1,
		name: "ELEAGUE Major Boston 2018",
		cityZh: "波士顿",
		cityEn: "Boston",
		venue: "Agganis Arena",
		champion: "Cloud9",
		tier: "Major",
		note: null
	},
	{
		year: 2018,
		month: 2,
		name: "StarSeries i-League Season 4",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: "Kyiv Cybersport Arena",
		champion: "mousesports",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 3,
		name: "IEM Katowice 2018",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 3,
		name: "WESG 2017 World Finals",
		cityZh: "海口",
		cityEn: "Haikou",
		venue: "Haikou Exhibition & Convention Center",
		champion: "fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 4,
		name: "DreamHack Masters Marseille 2018",
		cityZh: "马赛",
		cityEn: "Marseille",
		venue: "Le Dôme de Marseille",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 5,
		name: "IEM Sydney 2018",
		cityZh: "悉尼",
		cityEn: "Sydney",
		venue: "Qudos Bank Arena",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 5,
		name: "ESL Pro League Season 7 Finals",
		cityZh: "达拉斯",
		cityEn: "Dallas",
		venue: "Verizon Theatre",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 5,
		name: "cs_summit 2",
		cityZh: "洛杉矶",
		cityEn: "Los Angeles",
		venue: null,
		champion: "Team Liquid",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 6,
		name: "StarSeries i-League Season 5",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: "National Palace of Arts \"Ukraina\"",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 6,
		name: "ECS Season 5 Finals",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "SSE Arena Wembley",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 6,
		name: "ESL One Belo Horizonte 2018",
		cityZh: "贝洛奥里藏特",
		cityEn: "Belo Horizonte",
		venue: "Mineirinho Arena",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 6,
		name: "CS:GO Asia Championships 2018",
		cityZh: "上海",
		cityEn: "Shanghai",
		venue: "Yuanshen Gymnasium",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 7,
		name: "ELEAGUE CS:GO Premier 2018",
		cityZh: "亚特兰大",
		cityEn: "Atlanta",
		venue: "Turner Studios",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 9,
		name: "DreamHack Masters Stockholm 2018",
		cityZh: "斯德哥尔摩",
		cityEn: "Stockholm",
		venue: "Ericsson Globe",
		champion: "North",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 9,
		name: "FACEIT Major London 2018",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "SSE Arena Wembley",
		champion: "Astralis",
		tier: "Major",
		note: null
	},
	{
		year: 2018,
		month: 9,
		name: "BLAST Pro Series Istanbul 2018",
		cityZh: "伊斯坦布尔",
		cityEn: "Istanbul",
		venue: "Ülker Sports Arena",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 9,
		name: "ESL One New York 2018",
		cityZh: "纽约",
		cityEn: "New York",
		venue: "Barclays Center",
		champion: "mousesports",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 10,
		name: "StarSeries i-League Season 6",
		cityZh: "基辅",
		cityEn: "Kyiv",
		venue: "Kyiv Cybersport Arena",
		champion: "ENCE",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 10,
		name: "EPICENTER 2018",
		cityZh: "莫斯科",
		cityEn: "Moscow",
		venue: "CSKA Arena",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 11,
		name: "BLAST Pro Series Copenhagen 2018",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "Royal Arena",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 11,
		name: "IEM Chicago 2018",
		cityZh: "芝加哥",
		cityEn: "Chicago",
		venue: "Wintrust Arena",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 11,
		name: "ECS Season 6 Finals",
		cityZh: "阿灵顿",
		cityEn: "Arlington",
		venue: "Esports Stadium Arlington",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 11,
		name: "cs_summit 3",
		cityZh: "洛杉矶",
		cityEn: "Los Angeles",
		venue: null,
		champion: "NRG Esports",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 12,
		name: "ESL Pro League Season 8 Finals",
		cityZh: "欧登塞",
		cityEn: "Odense",
		venue: "Sparekassen Fyn Arena",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2018,
		month: 12,
		name: "BLAST Pro Series Lisbon 2018",
		cityZh: "里斯本",
		cityEn: "Lisbon",
		venue: "Altice Arena",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 3,
		name: "IEM Katowice Major 2019",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "Astralis",
		tier: "Major",
		note: null
	},
	{
		year: 2019,
		month: 3,
		name: "BLAST Pro Series São Paulo 2019",
		cityZh: "圣保罗",
		cityEn: "São Paulo",
		venue: "Ginásio do Ibirapuera",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 4,
		name: "StarSeries i-League Season 7",
		cityZh: "上海",
		cityEn: "Shanghai",
		venue: null,
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 4,
		name: "BLAST Pro Series Miami 2019",
		cityZh: "迈阿密",
		cityEn: "Miami",
		venue: "Watsco Center",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 5,
		name: "BLAST Pro Series Madrid 2019",
		cityZh: "马德里",
		cityEn: "Madrid",
		venue: "Madrid Arena",
		champion: "ENCE",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 5,
		name: "cs_summit 4",
		cityZh: "洛杉矶",
		cityEn: "Los Angeles",
		venue: null,
		champion: "Team Liquid",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 6,
		name: "DreamHack Masters Dallas 2019",
		cityZh: "达拉斯",
		cityEn: "Dallas",
		venue: "Kay Bailey Hutchison Convention Center",
		champion: "Team Liquid",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 6,
		name: "ESL Pro League Season 9 Finals",
		cityZh: "蒙彼利埃",
		cityEn: "Montpellier",
		venue: null,
		champion: "Team Liquid",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 6,
		name: "ECS Season 7 Finals",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "SSE Arena Wembley",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 7,
		name: "BLAST Pro Series Los Angeles 2019",
		cityZh: "洛杉矶",
		cityEn: "Los Angeles",
		venue: null,
		champion: "Team Liquid",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 7,
		name: "IEM Chicago 2019",
		cityZh: "芝加哥",
		cityEn: "Chicago",
		venue: null,
		champion: "Team Liquid",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 9,
		name: "StarLadder Berlin Major 2019",
		cityZh: "柏林",
		cityEn: "Berlin",
		venue: "Mercedes-Benz Arena",
		champion: "Astralis",
		tier: "Major",
		note: null
	},
	{
		year: 2019,
		month: 9,
		name: "BLAST Pro Series Moscow 2019",
		cityZh: "莫斯科",
		cityEn: "Moscow",
		venue: "VTB Arena",
		champion: "AVANGAR",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 9,
		name: "ESL One New York 2019",
		cityZh: "纽约",
		cityEn: "New York",
		venue: "Barclays Center",
		champion: "Evil Geniuses",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 10,
		name: "DreamHack Masters Malmö 2019",
		cityZh: "马尔默",
		cityEn: "Malmö",
		venue: "Malmö Arena",
		champion: "fnatic",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 10,
		name: "StarSeries i-League Season 8",
		cityZh: "贝莱克",
		cityEn: "Belek",
		venue: null,
		champion: "Evil Geniuses",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 11,
		name: "IEM Beijing 2019",
		cityZh: "北京",
		cityEn: "Beijing",
		venue: null,
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 11,
		name: "BLAST Pro Series Copenhagen 2019",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "Royal Arena",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 12,
		name: "ECS Season 8 Finals",
		cityZh: "阿灵顿",
		cityEn: "Arlington",
		venue: "Esports Stadium Arlington",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 12,
		name: "ESL Pro League Season 10 Finals",
		cityZh: "欧登塞",
		cityEn: "Odense",
		venue: null,
		champion: "mousesports",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 12,
		name: "BLAST Pro Series Global Final 2019",
		cityZh: "里法",
		cityEn: "Riffa",
		venue: "ISA Sports City",
		champion: "Astralis",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 12,
		name: "cs_summit 5",
		cityZh: "洛杉矶",
		cityEn: "Los Angeles",
		venue: null,
		champion: "mousesports",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 12,
		name: "EPICENTER 2019",
		cityZh: "莫斯科",
		cityEn: "Moscow",
		venue: null,
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2019,
		month: 12,
		name: "Champions Cup Finals 2019",
		cityZh: "圣朱利安斯",
		cityEn: "St. Julian's",
		venue: "Intercontinental Conference Centre Arena",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2020,
		month: 3,
		name: "IEM Katowice 2020",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2021,
		month: 7,
		name: "IEM Cologne 2021",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "Lanxess Arena",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2021,
		month: 11,
		name: "PGL Major Stockholm 2021",
		cityZh: "斯德哥尔摩",
		cityEn: "Stockholm",
		venue: "Avicii Arena",
		champion: "Natus Vincere",
		tier: "Major",
		note: null
	},
	{
		year: 2022,
		month: 2,
		name: "IEM Katowice 2022",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2022,
		month: 4,
		name: "ESL Pro League Season 15",
		cityZh: "杜塞尔多夫",
		cityEn: "Düsseldorf",
		venue: null,
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2022,
		month: 5,
		name: "PGL Major Antwerp 2022",
		cityZh: "安特卫普",
		cityEn: "Antwerp",
		venue: "Sportpaleis",
		champion: "FaZe Clan",
		tier: "Major",
		note: null
	},
	{
		year: 2022,
		month: 6,
		name: "IEM Dallas 2022",
		cityZh: "达拉斯",
		cityEn: "Dallas",
		venue: "Kay Bailey Hutchison Convention Center",
		champion: "Cloud9",
		tier: "S",
		note: null
	},
	{
		year: 2022,
		month: 6,
		name: "BLAST Premier Spring Final 2022",
		cityZh: "里斯本",
		cityEn: "Lisbon",
		venue: "Altice Arena",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2022,
		month: 7,
		name: "IEM Cologne 2022",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "Lanxess Arena",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2022,
		month: 10,
		name: "ESL Pro League Season 16",
		cityZh: "马耳他",
		cityEn: "Malta",
		venue: "Salini Resort",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2022,
		month: 11,
		name: "IEM Rio Major 2022",
		cityZh: "里约热内卢",
		cityEn: "Rio de Janeiro",
		venue: "Jeunesse Arena",
		champion: "Outsiders",
		tier: "Major",
		note: null
	},
	{
		year: 2022,
		month: 11,
		name: "BLAST Premier Fall Final 2022",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "Royal Arena",
		champion: "Heroic",
		tier: "S",
		note: null
	},
	{
		year: 2022,
		month: 12,
		name: "BLAST Premier World Final 2022",
		cityZh: "阿布扎比",
		cityEn: "Abu Dhabi",
		venue: "Etihad Arena",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 2,
		name: "IEM Katowice 2023",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 3,
		name: "ESL Pro League Season 17",
		cityZh: "马耳他",
		cityEn: "Malta",
		venue: null,
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 4,
		name: "IEM Rio 2023",
		cityZh: "里约热内卢",
		cityEn: "Rio de Janeiro",
		venue: "Jeunesse Arena",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 5,
		name: "BLAST.tv Paris Major 2023",
		cityZh: "巴黎",
		cityEn: "Paris",
		venue: "Accor Arena",
		champion: "Team Vitality",
		tier: "Major",
		note: null
	},
	{
		year: 2023,
		month: 6,
		name: "IEM Dallas 2023",
		cityZh: "达拉斯",
		cityEn: "Dallas",
		venue: "Kay Bailey Hutchison Convention Center",
		champion: "ENCE",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 6,
		name: "BLAST Premier Spring Final 2023",
		cityZh: "华盛顿",
		cityEn: "Washington, D.C.",
		venue: "Entertainment & Sports Arena",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 8,
		name: "IEM Cologne 2023",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "Lanxess Arena",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 8,
		name: "Gamers8 2023",
		cityZh: "利雅得",
		cityEn: "Riyadh",
		venue: null,
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 10,
		name: "ESL Pro League Season 18",
		cityZh: "马耳他",
		cityEn: "Malta",
		venue: null,
		champion: "MOUZ",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 10,
		name: "IEM Sydney 2023",
		cityZh: "悉尼",
		cityEn: "Sydney",
		venue: "Aware Super Theatre",
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 11,
		name: "BLAST Premier Fall Final 2023",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "Royal Arena",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2023,
		month: 12,
		name: "BLAST Premier World Final 2023",
		cityZh: "阿布扎比",
		cityEn: "Abu Dhabi",
		venue: "Etihad Arena",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 2,
		name: "IEM Katowice 2024",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 3,
		name: "PGL Major Copenhagen 2024",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "Royal Arena",
		champion: "Natus Vincere",
		tier: "Major",
		note: null
	},
	{
		year: 2024,
		month: 4,
		name: "IEM Chengdu 2024",
		cityZh: "成都",
		cityEn: "Chengdu",
		venue: null,
		champion: "FaZe Clan",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 5,
		name: "ESL Pro League Season 19",
		cityZh: "马耳他",
		cityEn: "Malta",
		venue: null,
		champion: "MOUZ",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 6,
		name: "IEM Dallas 2024",
		cityZh: "达拉斯",
		cityEn: "Dallas",
		venue: "Kay Bailey Hutchison Convention Center",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 6,
		name: "BLAST Premier Spring Final 2024",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "OVO Arena Wembley",
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 7,
		name: "Esports World Cup 2024",
		cityZh: "利雅得",
		cityEn: "Riyadh",
		venue: null,
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 8,
		name: "IEM Cologne 2024",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "Lanxess Arena",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 9,
		name: "ESL Pro League Season 20",
		cityZh: "马耳他",
		cityEn: "Malta",
		venue: null,
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 9,
		name: "BLAST Premier Fall Final 2024",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "Forum Copenhagen",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 10,
		name: "IEM Rio 2024",
		cityZh: "里约热内卢",
		cityEn: "Rio de Janeiro",
		venue: "Farmasi Arena",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 11,
		name: "BLAST Premier World Final 2024",
		cityZh: "新加坡",
		cityEn: "Singapore",
		venue: null,
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 11,
		name: "Thunderpick World Championship 2024",
		cityZh: "柏林",
		cityEn: "Berlin",
		venue: null,
		champion: "The MongolZ",
		tier: "S",
		note: null
	},
	{
		year: 2024,
		month: 12,
		name: "Perfect World Shanghai Major 2024",
		cityZh: "上海",
		cityEn: "Shanghai",
		venue: "Shanghai Oriental Sports Center",
		champion: "Team Spirit",
		tier: "Major",
		note: null
	},
	{
		year: 2025,
		month: 1,
		name: "BLAST Bounty 2025 Season 1 Finals",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "BLAST Studio",
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 2,
		name: "IEM Katowice 2025",
		cityZh: "卡托维兹",
		cityEn: "Katowice",
		venue: "Spodek",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 2,
		name: "PGL Cluj-Napoca 2025",
		cityZh: "克卢日-纳波卡",
		cityEn: "Cluj-Napoca",
		venue: "BTarena",
		champion: "MOUZ",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 3,
		name: "ESL Pro League Season 21",
		cityZh: "斯德哥尔摩",
		cityEn: "Stockholm",
		venue: null,
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 3,
		name: "BLAST Open Lisbon 2025",
		cityZh: "里斯本",
		cityEn: "Lisbon",
		venue: "MEO Arena",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 4,
		name: "PGL Bucharest 2025",
		cityZh: "布加勒斯特",
		cityEn: "Bucharest",
		venue: null,
		champion: "Team Falcons",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 4,
		name: "IEM Melbourne 2025",
		cityZh: "墨尔本",
		cityEn: "Melbourne",
		venue: null,
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 5,
		name: "BLAST Rivals 2025 Season 1",
		cityZh: "哥本哈根",
		cityEn: "Copenhagen",
		venue: "BLAST Studio",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 5,
		name: "PGL Astana 2025",
		cityZh: "阿斯塔纳",
		cityEn: "Astana",
		venue: "Barys Arena",
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 5,
		name: "IEM Dallas 2025",
		cityZh: "达拉斯",
		cityEn: "Dallas",
		venue: null,
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 6,
		name: "BLAST.tv Austin Major 2025",
		cityZh: "奥斯汀",
		cityEn: "Austin",
		venue: null,
		champion: "Team Vitality",
		tier: "Major",
		note: null
	},
	{
		year: 2025,
		month: 8,
		name: "IEM Cologne 2025",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "Lanxess Arena",
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 8,
		name: "BLAST Bounty 2025 Season 2 Finals",
		cityZh: "阿塔德",
		cityEn: "Attard",
		venue: "BLAST Studio",
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 8,
		name: "Esports World Cup 2025",
		cityZh: "利雅得",
		cityEn: "Riyadh",
		venue: "Boulevard Riyadh City",
		champion: "The MongolZ",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 9,
		name: "BLAST Open London 2025",
		cityZh: "伦敦",
		cityEn: "London",
		venue: "OVO Arena Wembley",
		champion: "G2 Esports",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 10,
		name: "ESL Pro League Season 22",
		cityZh: "斯德哥尔摩",
		cityEn: "Stockholm",
		venue: null,
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 11,
		name: "IEM Chengdu 2025",
		cityZh: "成都",
		cityEn: "Chengdu",
		venue: "Chengdu Financial City Performing Arts Center",
		champion: "FURIA",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 11,
		name: "BLAST Rivals 2025 Season 2",
		cityZh: "香港",
		cityEn: "Hong Kong",
		venue: "AsiaWorld-Arena",
		champion: "FURIA",
		tier: "S",
		note: null
	},
	{
		year: 2025,
		month: 12,
		name: "StarLadder Budapest Major 2025",
		cityZh: "布达佩斯",
		cityEn: "Budapest",
		venue: "MTK Sportpark / MVM Dome",
		champion: "Team Vitality",
		tier: "Major",
		note: null
	},
	{
		year: 2026,
		month: 1,
		name: "BLAST Bounty 2026 Season 1 Finals",
		cityZh: "阿塔德",
		cityEn: "Attard",
		venue: "BLAST Studio",
		champion: "PARIVISION",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 2,
		name: "IEM Kraków 2026",
		cityZh: "克拉科夫",
		cityEn: "Kraków",
		venue: "TAURON Arena Kraków",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 2,
		name: "PGL Cluj-Napoca 2026",
		cityZh: "克卢日-纳波卡",
		cityEn: "Cluj-Napoca",
		venue: "BTarena",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 3,
		name: "ESL Pro League Season 23",
		cityZh: "斯德哥尔摩",
		cityEn: "Stockholm",
		venue: "Annexet",
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 3,
		name: "BLAST Open Rotterdam 2026",
		cityZh: "鹿特丹",
		cityEn: "Rotterdam",
		venue: "Rotterdam Ahoy",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 4,
		name: "PGL Bucharest 2026",
		cityZh: "布加勒斯特",
		cityEn: "Bucharest",
		venue: null,
		champion: "FUT Esports",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 4,
		name: "IEM Rio 2026",
		cityZh: "里约热内卢",
		cityEn: "Rio de Janeiro",
		venue: null,
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 5,
		name: "BLAST Rivals 2026 Season 1",
		cityZh: "沃思堡",
		cityEn: "Fort Worth",
		venue: "Dickies Arena",
		champion: "Team Vitality",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 5,
		name: "PGL Astana 2026",
		cityZh: "阿斯塔纳",
		cityEn: "Astana",
		venue: "Barys Arena",
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 5,
		name: "IEM Atlanta 2026",
		cityZh: "亚特兰大",
		cityEn: "Atlanta",
		venue: null,
		champion: "Natus Vincere",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 6,
		name: "IEM Cologne Major 2026",
		cityZh: "科隆",
		cityEn: "Cologne",
		venue: "LANXESS Arena",
		champion: "Team Falcons",
		tier: "Major",
		note: null
	},
	{
		year: 2026,
		month: 8,
		name: "BLAST Bounty 2026 Season 2 Finals",
		cityZh: "阿塔德",
		cityEn: "Attard",
		venue: "BLAST Studio",
		champion: "MOUZ",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 8,
		name: "Esports World Cup 2026",
		cityZh: "巴黎",
		cityEn: "Paris",
		venue: "Accor Arena",
		champion: "Team Spirit",
		tier: "S",
		note: null
	},
	{
		year: 2026,
		month: 9,
		name: "BLAST Open Porto 2026",
		cityZh: "波尔图",
		cityEn: "Porto",
		venue: "Super Bock Arena",
		champion: "Team Spirit",
		tier: "S",
		note: null
	}
];
var STIER_YEAR_MIN = 2013;
var STIER_YEAR_MAX = 2026;
var STIER_SOURCE = "数据来源：HLTV.org，整理于 2026-09";
var CITY_BY_EN = {
	Katowice: {
		id: "katowice",
		city: "Katowice",
		cityZh: "卡托维兹",
		lat: 50.2649,
		lng: 19.0238
	},
	"São Paulo": {
		id: "sao-paulo",
		city: "São Paulo",
		cityZh: "圣保罗",
		lat: -23.5505,
		lng: -46.6333
	},
	Shanghai: {
		id: "shanghai",
		city: "Shanghai",
		cityZh: "上海",
		lat: 31.2304,
		lng: 121.4737
	},
	Miami: {
		id: "miami",
		city: "Miami",
		cityZh: "迈阿密",
		lat: 25.7617,
		lng: -80.1918
	},
	Madrid: {
		id: "madrid",
		city: "Madrid",
		cityZh: "马德里",
		lat: 40.4168,
		lng: -3.7038
	},
	"Los Angeles": {
		id: "los-angeles",
		city: "Los Angeles",
		cityZh: "洛杉矶",
		lat: 34.0522,
		lng: -118.2437
	},
	Dallas: {
		id: "dallas",
		city: "Dallas",
		cityZh: "达拉斯",
		lat: 32.7767,
		lng: -96.797
	},
	Montpellier: {
		id: "montpellier",
		city: "Montpellier",
		cityZh: "蒙彼利埃",
		lat: 43.6108,
		lng: 3.8767
	},
	London: {
		id: "london",
		city: "London",
		cityZh: "伦敦",
		lat: 51.5074,
		lng: -.1278
	},
	Chicago: {
		id: "chicago",
		city: "Chicago",
		cityZh: "芝加哥",
		lat: 41.8781,
		lng: -87.6298
	},
	Berlin: {
		id: "berlin",
		city: "Berlin",
		cityZh: "柏林",
		lat: 52.52,
		lng: 13.405
	},
	Moscow: {
		id: "moscow",
		city: "Moscow",
		cityZh: "莫斯科",
		lat: 55.7558,
		lng: 37.6173
	},
	"New York": {
		id: "new-york",
		city: "New York",
		cityZh: "纽约",
		lat: 40.7128,
		lng: -74.006
	},
	Malmö: {
		id: "malmo",
		city: "Malmö",
		cityZh: "马尔默",
		lat: 55.605,
		lng: 13.0038
	},
	Belek: {
		id: "belek",
		city: "Belek",
		cityZh: "贝莱克",
		lat: 36.8625,
		lng: 31.0606
	},
	Beijing: {
		id: "beijing",
		city: "Beijing",
		cityZh: "北京",
		lat: 39.9042,
		lng: 116.4074
	},
	Copenhagen: {
		id: "copenhagen",
		city: "Copenhagen",
		cityZh: "哥本哈根",
		lat: 55.6761,
		lng: 12.5683
	},
	Arlington: {
		id: "arlington",
		city: "Arlington",
		cityZh: "阿灵顿",
		lat: 32.7357,
		lng: -97.1081
	},
	Odense: {
		id: "odense",
		city: "Odense",
		cityZh: "欧登塞",
		lat: 55.4038,
		lng: 10.4024
	},
	Riffa: {
		id: "riffa",
		city: "Riffa",
		cityZh: "里法",
		lat: 26.13,
		lng: 50.555
	},
	"St. Julian's": {
		id: "malta",
		city: "Malta",
		cityZh: "马耳他",
		lat: 35.9136,
		lng: 14.4786
	},
	Malta: {
		id: "malta",
		city: "Malta",
		cityZh: "马耳他",
		lat: 35.9136,
		lng: 14.4786
	},
	Attard: {
		id: "malta",
		city: "Malta",
		cityZh: "马耳他",
		lat: 35.9136,
		lng: 14.4786
	},
	Cologne: {
		id: "cologne",
		city: "Cologne",
		cityZh: "科隆",
		lat: 50.9375,
		lng: 6.9603
	},
	Stockholm: {
		id: "stockholm",
		city: "Stockholm",
		cityZh: "斯德哥尔摩",
		lat: 59.3293,
		lng: 18.0686
	},
	Düsseldorf: {
		id: "dusseldorf",
		city: "Düsseldorf",
		cityZh: "杜塞尔多夫",
		lat: 51.2277,
		lng: 6.7735
	},
	Antwerp: {
		id: "antwerp",
		city: "Antwerp",
		cityZh: "安特卫普",
		lat: 51.2194,
		lng: 4.4025
	},
	Lisbon: {
		id: "lisbon",
		city: "Lisbon",
		cityZh: "里斯本",
		lat: 38.7223,
		lng: -9.1393
	},
	"Rio de Janeiro": {
		id: "rio",
		city: "Rio de Janeiro",
		cityZh: "里约热内卢",
		lat: -22.9068,
		lng: -43.1729
	},
	"Abu Dhabi": {
		id: "abu-dhabi",
		city: "Abu Dhabi",
		cityZh: "阿布扎比",
		lat: 24.4539,
		lng: 54.3773
	},
	Paris: {
		id: "paris",
		city: "Paris",
		cityZh: "巴黎",
		lat: 48.8566,
		lng: 2.3522
	},
	"Washington, D.C.": {
		id: "washington",
		city: "Washington, D.C.",
		cityZh: "华盛顿",
		lat: 38.9072,
		lng: -77.0369
	},
	Riyadh: {
		id: "riyadh",
		city: "Riyadh",
		cityZh: "利雅得",
		lat: 24.7136,
		lng: 46.6753
	},
	Sydney: {
		id: "sydney",
		city: "Sydney",
		cityZh: "悉尼",
		lat: -33.8688,
		lng: 151.2093
	},
	Chengdu: {
		id: "chengdu",
		city: "Chengdu",
		cityZh: "成都",
		lat: 30.5728,
		lng: 104.0668
	},
	Singapore: {
		id: "singapore",
		city: "Singapore",
		cityZh: "新加坡",
		lat: 1.3521,
		lng: 103.8198
	},
	"Cluj-Napoca": {
		id: "cluj",
		city: "Cluj-Napoca",
		cityZh: "克卢日-纳波卡",
		lat: 46.7712,
		lng: 23.6236
	},
	Bucharest: {
		id: "bucharest",
		city: "Bucharest",
		cityZh: "布加勒斯特",
		lat: 44.4268,
		lng: 26.1025
	},
	Melbourne: {
		id: "melbourne",
		city: "Melbourne",
		cityZh: "墨尔本",
		lat: -37.8136,
		lng: 144.9631
	},
	Astana: {
		id: "astana",
		city: "Astana",
		cityZh: "阿斯塔纳",
		lat: 51.1694,
		lng: 71.4491
	},
	Austin: {
		id: "austin",
		city: "Austin",
		cityZh: "奥斯汀",
		lat: 30.2672,
		lng: -97.7431
	},
	"Hong Kong": {
		id: "hong-kong",
		city: "Hong Kong",
		cityZh: "香港",
		lat: 22.3193,
		lng: 114.1694
	},
	Budapest: {
		id: "budapest",
		city: "Budapest",
		cityZh: "布达佩斯",
		lat: 47.4979,
		lng: 19.0402
	},
	Kraków: {
		id: "krakow",
		city: "Kraków",
		cityZh: "克拉科夫",
		lat: 50.0647,
		lng: 19.945
	},
	Rotterdam: {
		id: "rotterdam",
		city: "Rotterdam",
		cityZh: "鹿特丹",
		lat: 51.9244,
		lng: 4.4777
	},
	"Fort Worth": {
		id: "fort-worth",
		city: "Fort Worth",
		cityZh: "沃思堡",
		lat: 32.7555,
		lng: -97.3308
	},
	Atlanta: {
		id: "atlanta",
		city: "Atlanta",
		cityZh: "亚特兰大",
		lat: 33.749,
		lng: -84.388
	},
	Porto: {
		id: "porto",
		city: "Porto",
		cityZh: "波尔图",
		lat: 41.1579,
		lng: -8.6291
	},
	"Jönköping": {
		id: "jonkoping",
		city: "Jönköping",
		cityZh: "延雪平",
		lat: 57.7826,
		lng: 14.1618
	},
	Kyiv: {
		id: "kyiv",
		city: "Kyiv",
		cityZh: "基辅",
		lat: 50.4501,
		lng: 30.5234
	},
	Kiev: {
		id: "kyiv",
		city: "Kyiv",
		cityZh: "基辅",
		lat: 50.4501,
		lng: 30.5234
	},
	Columbus: {
		id: "columbus",
		city: "Columbus",
		cityZh: "哥伦布",
		lat: 39.9612,
		lng: -82.9988
	},
	Oakland: {
		id: "oakland",
		city: "Oakland",
		cityZh: "奥克兰",
		lat: 37.8044,
		lng: -122.2712
	},
	"San Jose": {
		id: "san-jose",
		city: "San Jose",
		cityZh: "圣何塞",
		lat: 37.3382,
		lng: -121.8863
	},
	"Las Vegas": {
		id: "las-vegas",
		city: "Las Vegas",
		cityZh: "拉斯维加斯",
		lat: 36.1699,
		lng: -115.1398
	},
	"Belo Horizonte": {
		id: "belo-horizonte",
		city: "Belo Horizonte",
		cityZh: "贝洛奥里藏特",
		lat: -19.9167,
		lng: -43.9345
	},
	Birmingham: {
		id: "birmingham",
		city: "Birmingham",
		cityZh: "伯明翰",
		lat: 52.4862,
		lng: -1.8904
	},
	Cancun: {
		id: "cancun",
		city: "Cancun",
		cityZh: "坎昆",
		lat: 21.1619,
		lng: -86.8515
	},
	Toronto: {
		id: "toronto",
		city: "Toronto",
		cityZh: "多伦多",
		lat: 43.6532,
		lng: -79.3832
	},
	Montreal: {
		id: "montreal",
		city: "Montreal",
		cityZh: "蒙特利尔",
		lat: 45.5017,
		lng: -73.5673
	},
	Marseille: {
		id: "marseille",
		city: "Marseille",
		cityZh: "马赛",
		lat: 43.2965,
		lng: 5.3698
	},
	Boston: {
		id: "boston",
		city: "Boston",
		cityZh: "波士顿",
		lat: 42.3601,
		lng: -71.0589
	},
	"Saint Petersburg": {
		id: "saint-petersburg",
		city: "Saint Petersburg",
		cityZh: "圣彼得堡",
		lat: 59.9311,
		lng: 30.3609
	},
	Minsk: {
		id: "minsk",
		city: "Minsk",
		cityZh: "明斯克",
		lat: 53.9006,
		lng: 27.559
	},
	Istanbul: {
		id: "istanbul",
		city: "Istanbul",
		cityZh: "伊斯坦布尔",
		lat: 41.0082,
		lng: 28.9784
	},
	Dubai: {
		id: "dubai",
		city: "Dubai",
		cityZh: "迪拜",
		lat: 25.2048,
		lng: 55.2708
	},
	Milan: {
		id: "milan",
		city: "Milan",
		cityZh: "米兰",
		lat: 45.4642,
		lng: 9.19
	},
	Leipzig: {
		id: "leipzig",
		city: "Leipzig",
		cityZh: "莱比锡",
		lat: 51.3397,
		lng: 12.3731
	},
	Valencia: {
		id: "valencia",
		city: "Valencia",
		cityZh: "瓦伦西亚",
		lat: 39.4699,
		lng: -.3763
	},
	Vilnius: {
		id: "vilnius",
		city: "Vilnius",
		cityZh: "维尔纽斯",
		lat: 54.6872,
		lng: 25.2797
	},
	Burbank: {
		id: "burbank",
		city: "Burbank",
		cityZh: "伯班克",
		lat: 34.1808,
		lng: -118.309
	},
	"Costa Mesa": {
		id: "costa-mesa",
		city: "Costa Mesa",
		cityZh: "科斯塔梅萨",
		lat: 33.6411,
		lng: -117.9187
	},
	Anaheim: {
		id: "anaheim",
		city: "Anaheim",
		cityZh: "阿纳海姆",
		lat: 33.8366,
		lng: -117.9143
	},
	Mykonos: {
		id: "mykonos",
		city: "Mykonos",
		cityZh: "米科诺斯",
		lat: 37.4467,
		lng: 25.3289
	},
	Haikou: {
		id: "haikou",
		city: "Haikou",
		cityZh: "海口",
		lat: 20.044,
		lng: 110.1999
	},
	Changzhou: {
		id: "changzhou",
		city: "Changzhou",
		cityZh: "常州",
		lat: 31.8107,
		lng: 119.9741
	}
};
var HOLY_IDS = /* @__PURE__ */ new Set([
	"katowice",
	"cologne",
	"copenhagen",
	"dallas",
	"malta",
	"stockholm",
	"rio"
]);
var CHAMPION_KEYS = [
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
	[/^titan$/i, "titan"]
];
function championKey(name) {
	for (const [re, key] of CHAMPION_KEYS) if (re.test(name)) return key;
	return name.toLowerCase().replace(/\s+/g, "-");
}
var CHAMPION_LABEL = {
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
	titan: "Titan"
};
function buildCities(events) {
	const map = /* @__PURE__ */ new Map();
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
				events: []
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
var S_TIER_CITIES = buildCities(S_TIER_EVENTS);
function citiesUpToYear(year) {
	return S_TIER_CITIES.map((city) => ({
		...city,
		events: city.events.filter((ev) => ev.year <= year)
	})).filter((city) => city.events.length > 0);
}
function countEventsUpToYear(year) {
	return S_TIER_EVENTS.filter((ev) => ev.year <= year).length;
}
var KEY = "orbital-globe-v1";
var VERSION = 1;
var empty = {
	version: VERSION,
	visited: [],
	customMarkers: []
};
function loadSave() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return empty;
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object") return empty;
		return {
			version: VERSION,
			visited: Array.isArray(parsed.visited) ? parsed.visited.filter((id) => typeof id === "string") : [],
			customMarkers: Array.isArray(parsed.customMarkers) ? parsed.customMarkers.filter(isMarker) : []
		};
	} catch {
		return empty;
	}
}
function saveSave(state) {
	try {
		const payload = {
			version: VERSION,
			...state
		};
		localStorage.setItem(KEY, JSON.stringify(payload));
	} catch {}
}
function isMarker(value) {
	if (!value || typeof value !== "object") return false;
	const m = value;
	return typeof m.id === "string" && typeof m.name === "string" && typeof m.note === "string" && typeof m.lat === "number" && typeof m.lng === "number" && typeof m.createdAt === "number";
}
function persist(visited, customMarkers) {
	saveSave({
		visited,
		customMarkers
	});
}
var useGlobeStore = create((set, get) => ({
	texturesReady: false,
	hydrated: false,
	showGraticule: false,
	showCs2Majors: true,
	showSTier: true,
	sTierYear: STIER_YEAR_MAX,
	highlightedTeam: null,
	pinMode: false,
	hoveredIso: null,
	selectedIso: null,
	selectedMarker: null,
	visited: [],
	customMarkers: [],
	pendingPin: null,
	flyTo: null,
	panelOpen: false,
	hydrate: () => {
		if (get().hydrated) return;
		const saved = loadSave();
		set({
			hydrated: true,
			visited: saved.visited,
			customMarkers: saved.customMarkers
		});
	},
	setTexturesReady: (v) => set({ texturesReady: v }),
	setShowGraticule: (v) => set({ showGraticule: v }),
	setShowCs2Majors: (v) => set({ showCs2Majors: v }),
	setShowSTier: (v) => set({
		showSTier: v,
		highlightedTeam: v ? get().highlightedTeam : null,
		selectedMarker: !v && get().selectedMarker?.kind === "stier" ? null : get().selectedMarker
	}),
	setSTierYear: (year) => {
		const selected = get().selectedMarker;
		set({
			sTierYear: year,
			selectedMarker: (selected?.kind === "stier" ? citiesUpToYear(year).some((c) => c.id === selected.id) : true) ? selected : null
		});
	},
	setHighlightedTeam: (team) => set({ highlightedTeam: team }),
	setPinMode: (v) => set({
		pinMode: v,
		pendingPin: v ? get().pendingPin : null
	}),
	setHoveredIso: (iso) => set({ hoveredIso: iso }),
	selectCountry: (iso) => set({
		selectedIso: iso,
		selectedMarker: null,
		pinMode: false,
		pendingPin: null
	}),
	selectMarker: (marker) => set({
		selectedMarker: marker,
		selectedIso: null,
		pinMode: false
	}),
	toggleVisited: (iso) => {
		const visited = get().visited.includes(iso) ? get().visited.filter((id) => id !== iso) : [...get().visited, iso];
		set({ visited });
		persist(visited, get().customMarkers);
	},
	addMarker: (marker) => {
		const next = {
			...marker,
			id: `m_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
			createdAt: Date.now()
		};
		const customMarkers = [...get().customMarkers, next];
		set({
			customMarkers,
			pendingPin: null,
			pinMode: false,
			selectedMarker: {
				kind: "custom",
				id: next.id
			}
		});
		persist(get().visited, customMarkers);
	},
	removeMarker: (id) => {
		const customMarkers = get().customMarkers.filter((m) => m.id !== id);
		const selected = get().selectedMarker;
		set({
			customMarkers,
			selectedMarker: selected?.kind === "custom" && selected.id === id ? null : selected
		});
		persist(get().visited, customMarkers);
	},
	setPendingPin: (pin) => set({ pendingPin: pin }),
	requestFlyTo: (lat, lng, radius = 1.85) => set({ flyTo: {
		lat,
		lng,
		radius,
		key: Date.now()
	} }),
	setPanelOpen: (v) => set({ panelOpen: v }),
	clearSelection: () => set({
		selectedIso: null,
		selectedMarker: null,
		pendingPin: null
	})
}));
var COUNTRIES = /* @__PURE__ */ JSON.parse("[{\"iso\":\"AL\",\"nameEn\":\"Albania\",\"nameZh\":\"阿尔巴尼亚\",\"capital\":\"Tirana\",\"capitalZh\":\"地拉那\",\"lat\":41.14,\"lng\":20.03},{\"iso\":\"DZ\",\"nameEn\":\"Algeria\",\"nameZh\":\"阿尔及利亚\",\"capital\":\"Algiers\",\"capitalZh\":\"阿尔及尔\",\"lat\":28.19,\"lng\":2.6},{\"iso\":\"AF\",\"nameEn\":\"Afghanistan\",\"nameZh\":\"阿富汗\",\"capital\":\"Kabul\",\"capitalZh\":\"喀布尔\",\"lat\":33.86,\"lng\":66.09},{\"iso\":\"AR\",\"nameEn\":\"Argentina\",\"nameZh\":\"阿根廷\",\"capital\":\"Buenos Aires\",\"capitalZh\":\"布宜诺斯艾利斯\",\"lat\":-35.22,\"lng\":-65.15},{\"iso\":\"AE\",\"nameEn\":\"United Arab Emirates\",\"nameZh\":\"阿联酋\",\"capital\":\"Abu Dhabi\",\"capitalZh\":\"阿布扎比\",\"lat\":23.87,\"lng\":54.21},{\"iso\":\"OM\",\"nameEn\":\"Oman\",\"nameZh\":\"阿曼\",\"capital\":\"Muscat\",\"capitalZh\":\"马斯喀特\",\"lat\":20.58,\"lng\":56.1},{\"iso\":\"AZ\",\"nameEn\":\"Azerbaijan\",\"nameZh\":\"阿塞拜疆\",\"capital\":\"Baku\",\"capitalZh\":\"巴库\",\"lat\":40.28,\"lng\":47.68},{\"iso\":\"EG\",\"nameEn\":\"Egypt\",\"nameZh\":\"埃及\",\"capital\":\"Cairo\",\"capitalZh\":\"开罗\",\"lat\":26.51,\"lng\":29.84},{\"iso\":\"ET\",\"nameEn\":\"Ethiopia\",\"nameZh\":\"埃塞俄比亚\",\"capital\":\"Addis Ababa\",\"capitalZh\":\"亚的斯亚贝巴\",\"lat\":8.65,\"lng\":39.55},{\"iso\":\"IE\",\"nameEn\":\"Ireland\",\"nameZh\":\"爱尔兰\",\"capital\":\"Dublin\",\"capitalZh\":\"都柏林\",\"lat\":53.18,\"lng\":-8.01},{\"iso\":\"EE\",\"nameEn\":\"Estonia\",\"nameZh\":\"爱沙尼亚\",\"capital\":\"Tallinn\",\"capitalZh\":\"塔林\",\"lat\":58.64,\"lng\":25.83},{\"iso\":\"AD\",\"nameEn\":\"Andorra\",\"nameZh\":\"安道尔\",\"capital\":\"Andorra la Vella\",\"capitalZh\":\"安道尔城\",\"lat\":42.5,\"lng\":1.5},{\"iso\":\"AO\",\"nameEn\":\"Angola\",\"nameZh\":\"安哥拉\",\"capital\":\"Luanda\",\"capitalZh\":\"Luanda\",\"lat\":-12.29,\"lng\":17.5},{\"iso\":\"AG\",\"nameEn\":\"Antigua and Barbuda\",\"nameZh\":\"安提瓜和巴布达\",\"capital\":\"Saint John's\",\"capitalZh\":\"Saint John's\",\"lat\":17.05,\"lng\":-61.8},{\"iso\":\"AT\",\"nameEn\":\"Austria\",\"nameZh\":\"奥地利\",\"capital\":\"Vienna\",\"capitalZh\":\"维也纳\",\"lat\":47.61,\"lng\":14.08},{\"iso\":\"AU\",\"nameEn\":\"Australia\",\"nameZh\":\"澳大利亚\",\"capital\":\"Canberra\",\"capitalZh\":\"堪培拉\",\"lat\":-25.56,\"lng\":134.38},{\"iso\":\"MO\",\"nameEn\":\"Macau\",\"nameZh\":\"澳门\",\"capital\":\"\",\"capitalZh\":\"\",\"lat\":22.17,\"lng\":113.55},{\"iso\":\"BB\",\"nameEn\":\"Barbados\",\"nameZh\":\"巴巴多斯\",\"capital\":\"Bridgetown\",\"capitalZh\":\"Bridgetown\",\"lat\":13.17,\"lng\":-59.53},{\"iso\":\"PG\",\"nameEn\":\"Papua New Guinea\",\"nameZh\":\"巴布亚新几内亚\",\"capital\":\"Port Moresby\",\"capitalZh\":\"Port Moresby\",\"lat\":-6.65,\"lng\":144.33},{\"iso\":\"BS\",\"nameEn\":\"Bahamas\",\"nameZh\":\"巴哈马\",\"capital\":\"Nassau\",\"capitalZh\":\"Nassau\",\"lat\":24.51,\"lng\":-77.92},{\"iso\":\"PK\",\"nameEn\":\"Pakistan\",\"nameZh\":\"巴基斯坦\",\"capital\":\"Islamabad\",\"capitalZh\":\"伊斯兰堡\",\"lat\":29.97,\"lng\":69.41},{\"iso\":\"PY\",\"nameEn\":\"Paraguay\",\"nameZh\":\"巴拉圭\",\"capital\":\"Asunción\",\"capitalZh\":\"亚松森\",\"lat\":-23.25,\"lng\":-58.39},{\"iso\":\"PS\",\"nameEn\":\"Palestine\",\"nameZh\":\"巴勒斯坦\",\"capital\":\"Ramallah\",\"capitalZh\":\"Ramallah\",\"lat\":31.94,\"lng\":35.27},{\"iso\":\"BH\",\"nameEn\":\"Bahrain\",\"nameZh\":\"巴林\",\"capital\":\"Manama\",\"capitalZh\":\"麦纳麦\",\"lat\":26,\"lng\":50.55},{\"iso\":\"PA\",\"nameEn\":\"Panama\",\"nameZh\":\"巴拿马\",\"capital\":\"Panama City\",\"capitalZh\":\"Panama City\",\"lat\":8.53,\"lng\":-80.11},{\"iso\":\"BR\",\"nameEn\":\"Brazil\",\"nameZh\":\"巴西\",\"capital\":\"Brasília\",\"capitalZh\":\"巴西利亚\",\"lat\":-10.81,\"lng\":-53.05},{\"iso\":\"BY\",\"nameEn\":\"Belarus\",\"nameZh\":\"白俄罗斯\",\"capital\":\"Minsk\",\"capitalZh\":\"明斯克\",\"lat\":53.51,\"lng\":27.98},{\"iso\":\"BG\",\"nameEn\":\"Bulgaria\",\"nameZh\":\"保加利亚\",\"capital\":\"Sofia\",\"capitalZh\":\"索非亚\",\"lat\":42.75,\"lng\":25.19},{\"iso\":\"MK\",\"nameEn\":\"North Macedonia\",\"nameZh\":\"北马其顿\",\"capital\":\"Skopje\",\"capitalZh\":\"斯科普里\",\"lat\":41.61,\"lng\":21.7},{\"iso\":\"BJ\",\"nameEn\":\"Benin\",\"nameZh\":\"贝宁\",\"capital\":\"Porto-Novo\",\"capitalZh\":\"Porto-Novo\",\"lat\":9.65,\"lng\":2.34},{\"iso\":\"BE\",\"nameEn\":\"Belgium\",\"nameZh\":\"比利时\",\"capital\":\"Brussels\",\"capitalZh\":\"布鲁塞尔\",\"lat\":50.65,\"lng\":4.58},{\"iso\":\"IS\",\"nameEn\":\"Iceland\",\"nameZh\":\"冰岛\",\"capital\":\"Reykjavik\",\"capitalZh\":\"雷克雅未克\",\"lat\":65.07,\"lng\":-18.76},{\"iso\":\"PR\",\"nameEn\":\"Puerto Rico\",\"nameZh\":\"波多黎各\",\"capital\":\"San Juan\",\"capitalZh\":\"San Juan\",\"lat\":18.24,\"lng\":-66.48},{\"iso\":\"PL\",\"nameEn\":\"Poland\",\"nameZh\":\"波兰\",\"capital\":\"Warsaw\",\"capitalZh\":\"华沙\",\"lat\":52.15,\"lng\":19.31},{\"iso\":\"BA\",\"nameEn\":\"Bosnia and Herzegovina\",\"nameZh\":\"波斯尼亚和黑塞哥维那\",\"capital\":\"Sarajevo\",\"capitalZh\":\"萨拉热窝\",\"lat\":44.18,\"lng\":17.82},{\"iso\":\"BO\",\"nameEn\":\"Bolivia\",\"nameZh\":\"玻利维亚\",\"capital\":\"Sucre\",\"capitalZh\":\"Sucre\",\"lat\":-16.73,\"lng\":-64.64},{\"iso\":\"BZ\",\"nameEn\":\"Belize\",\"nameZh\":\"伯利兹\",\"capital\":\"Belmopan\",\"capitalZh\":\"Belmopan\",\"lat\":17.2,\"lng\":-88.7},{\"iso\":\"BW\",\"nameEn\":\"Botswana\",\"nameZh\":\"博茨瓦纳\",\"capital\":\"Gaborone\",\"capitalZh\":\"Gaborone\",\"lat\":-22.1,\"lng\":23.77},{\"iso\":\"BT\",\"nameEn\":\"Bhutan\",\"nameZh\":\"不丹\",\"capital\":\"Thimphu\",\"capitalZh\":\"廷布\",\"lat\":27.43,\"lng\":90.47},{\"iso\":\"BF\",\"nameEn\":\"Burkina Faso\",\"nameZh\":\"布基纳法索\",\"capital\":\"Ouagadougou\",\"capitalZh\":\"Ouagadougou\",\"lat\":12.31,\"lng\":-1.78},{\"iso\":\"BI\",\"nameEn\":\"Burundi\",\"nameZh\":\"布隆迪\",\"capital\":\"Gitega\",\"capitalZh\":\"Gitega\",\"lat\":-3.38,\"lng\":29.91},{\"iso\":\"KP\",\"nameEn\":\"North Korea\",\"nameZh\":\"朝鲜\",\"capital\":\"Pyongyang\",\"capitalZh\":\"平壤\",\"lat\":40.14,\"lng\":127.16},{\"iso\":\"GQ\",\"nameEn\":\"Equatorial Guinea\",\"nameZh\":\"赤道几内亚\",\"capital\":\"Malabo\",\"capitalZh\":\"Malabo\",\"lat\":1.65,\"lng\":10.37},{\"iso\":\"DK\",\"nameEn\":\"Denmark\",\"nameZh\":\"丹麦\",\"capital\":\"Copenhagen\",\"capitalZh\":\"哥本哈根\",\"lat\":56.22,\"lng\":9.31},{\"iso\":\"DE\",\"nameEn\":\"Germany\",\"nameZh\":\"德国\",\"capital\":\"Berlin\",\"capitalZh\":\"柏林\",\"lat\":51.13,\"lng\":10.29},{\"iso\":\"TL\",\"nameEn\":\"Timor-Leste\",\"nameZh\":\"东帝汶\",\"capital\":\"Dili\",\"capitalZh\":\"Dili\",\"lat\":-8.77,\"lng\":125.97},{\"iso\":\"TG\",\"nameEn\":\"Togo\",\"nameZh\":\"多哥\",\"capital\":\"Lomé\",\"capitalZh\":\"Lomé\",\"lat\":8.44,\"lng\":1},{\"iso\":\"DM\",\"nameEn\":\"Dominica\",\"nameZh\":\"多米尼加\",\"capital\":\"Roseau\",\"capitalZh\":\"Roseau\",\"lat\":15.42,\"lng\":-61.33},{\"iso\":\"DO\",\"nameEn\":\"Dominican Republic\",\"nameZh\":\"多米尼加共和国\",\"capital\":\"Santo Domingo\",\"capitalZh\":\"Santo Domingo\",\"lat\":18.88,\"lng\":-70.46},{\"iso\":\"RU\",\"nameEn\":\"Russia\",\"nameZh\":\"俄罗斯\",\"capital\":\"Moscow\",\"capitalZh\":\"莫斯科\",\"lat\":55.7,\"lng\":202.79},{\"iso\":\"EC\",\"nameEn\":\"Ecuador\",\"nameZh\":\"厄瓜多尔\",\"capital\":\"Quito\",\"capitalZh\":\"基多\",\"lat\":-1.46,\"lng\":-78.38},{\"iso\":\"ER\",\"nameEn\":\"Eritrea\",\"nameZh\":\"厄立特里亚\",\"capital\":\"Asmara\",\"capitalZh\":\"Asmara\",\"lat\":15.43,\"lng\":38.68},{\"iso\":\"FR\",\"nameEn\":\"France\",\"nameZh\":\"法国\",\"capital\":\"Paris\",\"capitalZh\":\"巴黎\",\"lat\":46.61,\"lng\":2.34},{\"iso\":\"TF\",\"nameEn\":\"French Southern and Antarctic Lands\",\"nameZh\":\"法国南部和南极土地\",\"capital\":\"Port-aux-Français\",\"capitalZh\":\"Port-aux-Français\",\"lat\":-49.31,\"lng\":69.53},{\"iso\":\"VA\",\"nameEn\":\"Vatican City\",\"nameZh\":\"梵蒂冈\",\"capital\":\"Vatican City\",\"capitalZh\":\"梵蒂冈城\",\"lat\":41.9,\"lng\":12.45},{\"iso\":\"PH\",\"nameEn\":\"Philippines\",\"nameZh\":\"菲律宾\",\"capital\":\"Manila\",\"capitalZh\":\"马尼拉\",\"lat\":15.75,\"lng\":121.54},{\"iso\":\"FJ\",\"nameEn\":\"Fiji\",\"nameZh\":\"斐济\",\"capital\":\"Suva\",\"capitalZh\":\"Suva\",\"lat\":-16.38,\"lng\":11.6},{\"iso\":\"FI\",\"nameEn\":\"Finland\",\"nameZh\":\"芬兰\",\"capital\":\"Helsinki\",\"capitalZh\":\"赫尔辛基\",\"lat\":64.5,\"lng\":26.21},{\"iso\":\"CV\",\"nameEn\":\"Cape Verde\",\"nameZh\":\"佛得角\",\"capital\":\"Praia\",\"capitalZh\":\"Praia\",\"lat\":16,\"lng\":-24},{\"iso\":\"FK\",\"nameEn\":\"Falkland Islands\",\"nameZh\":\"福克兰群岛\",\"capital\":\"Stanley\",\"capitalZh\":\"Stanley\",\"lat\":-51.71,\"lng\":-59.42},{\"iso\":\"GM\",\"nameEn\":\"Gambia\",\"nameZh\":\"冈比亚\",\"capital\":\"Banjul\",\"capitalZh\":\"Banjul\",\"lat\":13.48,\"lng\":-15.43},{\"iso\":\"CG\",\"nameEn\":\"Congo\",\"nameZh\":\"刚果（布）\",\"capital\":\"Brazzaville\",\"capitalZh\":\"Brazzaville\",\"lat\":-0.84,\"lng\":15.13},{\"iso\":\"CD\",\"nameEn\":\"DR Congo\",\"nameZh\":\"刚果（金）\",\"capital\":\"Kinshasa\",\"capitalZh\":\"Kinshasa\",\"lat\":-2.85,\"lng\":23.58},{\"iso\":\"CO\",\"nameEn\":\"Colombia\",\"nameZh\":\"哥伦比亚\",\"capital\":\"Bogotá\",\"capitalZh\":\"波哥大\",\"lat\":3.93,\"lng\":-73.08},{\"iso\":\"CR\",\"nameEn\":\"Costa Rica\",\"nameZh\":\"哥斯达黎加\",\"capital\":\"San José\",\"capitalZh\":\"San José\",\"lat\":9.97,\"lng\":-84.18},{\"iso\":\"GD\",\"nameEn\":\"Grenada\",\"nameZh\":\"格林纳达\",\"capital\":\"St. George's\",\"capitalZh\":\"St. George's\",\"lat\":12.12,\"lng\":-61.67},{\"iso\":\"GL\",\"nameEn\":\"Greenland\",\"nameZh\":\"格陵兰\",\"capital\":\"Nuuk\",\"capitalZh\":\"Nuuk\",\"lat\":74.77,\"lng\":-41.5},{\"iso\":\"GE\",\"nameEn\":\"Georgia\",\"nameZh\":\"格鲁吉亚\",\"capital\":\"Tbilisi\",\"capitalZh\":\"第比利斯\",\"lat\":42.16,\"lng\":43.48},{\"iso\":\"CU\",\"nameEn\":\"Cuba\",\"nameZh\":\"古巴\",\"capital\":\"Havana\",\"capitalZh\":\"哈瓦那\",\"lat\":21.63,\"lng\":-78.96},{\"iso\":\"GY\",\"nameEn\":\"Guyana\",\"nameZh\":\"圭亚那\",\"capital\":\"Georgetown\",\"capitalZh\":\"Georgetown\",\"lat\":4.79,\"lng\":-58.97},{\"iso\":\"KZ\",\"nameEn\":\"Kazakhstan\",\"nameZh\":\"哈萨克斯坦\",\"capital\":\"Astana\",\"capitalZh\":\"阿斯塔纳\",\"lat\":48.19,\"lng\":67.28},{\"iso\":\"HT\",\"nameEn\":\"Haiti\",\"nameZh\":\"海地\",\"capital\":\"Port-au-Prince\",\"capitalZh\":\"Port-au-Prince\",\"lat\":18.9,\"lng\":-72.66},{\"iso\":\"KR\",\"nameEn\":\"South Korea\",\"nameZh\":\"韩国\",\"capital\":\"Seoul\",\"capitalZh\":\"首尔\",\"lat\":36.43,\"lng\":127.82},{\"iso\":\"NL\",\"nameEn\":\"Netherlands\",\"nameZh\":\"荷兰\",\"capital\":\"Amsterdam\",\"capitalZh\":\"阿姆斯特丹\",\"lat\":52.3,\"lng\":5.51},{\"iso\":\"ME\",\"nameEn\":\"Montenegro\",\"nameZh\":\"黑山\",\"capital\":\"Podgorica\",\"capitalZh\":\"波德戈里察\",\"lat\":42.79,\"lng\":19.29},{\"iso\":\"HN\",\"nameEn\":\"Honduras\",\"nameZh\":\"洪都拉斯\",\"capital\":\"Tegucigalpa\",\"capitalZh\":\"Tegucigalpa\",\"lat\":14.82,\"lng\":-86.59},{\"iso\":\"KI\",\"nameEn\":\"Kiribati\",\"nameZh\":\"基里巴斯\",\"capital\":\"South Tarawa\",\"capitalZh\":\"South Tarawa\",\"lat\":1.42,\"lng\":173},{\"iso\":\"DJ\",\"nameEn\":\"Djibouti\",\"nameZh\":\"吉布提\",\"capital\":\"Djibouti\",\"capitalZh\":\"Djibouti\",\"lat\":11.77,\"lng\":42.5},{\"iso\":\"KG\",\"nameEn\":\"Kyrgyzstan\",\"nameZh\":\"吉尔吉斯斯坦\",\"capital\":\"Bishkek\",\"capitalZh\":\"比什凯克\",\"lat\":41.51,\"lng\":74.62},{\"iso\":\"GN\",\"nameEn\":\"Guinea\",\"nameZh\":\"几内亚\",\"capital\":\"Conakry\",\"capitalZh\":\"Conakry\",\"lat\":10.45,\"lng\":-11.06},{\"iso\":\"GW\",\"nameEn\":\"Guinea-Bissau\",\"nameZh\":\"几内亚比绍\",\"capital\":\"Bissau\",\"capitalZh\":\"Bissau\",\"lat\":12.02,\"lng\":-15.11},{\"iso\":\"CA\",\"nameEn\":\"Canada\",\"nameZh\":\"加拿大\",\"capital\":\"Ottawa\",\"capitalZh\":\"渥太华\",\"lat\":57.75,\"lng\":-101.57},{\"iso\":\"GH\",\"nameEn\":\"Ghana\",\"nameZh\":\"加纳\",\"capital\":\"Accra\",\"capitalZh\":\"阿克拉\",\"lat\":7.93,\"lng\":-1.24},{\"iso\":\"GA\",\"nameEn\":\"Gabon\",\"nameZh\":\"加蓬\",\"capital\":\"Libreville\",\"capitalZh\":\"Libreville\",\"lat\":-0.65,\"lng\":11.69},{\"iso\":\"KH\",\"nameEn\":\"Cambodia\",\"nameZh\":\"柬埔寨\",\"capital\":\"Phnom Penh\",\"capitalZh\":\"金边\",\"lat\":12.68,\"lng\":104.88},{\"iso\":\"CZ\",\"nameEn\":\"Czechia\",\"nameZh\":\"捷克\",\"capital\":\"Prague\",\"capitalZh\":\"布拉格\",\"lat\":49.78,\"lng\":15.33},{\"iso\":\"ZW\",\"nameEn\":\"Zimbabwe\",\"nameZh\":\"津巴布韦\",\"capital\":\"Harare\",\"capitalZh\":\"Harare\",\"lat\":-18.91,\"lng\":29.79},{\"iso\":\"CM\",\"nameEn\":\"Cameroon\",\"nameZh\":\"喀麦隆\",\"capital\":\"Yaoundé\",\"capitalZh\":\"Yaoundé\",\"lat\":5.66,\"lng\":12.61},{\"iso\":\"QA\",\"nameEn\":\"Qatar\",\"nameZh\":\"卡塔尔\",\"capital\":\"Doha\",\"capitalZh\":\"多哈\",\"lat\":25.32,\"lng\":51.18},{\"iso\":\"KM\",\"nameEn\":\"Comoros\",\"nameZh\":\"科摩罗\",\"capital\":\"Moroni\",\"capitalZh\":\"Moroni\",\"lat\":-12.17,\"lng\":44.25},{\"iso\":\"XK\",\"nameEn\":\"Kosovo\",\"nameZh\":\"科索沃\",\"capital\":\"Pristina\",\"capitalZh\":\"Pristina\",\"lat\":42.67,\"lng\":21.17},{\"iso\":\"CI\",\"nameEn\":\"Ivory Coast\",\"nameZh\":\"科特迪瓦\",\"capital\":\"Yamoussoukro\",\"capitalZh\":\"Yamoussoukro\",\"lat\":7.55,\"lng\":-5.61},{\"iso\":\"KW\",\"nameEn\":\"Kuwait\",\"nameZh\":\"科威特\",\"capital\":\"Kuwait City\",\"capitalZh\":\"科威特城\",\"lat\":29.31,\"lng\":47.6},{\"iso\":\"HR\",\"nameEn\":\"Croatia\",\"nameZh\":\"克罗地亚\",\"capital\":\"Zagreb\",\"capitalZh\":\"萨格勒布\",\"lat\":45.02,\"lng\":16.57},{\"iso\":\"KE\",\"nameEn\":\"Kenya\",\"nameZh\":\"肯尼亚\",\"capital\":\"Nairobi\",\"capitalZh\":\"内罗毕\",\"lat\":0.6,\"lng\":37.79},{\"iso\":\"LV\",\"nameEn\":\"Latvia\",\"nameZh\":\"拉脱维亚\",\"capital\":\"Riga\",\"capitalZh\":\"里加\",\"lat\":56.81,\"lng\":24.83},{\"iso\":\"LS\",\"nameEn\":\"Lesotho\",\"nameZh\":\"莱索托\",\"capital\":\"Maseru\",\"capitalZh\":\"Maseru\",\"lat\":-29.63,\"lng\":28.17},{\"iso\":\"LA\",\"nameEn\":\"Laos\",\"nameZh\":\"老挝\",\"capital\":\"Vientiane\",\"capitalZh\":\"万象\",\"lat\":18.45,\"lng\":103.75},{\"iso\":\"LB\",\"nameEn\":\"Lebanon\",\"nameZh\":\"黎巴嫩\",\"capital\":\"Beirut\",\"capitalZh\":\"贝鲁特\",\"lat\":33.91,\"lng\":35.87},{\"iso\":\"LT\",\"nameEn\":\"Lithuania\",\"nameZh\":\"立陶宛\",\"capital\":\"Vilnius\",\"capitalZh\":\"维尔纽斯\",\"lat\":55.28,\"lng\":23.88},{\"iso\":\"LR\",\"nameEn\":\"Liberia\",\"nameZh\":\"利比里亚\",\"capital\":\"Monrovia\",\"capitalZh\":\"Monrovia\",\"lat\":6.43,\"lng\":-9.41},{\"iso\":\"LY\",\"nameEn\":\"Libya\",\"nameZh\":\"利比亚\",\"capital\":\"Tripoli\",\"capitalZh\":\"的黎波里\",\"lat\":27,\"lng\":17.97},{\"iso\":\"LI\",\"nameEn\":\"Liechtenstein\",\"nameZh\":\"列支敦士登\",\"capital\":\"Vaduz\",\"capitalZh\":\"瓦杜兹\",\"lat\":47.27,\"lng\":9.53},{\"iso\":\"LU\",\"nameEn\":\"Luxembourg\",\"nameZh\":\"卢森堡\",\"capital\":\"Luxembourg\",\"capitalZh\":\"卢森堡\",\"lat\":49.77,\"lng\":5.97},{\"iso\":\"RW\",\"nameEn\":\"Rwanda\",\"nameZh\":\"卢旺达\",\"capital\":\"Kigali\",\"capitalZh\":\"Kigali\",\"lat\":-2.01,\"lng\":29.92},{\"iso\":\"RO\",\"nameEn\":\"Romania\",\"nameZh\":\"罗马尼亚\",\"capital\":\"Bucharest\",\"capitalZh\":\"布加勒斯特\",\"lat\":45.86,\"lng\":24.94},{\"iso\":\"MG\",\"nameEn\":\"Madagascar\",\"nameZh\":\"马达加斯加\",\"capital\":\"Antananarivo\",\"capitalZh\":\"塔那那利佛\",\"lat\":-19.36,\"lng\":46.69},{\"iso\":\"MV\",\"nameEn\":\"Maldives\",\"nameZh\":\"马尔代夫\",\"capital\":\"Malé\",\"capitalZh\":\"马累\",\"lat\":3.25,\"lng\":73},{\"iso\":\"MT\",\"nameEn\":\"Malta\",\"nameZh\":\"马耳他\",\"capital\":\"Valletta\",\"capitalZh\":\"瓦莱塔\",\"lat\":35.83,\"lng\":14.58},{\"iso\":\"MW\",\"nameEn\":\"Malawi\",\"nameZh\":\"马拉维\",\"capital\":\"Lilongwe\",\"capitalZh\":\"Lilongwe\",\"lat\":-13.17,\"lng\":34.19},{\"iso\":\"MY\",\"nameEn\":\"Malaysia\",\"nameZh\":\"马来西亚\",\"capital\":\"Kuala Lumpur\",\"capitalZh\":\"吉隆坡\",\"lat\":3.55,\"lng\":114.68},{\"iso\":\"ML\",\"nameEn\":\"Mali\",\"nameZh\":\"马里\",\"capital\":\"Bamako\",\"capitalZh\":\"Bamako\",\"lat\":17.27,\"lng\":-3.54},{\"iso\":\"MH\",\"nameEn\":\"Marshall Islands\",\"nameZh\":\"马绍尔群岛\",\"capital\":\"Majuro\",\"capitalZh\":\"Majuro\",\"lat\":9,\"lng\":168},{\"iso\":\"MU\",\"nameEn\":\"Mauritius\",\"nameZh\":\"毛里求斯\",\"capital\":\"Port Louis\",\"capitalZh\":\"Port Louis\",\"lat\":-20.28,\"lng\":57.55},{\"iso\":\"MR\",\"nameEn\":\"Mauritania\",\"nameZh\":\"毛里塔尼亚\",\"capital\":\"Nouakchott\",\"capitalZh\":\"Nouakchott\",\"lat\":20.21,\"lng\":-10.33},{\"iso\":\"US\",\"nameEn\":\"United States\",\"nameZh\":\"美国\",\"capital\":\"Washington D.C.\",\"capitalZh\":\"华盛顿\",\"lat\":39.5,\"lng\":-99.06},{\"iso\":\"MN\",\"nameEn\":\"Mongolia\",\"nameZh\":\"蒙古\",\"capital\":\"Ulan Bator\",\"capitalZh\":\"Ulan Bator\",\"lat\":46.82,\"lng\":102.95},{\"iso\":\"BD\",\"nameEn\":\"Bangladesh\",\"nameZh\":\"孟加拉国\",\"capital\":\"Dhaka\",\"capitalZh\":\"达卡\",\"lat\":23.84,\"lng\":90.27},{\"iso\":\"PE\",\"nameEn\":\"Peru\",\"nameZh\":\"秘鲁\",\"capital\":\"Lima\",\"capitalZh\":\"利马\",\"lat\":-9.19,\"lng\":-74.39},{\"iso\":\"FM\",\"nameEn\":\"Micronesia\",\"nameZh\":\"密克罗尼西亚\",\"capital\":\"Palikir\",\"capitalZh\":\"Palikir\",\"lat\":6.92,\"lng\":158.25},{\"iso\":\"MM\",\"nameEn\":\"Myanmar\",\"nameZh\":\"缅甸\",\"capital\":\"Naypyidaw\",\"capitalZh\":\"内比都\",\"lat\":21.02,\"lng\":96.51},{\"iso\":\"MD\",\"nameEn\":\"Moldova\",\"nameZh\":\"摩尔多瓦\",\"capital\":\"Chișinău\",\"capitalZh\":\"基希讷乌\",\"lat\":47.2,\"lng\":28.41},{\"iso\":\"MA\",\"nameEn\":\"Morocco\",\"nameZh\":\"摩洛哥\",\"capital\":\"Rabat\",\"capitalZh\":\"拉巴特\",\"lat\":29.89,\"lng\":-8.42},{\"iso\":\"MC\",\"nameEn\":\"Monaco\",\"nameZh\":\"摩纳哥\",\"capital\":\"Monaco\",\"capitalZh\":\"Monaco\",\"lat\":43.73,\"lng\":7.4},{\"iso\":\"MZ\",\"nameEn\":\"Mozambique\",\"nameZh\":\"莫桑比克\",\"capital\":\"Maputo\",\"capitalZh\":\"Maputo\",\"lat\":-17.23,\"lng\":35.47},{\"iso\":\"MX\",\"nameEn\":\"Mexico\",\"nameZh\":\"墨西哥\",\"capital\":\"Mexico City\",\"capitalZh\":\"墨西哥城\",\"lat\":23.94,\"lng\":-102.58},{\"iso\":\"NA\",\"nameEn\":\"Namibia\",\"nameZh\":\"纳米比亚\",\"capital\":\"Windhoek\",\"capitalZh\":\"Windhoek\",\"lat\":-22.1,\"lng\":17.16},{\"iso\":\"ZA\",\"nameEn\":\"South Africa\",\"nameZh\":\"南非\",\"capital\":\"Pretoria\",\"capitalZh\":\"比勒陀利亚\",\"lat\":-28.96,\"lng\":25.12},{\"iso\":\"AQ\",\"nameEn\":\"Antarctica\",\"nameZh\":\"南极洲\",\"capital\":\"\",\"capitalZh\":\"\",\"lat\":-77.33,\"lng\":31.21},{\"iso\":\"SS\",\"nameEn\":\"South Sudan\",\"nameZh\":\"南苏丹\",\"capital\":\"Juba\",\"capitalZh\":\"Juba\",\"lat\":7.29,\"lng\":30.2},{\"iso\":\"NR\",\"nameEn\":\"Nauru\",\"nameZh\":\"瑙鲁\",\"capital\":\"Yaren\",\"capitalZh\":\"Yaren\",\"lat\":-0.53,\"lng\":166.92},{\"iso\":\"NI\",\"nameEn\":\"Nicaragua\",\"nameZh\":\"尼加拉瓜\",\"capital\":\"Managua\",\"capitalZh\":\"Managua\",\"lat\":12.85,\"lng\":-85.02},{\"iso\":\"NP\",\"nameEn\":\"Nepal\",\"nameZh\":\"尼泊尔\",\"capital\":\"Kathmandu\",\"capitalZh\":\"加德满都\",\"lat\":28.24,\"lng\":84.01},{\"iso\":\"NE\",\"nameEn\":\"Niger\",\"nameZh\":\"尼日尔\",\"capital\":\"Niamey\",\"capitalZh\":\"Niamey\",\"lat\":17.35,\"lng\":9.33},{\"iso\":\"NG\",\"nameEn\":\"Nigeria\",\"nameZh\":\"尼日利亚\",\"capital\":\"Abuja\",\"capitalZh\":\"阿布贾\",\"lat\":9.55,\"lng\":8},{\"iso\":\"NO\",\"nameEn\":\"Norway\",\"nameZh\":\"挪威\",\"capital\":\"Oslo\",\"capitalZh\":\"奥斯陆\",\"lat\":64.54,\"lng\":14.24},{\"iso\":\"PW\",\"nameEn\":\"Palau\",\"nameZh\":\"帕劳\",\"capital\":\"Ngerulmud\",\"capitalZh\":\"Ngerulmud\",\"lat\":7.5,\"lng\":134.5},{\"iso\":\"PT\",\"nameEn\":\"Portugal\",\"nameZh\":\"葡萄牙\",\"capital\":\"Lisbon\",\"capitalZh\":\"里斯本\",\"lat\":39.63,\"lng\":-8.06},{\"iso\":\"JP\",\"nameEn\":\"Japan\",\"nameZh\":\"日本\",\"capital\":\"Tokyo\",\"capitalZh\":\"东京\",\"lat\":36.02,\"lng\":136.88},{\"iso\":\"SE\",\"nameEn\":\"Sweden\",\"nameZh\":\"瑞典\",\"capital\":\"Stockholm\",\"capitalZh\":\"斯德哥尔摩\",\"lat\":62.81,\"lng\":16.6},{\"iso\":\"CH\",\"nameEn\":\"Switzerland\",\"nameZh\":\"瑞士\",\"capital\":\"Bern\",\"capitalZh\":\"伯尔尼\",\"lat\":46.79,\"lng\":8.12},{\"iso\":\"SV\",\"nameEn\":\"El Salvador\",\"nameZh\":\"萨尔瓦多\",\"capital\":\"San Salvador\",\"capitalZh\":\"San Salvador\",\"lat\":13.73,\"lng\":-88.87},{\"iso\":\"WS\",\"nameEn\":\"Samoa\",\"nameZh\":\"萨摩亚\",\"capital\":\"Apia\",\"capitalZh\":\"Apia\",\"lat\":-13.58,\"lng\":-172.33},{\"iso\":\"RS\",\"nameEn\":\"Serbia\",\"nameZh\":\"塞尔维亚\",\"capital\":\"Belgrade\",\"capitalZh\":\"贝尔格莱德\",\"lat\":44.23,\"lng\":20.82},{\"iso\":\"SL\",\"nameEn\":\"Sierra Leone\",\"nameZh\":\"塞拉利昂\",\"capital\":\"Freetown\",\"capitalZh\":\"Freetown\",\"lat\":8.53,\"lng\":-11.8},{\"iso\":\"SN\",\"nameEn\":\"Senegal\",\"nameZh\":\"塞内加尔\",\"capital\":\"Dakar\",\"capitalZh\":\"达喀尔\",\"lat\":14.35,\"lng\":-14.51},{\"iso\":\"CY\",\"nameEn\":\"Cyprus\",\"nameZh\":\"塞浦路斯\",\"capital\":\"Nicosia\",\"capitalZh\":\"尼科西亚\",\"lat\":34.91,\"lng\":33.04},{\"iso\":\"SC\",\"nameEn\":\"Seychelles\",\"nameZh\":\"塞舌尔\",\"capital\":\"Victoria\",\"capitalZh\":\"Victoria\",\"lat\":-4.58,\"lng\":55.67},{\"iso\":\"SA\",\"nameEn\":\"Saudi Arabia\",\"nameZh\":\"沙特阿拉伯\",\"capital\":\"Riyadh\",\"capitalZh\":\"利雅得\",\"lat\":24.12,\"lng\":44.52},{\"iso\":\"ST\",\"nameEn\":\"São Tomé and Príncipe\",\"nameZh\":\"圣多美和普林西比\",\"capital\":\"São Tomé\",\"capitalZh\":\"São Tomé\",\"lat\":1,\"lng\":7},{\"iso\":\"KN\",\"nameEn\":\"Saint Kitts and Nevis\",\"nameZh\":\"圣基茨和尼维斯\",\"capital\":\"Basseterre\",\"capitalZh\":\"Basseterre\",\"lat\":17.33,\"lng\":-62.75},{\"iso\":\"LC\",\"nameEn\":\"Saint Lucia\",\"nameZh\":\"圣卢西亚\",\"capital\":\"Castries\",\"capitalZh\":\"Castries\",\"lat\":13.88,\"lng\":-60.97},{\"iso\":\"SM\",\"nameEn\":\"San Marino\",\"nameZh\":\"圣马力诺\",\"capital\":\"City of San Marino\",\"capitalZh\":\"City of San Marino\",\"lat\":43.77,\"lng\":12.42},{\"iso\":\"VC\",\"nameEn\":\"Saint Vincent and the Grenadines\",\"nameZh\":\"圣文森特和格林纳丁斯\",\"capital\":\"Kingstown\",\"capitalZh\":\"Kingstown\",\"lat\":13.25,\"lng\":-61.2},{\"iso\":\"LK\",\"nameEn\":\"Sri Lanka\",\"nameZh\":\"斯里兰卡\",\"capital\":\"Colombo\",\"capitalZh\":\"科伦坡\",\"lat\":7.7,\"lng\":80.67},{\"iso\":\"SK\",\"nameEn\":\"Slovakia\",\"nameZh\":\"斯洛伐克\",\"capital\":\"Bratislava\",\"capitalZh\":\"布拉迪斯拉发\",\"lat\":48.73,\"lng\":19.51},{\"iso\":\"SI\",\"nameEn\":\"Slovenia\",\"nameZh\":\"斯洛文尼亚\",\"capital\":\"Ljubljana\",\"capitalZh\":\"卢布尔雅那\",\"lat\":46.13,\"lng\":14.94},{\"iso\":\"SZ\",\"nameEn\":\"Eswatini\",\"nameZh\":\"斯威士兰\",\"capital\":\"Lobamba\",\"capitalZh\":\"Lobamba\",\"lat\":-26.49,\"lng\":31.4},{\"iso\":\"SD\",\"nameEn\":\"Sudan\",\"nameZh\":\"苏丹\",\"capital\":\"Khartoum\",\"capitalZh\":\"喀土穆\",\"lat\":15.99,\"lng\":29.86},{\"iso\":\"SR\",\"nameEn\":\"Suriname\",\"nameZh\":\"苏里南\",\"capital\":\"Paramaribo\",\"capitalZh\":\"Paramaribo\",\"lat\":4.12,\"lng\":-55.91},{\"iso\":\"SB\",\"nameEn\":\"Solomon Islands\",\"nameZh\":\"所罗门群岛\",\"capital\":\"Honiara\",\"capitalZh\":\"Honiara\",\"lat\":-7.9,\"lng\":159.1},{\"iso\":\"SO\",\"nameEn\":\"Somalia\",\"nameZh\":\"索马里\",\"capital\":\"Mogadishu\",\"capitalZh\":\"Mogadishu\",\"lat\":4.75,\"lng\":45.73},{\"iso\":\"TJ\",\"nameEn\":\"Tajikistan\",\"nameZh\":\"塔吉克斯坦\",\"capital\":\"Dushanbe\",\"capitalZh\":\"杜尚别\",\"lat\":38.58,\"lng\":71.03},{\"iso\":\"TW\",\"nameEn\":\"Taiwan\",\"nameZh\":\"台湾\",\"capital\":\"Taipei\",\"capitalZh\":\"台北\",\"lat\":23.74,\"lng\":120.97},{\"iso\":\"TH\",\"nameEn\":\"Thailand\",\"nameZh\":\"泰国\",\"capital\":\"Bangkok\",\"capitalZh\":\"曼谷\",\"lat\":15.02,\"lng\":101.01},{\"iso\":\"TZ\",\"nameEn\":\"Tanzania\",\"nameZh\":\"坦桑尼亚\",\"capital\":\"Dodoma\",\"capitalZh\":\"多多马\",\"lat\":-6.26,\"lng\":34.75},{\"iso\":\"TO\",\"nameEn\":\"Tonga\",\"nameZh\":\"汤加\",\"capital\":\"Nuku'alofa\",\"capitalZh\":\"Nuku'alofa\",\"lat\":-20,\"lng\":-175},{\"iso\":\"TT\",\"nameEn\":\"Trinidad and Tobago\",\"nameZh\":\"特立尼达和多巴哥\",\"capital\":\"Port of Spain\",\"capitalZh\":\"Port of Spain\",\"lat\":10.43,\"lng\":-61.33},{\"iso\":\"TN\",\"nameEn\":\"Tunisia\",\"nameZh\":\"突尼斯\",\"capital\":\"Tunis\",\"capitalZh\":\"突尼斯\",\"lat\":34.17,\"lng\":9.53},{\"iso\":\"TV\",\"nameEn\":\"Tuvalu\",\"nameZh\":\"图瓦卢\",\"capital\":\"Funafuti\",\"capitalZh\":\"Funafuti\",\"lat\":-8,\"lng\":178},{\"iso\":\"TR\",\"nameEn\":\"Türkiye\",\"nameZh\":\"土耳其\",\"capital\":\"Ankara\",\"capitalZh\":\"安卡拉\",\"lat\":38.99,\"lng\":35.39},{\"iso\":\"TM\",\"nameEn\":\"Turkmenistan\",\"nameZh\":\"土库曼斯坦\",\"capital\":\"Ashgabat\",\"capitalZh\":\"阿什哈巴德\",\"lat\":39.09,\"lng\":59.28},{\"iso\":\"VU\",\"nameEn\":\"Vanuatu\",\"nameZh\":\"瓦努阿图\",\"capital\":\"Port Vila\",\"capitalZh\":\"Port Vila\",\"lat\":-15.22,\"lng\":166.91},{\"iso\":\"GT\",\"nameEn\":\"Guatemala\",\"nameZh\":\"危地马拉\",\"capital\":\"Guatemala City\",\"capitalZh\":\"Guatemala City\",\"lat\":15.7,\"lng\":-90.37},{\"iso\":\"VE\",\"nameEn\":\"Venezuela\",\"nameZh\":\"委内瑞拉\",\"capital\":\"Caracas\",\"capitalZh\":\"加拉加斯\",\"lat\":7.16,\"lng\":-66.16},{\"iso\":\"BN\",\"nameEn\":\"Brunei\",\"nameZh\":\"文莱\",\"capital\":\"Bandar Seri Begawan\",\"capitalZh\":\"Bandar Seri Begawan\",\"lat\":4.69,\"lng\":114.92},{\"iso\":\"UG\",\"nameEn\":\"Uganda\",\"nameZh\":\"乌干达\",\"capital\":\"Kampala\",\"capitalZh\":\"坎帕拉\",\"lat\":1.3,\"lng\":32.36},{\"iso\":\"UA\",\"nameEn\":\"Ukraine\",\"nameZh\":\"乌克兰\",\"capital\":\"Kyiv\",\"capitalZh\":\"基辅\",\"lat\":49.15,\"lng\":31.23},{\"iso\":\"UY\",\"nameEn\":\"Uruguay\",\"nameZh\":\"乌拉圭\",\"capital\":\"Montevideo\",\"capitalZh\":\"蒙得维的亚\",\"lat\":-32.78,\"lng\":-56},{\"iso\":\"UZ\",\"nameEn\":\"Uzbekistan\",\"nameZh\":\"乌兹别克斯坦\",\"capital\":\"Tashkent\",\"capitalZh\":\"塔什干\",\"lat\":41.75,\"lng\":63.2},{\"iso\":\"ES\",\"nameEn\":\"Spain\",\"nameZh\":\"西班牙\",\"capital\":\"Madrid\",\"capitalZh\":\"马德里\",\"lat\":40.35,\"lng\":-3.62},{\"iso\":\"EH\",\"nameEn\":\"Western Sahara\",\"nameZh\":\"西撒哈拉\",\"capital\":\"El Aaiún\",\"capitalZh\":\"El Aaiún\",\"lat\":24.29,\"lng\":-12.14},{\"iso\":\"GR\",\"nameEn\":\"Greece\",\"nameZh\":\"希腊\",\"capital\":\"Athens\",\"capitalZh\":\"雅典\",\"lat\":39.34,\"lng\":22.56},{\"iso\":\"HK\",\"nameEn\":\"Hong Kong\",\"nameZh\":\"香港\",\"capital\":\"City of Victoria\",\"capitalZh\":\"City of Victoria\",\"lat\":22.27,\"lng\":114.19},{\"iso\":\"SG\",\"nameEn\":\"Singapore\",\"nameZh\":\"新加坡\",\"capital\":\"Singapore\",\"capitalZh\":\"新加坡\",\"lat\":1.37,\"lng\":103.8},{\"iso\":\"NC\",\"nameEn\":\"New Caledonia\",\"nameZh\":\"新喀里多尼亚\",\"capital\":\"Nouméa\",\"capitalZh\":\"Nouméa\",\"lat\":-21.26,\"lng\":165.53},{\"iso\":\"NZ\",\"nameEn\":\"New Zealand\",\"nameZh\":\"新西兰\",\"capital\":\"Wellington\",\"capitalZh\":\"惠灵顿\",\"lat\":-43.99,\"lng\":170.51},{\"iso\":\"HU\",\"nameEn\":\"Hungary\",\"nameZh\":\"匈牙利\",\"capital\":\"Budapest\",\"capitalZh\":\"布达佩斯\",\"lat\":47.2,\"lng\":19.36},{\"iso\":\"SY\",\"nameEn\":\"Syria\",\"nameZh\":\"叙利亚\",\"capital\":\"Damascus\",\"capitalZh\":\"大马士革\",\"lat\":35.01,\"lng\":38.54},{\"iso\":\"JM\",\"nameEn\":\"Jamaica\",\"nameZh\":\"牙买加\",\"capital\":\"Kingston\",\"capitalZh\":\"Kingston\",\"lat\":18.14,\"lng\":-77.32},{\"iso\":\"AM\",\"nameEn\":\"Armenia\",\"nameZh\":\"亚美尼亚\",\"capital\":\"Yerevan\",\"capitalZh\":\"埃里温\",\"lat\":40.22,\"lng\":45},{\"iso\":\"YE\",\"nameEn\":\"Yemen\",\"nameZh\":\"也门\",\"capital\":\"Sana'a\",\"capitalZh\":\"萨那\",\"lat\":15.91,\"lng\":47.54},{\"iso\":\"IQ\",\"nameEn\":\"Iraq\",\"nameZh\":\"伊拉克\",\"capital\":\"Baghdad\",\"capitalZh\":\"巴格达\",\"lat\":33.04,\"lng\":43.76},{\"iso\":\"IR\",\"nameEn\":\"Iran\",\"nameZh\":\"伊朗\",\"capital\":\"Tehran\",\"capitalZh\":\"德黑兰\",\"lat\":32.52,\"lng\":54.29},{\"iso\":\"IL\",\"nameEn\":\"Israel\",\"nameZh\":\"以色列\",\"capital\":\"Jerusalem\",\"capitalZh\":\"耶路撒冷\",\"lat\":31.49,\"lng\":35},{\"iso\":\"IT\",\"nameEn\":\"Italy\",\"nameZh\":\"意大利\",\"capital\":\"Rome\",\"capitalZh\":\"罗马\",\"lat\":43.47,\"lng\":12.22},{\"iso\":\"IN\",\"nameEn\":\"India\",\"nameZh\":\"印度\",\"capital\":\"New Delhi\",\"capitalZh\":\"新德里\",\"lat\":22.92,\"lng\":79.59},{\"iso\":\"ID\",\"nameEn\":\"Indonesia\",\"nameZh\":\"印度尼西亚\",\"capital\":\"Jakarta\",\"capitalZh\":\"雅加达\",\"lat\":-0.25,\"lng\":114.02},{\"iso\":\"GB\",\"nameEn\":\"United Kingdom\",\"nameZh\":\"英国\",\"capital\":\"London\",\"capitalZh\":\"伦敦\",\"lat\":53.88,\"lng\":-2.66},{\"iso\":\"JO\",\"nameEn\":\"Jordan\",\"nameZh\":\"约旦\",\"capital\":\"Amman\",\"capitalZh\":\"安曼\",\"lat\":31.25,\"lng\":36.78},{\"iso\":\"VN\",\"nameEn\":\"Vietnam\",\"nameZh\":\"越南\",\"capital\":\"Hanoi\",\"capitalZh\":\"河内\",\"lat\":16.66,\"lng\":106.29},{\"iso\":\"ZM\",\"nameEn\":\"Zambia\",\"nameZh\":\"赞比亚\",\"capital\":\"Lusaka\",\"capitalZh\":\"Lusaka\",\"lat\":-13.4,\"lng\":27.73},{\"iso\":\"TD\",\"nameEn\":\"Chad\",\"nameZh\":\"乍得\",\"capital\":\"N'Djamena\",\"capitalZh\":\"N'Djamena\",\"lat\":15.33,\"lng\":18.58},{\"iso\":\"CL\",\"nameEn\":\"Chile\",\"nameZh\":\"智利\",\"capital\":\"Santiago\",\"capitalZh\":\"圣地亚哥\",\"lat\":-37.34,\"lng\":-71.67},{\"iso\":\"CF\",\"nameEn\":\"Central African Republic\",\"nameZh\":\"中非共和国\",\"capital\":\"Bangui\",\"capitalZh\":\"Bangui\",\"lat\":6.54,\"lng\":20.37},{\"iso\":\"CN\",\"nameEn\":\"China\",\"nameZh\":\"中国\",\"capital\":\"Beijing\",\"capitalZh\":\"北京\",\"lat\":36.61,\"lng\":103.87},{\"iso\":\"NaN\",\"nameEn\":\"Country NaN\",\"nameZh\":\"Country NaN\",\"capital\":\"\",\"capitalZh\":\"\",\"lat\":35.27,\"lng\":33.56},{\"iso\":\"NaN\",\"nameEn\":\"Country NaN\",\"nameZh\":\"Country NaN\",\"capital\":\"\",\"capitalZh\":\"\",\"lat\":9.76,\"lng\":46.23},{\"iso\":\"NaN\",\"nameEn\":\"Country NaN\",\"nameZh\":\"Country NaN\",\"capital\":\"\",\"capitalZh\":\"\",\"lat\":42.58,\"lng\":20.9}]");
var COUNTRY_BY_ISO = new Map(COUNTRIES.map((c) => [c.iso, c]));
var COUNTRY_COUNT = COUNTRIES.length;
var ALIASES = {
	US: [
		"usa",
		"america",
		"united states of america",
		"美利坚"
	],
	GB: [
		"uk",
		"britain",
		"england",
		"great britain",
		"英国"
	],
	KR: [
		"korea",
		"south korea",
		"hanguk"
	],
	KP: ["dprk", "north korea"],
	RU: [
		"russia",
		"俄国",
		"苏联"
	],
	CN: [
		"prc",
		"china",
		"中华",
		"china"
	],
	TW: ["taiwan", "taipei"],
	JP: ["japan", "nippon"],
	DE: ["germany", "deutschland"],
	FR: ["france"],
	AE: ["uae", "emirates"],
	CZ: ["czech", "czechia"],
	NL: ["holland", "netherlands"],
	CH: ["switzerland"],
	CD: ["drc", "congo-kinshasa"],
	CG: ["congo-brazzaville"]
};
function searchCountries(query, limit = 8) {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	const scored = [];
	for (const c of COUNTRIES) {
		const hay = [
			c.nameZh,
			c.nameEn,
			c.iso,
			c.capital,
			c.capitalZh,
			...ALIASES[c.iso] ?? []
		].map((x) => x.toLowerCase());
		let s = 0;
		if (c.nameZh === query.trim() || c.nameEn.toLowerCase() === q) s = 100;
		else if (c.nameZh.startsWith(query.trim()) || c.nameEn.toLowerCase().startsWith(q)) s = 80;
		else if (c.iso.toLowerCase() === q) s = 90;
		else if (hay.some((h) => h.startsWith(q))) s = 70;
		else if (hay.some((h) => h.includes(q))) s = 40;
		if (s) scored.push({
			c,
			s
		});
	}
	scored.sort((a, b) => b.s - a.s || a.c.nameZh.localeCompare(b.c.nameZh, "zh-CN"));
	return scored.slice(0, limit).map((x) => x.c);
}
var CS2_MAJORS = [
	{
		id: "jonkoping",
		city: "Jönköping",
		cityZh: "延雪平",
		country: "Sweden",
		countryZh: "瑞典",
		lat: 57.7826,
		lng: 14.1618,
		events: [{
			name: "DreamHack Winter",
			year: 2013,
			winner: "fnatic"
		}, {
			name: "DreamHack Winter",
			year: 2014,
			winner: "LDLC"
		}]
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
			{
				name: "EMS One Katowice",
				year: 2014,
				winner: "Virtus.pro"
			},
			{
				name: "ESL One Katowice",
				year: 2015,
				winner: "fnatic"
			},
			{
				name: "IEM Katowice Major",
				year: 2019,
				winner: "Astralis"
			}
		]
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
			{
				name: "ESL One Cologne",
				year: 2014,
				winner: "Ninjas in Pyjamas"
			},
			{
				name: "ESL One Cologne",
				year: 2015,
				winner: "fnatic"
			},
			{
				name: "ESL One Cologne",
				year: 2016,
				winner: "SK Gaming"
			},
			{
				name: "IEM Cologne Major",
				year: 2026,
				winner: "Falcons"
			}
		]
	},
	{
		id: "cluj",
		city: "Cluj-Napoca",
		cityZh: "克卢日-纳波卡",
		country: "Romania",
		countryZh: "罗马尼亚",
		lat: 46.7712,
		lng: 23.6236,
		events: [{
			name: "DreamHack Open Cluj-Napoca",
			year: 2015,
			winner: "Envy"
		}]
	},
	{
		id: "columbus",
		city: "Columbus",
		cityZh: "哥伦布",
		country: "United States",
		countryZh: "美国",
		lat: 39.9612,
		lng: -82.9988,
		events: [{
			name: "MLG Columbus",
			year: 2016,
			winner: "Luminosity"
		}]
	},
	{
		id: "atlanta",
		city: "Atlanta",
		cityZh: "亚特兰大",
		country: "United States",
		countryZh: "美国",
		lat: 33.749,
		lng: -84.388,
		events: [{
			name: "ELEAGUE Major Atlanta",
			year: 2017,
			winner: "Astralis"
		}]
	},
	{
		id: "krakow",
		city: "Kraków",
		cityZh: "克拉科夫",
		country: "Poland",
		countryZh: "波兰",
		lat: 50.0647,
		lng: 19.945,
		events: [{
			name: "PGL Major Kraków",
			year: 2017,
			winner: "Gambit"
		}]
	},
	{
		id: "boston",
		city: "Boston",
		cityZh: "波士顿",
		country: "United States",
		countryZh: "美国",
		lat: 42.3601,
		lng: -71.0589,
		events: [{
			name: "ELEAGUE Major Boston",
			year: 2018,
			winner: "Cloud9"
		}]
	},
	{
		id: "london",
		city: "London",
		cityZh: "伦敦",
		country: "United Kingdom",
		countryZh: "英国",
		lat: 51.5074,
		lng: -.1278,
		events: [{
			name: "FACEIT Major London",
			year: 2018,
			winner: "Astralis"
		}]
	},
	{
		id: "berlin",
		city: "Berlin",
		cityZh: "柏林",
		country: "Germany",
		countryZh: "德国",
		lat: 52.52,
		lng: 13.405,
		events: [{
			name: "StarLadder Berlin Major",
			year: 2019,
			winner: "Astralis"
		}]
	},
	{
		id: "stockholm",
		city: "Stockholm",
		cityZh: "斯德哥尔摩",
		country: "Sweden",
		countryZh: "瑞典",
		lat: 59.3293,
		lng: 18.0686,
		events: [{
			name: "PGL Major Stockholm",
			year: 2021,
			winner: "Natus Vincere"
		}]
	},
	{
		id: "antwerp",
		city: "Antwerp",
		cityZh: "安特卫普",
		country: "Belgium",
		countryZh: "比利时",
		lat: 51.2194,
		lng: 4.4025,
		events: [{
			name: "PGL Major Antwerp",
			year: 2022,
			winner: "FaZe Clan"
		}]
	},
	{
		id: "rio",
		city: "Rio de Janeiro",
		cityZh: "里约热内卢",
		country: "Brazil",
		countryZh: "巴西",
		lat: -22.9068,
		lng: -43.1729,
		events: [{
			name: "IEM Rio Major",
			year: 2022,
			winner: "Outsiders"
		}]
	},
	{
		id: "paris",
		city: "Paris",
		cityZh: "巴黎",
		country: "France",
		countryZh: "法国",
		lat: 48.8566,
		lng: 2.3522,
		events: [{
			name: "BLAST.tv Paris Major",
			year: 2023,
			winner: "Vitality"
		}]
	},
	{
		id: "copenhagen",
		city: "Copenhagen",
		cityZh: "哥本哈根",
		country: "Denmark",
		countryZh: "丹麦",
		lat: 55.6761,
		lng: 12.5683,
		events: [{
			name: "PGL Major Copenhagen",
			year: 2024,
			winner: "Natus Vincere"
		}]
	},
	{
		id: "shanghai",
		city: "Shanghai",
		cityZh: "上海",
		country: "China",
		countryZh: "中国",
		lat: 31.2304,
		lng: 121.4737,
		events: [{
			name: "Perfect World Shanghai Major",
			year: 2024,
			winner: "Team Spirit"
		}]
	},
	{
		id: "austin",
		city: "Austin",
		cityZh: "奥斯汀",
		country: "United States",
		countryZh: "美国",
		lat: 30.2672,
		lng: -97.7431,
		events: [{
			name: "BLAST.tv Austin Major",
			year: 2025,
			winner: "Vitality"
		}]
	},
	{
		id: "budapest",
		city: "Budapest",
		cityZh: "布达佩斯",
		country: "Hungary",
		countryZh: "匈牙利",
		lat: 47.4979,
		lng: 19.0402,
		events: [{
			name: "StarLadder Budapest Major",
			year: 2025,
			winner: "Vitality"
		}]
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[background-color,box-shadow,transform,color,opacity] duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			secondary: "bg-surface-2 text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "bg-transparent text-fg-muted hover:bg-surface-2 hover:text-fg",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface-2"
		},
		size: {
			default: "h-11 px-4 text-sm",
			sm: "h-9 px-3 text-sm",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function CountryCard() {
	const selectedIso = useGlobeStore((s) => s.selectedIso);
	const selectedMarker = useGlobeStore((s) => s.selectedMarker);
	const visited = useGlobeStore((s) => s.visited);
	const customMarkers = useGlobeStore((s) => s.customMarkers);
	const toggleVisited = useGlobeStore((s) => s.toggleVisited);
	const removeMarker = useGlobeStore((s) => s.removeMarker);
	const requestFlyTo = useGlobeStore((s) => s.requestFlyTo);
	const clearSelection = useGlobeStore((s) => s.clearSelection);
	const sTierYear = useGlobeStore((s) => s.sTierYear);
	const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
	const setHighlightedTeam = useGlobeStore((s) => s.setHighlightedTeam);
	if (selectedMarker?.kind === "stier") {
		const city = citiesUpToYear(sTierYear).find((m) => m.id === selectedMarker.id);
		if (!city) return null;
		const majorCount = city.events.filter((e) => e.tier === "Major").length;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card-enter pointer-events-auto w-full max-w-sm rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium tracking-wide text-marker-major uppercase",
					children: [majorCount > 0 ? "Major · S 级赛事" : "S 级赛事", city.holy ? " · 电竞圣地" : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-1 font-display text-xl font-medium tracking-tight text-fg",
					children: [city.cityZh, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-sm font-normal text-fg-muted",
						children: city.city
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-fg-muted",
					children: [
						city.events.length,
						" 场 · ",
						formatCoord(city.lat, city.lng)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 max-h-56 space-y-2 overflow-y-auto pr-1",
					children: city.events.map((ev) => {
						const key = championKey(ev.champion);
						const active = highlightedTeam === key;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm leading-snug",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-fg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono tabular-nums text-fg-muted",
											children: [
												ev.year,
												"年",
												ev.month,
												"月"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-fg-subtle",
											children: " —— "
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: cn("rounded-sm px-0.5 font-medium underline-offset-2 hover:underline", active ? "text-marker-major" : "text-fg"),
											onClick: () => setHighlightedTeam(active ? null : key),
											title: "高亮该战队所有夺冠城市",
											children: ev.champion
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-fg-subtle",
											children: " —— "
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-fg-muted",
											children: ev.name
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-xs text-fg-subtle",
									children: [
										ev.tier === "Major" ? "Major" : "S 级",
										" · ",
										ev.venue ?? "场馆待考",
										ev.cityEn !== city.city ? ` · ${ev.cityZh}` : ""
									]
								}),
								ev.note?.includes("级别边缘") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-fg-subtle",
									children: "级别边缘"
								}) : null
							]
						}, `${ev.year}-${ev.month}-${ev.name}`);
					})
				}),
				highlightedTeam ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs text-fg-muted",
					children: [
						"正在查看 ",
						CHAMPION_LABEL[highlightedTeam] ?? highlightedTeam,
						" 王朝",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "ml-2 text-fg underline-offset-2 hover:underline",
							onClick: () => setHighlightedTeam(null),
							children: "清除"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-fg-subtle",
					children: "点击战队名，查看其夺冠版图"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => requestFlyTo(city.lat, city.lng, 1.62),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), "定位"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: clearSelection,
						children: "关闭"
					})]
				})
			]
		});
	}
	if (selectedMarker?.kind === "cs2") {
		const city = CS2_MAJORS.find((m) => m.id === selectedMarker.id);
		if (!city) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card-enter pointer-events-auto w-full max-w-sm rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-accent uppercase",
					children: "CS Major"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-1 font-display text-xl font-medium tracking-tight text-fg",
					children: [city.cityZh, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-sm font-normal text-fg-muted",
						children: city.city
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-fg-muted",
					children: [
						city.countryZh,
						" · ",
						formatCoord(city.lat, city.lng)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1.5",
					children: city.events.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-fg",
							children: [
								ev.year,
								" ",
								ev.name
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-fg-muted",
							children: ev.winner
						})]
					}, `${ev.year}-${ev.name}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => requestFlyTo(city.lat, city.lng, 1.62),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), "定位"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: clearSelection,
						children: "关闭"
					})]
				})
			]
		});
	}
	if (selectedMarker?.kind === "custom") {
		const marker = customMarkers.find((m) => m.id === selectedMarker.id);
		if (!marker) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card-enter pointer-events-auto w-full max-w-sm rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-fg-muted uppercase",
					children: "我的标记"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-xl font-medium tracking-tight text-fg",
					children: marker.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-xs text-fg-muted",
					children: formatCoord(marker.lat, marker.lng)
				}),
				marker.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-fg-muted",
					children: marker.note
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => requestFlyTo(marker.lat, marker.lng, 1.62),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), "定位"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => removeMarker(marker.id),
						children: "删除"
					})]
				})
			]
		});
	}
	if (!selectedIso) return null;
	const country = COUNTRY_BY_ISO.get(selectedIso);
	if (!country) return null;
	const lit = visited.includes(country.iso);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-enter pointer-events-auto w-full max-w-sm rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium tracking-tight text-fg",
					children: country.nameZh
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-sm text-fg-muted",
					children: country.nameEn
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-sm bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-fg-muted",
					children: country.iso
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-fg-subtle",
						children: "首都"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "text-fg",
						children: [country.capitalZh || country.capital || "—", country.capitalZh && country.capital && country.capitalZh !== country.capital ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1.5 text-fg-muted",
							children: country.capital
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-fg-subtle",
						children: "坐标"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-mono text-xs text-fg-muted",
						children: formatCoord(country.lat, country.lng)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => toggleVisited(country.iso),
						children: [lit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), lit ? "已点亮" : "点亮打卡"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => requestFlyTo(country.lat, country.lng, 1.82),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), "飞向这里"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: clearSelection,
						children: "关闭"
					})
				]
			})
		]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md bg-surface-2 px-3 text-sm text-fg shadow-[var(--shadow-border)]", "placeholder:text-fg-subtle", "outline-none transition-[box-shadow] duration-(--motion-quick) ease-(--ease-out)", "focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
var Dialog = Dialog$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-bg/70 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(100%-2rem,24rem)] -translate-x-1/2 -translate-y-1/2", "rounded-xl bg-surface p-5 text-fg shadow-[var(--shadow-border)]", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-md text-fg-muted hover:bg-surface-2 hover:text-fg",
			"aria-label": "关闭",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
		})]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-lg font-medium tracking-tight text-fg", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mt-1 text-sm text-fg-muted", className),
		...props
	});
}
function PinDialog() {
	const pending = useGlobeStore((s) => s.pendingPin);
	const setPendingPin = useGlobeStore((s) => s.setPendingPin);
	const addMarker = useGlobeStore((s) => s.addMarker);
	const [name, setName] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (pending) {
			setName("");
			setNote("");
		}
	}, [pending]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(pending),
		onOpenChange: (v) => !v && setPendingPin(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "添加标记" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: pending ? formatCoord(pending.lat, pending.lng) : "" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 flex flex-col gap-3",
				onSubmit: (e) => {
					e.preventDefault();
					if (!pending || !name.trim()) return;
					addMarker({
						name: name.trim(),
						note: note.trim(),
						lat: pending.lat,
						lng: pending.lng
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg-muted",
							children: "名称"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "例如：第一次落地",
							autoFocus: true,
							required: true,
							maxLength: 48
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg-muted",
							children: "备注"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: note,
							onChange: (e) => setNote(e.target.value),
							placeholder: "可选",
							maxLength: 160
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => setPendingPin(null),
							children: "取消"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: !name.trim(),
							children: "保存"
						})]
					})
				]
			})
		] })
	});
}
function SearchBar() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(0);
	const wrap = (0, import_react.useRef)(null);
	const input = (0, import_react.useRef)(null);
	const selectCountry = useGlobeStore((s) => s.selectCountry);
	const requestFlyTo = useGlobeStore((s) => s.requestFlyTo);
	const results = (0, import_react.useMemo)(() => searchCountries(query, 8), [query]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
				e.preventDefault();
				input.current?.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		const onDoc = (e) => {
			if (!wrap.current?.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	const pick = (index) => {
		const c = results[index];
		if (!c) return;
		selectCountry(c.iso);
		requestFlyTo(c.lat, c.lng, 1.82);
		setQuery(c.nameZh);
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrap,
		className: "relative w-full max-w-md",
		"data-interactive": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-11 items-center gap-2 rounded-lg bg-surface px-3 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "size-4 shrink-0 text-fg-subtle",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: input,
					value: query,
					onChange: (e) => {
						setQuery(e.target.value);
						setOpen(true);
						setActive(0);
					},
					onFocus: () => setOpen(true),
					onKeyDown: (e) => {
						if (e.key === "ArrowDown") {
							e.preventDefault();
							setActive((i) => Math.min(results.length - 1, i + 1));
						} else if (e.key === "ArrowUp") {
							e.preventDefault();
							setActive((i) => Math.max(0, i - 1));
						} else if (e.key === "Enter") {
							e.preventDefault();
							pick(active);
						} else if (e.key === "Escape") {
							setOpen(false);
							input.current?.blur();
						}
					},
					placeholder: "搜索国家 / 首都",
					className: "h-full min-w-0 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle",
					autoComplete: "off",
					"aria-label": "搜索国家"
				}),
				query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-8 items-center justify-center rounded-md text-fg-subtle hover:text-fg",
					onClick: () => {
						setQuery("");
						setOpen(false);
						input.current?.focus();
					},
					"aria-label": "清除",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
					className: "hidden rounded-sm bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-fg-subtle sm:inline",
					children: "/"
				})
			]
		}), open && query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "absolute top-full z-20 mt-2 w-full overflow-hidden rounded-lg bg-surface py-1 shadow-[var(--shadow-border)]",
			role: "listbox",
			children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "px-3 py-3 text-sm text-fg-muted",
				children: "没有匹配的国家"
			}) : results.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "option",
				"aria-selected": i === active,
				className: cn("flex w-full items-baseline justify-between gap-3 px-3 py-2.5 text-left", i === active ? "bg-surface-2" : "hover:bg-surface-2"),
				onMouseEnter: () => setActive(i),
				onClick: () => pick(i),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-fg",
					children: c.nameZh
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate text-xs text-fg-muted",
					children: [c.nameEn, c.capitalZh ? ` · ${c.capitalZh}` : ""]
				})]
			}) }, c.iso))
		}) : null]
	});
}
function SidePanel() {
	const open = useGlobeStore((s) => s.panelOpen);
	const setPanelOpen = useGlobeStore((s) => s.setPanelOpen);
	const visited = useGlobeStore((s) => s.visited);
	const customMarkers = useGlobeStore((s) => s.customMarkers);
	const selectCountry = useGlobeStore((s) => s.selectCountry);
	const selectMarker = useGlobeStore((s) => s.selectMarker);
	const requestFlyTo = useGlobeStore((s) => s.requestFlyTo);
	const removeMarker = useGlobeStore((s) => s.removeMarker);
	const toggleVisited = useGlobeStore((s) => s.toggleVisited);
	const showSTier = useGlobeStore((s) => s.showSTier);
	const sTierYear = useGlobeStore((s) => s.sTierYear);
	if (!open) return null;
	const visitedCountries = visited.map((iso) => COUNTRY_BY_ISO.get(iso)).filter((c) => Boolean(c));
	const stierCities = citiesUpToYear(sTierYear);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "panel-enter pointer-events-auto flex max-h-[min(70vh,32rem)] w-full max-w-sm flex-col rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between px-4 pt-4 pb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-base font-medium tracking-tight",
				children: "足迹"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon-sm",
				variant: "ghost",
				onClick: () => setPanelOpen(false),
				"aria-label": "关闭列表",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-2 pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mb-1.5 text-xs font-medium tracking-wide text-fg-muted",
						children: [
							"已点亮 ",
							visited.length,
							"/",
							COUNTRY_COUNT
						]
					}), visitedCountries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 py-2 text-sm text-fg-subtle",
						children: "点击国家卡片上的「点亮打卡」"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: visitedCountries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex min-w-0 flex-1 items-baseline justify-between gap-2 rounded-md px-2 py-2 text-left hover:bg-surface-2",
							onClick: () => {
								selectCountry(c.iso);
								requestFlyTo(c.lat, c.lng, 1.82);
								setPanelOpen(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm text-fg",
								children: c.nameZh
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-xs text-fg-muted",
								children: c.capitalZh || c.capital
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "size-9 shrink-0 rounded-md text-xs text-fg-muted hover:bg-surface-2 hover:text-fg",
							onClick: () => toggleVisited(c.iso),
							children: "取消"
						})]
					}, c.iso)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-3 px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1.5 text-xs font-medium tracking-wide text-fg-muted",
						children: "我的标记"
					}), customMarkers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 py-2 text-sm text-fg-subtle",
						children: "打开「放置标记」后点击地球任意位置"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: customMarkers.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex min-w-0 flex-1 items-baseline justify-between gap-2 rounded-md px-2 py-2 text-left hover:bg-surface-2",
							onClick: () => {
								selectMarker({
									kind: "custom",
									id: m.id
								});
								requestFlyTo(m.lat, m.lng, 1.62);
								setPanelOpen(false);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm text-fg",
								children: m.name
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "size-9 shrink-0 rounded-md text-xs text-fg-muted hover:bg-surface-2 hover:text-fg",
							onClick: () => removeMarker(m.id),
							children: "删除"
						})]
					}, m.id)) })]
				}),
				showSTier ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-3 px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mb-1.5 text-xs font-medium tracking-wide text-fg-muted",
						children: ["S 级赛事城市 ", stierCities.length]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: stierCities.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-baseline justify-between gap-2 rounded-md px-2 py-2 text-left hover:bg-surface-2",
						onClick: () => {
							selectMarker({
								kind: "stier",
								id: m.id
							});
							requestFlyTo(m.lat, m.lng, 1.62);
							setPanelOpen(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-fg",
							children: [m.cityZh, m.holy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 text-xs text-marker-major",
								children: "圣地"
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs tabular-nums text-fg-muted",
							children: m.events.length
						})]
					}) }, m.id)) })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-3 px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1.5 text-xs font-medium tracking-wide text-fg-muted",
						children: "CS Major 城市"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: CS2_MAJORS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-baseline justify-between gap-2 rounded-md px-2 py-2 text-left hover:bg-surface-2",
						onClick: () => {
							selectMarker({
								kind: "cs2",
								id: m.id
							});
							requestFlyTo(m.lat, m.lng, 1.62);
							setPanelOpen(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-fg",
							children: m.cityZh
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-fg-muted",
							children: m.events.map((e) => e.year).join(" / ")
						})]
					}) }, m.id)) })]
				})
			]
		})]
	});
}
var YEARS = Array.from({ length: STIER_YEAR_MAX - STIER_YEAR_MIN + 1 }, (_, i) => STIER_YEAR_MIN + i);
function YearSlider() {
	const year = useGlobeStore((s) => s.sTierYear);
	const setYear = useGlobeStore((s) => s.setSTierYear);
	const visible = useGlobeStore((s) => s.showSTier);
	const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
	const setHighlightedTeam = useGlobeStore((s) => s.setHighlightedTeam);
	const count = countEventsUpToYear(year);
	const dynastyCities = highlightedTeam ? citiesUpToYear(year).filter((c) => c.events.some((ev) => championKey(ev.champion) === highlightedTeam)).length : 0;
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-auto w-full max-w-xl rounded-xl bg-surface/90 px-4 py-3 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-fg-muted",
					children: "电竞版图"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tabular-nums text-fg-muted",
					children: [
						STIER_YEAR_MIN,
						"–",
						year,
						" · ",
						count,
						" 场"
					]
				})]
			}),
			highlightedTeam ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center justify-between gap-2 rounded-md bg-surface-2 px-2 py-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-fg",
					children: [
						CHAMPION_LABEL[highlightedTeam] ?? highlightedTeam,
						" 王朝",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 font-mono tabular-nums text-fg-muted",
							children: [dynastyCities, " 城"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-8 items-center justify-center rounded-md text-fg-muted hover:text-fg",
					onClick: () => setHighlightedTeam(null),
					"aria-label": "清除战队高亮",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-2 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "筛选年份"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: STIER_YEAR_MIN,
					max: STIER_YEAR_MAX,
					step: 1,
					value: year,
					onChange: (e) => setYear(Number(e.target.value)),
					className: "year-slider mt-1 w-full",
					"aria-valuemin": STIER_YEAR_MIN,
					"aria-valuemax": STIER_YEAR_MAX,
					"aria-valuenow": year
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 flex justify-between gap-px overflow-x-auto",
				children: YEARS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: y === year ? "shrink-0 font-mono text-[10px] tabular-nums text-fg sm:text-xs" : "shrink-0 font-mono text-[10px] tabular-nums text-fg-subtle hover:text-fg sm:text-xs",
					onClick: () => setYear(y),
					children: String(y).slice(2)
				}, y))
			})
		]
	});
}
function Hud() {
	const texturesReady = useGlobeStore((s) => s.texturesReady);
	const hoveredIso = useGlobeStore((s) => s.hoveredIso);
	const selectedIso = useGlobeStore((s) => s.selectedIso);
	const selectedMarker = useGlobeStore((s) => s.selectedMarker);
	const showGraticule = useGlobeStore((s) => s.showGraticule);
	const showCs2Majors = useGlobeStore((s) => s.showCs2Majors);
	const showSTier = useGlobeStore((s) => s.showSTier);
	const pinMode = useGlobeStore((s) => s.pinMode);
	const visited = useGlobeStore((s) => s.visited);
	const setShowGraticule = useGlobeStore((s) => s.setShowGraticule);
	const setShowCs2Majors = useGlobeStore((s) => s.setShowCs2Majors);
	const setShowSTier = useGlobeStore((s) => s.setShowSTier);
	const setPinMode = useGlobeStore((s) => s.setPinMode);
	const setPanelOpen = useGlobeStore((s) => s.setPanelOpen);
	const panelOpen = useGlobeStore((s) => s.panelOpen);
	const hovered = hoveredIso ? COUNTRY_BY_ISO.get(hoveredIso) : null;
	const showCard = Boolean(selectedIso || selectedMarker);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 z-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "absolute top-0 right-0 left-0 z-20 flex items-start justify-between gap-3 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none hidden min-w-36 sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-medium tracking-tight text-fg",
							children: "ORBITAL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-fg-muted",
							children: "寰宇"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-auto min-w-0 flex-1 sm:flex sm:justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto flex shrink-0 items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: showSTier ? "secondary" : "ghost",
								"aria-pressed": showSTier,
								"aria-label": "S 级赛事图层",
								title: "S 级赛事冠军地图",
								className: cn(showSTier && "text-marker-major"),
								onClick: () => setShowSTier(!showSTier),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: showCs2Majors ? "secondary" : "ghost",
								"aria-pressed": showCs2Majors,
								"aria-label": "CS Major 图层",
								title: "CS Major",
								className: cn("hidden sm:inline-flex", showCs2Majors && "text-accent"),
								onClick: () => setShowCs2Majors(!showCs2Majors),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: showGraticule ? "secondary" : "ghost",
								"aria-pressed": showGraticule,
								"aria-label": "经纬网",
								title: "经纬网",
								className: cn("hidden sm:inline-flex", showGraticule && "text-accent"),
								onClick: () => setShowGraticule(!showGraticule),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: pinMode ? "default" : "ghost",
								"aria-pressed": pinMode,
								"aria-label": "放置标记",
								title: "放置标记",
								onClick: () => setPinMode(!pinMode),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinPlus, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: panelOpen ? "secondary" : "ghost",
								"aria-pressed": panelOpen,
								"aria-label": "足迹列表",
								title: "足迹",
								onClick: () => setPanelOpen(!panelOpen),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-20 left-3 z-20 w-[min(100%-1.5rem,24rem)] max-h-[calc(100dvh-14rem)] overflow-y-auto sm:top-24 sm:left-5",
				children: [
					hovered && hoveredIso !== selectedIso ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "pointer-events-none mb-2 px-1 text-sm text-fg/90",
						children: [hovered.nameZh, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-fg-muted",
							children: hovered.nameEn
						})]
					}) : null,
					pinMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pointer-events-none mb-2 rounded-md bg-surface/90 px-3 py-2 text-sm text-fg-muted shadow-[var(--shadow-border)]",
						children: "点击地球任意位置放置标记"
					}) : null,
					showCard ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, {}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-20 right-3 z-20 sm:top-5 sm:right-5 sm:pt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidePanel, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "absolute right-0 bottom-0 left-0 z-20 flex flex-col gap-3 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearSlider, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-auto flex items-center gap-3 rounded-lg bg-surface/90 px-3 py-2 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {
								className: "size-4 text-accent",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-fg",
								children: [
									"已点亮",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono tabular-nums",
										children: [
											visited.length,
											"/",
											COUNTRY_COUNT
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "hidden items-center gap-4 text-xs text-fg-muted lg:flex",
							children: [
								showSTier ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-marker-major" }), "Major"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-marker-stier" }), "S 级"]
								})] }) : null,
								showCs2Majors ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-marker-cs2" }), "CS Major 史"]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-marker-pin" }), "我的标记"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "max-w-44 text-right text-xs leading-relaxed text-fg-subtle sm:max-w-sm",
							children: [showSTier ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [STIER_SOURCE, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})] }) : null, "边界 Natural Earth · 影像 NASA Visible Earth"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinDialog, {}),
			!texturesReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center bg-bg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "orbit-ring mb-6",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-medium tracking-tight text-fg",
						children: "ORBITAL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm tracking-wide text-fg-muted",
						children: "正在进入轨道"
					})
				]
			}) : null
		]
	});
}
var GlobeCanvas = (0, import_react.lazy)(() => import("./GlobeCanvas-DgZCx_KW.mjs").then((m) => ({ default: m.GlobeCanvas })));
function App() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const hydrate = useGlobeStore((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
		setMounted(true);
		const onKey = (e) => {
			if (e.key === "Escape") {
				const s = useGlobeStore.getState();
				if (s.pendingPin) s.setPendingPin(null);
				else if (s.pinMode) s.setPinMode(false);
				else if (s.highlightedTeam) s.setHighlightedTeam(null);
				else if (s.panelOpen) s.setPanelOpen(false);
				else s.clearSelection();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh w-full overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "sr-only",
				children: "ORBITAL 寰宇 · 交互式 3D 地球仪"
			}),
			mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeCanvas, {})
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hud, {})
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { championKey as a, FILL_RADIUS as c, easeInOutCubic as d, latLngToVector3 as f, useGlobeStore as i, GRATICULE_RADIUS as l, vector3ToLatLng as m, CS2_MAJORS as n, citiesUpToYear as o, shortestAngle as p, COUNTRY_BY_ISO as r, BORDER_RADIUS as s, routes_exports as t, MARKER_RADIUS as u };
