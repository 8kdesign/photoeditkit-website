export const links = {
  iosRepo: "https://github.com/8kdesign/PhotoEditKit",
  androidRepo: "https://github.com/8kdesign/PhotoEditKit-Android",
  iosQuickStart:
    "https://github.com/8kdesign/PhotoEditKit#quick-start-let-the-ai-edit-a-photo",
  androidQuickStart:
    "https://github.com/8kdesign/PhotoEditKit-Android#quick-start-let-the-ai-edit-a-photo",
  recipesApi: "https://github.com/8kdesign/PhotoEditKit#the-recipes",
  autoEditAppStore: "https://apps.apple.com/sg/app/autoedit-smart-photo-editor/id6818664461",
};

export type ExamplePhoto = {
  slug: string;
  name: string;
  width: number;
  height: number;
};

/** Real PhotoEditKit outputs, from the repos' Images/ folders. */
export const examples: ExamplePhoto[] = [
  { slug: "valley", name: "Valley", width: 1200, height: 1600 },
  { slug: "night-street", name: "Night street", width: 1600, height: 1200 },
  { slug: "red-panda", name: "Red panda", width: 1200, height: 1600 },
  { slug: "macaws", name: "Macaws", width: 1600, height: 1200 },
  { slug: "tablet", name: "Tablet", width: 1200, height: 1600 },
];

export type RecipeKind = "correction" | "style" | "theme";

export type Recipe = {
  name: string;
  kind: RecipeKind;
  note?: string;
  description: string;
  /** Slug of a before/after pair in public/examples. Recipes without one show a placeholder. */
  sample?: string;
};

export const recipeKinds: Record<
  RecipeKind,
  { label: string; plural: string; summary: string }
> = {
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
    summary:
      "Restyle a photo as something else. Offered only when you ask, after corrections and styles.",
  },
};

export const recipes: Recipe[] = [
  { name: "True Color", kind: "correction", sample: "red-panda", description: "Corrects mixed lighting while keeping skies blue, foliage green and skin natural." },
  { name: "Brighten", kind: "correction", sample: "night-street", description: "Lifts a photo that came out too dark, the subject’s own colours a little further than the rest." },
  { name: "Deepen", kind: "correction", sample: "sign", description: "Richer blacks and more contrast for a photo that looks grey or washed out, without lightening it." },
  { name: "Recover Highlights", kind: "correction", sample: "forest", description: "Brings back detail in bright areas such as a sky." },
  { name: "Lift Shadows", kind: "correction", sample: "macaws", description: "Opens up dark areas without brightening the rest, even a subject against a bright window." },
  { name: "Warm Up", kind: "correction", sample: "tree", description: "Takes a blue or cold colour cast back to neutral. Never adds a cast." },
  { name: "Cool Down", kind: "correction", sample: "giant-panda", description: "Takes an orange or yellow colour cast back to neutral. Never adds a cast." },
  { name: "Clean Up", kind: "correction", sample: "stage", description: "Reduces grain and noise, and leaves tone and colour alone." },
  { name: "Crisp", kind: "style", sample: "cat", description: "Sharper detail with a little more contrast." },
  { name: "Punch", kind: "style", sample: "burger", description: "Stronger contrast with a moderate colour boost. Keeps the photo’s warmth." },
  { name: "Pop", kind: "style", sample: "juice", description: "Brighter and punchier at once, for a light-coloured subject in a dim room." },
  { name: "Vivid", kind: "style", sample: "valley", description: "Richer colour led by what the photo is about. Skin and strong colours stay nearly as they were." },
  { name: "Muted", kind: "style", sample: "bakery", description: "Quieter colour overall, while the main subject keeps its own. Takes out more colour the more colourful the photo is." },
  { name: "Soft", kind: "style", sample: "window", description: "A gentle finish: low contrast and open shadows. Leaves colour alone." },
  { name: "Spotlight", kind: "style", sample: "smoothie", description: "Darkens the edges to draw the eye to the middle. Leaves colour alone." },
  { name: "Manga", kind: "theme", sample: "hotel", note: "On request", description: "A hand-painted anime look with open shadows and clean greens. Daylight city, nature and sky only." },
  { name: "B&W", kind: "theme", sample: "bronze", note: "On request", description: "Black and white, with contrast, highlights and shadows set for the photo." },
  { name: "Film", kind: "theme", sample: "villa", note: "On request", description: "A colour-negative print: muted colour, olive greens, teal blues and rolled-off highlights." },
  { name: "Matte", kind: "theme", sample: "skyline", note: "On request", description: "A faded print: softened blacks, gentler colour and a light vignette. Fades more on a contrasty photo, less on a flat one." },
];

/** Recipe names shown on the home page; Original is RAW-only and left off the overview. */
export const homeRecipeGroups: Record<RecipeKind, string[]> = {
  correction: ["Brighten", "Deepen", "Lift Shadows", "Recover Highlights", "Warm Up", "Cool Down", "True Color", "Clean Up"],
  style: ["Crisp", "Punch", "Pop", "Vivid", "Muted", "Soft", "Spotlight"],
  theme: ["Manga", "B&W", "Film", "Matte"],
};
