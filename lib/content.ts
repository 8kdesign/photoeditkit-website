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
  /** File prefix in public/examples; the display name is in the dictionaries (hero.examples). */
  slug: string;
  width: number;
  height: number;
};

/** Real PhotoEditKit outputs, from the repos' Images/ folders. */
export const examples: ExamplePhoto[] = [
  { slug: "valley", width: 1200, height: 1600 },
  { slug: "night-street", width: 1600, height: 1200 },
  { slug: "red-panda", width: 1200, height: 1600 },
  { slug: "macaws", width: 1600, height: 1200 },
  { slug: "tablet", width: 1200, height: 1600 },
];

export type RecipeKind = "correction" | "style" | "theme";

export type Recipe = {
  /** English name. Also the key for the recipe's text in the dictionaries (lib/dictionaries). */
  name: string;
  kind: RecipeKind;
  /** Slug of a before/after pair in public/examples. Recipes without one show a placeholder. */
  sample?: string;
};

/** Every recipe, in display order. Names and descriptions per language are in lib/dictionaries. */
export const recipes: Recipe[] = [
  { name: "True Color", kind: "correction", sample: "red-panda" },
  { name: "Brighten", kind: "correction", sample: "night-street" },
  { name: "Deepen", kind: "correction", sample: "sign" },
  { name: "Recover Highlights", kind: "correction", sample: "forest" },
  { name: "Lift Shadows", kind: "correction", sample: "macaws" },
  { name: "Warm Up", kind: "correction", sample: "tree" },
  { name: "Cool Down", kind: "correction", sample: "giant-panda" },
  { name: "Clean Up", kind: "correction", sample: "stage" },
  { name: "Crisp", kind: "style", sample: "cat" },
  { name: "Punch", kind: "style", sample: "burger" },
  { name: "Pop", kind: "style", sample: "juice" },
  { name: "Vivid", kind: "style", sample: "valley" },
  { name: "Muted", kind: "style", sample: "bakery" },
  { name: "Soft", kind: "style", sample: "window" },
  { name: "Spotlight", kind: "style", sample: "smoothie" },
  { name: "Manga", kind: "theme", sample: "hotel" },
  { name: "B&W", kind: "theme", sample: "bronze" },
  { name: "Film", kind: "theme", sample: "villa" },
  { name: "Matte", kind: "theme", sample: "skyline" },
];

/** Recipe names shown on the home page; Original is RAW-only and left off the overview. */
export const homeRecipeGroups: Record<RecipeKind, string[]> = {
  correction: ["Brighten", "Deepen", "Lift Shadows", "Recover Highlights", "Warm Up", "Cool Down", "True Color", "Clean Up"],
  style: ["Crisp", "Punch", "Pop", "Vivid", "Muted", "Soft", "Spotlight"],
  theme: ["Manga", "B&W", "Film", "Matte"],
};
