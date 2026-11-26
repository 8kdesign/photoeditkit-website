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

  privacyPage: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    description: "PhotoEditKit processes and edits photos strictly on-device. LogicUI doesn't collect, store, sell or share personal information through this website or the PhotoEditKit libraries.",
    updated: "Last updated: November 27, 2026",
    intro: "PhotoEditKit is engineered to process and edit photos strictly on-device without sending data to external servers. This privacy policy covers this website and the PhotoEditKit libraries for iOS, macOS, and Android, created by **LogicUI**.",
    sections: [
      {
        title: "Summary",
        blocks: [
          { text: "LogicUI does not collect, store, sell, or share personal information through this website or the PhotoEditKit libraries. Your photos, videos, and associated metadata are never uploaded to our servers. This policy outlines the few technical instances where minimal data remains stored locally on your device or is managed by essential infrastructure providers." },
        ],
      },
      {
        title: "1. This Website",
        blocks: [
          { text: "This website is built with a zero-tracking architecture:" },
          {
            items: [
              { label: "No Tracking or Cookies", text: "We do not use user accounts, forms, analytics, advertising networks, tracking scripts, cookies, or browser storage (e.g., `localStorage`)." },
              { label: "Self-Hosted Assets", text: "All fonts and images are served directly from this site's own domain. No requests are made to third-party CDNs." },
              { label: "No Persistent State", text: "Selecting a language (e.g., `/zh-Hans`) changes only the URL and is not saved across sessions." },
              { label: "Server Logs", text: "Like most web services, our web host processes temporary standard HTTP request logs (e.g., IP address, browser user-agent, requested URL, timestamp) solely to deliver the site and maintain network security. These logs are not used to track, profile, or identify visitors, nor are they cross-referenced with external data." },
            ],
          },
        ],
      },
      {
        title: "2. The PhotoEditKit Libraries (SDK)",
        blocks: [
          { text: "PhotoEditKit libraries operate entirely offline and perform zero network activity." },
          {
            items: [
              { label: "No External Communication", text: "The libraries do not make network calls, download remote assets or models at runtime, or contain code for telemetry, crash reporting, tracking, or advertising." },
              { label: "On-Device Processing", text: "Photos, videos, and metadata (e.g., exposure, ISO) are analyzed and rendered strictly on the device." },
              { label: "App Permissions", text: "The SDK does not request system permissions directly. Host applications integrating PhotoEditKit manage their own permission prompts (e.g., Photos library or Camera access)." },
            ],
          },
          { heading: "Local Preferences & Machine Learning Records" },
          { text: "To provide personalized editing suggestions, PhotoEditKit learns locally from the edits a user saves:" },
          {
            items: [
              { label: "Numeric Fingerprints", text: "Each saved edit creates a minimal local record containing a numeric fingerprint of the photo (descriptors of its light and color, **never the photo itself**), a timestamp, the presets offered, the preset selected, and how far each slider was moved." },
              { label: "User Style Parameters", text: "On iOS and macOS, the conversational editor stores one number per setting, representing how strong the user prefers its adjustments." },
              { label: "Retention & Storage", text: "Records are stored exclusively inside the host app's private storage on the device. Only recent saves are kept and older records are dropped on a rolling basis. Records are protected by the device's app sandboxing and encryption, and are permanently erased when the app is uninstalled." },
            ],
          },
          { heading: "On-Device AI Models" },
          { text: "On Apple devices with Apple Intelligence, the conversational editor uses Apple's on-device language model through the Foundation Models framework. All prompt processing occurs locally on the device." },
        ],
      },
      {
        title: "3. Applications Built with PhotoEditKit",
        blocks: [
          { text: "Developers integrating PhotoEditKit control their own application architecture and data collection practices." },
          {
            items: [
              { label: "Developer Responsibility", text: "End users should review the individual privacy policies of third-party applications using PhotoEditKit." },
              { label: "Zero Telemetry to LogicUI", text: "LogicUI receives no telemetry, crash logs, device identifiers, or media files from third-party applications using our SDK. Developers can accurately report \"Data Not Collected\" for PhotoEditKit in the App Store's App Privacy Details." },
              { label: "AutoEdit", text: "Our first-party iOS app built on PhotoEditKit maintains [its own separate Privacy Policy](https://www.logicui.com/autoedit/privacy)." },
            ],
          },
        ],
      },
      {
        title: "4. Third-Party Services & Dependencies",
        blocks: [
          { text: "When accessing external resources linked from this site:" },
          {
            items: [
              { label: "GitHub", text: "Source code repositories, documentation, and issue tracking are hosted on GitHub. Downloads via Swift Package Manager, Gradle, or direct clone are governed by [GitHub's Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)." },
              { label: "App Store", text: "Links to Apple's App Store lead to a platform governed by Apple's own privacy terms." },
            ],
          },
        ],
      },
      {
        title: "5. Data Retention, Security, and Rights",
        blocks: [
          {
            items: [
              { label: "Data Subject Rights (GDPR / CCPA / CPRA)", text: "Because LogicUI does not collect, store, or process personal data, we do not hold personal data files to access, modify, transfer, or erase. The only personal data involved is the web host's temporary request logs described above." },
              { label: "Local Data Control", text: "Users can clear local PhotoEditKit learning records by using the host app's in-app reset settings (if provided) or by deleting the app." },
            ],
          },
        ],
      },
      {
        title: "6. Children's Privacy",
        blocks: [
          { text: "This website and the PhotoEditKit developer tools are intended for developers and a general audience. We do not knowingly collect personal information from children. Third-party applications integrating the SDK are governed by their respective developers' policies regarding compliance with COPPA and global child privacy laws." },
        ],
      },
      {
        title: "7. Changes to This Policy",
        blocks: [
          { text: "We may periodically update this policy to reflect changes in our libraries or website. Any updates will be published to this page with a revised \"Last updated\" date." },
        ],
      },
      {
        title: "8. Contact Us",
        blocks: [
          { text: "If you have questions regarding this privacy policy or PhotoEditKit's privacy architecture, please contact us:" },
          { items: [{ label: "Public Queries / Technical Discussions", text: "Open an issue on our [GitHub repository](https://github.com/8kdesign/PhotoEditKit/issues)." }] },
        ],
      },
    ],
  },

  footer: {
    privacy: "Privacy policy",
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
    eyebrow: "Auto photo editing · iOS · macOS · Android",
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

  video: {
    eyebrow: "Video",
    title: "Videos too, scene by scene.",
    body: "Pick a look on the opening frame and PhotoEditKit carries it through the whole video. It re-tunes the look wherever the scene changes, and blends gradually between those points so the grade never jumps.",
    timelineLabel: "A video with three scenes: the look is re-tuned at each keyframe and blends across the frames in between.",
    keyframe: "Keyframe",
    steps: [
      { title: "Find the keyframes", text: "Reads the video once in the background and marks a keyframe at each scene change." },
      { title: "Re-tune at each one", text: "Analyses every keyframe and rebuilds the chosen look for that scene's light, keeping your slider changes." },
      { title: "Blend in between", text: "Frames between two keyframes move gradually from one look to the next, so nothing jumps on a cut." },
    ],
    note: "Sharpening, noise reduction and grain are left out on video, so frames don't shimmer.",
  },

  overview: {
    eyebrow: "The recipes",
    title: "Fixed recipes, tuned to every photo.",
    body: "A good edit starts from the scene as it was. PhotoEditKit gets colour and light right before it tries to make a photo more pleasing to look at.",
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
    Digicam: { name: "Digicam", description: "An early-2000s point-and-shoot: bright, with highlights clipped hard to white, greyish blacks, a cool blue cast, thin colour, low-resolution softness and colour noise." },
  } as Record<string, { name: string; description: string }>,
};

export type Dictionary = typeof en;
