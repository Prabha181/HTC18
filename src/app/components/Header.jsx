"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ElegantHomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (currentSectionRef) observer.observe(currentSectionRef);
    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#f3e1d3] py-6 shadow-lg rounded-4xl mx-auto w-[95%]"
            : "bg-[#22160c] py-8 rounded-none w-full"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <nav className="flex justify-between items-center relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center z-10 relative h-10 sm:h-12"
            >
              <img
                src="/images/image.png"
                alt="HTC18 Logo"
                className="w-[120px] sm:w-[150px] h-[50px] sm:h-[70px] object-center"
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-auto max-w-[180px] sm:max-w-[200px] md:max-w-xs px-2 flex justify-center"
            >
              <div
                className={`font-serif text-base sm:text-lg md:text-2xl font-medium text-center truncate ${
                  scrolled ? "text-[#22160c]" : "text-white"
                }`}
              >
                HTC18 ENTERPRISES
              </div>
            </motion.div>

            {/* Spacer for desktop */}
            <div className="hidden md:flex opacity-0">
              <button className="text-xl">☰</button>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 ml-auto">
              {["Home", "About", "Products", "Why Us", "Contact"].map(
                (item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="relative group cursor-pointer"
                  >
                    <motion.a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className={`font-sans text-xs md:text-sm tracking-wider whitespace-nowrap inline-block ${
                        scrolled ? "text-[#22160c]" : "text-white"
                      }`}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        color: "#C9661E",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      {item}
                      <motion.span
                        className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#C9661E] origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      />
                    </motion.a>
                  </motion.li>
                )
              )}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 10 }}
              className={`md:hidden text-2xl z-50 ml-auto ${
                scrolled ? "text-[#22160c]" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </motion.button>
          </nav>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              y: mobileMenuOpen ? 0 : -20,
            }}
            transition={{ duration: 0.4 }}
            className={`md:hidden transition-all duration-300 ${
              mobileMenuOpen
                ? "max-h-96 opacity-100 pt-2"
                : "max-h-0 opacity-0 overflow-hidden"
            } ${scrolled ? "bg-[#f3e1d3]" : "bg-[#22160c]"} text-right pr-6 sm:pr-8 rounded-lg`}
          >
            <ul className="py-4 space-y-3 sm:space-y-4">
              {["Home", "About", "Products", "Why Us", "Contact"].map(
                (item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: mobileMenuOpen ? 1 : 0,
                      x: mobileMenuOpen ? 0 : 20,
                    }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      x: -8,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className={`font-sans block py-2 text-base sm:text-lg relative ${
                        scrolled ? "text-[#22160c]" : "text-white"
                      }`}
                      whileHover={{
                        color: "#C9661E",
                      }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="relative">
                        {item}
                        <motion.span
                          className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C9661E] origin-right"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
}
