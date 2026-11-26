import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment, type ReactNode } from "react";
import { Eyebrow } from "@/components/ui";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, pageAlternates } from "@/lib/i18n";
import { JsonLd, breadcrumbs, graph } from "@/lib/structured-data";
import styles from "./page.module.css";

const path = "/privacy";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.privacyPage.title,
    description: t.privacyPage.description,
    alternates: pageAlternates(lang, path),
  };
}

/** Policy text: [text](https://…) becomes a link, **text** bold and `text` inline code. */
function inline(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">
          {link[1]}
        </a>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

type Block = { text: string } | { heading: string } | { items: { label: string; text: string }[] };

function PolicyBlock({ block, colon }: { block: Block; colon: string }) {
  if ("heading" in block) return <h3 className={styles.subTitle}>{block.heading}</h3>;
  if ("items" in block) {
    return (
      <ul className={styles.list}>
        {block.items.map((item) => (
          <li key={item.label}>
            <strong>
              {item.label}
              {colon}
            </strong>
            {inline(item.text)}
          </li>
        ))}
      </ul>
    );
  }
  return <p className={styles.text}>{inline(block.text)}</p>;
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const p = t.privacyPage;
  return (
    <main className={`container page-top ${styles.page}`}>
      <JsonLd
        data={graph(
          breadcrumbs(lang, [
            { name: t.nav.overview, path: "/" },
            { name: p.title, path },
          ]),
        )}
      />
      <header className={styles.header}>
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="page-title">{p.title}</h1>
        <p className={styles.updated}>{p.updated}</p>
        <p className={styles.lead}>{inline(p.intro)}</p>
      </header>
      {p.sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          {section.blocks.map((block, i) => (
            <PolicyBlock key={i} block={block} colon={lang === "zh-Hans" ? "：" : ": "} />
          ))}
        </section>
      ))}
    </main>
  );
}
