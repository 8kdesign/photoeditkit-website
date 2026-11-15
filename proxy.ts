import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

/**
 * English lives at the plain addresses (/, /recipes); other languages have a prefix (/zh-Hans/…).
 * Pages are stored under app/[lang], so plain addresses are rewritten to /en/… behind the scenes,
 * and /en/… is redirected back to the plain address so each page has one URL.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasPrefix = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasPrefix) {
    // The social preview images live under app/[lang] too; let English ones load from /en/… as generated.
    const isPreviewImage = /\/(opengraph|twitter)-image/.test(pathname);
    if (!isPreviewImage && (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`))) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next.js internals and files (anything with a dot: images, icons, manifest).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
