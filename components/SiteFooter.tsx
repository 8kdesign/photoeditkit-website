import { Wordmark } from "./SunMark";

export function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div
        className="container"
        style={{
          paddingBlock: 40,
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Wordmark size={22} />
        <p style={{ margin: 0, color: "var(--ink-muted)", fontSize: 14 }}>by LogicUI</p>
      </div>
    </footer>
  );
}
