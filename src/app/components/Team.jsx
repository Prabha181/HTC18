"use client";

import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    
    {
      name: "TANU VORA",
      role: "Director",
      // qualification: "Graduate",
    },
    {
      name: "NEERAJ MAHINDER VORA",
      role: "Managing Director",
      // qualification: "Graduate",
    },
    {
      name: "ROMILA VORA",
      role: "Director",
      // qualification: "Graduate",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-[#f8eacd] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-3rem] sm:top-[-4rem] md:top-[-5rem] left-[-3rem] sm:left-[-4rem] md:left-[-5rem] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#C9661E]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-[-4rem] sm:bottom-[-5rem] md:bottom-[-6rem] right-[-3rem] sm:right-[-3.5rem] md:right-[-4rem] w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#22160c]/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#22160c] mb-10 sm:mb-12 md:mb-14 lg:mb-16 italic font-semibold tracking-wide"
        >
          OUR <span className="text-[#C9661E]">TEAM</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-7 md:p-8 border border-[#f1e9e2]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#C9661E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>

              <div className="relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-5 sm:mb-6 rounded-full bg-gradient-to-tr from-[#C9661E]/20 to-[#22160c]/20 text-4xl sm:text-5xl text-[#C9661E] shadow-inner">
                👤
              </div>

              <div className="relative z-10">
                <h3 className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#22160c] mb-1.5 sm:mb-2 tracking-wide leading-tight">
                  {member.name}
                </h3>
                <p className="font-montserrat text-xs sm:text-sm text-[#C9661E] uppercase mb-1 tracking-wider">
                  {member.role}
                </p>
                {/* <p className="font-montserrat text-[11px] sm:text-xs text-[#645958]">
                  {member.qualification}
                </p> */}
              </div>

              <motion.div
                className="absolute bottom-4 sm:bottom-5 left-1/2 w-0 h-[2px] bg-[#C9661E] rounded-full group-hover:w-2/3 transition-all duration-500 -translate-x-1/2"
                layout
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;