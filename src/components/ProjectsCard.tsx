import Image from "next/image";
import React from "react";

interface Project {
  // id: string;
  title: string;
  description: string;
  image: string;
  // link?: string; // optional
  skills: string[];
}

function ProjectsCard({ project }: { project: Project }) {
  return (
    <div className="w-[22rem] p-[2rem] bg-gradient-to-br to-[#30013d] from-[#10011e] text-gray-50 rounded-xl shadow-md flex-shrink-0 hover:scale-105 transition-all">
      <div className=" w-full relative h-[8rem]">
        <Image
          fill
          className="object-cover opacity-70" // object-cover ensures it fills nicely
          src={project.image}
          alt="Project image"
        />
      </div>
      <div className="flex flex-wrap gap-[1rem] my-[1rem] h-[4rem]">
        {project.skills.map((s: string) => (
          <p
            className="bg-violet-950 text-gray-300 text-xs px-2 h-[1rem]"
            key={s}
          >
            {s}
          </p>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 h-[4rem]">{project.title}</h3>
        <p className="text-sm h-[5rem] text-gray-400 overflow-hidden line-clamp-4 ">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;
