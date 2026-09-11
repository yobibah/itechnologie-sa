"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Network,
  Cloud,
  Database,
  Server,
  Wifi,
  Cpu,
  LayoutGrid,
  Moon,
  Sun,
  Building2,
} from "lucide-react";
import {
  partenairesTechnologiques,
  categoriesTechnologiques,
} from "@/app/data/partners";

// Images d'arrière-plan du hero 
const heroImages = ["/imagep/techno.png", "/imagep/Data.png", "/imagep/OIP.webp"];

const HERO_SLIDE_DURATION = 5000; // ms

// Icône par catégorie
function getCategoryIcon(category) {
  const key = category.toLowerCase();
  if (key.includes("sécurité") || key.includes("securite")) return Shield;
  if (key.includes("réseau") || key.includes("reseau")) return Network;
  if (key.includes("cloud")) return Cloud;
  if (key.includes("data") || key.includes("donnée")) return Database;
  if (key.includes("serveur")) return Server;
  if (key.includes("wifi") || key.includes("télécom") || key.includes("telecom"))
    return Wifi;
  if (key.includes("matériel") || key.includes("materiel") || key.includes("hardware"))
    return Cpu;
  return LayoutGrid;
}

// Variants pour l'apparition en cascade des cartes au scroll
const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PartenairesTechnologiquesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [isDark, setIsDark] = useState(false);

  // Carrousel du hero
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, HERO_SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // Nombre de partenaires par catégorie
  const countsByCategory = useMemo(() => {
    const counts = {};
    categoriesTechnologiques.forEach((cat) => {
      counts[cat] = partenairesTechnologiques.filter((p) => p.category === cat).length;
    });
    return counts;
  }, []);

  // Catégories à afficher selon l'onglet actif
  const visibleCategories =
    activeCategory === "Tous" ? categoriesTechnologiques : [activeCategory];

  // Filtre de recherche appliqué au nom du partenaire
  
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
                alt="Partenariat professionnel"
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-950/60 to-red-950/30 z-10" />

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
              <span className="text-white font-medium">Technologiques</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-red-100 to-white">
              Partenaires Technologiques
            </h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg leading-relaxed">
              Nous travaillons avec les leaders mondiaux de la technologie pour
              vous offrir des solutions performantes, sécurisées et innovantes.
            </p>

            {/* Barre de statistiques */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-14">
              {[
                { label: "Partenaires", value: `${partenairesTechnologiques.length}+` },
                { label: "Catégories", value: categoriesTechnologiques.length },
                { label: "Années d'expérience", value: "6+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs md:text-sm text-slate-300 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
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

        {/* MARQUEE DE LOGOS */}
        <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6 overflow-hidden">
          <div className="marquee-track flex items-center gap-16">
            {[...partenairesTechnologiques, ...partenairesTechnologiques].map((p, i) => (
              <div key={`${p.id}-${i}`} className="shrink-0 h-10 w-28 relative opacity-60 hover:opacity-100 transition-opacity">
                <Image src={p.logo} alt={p.name} fill className="object-contain" />
              </div>
            ))}
          </div>
          <style jsx>{`
            .marquee-track {
              width: max-content;
              animation: marquee 30s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/*  BARRE ONGLETS + RECHERCHE  */}
        <div className="sticky top-0 z-30 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center gap-4">
            {/* Onglets de catégories */}
            <div className="flex flex-wrap gap-2 flex-1 text-blue-700">
              {["Tous", ...categoriesTechnologiques].map((cat) => {
                const isActive = activeCategory === cat;
                const Icon = cat === "Tous" ? Building2 : getCategoryIcon(cat);
                const count =
                  cat === "Tous" ? partenairesTechnologiques.length : countsByCategory[cat];

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                      isActive
                        ? "bg-red-950 text-white border-red-950"
                        : "bg-transparent text-blue-900 dark:text-slate-300 border-blue-300 dark:border-slate-700 :border-red-950/40 hover:text-red-950 dark:hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/20" : "bg-slate-100 dark:bg-slate-800"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/*  CONTENU DES PARTENAIRES  */}
        <div className="container mx-auto px-4 py-14 md:py-20">
          {visibleCategories.map((category) => {
            const items = partenairesTechnologiques.filter((p) => p.category === category);
            if (items.length === 0) return null;

            const CategoryIcon = getCategoryIcon(category);

            return (
              <section key={category} className="mb-20 last:mb-0">
                <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-red-900 dark:text-white mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300">
                    <CategoryIcon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  {category}
                  <span className="text-sm font-normal text-red-400">
                    · {items.length}
                  </span>
                </h2>

                <motion.div
                  variants={gridVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {items.map((partner) => (
                    <motion.article
                      key={partner.id}
                      variants={cardVariants}
                      className="group relative bg-blue-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6  dark:hover:shadow-none hover:border-red-700/60 dark:hover:border-red-500/40 transition-all duration-300"
                    >
                      <div className="h-16 flex items-center justify-center mb-5 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                        <Image
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          width={140}
                          height={48}
                          className="object-contain max-h-10 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <h3 className="font-semibold text-lg text-blue-900 dark:text-white mb-2 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                        {partner.name}
                      </h3>

                      {partner.website && (
                        <Link
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 z-10"
                          aria-label={`Visiter le site de ${partner.name}`}
                        />
                      )}
                    </motion.article>
                  ))}
                </motion.div>
              </section>
            );
          })}

        </div>
      </main>
    </div>
  );
}