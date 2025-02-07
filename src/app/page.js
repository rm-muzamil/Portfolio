'use client'; // Required for Framer Motion in Next.js 13+
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a web developer passionate about building amazing things.</p>
      </motion.section>

      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2>Projects</h2>
        <div>
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div>
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </motion.section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2>About Me</h2>
        <p>I love coding and creating beautiful websites.</p>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2>Contact Me</h2>
        <p>Email: example@example.com</p>
      </motion.section>
    </main>
  );
}