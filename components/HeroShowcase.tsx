"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { examples } from "@/lib/content";
import { CompareSlider, HERO_SIZES } from "./CompareSlider";
import { ExampleImage, warmExampleImage } from "./ExampleImage";

const pair = (slug: string) => [`/examples/${slug}-original.jpg`, `/examples/${slug}-edited.jpg`];

/** Whether the visitor asked to save data or is on a slow connection. */
function constrainedNetwork() {
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  return !!c && (c.saveData === true || /(^|-)2g$|^3g$/.test(c.effectiveType ?? ""));
}

export function HeroShowcase() {
  const [selected, setSelected] = useState(0);
  const photo = examples[selected];
  const warmed = useRef(new Set<string>());

  // Fetch the same file the slider will pick (AVIF at the right width, or the JPEG on older
  // browsers), so a switch is instant without downloading every photo up front.
  const warm = useCallback((slug: string) => {
    if (warmed.current.has(slug)) return;
    warmed.current.add(slug);
    for (const src of pair(slug)) warmExampleImage(src, HERO_SIZES);
  }, []);

  // Once the page has loaded and the browser is idle, warm the remaining examples,
  // unless the visitor is saving data. Otherwise they load on hover, focus or touch.
  useEffect(() => {
    warmed.current.add(examples[0].slug);
    if (constrainedNetwork()) return;
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    let handle: number | undefined;
    const start = () => {
      handle = idle(() => examples.slice(1).forEach((p) => warm(p.slug))) as number;
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      if (handle !== undefined) cancelIdle(handle);
    };
  }, [warm]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
      <CompareSlider
        key={photo.slug}
        before={`/examples/${photo.slug}-original.jpg`}
        after={`/examples/${photo.slug}-edited.jpg`}
        alt={photo.name}
        elevated
        introGlide={selected === 0}
        priority={selected === 0}
      />
      <div role="group" aria-label="Example photos" style={{ display: "flex", gap: 8, overflowX: "auto", padding: 4 }}>
        {examples.map((p, i) => {
          const active = i === selected;
          return (
            <button
              key={p.slug}
              type="button"
              aria-pressed={active}
              aria-label={p.name}
              onClick={() => setSelected(i)}
              onPointerEnter={() => warm(p.slug)}
              onPointerDown={() => warm(p.slug)}
              onFocus={() => warm(p.slug)}
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
                <ExampleImage src={`/examples/${p.slug}-edited.jpg`} alt="" sizes="80px" style={{ objectFit: "cover" }} />
              </span>
            </button>
          );
        })}
      </div>
      <p style={{ margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--ink-subtle)" }}>
        Real PhotoEditKit outputs, unretouched. Drag across the photo to compare.
      </p>
    </div>
  );
}
