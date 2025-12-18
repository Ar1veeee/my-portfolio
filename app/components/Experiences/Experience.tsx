"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  id: number;
  image: string;
  company: string;
  role: string;
  description: string;
  dates: string;
};

const Experience = ({ id, image, company, role, description, dates }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: id % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col md:flex-row gap-8 mb-12 group"
    >
      {/* Date */}
      <div className="hidden md:flex md:w-1/3 justify-end pt-1">
        <span className="text-sm font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase mr-4">
          {dates}
        </span>
      </div>

      {/* Timeline Node */}
      <div className="absolute left-[-33px] md:left-[33.33%] md:ml-[-9px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-zinc-950 bg-purple-500 z-10 group-hover:scale-150 transition-transform duration-300" />

      {/* Content Card */}
      <div className="flex-1 bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl hover:border-purple-500/50 transition-colors shadow-sm shadow-zinc-200/50 dark:shadow-none">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 p-2 flex-shrink-0">
            <Image
              src={image}
              alt={company}
              fill
              sizes="48px"
              className="object-contain p-1"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">
              {role}
            </h3>
            <p className="text-purple-600 dark:text-purple-400 font-medium">
              {company}
            </p>
          </div>
        </div>

        {/* Date - Mobile */}
        <p className="md:hidden text-xs font-bold text-zinc-400 mb-3 uppercase tracking-widest">
          {dates}
        </p>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Experience;