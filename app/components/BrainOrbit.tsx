"use client";

import { useEffect, useRef } from "react";
import { TechIcon } from "./TechIcon";
import {
  LuBrainCircuit,
  LuCpu,
  LuServer,
  LuDatabase,
  LuGitBranch,
  LuCode,
  LuNetwork,
  LuTerminal,
} from "react-icons/lu";

/**
 * Hero visual: a glowing neural "brain" at the centre, orbited by two
 * counter-rotating rings of tech-skill icons, with faint engineering
 * icons drifting around it.
 *
 * Scroll-reactive: a rAF-throttled passive scroll listener writes a single
 * 0→1 progress value into the `--sp` CSS custom property; all motion is
 * expressed as GPU-friendly transform/opacity calc()s off that variable —
 * no per-frame React renders, no layout thrash. Honors reduced-motion.
 */

const SIZE = 400;
const CENTER = SIZE / 2;

const OUTER = [
  "React",
  "Node.js",
  "Docker",
  "Kafka",
  "PostgreSQL",
  "Claude",
  "TypeScript",
  "Redis",
];
const INNER = ["Laravel", "MongoDB", "Next.js", "Git", "Express"];

// faint engineering glyphs scattered around the brain (fixed, gently floating)
const ENGINEERING = [
  { Icon: LuCpu, top: "6%", left: "50%", d: 0 },
  { Icon: LuServer, top: "24%", left: "88%", d: 0.6 },
  { Icon: LuDatabase, top: "76%", left: "90%", d: 1.2 },
  { Icon: LuGitBranch, top: "94%", left: "52%", d: 0.3 },
  { Icon: LuNetwork, top: "76%", left: "10%", d: 0.9 },
  { Icon: LuCode, top: "24%", left: "8%", d: 1.5 },
  { Icon: LuTerminal, top: "50%", left: "2%", d: 0.4 },
];

function Ring({
  names,
  radius,
  duration,
  reverse,
}: {
  names: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <>
      <div
        aria-hidden
        className="absolute rounded-full border border-dashed border-white/10"
        style={{
          width: radius * 2,
          height: radius * 2,
          left: CENTER - radius,
          top: CENTER - radius,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          animation: `spin-slow ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {names.map((name, i) => {
          const angle = (Math.PI * 2 * i) / names.length - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={name}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-surface/80 shadow-lg backdrop-blur"
                style={{
                  animation: `spin-slow ${duration}s linear infinite`,
                  animationDirection: reverse ? "normal" : "reverse",
                }}
              >
                <TechIcon name={name} className="text-xl" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function BrainOrbit() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // Respect reduced-motion: leave --sp at 0, skip the listener entirely.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 while the visual sits in the hero, →1 as it scrolls up out of view
      const p = Math.min(1, Math.max(0, -rect.top / (vh * 0.9)));
      el.style.setProperty("--sp", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative shrink-0"
      style={{
        width: SIZE,
        height: SIZE,
        // scroll-driven 3D orbital tilt + parallax drift + fade
        transform:
          "perspective(1100px) rotateX(calc(var(--sp, 0) * 20deg)) rotateZ(calc(var(--sp, 0) * 10deg)) translateY(calc(var(--sp, 0) * -55px)) scale(calc(1 - var(--sp, 0) * 0.12))",
        opacity: "calc(1 - var(--sp, 0) * 0.5)",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
      aria-hidden
    >
      {/* soft glow — intensifies with scroll */}
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 42%, transparent), transparent 70%)",
          transform:
            "translate(-50%, -50%) scale(calc(1 + var(--sp, 0) * 0.7))",
          opacity: "calc(0.55 + var(--sp, 0) * 0.45)",
        }}
      />

      {/* faint engineering glyphs */}
      {ENGINEERING.map(({ Icon, top, left, d }, i) => (
        <span
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-accent-2/25"
          style={{
            top,
            left,
            animation: `float ${3.2 + d}s ease-in-out ${d}s infinite`,
          }}
        >
          <Icon className="text-lg" />
        </span>
      ))}

      {/* orbiting tech-skill rings */}
      <Ring names={OUTER} radius={172} duration={34} />
      <Ring names={INNER} radius={108} duration={24} reverse />

      {/* centre brain */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* pulse halo */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            animation: "pulse-ring 2.8s ease-out infinite",
            boxShadow: "0 0 0 2px var(--accent)",
          }}
        />
        <div
          className="relative grid h-32 w-32 place-items-center rounded-full border border-white/12 bg-surface/70 backdrop-blur"
          style={{ animation: "breathe 4s ease-in-out infinite" }}
        >
          <LuBrainCircuit
            className="text-6xl text-accent-4"
            style={{
              filter:
                "drop-shadow(0 0 calc(14px + var(--sp, 0) * 26px) color-mix(in oklab, var(--accent) 70%, transparent))",
            }}
          />
          {/* synapse blips */}
          {[
            { t: "26%", l: "30%", delay: 0 },
            { t: "34%", l: "70%", delay: 0.5 },
            { t: "66%", l: "38%", delay: 1 },
            { t: "62%", l: "68%", delay: 1.4 },
          ].map((s, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-accent-3"
              style={{
                top: s.t,
                left: s.l,
                boxShadow: "0 0 8px var(--accent-3)",
                animation: `twinkle 2s ease-in-out ${s.delay}s infinite`,
              }}
            />
          ))}
        </div>

        {/* label */}
        <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-surface/80 px-3 py-1 font-mono text-[11px] text-muted backdrop-blur">
          <span className="text-accent-2">//</span> anoop.brain
        </span>
      </div>
    </div>
  );
}
