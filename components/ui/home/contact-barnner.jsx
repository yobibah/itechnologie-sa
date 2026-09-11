"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contactbarnner() {
  const router = useRouter();

  return (
    <motion.section
      className="w-full px-2 py-8 sm:px-4 lg:px-6 mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-red-950 via-red-900 to-red-800 px-6 py-8 sm:px-10 sm:py-10 lg:px-14">

        <motion.div
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-700/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-red-500/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          
    
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-200">
              Notre expertise à votre service
            </p>

            <h2 className="mb-3 text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">
              Plus de 9 ans d'expérience au service
              <br className="hidden sm:block" />
              de la performance technologique.
            </h2>

            <p className="text-sm font-medium leading-6 text-red-100 sm:text-base">
              Nous accompagnons depuis plus de 15 ans les grandes entreprises
              en Afrique dans leurs choix technologiques et dans la mise à
              profit des technologies au service de la performance commerciale
              et de la résilience technologique.
            </p>
          </motion.div>

  
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="shrink-0"
          >
            <motion.button
              onClick={() => router.push("/contact")}
            //   whileHover={{
            //     scale: 1.05,
            //     x: 4,
            //   }}
            //   whileTap={{
            //     scale: 0.95,
            //   }}
              className="group flex items-center gap-3 rounded-md border border-white/30 bg-white px-5 py-3 text-sm font-black text-red-900 shadow-lg transition-colors duration-300 hover:bg-red-50 sm:px-6 sm:py-4"
            >
              <span>Nous contacter</span>

              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}