import { experiences } from "@/data/experiences";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experiences(): JSX.Element {
  return (
    <section id="experiences" className="relative bg-wii-cream/60 px-6 py-24 dark:bg-white/5 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Expériences"
          title="Là où j’ai laissé des traces"
          description="Un parcours entre freelance, studios IA et équipes produit."
        />

        <ol className="relative space-y-6 border-l-2 border-dashed border-wii-ink/15 pl-8 dark:border-white/15">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${experience.date}`} delay={index * 0.05}>
              <li className="relative">
                <span className="absolute -left-[41px] top-3 flex h-5 w-5 items-center justify-center rounded-full bg-wii-grass ring-4 ring-wii-cream dark:ring-wii-ink" />

                <div className="card-wii">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {experience.role}
                      <span className="text-wii-grass"> · {experience.company}</span>
                    </h3>
                    <span className="text-sm font-medium text-wii-ink/60 dark:text-wii-cloud/60">
                      {experience.date}
                    </span>
                  </div>

                  {experience.location ? (
                    <p className="mt-1 text-sm text-wii-ink/60 dark:text-wii-cloud/60">
                      {experience.location}
                    </p>
                  ) : null}

                  <p className="mt-3 text-wii-ink/75 dark:text-wii-cloud/75">
                    {experience.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
