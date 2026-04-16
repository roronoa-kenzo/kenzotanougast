export type Experience = {
  role: string;
  company: string;
  description: string;
  date: string;
  location?: string;
};

export const experiences: Experience[] = [
  {
    role: "Développeur Full Stack",
    company: "XXII",
    date: "Sept. 2025 — Aujourd’hui",
    location: "Puteaux, Île-de-France",
    description:
      "Développement de XXIICORE, plateforme SaaS d’analyse vidéo en temps réel propulsée par l’IA. Stack Next.js + React Query côté front, Express (TS) + MongoDB côté back.",
  },
  {
    role: "Développeur Web — Freelance",
    company: "Cacabox",
    date: "Avr. 2025 — Mai 2025",
    description:
      "Conception d’un site interactif pour le groupe populaire de streamers Cacabox. Premier projet freelance mené de bout en bout.",
  },
  {
    role: "Développeur Logiciel Full Stack",
    company: "Estimancy",
    date: "Mai 2024 — Nov. 2024",
    location: "Massy, Île-de-France",
    description:
      "Amélioration d’un plugin JIRA en ReactJS, intégration de fonctionnalités Ruby on Rails + React, et usage de l’API OpenAI pour des assistants intelligents.",
  },
];
