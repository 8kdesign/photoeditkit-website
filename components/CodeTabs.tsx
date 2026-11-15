"use client";

import { useState, type ReactNode } from "react";
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
  const sample = samples[active];

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
      <div className={styles.bar} role="tablist" aria-label="Language">
        {samples.map((s, i) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            {s.label}
          </button>
        ))}
        <button type="button" className={styles.copy} onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className={styles.pre} role="tabpanel">
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
