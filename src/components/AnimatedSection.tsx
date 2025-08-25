"use client";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  variants: Variants;
}

export default function AnimatedSection({
  children,
  variants,
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
