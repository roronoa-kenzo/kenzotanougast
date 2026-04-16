"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { profile } from "@/data/profile";
import { haptic } from "@/lib/haptic";

export function Hero(): JSX.Element {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:pt-36"
    >
      <BackgroundBlobs />

      <motion.div
        style={{ y, opacity }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_1fr]"
      >
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-wii-ink/10 bg-white/80 px-4 py-1.5 text-sm font-medium shadow-wii dark:border-white/10 dark:bg-white/5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-wii-mint" />
            Disponible en freelance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.75rem,9vw,7rem)] font-bold leading-[0.95] tracking-tight"
          >
            <span className="block">FULLSTACK</span>
            <span className="block text-wii-grass">DEVELOPER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-wii-ink/70 dark:text-wii-cloud/70 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={() => haptic("light")}
              className="rounded-full bg-wii-ink px-6 py-3 font-medium text-wii-cloud shadow-wii transition hover:-translate-y-0.5 hover:shadow-wii-hover dark:bg-wii-cloud dark:text-wii-ink"
            >
              Voir les projets
            </a>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => haptic("light")}
              className="rounded-full border-2 border-wii-ink/10 bg-white/80 px-6 py-3 font-medium shadow-wii transition hover:-translate-y-0.5 hover:shadow-wii-hover dark:border-white/10 dark:bg-white/5"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 -rotate-6 rounded-blob bg-wii-sky" />
          <div className="absolute inset-0 rotate-3 rounded-blob bg-wii-lemon/70" />
          <div className="relative h-full w-full animate-float overflow-hidden rounded-blob border-4 border-white shadow-wii-hover dark:border-white/20">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function BackgroundBlobs(): JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-wii-sky blur-3xl opacity-60 dark:opacity-20" />
      <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-wii-grass/60 blur-3xl opacity-50 dark:opacity-20" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-wii-mint blur-3xl opacity-50 dark:opacity-10" />
    </div>
  );
}
