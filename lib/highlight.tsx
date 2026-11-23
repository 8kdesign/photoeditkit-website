import type { ReactNode } from "react";
import styles from "@/components/CodeTabs.module.css";

const keywords = [
  "import", "let", "var", "val", "if", "else", "guard", "return", "for", "in", "suspend", "fun",
  "true", "false", "nil", "null", "as", "try", "await", "private", "func",
];

// Comments, strings, keywords and function calls, in that order of priority.
const token = new RegExp(
  [
    String.raw`(\/\/[^\n]*)`,
    String.raw`("(?:[^"\\\n]|\\.)*")`,
    String.raw`\b(${keywords.join("|")})\b`,
    String.raw`\b([A-Za-z_]\w*)(?=\()`,
  ].join("|"),
  "g",
);

/**
 * Light syntax colouring for the short Swift and Kotlin snippets on the site, using the same
 * colours as the hand-highlighted home page code. Not a parser: good enough for snippets.
 */
export function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of code.matchAll(token)) {
    const i = m.index ?? 0;
    if (i > last) out.push(code.slice(last, i));
    const className = m[1] ? styles.c : m[2] ? styles.s : m[3] ? styles.k : styles.f;
    out.push(
      <span key={i} className={className}>
        {m[0]}
      </span>,
    );
    last = i + m[0].length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}
