/**
 * Animated, self-contained SVG of an event-driven microservice topology.
 * Data "packets" flow along the edges (SMIL animateMotion) while the
 * connectors pulse (CSS dash flow) — a live, video-like engineering visual.
 */

type NodeProps = {
  x: number;
  y: number;
  label: string;
  sub?: string;
  color: string;
  w?: number;
  h?: number;
};

function Node({ x, y, label, sub, color, w = 128, h = 56 }: NodeProps) {
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={13}
        fill="rgba(255,255,255,0.025)"
        stroke={color}
        strokeOpacity={0.55}
      />
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={13}
        fill="none"
        stroke={color}
        strokeOpacity={0.25}
        style={{ filter: `drop-shadow(0 0 8px ${color})` }}
      />
      <text
        x={x}
        y={sub ? y - 3 : y + 4}
        textAnchor="middle"
        fontSize="13"
        fontWeight={600}
        fill="var(--foreground)"
        fontFamily="var(--font-sans), sans-serif"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x}
          y={y + 13}
          textAnchor="middle"
          fontSize="9.5"
          fill="var(--muted)"
          fontFamily="var(--font-mono), monospace"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

type Edge = { id: string; d: string; color: string; dur: number; begin: number };

const EDGES: Edge[] = [
  { id: "e1", d: "M154,210 L206,210", color: "var(--accent-2)", dur: 1.6, begin: 0 },
  { id: "e2", d: "M334,210 C384,210 360,90 406,90", color: "var(--accent)", dur: 2.4, begin: 0.2 },
  { id: "e3", d: "M334,210 L406,210", color: "var(--accent)", dur: 2, begin: 0.6 },
  { id: "e4", d: "M334,210 C384,210 360,330 406,330", color: "var(--accent)", dur: 2.4, begin: 0.4 },
  { id: "e5", d: "M534,90 C584,90 574,150 620,150", color: "var(--accent-3)", dur: 2.2, begin: 0.3 },
  { id: "e6", d: "M534,210 L620,210", color: "var(--accent-3)", dur: 1.8, begin: 0.7 },
  { id: "e7", d: "M534,330 C584,330 574,270 620,270", color: "var(--accent-3)", dur: 2.2, begin: 0.5 },
  { id: "e8", d: "M700,150 C742,150 728,110 772,110", color: "var(--accent-4)", dur: 2, begin: 0.2 },
  { id: "e9", d: "M700,210 L772,210", color: "var(--accent-4)", dur: 1.8, begin: 0.6 },
  { id: "e10", d: "M470,358 C540,412 700,412 772,344", color: "var(--accent)", dur: 2.8, begin: 0.9 },
];

export default function ArchitectureDiagram() {
  return (
    <div className="glass overflow-x-auto rounded-[var(--radius)] p-4 sm:p-6">
      <svg
        viewBox="0 0 920 420"
        className="mx-auto block min-w-[760px] max-w-full"
        role="img"
        aria-label="Event-driven microservice architecture diagram"
      >
        <defs>
          <linearGradient id="arch-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>

        {/* edges */}
        {EDGES.map((e) => (
          <path
            key={e.id}
            id={e.id}
            d={e.d}
            fill="none"
            stroke="url(#arch-flow)"
            strokeWidth={2}
            strokeOpacity={0.4}
            strokeLinecap="round"
            className="arch-flowline"
          />
        ))}

        {/* traveling data packets */}
        {EDGES.map((e) => (
          <circle key={`dot-${e.id}`} r={3.4} fill={e.color}>
            <animateMotion dur={`${e.dur}s`} begin={`${e.begin}s`} repeatCount="indefinite" rotate="auto">
              <mpath href={`#${e.id}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.85;1"
              dur={`${e.dur}s`}
              begin={`${e.begin}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Kafka event bus (tall) */}
        <g>
          <rect
            x={620}
            y={70}
            width={80}
            height={280}
            rx={16}
            fill="rgba(94,234,212,0.05)"
            stroke="var(--accent-4)"
            strokeOpacity={0.5}
          />
          <text x={660} y={205} textAnchor="middle" fontSize="14" fontWeight={700} fill="var(--foreground)" fontFamily="var(--font-sans), sans-serif">
            Kafka
          </text>
          <text x={660} y={222} textAnchor="middle" fontSize="9.5" fill="var(--muted)" fontFamily="var(--font-mono), monospace">
            event bus
          </text>
        </g>

        {/* nodes */}
        <Node x={90} y={210} label="Client" sub="web · mobile" color="var(--accent-2)" w={110} />
        <Node x={270} y={210} label="API Gateway" sub="routing · auth" color="var(--accent)" />
        <Node x={470} y={90} label="Auth" sub="JWT · RBAC" color="var(--accent-3)" w={116} />
        <Node x={470} y={210} label="Core API" sub="business logic" color="var(--accent-3)" w={116} />
        <Node x={470} y={330} label="AI Worker" sub="LLM · RAG" color="var(--accent-3)" w={116} />
        <Node x={830} y={110} label="Redis" sub="cache · pub/sub" color="var(--accent-4)" w={120} />
        <Node x={830} y={210} label="Database" sub="SQL · NoSQL" color="var(--accent-4)" w={120} />
        <Node x={830} y={330} label="LLM / RAG" sub="vector store" color="var(--accent)" w={120} />
      </svg>
    </div>
  );
}
