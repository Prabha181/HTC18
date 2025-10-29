"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  const links = ["Home", "About", "Products", "Business Model", "Contact"];
  const socialLinks = [
    { Icon: Facebook, label: "Facebook", color: "#1877F2" },
    { Icon: Instagram, label: "Instagram", color: "#E4405F" },
    { Icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0A0908] via-[#0E0C0A] to-[#1a1410] scroll-mt-[120px]"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9661E]/20 blur-[200px] rounded-full"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F3E1D3]/10 blur-[220px] rounded-full"
      />

      {/* Decorative Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
          className="absolute w-2 h-2 bg-[#C9661E]/40 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center pt-24 pb-16 md:pt-20 md:pb-20 lg:pt-32 lg:pb-24"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center justify-center gap-2.5 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#C9661E]" />
            </motion.div>
            <span className="font-montserrat text-xs md:text-sm uppercase tracking-[0.3em] text-[#C9661E]">
              Connect With Us
            </span>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-[#F3E1D3] mb-6 md:mb-8 leading-[1.15] px-4"
          >
            Let's Create{" "}
            <span className="relative inline-block">
              <span className="text-[#C9661E] font-semibold">Together</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C9661E] to-transparent"
              />
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="font-montserrat text-[#D1C7C0] max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed px-4"
          >
            Whether it's a collaboration, partnership, or product inquiry — we're here to
            turn your vision into reality with sustainable innovation.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-10 lg:gap-16 xl:gap-20 pb-16 md:pb-20">
          {/* Brand Section */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center z-10 relative h-10 sm:h-12 mb-5"
            >
              <img
                src="/images/image.png"
                alt="HTC18 Logo"
                className="sm:w-[150px] h-[50px] sm:h-[70px] object-center "
              />
            </motion.div>

            <p className="font-montserrat text-[#BFB5AF] text-base leading-relaxed mb-10">
              Pioneering eco-conscious innovation. We blend sustainability with exceptional
              craftsmanship to create products that matter for both people and planet.
            </p>

            {/* Replaced Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-montserrat text-sm font-semibold text-[#F3E1D3] mb-4 uppercase tracking-wider">
                Our Commitment
              </h4>
              <p className="font-montserrat text-sm text-[#C9661E] mb-3">
                We are dedicated to creating sustainable digital experiences that inspire and empower.
              </p>
              <p className="font-montserrat text-xs text-[#8A7F78] leading-relaxed">
                From design to deployment, every step we take focuses on innovation, quality, and responsibility.
                Join us as we continue to shape a greener, more creative digital future together.
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-3xl md:text-4xl font-cormorant text-[#F3E1D3] mb-8">
              Explore
            </h3>
            <ul className="space-y-4">
              {links.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={scaleIn}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center gap-3 text-[#CFC6BE] transition-colors duration-300 group-hover:text-[#C9661E] font-montserrat text-base"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: 20 }}
                      className="h-[2px] bg-[#C9661E] rounded-full transition-all duration-300"
                    />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-3xl md:text-4xl font-cormorant text-[#F3E1D3] mb-8">
              Get in Touch
            </h3>
            <div className="space-y-5">
              <motion.div
                whileHover={{ x: 5, backgroundColor: "rgba(201, 102, 30, 0.05)" }}
                className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-0.5 p-2.5 bg-[#C9661E]/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#C9661E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[#C9661E] font-semibold block mb-1.5 font-montserrat text-sm uppercase tracking-wider">
                    Address
                  </span>
                  <span className="text-[#CFC6BE] font-montserrat text-base block">
                    Delhi, India
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5, backgroundColor: "rgba(201, 102, 30, 0.05)" }}
                className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-0.5 p-2.5 bg-[#C9661E]/20 rounded-lg">
                  <Phone className="w-5 h-5 text-[#C9661E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[#C9661E] font-semibold block mb-1.5 font-montserrat text-sm uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href="tel:+919311707772"
                    className="text-[#CFC6BE] hover:text-[#C9661E] transition-colors font-montserrat text-base block"
                  >
                    +91 93117 07772
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5, backgroundColor: "rgba(201, 102, 30, 0.05)" }}
                className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-0.5 p-2.5 bg-[#C9661E]/20 rounded-lg">
                  <Mail className="w-5 h-5 text-[#C9661E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[#C9661E] font-semibold block mb-1.5 font-montserrat text-sm uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:infohtc18@gmail.com"
                    className="text-[#CFC6BE] hover:text-[#C9661E] transition-colors font-montserrat text-base block break-all"
                  >
                    infohtc18@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative mb-8 h-[2px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9661E] to-transparent" />
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3E1D3] to-transparent opacity-50"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-6 md:pb-8">
          {/* Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 md:gap-5"
          >
            {socialLinks.map(({ Icon, label, color }, index) => (
              <motion.a
                key={index}
                href="#"
                custom={index}
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: `0px 6px 20px ${color}40`,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
                className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center 
                 rounded-2xl bg-gradient-to-br from-[#1a1410] to-[#0E0C0A] 
                 border border-[#C9661E]/40 text-[#C9661E] overflow-hidden group"
                aria-label={label}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${color}25 0%, transparent 70%)`,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  whileHover={{
                    filter: "brightness(1.4) drop-shadow(0 0 6px rgba(201,102,30,0.5))",
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: `conic-gradient(from 180deg, transparent, ${color}80, transparent)`,
                    maskImage: "linear-gradient(black, black)",
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-[#A5A1A0] tracking-wide text-center md:text-right font-montserrat"
          >
            © {new Date().getFullYear()}{" "}
            <motion.span
              whileHover={{
                color: "#C9661E",
                textShadow: "0 0 10px rgba(201, 102, 30, 0.8)",
              }}
              transition={{ duration: 0.3 }}
              className="font-semibold"
            >
              HTC18
            </motion.span>{" "}
            — Crafted with passion & sustainability
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
