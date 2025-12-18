"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  icon: string;
  name: string;
  index: number;
};

const Skill = ({ icon, name, index }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      transition={{
        opacity: { duration: 0.2 },
        layout: { type: "spring", stiffness: 250, damping: 25 },
      }}
      whileHover={{ y: -8, rotateZ: index % 2 === 0 ? 1 : -1 }}
      className="group relative flex flex-col items-center justify-center p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-[2rem] hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-purple-500/30 transition-colors duration-500" />

      <div className="relative mb-3 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
        <Image
          width={32}
          height={32}
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain"
        />
      </div>

      <span className="text-xs font-bold tracking-tighter text-zinc-500 dark:text-zinc-400 group-hover:text-purple-500 uppercase transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default Skill;
