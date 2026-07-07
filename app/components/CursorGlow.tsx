"use client";

import { useEffect, useRef } from "react";

/**
 * A soft radial glow that trails the cursor (desktop only) plus a
 * top scroll-progress bar. Both are pure-DOM / rAF driven so they
 * never trigger React re-renders.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const bar = barRef.current;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (glow) glow.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar) bar.style.transform = `scaleX(${scrolled})`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[500px] w-[500px] rounded-full md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(94,234,212,0.06) 40%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
        ref={barRef}
        style={{
          background:
            "linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3))",
          transform: "scaleX(0)",
        }}
      />
    </>
  );
}
