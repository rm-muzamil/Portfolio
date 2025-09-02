import AnimatedSection from "../components/AnimatedSection";
import SkillsCard from "../components/SkillsCard";
import { skillsData } from "../data/skillsData";

export default function Skills() {
  return (
    <div className="bg-gray-900">
      <AnimatedSection
        variants={{
          hidden: { opacity: 0, scale: 0.6 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <section
          id="skills"
          className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900 py-[5rem] px-[1rem]"
        >
          <h2 className="md:text-5xl text-4xl font-bold m-2">Skills</h2>
          <h3 className="mb-[3rem] text-center">
            Here are some of my skills on which I have been working
          </h3>
          <div className="px-[rem] flex justify-center gap-[2rem] md:max-w-[80rem] flex-wrap">
            {/* <SkillsCard skill_name="Frontend" skills={skills} />
          <SkillsCard skill_name="Backend" skills={backend_skills} /> */}
            {skillsData.map((section, index) => (
              <SkillsCard
                key={index}
                skill_name={section.skill_name}
                skills={section.skills}
              />
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
