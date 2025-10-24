"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const TargetMarkets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const markets = [
    { name: "Super Markets", icon: "🛒" },
    { name: "Wineries", icon: "🍷" },
    { name: "Retail Chains", icon: "🏪" },
    { name: "Agricultural Industry", icon: "🌾" },
    { name: "Cosmetic Brands", icon: "💄" },
    { name: "NGOs", icon: "🤝" },
    { name: "Small & Large Companies", icon: "🏢" },
    { name: "Event Organizers", icon: "🎪" },
    { name: "D2C Customers", icon: "👥" },
    { name: "Corporate CSR", icon: "🌱" },
    { name: "Bag Stores", icon: "🛍️" },
    { name: "Eco Campaigners", icon: "🌍" },
  ];

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span 
            className="inline-block text-[#C9661E] font-montserrat text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.span>

          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#22160c] mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Target Markets
          </motion.h2>

          <motion.div
            className="w-14 sm:w-20 h-0.5 sm:h-1 bg-[#C9661E] mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="font-montserrat text-[#645958] text-sm sm:text-base md:text-lg max-w-md sm:max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Partnering with diverse industries to deliver sustainable packaging solutions
          </motion.p>
        </div>

        {/* Markets Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mb-12 sm:mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {markets.map((market, index) => (
            <motion.div
              key={index}
              className="bg-[#FAF7F5] rounded-xl p-4 sm:p-6 text-center cursor-pointer border border-transparent hover:border-[#C9661E] transition-all duration-300"
              variants={cardVariant}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 30px rgba(201, 102, 30, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3"
                animate={hoveredCard === index ? { scale: 1.15 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {market.icon}
              </motion.div>
              
              <p className="font-montserrat text-xs sm:text-sm md:text-base text-[#22160c] font-medium leading-snug">
                {market.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-[#C9661E] text-white py-3 sm:py-4 px-8 sm:px-10 rounded-lg font-montserrat font-semibold uppercase tracking-wider text-xs sm:text-sm hover:bg-[#b45a18] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Partner With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetMarkets;
