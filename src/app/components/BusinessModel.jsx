"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BusinessModel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="business-model"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#fffdfa] relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Decorative element */}
      <div className="absolute top-2 sm:top-4 md:top-6 lg:top-10 left-2 sm:left-4 md:left-6 lg:left-10 opacity-5">
        <svg
          width="80"
          height="80"
          viewBox="0 0 200 200"
          className="text-[#C9661E] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
        >
          <path
            fill="currentColor"
            d="M100,0 C155.228,0 200,44.772 200,100 C200,155.228 155.228,200 100,200 C44.772,200 0,155.228 0,100 C0,44.772 44.772,0 100,0 Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#22160c] italic font-light mb-3 sm:mb-4 px-2"
          >
            OUR <span className="text-[#C9661E]">BUSINESS MODEL</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-montserrat text-[#645958] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2"
          >
            Our business model is centered on sustainable growth through diversified
            revenue streams and strategic expansion initiatives.
          </motion.p>
        </motion.div>

        {/* Business Cards */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
        >
          {/* Revenue Streams */}
          <motion.div
            variants={cardVariant}
            className="bg-white p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl border-t-4 border-[#C9661E] transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#C9661E] text-center mb-5 sm:mb-6">
              Revenue Streams
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-[#645958] text-sm sm:text-base font-montserrat">
              {[
                "E-commerce trade",
                "B2C product sales and customization",
                "B2B bulk order processing",
                "Bulk NGO orders for events and campaigns",
                "Customized corporate and event orders",
                "Institutional contracts for regular supply",
                "Trading margin from manufacturer purchases",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-2 sm:gap-2.5"
                >
                  <span className="text-[#C9661E] text-base sm:text-lg flex-shrink-0 mt-0.5">•</span>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Growth Strategy */}
          <motion.div
            variants={cardVariant}
            className="bg-white p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl border-t-4 border-[#22160c] transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#22160c] text-center mb-5 sm:mb-6">
              Growth Strategy
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-[#645958] text-sm sm:text-base font-montserrat">
              {[
                "Streamlining production processes",
                "Increasing sales through digital platforms",
                "Exploring untapped domestic markets",
                "Expanding international trade presence",
                "Funding technological advancements",
                "Targeted outreach to NGOs and CSR programs",
                "Participation in green expos and trade fairs",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-2 sm:gap-2.5"
                >
                  <span className="text-[#22160c] text-base sm:text-lg flex-shrink-0 mt-0.5">•</span>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel;