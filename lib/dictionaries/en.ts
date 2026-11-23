/**
 * English text for the whole site. Every other language must provide the same keys
 * (TypeScript checks this). Text in <code>…</code> is rendered as inline code, and
 * {name}-style placeholders are filled in by the page.
 */
export const en = {
  meta: {
    title: "PhotoEditKit — one call gives a photo the edit it needs",
    description:
      "On-device photo editing for iOS, macOS and Android. PhotoEditKit analyzes each photo and suggests ranked edits you can show in a picker or apply instantly. Zero network requests.",
    ogDescription: "One call gives a photo the edit it needs, entirely on the device.",
    recipesTitle: "Recipes",
    recipesDescription:
      "Every PhotoEditKit suggestion comes from a fixed set of corrections, styles and themes, calibrated to each photo.",
    notFoundTitle: "Page not found",
  },

  nav: {
    overview: "Overview",
    gettingStarted: "Get started",
    recipes: "Recipes",
    homeLabel: "PhotoEditKit home",
    mainLabel: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  footer: {
    by: "by LogicUI",
  },

  slider: {
    original: "Original",
    beforeAlt: "{alt}, original",
    afterAlt: "{alt}, {label}",
    compare: "Compare original and {label}",
  },

  code: {
    tabsLabel: "Language",
    copy: "Copy",
    copied: "Copied",
    copyLabel: "Copy {lang} code",
    swiftMeasureComment: "// Off the main thread: this measures the photo.",
    swiftKeepComment: "// The photo is already good. Keep it as it is.",
    installLabel: "Install snippet",
  },

  hero: {
    eyebrow: "On-device photo editing · iOS · macOS · Android",
    title: "One call gives a photo the edit it needs.",
    lead: "PhotoEditKit reads exposure, colour cast, faces, subject and grain, then suggests ranked edits you can show in a picker or apply instantly. Entirely on the device.",
    afterLabel: "AI edit",
    examplesLabel: "Example photos",
    caption: "Real PhotoEditKit outputs, unretouched. Drag across the photo to compare.",
    examples: {
      valley: "Valley",
      "night-street": "Night street",
      "red-panda": "Red panda",
      macaws: "Macaws",
      tablet: "Tablet",
    } as Record<string, string>,
  },

  oneCall: {
    eyebrow: "One call",
    title: "The edit a photo needs, or none at all.",
    body: "Pass a small upright copy and its metadata. You get back an <code>EditConfig</code> to render, or nothing when the photo is already good. Want a picker instead? Ask for up to ten ranked suggestions with thumbnails.",
  },

  process: {
    eyebrow: "How it works",
    title: "More than a filter list.",
    steps: [
      { title: "Analyse the photo", text: "Reads exposure, colour cast, faces, subject and grain from a small copy." },
      { title: "Tune every recipe", text: "Builds a config for each recipe from that analysis, unique to this photo." },
      { title: "Score each one", text: "Rates how much each tuned recipe would improve this photo." },
      { title: "Drop the weak ones", text: "Recipes that score too low are filtered out. A balanced photo may keep none." },
      { title: "Suggest the edits", text: "Returns the survivors ranked, ready to show in a picker or apply." },
    ],
    readings: [
      { label: "Exposure", value: "−0.6 EV" },
      { label: "Colour cast", value: "Cool" },
      { label: "Faces", value: "1" },
      { label: "Scene", value: "Sky" },
    ],
  },

  overview: {
    eyebrow: "The recipes",
    title: "Fixed recipes, tuned to every photo.",
    seeAll: "See every recipe →",
  },

  kinds: {
    correction: {
      label: "Correction",
      plural: "Corrections",
      summary:
        "Fix something about the photo: exposure, colour cast or noise. When a photo needs fixing, these come first.",
    },
    style: {
      label: "Style",
      plural: "Styles",
      summary:
        "A matter of taste, calibrated to each photo. Vivid on a landscape leans into greens; on a night street, into neon.",
    },
    theme: {
      label: "Theme",
      plural: "Themes",
      summary: "Restyle a photo as something else. Offered only when you ask, after corrections and styles.",
    },
  },

  tryIt: {
    eyebrow: "Try it",
    title: "See it on your own photos.",
    body: "AutoEdit runs the PhotoEditKit algorithm on iPhone. Pick a photo and swipe through the looks it suggests, ranked for that photo.",
    button: "Try AutoEdit on iOS",
    imageAlt:
      "AutoEdit on iPhone, showing a lake photo with the Punch look applied and a row of suggested looks below",
  },

  privacy: {
    eyebrow: "Private by design",
    title: "Zero network requests.",
    body: "No remote models to download, no tracking. Safe for app extensions and strict offline requirements. What it learns from a user’s saves stays on their device.",
  },

  install: {
    eyebrow: "Install",
    title: "Two platforms, one set of recipes.",
    iosQuickStart: "iOS quick start →",
    androidQuickStart: "Android quick start →",
  },

  /** Platform names on buttons, card titles and badges. */
  platforms: {
    apple: "iOS & macOS",
    android: "Android",
  },

  gettingStarted: {
    metaTitle: "Get started: auto photo editing for iOS & Android",
    metaDescription:
      "Install PhotoEditKit with Swift Package Manager or Gradle, then let on-device AI edit a photo in a few lines of Swift or Kotlin. Free, including in commercial apps.",
    breadcrumb: "Getting started",
    eyebrow: "Getting started",
    title: "Add auto photo editing to your app.",
    intro:
      "Install the library, pass in a photo, and get back the edit it needs. Everything runs on the device: no account, no API key, no network request.",
    jumpLabel: "Choose a platform",
    requirementsLabel: "Requirements",
    guideLink: "Full {platform} guide on GitHub",
    stepLabel: "Step {n}",
    ios: {
      requirements: ["iOS 17.6+", "macOS 15+", "Swift Package Manager"],
      installTitle: "Install with Swift Package Manager",
      installBody:
        "In Xcode, choose <code>File → Add Package Dependencies…</code>, enter <code>https://github.com/8kdesign/PhotoEditKit</code> and add the PhotoEditKit library to your app target. Or declare it in your own <code>Package.swift</code>:",
      editTitle: "Let the AI edit a photo",
      editBody:
        "Give the AI a small upright copy (512 px is plenty) and the photo's ImageIO properties. You get back an <code>EditConfig</code> to render on the full-size photo, or <code>nil</code> when the photo is already good. Run it off the main thread.",
      metadataNote:
        "Pass the properties from the original file. The EXIF exposure lets the AI tell a night street from an underexposed shot, so dark-on-purpose photos aren't brightened.",
      pickerTitle: "Show a picker of suggestions",
      pickerBody:
        "Want people to choose? Ask for up to ten ranked suggestions, each with a title, an <code>EditConfig</code> and a ready-made thumbnail. Pass the full-size photo so grain can be measured.",
      macNote: "On macOS the API is the same: use <code>NSImage</code> wherever the examples use <code>UIImage</code>.",
      guideTitle: "Read the full guide",
      guideBody:
        "The README covers the rest: building an editor with <code>EditController</code>, HDR export, Live Photos, video editing and every setting.",
    },
    android: {
      requirements: ["Android 10+", "arm64-v8a", "compileSdk 36", "Kotlin 2.2+"],
      repoTitle: "Add the Maven repository",
      repoBody: "PhotoEditKit is published in a Maven repository hosted on GitHub. Add it in <code>settings.gradle.kts</code>:",
      dependencyTitle: "Add the dependency",
      dependencyBody:
        "Then add the library to your app module's <code>build.gradle.kts</code>. The AI engine is built for 64-bit ARM only, so limit your app to <code>arm64-v8a</code>:",
      editTitle: "Let the AI edit a photo",
      editBody:
        "Decode the photo upright with <code>ImageDecoder</code> and pass its <code>ExifInterface</code>. <code>suggestions</code> is a suspend function that runs in the background. Render the best one with <code>renderedEdit</code>, off the main thread.",
      pickerTitle: "Show a picker of suggestions",
      pickerBody:
        "Each suggestion has a title in the device's language, an <code>EditConfig</code> and a 240 px thumbnail, ready for a picker. A well-balanced photo can return none.",
      guideTitle: "Read the full guide",
      guideBody:
        "The README covers the rest: previews with <code>EditPreviewView</code>, Ultra HDR, Motion Photos, video editing and every setting.",
    },
  },

  recipesPage: {
    eyebrow: "The recipes",
    title: "Every suggestion comes from one of these.",
    intro:
      "The algorithm picks only the recipes a photo needs, calibrates each one to it, and ranks the most useful first. Corrections come before styles; themes appear only when you ask for them.",
    filtersLabel: "Filter recipes",
    all: "All",
    onRequest: "On request",
    sampleAlt: "{name} sample",
    placeholderLabel: "Sample placeholder: {name} before and after",
    placeholderNote: "Sample photo",
  },

  notFound: {
    title: "This page doesn’t exist.",
    body: "The link may be old or mistyped. Here’s where you can go instead.",
    back: "Back to the overview",
    recipes: "See every recipe",
  },

  /** Recipe names and descriptions, keyed by the recipe's English name in lib/content.ts. */
  recipes: {
    "True Color": { name: "True Color", description: "Corrects mixed lighting while keeping skies blue, foliage green and skin natural." },
    Brighten: { name: "Brighten", description: "Lifts a photo that came out too dark, the subject’s own colours a little further than the rest." },
    Deepen: { name: "Deepen", description: "Richer blacks and more contrast for a photo that looks grey or washed out, without lightening it." },
    "Recover Highlights": { name: "Recover Highlights", description: "Brings back detail in bright areas such as a sky." },
    "Lift Shadows": { name: "Lift Shadows", description: "Opens up dark areas without brightening the rest, even a subject against a bright window." },
    "Warm Up": { name: "Warm Up", description: "Takes a blue or cold colour cast back to neutral. Never adds a cast." },
    "Cool Down": { name: "Cool Down", description: "Takes an orange or yellow colour cast back to neutral. Never adds a cast." },
    "Clean Up": { name: "Clean Up", description: "Reduces grain and noise, and leaves tone and colour alone." },
    Crisp: { name: "Crisp", description: "Sharper detail with a little more contrast." },
    Punch: { name: "Punch", description: "Stronger contrast with a moderate colour boost. Keeps the photo’s warmth." },
    Pop: { name: "Pop", description: "Brighter and punchier at once, for a light-coloured subject in a dim room." },
    Vivid: { name: "Vivid", description: "Richer colour led by what the photo is about. Skin and strong colours stay nearly as they were." },
    Muted: { name: "Muted", description: "Quieter colour overall, while the main subject keeps its own. Takes out more colour the more colourful the photo is." },
    Soft: { name: "Soft", description: "A gentle finish: low contrast and open shadows. Leaves colour alone." },
    Spotlight: { name: "Spotlight", description: "Darkens the edges to draw the eye to the middle. Leaves colour alone." },
    Manga: { name: "Manga", description: "A hand-painted anime look with open shadows and clean greens. Daylight city, nature and sky only." },
    "B&W": { name: "B&W", description: "Black and white, with contrast, highlights and shadows set for the photo." },
    Film: { name: "Film", description: "A colour-negative print: muted colour, olive greens, teal blues and rolled-off highlights." },
    Matte: { name: "Matte", description: "A faded print: softened blacks, gentler colour and a light vignette. Fades more on a contrasty photo, less on a flat one." },
  } as Record<string, { name: string; description: string }>,
};

export type Dictionary = typeof en;
