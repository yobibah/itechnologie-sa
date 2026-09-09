"use client";

import { motion } from "framer-motion";
import { Award, Handshake, Lightbulb, ShieldCheck } from "lucide-react";

export default function ExpertiseBarnner() {
  const items = [
    {
      Icon: Award,
      title: "Expertise",
      desc: "Une équipe qualifiée et expérimentée.",
    },
    {
      Icon: Lightbulb,
      title: "Innovation",
      desc: "Des technologies adaptées aux enjeux de demain.",
    },
    {
      Icon: Handshake,
      title: "Proximité",
      desc: "Un accompagnement au plus proche de nos clients.",
    },
    {
      Icon: ShieldCheck,
      title: "Fiabilité",
      desc: "Des solutions robustes, sécurisées et durables.",
    },
  ];

  // Variants pour l’animation en cascade des cartes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="relative w-full overflow-hidden bg-gray-50 px-2 py-16 sm:px-4 lg:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
  
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.15]
          [background-image:radial-gradient(#6b7280_1.5px,transparent_1.5px)]
          [background-size:32px_32px]
        "
      />

      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent" />


      <motion.div
        className="relative z-10 mx-auto mb-14 max-w-3xl text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        {/* <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-red-600" />
          <span className="text-xs font-bold uppercase tracking-[4px] text-red-600">
            Nos valeurs
          </span>
          <span className="h-px w-10 bg-red-600" />
        </div> */}

        <h1 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
          Nos valeurs ajoutées
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
          Nous combinons expertise, innovation et proximité pour proposer des
          solutions technologiques adaptées aux enjeux de chaque organisation.
        </p>
      </motion.div>


      <motion.div
        className="relative z-10 grid w-full grid-cols-1 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => {
          const Icon = item.Icon;

          return (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.75)" }}
              transition={{ duration: 0.25 }}
              className="
                group
                relative
                w-full
                border-b
                border-gray-300
                p-8
                transition-all
                duration-300
                md:p-10
              "
            >
       
              <div className="absolute right-8 top-8 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors duration-300 group-hover:bg-red-600" />
                <span className="font-mono text-[11px] tracking-widest text-gray-400 group-hover:text-red-600">
                  0{index + 1}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-7 flex items-center gap-4">
                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    border
                    border-gray-300
                    bg-white
                    text-gray-700
                    transition-all
                    duration-300
                    group-hover:border-red-600
                    group-hover:text-red-600
                  "
                >
                  <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-red-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-red-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon size={25} strokeWidth={1.7} />
                </div>
                <div className="h-px w-8 bg-gray-300 transition-all duration-300 group-hover:w-14 group-hover:bg-red-600" />
              </div>

       
              <h2
                className="
                  mb-3
                  text-xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  transition-colors
                  duration-300
                  group-hover:text-red-600
                "
              >
                {item.title}
              </h2>

    
              <p className="max-w-md text-sm leading-6 text-gray-500">
                {item.desc}
              </p>

             
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />

              <span className="absolute bottom-4 right-8 font-mono text-[9px] uppercase tracking-[2px] text-gray-300 transition-colors group-hover:text-red-400">
                SYS / 0{index + 1}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}