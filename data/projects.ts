export type Project = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  accent?: "sky" | "grass" | "mint" | "lemon";
};

export const projects: Project[] = [
  {
    title: "XXIICORE",
    description:
      "Plateforme SaaS propulsée par l’IA pour analyser en temps réel les flux vidéo issus de caméras urbaines et privées. Front Next.js / React Query, back Express (TS), MongoDB.",
    link: "https://xxii.fr",
    tags: ["Next.js", "React Query", "Express", "MongoDB", "IA"],
    accent: "sky",
  },
  {
    title: "Cacabox",
    description:
      "Site interactif conçu en freelance pour le groupe de streamers Cacabox. Focus UI ludique et expérience immersive côté fan.",
    link: "https://x.com/cacaboxtv",
    tags: ["Freelance", "Next.js", "UI ludique"],
    accent: "grass",
  },
];
