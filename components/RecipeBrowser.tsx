"use client";

import { useState, type ReactNode } from "react";
import { recipes, type Recipe, type RecipeKind } from "@/lib/content";
import { fmt } from "@/lib/i18n";
import { CompareSlider } from "./CompareSlider";
import { useI18n } from "./I18nProvider";
import { Badge } from "./ui";
import styles from "./RecipeBrowser.module.css";

type Filter = "all" | RecipeKind;

const filters: { id: Filter; dot: string }[] = [
  { id: "all", dot: "var(--ink-muted)" },
  { id: "correction", dot: "var(--accent)" },
  { id: "style", dot: "var(--warm)" },
  { id: "theme", dot: "var(--theme-tag)" },
];

/** Shown until each recipe has a real before/after pair. */
function SamplePlaceholder({ name }: { name: string }) {
  const { t } = useI18n();
  return (
    <div className={styles.sample} role="img" aria-label={fmt(t.recipesPage.placeholderLabel, { name })}>
      <div className={styles.half} />
      <div className={styles.half} />
      <div className={styles.split} />
      <div className={styles.knob}>
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 6l-4 4 4 4M13 6l4 4-4 4" />
        </svg>
      </div>
      <span className={`${styles.tag} ${styles.tagLeft}`}>{t.slider.original}</span>
      <span className={`${styles.tag} ${styles.tagRight}`}>{name}</span>
      <span className={styles.sampleNote}>{t.recipesPage.placeholderNote}</span>
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { t } = useI18n();
  const text = t.recipes[recipe.name] ?? { name: recipe.name, description: "" };
  return (
    <article className={styles.card}>
      {recipe.sample ? (
        <div className={styles.sampleFrame}>
          <CompareSlider
            before={`/examples/${recipe.sample}-original.jpg`}
            after={`/examples/${recipe.sample}-edited.jpg`}
            alt={fmt(t.recipesPage.sampleAlt, { name: text.name })}
            afterLabel={text.name}
            aspectRatio="1 / 1"
            size="sm"
            flush
            sizes="(max-width: 600px) 100vw, 320px"
          />
        </div>
      ) : (
        <SamplePlaceholder name={text.name} />
      )}
      <div className={styles.body}>
        <h2 className={styles.name}>{text.name}</h2>
        <p className={styles.desc}>{text.description}</p>
        <div className={styles.meta}>
          {recipe.kind === "theme" ? <span className={styles.note}>{t.recipesPage.onRequest}</span> : null}
          <Badge tone={recipe.kind}>{t.kinds[recipe.kind].label}</Badge>
        </div>
      </div>
    </article>
  );
}

export function RecipeBrowser({ intro }: { intro: ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");
  const { t } = useI18n();
  const shown = recipes.filter((r) => filter === "all" || r.kind === filter);

  return (
    <>
      <div className={styles.top}>
        <div className={styles.intro}>{intro}</div>
      <div role="group" aria-label={t.recipesPage.filtersLabel} className={styles.filters}>
        {filters.map((f) => {
          const count = f.id === "all" ? recipes.length : recipes.filter((r) => r.kind === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              className={styles.filter}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              <span className={styles.dot} style={{ background: f.dot }} />
              {f.id === "all" ? t.recipesPage.all : t.kinds[f.id].plural}
              <span className={styles.count}>{count}</span>
            </button>
          );
        })}
      </div>
      </div>
      <div className={styles.grid} aria-live="polite">
        {shown.map((r) => (
          <RecipeCard key={r.name} recipe={r} />
        ))}
      </div>
    </>
  );
}
