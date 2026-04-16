import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function Projects(): JSX.Element {
  return (
    <section id="projects" className="relative px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projets"
          title="Quelques trucs construits avec soin"
          description="Des projets clients et perso, pensés pour être solides, lisibles et agréables à utiliser."
        />

        {projects.length === 0 ? (
          <div className="card-wii text-center">
            <p className="text-wii-ink/70 dark:text-wii-cloud/70">
              Bientôt de nouveaux projets à montrer 👀
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
