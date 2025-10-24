"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    if (!currentSectionRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(currentSectionRef);
    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const staggerChildren = {
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const flipCard = {
    hidden: { opacity: 0, rotateY: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const pulseGlow = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-[#F9F5F2] relative overflow-hidden mx-auto px-4 sm:px-8 md:px-12"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-2 sm:top-6 right-2 sm:right-8 opacity-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={pulseGlow}
      >
        <svg
          width="100"
          height="100"
          className="sm:w-[160px] sm:h-[160px] text-[#C9661E]"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M100,0 C155.228,0 200,44.772 200,100 C200,155.228 155.228,200 100,200 C44.772,200 0,155.228 0,100 C0,44.772 44.772,0 100,0 Z M100,20 C56.863,20 20,56.863 20,100 C20,143.137 56.863,180 100,180 C143.137,180 180,143.137 180,100 C180,56.863 143.137,20 100,20 Z"
          ></path>
        </svg>
      </motion.div>

      {/* Floating Background Orbs */}
      <motion.div
        className="absolute top-1/4 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-[#C9661E]/10 to-[#22160c]/5 rounded-full blur-xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={pulseGlow}
      />
      <motion.div
        className="absolute bottom-1/4 -right-10 w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-l from-[#C9661E]/10 to-[#22160c]/5 rounded-full blur-xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={pulseGlow}
        transition={{ delay: 0.3 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C9661E]/30 rounded-full"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${30 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
            className="text-center lg:text-left"
          >
            <motion.div
              className="flex justify-center lg:justify-start items-center gap-3 mb-4"
              variants={fadeInUp}
            >
              <div className="w-6 sm:w-8 h-px bg-[#C9661E]/40"></div>
              <span className="font-montserrat text-xs sm:text-sm font-medium text-[#C9661E] tracking-widest uppercase">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#22160c] mb-4 sm:mb-6 italic font-light"
              variants={fadeInUp}
            >
              ABO<span className="text-[#C9661E]">U T U S</span>
            </motion.h2>

            <motion.p
              className="text-[#645958] text-sm sm:text-base md:text-lg font-montserrat font-light leading-relaxed mb-3 sm:mb-5"
              variants={fadeInUp}
            >
              HTC18 ENTERPRISES PRIVATE LIMITED, established in 2022 and based in
              Delhi, is a service-oriented company specializing in eco-friendly
              jute and cotton bags.
            </motion.p>

            <motion.p
              className="text-[#645958] text-sm sm:text-base md:text-lg font-montserrat font-light leading-relaxed"
              variants={fadeInUp}
            >
              We source directly from reliable manufacturers and supply to NGOs
              as well as D2C clients. Our mission is to provide eco-friendly,
              high-quality products that are both practical and sustainable.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-10"
              variants={fadeInUp}
            >
              {[
                { number: "50+", label: "Happy Clients" },
                { number: "1000+", label: "Bags Sold" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#C9661E] font-semibold mb-1">
                    {stat.number}
                  </div>
                  <div className="font-montserrat text-xs sm:text-sm text-[#645958] uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <div className="w-6 sm:w-8 h-0.5 bg-[#C9661E]/20 mx-auto mt-2 group-hover:bg-[#C9661E]/40 transition-colors"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {/* Vision Card */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border-t-4 border-[#C9661E] flex flex-col h-full group relative overflow-hidden"
              variants={flipCard}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9661E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-4 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#F9F5F2] to-white shadow-md mb-4 group-hover:shadow-lg transition-shadow"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-[#C9661E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </motion.div>
                  <h3 className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#C9661E] mb-2">
                    Vision
                  </h3>
                  <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#C9661E] to-transparent mx-auto"></div>
                </div>
                <p className="font-montserrat text-sm sm:text-base text-[#645958] text-center leading-relaxed">
                  To become a leading and trusted name in sustainable bag trading
                  by promoting eco-friendly alternatives that support
                  environmental responsibility and customer satisfaction.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border-t-4 border-[#22160c] flex flex-col h-full group relative overflow-hidden"
              variants={flipCard}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22160c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-4 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#F9F5F2] to-white shadow-md mb-4 group-hover:shadow-lg transition-shadow"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-[#22160c]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </motion.div>
                  <h3 className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#22160c] mb-2">
                    Mission
                  </h3>
                  <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#22160c] to-transparent mx-auto"></div>
                </div>
                <p className="font-montserrat text-sm sm:text-base text-[#645958] text-center leading-relaxed">
                  To deliver high-quality jute and cotton bags sourced from
                  reliable manufacturers, ensuring ethical practices and
                  consistent service that exceeds expectations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mt-10 sm:mt-16 md:mt-20 pt-6 sm:pt-10 border-t border-[#e8ddd1]"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <motion.div
            className="text-center mb-8 sm:mb-10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <div className="w-5 sm:w-6 h-px bg-[#22160c]/20"></div>
              <span className="font-montserrat text-xs sm:text-sm font-medium text-[#22160c] tracking-widest uppercase">
                Our Values
              </span>
              <div className="w-5 sm:w-6 h-px bg-[#22160c]/20"></div>
            </div>
            <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#22160c] italic">
              Our Core Values
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "Sustainability",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                desc: "Promoting eco-friendly alternatives for a greener future",
                color: "#C9661E",
                iconColor: "text-white",
              },
              {
                title: "Quality",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                desc: "Ensuring high-quality products that meet customer expectations",
                color: "#C9661E",
                iconColor: "text-white",
              },
              {
                title: "Ethics",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
                desc: "Maintaining ethical trading practices and fair margins",
                color: "#C9661E",
                iconColor: "text-white",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-5 sm:p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: value.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={value.iconColor}>{value.icon}</div>
                </motion.div>
                <h4 className="font-cormorant text-lg sm:text-xl text-[#C9661E] mb-2 sm:mb-3">
                  {value.title}
                </h4>
                <p className="font-montserrat text-xs sm:text-sm text-[#645958] leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
