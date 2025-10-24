"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Text reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden px-0"
    >
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#22160c] bg-opacity-70"></div>
      </motion.div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(201, 102, 30, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(201, 102, 30, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(201, 102, 30, 0.15) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Enhanced floating eco elements with varied animations */}
      <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#C9661E] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
            animate={{ 
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            {i % 3 === 0 ? "♻" : i % 3 === 1 ? "🌿" : "🍃"}
          </motion.div>
        ))}
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 z-1">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#f3e1d3] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10"
        style={{ opacity }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content with staggered animations */}
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div 
              variants={itemVariants}
              className="font-serif text-[#f3e1d3] text-4xl md:text-5xl lg:text-6xl mb-4 tracking-widest overflow-hidden"
            >
              {["S", "U", "S", "T", "A", "I", "N", "A", "B", "L", "E"].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + i * 0.05,
                    ease: [0.6, 0.05, 0.01, 0.9]
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="font-serif text-[#C9661E] text-5xl md:text-6xl lg:text-7xl mb-6 italic font-light"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                SOLUTIONS
              </motion.span>
              <motion.span 
                className="block text-3xl md:text-4xl mt-2"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                FOR A GREENER TOMORROW
              </motion.span>
            </motion.div>

            <motion.div
              className="w-20 h-0.5 bg-[#C9661E] mb-8 mx-auto lg:mx-0"
              initial={{ width: 0, opacity: 0 }}
              animate={isVisible ? { width: 80, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            ></motion.div>

            <motion.p 
              variants={itemVariants}
              className="font-sans text-lg md:text-xl text-[#DDDDDD] mb-10 tracking-wider font-light"
            >
              Eco-friendly, biodegradable jute and cotton bags crafted to perfection
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#products"
                className="inline-flex items-center border-2 border-[#F2E9E3] text-[#F2E9E3] py-3 px-8 font-sans font-light uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#F2E9E3] hover:text-[#22160c] group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background on hover */}
                <motion.span
                  className="absolute inset-0 bg-[#F2E9E3]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Product Image with enhanced animations */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.div 
              className="relative w-80 h-96 md:w-96 md:h-[28rem] overflow-hidden rounded-lg shadow-2xl"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="https://ahavahcrafts.com/cdn/shop/files/Kalamkaribag.jpg?v=1711165284"
                alt="Eco-friendly jute bags"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22160c] via-transparent to-transparent opacity-70"></div>

              {/* Floating tag with enhanced animation */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#C9661E] text-white px-4 py-2 rounded shadow-lg font-sans font-medium"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                Eco-Friendly
              </motion.div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                whileHover={{ 
                  opacity: [0, 0.3, 0],
                  x: ["-100%", "100%"]
                }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            {/* Decorative elements with enhanced animations */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-14 h-14 border-2 border-[#C9661E] rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            ></motion.div>
            
            <motion.div
              className="absolute -top-6 -right-6 w-10 h-10 border border-[#f3e1d3] rounded-full"
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            ></motion.div>

            {/* Additional decorative dots */}
            <motion.div
              className="absolute bottom-10 -right-3 w-4 h-4 bg-[#C9661E] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>

            <motion.div
              className="absolute top-10 -left-3 w-3 h-3 bg-[#f3e1d3] rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scrolling indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-[#f3e1d3] rounded-full flex justify-center relative overflow-hidden"
          whileHover={{ borderColor: "#C9661E" }}
        >
          <motion.div 
            className="w-1 h-3 bg-[#f3e1d3] rounded-full mt-2"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </motion.div>
        <motion.p 
          className="text-[#f3e1d3] text-xs mt-2 font-sans tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </section>
  );
}