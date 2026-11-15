"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./SunMark";
import styles from "./SiteHeader.module.css";

const nav = [
  { label: "Overview", href: "/" },
  { label: "Recipes", href: "/recipes" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="PhotoEditKit home">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className={styles.nav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
