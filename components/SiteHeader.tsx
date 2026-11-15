"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, splitLocalePath } from "@/lib/i18n";
import { LanguageMenu } from "./LanguageMenu";
import { useI18n } from "./I18nProvider";
import { Wordmark } from "./SunMark";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, t } = useI18n();
  // The page path without its language prefix, so the switcher can link to the same page.
  const [, pagePath] = splitLocalePath(pathname);
  const nav = [
    { label: t.nav.overview, path: "/" },
    { label: t.nav.recipes, path: "/recipes" },
  ];
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = nav.map((item) => (
    <Link
      key={item.path}
      href={localePath(locale, item.path)}
      aria-current={pagePath === item.path ? "page" : undefined}
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={localePath(locale, "/")} className={styles.brand} aria-label={t.nav.homeLabel}>
          <Wordmark />
        </Link>
        <nav aria-label={t.nav.mainLabel} className={styles.nav}>
          {links}
        </nav>
        <div className={styles.end}>
          <LanguageMenu locale={locale} pagePath={pagePath} label={t.nav.language} />
        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label={t.nav.mainLabel}
        className={styles.mobileNav}
        data-open={open ? "true" : undefined}
        hidden={!open}
      >
        <div className={`container ${styles.mobileList}`}>{links}</div>
      </nav>
    </header>
  );
}
