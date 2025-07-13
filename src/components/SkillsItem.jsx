import React from "react";

function SkillsItem({ icon, label }) {
  return (
    <div className="flex gap-[1rem] px-[1rem] items-center justify-center rounded-xl h-[3rem] border-2 min-w-[9rem] border-solid border-gray-500">
      <p
        className={`rounded-2xl ${
          label === "Next JS" ||
          label === "HTML" ||
          label === "CSS" ||
          label === "C++" ||
          label === "Express.js" ||
          label === "GitHub" ||
          label === "Railway" ||
          label === "Vercel"
            ? "bg-white"
            : ""
        }`}
      >
        {icon}
      </p>
      <h5>{label}</h5>
    </div>
  );
}

export default SkillsItem;
