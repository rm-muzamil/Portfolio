"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed flex justify-between top-0 left-0 w-full p-4 z-50 shadow backdrop-blur-md">
      <div className="flex justify-between w-full mx-[10rem] z-50">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex justify-center gap-[.5rem] text-2xl rounded-[4rem] h-[3rem] items-center w-[15rem] opacity-80 cursor-pointer">
            <p className="text-violet-500 text-4xl font-bold">{" < "}</p>
            RM <p className="text-fuchsia-400 text-4xl font-bold">/</p> MUZAMMIL
            <p className="text-fuchsia-500 text-4xl font-bold">{" > "}</p>
          </div>
        </Link>

        {/* Nav Buttons */}
        <div className="flex justify-center gap-[2rem] z-50 rounded-[4rem] h-[3rem] w-[30rem] bg-gray-800 opacity-80 px-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-white px-4 py-1 z-50 rounded-full transition duration-300 hover:bg-violet-600 ${
                activeSection === section ? "bg-violet-500 font-semibold" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Github Profile */}
        <Link href={"https://github.com/rm-muzamil"} target="_blank">
          <div className="flex justify-center items-center rounded-[4rem] h-[3rem] w-[10rem] bg-gradient-to-bl from-violet-500 to-fuchsia-500 opacity-90 text-white font-medium hover:opacity-100 transition duration-300 cursor-pointer">
            Github Profile
          </div>
        </Link>
      </div>
    </nav>
  );
}
