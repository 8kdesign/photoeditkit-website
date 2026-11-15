"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { fmt } from "@/lib/i18n";
import { ExampleImage } from "./ExampleImage";
import { useI18n } from "./I18nProvider";
import styles from "./CompareSlider.module.css";

type Props = {
  before: string;
  after: string;
  alt: string;
  /** Right-hand label, e.g. a recipe name. Defaults to the dictionary's "AI edit". */
  afterLabel?: string;
  aspectRatio?: string;
  size?: "md" | "sm";
  elevated?: boolean;
  /** Glide the handle from 80% to 50% once on first view, to show it can be dragged. */
  introGlide?: boolean;
  priority?: boolean;
  sizes?: string;
  /** Square corners, for a slider set flush into the top of a card. */
  flush?: boolean;
};

/** Rendered width of the large slider; shared with HeroShowcase so its prefetches match what the slider requests. */
export const HERO_SIZES = "(max-width: 768px) 100vw, 600px";

const clamp = (n: number) => Math.min(100, Math.max(0, n));

export function CompareSlider({
  before,
  after,
  alt,
  afterLabel: afterLabelProp,
  aspectRatio = "5 / 4",
  size = "md",
  elevated = false,
  introGlide = false,
  priority = false,
  sizes = HERO_SIZES,
  flush = false,
}: Props) {
  const { t } = useI18n();
  const afterLabel = afterLabelProp ?? t.hero.afterLabel;
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(introGlide ? 80 : 50);
  const [gliding, setGliding] = useState(false);

  useEffect(() => {
    if (!introGlide) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPos(50);
      return;
    }
    const start = window.setTimeout(() => {
      setGliding(true);
      setPos(50);
    }, 400);
    const stop = window.setTimeout(() => setGliding(false), 1100);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(stop);
    };
  }, [introGlide]);

  const moveTo = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    setGliding(false);
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 5;
    if (e.key === "ArrowLeft") setPos((p) => clamp(p - step));
    else if (e.key === "ArrowRight") setPos((p) => clamp(p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={frameRef}
      className={`${styles.frame} ${gliding ? styles.glide : ""}`}
      data-size={size}
      data-elevated={elevated}
      style={{ aspectRatio, ...(flush ? { borderRadius: 0 } : null) }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <ExampleImage src={before} alt={fmt(t.slider.beforeAlt, { alt })} sizes={sizes} className={styles.img} preload={priority} draggable={false} />
      <div className={styles.after} style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <ExampleImage src={after} alt={fmt(t.slider.afterAlt, { alt, label: afterLabel })} sizes={sizes} className={styles.img} preload={priority} draggable={false} />
      </div>
      <span className={`${styles.tag} ${styles.before}`}>{t.slider.original}</span>
      <span className={`${styles.tag} ${styles.afterTag}`}>{afterLabel}</span>
      <div className={styles.divider} style={{ left: `${pos}%` }} />
      <button
        type="button"
        role="slider"
        className={styles.handle}
        style={{ left: `${pos}%` }}
        aria-label={fmt(t.slider.compare, { label: afterLabel })}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 6l-4 4 4 4M13 6l4 4-4 4" />
        </svg>
      </button>
    </div>
  );
}
