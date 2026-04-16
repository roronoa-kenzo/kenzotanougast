"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { haptic } from "@/lib/haptic";
import { useUiSound } from "@/lib/useUiSound";

export function ThemeToggle(): JSX.Element {
  const { theme, toggle } = useTheme();
  const play = useUiSound();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
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
        className={`flex h-9 w-9 items-center justify-center rounded-full text-lg ${
          isDark ? "ml-auto bg-wii-sea text-wii-lemon" : "bg-wii-grass text-white"
        }`}
      >
        <Image
          src={isDark ? "/moon.svg" : "/sun.svg"}
          alt=""
          width={20}
          height={20}
          className="h-7 w-7"
        />
      </motion.span>
    </button>
  );
}
