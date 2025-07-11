import AnimatedSection from "../components/AnimatedSection";

export default function Skills() {
  return (
    <AnimatedSection
      variants={{
        hidden: { opacity: 0, scale: 0.6 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <section
        id="skills"
        className="h-screen flex items-center justify-center bg-gray-900 text-white text-4xl"
      >
        My Skills
      </section>
    </AnimatedSection>
  );
}
