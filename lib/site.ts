/**
 * Canonical site address, used for canonical links, Open Graph URLs, the sitemap and robots.txt.
 * Set NEXT_PUBLIC_SITE_URL to the production domain (e.g. https://photoeditkit.dev) when deploying.
 * On Vercel the production domain is picked up automatically if the variable isn't set.
 */
const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

export const siteUrl = (fromEnv ?? "http://localhost:3000").replace(/\/+$/, "");

export const site = {
  name: "PhotoEditKit",
  author: "LogicUI",
  title: "PhotoEditKit — on-device auto photo editing for iOS, macOS & Android",
  tagline: "One call gives a photo the edit it needs, entirely on the device.",
  description:
    "PhotoEditKit is an on-device auto photo editing library for iOS, macOS and Android. It analyzes each photo and suggests ranked, calibrated edits you can show in a picker or apply instantly. Zero network requests.",
  keywords: [
    "auto photo editing",
    "photo editing SDK",
    "iOS photo editing library",
    "Android photo editing library",
    "Swift package",
    "Kotlin",
    "on-device image processing",
    "photo filters",
    "auto enhance",
  ],
};
