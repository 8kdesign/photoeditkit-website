import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HeroShowcase } from "@/components/HeroShowcase";
import { HomeCode, InstallSnippet } from "@/components/HomeCode";
import { ArrowRight, Badge, ButtonLink, Eyebrow, GitHubIcon, SectionTitle, cardClass } from "@/components/ui";
import { homeRecipeGroups, links, recipeKinds, type RecipeKind } from "@/lib/content";
import { site, siteUrl } from "@/lib/site";
import styles from "./page.module.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${siteUrl}/#org` },
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#org`,
      name: site.author,
      logo: `${siteUrl}/icon-512.png`,
    },
    {
      "@type": "SoftwareSourceCode",
      name: "PhotoEditKit for iOS & macOS",
      description: site.description,
      codeRepository: links.iosRepo,
      programmingLanguage: "Swift",
      runtimePlatform: ["iOS 17.6+", "macOS 15+"],
      author: { "@id": `${siteUrl}/#org` },
      isAccessibleForFree: true,
    },
    {
      "@type": "SoftwareSourceCode",
      name: "PhotoEditKit for Android",
      description: site.description,
      codeRepository: links.androidRepo,
      programmingLanguage: "Kotlin",
      runtimePlatform: "Android 10+",
      author: { "@id": `${siteUrl}/#org` },
      isAccessibleForFree: true,
    },
  ],
};

const icon = (paths: ReactNode) => (
  <span className={styles.icon}>
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths}
    </svg>
  </span>
);

const features: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: icon(<path d="M10 2.5v3M10 14.5v3M2.5 10h3M14.5 10h3M5 5l2 2M13 13l2 2M15 5l-2 2M7 13l-2 2" />),
    title: "Adaptive suggestions",
    text: "Up to ten ranked looks per photo, each calibrated to it, with localized titles and thumbnails. A balanced photo gets no edit.",
  },
  {
    icon: icon(<><circle cx="10" cy="10" r="7" /><path d="M7.5 12.2c1.4 1.3 3.6 1.3 5 0" /><path d="M7.5 8h.01M12.5 8h.01" /></>),
    title: "Skin tones stay natural",
    text: "Every recipe guards facial hue and saturation, so people look like themselves even under strong colour moves.",
  },
  {
    icon: icon(<><path d="M3 15l4-4 3 3 7-7" /><path d="M13 7h4v4" /></>),
    title: "Learns on the device",
    text: "Looks a user keeps picking move up the list, within strict bounds. Learning stays on the phone and resets with one call.",
  },
  {
    icon: icon(<><rect x="3" y="4" width="14" height="12" rx="2" /><path d="M7 8v4M7 8h2a1 1 0 0 1 0 2H7M9 10l1.2 2M12.5 8l1 4 1-4" /></>),
    title: "RAW-aware",
    text: "Matches the camera’s own rendering of a RAW capture, then builds every other look on top of it.",
  },
  {
    icon: icon(<><circle cx="10" cy="10" r="3.5" /><path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2" /></>),
    title: "HDR and Live Photos kept",
    text: "Exports keep the iPhone’s HDR gain map and Android’s Ultra HDR. Live Photos and Motion Photos stay paired.",
  },
  {
    icon: icon(<><rect x="3" y="5" width="10" height="10" rx="2" /><path d="M13 9l4-2.5v7L13 11" /></>),
    title: "Video, scene by scene",
    text: "Pick a look on the first frame; it is worked out again for each new scene so the whole clip matches.",
  },
];

const kindDot: Record<RecipeKind, string> = {
  correction: "var(--accent)",
  style: "var(--warm)",
  theme: "var(--theme-tag)",
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <Eyebrow>On-device photo editing · iOS · macOS · Android</Eyebrow>
          <h1 className={styles.heroTitle}>One call gives a photo the edit it needs.</h1>
          <p className={styles.lead}>
            PhotoEditKit reads exposure, colour cast, faces, subject and grain, then suggests ranked edits you can
            show in a picker or apply instantly. Entirely on the device.
          </p>
          <div className={styles.row}>
            <ButtonLink href={links.iosRepo} size="lg" variant="secondary" external>
              <GitHubIcon />
              iOS &amp; macOS
            </ButtonLink>
            <ButtonLink href={links.androidRepo} size="lg" variant="secondary" external>
              <GitHubIcon />
              Android
            </ButtonLink>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <HeroShowcase />
        </div>
      </section>

      <section className={`container ${styles.split}`}>
        <div className={styles.splitCopy}>
          <Eyebrow>One call</Eyebrow>
          <SectionTitle>The edit a photo needs, or none at all.</SectionTitle>
          <p className={styles.body}>
            Pass a small upright copy and its metadata. You get back an <code className="inline-code">EditConfig</code>{" "}
            to render, or nothing when the photo is already good. Want a picker instead? Ask for up to ten ranked
            suggestions with thumbnails.
          </p>
          <p className={styles.note}>
            About 0.3 s for the first photo on an iPhone 17 with <code>prewarm()</code> at launch.
          </p>
        </div>
        <div className={styles.splitMedia}>
          <HomeCode />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.heading}>
          <Eyebrow>What it handles</Eyebrow>
          <SectionTitle>More than a filter list.</SectionTitle>
        </div>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={`${cardClass} ${styles.featureCard}`}>
              {f.icon}
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.headingRow}>
          <div className={styles.heading}>
            <Eyebrow>The recipes</Eyebrow>
            <SectionTitle>Fixed recipes, tuned to every photo.</SectionTitle>
          </div>
          <Link href="/recipes" className={styles.link}>
            See every recipe →
          </Link>
        </div>
        <div className={styles.grid}>
          {(Object.keys(homeRecipeGroups) as RecipeKind[]).map((kind) => (
            <div key={kind} className={`${cardClass} ${styles.recipeCard}`}>
              <div className={styles.recipeHead}>
                <span className={styles.dot} style={{ background: kindDot[kind] }} />
                <h3 className={styles.cardTitle}>{recipeKinds[kind].plural}</h3>
              </div>
              <p className={styles.cardText}>{recipeKinds[kind].summary}</p>
              <div className={styles.tags}>
                {homeRecipeGroups[kind].map((name) => (
                  <Badge key={name} tone={kind}>
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="try" className={`container ${styles.split} ${styles.tryIt}`}>
        <div className={styles.splitCopy}>
          <Eyebrow>Try it</Eyebrow>
          <SectionTitle>See it on your own photos.</SectionTitle>
          <p className={styles.body}>
            AutoEdit runs the PhotoEditKit algorithm on iPhone. Pick a photo and swipe through the looks it suggests,
            ranked for that photo.
          </p>
          <div className={styles.row}>
            <ButtonLink href={links.autoEditAppStore} size="lg" external>
              Try AutoEdit on iOS
              <ArrowRight />
            </ButtonLink>
          </div>
        </div>
        <div className={styles.tryMedia}>
          <Image
            src="/autoedit-suggestions.webp"
            alt="AutoEdit on iPhone, showing a lake photo with the Punch look applied and a row of suggested looks below"
            width={773}
            height={913}
            sizes="(max-width: 768px) 80vw, 420px"
            className={styles.tryImage}
          />
        </div>
      </section>

      <section id="privacy" className={`container ${styles.section}`}>
        <div className={styles.privacy}>
          <div className={styles.privacyCopy}>
            <Eyebrow>Private by design</Eyebrow>
            <SectionTitle>Zero network requests.</SectionTitle>
            <p className={styles.lead} style={{ maxWidth: "none" }}>
              No remote models to download, no tracking. Safe for app extensions and strict offline requirements.
              What it learns from a user’s saves stays on their device.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section} ${styles.last}`}>
        <div className={styles.heading}>
          <Eyebrow>Install</Eyebrow>
          <SectionTitle>Two platforms, one set of recipes.</SectionTitle>
        </div>
        <div className={styles.grid}>
          <div className={`${cardClass} ${styles.installCard}`}>
            <div className={styles.installHead}>
              <h3 className={styles.cardTitle}>iOS &amp; macOS</h3>
              <div className={styles.badges}>
                <Badge>SPM</Badge>
                <Badge>iOS 17.6+</Badge>
                <Badge>macOS 15+</Badge>
              </div>
            </div>
            <InstallSnippet platform="ios" />
            <a href={links.iosQuickStart} className={styles.link}>
              iOS quick start →
            </a>
          </div>
          <div className={`${cardClass} ${styles.installCard}`}>
            <div className={styles.installHead}>
              <h3 className={styles.cardTitle}>Android</h3>
              <div className={styles.badges}>
                <Badge>Maven</Badge>
                <Badge>Android 10+</Badge>
                <Badge>arm64</Badge>
              </div>
            </div>
            <InstallSnippet platform="android" />
            <a href={links.androidQuickStart} className={styles.link}>
              Android quick start →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
