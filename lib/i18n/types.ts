export type ProjectMessages = {
  description: string;
};

export type ExperienceMessages = {
  role: string;
  date: string;
  description: string;
};

export type Messages = {
  hero: {
    available: string;
    viewProjects: string;
    contactMe: string;
    viewGithub: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    empty: string;
    discover: string;
    items: Record<string, ProjectMessages>;
  };
  experiences: {
    eyebrow: string;
    title: string;
    description: string;
    items: Record<string, ExperienceMessages>;
  };
  music: {
    eyebrow: string;
    title: string;
    description: string;
    nowPlaying: string;
    play: string;
    pause: string;
  };
  profile: {
    tagline: string;
  };
  footer: {
    madeBy: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  locale: {
    toEn: string;
    toFr: string;
  };
};
