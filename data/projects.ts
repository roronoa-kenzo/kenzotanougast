export type Project = {
  id: string;
  title: string;
  link: string;
  tags?: string[];
  accent?: "sky" | "grass" | "mint" | "lemon";
  image: string;
};

export const projects: Project[] = [
  {
    id: "xxii-group",
    title: "XXII Group",
    link: "https://xxii.fr",
    tags: ["NextJS", "TailwindCSS", "TypeScript", "Express", "MongoDB", "IA", "E2E"],
    image: "/xxii.png",
  },
  {
    id: "cacabox",
    title: "Cacabox",
    link: "https://x.com/cacaboxtv",
    tags: ["Freelance", "React.js", "Scraping", "Landmarks", "Computer Vision"],
    image: "/cacabox.jpg",
  },
  {
    id: "la-cour-des-anges",
    title: "La Cour des Anges",
    link: "https://lacourdesanges-site.vercel.app/",
    tags: ["Freelance", "NextJS", "TypeScript", "TailwindCSS", "Fullstack", "Fresha"],
    image: "/lacourdesanges.avif",
  },
];
