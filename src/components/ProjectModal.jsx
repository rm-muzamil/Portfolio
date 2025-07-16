// "use client";

// import React from "react";

// type Project = {
//   title: string;
//   description: string;
//   image: string;
//   link?: string;
// };

// interface ProjectModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   project: Project | null;
// }

// export default function ProjectModal({
//   isOpen,
//   onClose,
//   project,
// }: ProjectModalProps) {
//   if (!isOpen || !project) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
//       <div className="bg-white dark:bg-[#1e1e1e] text-black dark:text-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl animate-fade-in">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
//         >
//           &times;
//         </button>

//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover rounded-md mb-4"
//         />

//         <h2 className="text-xl font-bold mb-2">{project.title}</h2>
//         <p className="text-sm mb-4">{project.description}</p>

//         {project.link && (
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 hover:underline text-sm"
//           >
//             Visit Project
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-800/70 backdrop-blur-xs z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-800 text-gray-50 max-w-[55%] w-full  rounded-xl p-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[20rem] object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <div className="flex gap-[1rem]">
              {project.skills.map((s) => (
                <p
                  className="bg-violet-950 my-[2rem] text-gray-300 text-xs px-2 h-[1rem]"
                  key={s}
                >
                  {s}
                </p>
              ))}
            </div>
            <p className="text-sm">{project.description}</p>
            <div className="flex justify-between gap-4 mt-4">
              {project.link[0] ? (
                <a
                  href={project?.link[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 w-[49%] hover:bg-purple-800 text-white px-4 py-2 rounded text-center transition"
                >
                  View Code
                </a>
              ) : (
                ""
              )}
              {project.link[1] ? (
                <a
                  href={project?.link[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-700 w-[49%] hover:bg-purple-800 text-white px-4 py-2 rounded text-center transition"
                >
                  View Live Demo
                </a>
              ) : (
                ""
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
