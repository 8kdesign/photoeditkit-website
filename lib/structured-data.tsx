import { links } from "@/lib/content";
import { localePath, type Locale } from "@/lib/i18n";
import { site, siteUrl } from "@/lib/site";

/**
 * schema.org structured data (JSON-LD), so search engines know the site is about a free
 * developer library for iOS, macOS and Android, who makes it, and how the pages relate.
 * Check changes with https://validator.schema.org or Google's Rich Results Test.
 */

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const softwareId = `${siteUrl}/#software`;

const inLanguage = (locale: Locale) => (locale === "zh-Hans" ? "zh-Hans" : "en");

const organization = {
  "@type": "Organization",
  "@id": orgId,
  name: site.author,
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  sameAs: ["https://github.com/8kdesign"],
};

/** Who makes the site, the site itself, and the library it is about. Used on the home page. */
export function homeGraph(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: site.name,
        inLanguage: ["en", "zh-Hans"],
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: site.name,
        description,
        url: `${siteUrl}${localePath(locale, "/")}`,
        image: `${siteUrl}/icon-512.png`,
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "Photo editing SDK",
        operatingSystem: "iOS 17.6+, macOS 15+, Android 10+",
        programmingLanguage: ["Swift", "Kotlin"],
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        downloadUrl: [links.iosRepo, links.androidRepo],
        installUrl: `${siteUrl}${localePath(locale, "/getting-started")}`,
        sameAs: [links.iosRepo, links.androidRepo],
        publisher: { "@id": orgId },
        author: { "@id": orgId },
      },
    ],
  };
}

/** Breadcrumb trail Home › page, so results can show the page's place in the site. */
export function breadcrumbs(locale: Locale, items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${localePath(locale, item.path)}`,
    })),
  };
}

/** A developer guide page, tied to the library it explains. */
export function techArticle(locale: Locale, page: { path: string; headline: string; description: string }) {
  const url = `${siteUrl}${localePath(locale, page.path)}`;
  return {
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: page.headline,
    description: page.description,
    url,
    inLanguage: inLanguage(locale),
    proficiencyLevel: "Beginner",
    about: { "@id": softwareId },
    author: { "@id": orgId },
    publisher: organization,
  };
}

/** Writes structured data into the page. `<` is escaped so text can never close the script tag. */
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Several schema.org items as one graph. */
export const graph = (...items: object[]) => ({ "@context": "https://schema.org", "@graph": items });
