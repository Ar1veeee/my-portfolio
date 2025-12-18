"use client";

import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import projects from "@/data/projects.json";
import Project from "./Project";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader plainText="🚀 Featured" highlightText="Projects" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-500 dark:text-zinc-400 max-w-xs text-sm border-l-2 border-blue-500 pl-4"
          >
            Exploring the intersection of design and code through
            high-performance web applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, id) => (
            <div key={id} className={id === 0 ? "lg:col-span-1" : ""}>
              <Project index={id} {...project} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse animation-delay-2000" />

        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 dark:opacity-5"></div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
