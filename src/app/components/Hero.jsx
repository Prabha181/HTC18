"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 overflow-hidden px-0"
    >
      {/* Enhanced Background with parallax and scale */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#22160c]/80 via-[#22160c]/70 to-[#22160c]/90"></div>
      </motion.div>

      {/* Multiple animated gradient overlays for depth */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(201, 102, 30, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(201, 102, 30, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(201, 102, 30, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(201, 102, 30, 0.2) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Secondary gradient layer */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 70% 30%, rgba(242, 233, 227, 0.1) 0%, transparent 40%)",
            "radial-gradient(circle at 30% 70%, rgba(242, 233, 227, 0.1) 0%, transparent 40%)",
            "radial-gradient(circle at 70% 30%, rgba(242, 233, 227, 0.1) 0%, transparent 40%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Enhanced floating eco elements with mouse parallax */}
      <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#C9661E] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 20}px`,
              x: mousePosition.x * (i % 3) * 0.5,
              y: mousePosition.y * (i % 3) * 0.5,
            }}
            animate={{ 
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 15, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            {i % 4 === 0 ? "♻" : i % 4 === 1 ? "🌿" : i % 4 === 2 ? "🍃" : "🌱"}
          </motion.div>
        ))}
      </div>

      {/* Enhanced particle effects with varied sizes */}
      <div className="absolute inset-0 z-1">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 2 === 0 ? "#f3e1d3" : "#C9661E",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, -300],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Ambient light effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#C9661E] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#f3e1d3] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10"
        style={{ opacity }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          {/* Text Content with enhanced animations */}
          <motion.div
            className="max-w-2xl text-center lg:text-left w-full lg:w-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#C9661E]/20 border border-[#C9661E]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 backdrop-blur-sm"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-[#C9661E] text-sm sm:text-base"
              >
                ♻
              </motion.span>
              <span className="text-[#f3e1d3] text-xs sm:text-sm tracking-wider">100% Eco-Friendly</span>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="font-serif text-[#f3e1d3] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 tracking-widest overflow-hidden"
            >
              {["S", "U", "S", "T", "A", "I", "N", "A", "B", "L", "E"].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + i * 0.05,
                    ease: [0.6, 0.05, 0.01, 0.9]
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    color: "#C9661E",
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block cursor-default"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="font-serif text-[#C9661E] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 italic font-light"
            >
              <motion.span
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                animate={isVisible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="inline-block bg-gradient-to-r from-[#C9661E] to-[#f3e1d3] bg-clip-text text-transparent"
              >
                SOLUTIONS
              </motion.span>
              <motion.span 
                className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-[#f3e1d3]"
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={isVisible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                FOR A GREENER TOMORROW
              </motion.span>
            </motion.div>

            <motion.div
              className="h-0.5 bg-gradient-to-r from-transparent via-[#C9661E] to-transparent mb-6 sm:mb-8 mx-auto lg:mx-0"
              initial={{ width: 0, opacity: 0 }}
              animate={isVisible ? { width: "100%", opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.3 }}
            ></motion.div>

            <motion.p 
              variants={itemVariants}
              className="font-sans text-base sm:text-lg md:text-xl text-[#DDDDDD] mb-8 sm:mb-10 tracking-wider font-light leading-relaxed px-4 sm:px-0"
            >
              Eco-friendly, biodegradable jute and cotton bags crafted to perfection. 
              <motion.span 
                className="block mt-2 text-[#C9661E] font-medium"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
              >
                Join the sustainable revolution.
              </motion.span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <motion.a
                href="#products"
                className="inline-flex items-center justify-center border-2 border-[#F2E9E3] text-[#F2E9E3] py-3 sm:py-4 px-6 sm:px-10 font-sans font-light uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:bg-[#F2E9E3] hover:text-[#22160c] group relative overflow-hidden shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-[#F2E9E3]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <motion.svg
                    className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
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

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#C9661E] text-white py-3 sm:py-4 px-6 sm:px-10 font-sans font-light uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:bg-[#a85418] relative overflow-hidden shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Enhanced Product Image with 3D effects */}
          <motion.div
            className="relative w-full sm:w-auto mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            style={{
              x: mousePosition.x * -0.8,
              y: mousePosition.y * -0.8,
            }}
          >
            <motion.div 
              className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-96 lg:w-96 lg:h-[28rem] overflow-hidden rounded-2xl shadow-2xl mx-auto"
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 2 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="https://ahavahcrafts.com/cdn/shop/files/Kalamkaribag.jpg?v=1711165284"
                alt="Eco-friendly jute bags"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22160c] via-transparent to-transparent opacity-60"></div>    

              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-0"
                animate={{ 
                  x: ["-200%", "200%"],
                  opacity: [0, 0.2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>

            {/* Enhanced decorative elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#C9661E] rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <motion.div
                className="absolute inset-2 bg-[#C9661E] rounded-full opacity-20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#f3e1d3] rounded-full"
              animate={{ 
                rotate: -360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            >
              <motion.div
                className="absolute inset-1 bg-[#f3e1d3] rounded-full opacity-20"
                animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Additional animated decorative elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`deco-${i}`}
                className="absolute rounded-full hidden sm:block"
                style={{
                  width: `${8 + i * 2}px`,
                  height: `${8 + i * 2}px`,
                  background: i % 2 === 0 ? "#C9661E" : "#f3e1d3",
                  top: `${20 + i * 15}%`,
                  [i % 2 === 0 ? "right" : "left"]: "-8px",
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2 + i * 0.3, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scrolling indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.3 }}
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div 
          className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-[#f3e1d3] rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm bg-[#22160c]/20"
          whileHover={{ borderColor: "#C9661E", backgroundColor: "rgba(201, 102, 30, 0.1)" }}
        >
          <motion.div 
            className="w-1 h-3 sm:w-1.5 sm:h-4 bg-gradient-to-b from-[#C9661E] to-[#f3e1d3] rounded-full mt-2"
            animate={{ 
              y: [0, 18, 0], 
              opacity: [1, 0.3, 1],
              scaleY: [1, 1.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </motion.div>
        <motion.p 
          className="text-[#f3e1d3] text-xs mt-2 sm:mt-3 font-sans tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL
        </motion.p>
      </motion.div>
    </section>
  );
}