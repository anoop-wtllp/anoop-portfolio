import CursorGlow from "./components/CursorGlow";
import NeuralBackground from "./components/NeuralBackground";
import Terminal from "./components/Terminal";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Typewriter from "./components/Typewriter";
import Counter from "./components/Counter";
import TiltCard from "./components/TiltCard";
import TechMarquee from "./components/TechMarquee";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import OrbitRing from "./components/OrbitRing";
import SkillsShowcase from "./components/SkillsShowcase";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { TechIcon } from "./components/TechIcon";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileArrowDown } from "react-icons/fa6";
import { PROFILE, STATS, FOCUS, PROJECTS, EDUCATION } from "./data";

export default function Home() {
  const [featured, ...restProjects] = PROJECTS;

  return (
    <main id="top" className="relative">
      <NeuralBackground />
      {/* global vignette for depth */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, transparent 55%, rgba(5,10,9,0.9) 100%)",
        }}
      />
      <CursorGlow />
      <Nav />

      {/* ============================ HERO ============================ */}
      <section
        id="about"
        className="relative overflow-hidden px-6 pb-20 pt-32 lg:flex lg:min-h-screen lg:items-center lg:pt-28"
      >
        {/* Aurora background */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="aurora-blob left-[6%] top-[10%] h-[40vw] w-[40vw]"
            style={{ background: "var(--accent)", animation: "aurora 18s ease-in-out infinite" }}
          />
          <div
            className="aurora-blob right-[4%] top-[24%] h-[34vw] w-[34vw]"
            style={{ background: "var(--accent-4)", animation: "aurora 22s ease-in-out infinite reverse" }}
          />
          <div
            className="aurora-blob bottom-[4%] left-[34%] h-[36vw] w-[36vw]"
            style={{ background: "var(--accent-3)", opacity: 0.3, animation: "aurora 26s ease-in-out infinite" }}
          />
          <div className="absolute inset-0 grid-bg" />
          {STAR_POSITIONS.map((s, i) => (
            <span
              key={i}
              className="absolute h-[3px] w-[3px] rounded-full bg-white"
              style={{
                left: s.left,
                top: s.top,
                animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* ---- intro ---- */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full rounded-full bg-accent-3"
                      style={{ animation: "pulse-ring 1.8s ease-out infinite" }}
                    />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-3" />
                  </span>
                  Available for new opportunities
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
                  <span className="text-muted/90">Hi, I&apos;m</span>
                  <br />
                  <span className="text-gradient">{PROFILE.name}</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-5 flex min-h-[2.2rem] items-center text-lg font-medium sm:text-2xl">
                  <span className="text-muted">&lt;</span>
                  <Typewriter words={PROFILE.roles} />
                  <span className="text-muted">/&gt;</span>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <p className="mt-6 max-w-xl text-balance leading-7 text-muted">
                  {PROFILE.tagline}
                </p>
              </Reveal>

              <Reveal delay={340}>
                <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                  {FOCUS.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={440}>
                <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:scale-[1.04]"
                  >
                    View my work
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="/resume"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:bg-white/[0.04]"
                  >
                    <FaFileArrowDown /> Résumé
                  </a>
                </div>
              </Reveal>

              <Reveal delay={520}>
                <div className="mt-8 flex items-center gap-3">
                  {[
                    { Icon: FaGithub, href: PROFILE.socials.github, label: "GitHub" },
                    { Icon: FaLinkedinIn, href: PROFILE.socials.linkedin, label: "LinkedIn" },
                    { Icon: FaEnvelope, href: `mailto:${PROFILE.email}`, label: "Email" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      <Icon className="text-base" />
                    </a>
                  ))}
                  <span className="ml-1 h-px w-8 bg-white/10" />
                  <span className="font-mono text-xs text-muted">
                    open to work
                  </span>
                </div>
              </Reveal>
            </div>

            {/* ---- orbit visual ---- */}
            <Reveal
              delay={220}
              className="flex origin-center scale-[0.8] justify-center sm:scale-95 lg:scale-100 lg:justify-end"
            >
              <OrbitRing />
            </Reveal>
          </div>

          {/* ---- stats strip ---- */}
          <Reveal delay={560} className="mt-16">
            <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.06] overflow-hidden rounded-[var(--radius)] border border-white/[0.06] bg-white/[0.015] backdrop-blur sm:grid-cols-4 sm:divide-y-0">
              {STATS.map((s) => (
                <div key={s.label} className="px-6 py-6 text-center sm:text-left">
                  <div className="text-3xl font-semibold text-gradient sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
            <span
              className="h-2 w-1 rounded-full bg-accent-2"
              style={{ animation: "float 1.6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* ============================ TECH MARQUEE ============================ */}
      <section className="relative border-y border-white/5 py-8">
        <TechMarquee />
      </section>

      {/* ============================ ARCHITECTURE ============================ */}
      <section id="architecture" className="section mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          kicker="System Design"
          title="How I architect"
          subtitle="Containerized microservices communicating over Kafka, cached with Redis, secured with JWT & RBAC — with AI features layered in via LLM + RAG pipelines."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ship <span className="text-gradient">event-driven</span> systems
              that scale.
            </h3>
            <p className="mt-4 max-w-md leading-7 text-muted">
              I design services around clean boundaries — containerized and
              independently deployable, talking over a Kafka event bus, cached
              with Redis, and shipped through automated CI/CD.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Microservices", "Kafka", "Redis", "Docker", "CI/CD", "LLM · RAG"].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/8 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted"
                  >
                    {t}
                  </li>
                )
              )}
            </ul>
          </Reveal>
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <Terminal />
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <ArchitectureDiagram />
        </Reveal>
      </section>

      {/* ============================ SKILLS ============================ */}
      <section id="skills" className="section mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          kicker="Toolkit"
          title="Skills & Stack"
          subtitle="A full-stack toolkit spanning product engineering, distributed systems and applied AI. Filter by category to explore."
        />
        <Reveal className="mt-12">
          <SkillsShowcase />
        </Reveal>
      </section>

      {/* ============================ EXPERIENCE ============================ */}
      <section id="experience" className="section mx-auto max-w-4xl px-6">
        <SectionHeading
          index="03"
          kicker="Journey"
          title="Experience"
          subtitle="Shipping across three companies — backend, full-stack and DevOps. Tenure is calculated live from role dates."
        />
        <Reveal className="mt-12">
          <ExperienceTimeline />
        </Reveal>
      </section>

      {/* ============================ PROJECTS ============================ */}
      <section id="projects" className="section mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          kicker="Selected Work"
          title="Featured Projects"
          subtitle="A selection of production apps across EdTech, booking, agency and study-abroad platforms."
        />

        {/* featured project */}
        <Reveal className="mt-12">
          <TiltCard className="gradient-border rounded-[var(--radius)]">
            <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,240px)_1fr] md:items-stretch md:p-8">
              <div
                className="dotted relative grid min-h-[200px] place-items-center overflow-hidden rounded-2xl border border-white/8"
                style={{
                  background: `radial-gradient(120% 120% at 30% 20%, color-mix(in oklab, ${featured.accent} 26%, transparent), transparent 70%)`,
                }}
              >
                {/* floating stack icons */}
                {featured.stack.map((s, k) => (
                  <span
                    key={s}
                    className="absolute text-2xl opacity-80"
                    style={{
                      left: `${18 + k * 22}%`,
                      top: k % 2 === 0 ? "22%" : "64%",
                      animation: `float ${2.6 + k * 0.4}s ease-in-out ${k * 0.3}s infinite`,
                    }}
                  >
                    <TechIcon name={s} className="drop-shadow-lg" />
                  </span>
                ))}
                <span className="relative text-6xl drop-shadow-xl">{featured.emoji}</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                  ★ Featured
                </span>
                <h3 className="mt-3 text-2xl font-semibold group-hover:text-gradient sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-xl leading-7 text-muted">
                  {featured.blurb}
                </p>
                <div className="mt-5">
                  <StackChips items={featured.stack} />
                </div>
                {featured.link && (
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-1.5 font-mono text-xs text-accent-2 hover:text-foreground"
                  >
                    {featured.linkLabel ?? "Visit site"} <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* remaining projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {restProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <TiltCard className="gradient-border h-full rounded-[var(--radius)]">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-xl text-2xl"
                      style={{ background: `color-mix(in oklab, ${p.accent} 18%, transparent)` }}
                    >
                      {p.emoji}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      0{i + 2}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold group-hover:text-gradient">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                    {p.blurb}
                  </p>
                  <div className="mt-5">
                    <StackChips items={p.stack} />
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent-2 hover:text-foreground"
                    >
                      {p.linkLabel ?? "Visit site"} <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ EDUCATION ============================ */}
      <section id="education" className="section mx-auto max-w-4xl px-6">
        <SectionHeading index="05" kicker="Academics" title="Education" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <div className="glass h-full rounded-2xl p-6 lift">
                <span className="font-mono text-xs text-accent-2">
                  {edu.period}
                </span>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-muted">{edu.school}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ CONTACT ============================ */}
      <section id="contact" className="section relative overflow-hidden px-6">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="aurora-blob left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2"
            style={{ background: "var(--accent)", opacity: 0.24, animation: "aurora 20s ease-in-out infinite" }}
          />
        </div>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-accent-2">06 · Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">great</span> together.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted">
            Have a project, a role, or an idea? My inbox is always open — I&apos;ll
            get back to you within a day.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background hover:scale-[1.04]"
            >
              {PROFILE.email}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-4 text-base font-medium text-foreground hover:border-accent hover:bg-white/[0.04]"
            >
              {PROFILE.phone}
            </a>
          </div>
          <p className="mt-5 font-mono text-sm text-muted">📍 {PROFILE.location}</p>
          <div className="mt-10 flex items-center justify-center gap-4">
            {Object.entries(PROFILE.socials).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-5 py-2 text-sm capitalize text-muted hover:border-accent hover:text-foreground"
              >
                {name}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
          <span>© 2026 {PROFILE.name}. Crafted with Next.js &amp; Tailwind.</span>
          <span className="font-mono text-xs">Designed &amp; built with ♥ in India</span>
        </div>
      </footer>
    </main>
  );
}

/* ---------- project stack chips with brand icons ---------- */

function StackChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span
          key={s}
          className="inline-flex items-center gap-1.5 rounded-md border border-white/8 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-muted"
        >
          <TechIcon name={s} className="text-sm" />
          {s}
        </span>
      ))}
    </div>
  );
}

/* ---------- editorial section heading ---------- */

function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
}: {
  index: string;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-accent">{index}</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {kicker}
          </span>
        </div>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}

// Deterministic star field (avoids hydration mismatch from Math.random).
const STAR_POSITIONS = [
  { left: "12%", top: "18%", dur: 3.2, delay: 0.2 },
  { left: "22%", top: "62%", dur: 4.1, delay: 0.8 },
  { left: "34%", top: "28%", dur: 3.6, delay: 1.4 },
  { left: "46%", top: "72%", dur: 4.5, delay: 0.5 },
  { left: "58%", top: "22%", dur: 3.9, delay: 1.1 },
  { left: "68%", top: "58%", dur: 3.3, delay: 0.3 },
  { left: "78%", top: "32%", dur: 4.2, delay: 1.6 },
  { left: "88%", top: "68%", dur: 3.7, delay: 0.9 },
  { left: "16%", top: "82%", dur: 4.0, delay: 1.3 },
  { left: "72%", top: "82%", dur: 3.5, delay: 0.6 },
  { left: "40%", top: "12%", dur: 4.3, delay: 1.8 },
  { left: "62%", top: "42%", dur: 3.8, delay: 0.4 },
];
