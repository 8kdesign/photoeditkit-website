/**
 * Canonical site address, used for canonical links, Open Graph URLs, the sitemap and robots.txt.
 * Defaults to the production domain; set NEXT_PUBLIC_SITE_URL to override it (e.g. for a staging deploy).
 */
const productionUrl = "https://www.photoeditkit.org";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl).replace(/\/+$/, "");

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
