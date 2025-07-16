"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../data/projectsData";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsHorizontalScroll() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 10}%`]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] text-white clip-slan bg-gradient-to-b from-[#330640] to-[#1b0132]"
      id="projects"
    >
      {/* Scrollable cards */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-6 px-20">
          {projects.map((project, i) => (
            <div key={i} onClick={() => setSelectedProject(project)}>
              <ProjectsCard project={project} i={i} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
