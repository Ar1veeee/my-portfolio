"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  image: string;
  name: string;
  role: string;
  description: string;
};

const Testimonial = ({ image, name, role, description }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative flex flex-col gap-6 w-[300px] sm:w-[400px] p-6 sm:p-8 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-[2rem] shadow-xl shadow-black/5 dark:shadow-nonegroup transition-all duration-300"
    >
      {/* Quote Icon Decoration */}
      <span className="absolute top-6 right-8 text-6xl text-purple-500/10 dark:text-purple-400/10 font-serif leading-none select-none">
        “
      </span>

      <p className="relative z-10 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base italic leading-relaxed">
        &quot;{description}&quot;
      </p>

      <div className="flex gap-4 items-center mt-auto border-t border-zinc-100 dark:border-zinc-800 pt-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/20">
          <Image src={image} alt={name} fill sizes="48px" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
            {name}
          </p>
          <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium lowercase">
            @{role.replace(/\s+/g, "")}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
