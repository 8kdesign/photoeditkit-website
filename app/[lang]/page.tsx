import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroShowcase } from "@/components/HeroShowcase";
import { HomeCode, InstallSnippet } from "@/components/HomeCode";
import { ProcessDiagram } from "@/components/ProcessDiagram";
import { ArrowRight, Badge, ButtonLink, Eyebrow, GitHubIcon, SectionTitle, cardClass } from "@/components/ui";
import { homeRecipeGroups, links, type RecipeKind } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, localePath } from "@/lib/i18n";
import { rich } from "@/lib/rich";
import styles from "./page.module.css";

const kindDot: Record<RecipeKind, string> = {
  correction: "var(--accent)",
  style: "var(--warm)",
  theme: "var(--theme-tag)",
};

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <main>
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className={styles.heroTitle}>{t.hero.title}</h1>
          <p className={styles.lead}>{t.hero.lead}</p>
          <div className={styles.row}>
            <ButtonLink href={links.iosRepo} size="lg" variant="secondary" external>
              <GitHubIcon />
              {t.platforms.apple}
            </ButtonLink>
            <ButtonLink href={links.androidRepo} size="lg" variant="secondary" external>
              <GitHubIcon />
              {t.platforms.android}
            </ButtonLink>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <HeroShowcase />
        </div>
      </section>

      <section className={`container ${styles.split}`}>
        <div className={styles.splitCopy}>
          <Eyebrow>{t.oneCall.eyebrow}</Eyebrow>
          <SectionTitle>{t.oneCall.title}</SectionTitle>
          <p className={styles.body}>{rich(t.oneCall.body, "inline-code")}</p>
        </div>
        <div className={styles.splitMedia}>
          <HomeCode />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.heading}>
          <Eyebrow>{t.process.eyebrow}</Eyebrow>
          <SectionTitle>{t.process.title}</SectionTitle>
        </div>
        <ProcessDiagram t={t} />
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.headingRow}>
          <div className={styles.heading}>
            <Eyebrow>{t.overview.eyebrow}</Eyebrow>
            <SectionTitle>{t.overview.title}</SectionTitle>
          </div>
          <Link href={localePath(lang, "/recipes")} className={styles.link}>
            {t.overview.seeAll}
          </Link>
        </div>
        <div className={styles.grid}>
          {(Object.keys(homeRecipeGroups) as RecipeKind[]).map((kind) => (
            <div key={kind} className={`${cardClass} ${styles.recipeCard}`}>
              <div className={styles.recipeHead}>
                <span className={styles.dot} style={{ background: kindDot[kind] }} />
                <h3 className={styles.cardTitle}>{t.kinds[kind].plural}</h3>
              </div>
              <p className={styles.cardText}>{t.kinds[kind].summary}</p>
              <div className={styles.tags}>
                {homeRecipeGroups[kind].map((name) => (
                  <Badge key={name} tone={kind}>
                    {t.recipes[name]?.name ?? name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="try" className={`container ${styles.split} ${styles.tryIt}`}>
        <div className={styles.splitCopy}>
          <Eyebrow>{t.tryIt.eyebrow}</Eyebrow>
          <SectionTitle>{t.tryIt.title}</SectionTitle>
          <p className={styles.body}>{t.tryIt.body}</p>
          <div className={styles.row}>
            <ButtonLink href={links.autoEditAppStore} size="lg" external>
              {t.tryIt.button}
              <ArrowRight />
            </ButtonLink>
          </div>
        </div>
        <div className={styles.tryMedia}>
          <Image
            src="/autoedit-suggestions.webp"
            alt={t.tryIt.imageAlt}
            width={773}
            height={913}
            sizes="(max-width: 719px) calc(100vw - 48px), 420px"
            className={styles.tryImage}
          />
        </div>
      </section>

      <section id="privacy" className={`container ${styles.section}`}>
        <div className={styles.privacy}>
          <div className={styles.privacyCopy}>
            <Eyebrow>{t.privacy.eyebrow}</Eyebrow>
            <SectionTitle>{t.privacy.title}</SectionTitle>
            <p className={styles.lead} style={{ maxWidth: "none" }}>
              {t.privacy.body}
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section} ${styles.last}`}>
        <div className={styles.heading}>
          <Eyebrow>{t.install.eyebrow}</Eyebrow>
          <SectionTitle>{t.install.title}</SectionTitle>
        </div>
        <div className={styles.grid}>
          <div className={`${cardClass} ${styles.installCard}`}>
            <div className={styles.installHead}>
              <h3 className={styles.cardTitle}>{t.platforms.apple}</h3>
              <div className={styles.badges}>
                <Badge>SPM</Badge>
                <Badge>iOS 17.6+</Badge>
                <Badge>macOS 15+</Badge>
              </div>
            </div>
            <InstallSnippet platform="ios" />
            <a href={links.iosQuickStart} className={styles.link}>
              {t.install.iosQuickStart}
            </a>
          </div>
          <div className={`${cardClass} ${styles.installCard}`}>
            <div className={styles.installHead}>
              <h3 className={styles.cardTitle}>{t.platforms.android}</h3>
              <div className={styles.badges}>
                <Badge>Maven</Badge>
                <Badge>{`${t.platforms.android} 10+`}</Badge>
                <Badge>arm64</Badge>
              </div>
            </div>
            <InstallSnippet platform="android" />
            <a href={links.androidQuickStart} className={styles.link}>
              {t.install.androidQuickStart}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
