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
varying vec3 vNormal;
varying vec3 vView;

void main() {
  float f = pow(1.0 - abs(dot(normalize(vView), normalize(vNormal))), power);
  gl_FragColor = vec4(glowColor * f * intensity, f * intensity);
}
`;
