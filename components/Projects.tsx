"use client";

import { projects } from "@/data/projects";
import { useT } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function Projects(): JSX.Element {
  const t = useT();

  return (
    <section id="projects" className="relative px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        {projects.length === 0 ? (
          <div className="card-wii text-center">
            <p className="text-wii-ink/70 dark:text-wii-cloud/70">
              {t.projects.empty}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
