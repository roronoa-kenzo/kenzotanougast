"use client";

import { motion } from "framer-motion";

import { haptic } from "@/lib/haptic";
import { useT } from "@/lib/i18n";
import { useUiSound } from "@/lib/useUiSound";
import { useLocale } from "./LocaleProvider";

export function LocaleToggle(): JSX.Element {
  const { locale, toggle } = useLocale();
  const play = useUiSound();
  const t = useT();

  const isEn = locale === "en";

  return (
    <button
      type="button"
      aria-label={isEn ? t.locale.toFr : t.locale.toEn}
      onClick={() => {
        play("click");
        haptic("light");
        toggle();
      }}
      onMouseEnter={() => play("hover")}
      className="group relative flex h-12 w-20 items-center rounded-full border-2 border-wii-ink/10 bg-white/80 p-1 shadow-wii backdrop-blur transition hover:shadow-wii-hover dark:border-white/10 dark:bg-white/5"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
          isEn ? "ml-auto bg-wii-sea text-wii-ink" : "bg-wii-grass text-white"
        }`}
      >
        {isEn ? "EN" : "FR"}
      </motion.span>
    </button>
  );
}
