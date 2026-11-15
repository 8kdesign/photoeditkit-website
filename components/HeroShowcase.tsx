"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { examples } from "@/lib/content";
import { CompareSlider, HERO_SIZES } from "./CompareSlider";
import { warmExampleImage } from "./ExampleImage";
import { useI18n } from "./I18nProvider";

export function HeroShowcase() {
  const { t } = useI18n();
  const [selected, setSelected] = useState(0);
  const photo = examples[selected];

  // Once the page has loaded, quietly fetch the other examples (the same AVIF files the slider
  // will ask for) so switching between them is instant without slowing the first paint.
  useEffect(() => {
    const warm = () => {
      for (const p of examples) {
        for (const kind of ["original", "edited"]) warmExampleImage(`/examples/${p.slug}-${kind}.jpg`, HERO_SIZES);
      }
    };
    const idle = () => {
      if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(warm, { timeout: 3000 });
      else setTimeout(warm, 500);
    };
    if (document.readyState === "complete") idle();
    else window.addEventListener("load", idle, { once: true });
    return () => window.removeEventListener("load", idle);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
      <CompareSlider
        key={photo.slug}
        before={`/examples/${photo.slug}-original.jpg`}
        after={`/examples/${photo.slug}-edited.jpg`}
        alt={t.hero.examples[photo.slug] ?? photo.slug}
        elevated
        introGlide={selected === 0}
        priority={selected === 0}
      />
      <div role="group" aria-label={t.hero.examplesLabel} style={{ display: "flex", gap: 8, overflowX: "auto", padding: 4 }}>
        {examples.map((p, i) => {
          const active = i === selected;
          return (
            <button
              key={p.slug}
              type="button"
              aria-pressed={active}
              aria-label={t.hero.examples[p.slug] ?? p.slug}
              onClick={() => setSelected(i)}
              style={{
                flex: "0 0 auto",
                width: 80,
                padding: 0,
                border: 0,
                background: "none",
                color: "var(--ink)",
                textAlign: "left",
                cursor: "pointer",
                font: "inherit",
              }}
            >
              <span
                style={{
                  display: "block",
                  position: "relative",
                  width: 80,
                  height: 60,
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: active ? "0 0 0 2px var(--accent)" : "0 0 0 1px var(--line)",
                  transition: "box-shadow 150ms ease-out",
                }}
              >
                <Image src={`/examples/${p.slug}-edited.jpg`} alt="" fill sizes="80px" style={{ objectFit: "cover" }} />
              </span>
            </button>
          );
        })}
      </div>
      <p style={{ margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--ink-subtle)" }}>
        {t.hero.caption}
      </p>
    </div>
  );
}
