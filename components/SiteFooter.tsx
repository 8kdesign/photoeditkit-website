"use client";

import { useI18n } from "./I18nProvider";
import { Wordmark } from "./SunMark";

export function SiteFooter() {
  const { t } = useI18n();
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
        <p style={{ margin: 0, color: "var(--ink-muted)", fontSize: 14 }}>{t.footer.by}</p>
      </div>
    </footer>
  );
}
