"use client";

import { useI18n } from "@/components/I18nProvider";
import { ArrowRight, ButtonLink, Eyebrow } from "@/components/ui";
import { localePath } from "@/lib/i18n";

// Shown for any address that isn't a page, in the language of the URL (/zh-Hans/… → Chinese).
export default function NotFound() {
  const { locale, t } = useI18n();
  return (
    <main
      className="container"
      style={{ paddingTop: 120, paddingBottom: 160, display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}
    >
      <title>{`${t.meta.notFoundTitle} · PhotoEditKit`}</title>
      <meta name="robots" content="noindex, follow" />
      <Eyebrow>404</Eyebrow>
      <h1 className="page-title">{t.notFound.title}</h1>
      <p style={{ margin: 0, fontSize: 18, lineHeight: "28px", color: "var(--ink-muted)", maxWidth: 560 }}>
        {t.notFound.body}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <ButtonLink href={localePath(locale, "/")} size="lg">
          {t.notFound.back}
          <ArrowRight />
        </ButtonLink>
        <ButtonLink href={localePath(locale, "/recipes")} size="lg" variant="secondary">
          {t.notFound.recipes}
        </ButtonLink>
      </div>
    </main>
  );
}
