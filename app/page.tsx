import Image from 'next/image';
import Link from 'next/link';
import { HeroShowcase } from '@/components/HeroShowcase';
import { HomeCode, InstallSnippet } from '@/components/HomeCode';
import { ProcessDiagram } from '@/components/ProcessDiagram';
import {
  ArrowRight,
  Badge,
  ButtonLink,
  Eyebrow,
  GitHubIcon,
  SectionTitle,
  cardClass,
} from '@/components/ui';
import {
  homeRecipeGroups,
  links,
  recipeKinds,
  type RecipeKind,
} from '@/lib/content';
import styles from './page.module.css';

const kindDot: Record<RecipeKind, string> = {
  correction: 'var(--accent)',
  style: 'var(--warm)',
  theme: 'var(--theme-tag)',
};

export default function HomePage() {
  return (
    <main>
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <Eyebrow>On-device photo editing · iOS · macOS · Android</Eyebrow>
          <h1 className={styles.heroTitle}>
            One call gives a photo the edit it needs.
          </h1>
          <p className={styles.lead}>
            PhotoEditKit reads exposure, colour cast, faces, subject and grain,
            then suggests ranked edits you can show in a picker or apply
            instantly. Entirely on the device.
          </p>
          <p className={styles.lead}>
            Free to use in any projects, open source or commercial.
          </p>
          <div className={styles.row}>
            <ButtonLink
              href={links.iosRepo}
              size="lg"
              variant="secondary"
              external
            >
              <GitHubIcon />
              iOS &amp; macOS
            </ButtonLink>
            <ButtonLink
              href={links.androidRepo}
              size="lg"
              variant="secondary"
              external
            >
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
            Pass a small upright copy and its metadata. You get back an{' '}
            <code className="inline-code">EditConfig</code> to render, or
            nothing when the photo is already good. Want a picker instead? Ask
            for up to ten ranked suggestions with thumbnails.
          </p>
        </div>
        <div className={styles.splitMedia}>
          <HomeCode />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.heading}>
          <Eyebrow>How it works</Eyebrow>
          <SectionTitle>More than a filter list.</SectionTitle>
        </div>
        <ProcessDiagram />
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.headingRow}>
          <div className={styles.heading}>
            <Eyebrow>The recipes</Eyebrow>
            <SectionTitle>
              Recipes tuned to handle various scenarios.
            </SectionTitle>
          </div>
          <Link href="/recipes" className={styles.link}>
            See every recipe →
          </Link>
        </div>
        <div className={styles.grid}>
          {(Object.keys(homeRecipeGroups) as RecipeKind[]).map((kind) => (
            <div key={kind} className={`${cardClass} ${styles.recipeCard}`}>
              <div className={styles.recipeHead}>
                <span
                  className={styles.dot}
                  style={{ background: kindDot[kind] }}
                />
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
            AutoEdit runs the PhotoEditKit on iPhone. Pick a photo from your
            gallery and swipe through the looks it suggests, before exporting
            the one you like.
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
            <p className={styles.lead} style={{ maxWidth: 'none' }}>
              No remote models to download, no tracking. Safe for app extensions
              and strict offline requirements. What it learns from a user’s
              saves stays on their device.
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
