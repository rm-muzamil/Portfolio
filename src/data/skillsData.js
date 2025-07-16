// src/data/skillsData.js
// import { label } from "framer-motion/client";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMui,
  SiAntdesign,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiVsco,
  SiVercel,
  SiPostman,
  SiFigma,
  SiNetlify,
  SiRailway,
} from "react-icons/si";

export const skillsData = [
  {
    skill_name: "Frontend",
    skills: [
      { icon: <SiHtml5 size={30} color="#E34F26" />, label: "HTML" },
      { icon: <SiCss3 size={30} color="#1572B6" />, label: "CSS" },
      { icon: <SiBootstrap size={30} color="#7952B3" />, label: "Bootstrap" },
      {
        icon: <SiTailwindcss size={30} color="#38BDF8" />,
        label: "Tailwind CSS",
      },
      { icon: <SiJavascript size={30} color="#F7DF1E" />, label: "JavaScript" },
      { icon: <SiTypescript size={30} color="#3178C6" />, label: "TypeScript" },
      { icon: <SiReact size={30} color="#61DAFB" />, label: "React JS" },
      { icon: <SiNextdotjs size={30} color="#000000" />, label: "Next JS" },
      { icon: <SiMui size={30} color="#0081CB" />, label: "Material UI" },
      { icon: <SiAntdesign size={30} color="#0170FE" />, label: "Ant Design" },
    ],
  },
  {
    skill_name: "Backend",
    skills: [
      { icon: <SiNodedotjs size={30} color="#339933" />, label: "Node.js" },
      { icon: <SiExpress size={30} color="#000000" />, label: "Express.js" },
      { icon: <SiMongodb size={30} color="#47A248" />, label: "MongoDB" },
      { icon: <SiFirebase size={30} color="#FFCA28" />, label: "Firebase" },
    ],
  },
  {
    skill_name: "Languages",
    skills: [
      { icon: <SiPython size={30} color="#43434" />, label: "Python" },
      { icon: <SiJavascript size={30} color="#F7DF1E" />, label: "JavaScript" },
      { icon: <SiTypescript size={30} color="#3178C6" />, label: "TypeScript" },
      { icon: <SiCplusplus size={30} color="#3178C6" />, label: "C++" },
    ],
  },
  {
    skill_name: "Others",
    skills: [
      { icon: <SiGit size={30} color="#F05032" />, label: "Git" }, // Orange-red
      { icon: <SiGithub size={30} color="#181717" />, label: "GitHub" }, // Dark gray/black
      { icon: <SiRailway size={30} color="#0B0D0E" />, label: "Railway" },

      { icon: <SiVercel size={30} color="#000000" />, label: "Vercel" }, // Black
      { icon: <SiNetlify size={30} color="#00C7B7" />, label: "Netlify" }, // Cyan
      { icon: <SiPostman size={30} color="#FF6C37" />, label: "Postman" }, // Orange
      { icon: <SiFigma size={30} color="#F24E1E" />, label: "Figma" }, // Main orange from Figma logo
    ],
  },
];
