import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-x-hidden">
        <Hero />

        <About />

        <Skills />

        <Projects />
      </main>
    </>
  );
}