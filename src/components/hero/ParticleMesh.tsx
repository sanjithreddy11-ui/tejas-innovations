import { useEffect, useRef } from "react";

/**
 * A single connected 3D wave-mesh of tiny circular particles.
 *
 * The mesh is a parametric surface in world space (u, v) -> (x, y, z)
 * tilted away from the camera and projected through a simple pinhole.
 * Particles only exist on the surface — the rest of the hero stays dark.
 */
export function ParticleMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mesh resolution (cols across × rows deep). Tuned for perf + density.
    const COLS = 180;
    const ROWS = 95;

    // Palette — illuminated cyan / teal
    const palette = [
      { r: 34, g: 211, b: 238 },   // #22D3EE
      { r: 77, g: 208, b: 225 },   // #4DD0E1
      { r: 103, g: 232, b: 249 },  // #67E8F9
      { r: 94, g: 234, b: 212 },   // #5EEAD4
    ];
    const deep = { r: 8, g: 47, b: 73 }; // #082F49

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;
    let raf = 0;

    // Camera + mesh constants
    const PITCH = 1.05;            // radians — how much the plane tilts away
    const CAM_DIST = 2.6;          // distance from camera to mesh origin
    const MESH_W = 4.2;            // world half-width
    const MESH_D = 3.4;            // world depth (near to far)
    const NEAR_OFFSET = -0.4;      // push the near edge toward the camera
    const WAVE_AMP = 0.55;         // height of the surface

    const sinP = Math.sin(PITCH);
    const cosP = Math.cos(PITCH);

    // Screen anchor — mesh sits in the lower portion of the hero
    const projScale = () => Math.min(width, height) * 0.95;
    const anchorX = () => width * 0.5;
    const anchorY = () => height * 0.72;

    const wave = (x: number, z: number, time: number) => {
      // Layered sines so the whole sheet is one continuous surface
      const a = Math.sin(x * 1.4 + time * 1.1) * Math.cos(z * 1.1 - time * 0.7);
      const b = Math.sin((x + z) * 1.9 + time * 1.6) * 0.5;
      const c = Math.sin(Math.hypot(x * 0.8, z * 0.9) * 2.2 - time * 1.3) * 0.45;
      // Radial falloff so the sheet's center lifts more than its corners
      const fall = Math.exp(-(x * x + z * z) * 0.08);
      return (a + b + c) * WAVE_AMP * (0.65 + fall * 0.6);
    };

    const render = () => {
      t += 0.0045;

      // Trailing wash — keeps motion-blur look while preserving dark negative space
      ctx.fillStyle = "rgba(3, 6, 11, 0.30)";
      ctx.fillRect(0, 0, width, height);

      const focal = projScale();
      const ax = anchorX();
      const ay = anchorY();

      for (let j = 0; j < ROWS; j++) {
        // v: 0 (near) -> 1 (far)
        const v = j / (ROWS - 1);
        const worldZ = NEAR_OFFSET + v * MESH_D;

        for (let i = 0; i < COLS; i++) {
          const u = i / (COLS - 1);
          // Slight widening with depth so the sheet feels like a perspective plane
          const worldX = (u - 0.5) * 2 * MESH_W * (0.6 + v * 0.6);

          const h = wave(worldX, worldZ, t); // -ish [-1.1, 1.1]
          const worldY = h;

          // Rotate around X axis (pitch the plane away from the camera)
          const yR = worldY * cosP - worldZ * sinP;
          const zR = worldY * sinP + worldZ * cosP + CAM_DIST;

          if (zR <= 0.15) continue;

          // Perspective project
          const sx = ax + (worldX * focal) / zR;
          const sy = ay + (yR * focal) / zR;

          if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) continue;

          // Visual params
          const depth01 = Math.min(1, Math.max(0, (zR - 1.2) / 4.2)); // 0 near, 1 far
          const ridge = Math.max(0, Math.min(1, (h + 1.0) / 2.0));    // 0 valley, 1 ridge

          // Pick color by ridge intensity
          const pIdx = Math.min(palette.length - 1, Math.floor(ridge * palette.length));
          const col = palette[pIdx];

          // Mix toward deep navy in valleys / distance
          const mix = (1 - ridge) * 0.55 + depth01 * 0.55;
          const r = Math.round(col.r * (1 - mix) + deep.r * mix);
          const g = Math.round(col.g * (1 - mix) + deep.g * mix);
          const bl = Math.round(col.b * (1 - mix) + deep.b * mix);

          // Particle size — perspective + ridge boost
          const persp = 1 / zR;
          const size = (0.55 + ridge * 1.6) * (0.55 + persp * 1.8);

          // Alpha — fade with depth and edges (so the sheet melts into darkness)
          const edgeFade =
            Math.min(1, (1 - Math.abs(u - 0.5) * 1.6)) *
            Math.min(1, (1 - Math.max(0, v - 0.55) * 2.0));
          const alpha =
            (0.18 + ridge * 0.82) *
            (1 - depth01 * 0.7) *
            Math.max(0.05, edgeFade);

          if (alpha < 0.02) continue;

          ctx.beginPath();
          ctx.arc(sx, sy, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${bl},${alpha.toFixed(3)})`;
          ctx.fill();

          // Soft glow on the highest ridges
          if (ridge > 0.82 && depth01 < 0.75 && (i + j) % 2 === 0) {
            const gr = size * 4.5;
            const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, gr);
            glow.addColorStop(0, `rgba(${r},${g},${bl},${(alpha * 0.35).toFixed(3)})`);
            glow.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(sx, sy, gr, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
      style={{ display: "block" }}
    />
  );
}
