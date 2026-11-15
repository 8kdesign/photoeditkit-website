# PhotoEditKit website

Marketing site for [PhotoEditKit](https://github.com/8kdesign/PhotoEditKit) (iOS & macOS) and
[PhotoEditKit-Android](https://github.com/8kdesign/PhotoEditKit-Android). Next.js App Router, TypeScript,
CSS Modules, no UI framework.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` — hero with before/after slider, one-call code, features, recipe groups, privacy, install |
| `/recipes` | `app/recipes/page.tsx` — all 21 recipes, filterable, each with a sample placeholder |

## Where things live

- `app/globals.css` — design tokens (colours for the Darkroom and Daylight themes, spacing, radii). Dark is the default via `data-theme="dark"` on `<html>`.
- `lib/content.ts` — links, example photos and the recipe list. Edit copy here.
- `components/` — `SiteHeader`, `SiteFooter`, `SunMark` (the logo, drawn in code so it follows the theme), `CompareSlider`, `HeroShowcase`, `CodeTabs`, `RecipeBrowser`, and small primitives in `ui.tsx`.
- `public/examples/` — real before/after pairs from the repos' `Images/` folders (1600px long edge).
- `public/logo/` — logo SVGs. `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png` are picked up automatically.

## Adding real recipe samples

Recipe cards show a striped placeholder (`SamplePlaceholder` in `components/RecipeBrowser.tsx`).
When you have before/after pairs, add a `sample` slug to each recipe in `lib/content.ts`, put the images in
`public/recipes/`, and render `<CompareSlider size="sm" aspectRatio="4 / 3" … />` instead of the placeholder.
