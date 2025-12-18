"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Reveal from "./Reveal";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { top, left } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("aliefarfn.dev@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Reveal initialY={40} delay={0.5}>
      <section
        ref={ref}
        id="contact"
        onMouseMove={handleMouseMove}
        className="relative mx-6 mb-16 overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-xl md:mx-20 md:p-16 group"
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(124, 58, 237, 0.15), transparent 80%)`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="max-w-[500px] text-4xl font-black leading-tight tracking-tighter text-zinc-900 dark:text-white md:text-6xl">
              Want me on your team? <br />
              <span className="text-purple-600 dark:text-purple-400">
                Let&apos;s make it happen
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl">
              Currently available for new opportunities and collaborations.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:items-end">
            <div className="relative">
              <motion.button
                onClick={copyToClipboard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 rounded-2xl bg-zinc-900 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
              >
                {isCopied ? "Email Copied!" : "Let's get in touch"}
                <Image
                  width={24}
                  height={24}
                  src="/mail_icon.svg"
                  alt="Mail Icon"
                  className={`${
                    isCopied ? "hidden" : "block"
                  } dark:invert w-auto h-auto`}
                />
              </motion.button>

              <AnimatePresence>
                {isCopied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-bold text-purple-600 dark:text-purple-400"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  id: "github",
                  href: "https://github.com/Ar1veeee",
                  icon: "/github_logo",
                },
                {
                  id: "linkedin",
                  href: "https://linkedin.com/in/aliefarfn",
                  icon: "/linkedin_logo",
                },
                {
                  id: "instagram",
                  href: "https://instagram.com/aliefarfn",
                  icon: "/instagram_logo",
                },
              ].map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm transition-colors hover:border-purple-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-400"
                >
                  <Image
                    src={`${social.icon}.svg`}
                    alt={social.id}
                    height={28}
                    width={28}
                    className="dark:invert w-8 h-8"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-zinc-100 pt-8 dark:border-zinc-800 md:flex-row">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Alief Arifin &bull; All Rights
            Reserved
          </p>
        </div>
      </section>
    </Reveal>
  );
};

export default Contact;
