import React from "react";
import SkillsItem from "../components/SkillsItem";

function SkillsCard({ skill_name, skills }) {
  return (
    <div className="md:w-[35rem] md:h-[22rem] border-purple-900 border-2 text-gray-400 rounded-[1rem] flex items-center flex-col flex-wrap ">
      <h2 className="font-bold text-3xl mb-[1.5rem]">{skill_name}</h2>
      <div className="flex justify-center flex-wrap max-w-[30rem] gap-[1rem]">
        {skills.map((skill, index) => (
          <SkillsItem key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
