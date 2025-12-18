"use client";

import { useState } from "react"; // Tambahkan ini
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import projects from "@/data/projects.json";
import Project from "./Project";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"; // Tambahkan AnimatePresence & LayoutGroup

// Tentukan kategori yang diinginkan
const categories = ["all", "fullstack", "frontend", "backend"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Logika Filter
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter((project) => 
        project.category?.toLowerCase() === activeTab
      );

  return (
    <SectionContainer id="projects">
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionHeader plainText="🚀 Featured" highlightText="Projects" />
          </motion.div>

          {/* Tab Filtering */}
          <LayoutGroup>
            <div className="flex flex-wrap justify-center bg-white/50 dark:bg-zinc-900/50 p-1.5 rounded-full mt-8 border border-zinc-200 dark:border-zinc-800 gap-1 backdrop-blur-md">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2 text-xs md:text-sm font-bold capitalize transition-all duration-300 rounded-full ${
                    activeTab === tab
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        {/* Grid Project dengan Animasi */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, id) => (
              <motion.div
                key={project.title} // Gunakan title sebagai key yang unik
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Project index={id} {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Background Ornaments */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse animation-delay-2000" />
      </div>
    </SectionContainer>
  );
};

export default Projects;