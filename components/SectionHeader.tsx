import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps): JSX.Element {
  return (
    <Reveal>
      <div className="mb-12 max-w-2xl">
        <span className="chip">{eyebrow}</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-lg text-wii-ink/70 dark:text-wii-cloud/70">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
