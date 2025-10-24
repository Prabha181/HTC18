"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
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

  const features = [
    {
      title: "Premium Quality",
      desc: "Every product meets the highest standards with rigorous quality control and testing.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Cost Effective",
      desc: "Direct sourcing ensures competitive pricing without compromising on quality.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Custom Design",
      desc: "Tailored solutions crafted by our expert in-house design team for your brand.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Eco-Friendly",
      desc: "100% sustainable and biodegradable materials for a better tomorrow.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Versatile Designs",
      desc: "Stylish and functional bags suitable for every occasion and lifestyle.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Customer Care",
      desc: "Dedicated support and guaranteed satisfaction with every purchase.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "2,500+", label: "Happy Clients" },
    { number: "50,000+", label: "Products Sold" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 bg-[#22160c] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-[#C9661E] font-montserrat text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Our Advantages
          </motion.span>

          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            className="w-12 sm:w-16 h-0.5 bg-[#C9661E] mx-auto mb-5 sm:mb-6"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 64 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          <motion.p
            className="font-montserrat text-gray-300 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Committed to delivering excellence through quality, innovation, and sustainable practices
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <motion.div
                className="h-full bg-white p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F3E1D3] rounded-lg flex items-center justify-center text-[#C9661E] mb-4 sm:mb-5 group-hover:bg-[#C9661E] group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="font-cormorant text-xl sm:text-2xl text-[#22160c] font-semibold mb-2 sm:mb-3">
                  {feature.title}
                </h3>

                <p className="font-montserrat text-[#645958] text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>

                <motion.div
                  className="h-0.5 bg-[#C9661E] mt-4 sm:mt-5"
                  initial={{ width: 0 }}
                  animate={hoveredFeature === index ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-[#FAF7F5] rounded-2xl p-6 sm:p-10 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <motion.div
                  className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#C9661E] font-bold mb-1 sm:mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.number}
                </motion.div>
                <div className="font-montserrat text-xs sm:text-sm text-[#645958] uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="bg-[#C9661E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#b45a18] transition-colors shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
