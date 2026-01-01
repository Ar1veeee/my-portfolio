"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  thumbnail: string;
  title: string;
  link: { url: string; label: string };
  description: string;
  languageIcons: string[];
  index: number;
};

const Project = ({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
  index,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const opacity = useMotionValue(0);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPos);
    y.set(yPos);

    // Update Spotlight
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    opacity.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-5 transition-shadow hover:shadow-2xl dark:hover:shadow-blue-500/10"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(59, 130, 246, 0.06), transparent 40%)`,
        }}
      />

      <div
        style={{ transform: "translateZ(20px)" }}
        className="relative overflow-hidden rounded-[1.8rem] h-[240px] w-full mb-6 shadow-inner bg-zinc-100 dark:bg-zinc-800"
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
            FEATURED
          </div>
        </div>
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="space-y-4 px-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
            {title}
          </h3>
          <motion.a
            href={link.url}
            target="_blank"
            aria-label={`Open ${link.label}`}
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="w-10 h-10 flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full shadow-lg"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.a>
        </div>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {languageIcons.map((icon, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, scale: 1.1 }}
              className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm"
            >
              <Image
                src={icon}
                alt="tech"
                width={18}
                height={18}
                className="w-auto h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
