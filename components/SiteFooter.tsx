"use client";

import Link from "next/link";
import { localePath } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";
import { Wordmark } from "./SunMark";

export function SiteFooter() {
  const { locale, t } = useI18n();
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div
        className="container"
        style={{
          paddingBlock: 40,
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Wordmark size={22} />
        <Link href={localePath(locale, "/privacy")} style={{ color: "var(--ink-muted)", fontSize: 14 }}>
          {t.footer.privacy}
        </Link>
      </div>
    </footer>
  );
}
