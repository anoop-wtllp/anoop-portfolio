"use client";

import { useMemo, useState } from "react";
import { TECH_SKILLS, SKILL_CATEGORIES } from "../data";
import { TECH, TechIcon } from "./TechIcon";

export default function SkillsShowcase() {
  const [cat, setCat] = useState<string>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: TECH_SKILLS.length };
    for (const s of TECH_SKILLS) c[s.category] = (c[s.category] ?? 0) + 1;
    return c;
  }, []);

  const list = useMemo(
    () =>
      cat === "All"
        ? TECH_SKILLS
        : TECH_SKILLS.filter((s) => s.category === cat),
    [cat]
  );

  return (
    <div>
      {/* ---- filter widget ---- */}
      <div className="flex flex-wrap gap-2">
        {SKILL_CATEGORIES.map((c) => {
          const activeCat = cat === c;
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                activeCat
                  ? "border-transparent bg-gradient-to-r from-accent to-accent-4 text-black"
                  : "border-white/10 bg-white/[0.02] text-muted hover:border-white/25 hover:text-foreground"
              }`}
            >
              {c}
              <span
                className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                  activeCat ? "bg-black/15 text-black" : "bg-white/[0.06] text-muted"
                }`}
              >
                {counts[c] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      {/* ---- tech tiles ---- */}
      <div
        key={cat}
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {list.map((s, i) => {
          const color = TECH[s.name]?.color ?? "var(--accent)";
          return (
            <div
              key={s.name}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              style={{ animation: `reveal-up 0.5s var(--ease-out-expo) ${i * 35}ms both` }}
            >
              {/* hover glow in brand color */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
                style={{ background: color }}
              />
              <div className="flex items-center justify-between">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `color-mix(in oklab, ${color} 40%, transparent)`,
                    background: `color-mix(in oklab, ${color} 12%, transparent)`,
                  }}
                >
                  <TechIcon name={s.name} className="text-2xl" />
                </span>
                <span className="font-mono text-xs text-muted">{s.level}%</span>
              </div>

              <p className="mt-3 text-sm font-medium text-foreground">{s.name}</p>

              {/* proficiency meter */}
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.level}%`,
                    background: `linear-gradient(90deg, ${color}, var(--accent-2))`,
                    animation: "grow-x 1s var(--ease-out-expo) both",
                    transformOrigin: "left",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
