"use client";

import ContactForm from "@/components/ContactForm";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  return (
    <AnimatedSection
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <section
        id="contact"
        className="h-screen text-white flex flex-col justify-center items-center px-6"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-4 text-lg text-center max-w-lg">
          Let’s connect! I'm available for work and collaboration.
        </p>

        <ContactForm />
      </section>
    </AnimatedSection>
  );
}
