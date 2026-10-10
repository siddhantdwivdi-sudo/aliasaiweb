"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type StatCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

/** Counts from 0 up to `value` the first time it scrolls into view. */
export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const format = (n: number) =>
      `${prefix}${(Math.floor(n * 10 ** decimals) / 10 ** decimals).toLocaleString("en-US", { minimumFractionDigits: decimals })}${suffix}`;

    if (reduce) {
      el.textContent = format(value);
      return;
    }
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (latest) => {
        el.textContent = format(latest);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, prefix, suffix, decimals]);

  return (
    <div className="text-center">
      <div
        ref={ref}
        className="font-hero text-[40px] font-bold leading-none lining-nums tabular-nums text-navy md:text-[56px]"
      >
        {`${prefix}${(0).toFixed(decimals)}${suffix}`}
      </div>
      <div className="mt-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">
        {label}
      </div>
    </div>
  );
}
