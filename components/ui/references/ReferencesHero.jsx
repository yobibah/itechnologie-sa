"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReferencesHero() {
  return (
    // Conteneur principal blanc pour créer la marge d'environ 1cm (p-2 à p-3)
    <div className="mt-11 w-full bg-white p-2 md:p-3">
      <section className="relative h-[280px] md:h-[360px] flex items-center overflow-hidden rounded-2xl">
        {/* Image statique avec coins arrondis */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imager/reference2.jpeg"
            alt="Nos références clients"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenu textuel aligné à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 container mx-auto px-6 md:px-12 text-left text-white"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Nos Références
          </h1>
          <p className="text-slate-200 max-w-2xl text-lg leading-relaxed">
            Des institutions et entreprises qui nous font confiance, au Burkina Faso et à l'international.
          </p>
        </motion.div>
      </section>
    </div>
  );
}