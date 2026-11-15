/**
 * The Sun Dial mark. Rays grow clockwise from 270° (left) to 180° (bottom);
 * the last quarter is short and grey. Gold = --warm, grey = --line-strong,
 * so it follows the theme.
 */
export const CX = 12;
export const CY = 12;
const K = 1.15;
export const CORE = 3.6 * K;
const INNER = 5.6 * K;

export const rays = Array.from({ length: 12 }, (_, i) => {
  const a = ((195 + 30 * i) * Math.PI) / 180;
  const lit = i < 9;
  const len = (lit ? 0.9 + (2.7 * i) / 8 : 1.0) * K;
  const r = (n: number) => Math.round(n * 100) / 100;
  return {
    lit,
    x1: r(CX + INNER * Math.cos(a)),
    y1: r(CY + INNER * Math.sin(a)),
    x2: r(CX + (INNER + len) * Math.cos(a)),
    y2: r(CY + (INNER + len) * Math.sin(a)),
  };
});

export function SunMark({ size = 26, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={{ flex: "none" }}
    >
      {rays.map((ray, i) => (
        <line
          key={i}
          x1={ray.x1}
          y1={ray.y1}
          x2={ray.x2}
          y2={ray.y2}
          stroke={ray.lit ? "var(--warm)" : "var(--line-strong)"}
          strokeWidth={1.85}
          strokeLinecap="round"
        />
      ))}
      <circle cx={CX} cy={CY} r={CORE} fill="var(--warm)" />
    </svg>
  );
}

export function Wordmark({ size = 26 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <SunMark size={size} />
      <span style={{ fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)" }}>
        PhotoEdit<span style={{ color: "var(--ink-muted)" }}>Kit</span>
      </span>
    </span>
  );
}
