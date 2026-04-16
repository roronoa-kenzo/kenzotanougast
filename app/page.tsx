import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Projects } from "@/components/Projects";

export default function HomePage(): JSX.Element {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      <Experiences />
      <MusicPlayer />
      <Footer />
    </main>
  );
}
