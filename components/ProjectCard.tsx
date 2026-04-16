"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";

import type { Project } from "@/data/projects";
import { haptic } from "@/lib/haptic";
import { useT } from "@/lib/i18n";
import { useUiSound } from "@/lib/useUiSound";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps): JSX.Element {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const play = useUiSound();
  const t = useT();

  const description = t.projects.items[project.id]?.description ?? "";

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
        <div className="relative mb-5 h-28 w-full overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <h3 className="font-display text-2xl font-bold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-wii-ink/70 dark:text-wii-cloud/70">
          {description}
        </p>

        {project.tags && project.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="chip transition duration-200 hover:-translate-y-0.5 hover:border-wii-ink/20 hover:bg-wii-lemon/70 dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-wii-ink dark:text-wii-cloud">
          {t.projects.discover}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </a>
    </motion.div>
  );
}
