"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import experiences from "@/data/experiences.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Experience from "./Experience";
import Image from "next/image";

const Experiences = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SectionContainer id="experiences">
      <div className="relative z-10 container mx-auto px-10 md:px-20">
        <div className="text-center mb-16">
          <SectionHeader plainText="💼 My prior" highlightText="Experience" />
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          <div className="absolute left-[-26px] md:left-[33.33%] top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-purple-500 to-blue-500"
            />
          </div>

          <div className="flex flex-col">
            {experiences.map((experience, id) => (
              <Experience
                key={id}
                id={id}
                image={experience.image}
                company={experience.company}
                role={experience.role}
                description={experience.description}
                dates={experience.dates}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 opacity-20 hidden lg:block"
      >
        <Image src="/bracket_icon.svg" alt="" width={60} height={60} className="w-auto h-auto" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 opacity-20 hidden lg:block"
      >
        <Image src="/electricity_icon.svg" alt="" width={60} height={60} className="w-auto h-auto" />
      </motion.div>
    </SectionContainer>
  );
};

export default Experiences;