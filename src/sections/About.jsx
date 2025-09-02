import AnimatedSection from "../components/AnimatedSection";
import TrueFocus from "./TrueFocus";
import RotatingText from "./RotatingText";
import Image from "next/image";
import Profile from "@/components/Profile";
// import ProfileImage from "../components/ProfileImage";

export default function About() {
  return (
    <AnimatedSection
      variants={{
        // hidden: { opacity: 0, y: 100 },
        // visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <section
        id="about"
        className="mt-[1rem] h-screen flex flex-wrap-reverse md:flex-nowrap justify-between mx-[1rem] md:mx-[10rem] text-white text-4xl"
      >
        <div className=" flex flex-col justify-center md:max-w-[40rem]">
          <h2>HI, I'm</h2>
          <div className="flex my-2">
            <TrueFocus
              sentence="RM MUZAMMIL"
              manualMode={false}
              blurAmount={5}
              borderColor="purple"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          <div className="flex items-center md:w-[40rem]">
            <h3 className="md:text-2xl text-[1rem]">I am a </h3>

            <RotatingText
              texts={[
                "MERN Stack Developer",
                "Programmmer",
                "Software Engineer",
              ]}
              mainClassName="px-2 md:text-3xl text-[1.5rem] font-bold sm:px-2 md:px-3 text-violet-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.035}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 90, stiffness: 1200 }}
              rotationInterval={4000}
            />
          </div>
          <div className="md:text-xl text-sm">
            I specialize in building responsive and dynamic web applications
            using the MERN Stack (MongoDB, Express.js, React.js, Node.js). I'm
            also skilled in Next.js, allowing me to create fast, SEO-friendly,
            and production-ready websites.
          </div>
        </div>
        <div className="mt-[5rem] md:mt-[0rem] flex justify-center items-center w-full">
          {/* <Image src="/rm.png" width={450} height={450} /> */}
          <Profile />
        </div>
      </section>
    </AnimatedSection>
  );
}
