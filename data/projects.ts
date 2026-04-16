export type Project = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  accent?: "sky" | "grass" | "mint" | "lemon";
  image: string;
};

export const projects: Project[] = [
  {
    title: "XXII Group",
    description:
      "Plateforme SaaS propulsée par l’IA pour analyser en temps réel les flux vidéo issus de caméras urbaines et privées. Front Next.js / React Query, back Express (TS), MongoDB.",
    link: "https://xxii.fr",
    tags: ["NextJS", "TailwindCSS", "TypeScript", "Express", "MongoDB", "IA", "E2E"],
    image: "/xxii.png",
  },
  {
    title: "Cacabox",
    description:
      "Site interactif conçu en freelance pour le groupe de streamers Cacabox. Le site consistait à scraper Letterboxd et afficher les films du compte de l'utilisateur en filtre amusant.",
    link: "https://x.com/cacaboxtv",
    tags: ["Freelance", "React.js", "Scraping", "Landmarks", "Computer Vision"],
    image: "/cacabox.jpg",
  },
  {
    title: "La Cour des Anges",
    description:
      "Site interactif conçu en vitrine pour la Cour des Anges. Focus UI ludique et expérience immersive côté visiteur, avec gestion de rendez-vous.",
    link: "https://lacourdesanges-site.vercel.app/",
    tags: ["Freelance", "NextJS", "TypeScript", "TailwindCSS", "Fullstack", "Fresha"],
    image: "/lacourdesanges.avif",
  },
];
