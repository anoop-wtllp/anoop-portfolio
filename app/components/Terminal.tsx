"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; color: string; indent?: boolean };

// A fake deploy/log stream that shows off the stack.
const LINES: Line[] = [
  { text: "$ docker compose up --build", color: "var(--foreground)" },
  { text: "✓ kafka broker ready on :9092", color: "var(--accent-3)" },
  { text: "✓ redis cache connected · hit-rate 98%", color: "var(--accent-3)" },
  { text: "→ spawning service: api-gateway", color: "var(--accent-2)" },
  { text: "→ spawning service: auth (JWT · RBAC)", color: "var(--accent-2)" },
  { text: "→ spawning service: ai-worker", color: "var(--accent-2)" },
  { text: "[ai] LLM + RAG pipeline warmed ✓", color: "var(--accent)" },
  { text: "✓ 35 services healthy · 0 errors", color: "var(--accent-3)" },
  { text: "listening → http://anoop.dev 🚀", color: "var(--foreground)" },
];

const TYPE_SPEED = 26; // ms per char
const LINE_PAUSE = 260; // ms between lines
const LOOP_PAUSE = 3600; // ms before restart

export default function Terminal() {
  const [done, setDone] = useState<Line[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    // finished the whole block → hold, then restart
    if (lineIdx >= LINES.length) {
      timer = setTimeout(() => {
        setDone([]);
        setTyped("");
        setLineIdx(0);
      }, LOOP_PAUSE);
      return () => clearTimeout(timer);
    }

    const current = LINES[lineIdx];

    if (typed.length < current.text.length) {
      timer = setTimeout(() => {
        setTyped(current.text.slice(0, typed.length + 1));
      }, TYPE_SPEED);
    } else {
      // line complete → commit and advance
      timer = setTimeout(() => {
        setDone((d) => [...d, current]);
        setTyped("");
        setLineIdx((i) => i + 1);
      }, LINE_PAUSE);
    }

    return () => clearTimeout(timer);
  }, [typed, lineIdx]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [done, typed]);

  const current = LINES[lineIdx];

  return (
    <div className="gradient-border w-full max-w-xl overflow-hidden rounded-xl text-left shadow-[0_24px_80px_-30px_rgba(16,185,129,0.5)]">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">
          anoop@dev — ~/services — zsh
        </span>
      </div>

      {/* body */}
      <div
        ref={scrollerRef}
        className="h-[248px] overflow-hidden bg-black/40 p-4 font-mono text-[13px] leading-6 backdrop-blur"
      >
        {done.map((l, i) => (
          <div key={i} style={{ color: l.color }}>
            {l.text}
          </div>
        ))}
        {lineIdx < LINES.length && (
          <div style={{ color: current.color }}>
            {typed}
            <span className="caret" />
          </div>
        )}
      </div>
    </div>
  );
}
