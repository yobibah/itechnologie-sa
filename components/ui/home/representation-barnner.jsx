"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Check, MapPin, Phone, Users } from "lucide-react";


import bf from "../../../public/images/global.png";

export default function RepresentationBarnner() {
  const pays = [
    {
      nom: "Republique de Guinée",
      type: "Siège du groupe",
      ville: "conakry",
      initial: "CI",
      depuis: "2008",
      equipe: "—",
      tel: "—",
      adresse: "conakry",
      description:
        "Siège du groupe, pilotage stratégique et coordination des antennes régionales.",
      capacites: [],
      secteurs: [],
      typologie: "",
    },

    {
      nom: "Burkina Faso",
      type: "Antenne technique",
      ville: "Ouagadougou",
      initial: "BF",
      depuis: "2019",
      equipe: "9 personnes",
      tel: "+226 25 37 44 08",
      adresse: "Ouaga 2000, Avenue Mouammar Kadhafi — Ouagadougou",
      description:
        "Antenne technique de proximité pour les sites miniers, les banques et les ONG : interventions sur site sous 8 heures et stock de pièces de rechange sur place.",
      capacites: [
        "Intervention sur site < 8 h",
        "Stock de pièces de rechange",
        "Maintenance préventive",
        "Liaisons radio & VSAT",
      ],
      secteurs: ["Mines & Énergie", "Banque", "ONG & Bailleurs"],
      typologie:
        "Opérateurs miniers · Banques commerciales · Organisations internationales",
    },
    {
      nom: "Gabon",
      type: "Antenne technique",
      ville: "Libreville",
      initial: "GB",
      depuis: "2021",
      equipe: "6 personnes",
      tel: "—",
      adresse: "Libreville",
      description: "Antenne technique au service des opérateurs pétroliers et bancaires.",
      capacites: ["Intervention sur site < 12 h", "Maintenance préventive"],
      secteurs: ["Pétrole & Gaz", "Banque"],
      typologie: "Opérateurs pétroliers · Banques",
    },
    {
      nom: "Togo",
      type: "Antenne technique",
      ville: "Lomé",
      initial: "TG",
      depuis: "2020",
      equipe: "5 personnes",
      tel: "—",
      adresse: "Lomé",
      description: "Antenne de proximité pour la zone portuaire et les institutions financières.",
      capacites: ["Maintenance préventive", "Support à distance"],
      secteurs: ["Banque", "Logistique"],
      typologie: "Banques · Opérateurs logistiques",
    },
    {
      nom: "Mali",
      type: "Antenne technique",
      ville: "Bamako",
      initial: "ML",
      depuis: "2022",
      equipe: "4 personnes",
      tel: "—",
      adresse: "Bamako",
      description: "Présence technique au service des secteurs minier et télécom.",
      capacites: ["Intervention sur site < 8 h", "Liaisons radio & VSAT"],
      secteurs: ["Mines & Énergie", "Télécom"],
      typologie: "Opérateurs miniers · Opérateurs télécom",
    },
    {
      nom: "Sénégal",
      type: "Antenne technique",
      ville: "Dakar",
      initial: "SN",
      depuis: "2020",
      equipe: "7 personnes",
      tel: "—",
      adresse: "Dakar",
      description: "Antenne régionale couvrant l'Afrique de l'Ouest.",
      capacites: ["Intervention sur site < 8 h", "Stock de pièces"],
      secteurs: ["Banque", "Télécom", "ONG"],
      typologie: "Banques · Opérateurs télécom · ONG",
    },
  ];

  const [active, setActive] = useState(2);
  const selected = pays[active];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full px-2 py-8 sm:px-4 lg:px-6 mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
  
      <motion.div
        className="flex flex-col justify-center items-center mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-black">Nos représentations</h1>
        <p className="text-base text-gray-500">6 pays d’implantation</p>
      </motion.div>

  
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
  
        <motion.div
          className="lg:col-span-3 flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pays.map((p, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(index)}
              className={`flex border p-3 items-center rounded-xl text-left transition-all duration-300 cursor-pointer ${
                active === index
                  ? "border-red-700 bg-red-50/40"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div
                className={`border p-3 rounded-lg font-black text-sm transition-colors duration-300 ${
                  active === index
                    ? "bg-red-700 text-white border-red-700"
                    : "border-gray-200 text-gray-500 bg-gray-50"
                }`}
              >
                <p>{p.initial.trim()}</p>
              </div>
              <div className="ml-3 min-w-0">
                <p className="text-base font-black truncate">{p.nom}</p>
                <p className="text-xs text-gray-500 truncate">
                  {p.ville} — {p.type}
                </p>
              </div>
            </motion.button>
          ))}

        
          <div className="bg-gray-100 rounded-xl p-4 mt-2">
            <p className="text-sm text-gray-600 leading-relaxed">
              Chaque site dispose d’une équipe permanente. Aucune intervention
              n’est sous-traitée à un tiers non certifié.
            </p>
          </div>
        </motion.div>

        {/* Colonne 2 : détails */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 border border-gray-200 rounded-2xl p-6 bg-white"
          >
       
            <p className="text-sm font-semibold text-red-700 mb-2">
              {selected.type} — depuis {selected.depuis}
            </p>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
              {selected.nom}, {selected.ville}
            </h2>

           
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              {selected.description}
            </p>

     
            <div className="border-t border-gray-200 mb-6" />

        
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-red-700 mb-1">
                  <Users size={16} />
                  <span className="text-xs text-gray-500">Équipe permanente</span>
                </div>
                <p className="text-base font-bold">{selected.equipe}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-red-700 mb-1">
                  <Phone size={16} />
                  <span className="text-xs text-gray-500">Téléphone</span>
                </div>
                <p className="text-base font-bold">{selected.tel}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-red-700 mb-1">
                  <MapPin size={16} />
                  <span className="text-xs text-gray-500">Adresse</span>
                </div>
                <p className="text-sm text-gray-800 leading-snug">
                  {selected.adresse}
                </p>
              </div>
            </div>

     
            {selected.capacites.length > 0 && (
              <div className="border-t border-gray-200 mb-6" />
            )}

       
            {selected.capacites.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           
                <div>
                  <h3 className="text-sm font-bold mb-3">Capacités sur place</h3>
                  <ul className="space-y-2">
                    {selected.capacites.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-red-700 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

               
                <div>
                  <h3 className="text-sm font-bold mb-3">Secteurs servis</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selected.secteurs.map((s, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {selected.typologie && (
                    <>
                      <h3 className="text-sm font-bold mb-2">Typologie clients</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {selected.typologie}
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      
        <AnimatePresence mode="wait">
          <motion.div
            key={`img-${active}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[400px]"
          >
            <Image
              src={bf}
              alt={selected.nom}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}