"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { references } from "@/app/data/references";

// Images d'arrière-plan du hero (dossier public)
const heroImages = [
  "/imager/reference2.jpeg",
  "/imager/refernce1.png",
  "/imager/renfrence2.jpeg",
];

const HERO_SLIDE_DURATION = 5000; // ms

// Variants pour l'apparition en cascade des cartes au scroll
const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ReferencesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Carrousel du hero
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, HERO_SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        {/*  HERO  */}
        <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={heroImages[currentIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={heroImages[currentIndex]}
                alt="Nos références clients"
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dégradé */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/30 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 container mx-auto px-4 text-center text-white"
          >
            <nav className="text-sm mb-6">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                Accueil
              </Link>
              <span className="mx-2 text-slate-400">/</span>
              <span className="text-white font-medium">Références</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Nos Références
            </h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg leading-relaxed">
              Des institutions et entreprises qui nous font confiance, au
              Burkina Faso et à l'international.
            </p>

            {/* Barre de statistiques */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-14">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{references.length}+</div>
                <div className="text-xs md:text-sm text-slate-300 uppercase tracking-wide">
                  Références clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">6+</div>
                <div className="text-xs md:text-sm text-slate-300 uppercase tracking-wide">
                  Années d'expérience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Barre de progression du carrousel */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: HERO_SLIDE_DURATION / 1000, ease: "linear" }}
              className="h-full bg-white/80"
            />
          </div>
        </section>

        {/*  MARQUEE DE LOGOS */}
        <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6 overflow-hidden">
          <div className="refs-marquee-track flex items-center gap-16 w-max">
            {[...references, ...references].map((r, i) => (
              <div key={`${r.id}-${i}`} className="shrink-0 h-10 w-28 relative opacity-60 hover:opacity-100 transition-opacity">
                <Image src={r.logo} alt={r.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </section>

        <style>{`
          .refs-marquee-track {
            animation: refs-marquee-scroll 30s linear infinite;
          }
          .refs-marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes refs-marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .refs-marquee-track {
              animation: none;
            }
          }
        `}</style>

        {/*  GRILLE UNIQUE DE TOUS LES LOGOS  */}
        <div className="container mx-auto px-4 py-14 md:py-20">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-20"
          >
            {references.map((client) => (
              <motion.div
                key={client.id}
                variants={cardVariants}
                className="flex items-center justify-center h-16"
              >
                {client.website && client.website !== "#" ? (
                  <Link
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visiter le site de ${client.name}`}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}