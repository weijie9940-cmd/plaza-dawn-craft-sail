import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Vector3, c as BufferGeometry, d as Raycaster, f as SRGBColorSpace, g as Vector2, h as TextureLoader, i as useThree, l as CanvasTexture, m as Spherical, n as useFrame, p as Sphere, r as useLoader, s as BufferAttribute, t as Canvas, u as Color } from "../_libs/@react-three/fiber+[...].mjs";
import { a as championKey, c as FILL_RADIUS, d as easeInOutCubic, f as latLngToVector3, i as useGlobeStore, l as GRATICULE_RADIUS, m as vector3ToLatLng, n as CS2_MAJORS, o as citiesUpToYear, p as shortestAngle, r as COUNTRY_BY_ISO, s as BORDER_RADIUS, u as MARKER_RADIUS } from "./routes-Bvt6Ml1P.mjs";
import { t as earcut } from "../_libs/earcut.mjs";
import { t as contains_default } from "../_libs/d3-geo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlobeCanvas-DgZCx_KW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Approximate subsolar point for the given UTC instant, then return a unit
* direction in globe space (same basis as latLngToVector3).
*/
function getSunDirection(date = /* @__PURE__ */ new Date(), target = new Vector3()) {
	const start = Date.UTC(date.getUTCFullYear(), 0, 0);
	const dayOfYear = (date.getTime() - start) / 864e5;
	const declination = -23.44 * Math.PI / 180 * Math.cos(2 * Math.PI * (dayOfYear + 10) / 365);
	let lng = 180 - 15 * (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600);
	if (lng > 180) lng -= 360;
	if (lng < -180) lng += 360;
	const lat = declination * 180 / Math.PI;
	return latLngToVector3(lat, lng, 1, target);
}
var earthVertex = `
varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vWorldPos;

void main() {
  vUv = uv;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;
var earthFragment = `
uniform sampler2D dayMap;
uniform sampler2D nightMap;
uniform vec3 sunDirection;
varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vWorldPos;

void main() {
  vec3 n = normalize(vWorldNormal);
  vec3 day = texture2D(dayMap, vUv).rgb;
  vec3 nightTex = texture2D(nightMap, vUv).rgb;
  vec3 night = nightTex * 1.55 + vec3(0.012, 0.02, 0.045);

  float ndotl = dot(n, sunDirection);
  float dayAmt = smoothstep(-0.12, 0.22, ndotl);
  vec3 color = mix(night, day, dayAmt);

  float terminator = 1.0 - smoothstep(0.0, 0.28, abs(ndotl - 0.02));
  color += vec3(0.42, 0.22, 0.08) * terminator * 0.22;

  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 halfV = normalize(sunDirection + viewDir);
  float spec = pow(max(dot(n, halfV), 0.0), 48.0) * dayAmt;
  float ocean = smoothstep(0.18, 0.34, day.b - (day.r + day.g) * 0.42);
  color += vec3(0.55, 0.72, 1.0) * spec * ocean * 0.5;

  gl_FragColor = vec4(color, 1.0);
}
`;
var atmosphereVertex = `
varying vec3 vNormal;
varying vec3 vView;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vNormal = normalize(mat3(modelMatrix) * normal);
  vView = cameraPosition - world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;
var atmosphereFragment = `
uniform vec3 glowColor;
uniform float intensity;
uniform float power;
varying vec3 vNormal;
varying vec3 vView;

void main() {
  float f = pow(1.0 - abs(dot(normalize(vView), normalize(vNormal))), power);
  gl_FragColor = vec4(glowColor * f * intensity, f * intensity);
}
`;
var sunDir = new Vector3();
function Earth() {
	const dayMap = useLoader(TextureLoader, "/textures/earth-day.jpg");
	const nightMap = useLoader(TextureLoader, "/textures/earth-night.jpg");
	const matRef = (0, import_react.useRef)(null);
	const setReady = useGlobeStore((s) => s.setTexturesReady);
	(0, import_react.useEffect)(() => {
		dayMap.colorSpace = SRGBColorSpace;
		nightMap.colorSpace = SRGBColorSpace;
		dayMap.anisotropy = 4;
		nightMap.anisotropy = 4;
		setReady(true);
	}, [
		dayMap,
		nightMap,
		setReady
	]);
	const uniforms = (0, import_react.useMemo)(() => ({
		dayMap: { value: dayMap },
		nightMap: { value: nightMap },
		sunDirection: { value: getSunDirection(/* @__PURE__ */ new Date(), sunDir) }
	}), [dayMap, nightMap]);
	useFrame(() => {
		if (!matRef.current) return;
		getSunDirection(/* @__PURE__ */ new Date(), sunDir);
		matRef.current.uniforms.sunDirection.value.copy(sunDir);
	});
	const segs = 64;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
		1,
		segs,
		segs
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
		ref: matRef,
		vertexShader: earthVertex,
		fragmentShader: earthFragment,
		uniforms,
		toneMapped: false
	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {})] });
}
function Atmosphere() {
	const inner = (0, import_react.useMemo)(() => ({
		glowColor: { value: new Color("#7eb8e8") },
		intensity: { value: .85 },
		power: { value: 2.6 }
	}), []);
	const outer = (0, import_react.useMemo)(() => ({
		glowColor: { value: new Color("#4d8fd6") },
		intensity: { value: 1.15 },
		power: { value: 3.4 }
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
		1.018,
		48,
		48
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
		vertexShader: atmosphereVertex,
		fragmentShader: atmosphereFragment,
		uniforms: inner,
		transparent: true,
		depthWrite: false,
		side: 0,
		toneMapped: false
	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
		1.08,
		48,
		48
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
		vertexShader: atmosphereVertex,
		fragmentShader: atmosphereFragment,
		uniforms: outer,
		transparent: true,
		depthWrite: false,
		side: 1,
		toneMapped: false
	})] })] });
}
var worldRef = { current: null };
var tmpVec = new Vector3();
function asGeo(f) {
	return {
		type: "Feature",
		properties: {},
		geometry: {
			type: f.type,
			coordinates: f.coordinates
		}
	};
}
function findCountry(lng, lat, world) {
	for (const f of world) {
		const [minX, minY, maxX, maxY] = f.bbox;
		if (!(maxX - minX > 300) && (lng < minX || lng > maxX || lat < minY || lat > maxY)) continue;
		if (contains_default(asGeo(f), [lng, lat])) return f.iso;
	}
	return null;
}
function pushLine(positions, ring, radius) {
	for (let i = 0; i < ring.length - 1; i++) {
		const a = latLngToVector3(ring[i][1], ring[i][0], radius, tmpVec.clone());
		const b = latLngToVector3(ring[i + 1][1], ring[i + 1][0], radius, tmpVec.clone());
		positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
	}
}
function ringsOf(f) {
	return f.type === "Polygon" ? [f.coordinates] : f.coordinates;
}
function fillGeometry(features, radius) {
	const positions = [];
	const tmp = new Vector3();
	for (const f of features) for (const poly of ringsOf(f)) {
		const outer = poly[0];
		if (!outer || outer.length < 4) continue;
		const [minX, , maxX] = f.bbox;
		if (maxX - minX > 300) continue;
		const flat = [];
		const holes = [];
		for (let r = 0; r < poly.length; r++) {
			if (r > 0) holes.push(flat.length / 2);
			for (const [lng, lat] of poly[r]) flat.push(lng, lat);
		}
		let idx;
		try {
			idx = earcut(flat, holes, 2);
		} catch {
			continue;
		}
		for (let i = 0; i < idx.length; i++) {
			const k = idx[i] * 2;
			latLngToVector3(flat[k + 1], flat[k], radius, tmp);
			positions.push(tmp.x, tmp.y, tmp.z);
		}
	}
	if (!positions.length) return null;
	const geo = new BufferGeometry();
	geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
	return geo;
}
function useDisposableGeo(geo) {
	(0, import_react.useEffect)(() => {
		return () => {
			geo?.dispose();
		};
	}, [geo]);
}
function GeoLayer() {
	const [world, setWorld] = (0, import_react.useState)(null);
	const visited = useGlobeStore((s) => s.visited);
	const hoveredIso = useGlobeStore((s) => s.hoveredIso);
	const selectedIso = useGlobeStore((s) => s.selectedIso);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		fetch("/data/world.json").then((r) => r.json()).then((data) => {
			if (cancelled) return;
			worldRef.current = data.features;
			setWorld(data.features);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, []);
	const borderGeo = (0, import_react.useMemo)(() => {
		if (!world) return null;
		const positions = [];
		for (const f of world) for (const poly of ringsOf(f)) for (const ring of poly) pushLine(positions, ring, BORDER_RADIUS);
		const geo = new BufferGeometry();
		geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
		return geo;
	}, [world]);
	const visitedGeo = (0, import_react.useMemo)(() => {
		if (!world) return null;
		const set = new Set(visited);
		return fillGeometry(world.filter((f) => set.has(f.iso)), FILL_RADIUS);
	}, [world, visited]);
	const hoverGeo = (0, import_react.useMemo)(() => {
		if (!world || !hoveredIso || hoveredIso === selectedIso) return null;
		return fillGeometry(world.filter((f) => f.iso === hoveredIso), FILL_RADIUS);
	}, [
		world,
		hoveredIso,
		selectedIso
	]);
	const selectedGeo = (0, import_react.useMemo)(() => {
		if (!world || !selectedIso) return null;
		return fillGeometry(world.filter((f) => f.iso === selectedIso), FILL_RADIUS);
	}, [world, selectedIso]);
	useDisposableGeo(borderGeo);
	useDisposableGeo(visitedGeo);
	useDisposableGeo(hoverGeo);
	useDisposableGeo(selectedGeo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		borderGeo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
			geometry: borderGeo,
			frustumCulled: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
				color: "#e8f4fc",
				transparent: true,
				opacity: .72,
				depthWrite: false,
				depthTest: false
			})
		}) : null,
		visitedGeo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: visitedGeo,
			frustumCulled: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#5aa7d4",
				transparent: true,
				opacity: .28,
				depthWrite: false,
				depthTest: false,
				side: 2,
				toneMapped: false
			})
		}) : null,
		hoverGeo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: hoverGeo,
			frustumCulled: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#cfe6f6",
				transparent: true,
				opacity: .22,
				depthWrite: false,
				depthTest: false,
				side: 2,
				toneMapped: false
			})
		}) : null,
		selectedGeo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: selectedGeo,
			frustumCulled: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#8ec8ea",
				transparent: true,
				opacity: .38,
				depthWrite: false,
				depthTest: false,
				side: 2,
				toneMapped: false
			})
		}) : null
	] });
}
var globeInput = {
	dragging: false,
	movedPx: 0,
	pinching: false
};
var PHI_MIN = .18;
var PHI_MAX = Math.PI - .18;
var RADIUS_MIN = 1.42;
var RADIUS_MAX = 4.6;
var IDLE_MS = 4200;
var AUTO_THETA = .055;
function GlobeControls() {
	const camera = useThree((s) => s.camera);
	const gl = useThree((s) => s.gl);
	const size = useThree((s) => s.size);
	const flyTo = useGlobeStore((s) => s.flyTo);
	const pinMode = useGlobeStore((s) => s.pinMode);
	const sph = (0, import_react.useRef)(new Spherical(2.65, Math.PI / 2 - .22, .55));
	const vel = (0, import_react.useRef)({
		phi: 0,
		theta: 0
	});
	const idleAt = (0, import_react.useRef)(performance.now());
	const fly = (0, import_react.useRef)(null);
	const pointers = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const pinchStart = (0, import_react.useRef)(null);
	const pinchRadius = (0, import_react.useRef)(2.65);
	(0, import_react.useEffect)(() => {
		camera.position.setFromSpherical(sph.current);
		camera.lookAt(0, 0, 0);
	}, [camera]);
	(0, import_react.useEffect)(() => {
		if (!flyTo) return;
		const target = latLngToVector3(flyTo.lat, flyTo.lng, 1, new Vector3());
		const to = new Spherical().setFromVector3(target);
		to.radius = flyTo.radius;
		fly.current = {
			fromR: sph.current.radius,
			fromPhi: sph.current.phi,
			fromTheta: sph.current.theta,
			toR: to.radius,
			toPhi: to.phi,
			toTheta: sph.current.theta + shortestAngle(sph.current.theta, to.theta),
			t: 0,
			dur: 1.15
		};
		vel.current.phi = 0;
		vel.current.theta = 0;
		idleAt.current = performance.now();
	}, [flyTo]);
	(0, import_react.useEffect)(() => {
		const el = gl.domElement;
		el.style.touchAction = "none";
		el.style.cursor = pinMode ? "crosshair" : "grab";
		const bumpIdle = () => {
			idleAt.current = performance.now();
		};
		const onDown = (e) => {
			pointers.current.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY
			});
			globeInput.movedPx = 0;
			fly.current = null;
			bumpIdle();
			if (pointers.current.size === 1) {
				globeInput.dragging = false;
				vel.current.phi = 0;
				vel.current.theta = 0;
				el.style.cursor = pinMode ? "crosshair" : "grabbing";
			}
			if (pointers.current.size === 2) {
				globeInput.pinching = true;
				globeInput.dragging = true;
				const [a, b] = [...pointers.current.values()];
				pinchStart.current = Math.hypot(a.x - b.x, a.y - b.y);
				pinchRadius.current = sph.current.radius;
			}
		};
		const onMove = (e) => {
			const prev = pointers.current.get(e.pointerId);
			if (!prev) return;
			const nx = e.clientX;
			const ny = e.clientY;
			pointers.current.set(e.pointerId, {
				x: nx,
				y: ny
			});
			if (pointers.current.size === 2 && pinchStart.current) {
				const pts = [...pointers.current.values()];
				const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
				const scale = pinchStart.current / Math.max(24, dist);
				sph.current.radius = Math.min(RADIUS_MAX, Math.max(RADIUS_MIN, pinchRadius.current * scale));
				globeInput.movedPx += 8;
				bumpIdle();
				return;
			}
			if (pointers.current.size !== 1) return;
			const dx = nx - prev.x;
			const dy = ny - prev.y;
			globeInput.movedPx += Math.hypot(dx, dy);
			if (globeInput.movedPx > 5 && !globeInput.dragging) {
				globeInput.dragging = true;
				try {
					el.setPointerCapture(e.pointerId);
				} catch {}
			}
			if (!globeInput.dragging) return;
			const k = 2.15 / Math.max(size.height, 1);
			sph.current.theta -= dx * k;
			sph.current.phi -= dy * k;
			sph.current.phi = Math.min(PHI_MAX, Math.max(PHI_MIN, sph.current.phi));
			vel.current.theta = -dx * k * 60;
			vel.current.phi = -dy * k * 60;
			bumpIdle();
		};
		const onUp = (e) => {
			pointers.current.delete(e.pointerId);
			if (pointers.current.size < 2) {
				globeInput.pinching = false;
				pinchStart.current = null;
			}
			if (pointers.current.size === 0) {
				globeInput.dragging = false;
				el.style.cursor = pinMode ? "crosshair" : "grab";
			}
			bumpIdle();
		};
		const onWheel = (e) => {
			e.preventDefault();
			fly.current = null;
			const delta = e.deltaY;
			sph.current.radius = Math.min(RADIUS_MAX, Math.max(RADIUS_MIN, sph.current.radius * Math.exp(delta * .00115)));
			bumpIdle();
		};
		const onLost = () => {
			pointers.current.clear();
			globeInput.dragging = false;
			globeInput.pinching = false;
		};
		el.addEventListener("pointerdown", onDown);
		el.addEventListener("pointermove", onMove);
		el.addEventListener("pointerup", onUp);
		el.addEventListener("pointercancel", onUp);
		el.addEventListener("lostpointercapture", onLost);
		el.addEventListener("wheel", onWheel, { passive: false });
		return () => {
			el.removeEventListener("pointerdown", onDown);
			el.removeEventListener("pointermove", onMove);
			el.removeEventListener("pointerup", onUp);
			el.removeEventListener("pointercancel", onUp);
			el.removeEventListener("lostpointercapture", onLost);
			el.removeEventListener("wheel", onWheel);
		};
	}, [
		gl,
		pinMode,
		size.height
	]);
	useFrame((_, delta) => {
		const dt = Math.min(delta, .1);
		const anim = fly.current;
		if (anim) {
			anim.t += dt;
			const u = easeInOutCubic(Math.min(1, anim.t / anim.dur));
			sph.current.radius = anim.fromR + (anim.toR - anim.fromR) * u;
			sph.current.phi = anim.fromPhi + (anim.toPhi - anim.fromPhi) * u;
			sph.current.theta = anim.fromTheta + (anim.toTheta - anim.fromTheta) * u;
			if (u >= 1) fly.current = null;
		} else if (!globeInput.dragging && !globeInput.pinching) {
			const decay = Math.exp(-4.2 * dt);
			vel.current.theta *= decay;
			vel.current.phi *= decay;
			sph.current.theta += vel.current.theta * dt;
			sph.current.phi += vel.current.phi * dt;
			const idle = performance.now() - idleAt.current > IDLE_MS;
			const spinning = Math.abs(vel.current.theta) + Math.abs(vel.current.phi) < .02;
			if (idle && spinning) sph.current.theta += AUTO_THETA * dt;
		}
		sph.current.phi = Math.min(PHI_MAX, Math.max(PHI_MIN, sph.current.phi));
		sph.current.radius = Math.min(RADIUS_MAX, Math.max(RADIUS_MIN, sph.current.radius));
		camera.position.setFromSpherical(sph.current);
		camera.lookAt(0, 0, 0);
	});
	return null;
}
var hit = new Vector3();
var ndc = new Vector2();
var sphere = new Sphere(new Vector3(0, 0, 0), 1);
var raycaster = new Raycaster();
function intersectGlobe(camera, clientX, clientY, el) {
	const rect = el.getBoundingClientRect();
	ndc.x = (clientX - rect.left) / rect.width * 2 - 1;
	ndc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
	raycaster.setFromCamera(ndc, camera);
	return raycaster.ray.intersectSphere(sphere, hit) ? hit : null;
}
function GlobePicker() {
	const camera = useThree((s) => s.camera);
	const gl = useThree((s) => s.gl);
	const readyAt = (0, import_react.useRef)(performance.now() + 400);
	(0, import_react.useEffect)(() => {
		const el = gl.domElement;
		const onMove = (e) => {
			if (globeInput.dragging || globeInput.pinching) return;
			const pt = intersectGlobe(camera, e.clientX, e.clientY, el);
			const store = useGlobeStore.getState();
			if (!pt) {
				if (store.hoveredIso) store.setHoveredIso(null);
				return;
			}
			const { lat, lng } = vector3ToLatLng(pt);
			const iso = worldRef.current ? findCountry(lng, lat, worldRef.current) : null;
			if (iso !== store.hoveredIso) store.setHoveredIso(iso);
		};
		const onUp = (e) => {
			if (performance.now() < readyAt.current) return;
			if (globeInput.movedPx > 6 || globeInput.pinching) return;
			const pt = intersectGlobe(camera, e.clientX, e.clientY, el);
			const store = useGlobeStore.getState();
			if (!pt) {
				if (!store.pinMode) store.clearSelection();
				return;
			}
			const { lat, lng } = vector3ToLatLng(pt);
			if (store.pinMode) {
				store.setPendingPin({
					lat,
					lng
				});
				return;
			}
			const iso = worldRef.current ? findCountry(lng, lat, worldRef.current) : null;
			if (iso) {
				store.selectCountry(iso);
				store.selectMarker(null);
				const c = COUNTRY_BY_ISO.get(iso);
				if (c) store.requestFlyTo(c.lat, c.lng, 1.82);
			} else store.clearSelection();
		};
		el.addEventListener("pointermove", onMove);
		el.addEventListener("pointerup", onUp);
		return () => {
			el.removeEventListener("pointermove", onMove);
			el.removeEventListener("pointerup", onUp);
		};
	}, [camera, gl]);
	return null;
}
function Graticule() {
	const show = useGlobeStore((s) => s.showGraticule);
	const geometry = (0, import_react.useMemo)(() => {
		const positions = [];
		const tmp = latLngToVector3(0, 0, GRATICULE_RADIUS);
		const step = 6;
		for (let lng = -180; lng < 180; lng += 30) for (let lat = -90; lat < 90; lat += step) {
			const a = latLngToVector3(lat, lng, GRATICULE_RADIUS, tmp.clone());
			const b = latLngToVector3(lat + step, lng, GRATICULE_RADIUS, tmp.clone());
			positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
		}
		for (let lat = -60; lat <= 60; lat += 30) for (let lng = -180; lng < 180; lng += step) {
			const a = latLngToVector3(lat, lng, GRATICULE_RADIUS, tmp.clone());
			const b = latLngToVector3(lat, lng + step, GRATICULE_RADIUS, tmp.clone());
			positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
		}
		const geo = new BufferGeometry();
		geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
		return geo;
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
		geometry,
		frustumCulled: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
			color: "#8fb6d6",
			transparent: true,
			opacity: .28,
			depthWrite: false,
			depthTest: false
		})
	});
}
function makeGlowTexture$1(hex) {
	const canvas = document.createElement("canvas");
	canvas.width = 64;
	canvas.height = 64;
	const ctx = canvas.getContext("2d");
	if (!ctx) return new CanvasTexture(canvas);
	const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
	g.addColorStop(0, "#ffffff");
	g.addColorStop(.22, hex);
	g.addColorStop(.55, `${hex}88`);
	g.addColorStop(1, "rgba(0,0,0,0)");
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, 64, 64);
	const tex = new CanvasTexture(canvas);
	tex.needsUpdate = true;
	return tex;
}
var CS2 = "#7dd3fc";
var CUSTOM = "#e7eef8";
function PulseMarker({ lat, lng, color, texture, selected, onSelect }) {
	const group = (0, import_react.useRef)(null);
	const core = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	const tint = (0, import_react.useMemo)(() => new Color(color), [color]);
	useFrame(({ camera }) => {
		const t = performance.now() / 1e3;
		const dist = camera.position.length();
		const base = Math.max(.045, .018 * dist) * (selected ? 1.35 : 1);
		if (core.current) {
			const s = base * (1 + Math.sin(t * 2.4) * .12);
			core.current.scale.setScalar(s);
		}
		if (ring.current) {
			const u = t * .55 % 1;
			ring.current.scale.setScalar(base * (1.2 + u * 2.2));
			const mat = ring.current.material;
			mat.opacity = (1 - u) * .45;
		}
	});
	const pos = (0, import_react.useMemo)(() => latLngToVector3(lat, lng, MARKER_RADIUS), [lat, lng]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position: pos,
		onClick: (e) => {
			if (globeInput.movedPx > 6) return;
			e.stopPropagation();
			onSelect();
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
			ref: core,
			renderOrder: 2,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
				map: texture,
				color: tint,
				transparent: true,
				depthWrite: false,
				blending: 2,
				toneMapped: false
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
			ref: ring,
			renderOrder: 1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
				map: texture,
				color: tint,
				transparent: true,
				depthWrite: false,
				blending: 2,
				toneMapped: false,
				opacity: .4
			})
		})]
	});
}
function Markers() {
	const custom = useGlobeStore((s) => s.customMarkers);
	const selected = useGlobeStore((s) => s.selectedMarker);
	const selectMarker = useGlobeStore((s) => s.selectMarker);
	const requestFlyTo = useGlobeStore((s) => s.requestFlyTo);
	const selectCountry = useGlobeStore((s) => s.selectCountry);
	const showCs2Majors = useGlobeStore((s) => s.showCs2Majors);
	const cs2Tex = (0, import_react.useMemo)(() => makeGlowTexture$1(CS2), []);
	const pinTex = (0, import_react.useMemo)(() => makeGlowTexture$1(CUSTOM), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [showCs2Majors ? CS2_MAJORS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseMarker, {
		lat: m.lat,
		lng: m.lng,
		color: CS2,
		texture: cs2Tex,
		selected: selected?.kind === "cs2" && selected.id === m.id,
		onSelect: () => {
			selectCountry(null);
			selectMarker({
				kind: "cs2",
				id: m.id
			});
			requestFlyTo(m.lat, m.lng, 1.62);
		}
	}, m.id)) : null, custom.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseMarker, {
		lat: m.lat,
		lng: m.lng,
		color: CUSTOM,
		texture: pinTex,
		selected: selected?.kind === "custom" && selected.id === m.id,
		onSelect: () => {
			selectCountry(null);
			selectMarker({
				kind: "custom",
				id: m.id
			});
			requestFlyTo(m.lat, m.lng, 1.62);
		}
	}, m.id))] });
}
var MAJOR = "#e8c872";
var STIER = "#e09548";
var RADIUS = MARKER_RADIUS + .012;
function makeGlowTexture(hex) {
	const canvas = document.createElement("canvas");
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext("2d");
	if (!ctx) return new CanvasTexture(canvas);
	const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
	g.addColorStop(0, "#ffffff");
	g.addColorStop(.18, hex);
	g.addColorStop(.48, `${hex}99`);
	g.addColorStop(1, "rgba(0,0,0,0)");
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, 128, 128);
	const tex = new CanvasTexture(canvas);
	tex.needsUpdate = true;
	return tex;
}
function makeTrophyTexture(hex) {
	const canvas = document.createElement("canvas");
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext("2d");
	if (!ctx) return new CanvasTexture(canvas);
	ctx.translate(64, 58);
	ctx.fillStyle = hex;
	ctx.strokeStyle = "#fff8e8";
	ctx.lineWidth = 3;
	ctx.lineJoin = "round";
	ctx.beginPath();
	ctx.moveTo(-18, -22);
	ctx.lineTo(18, -22);
	ctx.quadraticCurveTo(22, 8, 0, 16);
	ctx.quadraticCurveTo(-22, 8, -18, -22);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(-18, -8, 10, Math.PI * .15, Math.PI * 1.15);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(18, -8, 10, -Math.PI * .15, Math.PI * .85, true);
	ctx.stroke();
	ctx.fillRect(-5, 14, 10, 10);
	ctx.fillRect(-14, 24, 28, 7);
	const tex = new CanvasTexture(canvas);
	tex.needsUpdate = true;
	return tex;
}
function makeBadgeTexture(n) {
	const canvas = document.createElement("canvas");
	canvas.width = 64;
	canvas.height = 64;
	const ctx = canvas.getContext("2d");
	if (!ctx) return new CanvasTexture(canvas);
	ctx.beginPath();
	ctx.arc(32, 32, 26, 0, Math.PI * 2);
	ctx.fillStyle = "#10141c";
	ctx.fill();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "#e7eef8";
	ctx.stroke();
	ctx.fillStyle = "#e7eef8";
	ctx.font = "700 28px Outfit, sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(String(n), 32, 34);
	const tex = new CanvasTexture(canvas);
	tex.needsUpdate = true;
	return tex;
}
function TrophyMarker({ city, major, selected, dimmed, highlighted, onSelect, glowTex, trophyTex, badgeTex }) {
	const core = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	const halo = (0, import_react.useRef)(null);
	const cup = (0, import_react.useRef)(null);
	const badge = (0, import_react.useRef)(null);
	const color = major ? MAJOR : STIER;
	const tint = (0, import_react.useMemo)(() => new Color(color), [color]);
	const holy = city.holy;
	const pos = (0, import_react.useMemo)(() => latLngToVector3(city.lat, city.lng, RADIUS), [city.lat, city.lng]);
	useFrame(({ camera }) => {
		const t = performance.now() / 1e3;
		const dist = camera.position.length();
		const holyMul = holy ? 1.55 : 1;
		const hiMul = highlighted ? 1.2 : 1;
		const base = Math.max(.04, .016 * dist) * (selected ? 1.28 : 1) * holyMul * hiMul;
		const opacity = dimmed ? .16 : 1;
		if (core.current) {
			const s = base * (1 + Math.sin(t * 2.2) * .1);
			core.current.scale.setScalar(s);
			core.current.material.opacity = opacity;
		}
		if (cup.current) {
			cup.current.scale.setScalar(base * .72);
			cup.current.material.opacity = dimmed ? .22 : .95;
		}
		if (ring.current) {
			const u = t * .5 % 1;
			ring.current.scale.setScalar(base * (1.15 + u * (holy ? 3.2 : 2.1)));
			const mat = ring.current.material;
			mat.opacity = (1 - u) * (dimmed ? .08 : holy ? .55 : .4);
		}
		if (halo.current) {
			const s = base * (2.4 + Math.sin(t * 1.4) * .25);
			halo.current.scale.setScalar(s);
			halo.current.material.opacity = dimmed ? .04 : .28;
		}
		if (badge.current) {
			badge.current.scale.setScalar(base * .42);
			badge.current.material.opacity = dimmed ? .2 : 1;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: pos,
		onClick: (e) => {
			if (globeInput.movedPx > 6) return;
			e.stopPropagation();
			onSelect();
		},
		children: [
			holy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
				ref: halo,
				renderOrder: 1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
					map: glowTex,
					color: tint,
					transparent: true,
					depthWrite: false,
					blending: 2,
					toneMapped: false,
					opacity: .28
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
				ref: ring,
				renderOrder: 2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
					map: glowTex,
					color: tint,
					transparent: true,
					depthWrite: false,
					blending: 2,
					toneMapped: false,
					opacity: .4
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
				ref: core,
				renderOrder: 3,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
					map: glowTex,
					color: tint,
					transparent: true,
					depthWrite: false,
					blending: 2,
					toneMapped: false
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
				ref: cup,
				renderOrder: 4,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
					map: trophyTex,
					transparent: true,
					depthWrite: false,
					toneMapped: false
				})
			}),
			badgeTex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
				ref: badge,
				renderOrder: 5,
				position: [
					.018,
					.018,
					.018
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
					map: badgeTex,
					transparent: true,
					depthWrite: false,
					toneMapped: false
				})
			}) : null
		]
	});
}
function STierMarkers() {
	const visible = useGlobeStore((s) => s.showSTier);
	const year = useGlobeStore((s) => s.sTierYear);
	const selected = useGlobeStore((s) => s.selectedMarker);
	const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
	const selectMarker = useGlobeStore((s) => s.selectMarker);
	const requestFlyTo = useGlobeStore((s) => s.requestFlyTo);
	const selectCountry = useGlobeStore((s) => s.selectCountry);
	const cities = (0, import_react.useMemo)(() => citiesUpToYear(year), [year]);
	const majorTex = (0, import_react.useMemo)(() => makeGlowTexture(MAJOR), []);
	const stierTex = (0, import_react.useMemo)(() => makeGlowTexture(STIER), []);
	const majorCup = (0, import_react.useMemo)(() => makeTrophyTexture(MAJOR), []);
	const stierCup = (0, import_react.useMemo)(() => makeTrophyTexture(STIER), []);
	const badges = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const c of cities) if (c.events.length > 1 && !map.has(c.events.length)) map.set(c.events.length, makeBadgeTexture(c.events.length));
		return map;
	}, [cities]);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: cities.map((city) => {
		const major = city.events.some((ev) => ev.tier === "Major");
		const teamHit = highlightedTeam ? city.events.some((ev) => championKey(ev.champion) === highlightedTeam) : false;
		const dimmed = Boolean(highlightedTeam) && !teamHit;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrophyMarker, {
			city,
			major,
			selected: selected?.kind === "stier" && selected.id === city.id,
			dimmed,
			highlighted: teamHit,
			glowTex: major ? majorTex : stierTex,
			trophyTex: major ? majorCup : stierCup,
			badgeTex: city.events.length > 1 ? badges.get(city.events.length) ?? null : null,
			onSelect: () => {
				selectCountry(null);
				selectMarker({
					kind: "stier",
					id: city.id
				});
				requestFlyTo(city.lat, city.lng, 1.62);
			}
		}, city.id);
	}) });
}
function Starfield({ count = 2200 }) {
	const geometry = (0, import_react.useMemo)(() => {
		const geo = new BufferGeometry();
		const positions = new Float32Array(count * 3);
		const colors = new Float32Array(count * 3);
		const c = new Color();
		for (let i = 0; i < count; i++) {
			const r = 40 + Math.random() * 70;
			const phi = Math.acos(2 * Math.random() - 1);
			const theta = Math.random() * Math.PI * 2;
			positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = r * Math.cos(phi);
			positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
			const shade = .65 + Math.random() * .35;
			if (Math.random() > .85) c.setRGB(.75 * shade, .85 * shade, shade);
			else c.setRGB(shade, shade, shade);
			colors[i * 3] = c.r;
			colors[i * 3 + 1] = c.g;
			colors[i * 3 + 2] = c.b;
		}
		geo.setAttribute("position", new BufferAttribute(positions, 3));
		geo.setAttribute("color", new BufferAttribute(colors, 3));
		return geo;
	}, [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("points", {
		geometry,
		frustumCulled: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			size: .28,
			sizeAttenuation: true,
			vertexColors: true,
			transparent: true,
			opacity: .9,
			depthWrite: false,
			toneMapped: false
		})
	});
}
function Scene() {
	const starCount = (0, import_react.useMemo)(() => {
		if (typeof window === "undefined") return 1600;
		return window.innerWidth < 640 ? 1100 : 2400;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#05070c"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeControls, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobePicker, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Starfield, { count: starCount }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Graticule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoLayer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markers, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(STierMarkers, {})
	] });
}
function GlobeCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
		camera: {
			position: [
				0,
				.55,
				2.65
			],
			fov: 42,
			near: .1,
			far: 200
		},
		dpr: [1, 1.6],
		gl: {
			antialias: true,
			alpha: false,
			powerPreference: "high-performance"
		},
		onCreated: ({ gl }) => {
			gl.setClearColor(new Color("#05070c"));
			gl.domElement.style.touchAction = "none";
		},
		style: {
			width: "100%",
			height: "100%",
			touchAction: "none"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {})
	});
}
//#endregion
export { GlobeCanvas };
