import { profile } from "@/data/profile";

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-wii-ink/5 px-6 py-10 text-center text-sm text-wii-ink/60 dark:border-white/10 dark:text-wii-cloud/60 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Fait avec soin à {profile.location}.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-wii-grass"
          >
            Email
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-wii-grass"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-wii-grass"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
