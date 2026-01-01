"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import skills from "@/data/skills.json";

const categories = ["all", "frontend", "backend", "database", "cloud", "tools"];

const Skill = ({ icon, name, index }: { icon: string; name: string; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        opacity: { duration: 0.2 },
        layout: { type: "spring", stiffness: 350, damping: 30 },
      }}
      whileHover={{ y: -8, rotateZ: index % 2 === 0 ? 2 : -2 }}
      className="group relative flex flex-col items-center justify-center p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-[2rem] hover:shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300"
    >
      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-purple-500/30 transition-colors duration-500" />

      {/* Icon container */}
      <div className="relative mb-3 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
        <Image
          width={32}
          height={32}
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Skill name */}
      <span className="text-xs font-bold tracking-tighter text-zinc-500 dark:text-zinc-400 group-hover:text-purple-500 uppercase transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((s) => s.category?.toLowerCase() === activeTab);

  return (
    // FIXED: Added position relative to container
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white">
              My Tech <span className="text-purple-600">Arsenal</span>
            </h2>
            <div className="h-1.5 w-24 bg-purple-600 rounded-full mt-4" />
          </motion.div>

          {/* Category Filter Tabs */}
          <LayoutGroup>
            <div className="grid grid-cols-3 md:grid-cols-6 bg-zinc-100 dark:bg-zinc-900/50 p-1.5 rounded-3xl md:rounded-full mt-8 border border-zinc-200 dark:border-zinc-800 gap-1">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold capitalize transition-all duration-300 rounded-full ${
                    activeTab === tab
                      ? "text-purple-600 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-zinc-200"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-purple-600 rounded-full -z-10"
                      transition={{ 
                        type: "spring", 
                        stiffness: 380, 
                        damping: 30 
                      }}
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        {/* Skills Grid with Fixed Layout */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <Skill
                  key={skill.name}
                  index={index}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">
              No skills found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Animated Background Text */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 flex flex-col gap-10">
          {[1, 2, 3].map((i) => (
            <motion.h1
              key={i}
              animate={{ 
                x: i % 2 === 0 ? [-200, 200] : [200, -200] 
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 0.5
              }}
              className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none whitespace-nowrap"
            >
              JAVASCRIPT REACT NEXTJS TYPESCRIPT NODEJS TAILWIND PHP GO DOCKER
            </motion.h1>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;