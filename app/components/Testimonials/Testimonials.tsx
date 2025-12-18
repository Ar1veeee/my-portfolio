"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import testimonials from "@/data/testimonials.json";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplikasi data agar tidak ada celah saat scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <SectionContainer id="testimonials">
      <div className="section-contents relative py-10">
        <div className="mb-16 px-6">
          <SectionHeader
            plainText="📢 Check out these"
            highlightText="Testimonials"
          />
        </div>

        {/* Fitur Unik: Smooth Infinite Marquee */}
        <div 
          className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Edge Fading Effect */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-50 dark:from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-50 dark:from-[#0a0a0a] to-transparent z-10" />

          <motion.div
            animate={{
              x: isHovered ? "-33.33%" : "-66.66%",
            }}
            transition={{
              duration: isHovered ? 60 : 30, // Melambat saat di-hover
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max px-6"
          >
            {duplicatedTestimonials.map((testimonial, id) => (
              <Testimonial
                key={id}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                description={testimonial.description}
              />
            ))}
          </motion.div>
        </div>

        {/* Decorative Background Labels */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-4 opacity-10 dark:opacity-5 select-none pointer-events-none">
            <span className="text-8xl font-black whitespace-nowrap uppercase">Trusted by Partners • Feedback • </span>
            <span className="text-8xl font-black whitespace-nowrap uppercase">Trusted by Partners • Feedback • </span>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;