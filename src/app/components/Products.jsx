"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (currentSectionRef) observer.observe(currentSectionRef);
    return () => currentSectionRef && observer.unobserve(currentSectionRef);
  }, []);

  const products = [
    {
      name: "Grocery Bags",
      category: "Daily Use",
      image:
        "https://i.pinimg.com/736x/f2/00/26/f20026bce69b2f02567cf9378b9a03a4.jpg",
      description: "Eco-friendly bags for your daily shopping needs",
      color: "#8B4513",
    },
    {
      name: "Gifting Bags",
      category: "Premium",
      image:
        "https://i.pinimg.com/736x/3a/2b/1a/3a2b1af5443f9697842a3e69f49acb2c.jpg",
      description: "Elegant and sustainable gift packaging solutions",
      color: "#8B4513",
    },
    {
      name: "Cosmetics & Pouches",
      category: "Fashion",
      image:
        "https://i.pinimg.com/736x/11/45/ec/1145ec0ba41eaaf03dd2bd5833476120.jpg",
      description: "Stylish pouches for cosmetics and personal items",
      color: "#8B4513",
    },
    {
      name: "Wine & Packaging Bags",
      category: "Premium",
      image:
        "https://i.pinimg.com/736x/b7/dd/16/b7dd16e9ae1a63457becbb567aabb095.jpg",
      description: "Specialty bags for beverages and premium packaging",
      color: "#8B4513",
    },
    {
      name: "Cooler Lunch Bags",
      category: "Daily Use",
      image:
        "https://i.pinimg.com/1200x/68/a3/9a/68a39a910406c627a8d9ea80a03db430.jpg",
      description: "Insulated bags to keep your meals fresh",
      color: "#8B4513",
    },
    {
      name: "Jute Baskets",
      category: "Home",
      image:
        "https://i.pinimg.com/1200x/c3/b2/fc/c3b2fcdbf615c886d426cdd5812144cb.jpg",
      description: "Handcrafted baskets for storage and decor",
      color: "#8B4513",
    },
    {
      name: "Beach & Fashion Bags",
      category: "Fashion",
      image:
        "https://i.pinimg.com/736x/fc/e6/96/fce69628962e44df71d4aa2e7709af8f.jpg",
      description: "Trendy bags for fashion and leisure activities",
      color: "#8B4513",
    },
    {
      name: "Planter Bags",
      category: "Home",
      image:
        "https://i.pinimg.com/1200x/95/f8/32/95f83220828995a4c3f9e1b5490834f3.jpg",
      description: "Eco-friendly planters for your green space",
      color: "#8B4513",
    },
  ];

  const filters = ["All", "Daily Use", "Premium", "Fashion", "Home"];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section
      id="products"
      className="py-20 sm:py-24 bg-[#FAF7F5] relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#C9661E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Animated Shapes */}
      <motion.div
        className="absolute top-10 sm:top-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 border-4 border-[#C9661E] opacity-20"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 sm:bottom-40 left-4 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-[#C9661E] opacity-10 rounded-full"
        animate={{ y: [0, -30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl relative z-10"
        style={{ opacity, scale }}
      >
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ width: 0 }}
              animate={isVisible ? { width: "auto" } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-[#C9661E] font-montserrat text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold border-l-4 border-[#C9661E] pl-3 sm:pl-4">
                Sustainable Collection
              </span>
            </motion.div>

            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#22160c] mb-4 sm:mb-6 leading-tight">
              Our
              <motion.span
                className="block text-[#C9661E] italic"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Products
              </motion.span>
            </h2>

            <motion.div
              className="w-16 sm:w-20 h-1 bg-[#C9661E] mb-6"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <p className="font-montserrat text-[#645958] text-base sm:text-lg leading-relaxed">
              Discover our curated collection of eco-friendly bags and accessories,
              each piece thoughtfully designed to blend sustainability with style.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-3 justify-start sm:justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-3 font-montserrat text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#C9661E] text-white shadow-lg"
                    : "bg-white text-[#22160c] hover:bg-[#22160c] hover:text-white"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Product Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              className="group relative overflow-hidden cursor-pointer h-[320px] sm:h-[380px] md:h-[400px] rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${product.color}ee, ${product.color}88 50%, transparent)`,
                }}
              />

              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <motion.span
                    className="bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs py-1 sm:py-2 px-3 sm:px-4 font-montserrat uppercase tracking-wider"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {product.category}
                  </motion.span>

                  <motion.div
                    className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full flex items-center justify-center"
                    animate={{
                      rotate: hoveredProduct === index ? 360 : 0,
                      scale: hoveredProduct === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9661E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2 font-semibold">
                    {product.name}
                  </h3>
                  <p className="font-montserrat text-white/90 text-xs sm:text-sm mb-3 sm:mb-4">
                    {product.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredProduct === index ? 1 : 0,
                      y: hoveredProduct === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <button className="flex items-center gap-2 text-white font-montserrat text-xs sm:text-sm font-medium group/btn">
                      <span>Explore Product</span>
                      <motion.svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                          x: hoveredProduct === index ? 5 : 0,
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 sm:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 bg-[#22160c] p-6 sm:p-10 relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            className="absolute -right-10 -top-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#C9661E] opacity-10 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-white mb-2">
              Can't find what you're looking for?
            </h3>
            <p className="font-montserrat text-white/70 text-sm sm:text-base">
              Get in touch with our team for custom solutions
            </p>
          </div>

          <motion.a
            href="#contact"
            className="relative z-10 bg-[#C9661E] text-white py-3 sm:py-4 px-8 sm:px-10 font-montserrat text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-2 sm:gap-3 group/cta"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#22160c" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Us</span>
            <motion.svg
              className="w-4 sm:w-5 h-4 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;
