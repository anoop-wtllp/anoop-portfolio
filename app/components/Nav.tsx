"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { PROFILE } from "../data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#architecture", label: "Design" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // lock scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Slide the active-link indicator smoothly
  useEffect(() => {
    const move = () => {
      const list = listRef.current;
      if (!list) return;
      const el = list.querySelector<HTMLElement>(`[data-nav="${active}"]`);
      if (!el) return;
      setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    };
    move();
    window.addEventListener("resize", move);
    return () => window.removeEventListener("resize", move);
  }, [active]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_10px_40px_-16px_rgba(16,185,129,0.4)]"
            : "border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm"
        }`}
      >
        {/* logo */}
        <a href="#top" className="group flex items-center gap-2.5 pl-1">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent via-accent-4 to-accent-2 text-sm font-bold text-black">
            AM
            <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Anoop<span className="text-muted">.dev</span>
          </span>
        </a>

        {/* center links */}
        <ul
          ref={listRef}
          className="relative hidden items-center gap-0.5 md:flex"
        >
          <span
            aria-hidden
            className="absolute top-1/2 -z-10 h-9 rounded-xl bg-white/[0.07] ring-1 ring-white/[0.06]"
            style={{
              transform: `translate(${pill.left}px, -50%)`,
              width: pill.width,
              opacity: pill.ready ? 1 : 0,
              transition:
                "transform 0.45s var(--ease-out-expo), width 0.45s var(--ease-out-expo), opacity 0.3s ease",
            }}
          />
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-nav={l.href}
                className={`relative block rounded-xl px-3.5 py-2 text-sm transition-colors duration-300 ${
                  active === l.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* right actions */}
        <div className="flex items-center gap-2 pr-1">
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-xl text-muted hover:bg-white/[0.06] hover:text-foreground sm:grid"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-4 px-4 py-2 text-sm font-medium text-black md:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-black" />
            </span>
            Let&apos;s talk
          </a>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-xl hover:bg-white/[0.06] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-foreground transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* ===== mobile full-screen overlay ===== */}
      <div
        className={`fixed inset-0 z-[-1] flex flex-col md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div className="relative mt-24 flex flex-col gap-1 px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b border-white/[0.06] py-4 text-2xl font-semibold tracking-tight transition-all duration-500 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${active === l.href ? "text-gradient" : "text-foreground"}`}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
            >
              <span className="mr-3 font-mono text-sm text-accent">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
          <div
            className={`mt-8 flex items-center gap-3 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "500ms" : "0ms" }}
          >
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
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 text-muted hover:border-accent hover:text-foreground"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
