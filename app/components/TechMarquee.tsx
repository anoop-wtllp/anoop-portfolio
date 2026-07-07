import { STACK, TechIcon } from "./TechIcon";

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee-track gap-3 ${reverse ? "rev" : ""}`}>
      {loop.map((name, i) => (
        <span
          key={`${name}-${i}`}
          className="group flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
        >
          <TechIcon
            name={name}
            className="text-lg transition-transform duration-300 group-hover:scale-125"
          />
          <span className="font-mono text-sm text-muted transition-colors group-hover:text-foreground">
            {name}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  const half = Math.ceil(STACK.length / 2);
  const top = STACK.slice(0, half);
  const bottom = STACK.slice(half);

  return (
    <div className="relative flex flex-col gap-3 overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-background to-transparent" />
      <Row items={top} />
      <Row items={bottom} reverse />
    </div>
  );
}
