"use client";

import { profile } from "@/data/profile";
import { useT } from "@/lib/i18n";

export function Footer(): JSX.Element {
  const t = useT();

  return (
    <footer className="border-t border-wii-ink/5 px-6 py-10 text-center text-sm text-wii-ink/60 dark:border-white/10 dark:text-wii-cloud/60 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t.footer.madeBy} {profile.location}.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-wii-grass dark:hover:text-wii-sea"
          >
            Email
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-wii-grass dark:hover:text-wii-sea"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-wii-grass dark:hover:text-wii-sea"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
