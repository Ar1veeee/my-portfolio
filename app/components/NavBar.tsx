"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experiences", label: "Experiences" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrollingManual = useRef(false);

  useEffect(() => {
    const handleScrollEffects = () => {
      setIsScrolled(window.scrollY > 20);
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      const isAtTop = window.scrollY <= 100;
      if (!isScrollingManual.current) {
        if (isAtTop) setActiveSection("home");
        else if (isAtBottom) setActiveSection("contact");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingManual.current) return;
        const bestEntry = entries.reduce((prev, curr) => {
          if (!curr.isIntersecting) return prev;
          return curr.intersectionRatio > (prev?.intersectionRatio || 0) ? curr : prev;
        }, null as IntersectionObserverEntry | null);

        if (bestEntry?.isIntersecting) setActiveSection(bestEntry.target.id);
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: [0.1, 0.5, 0.8] }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScrollEffects);
    return () => {
      window.removeEventListener("scroll", handleScrollEffects);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        isScrollingManual.current = true;
        setActiveSection(id);
        const offset = 80;
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        setTimeout(() => { isScrollingManual.current = false; }, 1000);
      }
    }, 250);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] flex flex-col items-center p-4 md:p-6 pointer-events-none">
      <LayoutGroup id="navbar-group">
        <div className="w-1/2 md:w-full max-w-[350px] md:max-w-fit pointer-events-auto">
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`flex bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 px-4 py-2 rounded-[2.5rem] shadow-2xl transition-all duration-500 ${
              isScrolled ? "shadow-purple-500/10" : ""
            }`}
          >
            {/* Mobile View Content */}
            <div className="flex md:hidden w-full items-center justify-between px-2">
              <span className="font-black text-zinc-900 dark:text-white tracking-tighter italic">
                Aliefarfn
              </span>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 bg-zinc-200/50 dark:bg-zinc-800 rounded-full flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-zinc-900 dark:bg-white rounded-full origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    className="w-full h-0.5 bg-zinc-900 dark:bg-white rounded-full"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-zinc-900 dark:bg-white rounded-full origin-center"
                  />
                </div>
              </button>
            </div>

            {/* Desktop View Menu */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-5 py-2 text-sm font-bold transition-colors duration-300 z-10 ${
                      activeSection === item.id
                        ? "text-white dark:text-black"
                        : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-full -z-10 shadow-lg"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="absolute top-full left-0 right-0 mt-3 md:hidden"
              >
                <ul className="flex flex-col gap-1 bg-white/90 dark:bg-zinc-900/95 backdrop-blur-2xl border border-white/20 dark:border-zinc-800/50 rounded-[2rem] p-2 shadow-2xl">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-center py-4 rounded-[1.8rem] text-sm font-bold transition-all ${
                          activeSection === item.id
                            ? "bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md"
                            : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </header>
  );
};

export default NavBar;