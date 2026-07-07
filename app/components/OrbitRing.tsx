import { TechIcon } from "./TechIcon";

/**
 * Animated identity visual: a glowing "AM" monogram orbited by two
 * counter-rotating rings of brand icons. Pure CSS animation (the ring
 * spins; each icon counter-spins to stay upright) — no JS, no assets.
 */

const SIZE = 360;
const CENTER = SIZE / 2;

const OUTER = ["React", "Node.js", "Docker", "Kafka", "PostgreSQL", "Claude"];
const INNER = ["Laravel", "Redis", "MongoDB", "TypeScript"];

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
      {/* dashed orbit path */}
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
      {/* rotating group */}
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

export default function OrbitRing() {
  return (
    <div
      className="relative shrink-0"
      style={{ width: SIZE, height: SIZE }}
      aria-hidden
    >
      {/* soft glow */}
      <div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 45%, transparent), transparent 70%)",
        }}
      />

      <Ring names={OUTER} radius={150} duration={30} />
      <Ring names={INNER} radius={94} duration={22} reverse />

      {/* center monogram */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          className="absolute inset-0 rounded-full"
          style={{ animation: "pulse-ring 2.6s ease-out infinite", boxShadow: "0 0 0 2px var(--accent)" }}
        />
        <div className="relative grid h-28 w-28 place-items-center rounded-full border border-white/12 bg-surface/80 backdrop-blur">
          <span className="text-4xl font-bold tracking-tight text-gradient">AM</span>
        </div>
      </div>
    </div>
  );
}
