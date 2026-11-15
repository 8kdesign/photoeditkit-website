"use client";

import { useState, type ReactNode } from "react";
import { recipeKinds, recipes, type Recipe, type RecipeKind } from "@/lib/content";
import { CompareSlider } from "./CompareSlider";
import { Badge } from "./ui";
import styles from "./RecipeBrowser.module.css";

type Filter = "all" | RecipeKind;

const filters: { id: Filter; label: string; dot: string }[] = [
  { id: "all", label: "All", dot: "var(--ink-muted)" },
  { id: "correction", label: "Corrections", dot: "var(--accent)" },
  { id: "style", label: "Styles", dot: "var(--warm)" },
  { id: "theme", label: "Themes", dot: "var(--theme-tag)" },
];

/** Shown until each recipe has a real before/after pair. */
function SamplePlaceholder({ name }: { name: string }) {
  return (
    <div className={styles.sample} role="img" aria-label={`Sample placeholder: ${name} before and after`}>
      <div className={styles.half} />
      <div className={styles.half} />
      <div className={styles.split} />
      <div className={styles.knob}>
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 6l-4 4 4 4M13 6l4 4-4 4" />
        </svg>
      </div>
      <span className={`${styles.tag} ${styles.tagLeft}`}>Original</span>
      <span className={`${styles.tag} ${styles.tagRight}`}>{name}</span>
      <span className={styles.sampleNote}>Sample photo</span>
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className={styles.card}>
      {recipe.sample ? (
        <div className={styles.sampleFrame}>
          <CompareSlider
            before={`/examples/${recipe.sample}-original.jpg`}
            after={`/examples/${recipe.sample}-edited.jpg`}
            alt={`${recipe.name} sample`}
            afterLabel={recipe.name}
            aspectRatio="1 / 1"
            size="sm"
            flush
            sizes="(max-width: 600px) 100vw, 320px"
          />
        </div>
      ) : (
        <SamplePlaceholder name={recipe.name} />
      )}
      <div className={styles.body}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <p className={styles.desc}>{recipe.description}</p>
        <div className={styles.meta}>
          {recipe.note ? <span className={styles.note}>{recipe.note}</span> : null}
          <Badge tone={recipe.kind}>{recipeKinds[recipe.kind].label}</Badge>
        </div>
      </div>
    </article>
  );
}

export function RecipeBrowser({ intro }: { intro: ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = recipes.filter((r) => filter === "all" || r.kind === filter);

  return (
    <>
      <div className={styles.top}>
        <div className={styles.intro}>{intro}</div>
      <div role="group" aria-label="Filter recipes" className={styles.filters}>
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
              {f.label}
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
