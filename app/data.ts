/**
 * Central content for the portfolio. Edit the copy here — the UI
 * components read everything from this file.
 */

export const PROFILE = {
  name: "Anoop Maurya",
  handle: "anoop.dev",
  roles: [
    "Software Engineer (SDE-1)",
    "AI Engineer",
    "Full Stack Developer",
    "Microservices & Backend",
    "LLM / Gen-AI Builder",
  ],
  tagline:
    "Software Engineer & AI Engineer with 1.6+ years building scalable, event-driven web systems — microservices with Kafka & Redis, secure REST APIs, and LLM-powered features. 35+ projects shipped across SaaS, EdTech, ERP, Fintech and booking platforms.",
  email: "anoopm638@gmail.com",
  phone: "+91 78977 43396",
  location: "Noida, India",
  // Add your real profile links here 👇
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
};

export const STATS = [
  { label: "Years Experience", value: 1.6, suffix: "+", decimals: 1 },
  { label: "Projects Delivered", value: 35, suffix: "+", decimals: 0 },
  { label: "Companies", value: 3, suffix: "", decimals: 0 },
  { label: "Tech Stack", value: 20, suffix: "+", decimals: 0 },
];

// Specialty chips shown in the hero
export const FOCUS = [
  "SDE-1",
  "AI Engineering",
  "Microservices",
  "Event-Driven Systems",
  "System Design",
];

// Infinite marquee row
export const MARQUEE = [
  "Node.js",
  "Express.js",
  "React.js",
  "PHP",
  "Laravel",
  "Microservices",
  "Apache Kafka",
  "Redis",
  "Docker",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "RabbitMQ",
  "LLMs / RAG",
  "Prompt Engineering",
  "GitHub Actions",
  "CI/CD",
  "Generative AI",
];

export type SkillGroup = {
  title: string;
  accent: string;
  skills: { name: string; level: number }[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Backend & APIs",
    accent: "var(--accent)",
    skills: [
      { name: "Node.js / Express.js", level: 88 },
      { name: "PHP · Laravel · CodeIgniter", level: 90 },
      { name: "RESTful APIs · JWT Auth", level: 90 },
      { name: "TypeScript (ES6+)", level: 82 },
    ],
  },
  {
    title: "AI Engineering",
    accent: "var(--accent-4)",
    skills: [
      { name: "LLM Integration (Claude / OpenAI)", level: 85 },
      { name: "RAG & Vector Search", level: 80 },
      { name: "Prompt Engineering", level: 88 },
      { name: "AI-Assisted Development", level: 90 },
    ],
  },
  {
    title: "Distributed Systems",
    accent: "var(--accent-2)",
    skills: [
      { name: "Microservices Architecture", level: 82 },
      { name: "Apache Kafka (Event Streaming)", level: 80 },
      { name: "Redis (Cache / Pub-Sub)", level: 83 },
      { name: "Message Queues (RabbitMQ)", level: 78 },
    ],
  },
  {
    title: "Databases",
    accent: "var(--accent-3)",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 82 },
      { name: "Schema Design & Query Tuning", level: 86 },
    ],
  },
  {
    title: "DevOps & Cloud",
    accent: "var(--accent)",
    skills: [
      { name: "Docker & Containerization", level: 84 },
      { name: "GitHub Actions · CI/CD", level: 85 },
      { name: "Git / GitHub", level: 92 },
      { name: "MVC · RBAC · Clean Architecture", level: 88 },
    ],
  },
  {
    title: "Frontend",
    accent: "var(--accent-2)",
    skills: [
      { name: "React.js", level: 86 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Bootstrap / Tailwind", level: 88 },
    ],
  },
];

// Interactive skills grid — names must match keys in TechIcon's TECH map.
export type TechSkill = { name: string; category: string; level: number };

export const SKILL_CATEGORIES = [
  "All",
  "Backend",
  "Frontend",
  "Data",
  "Systems",
  "DevOps",
  "AI",
] as const;

export const TECH_SKILLS: TechSkill[] = [
  // Backend
  { name: "Node.js", category: "Backend", level: 90 },
  { name: "Express", category: "Backend", level: 88 },
  { name: "Laravel", category: "Backend", level: 88 },
  { name: "PHP", category: "Backend", level: 90 },
  { name: "REST APIs", category: "Backend", level: 90 },
  // Frontend
  { name: "React", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 85 },
  { name: "TypeScript", category: "Frontend", level: 84 },
  { name: "JavaScript", category: "Frontend", level: 92 },
  { name: "Tailwind", category: "Frontend", level: 88 },
  { name: "Bootstrap", category: "Frontend", level: 85 },
  // Data
  { name: "MongoDB", category: "Data", level: 88 },
  { name: "MySQL", category: "Data", level: 90 },
  { name: "PostgreSQL", category: "Data", level: 82 },
  { name: "Redis", category: "Data", level: 82 },
  { name: "Prisma", category: "Data", level: 78 },
  // Systems
  { name: "Microservices", category: "Systems", level: 82 },
  { name: "Kafka", category: "Systems", level: 80 },
  { name: "RabbitMQ", category: "Systems", level: 78 },
  // DevOps
  { name: "Docker", category: "DevOps", level: 84 },
  { name: "GitHub Actions", category: "DevOps", level: 85 },
  { name: "Git", category: "DevOps", level: 92 },
  { name: "Postman", category: "DevOps", level: 88 },
  { name: "CI/CD", category: "DevOps", level: 85 },
  // AI
  { name: "Claude", category: "AI", level: 85 },
  { name: "Generative AI", category: "AI", level: 84 },
  { name: "LLM / RAG", category: "AI", level: 80 },
  { name: "Prompt Engineering", category: "AI", level: 88 },
];

export type Experience = {
  role: string;
  company: string;
  // machine-readable YYYY-MM for auto-calculated durations
  start: string;
  end: string | null; // null = present
  icon: "code" | "server" | "layers";
  description: string;
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Web Developer",
    company: "Webcity Technology LLP",
    start: "2026-01",
    end: null,
    icon: "layers",
    description:
      "Build and maintain web applications using PHP, Laravel, CodeIgniter, MySQL and JavaScript. Develop REST APIs, ERP modules and admin dashboards, and configured GitHub Actions CI/CD pipelines to automate build, test and deployment — cutting manual effort and production errors.",
    tags: ["Laravel", "CodeIgniter", "MySQL", "GitHub Actions", "CI/CD"],
  },
  {
    role: "Software Developer",
    company: "Flamingo Infotech Pvt. Ltd.",
    start: "2025-04",
    end: "2025-10",
    icon: "code",
    description:
      "Developed scalable Laravel/PHP backend modules, admin dashboards and custom business features across multiple concurrent client deployments. Integrated third-party APIs and payment gateways to enable secure financial transactions in client-facing apps.",
    tags: ["Laravel", "PHP", "REST APIs"],
  },
  {
    role: "Backend Developer",
    company: "NPR Supporting Services Pvt. Ltd.",
    start: "2024-10",
    end: "2025-03",
    icon: "server",
    description:
      "Designed and optimized RESTful APIs with Node.js and Express.js, and architected MongoDB schemas with query tuning for high-volume operations. Implemented JWT authentication and role-based access control middleware across all secured endpoints.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
];

export type Project = {
  title: string;
  category: string;
  categoryIcon: "grad" | "plane" | "store" | "book" | "api";
  blurb: string;
  metrics: string[];
  stack: string[];
  emoji: string;
  accent: string;
  link?: string;
  linkLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "RoundArk Academy",
    category: "Study Abroad",
    categoryIcon: "grad",
    blurb:
      "Study-abroad consultancy platform for students targeting the UK, Canada, Australia & USA — university listings, scholarship portal, student profiling and counselling-session booking.",
    metrics: ["500+ universities", "Scholarship portal", "Counselling booking"],
    stack: ["CodeIgniter", "PHP", "MySQL"],
    emoji: "🎓",
    accent: "var(--accent-4)",
    link: "https://sa.roundark.academy",
    linkLabel: "sa.roundark.academy",
  },
  {
    title: "Agency Network",
    category: "Marketplace",
    categoryIcon: "store",
    blurb:
      "Multi-country agency discovery platform with dynamic listings, category search, project posting / quote management and a moderated reviews & ratings system.",
    metrics: ["Multi-country", "Quote management", "Reviews & ratings"],
    stack: ["CodeIgniter", "PHP", "MySQL"],
    emoji: "🌐",
    accent: "var(--accent-3)",
    link: "https://agencynetwork.org",
    linkLabel: "agencynetwork.org",
  },
  {
    title: "Flight & Hotel Booking App",
    category: "Fintech · Booking",
    categoryIcon: "plane",
    blurb:
      "Full-featured booking platform with real-time TripJack API integration, JWT auth, role-based access control and a comprehensive admin panel.",
    metrics: ["Real-time TripJack API", "JWT · RBAC", "Admin panel"],
    stack: ["Laravel", "MySQL", "REST APIs"],
    emoji: "✈️",
    accent: "var(--accent-2)",
  },
  {
    title: "Online Learning Platform",
    category: "EdTech · API",
    categoryIcon: "book",
    blurb:
      "RESTful API built from scratch with modular routing, full CRUD, MongoDB integration and JWT-secured authentication & authorization middleware.",
    metrics: ["Modular REST API", "Full CRUD", "JWT middleware"],
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    emoji: "📚",
    accent: "var(--accent)",
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  status: "Pursuing" | "Completed";
  icon: "cap" | "scroll" | "award";
  field?: string;
};

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh",
    period: "Jul 2024 — Jul 2027",
    status: "Pursuing",
    icon: "cap",
    field: "Computer Science",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    school: "Feroze Gandhi Polytechnic, Raebareli",
    period: "2022 — 2024",
    status: "Completed",
    icon: "scroll",
    field: "Computer Science",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Swami Vivekanand Subharti University",
    period: "2019 — 2023",
    status: "Completed",
    icon: "award",
    field: "Computer Applications",
  },
];
