import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { CodeTabs } from "@/components/CodeTabs";
import { ArrowRight, Badge, ButtonLink, Eyebrow, GitHubIcon, SectionTitle } from "@/components/ui";
import { links, versions } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { highlight } from "@/lib/highlight";
import { fmt, hasLocale, pageAlternates } from "@/lib/i18n";
import { rich } from "@/lib/rich";
import { JsonLd, breadcrumbs, graph, techArticle } from "@/lib/structured-data";
import styles from "./page.module.css";

const path = "/getting-started";

// Code is the same in every language; the snippets follow the repos' READMEs.
const code = {
  spm: `.package(url: "https://github.com/8kdesign/PhotoEditKit", from: "${versions.ios}")`,
  swiftEdit: `import ImageIO
import PhotoEditKit

guard let source = CGImageSourceCreateWithURL(photoURL as CFURL, nil) else { return }
let properties = CGImageSourceCopyPropertiesAtIndex(source, 0, nil) as? [String: Any]

// A small upright copy is all the AI needs, and much faster than full size.
let options = [
    kCGImageSourceCreateThumbnailFromImageAlways: true,
    kCGImageSourceCreateThumbnailWithTransform: true,
    kCGImageSourceThumbnailMaxPixelSize: 512,
] as CFDictionary
guard let small = CGImageSourceCreateThumbnailAtIndex(source, 0, options) else { return }

// Off the main thread: this measures the photo.
if let config = AIPostProcessingHelper.topSuggestion(for: small, metadata: properties),
   let original = CIImage(contentsOf: photoURL, options: [.applyOrientationProperty: true]) {
    let edited: CIImage = original.applyingEditConfig(config)
} else {
    // The photo is already good. Keep it as it is.
}`,
  swiftPicker: `// Off the main thread, with the full-size photo.
let suggestions = AIPostProcessingHelper.suggestions(for: uiImage, metadata: properties)
for suggestion in suggestions {
    suggestion.title      // e.g. "Brighten"
    suggestion.config     // EditConfig to apply
    suggestion.thumbnail  // small rendered preview, ready for a picker
}`,
  gradleRepo: `dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        maven("https://raw.githubusercontent.com/8kdesign/PhotoEditKit-Android/main/maven") {
            content { includeGroup("com.logicui") }
        }
    }
}`,
  gradleDependency: `android {
    defaultConfig {
        ndk { abiFilters += "arm64-v8a" }
    }
}

dependencies {
    implementation("com.logicui:photoeditkit:${versions.android}")
}`,
  kotlinEdit: `import android.graphics.ImageDecoder
import androidx.exifinterface.media.ExifInterface
import com.logicui.photoeditkit.PhotoEditKit

suspend fun autoEdit(context: Context, uri: Uri): Bitmap {
    val resolver = context.contentResolver
    // ImageDecoder applies the EXIF orientation, so the bitmap is upright.
    val photo = ImageDecoder.decodeBitmap(ImageDecoder.createSource(resolver, uri))
    val exif = resolver.openInputStream(uri)?.use { ExifInterface(it) }

    val result = PhotoEditKit.suggestions(context, photo, exif)  // runs in the background
    val best = result.suggestions.firstOrNull() ?: return photo
    return withContext(Dispatchers.Default) { PhotoEditKit.renderedEdit(photo, best.config) }
}`,
  kotlinPicker: `val result: SuggestionResult = PhotoEditKit.suggestions(context, photo, exif)
for (suggestion in result.suggestions) {
    suggestion.title      // "Brighten", in the device's language
    suggestion.config     // EditConfig to apply
    suggestion.thumbnail  // 240 px rendered preview, ready for a picker
}`,
};

function Snippet({ label, text }: { label: string; text: string }) {
  return <CodeTabs samples={[{ label, text, code: highlight(text) }]} />;
}

function Step({ n, label, title, children }: { n: number; label: string; title: string; children: ReactNode }) {
  return (
    <li className={styles.step}>
      <span className={styles.stepNumber} aria-hidden="true">
        {n}
      </span>
      <div className={styles.stepBody}>
        <p className={styles.stepLabel}>{fmt(label, { n })}</p>
        <h3 className={styles.stepTitle}>{title}</h3>
        {children}
      </div>
    </li>
  );
}

export async function generateMetadata({ params }: PageProps<"/[lang]/getting-started">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).gettingStarted;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: pageAlternates(lang, path),
    // Replaces the layout's openGraph as a whole, so repeat type and locale.
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      type: "article",
      locale: lang === "zh-Hans" ? "zh_CN" : "en_US",
    },
  };
}

export default async function GettingStartedPage({ params }: PageProps<"/[lang]/getting-started">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.gettingStarted;
  const body = (text: string) => <p className={styles.text}>{rich(text, "inline-code")}</p>;

  return (
    <main className={`container page-top ${styles.page}`}>
      <JsonLd
        data={graph(
          techArticle(lang, { path, headline: t.metaTitle, description: t.metaDescription }),
          breadcrumbs(lang, [
            { name: dict.nav.overview, path: "/" },
            { name: t.breadcrumb, path },
          ]),
        )}
      />

      <header className={styles.intro}>
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className="page-title">{t.title}</h1>
        <p className={styles.lead}>{t.intro}</p>
        <nav aria-label={t.jumpLabel} className={styles.jump}>
          <a href="#ios" className={styles.jumpLink}>
            {dict.platforms.apple}
            <ArrowRight />
          </a>
          <a href="#android" className={styles.jumpLink}>
            {dict.platforms.android}
            <ArrowRight />
          </a>
        </nav>
      </header>

      <section id="ios" className={styles.platform} aria-labelledby="ios-title">
        <div className={styles.platformHead}>
          <SectionTitle>
            <span id="ios-title">{dict.platforms.apple}</span>
          </SectionTitle>
          <div className={styles.badges} aria-label={t.requirementsLabel}>
            {t.ios.requirements.map((r) => (
              <Badge key={r}>{r}</Badge>
            ))}
          </div>
        </div>
        <ol className={styles.steps}>
          <Step n={1} label={t.stepLabel} title={t.ios.installTitle}>
            {body(t.ios.installBody)}
            <Snippet label="Package.swift" text={code.spm} />
          </Step>
          <Step n={2} label={t.stepLabel} title={t.ios.editTitle}>
            {body(t.ios.editBody)}
            <Snippet label="Swift" text={code.swiftEdit} />
            <p className={styles.note}>{t.ios.metadataNote}</p>
          </Step>
          <Step n={3} label={t.stepLabel} title={t.ios.pickerTitle}>
            {body(t.ios.pickerBody)}
            <Snippet label="Swift" text={code.swiftPicker} />
            <p className={styles.note}>{rich(t.ios.macNote, "inline-code")}</p>
          </Step>
          <Step n={4} label={t.stepLabel} title={t.ios.guideTitle}>
            {body(t.ios.guideBody)}
            <div>
              <ButtonLink href={links.iosReadme} variant="secondary" external>
                <GitHubIcon />
                {fmt(t.guideLink, { platform: dict.platforms.apple })}
              </ButtonLink>
            </div>
          </Step>
        </ol>
      </section>

      <section id="android" className={styles.platform} aria-labelledby="android-title">
        <div className={styles.platformHead}>
          <SectionTitle>
            <span id="android-title">{dict.platforms.android}</span>
          </SectionTitle>
          <div className={styles.badges} aria-label={t.requirementsLabel}>
            {t.android.requirements.map((r) => (
              <Badge key={r}>{r}</Badge>
            ))}
          </div>
        </div>
        <ol className={styles.steps}>
          <Step n={1} label={t.stepLabel} title={t.android.repoTitle}>
            {body(t.android.repoBody)}
            <Snippet label="settings.gradle.kts" text={code.gradleRepo} />
          </Step>
          <Step n={2} label={t.stepLabel} title={t.android.dependencyTitle}>
            {body(t.android.dependencyBody)}
            <Snippet label="build.gradle.kts" text={code.gradleDependency} />
          </Step>
          <Step n={3} label={t.stepLabel} title={t.android.editTitle}>
            {body(t.android.editBody)}
            <Snippet label="Kotlin" text={code.kotlinEdit} />
          </Step>
          <Step n={4} label={t.stepLabel} title={t.android.pickerTitle}>
            {body(t.android.pickerBody)}
            <Snippet label="Kotlin" text={code.kotlinPicker} />
          </Step>
          <Step n={5} label={t.stepLabel} title={t.android.guideTitle}>
            {body(t.android.guideBody)}
            <div>
              <ButtonLink href={links.androidReadme} variant="secondary" external>
                <GitHubIcon />
                {fmt(t.guideLink, { platform: dict.platforms.android })}
              </ButtonLink>
            </div>
          </Step>
        </ol>
      </section>

    </main>
  );
}
