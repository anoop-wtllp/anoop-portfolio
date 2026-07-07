import type { Metadata } from "next";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { PROFILE } from "../data";
import ResumeToolbar from "./ResumeToolbar";

export const metadata: Metadata = {
  title: "Anoop Maurya — Résumé",
  description:
    "Résumé of Anoop Maurya, Full Stack & AI Engineer (SDE-1). MERN, Laravel, Microservices, Kafka, Redis, CI/CD and Generative AI.",
};

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const SUMMARY =
  "Full Stack & AI Engineer with 1.6+ years building scalable web applications across SaaS, EdTech, ERP, Fintech and booking platforms. Proficient in the MERN stack, PHP/Laravel/CodeIgniter, RESTful APIs, event-driven microservices (Kafka, Redis), CI/CD pipelines and third-party integrations. Delivered 35+ client projects with a focus on performance, security and clean architecture.";

const SKILLS: { title: string; items: string[] }[] = [
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "PHP", "Laravel", "CodeIgniter", "OOP"],
  },
  {
    title: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Database & APIs",
    items: [
      "MySQL",
      "MongoDB",
      "RESTful APIs",
      "JWT Auth",
      "Payment Gateways",
    ],
  },
  {
    title: "Distributed Systems",
    items: ["Microservices", "Apache Kafka", "Redis", "RabbitMQ"],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Git / GitHub",
      "Postman",
      "MVC · RBAC",
    ],
  },
  {
    title: "AI Engineering",
    items: [
      "Claude (Anthropic)",
      "Generative AI",
      "Prompt Engineering",
      "LLM · RAG",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "Webcity Technology LLP",
    period: "Jan 2026 – Present",
    bullets: [
      "Build and maintain web applications using PHP, Laravel, CodeIgniter, MySQL and JavaScript; develop REST APIs, ERP modules and admin dashboards for clients.",
      "Configured GitHub Actions CI/CD pipelines to automate build, test and deployment workflows, reducing manual effort and production errors.",
    ],
  },
  {
    role: "Software Developer",
    company: "Flamingo Infotech Pvt. Ltd.",
    period: "Apr 2025 – Oct 2025",
    bullets: [
      "Developed scalable Laravel/PHP backend modules, admin dashboards and custom business application features for multiple concurrent client deployments.",
      "Integrated third-party APIs and payment gateways, enabling secure financial transactions within client-facing web applications.",
    ],
  },
  {
    role: "Backend Developer",
    company: "NPR Supporting Services Pvt. Ltd.",
    period: "Oct 2024 – Mar 2025",
    bullets: [
      "Designed and optimized RESTful APIs with Node.js and Express.js; architected MongoDB schemas with query tuning for high-volume data operations.",
      "Implemented JWT-based authentication and authorization middleware, enforcing role-based access control across all secured endpoints.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Online Learning Platform",
    stack: "Node.js · Express.js · MongoDB",
    desc: "Built a RESTful API from scratch with modular routing, CRUD operations, MongoDB integration and JWT-secured authentication/authorization middleware.",
  },
  {
    title: "Flight & Hotel Booking App",
    stack: "Laravel · MySQL · TripJack API",
    desc: "Developed a full-featured booking platform with real-time TripJack API integration, JWT auth, role-based access control and a comprehensive admin panel.",
  },
  {
    title: "Agency Network — agencynetwork.org",
    stack: "CodeIgniter · PHP · MySQL",
    desc: "Multi-country agency discovery platform with dynamic listings, category search, project posting / quote management and a moderated reviews & ratings system.",
  },
  {
    title: "RoundArk Academy — sa.roundark.academy",
    stack: "CodeIgniter · PHP · MySQL",
    desc: "Study-abroad consultancy platform for students targeting UK, Canada, Australia & USA — 500+ university listings, scholarship portal, student profiling and counselling booking.",
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Swami Vivekanand Subharti University",
    period: "2019 – 2023",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    school: "Feroze Gandhi Polytechnic, Raebareli",
    period: "2022 – 2024",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-8 print:bg-white print:p-0">
      <div className="mx-auto max-w-[840px]">
        <ResumeToolbar />

        {/* Paper sheet */}
        <article className="paper overflow-hidden rounded-xl bg-white text-slate-700 shadow-2xl print:rounded-none print:shadow-none">
          {/* Header */}
          <header className="bg-slate-900 px-8 py-8 text-white sm:px-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Anoop Maurya
            </h1>
            <p className="mt-1 text-lg font-medium text-emerald-400">
              Full Stack &amp; AI Engineer · SDE-1
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 hover:text-emerald-400"
              >
                <FaEnvelope className="text-emerald-400" /> {PROFILE.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <FaPhone className="text-emerald-400" /> {PROFILE.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <FaLocationDot className="text-emerald-400" /> {PROFILE.location}
              </span>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-400"
              >
                <FaGithub className="text-emerald-400" /> GitHub
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-400"
              >
                <FaLinkedinIn className="text-emerald-400" /> LinkedIn
              </a>
            </div>
          </header>

          {/* Body: two columns */}
          <div className="grid gap-8 px-8 py-8 sm:px-10 md:grid-cols-[1fr_1.7fr]">
            {/* -------- Sidebar -------- */}
            <aside className="space-y-7">
              <Section title="Highlights">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-baseline justify-between">
                    <span>Experience</span>
                    <strong className="text-slate-900">1.6+ yrs</strong>
                  </li>
                  <li className="flex items-baseline justify-between">
                    <span>Projects delivered</span>
                    <strong className="text-slate-900">35+</strong>
                  </li>
                  <li className="flex items-baseline justify-between">
                    <span>Companies</span>
                    <strong className="text-slate-900">3</strong>
                  </li>
                </ul>
              </Section>

              <Section title="Technical Skills">
                <div className="space-y-4">
                  {SKILLS.map((g) => (
                    <div key={g.title}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                        {g.title}
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {g.items.map((s) => (
                          <span
                            key={s}
                            className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-600"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Education">
                <div className="space-y-4">
                  {EDUCATION.map((e) => (
                    <div key={e.degree}>
                      <p className="text-sm font-semibold text-slate-900">
                        {e.degree}
                      </p>
                      <p className="text-xs text-slate-500">{e.school}</p>
                      <p className="mt-0.5 text-xs font-medium text-emerald-600">
                        {e.period}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            </aside>

            {/* -------- Main -------- */}
            <main className="space-y-7">
              <Section title="Professional Summary">
                <p className="text-sm leading-6">{SUMMARY}</p>
              </Section>

              <Section title="Work Experience">
                <div className="space-y-5">
                  {EXPERIENCE.map((exp) => (
                    <div key={exp.company} className="break-inside-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h3 className="text-[15px] font-bold text-slate-900">
                          {exp.role}
                          <span className="font-medium text-emerald-600">
                            {" "}
                            · {exp.company}
                          </span>
                        </h3>
                        <span className="text-xs font-medium text-slate-500">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {exp.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="relative pl-4 text-sm leading-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Key Projects">
                <div className="space-y-4">
                  {PROJECTS.map((p) => (
                    <div key={p.title} className="break-inside-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h3 className="text-[15px] font-bold text-slate-900">
                          {p.title}
                        </h3>
                        <span className="text-xs font-medium text-emerald-600">
                          {p.stack}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </main>
          </div>

          <footer className="border-t border-slate-100 px-8 py-4 text-center text-[11px] text-slate-400 sm:px-10">
            Anoop Maurya · Full Stack &amp; AI Engineer · {PROFILE.email}
          </footer>
        </article>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="break-inside-avoid">
      <h2 className="mb-3 border-b-2 border-emerald-500/70 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}
