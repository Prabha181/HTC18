"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProblem, setActiveProblem] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (currentSectionRef) observer.observe(currentSectionRef);
    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef);
    };
  }, []);

  const problems = [
    "High Consumption of Plastic Bags",
    "Increased Landfill Waste",
    "High Carbon Footprint",
    "Limited access to affordable sustainable alternatives",
    "Fragmented market with inconsistent quality",
  ];

  const solutions = [
    "Sustainable, biodegradable & reusable jute and cotton options",
    "Wide variety available to cater to all market segments",
    "Cutting down on plastic completely",
    "Fashionable bags for all your needs",
    "Empowering local communities",
    "Direct manufacturer sourcing for cost-effectiveness",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center bg-[#22160c] justify-center relative py-16 sm:py-20 md:py-24 overflow-hidden px-4 sm:px-6 md:px-8"
    >
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9661E 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />

      <div className="container mx-auto relative z-10 max-w-6xl w-full">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-5 sm:mb-6 px-4 sm:px-5 py-2 rounded-full border border-[#C9661E]/30 bg-[#C9661E]/5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9661E] animate-pulse" />
            <span className="font-montserrat text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#C9661E] font-medium">
              Our Approach
            </span>
          </motion.div>

          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white italic leading-tight sm:leading-[1.2]">
            From <span className="text-[#C9661E]">Problem</span>
            <br className="hidden sm:block" />
            to <span className="text-[#C9661E]">Solution</span>
          </h2>

          <motion.div
            className="w-20 sm:w-24 h-0.5 mx-auto mt-4 sm:mt-6 bg-gradient-to-r from-transparent via-[#C9661E] to-transparent"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24 relative">
          {/* Problems Column */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div
              className="flex items-center gap-3 mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#C9661E]/10 border border-[#C9661E]/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9661E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-white italic">
                The Problem
              </h3>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                    activeProblem === index
                      ? "bg-[#C9661E]/10 border border-[#C9661E]/40"
                      : "bg-white/5 border border-white/10 hover:bg-white/8 hover:border-[#C9661E]/20"
                  }`}
                  variants={fadeInUp}
                  onClick={() => setActiveProblem(index)}
                  whileHover={{ x: 6 }}
                >
                  {activeProblem === index && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9661E] rounded-r"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C9661E]/20 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C9661E]" />
                    </span>
                    <p className="font-montserrat text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {problem}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Elegant Separator - Desktop */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-96">
            <motion.div
              className="relative w-full h-full"
              initial={{ scaleY: 0 }}
              animate={isVisible ? { scaleY: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9661E]/40 to-transparent" />

              {isVisible && (
                <>
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C9661E] shadow-lg shadow-[#C9661E]/50"
                    initial={{ top: 0 }}
                    animate={{ top: "calc(100% - 8px)" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full border-2 border-[#C9661E]/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </>
              )}

              <svg
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#C9661E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>

          {/* Solutions Column */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div
              className="flex items-center gap-3 mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#C9661E]/10 border border-[#C9661E]/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9661E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-white italic">
                Our Solution
              </h3>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-[#C9661E]/30 backdrop-blur-sm transition-all duration-300"
                  variants={fadeInUp}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1 + 0.5, duration: 0.6 },
                  }}
                  whileHover={{ x: -6 }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9661E] rounded-r" />

                  <div className="flex items-start gap-3 sm:gap-4 pl-2 sm:pl-3">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C9661E]/20 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9661E]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <p className="font-montserrat text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Separator */}
        <div className="lg:hidden my-12 sm:my-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="relative flex flex-col items-center"
          >
            <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-[#C9661E] to-transparent" />
            <motion.svg
              className="w-6 h-6 text-[#C9661E] my-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </motion.svg>
            <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-[#C9661E] via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20 md:mt-24 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed">
              Join us in making a{" "}
              <span className="text-[#C9661E] font-medium">
                sustainable difference
              </span>{" "}
              with eco-friendly alternatives
            </p>

            <motion.a
              href="#products"
              className="group inline-flex items-center gap-2 sm:gap-3 bg-[#C9661E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-medium uppercase tracking-[0.1em] sm:tracking-[0.15em] text-xs sm:text-sm hover:bg-[#b45a18] transition-all duration-300 shadow-lg shadow-[#C9661E]/20"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Products
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
