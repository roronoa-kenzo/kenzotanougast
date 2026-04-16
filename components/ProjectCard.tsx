"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import type { MouseEvent } from "react";

import type { Project } from "@/data/projects";
import { haptic } from "@/lib/haptic";
import { useUiSound } from "@/lib/useUiSound";

const ACCENT_CLASSES: Record<NonNullable<Project["accent"]>, string> = {
  sky: "bg-wii-sky",
  grass: "bg-wii-grass",
  mint: "bg-wii-mint",
  lemon: "bg-wii-lemon",
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps): JSX.Element {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const play = useUiSound();
  const accentClass = ACCENT_CLASSES[project.accent ?? "sky"];

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>): void => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (): void => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <a
        ref={cardRef}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => play("hover")}
        onClick={() => {
          play("click");
          haptic("light");
        }}
        className="card-wii group block h-full transition-transform will-change-transform"
      >
        <div className={`mb-5 h-28 rounded-2xl ${accentClass} relative overflow-hidden`}>
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/30" />
          <div className="absolute bottom-3 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-wii-ink">
            Projet
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-wii-ink/70 dark:text-wii-cloud/70">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-wii-ink dark:text-wii-cloud">
          Découvrir
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </a>
    </motion.div>
  );
}
