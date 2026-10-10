"use client";

import { Fragment, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { outcomes } from "@/lib/home-content";
import Reveal from "./Reveal";

// One full loop: 4 card traces + 3 connector traces, then a short rest.
const CYCLE = 10;
const SEGMENT = 1.2;
const RADIUS = 16;
const INSET = 1;
const DESKTOP_QUERY = "(min-width: 900px)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(DESKTOP_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );
}

function useSize(ref: React.RefObject<HTMLElement | null>) {
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect();
      setSize({ w: width, h: height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

/**
 * Two paths from the entry point (left-middle, or top-middle when stacked)
 * around the border to the exit point (right-middle / bottom-middle).
 */
function borderPaths(w: number, h: number, vertical: boolean) {
  const r = RADIUS;
  const x0 = INSET;
  const y0 = INSET;
  const x1 = w - INSET;
  const y1 = h - INSET;
  const cx = w / 2;
  const cy = h / 2;

  if (vertical) {
    return [
      `M ${cx} ${y0} H ${x0 + r} A ${r} ${r} 0 0 0 ${x0} ${y0 + r} V ${y1 - r} A ${r} ${r} 0 0 0 ${x0 + r} ${y1} H ${cx}`,
      `M ${cx} ${y0} H ${x1 - r} A ${r} ${r} 0 0 1 ${x1} ${y0 + r} V ${y1 - r} A ${r} ${r} 0 0 1 ${x1 - r} ${y1} H ${cx}`,
    ];
  }

  return [
    `M ${x0} ${cy} V ${y0 + r} A ${r} ${r} 0 0 1 ${x0 + r} ${y0} H ${x1 - r} A ${r} ${r} 0 0 1 ${x1} ${y0 + r} V ${cy}`,
    `M ${x0} ${cy} V ${y1 - r} A ${r} ${r} 0 0 0 ${x0 + r} ${y1} H ${x1 - r} A ${r} ${r} 0 0 0 ${x1} ${y1 - r} V ${cy}`,
  ];
}

function FlowCard({
  index,
  title,
  body,
  vertical,
}: {
  index: number;
  title: string;
  body: string;
  vertical: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { w, h } = useSize(ref);
  const delay = index * 2 * SEGMENT;

  return (
    <div
      ref={ref}
      className="relative flex flex-1 basis-0 flex-col rounded-2xl bg-panel bg-[linear-gradient(to_bottom,rgba(183,255,0,0.1),transparent_60%)] px-8 py-12"
    >
      <h3 className="mb-6 text-center font-hero text-[28px] font-bold leading-tight tracking-[-0.01em] text-white">{title}</h3>
      <p className="text-base leading-[1.8] text-white/60">{body}</p>

      {w > 0 && (
        <svg
          aria-hidden="true"
          width={w}
          height={h}
          className="pointer-events-none absolute left-0 top-0 overflow-visible"
        >
          <rect
            x={INSET}
            y={INSET}
            width={w - INSET * 2}
            height={h - INSET * 2}
            rx={RADIUS}
            fill="none"
            stroke="rgba(183,255,0,0.4)"
            strokeWidth={2}
            style={{ filter: "drop-shadow(0 0 6px rgba(183,255,0,0.35))" }}
          />
          {borderPaths(w, h, vertical).map((d, i) => (
            <path
              key={i}
              d={d}
              pathLength={1}
              fill="none"
              stroke="#b7ff00"
              strokeWidth={8}
              strokeLinecap="round"
              className="motion-reduce:hidden"
              style={{
                strokeDasharray: "0.0001 2",
                opacity: 0,
                filter: "drop-shadow(0 0 6px #b7ff00) drop-shadow(0 0 14px rgba(183,255,0,0.8))",
                animation: `trace ${CYCLE}s linear ${delay}s infinite`,
              }}
            />
          ))}
        </svg>
      )}
    </div>
  );
}

function Connector({ index, vertical }: { index: number; vertical: boolean }) {
  // Starts right after the card before it finishes.
  const delay = (index * 2 + 1) * SEGMENT;
  const length = vertical ? 48 : 72;

  return (
    <div
      aria-hidden="true"
      className="relative h-12 w-0.5 shrink-0 self-center bg-lime/40 shadow-[0_0_10px_rgba(183,255,0,0.5)] min-[900px]:h-0.5 min-[900px]:w-[72px]"
    >
      <span
        className="absolute size-2 rounded-full bg-lime opacity-0 shadow-[0_0_8px_2px_#b7ff00,0_0_18px_6px_rgba(183,255,0,0.6)] motion-reduce:hidden"
        style={
          {
            left: vertical ? "50%" : 0,
            top: vertical ? 0 : "50%",
            marginLeft: -4,
            marginTop: -4,
            "--dx": vertical ? "0px" : `${length}px`,
            "--dy": vertical ? `${length}px` : "0px",
            animation: `connDot ${CYCLE}s linear ${delay}s infinite`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

export default function WhatYouGet() {
  const isDesktop = useIsDesktop();
  const vertical = !isDesktop;

  return (
    <section id="what-you-get" className="dark-band scroll-mt-20 bg-ink">
      <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-10 md:py-[110px]">
        <Reveal className="mb-12 text-center md:mb-16">
          <h2 className="font-hero text-[38px] font-bold leading-[1.15] tracking-[-0.01em] text-white md:text-[60px]">
            How We Build Your <span className="emph-accent">Pipeline</span>
          </h2>
          <span className="mx-auto mt-8 block h-0.5 w-[72px] bg-lime/80" />
        </Reveal>

        <Reveal>
          <div className="mx-auto flex max-w-[460px] flex-col items-stretch min-[900px]:max-w-none min-[900px]:flex-row">
            {outcomes.map((item, i) => (
              <Fragment key={item.title}>
                <FlowCard index={i} title={item.title} body={item.body} vertical={vertical} />
                {i < outcomes.length - 1 && <Connector index={i} vertical={vertical} />}
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
