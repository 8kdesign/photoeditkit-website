import type { Metadata } from "next";
import { RecipeBrowser } from "@/components/RecipeBrowser";
import { Eyebrow } from "@/components/ui";

const description =
  "Every PhotoEditKit suggestion comes from a fixed set of 19 recipes — corrections, styles and themes — calibrated to each photo. Compare each one before and after.";

export const metadata: Metadata = {
  title: "Recipes — every correction, style and theme",
  description,
  alternates: { canonical: "/recipes" },
  openGraph: {
    type: "website",
    siteName: "PhotoEditKit",
    url: "/recipes",
    title: "PhotoEditKit recipes — every correction, style and theme",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoEditKit recipes",
    description,
  },
};

export default function RecipesPage() {
  return (
    <main
      className="container"
      style={{ paddingTop: 80, paddingBottom: 96, display: "flex", flexDirection: "column", gap: 40 }}
    >
      <RecipeBrowser
        intro={
          <>
            <Eyebrow>The recipes</Eyebrow>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(40px, 4.4vw, 56px)",
                lineHeight: 1.07,
                fontWeight: 600,
                letterSpacing: "-0.03em",
              }}
            >
              Every suggestion comes from one of these.
            </h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: "28px", color: "var(--ink-muted)", maxWidth: 640 }}>
              The algorithm picks only the recipes a photo needs, calibrates each one to it, and ranks the most useful first.
              Corrections come before styles; themes appear only when you ask for them.
            </p>
          </>
        }
      />
    </main>
  );
}
