import type { Messages } from "./types";

export const en: Messages = {
  hero: {
    available: "Available for freelance",
    viewProjects: "View projects",
    contactMe: "Contact me",
    viewGithub: "View my GitHub",
  },
  projects: {
    eyebrow: "Projects",
    title: "A few things crafted with care",
    description:
      "Client and personal projects, built to be solid, clear, and pleasant to use.",
    empty: "New projects coming soon 👀",
    discover: "Discover",
    items: {
      "xxii-group": {
        description:
          "AI-powered SaaS platform that analyzes real-time video feeds from urban and private cameras. Next.js / React Query on the front, Express (TS) and MongoDB on the back.",
      },
      cacabox: {
        description:
          "Interactive site built freelance for the Cacabox streamers group. It scraped Letterboxd and displayed the user’s movies through a playful filter.",
      },
      "la-cour-des-anges": {
        description:
          "Showcase site built for La Cour des Anges. Playful UI and immersive visitor experience, including appointment booking.",
      },
    },
  },
  experiences: {
    eyebrow: "Experience",
    title: "Where I’ve left some traces",
    description: "A journey between freelance work and AI startups",
    items: {
      xxii: {
        role: "Full Stack Developer",
        date: "Sept. 2025 — Today",
        description:
          "Building XXIICORE, an AI-powered SaaS platform for real-time video analytics. Next.js + React Query on the front, Express (TS) + MongoDB on the back.",
      },
      cacabox: {
        role: "Web Developer — Freelance",
        date: "Avr. 2025 — Mai 2025",
        description:
          "Designed an interactive site for the popular streamers group Cacabox. First freelance project delivered end-to-end.",
      },
      estimancy: {
        role: "Full Stack Software Developer",
        date: "Mai 2024 — Nov. 2024",
        description:
          "Improved a JIRA plugin in ReactJS, integrated Ruby on Rails + React features, and used the OpenAI API to build smart assistants.",
      },
    },
  },
  music: {
    eyebrow: "Current track",
    title: "What’s on loop",
    description: "The tune that keeps me company while I code right now :)",
    nowPlaying: "Now playing",
    play: "Play music",
    pause: "Pause",
  },
  profile: {
    tagline:
      "Freelance developer passionate about art, video games, and interfaces that make you smile.",
  },
  footer: {
    madeBy: "Made with care in",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  locale: {
    toEn: "Switch to English",
    toFr: "Switch to French",
  },
};
