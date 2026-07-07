import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiPostman,
  SiAnthropic,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiPrisma,
  SiJsonwebtokens,
} from "react-icons/si";
import { LuBrain, LuSparkles, LuNetwork, LuInfinity, LuTerminal } from "react-icons/lu";
import { TbApi } from "react-icons/tb";

type Entry = { Icon: IconType; color: string };

// Brand colors, nudged lighter where the true brand is too dark for a dark UI.
export const TECH: Record<string, Entry> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress, color: "#D6DBE1" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  PHP: { Icon: SiPhp, color: "#8892C4" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: SiMysql, color: "#5A93C4" },
  PostgreSQL: { Icon: SiPostgresql, color: "#6C9BD6" },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  Kafka: { Icon: SiApachekafka, color: "#D6DBE1" },
  RabbitMQ: { Icon: SiRabbitmq, color: "#FF6600" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#3B93F6" },
  Git: { Icon: SiGit, color: "#F05032" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Claude: { Icon: SiAnthropic, color: "#D97757" },
  Tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { Icon: SiBootstrap, color: "#A17CE0" },
  Redux: { Icon: SiRedux, color: "#A47DE0" },
  Prisma: { Icon: SiPrisma, color: "#CBD5E1" },
  JWT: { Icon: SiJsonwebtokens, color: "#EC4899" },
  // concept skills (no brand mark)
  "REST APIs": { Icon: TbApi, color: "#a3e635" },
  Microservices: { Icon: LuNetwork, color: "#22d3ee" },
  "CI/CD": { Icon: LuInfinity, color: "#10b981" },
  "Generative AI": { Icon: LuSparkles, color: "#D97757" },
  "LLM / RAG": { Icon: LuBrain, color: "#5eead4" },
  "Prompt Engineering": { Icon: LuTerminal, color: "#a3e635" },
};

// Order shown in the marquee
export const STACK: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "Laravel",
  "PHP",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "Docker",
  "GitHub Actions",
  "Git",
  "Postman",
  "Claude",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "Prisma",
  "JWT",
];

export function TechIcon({
  name,
  className,
  colored = true,
}: {
  name: string;
  className?: string;
  colored?: boolean;
}) {
  const entry = TECH[name];
  if (!entry) return null;
  const { Icon, color } = entry;
  return (
    <Icon
      className={className}
      style={colored ? { color } : undefined}
      aria-hidden
    />
  );
}
