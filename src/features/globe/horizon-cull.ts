import type { WebGLProgramParametersWithUniforms } from "three";
import { Vector3 } from "three";
import { EARTH_RADIUS, latLngToVector3 } from "@/lib/geo";

const VARYING = "varying vec3 vHorizonWorld;\n";

const FRAG_FADE = `
{
  float horizonFacing = dot(normalize(vHorizonWorld), cameraPosition);
  float horizonFade = smoothstep(1.0, 1.03, horizonFacing);
  if (horizonFade <= 0.0) discard;
  gl_FragColor.a *= horizonFade;
}
`;

const facingScratch = new Vector3();

export function horizonCullCacheKey() {
  return "horizon-cull-v1";
}

export function horizonCullOnBeforeCompile(shader: WebGLProgramParametersWithUniforms) {
  if (shader.vertexShader.includes("vHorizonWorld")) return;
  shader.vertexShader = shader.vertexShader.replace("#include <common>", `#include <common>\n${VARYING}`);
  if (shader.vertexShader.includes("#include <begin_vertex>")) {
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      "#include <begin_vertex>\n\tvHorizonWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
    );
  } else {
    shader.vertexShader = shader.vertexShader.replace(
      "vec4 mvPosition = modelViewMatrix[ 3 ];",
      "vec4 mvPosition = modelViewMatrix[ 3 ];\n\tvHorizonWorld = modelMatrix[3].xyz;",
    );
  }
  shader.fragmentShader = shader.fragmentShader.replace("#include <common>", `#include <common>\n${VARYING}`);
  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <opaque_fragment>",
    `#include <opaque_fragment>\n${FRAG_FADE}`,
  );
}

export function isFrontHemisphere(lat: number, lng: number, cameraPosition: Vector3) {
  latLngToVector3(lat, lng, 1, facingScratch);
  return facingScratch.dot(cameraPosition) > EARTH_RADIUS;
}
