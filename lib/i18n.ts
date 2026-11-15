/** Languages the site is published in. English is the default and has no URL prefix. */
export const locales = ["en", "zh-Hans"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Name of each language, written in that language (for the language switcher). */
export const localeNames: Record<Locale, string> = {
  en: "English",
  "zh-Hans": "简体中文",
};

/** Short code shown on the language button. */
export const localeCodes: Record<Locale, string> = {
  en: "EN",
  "zh-Hans": "ZH",
};

/** Accessible label for the switcher link into each language, also written in that language. */
export const localeSwitchLabels: Record<Locale, string> = {
  en: "Read this page in English",
  "zh-Hans": "以简体中文阅读本页",
};

/** Link to `path` (e.g. "/recipes") in a given language: "/recipes" or "/zh-Hans/recipes". */
export function localePath(locale: Locale, path: string = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Splits a browser path into its language and the page path: "/zh-Hans/recipes" → ["zh-Hans", "/recipes"]. */
export function splitLocalePath(pathname: string): [Locale, string] {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return [locale, "/"];
    if (pathname.startsWith(`/${locale}/`)) return [locale, pathname.slice(locale.length + 1)];
  }
  return [defaultLocale, pathname || "/"];
}

/** Fills {placeholders} in a dictionary string. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`));
}

/** Metadata `alternates` for a page: its canonical URL plus hreflang links to every translation. */
export function pageAlternates(locale: Locale, path: string) {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, localePath(l, path)]));
  languages["x-default"] = localePath(defaultLocale, path);
  return { canonical: localePath(locale, path), languages };
}
