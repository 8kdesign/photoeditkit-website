"use client";

import Image, { getImageProps } from "next/image";
import { useEffect, useState } from "react";
import { examples } from "@/lib/content";
import { CompareSlider } from "./CompareSlider";

/** The slider is full width on phones and tablets, and about 600px wide beside the text on desktop. */
const heroSizes = "(max-width: 1043px) calc(100vw - 48px), 600px";

export function HeroShowcase() {
  const [selected, setSelected] = useState(0);
  const photo = examples[selected];

  // Once the page has loaded, quietly fetch the other examples (optimised, at the size this
  // screen needs) so switching between them is instant without slowing the first paint.
  useEffect(() => {
    const warm = () => {
      for (const p of examples) {
        for (const kind of ["original", "edited"]) {
          const { props } = getImageProps({
            src: `/examples/${p.slug}-${kind}.jpg`,
            alt: "",
            fill: true,
            sizes: heroSizes,
          });
          const img = new window.Image();
          if (props.sizes) img.sizes = props.sizes;
          if (props.srcSet) img.srcset = props.srcSet;
          img.src = props.src;
        }
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
        alt={photo.name}
        elevated
        introGlide={selected === 0}
        priority={selected === 0}
        sizes={heroSizes}
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
        Real PhotoEditKit outputs, unretouched. Drag across the photo to compare.
      </p>
    </div>
  );
}
