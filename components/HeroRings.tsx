"use client";

import dynamic from "next/dynamic";

// three.js needs WebGL / window, so the rings are client-only.
const MagicRings = dynamic(() => import("./MagicRings"), { ssr: false });

const LIME = "#b7ff00";

export default function HeroRings() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <MagicRings
        color={LIME}
        colorTwo={LIME}
        ringCount={10}
        speed={1}
        attenuation={18}
        lineThickness={2}
        baseRadius={0.15}
        radiusStep={0.13}
        scaleRate={0.1}
        opacity={0.25}
        blur={0}
        noiseAmount={0.05}
        rotation={0}
        ringGap={1.1}
        fadeIn={0.7}
        fadeOut={0.5}
        followMouse={false}
        mouseInfluence={0.2}
        hoverScale={1.2}
        parallax={0.05}
        clickBurst={false}
      />
    </div>
  );
}
