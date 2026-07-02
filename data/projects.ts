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
    id: "thecomicbookday",
    title: "The Comic Book Day",
    link: "https://thecomicbookday.com",
    tags: ["NextJS", "Supabase", "TypeScript", "Python", "TailwindCSS"],
    image: "/thecomicbookday.png",
  },
  {
    id: "premiereoptique",
    title: "Premiere Optique",
    link: "https://premiereoptique.vercel.app",
    tags: ["Freelance", "Next.js", "ThreeJS", "SEO"],
    image: "/premiereoptique.png",
  },
  {
    id: "cacabox",
    title: "Cacabox",
    link: "https://youtu.be/j9zc3sTs9us?si=Luy5ZePeew6eEl_P",
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
