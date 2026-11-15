"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { fmt } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";
import styles from "./CodeTabs.module.css";

export type CodeSample = {
  label: string;
  /** Plain text, used by the copy button. */
  text: string;
  /** Highlighted version. */
  code: ReactNode;
};

export function CodeTabs({ samples }: { samples: CodeSample[] }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();
  const sample = samples[active];
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs (standard tablist behaviour).
  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % samples.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + samples.length) % samples.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = samples.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(sample.text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.bar}>
        <div className={styles.tabs} role="tablist" aria-label={t.code.tabsLabel}>
          {samples.map((s, i) => (
            <button
              key={s.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${id}-panel`}
              tabIndex={i === active ? 0 : -1}
              className={styles.tab}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onTabKey(e, i)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button type="button" className={styles.copy} onClick={copy} aria-label={fmt(t.code.copyLabel, { lang: sample.label })}>
          {copied ? t.code.copied : t.code.copy}
        </button>
      </div>
      <pre
        className={styles.pre}
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        tabIndex={0}
      >
        <code>{sample.code}</code>
      </pre>
    </div>
  );
}

/** Tiny helpers for hand-highlighted snippets. */
export const K = ({ children }: { children: ReactNode }) => <span className={styles.k}>{children}</span>;
export const S = ({ children }: { children: ReactNode }) => <span className={styles.s}>{children}</span>;
export const C = ({ children }: { children: ReactNode }) => <span className={styles.c}>{children}</span>;
export const F = ({ children }: { children: ReactNode }) => <span className={styles.f}>{children}</span>;
