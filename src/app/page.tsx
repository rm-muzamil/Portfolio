import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="space-y-0">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
