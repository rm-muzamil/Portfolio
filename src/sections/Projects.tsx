// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import "./styles.css"; // We'll include styles inline below or you can move them to a global CSS file

// const projects = Array.from({ length: 10 }, (_, i) => ({
//   title: `Project ${i + 1}`,
//   description: `This is a description for project ${i + 1}.`,
// }));

// export default function ProjectsHorizontalScroll() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[300vh] bg-gray-900 text-white"
//       id="projects"
//     >
//       <div className="sticky top-0 h-screen overflow-hidden flex items-center">
//         <motion.div style={{ x }} className="flex gap-6 px-20">
//           {projects.map((project, i) => (
//             <div
//               key={i}
//               className="min-w-[300px] max-w-[300px] bg-white text-black p-6 rounded-xl shadow-md flex-shrink-0 hover:scale-105 transition-all"
//             >
//               <h3 className="text-lg font-bold mb-2">{project.title}</h3>
//               <p className="text-sm">{project.description}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import "./styles.css";

const projects = Array.from({ length: 10 }, (_, i) => ({
  title: `Project ${i + 1}`,
  description: `This is a description for project ${i + 1}.`,
}));

export default function ProjectsHorizontalScroll() {
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
      className="relative h-[300vh] bg-gray-900 text-white"
      id="projects"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex gap-[2rem] px-[25vw] items-center"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] max-w-[300px] p-6 rounded-xl shadow-md flex-shrink-0 bg-white text-black relative group"
              style={{
                transformOrigin: "center",
              }}
              whileInView={{
                scale: 1.1,
                filter: "blur(0px)",
              }}
              initial={{
                scale: 0.9,
                filter: "blur(3px)",
              }}
              whileHover={{
                scale: 1.15,
              }}
              viewport={{ amount: 0.5, once: false }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
