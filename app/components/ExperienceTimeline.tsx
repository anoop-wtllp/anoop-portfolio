"use client";

import { useEffect, useState } from "react";
import { LuCode, LuServer, LuLayers, LuCalendarClock, LuBuilding2, LuTrendingUp } from "react-icons/lu";
import { EXPERIENCE } from "../data";
import { TechIcon } from "./TechIcon";

const ROLE_ICON = { code: LuCode, server: LuServer, layers: LuLayers };

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// A deterministic baseline so SSR and first client render agree (no
// hydration mismatch); replaced with the real date right after mount.
const BASELINE = new Date(2026, 6, 1);

function toMonthIndex(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

/** Inclusive month span (LinkedIn-style): Oct 2024 → Mar 2025 = 6 mos. */
function spanMonths(start: string, end: string | null, now: Date) {
  const s = toMonthIndex(start);
  const e = end ? toMonthIndex(end) : now.getFullYear() * 12 + now.getMonth();
  return Math.max(0, e - s) + 1;
}

function fmtDuration(months: number) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y && m) return `${y}y ${m}m`;
  if (y) return `${y}y`;
  return `${m}m`;
}

function fmtMonth(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export default function ExperienceTimeline() {
  const [now, setNow] = useState<Date>(BASELINE);
  useEffect(() => setNow(new Date()), []);

  const totalMonths = EXPERIENCE.reduce(
    (sum, e) => sum + spanMonths(e.start, e.end, now),
    0
  );
  const totalYears = totalMonths / 12;
  const firstStart = EXPERIENCE.reduce(
    (min, e) => (toMonthIndex(e.start) < toMonthIndex(min) ? e.start : min),
    EXPERIENCE[0].start
  );
  const current = EXPERIENCE.find((e) => e.end === null) ?? EXPERIENCE[0];

  return (
    <div>
      {/* ---- auto-calculated stats widget ---- */}
      <div className="grid gap-px overflow-hidden rounded-[var(--radius)] border border-white/[0.06] bg-white/[0.02] sm:grid-cols-3">
        <div className="flex items-center gap-4 p-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-4/20 text-accent">
            <LuCalendarClock className="text-2xl" />
          </span>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-gradient tabular-nums">
                {totalYears.toFixed(1)}
              </span>
              <span className="text-sm text-muted">yrs</span>
            </div>
            <p className="font-mono text-[11px] text-muted">
              {fmtDuration(totalMonths)} · since {fmtMonth(firstStart)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-white/[0.06] p-6 sm:border-l sm:border-t-0">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-2/20 to-accent-3/20 text-accent-2">
            <LuBuilding2 className="text-2xl" />
          </span>
          <div>
            <div className="text-3xl font-bold tabular-nums">{EXPERIENCE.length}</div>
            <p className="font-mono text-[11px] text-muted">companies</p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-white/[0.06] p-6 sm:border-l sm:border-t-0">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-3/20 to-accent/20 text-accent-3">
            <LuTrendingUp className="text-2xl" />
          </span>
          <div>
            <div className="text-sm font-semibold leading-tight">Currently</div>
            <p className="text-[13px] leading-tight text-muted">
              {current.role} · <span className="text-accent">{current.company.split(" ")[0]}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ---- timeline ---- */}
      <div className="relative mt-10">
        <div
          className="absolute bottom-2 left-[19px] top-2 w-px"
          style={{
            background:
              "linear-gradient(var(--accent), var(--accent-2), var(--accent-3), transparent)",
          }}
        />
        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => {
            const RoleIcon = ROLE_ICON[exp.icon];
            const months = spanMonths(exp.start, exp.end, now);
            const isCurrent = exp.end === null;
            return (
              <div key={i} className="relative pl-14">
                {/* node with icon */}
                <span className="absolute left-0 top-3 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-surface text-accent shadow-lg">
                  <RoleIcon className="text-lg" />
                  {isCurrent && (
                    <span
                      className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-background bg-accent-3"
                      style={{ boxShadow: "0 0 10px var(--accent-3)" }}
                    />
                  )}
                </span>

                <div className="glass rounded-2xl p-6 lift">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm text-accent">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-accent-2">
                        {fmtDuration(months)}
                        {isCurrent && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-3" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-3" />
                          </span>
                        )}
                      </span>
                      <p className="mt-1 font-mono text-[11px] text-muted">
                        {fmtMonth(exp.start)} — {exp.end ? fmtMonth(exp.end) : "Present"}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        <TechIcon name={t} className="text-sm" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
