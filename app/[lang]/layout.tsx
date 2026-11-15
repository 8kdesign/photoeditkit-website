import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { I18nProvider } from "@/components/I18nProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales, pageAlternates } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import "../globals.css";

// Pages exist only for the languages in lib/i18n.ts; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    // Turns the relative canonical/hreflang links into full URLs on your domain (lib/site.ts).
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.title, template: "%s · PhotoEditKit" },
    description: t.meta.description,
    // hreflang links so search engines pair each page with its translations.
    alternates: pageAlternates(lang, "/"),
    openGraph: {
      title: "PhotoEditKit",
      description: t.meta.ogDescription,
      type: "website",
      locale: lang === "zh-Hans" ? "zh_CN" : "en_US",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0b0c",
  colorScheme: "dark",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <html
      lang={lang}
      data-theme="dark"
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <I18nProvider locale={lang} dictionary={t}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
