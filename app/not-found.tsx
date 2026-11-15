import type { Metadata } from "next";
import { ArrowRight, ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      className="container"
      style={{ paddingTop: 120, paddingBottom: 160, display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}
    >
      <Eyebrow>404</Eyebrow>
      <h1 style={{ margin: 0, fontSize: "clamp(40px, 4.4vw, 56px)", lineHeight: 1.07, fontWeight: 600, letterSpacing: "-0.03em" }}>
        This page doesn’t exist.
      </h1>
      <p style={{ margin: 0, fontSize: 18, lineHeight: "28px", color: "var(--ink-muted)", maxWidth: 560 }}>
        The link may be old or mistyped. Here’s where you can go instead.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <ButtonLink href="/" size="lg">
          Back to the overview
          <ArrowRight />
        </ButtonLink>
        <ButtonLink href="/recipes" size="lg" variant="secondary">
          See every recipe
        </ButtonLink>
      </div>
    </main>
  );
}
