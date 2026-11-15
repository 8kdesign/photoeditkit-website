"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { localeCodes, localeNames, localePath, locales, localeSwitchLabels, type Locale } from "@/lib/i18n";
import styles from "./LanguageMenu.module.css";

/** Globe button that opens a list of every language; each item links to the current page in that language. */
export function LanguageMenu({ locale, pagePath, label }: { locale: Locale; pagePath: string; label: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  // Close on a click outside, or on Escape (returning focus to the button).
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close once a language is picked and the page changes.
  useEffect(() => setOpen(false), [locale, pagePath]);

  return (
    <div
      ref={rootRef}
      className={styles.root}
      onBlur={(e) => {
        // Close when keyboard focus leaves the menu.
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.button}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${localeCodes[locale]} – ${label}: ${localeNames[locale]}`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
          <circle cx="8" cy="8" r="6.25" />
          <path d="M1.75 8h12.5M8 1.75c1.7 1.8 2.5 3.9 2.5 6.25S9.7 12.45 8 14.25M8 1.75C6.3 3.55 5.5 5.65 5.5 8s.8 4.45 2.5 6.25" />
        </svg>
        <span className={styles.current}>{localeCodes[locale]}</span>
        <svg className={styles.chevron} viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 4.5l3 3 3-3" />
        </svg>
      </button>
      <ul id={listId} className={styles.list} hidden={!open}>
        {locales.map((l) => {
          const active = l === locale;
          return (
            <li key={l}>
              <Link
                href={localePath(l, pagePath)}
                hrefLang={l}
                lang={l}
                className={styles.item}
                aria-current={active ? "true" : undefined}
                title={active ? undefined : localeSwitchLabels[l]}
                onClick={() => setOpen(false)}
              >
                <span className={styles.name}>
                  {localeNames[l]}
                  <span className={styles.code}>{localeCodes[l]}</span>
                </span>
                {active ? (
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3.5 8.5l3 3 6-7" />
                  </svg>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
