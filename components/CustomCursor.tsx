"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TAIL_COUNT = 5;

/** Lime ball that follows the pointer, with a fading tail of smaller dots. Fine-pointer devices only. */
export default function CustomCursor() {
  const ballRef = useRef<HTMLDivElement>(null);
  const tailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const touchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const ball = ballRef.current;
    const tails = tailRefs.current.filter((tail): tail is HTMLDivElement => tail !== null);
    if (touchOnly || !ball) return;

    document.body.style.cursor = "none";

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let started = false;
    const positions = tails.map(() => ({ x: mouseX, y: mouseY }));

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        started = true;
        // Start the trail at the pointer so it doesn't sweep in from the centre.
        positions.forEach((p) => {
          p.x = mouseX;
          p.y = mouseY;
        });
        gsap.set(ball, { x: mouseX, y: mouseY, opacity: 1 });
      }
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      if (!started) return;

      gsap.to(ball, { x: mouseX, y: mouseY, duration: 0.1, ease: "power3.out", overwrite: true });

      positions[0].x += (mouseX - positions[0].x) * 0.25;
      positions[0].y += (mouseY - positions[0].y) * 0.25;
      for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.35;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.35;
      }

      tails.forEach((tail, i) => {
        gsap.set(tail, {
          x: positions[i].x,
          y: positions[i].y,
          scale: 1 - i * 0.15,
          opacity: 0.6 - i * 0.1,
        });
      });
    };
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(tick);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={ballRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime opacity-0 [@media(hover:none)_and_(pointer:coarse)]:hidden"
      />
      {Array.from({ length: TAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            tailRefs.current[i] = el;
          }}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[9998] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime opacity-0 [@media(hover:none)_and_(pointer:coarse)]:hidden"
        />
      ))}
    </>
  );
}
