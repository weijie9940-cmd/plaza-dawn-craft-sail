import { useMemo } from "react";
import { BufferAttribute, BufferGeometry, Color } from "three";

export function Starfield({ count = 2200 }: { count?: number }) {
  const geometry = useMemo(() => {
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
      const shade = 0.65 + Math.random() * 0.35;
      const cool = Math.random() > 0.85;
      if (cool) c.setRGB(0.75 * shade, 0.85 * shade, shade);
      else c.setRGB(shade, shade, shade);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    geo.setAttribute("color", new BufferAttribute(colors, 3));
    return geo;
  }, [count]);

  return (
    <points geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={0.28}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}
