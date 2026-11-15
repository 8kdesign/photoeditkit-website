import type { MetadataRoute } from "next";
import { localePath, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const pages = [
  { path: "/", priority: 1 },
  { path: "/recipes", priority: 0.8 },
];

/** Every page in every language, each listing its translations so search engines pair them. */
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localePath(l, path)}`])),
      },
    })),
  );
}
