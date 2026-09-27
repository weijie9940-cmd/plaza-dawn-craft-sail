export const earthVertex = /* glsl */ `
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

export const earthFragment = /* glsl */ `
uniform sampler2D dayMap;
uniform sampler2D nightMap;
uniform vec3 sunDirection;
uniform float daylight;
varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vWorldPos;

void main() {
  vec3 n = normalize(vWorldNormal);
  // JPEG day/night maps upload as RGB8, so these samples are stored sRGB.
  // gl_FragColor is written through with no encode step.
  vec3 day = texture2D(dayMap, vUv).rgb;
  vec3 nightTex = texture2D(nightMap, vUv).rgb;

  float oceanAmt = smoothstep(0.012, 0.055, day.b - max(day.r, day.g));
  vec3 nightBase = day * 0.15 * vec3(0.55, 0.70, 1.0) + vec3(0.0015, 0.003, 0.008);
  nightBase += vec3(0.042, 0.046, 0.046) * (1.0 - oceanAmt);
  float cityMask = smoothstep(0.045, 0.14, nightTex.r);
  vec3 lights = min(nightTex * cityMask * vec3(1.0, 0.62, 0.28) * 2.8, vec3(0.75));
  vec3 night = nightBase + lights;

  float ndotl = dot(n, sunDirection);
  float dayAmt = smoothstep(-0.04, 0.10, ndotl);
  dayAmt = mix(1.0, dayAmt, daylight);
  vec3 color = mix(night, day, dayAmt);

  float twilight = exp(-pow(ndotl / 0.07, 2.0));
  color += vec3(0.9, 0.38, 0.12) * 0.03 * twilight * daylight;

  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 halfV = normalize(sunDirection + viewDir);
  float spec = pow(max(dot(n, halfV), 0.0), 48.0) * dayAmt * daylight;
  float ocean = smoothstep(0.18, 0.34, day.b - (day.r + day.g) * 0.42);
  color += vec3(0.55, 0.72, 1.0) * spec * ocean * 0.5;

  gl_FragColor = vec4(color, 1.0);
}
`;

export const atmosphereVertex = /* glsl */ `
varying vec3 vNormal;
varying vec3 vView;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vNormal = normalize(mat3(modelMatrix) * normal);
  vView = cameraPosition - world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const atmosphereFragment = /* glsl */ `
uniform vec3 glowColor;
uniform float intensity;
uniform float power;
uniform vec3 sunDirection;
uniform float daylight;
varying vec3 vNormal;
varying vec3 vView;

void main() {
  float f = pow(1.0 - abs(dot(normalize(vView), normalize(vNormal))), power);
  float lit = mix(1.0, smoothstep(-0.35, 0.25, dot(normalize(vNormal), sunDirection)), daylight);
  f *= mix(0.3, 1.0, lit);
  gl_FragColor = vec4(glowColor * f * intensity, f * intensity);
}
`;
