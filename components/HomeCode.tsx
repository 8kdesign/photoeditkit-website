"use client";

import { CodeTabs, K, S, C, F } from "./CodeTabs";
import { useI18n } from "./I18nProvider";

const swiftText = (measure: string, keep: string) => `${measure}
if let config = AIPostProcessingHelper.topSuggestion(for: small, metadata: properties) {
    let edited = original.applyingEditConfig(config)
} else {
    ${keep}
}`;

const kotlinText = `val result = PhotoEditKit.suggestions(context, bitmap, exif)
result.suggestions.firstOrNull()?.let { best ->
    val edited = PhotoEditKit.renderedEdit(bitmap, best.config)
}`;

export function HomeCode() {
  const { t } = useI18n();
  return (
    <CodeTabs
      samples={[
        {
          label: "Swift",
          text: swiftText(t.code.swiftMeasureComment, t.code.swiftKeepComment),
          code: (
            <>
              <C>{t.code.swiftMeasureComment}</C>
              {"\n"}
              <K>if let</K> config = AIPostProcessingHelper.<F>topSuggestion</F>(for: small, metadata: properties) {"{"}
              {"\n    "}
              <K>let</K> edited = original.<F>applyingEditConfig</F>(config)
              {"\n} "}
              <K>else</K> {"{"}
              {"\n    "}
              <C>{t.code.swiftKeepComment}</C>
              {"\n}"}
            </>
          ),
        },
        {
          label: "Kotlin",
          text: kotlinText,
          code: (
            <>
              <K>val</K> result = PhotoEditKit.<F>suggestions</F>(context, bitmap, exif)
              {"\n"}result.suggestions.<F>firstOrNull</F>()?.<F>let</F> {"{"} best <K>{"->"}</K>
              {"\n    "}
              <K>val</K> edited = PhotoEditKit.<F>renderedEdit</F>(bitmap, best.config)
              {"\n}"}
            </>
          ),
        },
      ]}
    />
  );
}

export function InstallSnippet({ platform }: { platform: "ios" | "android" }) {
  const { t } = useI18n();
  const style = {
    margin: 0,
    padding: "16px 20px",
    background: "var(--code-bg)",
    borderRadius: "var(--radius-md)",
    fontSize: 13,
    lineHeight: "22px",
    color: "var(--code-ink)",
    overflowX: "auto" as const,
  };
  return platform === "ios" ? (
    <pre style={style} tabIndex={0} aria-label={t.code.installLabel}>
      <code>
        .package(url: <S>{'"https://github.com/8kdesign/PhotoEditKit"'}</S>, from: <S>{'"1.0.0"'}</S>)
      </code>
    </pre>
  ) : (
    <pre style={style} tabIndex={0} aria-label={t.code.installLabel}>
      <code>
        implementation(<S>{'"com.logicui:photoeditkit:1.0.1"'}</S>)
      </code>
    </pre>
  );
}
