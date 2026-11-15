import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RecipeBrowser } from "@/components/RecipeBrowser";
import { Eyebrow } from "@/components/ui";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, pageAlternates } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/recipes">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.recipesTitle,
    description: t.meta.recipesDescription,
    alternates: pageAlternates(lang, "/recipes"),
  };
}

export default async function RecipesPage({ params }: PageProps<"/[lang]/recipes">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <main
      className="container page-top"
      style={{ paddingBottom: 96, display: "flex", flexDirection: "column", gap: 40 }}
    >
      <RecipeBrowser
        intro={
          <>
            <Eyebrow>{t.recipesPage.eyebrow}</Eyebrow>
            <h1 className="page-title">{t.recipesPage.title}</h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: "28px", color: "var(--ink-muted)", maxWidth: 640 }}>
              {t.recipesPage.intro}
            </p>
          </>
        }
      />
    </main>
  );
}
