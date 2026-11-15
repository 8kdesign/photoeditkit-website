"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";

type I18n = { locale: Locale; t: Dictionary };

const I18nContext = createContext<I18n | null>(null);

/** Gives client components the current language and its text. Set once in the root layout. */
export function I18nProvider({ locale, dictionary, children }: { locale: Locale; dictionary: Dictionary; children: ReactNode }) {
  return <I18nContext.Provider value={{ locale, t: dictionary }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>");
  return value;
}
