"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import SanquiImage from "@/public/imgages/sanqui.jpg";

export default function About() {
  const controlsTitle = useAnimation();
  const controlsImage = useAnimation();
  const controlsFeatures = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        // Adjust the threshold for visibility
        if (rect.top < window.innerHeight - 500 && rect.bottom > 500) {
          // Start animations for individual components
          controlsTitle.start({ opacity: 1, y: 0 });
          controlsImage.start({ opacity: 1, y: 0 });
          controlsFeatures.start({ opacity: 1, y: 0 });
        } else {
          // Reset animations when not visible
          controlsTitle.start({ opacity: 0, y: 20 });
          controlsImage.start({ opacity: 0, y: 20 });
          controlsFeatures.start({ opacity: 0, y: 20 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlsTitle, controlsImage, controlsFeatures]);

  return (
    <section
      className="bg-[#eeeeee] text-[#3a6053] relative z-10 p-8 py-24 min-h-screen"
      id="about"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={controlsTitle}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          <motion.div
            className="w-80 h-80 relative overflow-hidden rounded-full sm:w-80 sm:h-80"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsImage}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={SanquiImage}
              alt="Me"
              width={500}
              height={500}
              className="h-full transition-transform duration-500 transform scale-115"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0 }}
            animate={controlsFeatures}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center md:text-left text-xl/1.5 mb-2">
              Fullstack Developer who loves to learn new things, believes that
              code should be written as best as possible, but values simplicity
              and useful design over flair and flashy elements.
            </p>
            <p className="text-center md:text-left text-xl/1.5">
              Looking to expand my knowledge, collaborate effectively in teams
              and eager to build well design applications.
            </p>
          </motion.div>
        </div>
        <div className="border-t border-gray-300 my-6"></div>
        {/* Skill set */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={controlsFeatures}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-2xl font-bold mt-20 mb-2">
            Skill Set
          </h3>
          <div className="flex flex-wrap gap-3 py-4 mx-auto max-w-xl justify-center items-center">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Jest",
              "Testing Library",
              "Java",
              "Springframework",
              "REST API",
              "GraphQL",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-[#f5f5f5] text-[#326758] font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
