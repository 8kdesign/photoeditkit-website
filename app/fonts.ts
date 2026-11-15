import localFont from "next/font/local";

/**
 * Geist Mono, used only in code snippets. Same file and settings as `geist/font/mono`, but not
 * preloaded: the browser fetches it when a code block first needs it instead of on every page view.
 */
export const GeistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  preload: false,
  display: "swap",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Roboto Mono", "Menlo", "Monaco", "Liberation Mono", "DejaVu Sans Mono", "Courier New", "monospace"],
  weight: "100 900",
});
