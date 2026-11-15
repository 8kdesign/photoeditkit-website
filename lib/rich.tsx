import { Fragment, type ReactNode } from "react";

/** Renders dictionary text, turning <code>…</code> into inline code elements. */
export function rich(text: string, codeClassName?: string): ReactNode {
  const parts = text.split(/<code>(.*?)<\/code>/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code key={i} className={codeClassName}>
        {part}
      </code>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
