import type { Messages } from "./types";

export const fr: Messages = {
  hero: {
    available: "Disponible en freelance",
    viewProjects: "Voir les projets",
    contactMe: "Me contacter",
    viewGithub: "Voir mon GitHub",
  },
  projects: {
    eyebrow: "Projets",
    title: "Quelques trucs construits avec soin",
    description:
      "Des projets clients et perso, pensés pour être solides, lisibles et agréables à utiliser.",
    empty: "Bientôt de nouveaux projets à montrer 👀",
    discover: "Découvrir",
    items: {
      "xxii-group": {
        description:
          "Plateforme SaaS propulsée par l’IA pour analyser en temps réel les flux vidéo issus de caméras urbaines et privées. Front Next.js / React Query, back Express (TS), MongoDB.",
      },
      cacabox: {
        description:
          "Site interactif conçu en freelance pour le groupe de streamers Cacabox. Le site consistait à scraper Letterboxd et afficher les films du compte de l’utilisateur en filtre amusant.",
      },
      "la-cour-des-anges": {
        description:
          "Site interactif conçu en vitrine pour la Cour des Anges. Focus UI ludique et expérience immersive côté visiteur, avec gestion de rendez-vous.",
      },
      "premiereoptique": {
        description:
          "Refonte du site vitrine vieillissant de Premiere Optique en freelance. Utilisation de Next.js et ThreeJS pour un site moderne, fluide et sans lags : tout est sur une seule page, APIs légères, et une expérience optimisée.",
      },
      "thecomicbookday": {
        description:
          "Projet de cœur qui fusionne ma passion pour les comics et le web : j’ai voulu digitaliser ma collection et proposer des conseils de lecture. Réalisé avec Next.js relié à Supabase (bucket), et du scraping Python.",
     
      },
    },
  },
  experiences: {
    eyebrow: "Expériences",
    title: "Là où j’ai laissé des traces",
    description: "Un parcours entre freelance et Startups IA",
    items: {
      xxii: {
        role: "Développeur Full Stack",
        date: "Sept. 2025 — Aujourd’hui",
        description:
          "Développement de XXIICORE, plateforme SaaS d’analyse vidéo en temps réel propulsée par l’IA. Stack Next.js + React Query côté front, Express (TS) + MongoDB côté back.",
      },
      cacabox: {
        role: "Développeur Web — Freelance",
        date: "Avr. 2025 — Mai 2025",
        description:
          "Conception d’un site interactif pour le groupe populaire de streamers Cacabox. Premier projet freelance mené de bout en bout.",
      },
      estimancy: {
        role: "Développeur Logiciel Full Stack",
        date: "Mai 2024 — Nov. 2024",
        description:
          "Amélioration d’un plugin JIRA en ReactJS, intégration de fonctionnalités Ruby on Rails + React, et usage de l’API OpenAI pour des assistants intelligents.",
      },
    },
  },
  music: {
    eyebrow: "Musique du moment",
    title: "Ce qui tourne en boucle",
    description: "La musique qui m’accompagne quand je code en ce moment :)",
    nowPlaying: "Now playing",
    play: "Lancer la musique",
    pause: "Mettre en pause",
  },
  profile: {
    tagline:
      "Développeur freelance passionné d’art, de jeux vidéo et d’interfaces qui font sourire.",
  },
  footer: {
    madeBy: "Fait avec soin à",
  },
  theme: {
    toLight: "Activer le thème clair",
    toDark: "Activer le thème sombre",
  },
  locale: {
    toEn: "Switch to English",
    toFr: "Passer en français",
  },
};
