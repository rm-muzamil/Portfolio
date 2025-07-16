import React from "react";

function SkillsItem({ icon, label }) {
  const whiteBgIcons = new Set([
    "Next JS",
    "HTML",
    "CSS",
    "C++",
    "Express.js",
    "Github",
    "Railway",
    "Vercel",
  ]);
  const hasWhiteBg = whiteBgIcons.has(label);
  return (
    <div className="flex gap-[1rem] px-[1rem] items-center justify-center rounded-xl h-[3rem] border-2 min-w-[9rem] border-solid border-gray-500">
      <p className={`rounded-2xl ${hasWhiteBg ? "bg-white" : ""}`}>{icon}</p>
      <h5>{label}</h5>
    </div>
  );
}

export default SkillsItem;
