"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnersHero() {
  return (
    <div className="mt-11 w-full bg-white p-2 md:p-3">
      {/* On retire justify-center ici */}
      <section className="relative h-[280px] md:h-[360px] flex items-center overflow-hidden rounded-2xl">
        
        {/* Image statique */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagep/heropartner.png"
            alt="Nos partenaires"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenu textuel aligné proprement à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 container mx-auto px-6 md:px-12 text-left text-white"
        >
          {/* Titre (balise bloc) */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Nos Partenaires
          </h1>

          <p className="text-slate-200 max-w-2xl text-lg leading-relaxed">
            Nous collaborons avec les plus grands acteurs technologiques mondiaux pour vous fournir des solutions performantes et pérennes.
          </p>
        </motion.div>
      </section>
    </div>
  );
}