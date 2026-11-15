import { notFound } from "next/navigation";

// Any address that isn't a real page (e.g. /zh-Hans/typo) shows the localised 404 page.
export default function CatchAll() {
  notFound();
}
