import { getImageProps } from "next/image";
import type { CSSProperties } from "react";
import { preload as preloadResource } from "react-dom";
import { blurData } from "@/lib/blur-data";

// Must match WIDTHS in scripts/optimize-images.mjs.
const WIDTHS = [160, 640, 1200];

/** The AVIF srcset for an example photo; the original JPEG is the fallback for browsers without AVIF. */
function avifSrcSet(src: string) {
  return WIDTHS.map((w) => `${src.replace(/^\/examples\/(.+)\.jpg$/, `/examples/opt/$1-${w}.avif`)} ${w}w`).join(", ");
}

/** Download a photo in the format and size the browser would pick, without showing it. */
export function warmExampleImage(src: string, sizes: string) {
  const picture = document.createElement("picture");
  const source = document.createElement("source");
  source.type = "image/avif";
  source.srcset = avifSrcSet(src);
  source.sizes = sizes;
  const img = document.createElement("img");
  img.decoding = "async";
  picture.append(source, img);
  img.src = src;
}

type Props = {
  /** A photo in public/examples, e.g. "/examples/valley-original.jpg". */
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  style?: CSSProperties;
  /** Load first: preload it and fetch at high priority (use for the photo above the fold). */
  preload?: boolean;
  draggable?: boolean;
};

/**
 * An example photo that fills its positioned parent, served from the static AVIF copies made by
 * `npm run images` with a blurred placeholder while it loads. No server-side resizing needed.
 */
export function ExampleImage({ src, alt, sizes, className, style, preload = false, draggable }: Props) {
  const blur = blurData[src];
  const srcSet = avifSrcSet(src);
  const { props } = getImageProps({
    src,
    alt,
    fill: true,
    sizes,
    unoptimized: true,
    loading: preload ? "eager" : "lazy",
    fetchPriority: preload ? "high" : undefined,
    ...(blur ? { placeholder: "blur" as const, blurDataURL: blur } : null),
  });
  if (preload) {
    preloadResource(src.replace(/^\/examples\/(.+)\.jpg$/, "/examples/opt/$1-1200.avif"), {
      as: "image",
      type: "image/avif",
      imageSrcSet: srcSet,
      imageSizes: sizes,
      fetchPriority: "high",
    });
  }
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img {...props} className={className} style={{ ...props.style, ...style }} draggable={draggable} />
    </picture>
  );
}
