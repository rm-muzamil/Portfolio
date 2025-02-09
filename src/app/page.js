"use client"; // Required for Framer Motion in Next.js 13+
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import "boxicons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <motion.section className="home">
        <div className="home-info">
          <h1>RM Muzammil</h1>
          <h2>I'm a Frontend developer </h2>
          <p>later adding the details</p>
          <div className="btn-sci">
            <Link className="btn" href="/">
              Download CV
            </Link>
            <div className="sci">
              <p>
                <box-icon type="logo" name="github"></box-icon>
              </p>
            </div>
          </div>
        </div>
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">

                <Image
                  src="/images/new.png"
                  alt="Example Image"
                  width={450}
                  height={450}
                  style={{ position: "absolute", top: "40px", left: "30px", mixBlendMode:"lighten" }}
                />

            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
