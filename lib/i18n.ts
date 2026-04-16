"use client";

import { useLocale } from "@/components/LocaleProvider";
import { en } from "./i18n/en";
import { fr } from "./i18n/fr";
import type { Messages } from "./i18n/types";

export type Locale = "fr" | "en";

export type { Messages } from "./i18n/types";

export const messages: Record<Locale, Messages> = { fr, en };

export function useT(): Messages {
  const { locale } = useLocale();
  return messages[locale];
}
