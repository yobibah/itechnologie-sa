"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import des images locales
import audit from "../../../public/images/audit.jpg";
import bat from "../../../public/images/batiment.jpg";
import dev from "../../../public/images/solution.jpg";
import manage from "../../../public/images/manger.webp";
import telecom from "../../../public/images/telecommunications.avif";
import money from "../../../public/images/monetique.webp";
import reseauxSe from "../../../public/images/reseauxSec.jpg";

export default function SolutionBarner() {
  const solutions = [
    {
      name: "Solutions Informatiques",
      path: "/solutions/developpement-informatique",
      image: dev,
    },
    {
      name: "Réseau & cybersécurité",
      path: "/solutions/reseaux-cyber-securite",
      image: reseauxSe,
    },
    {
      name: "Énergie & Technologies du bâtiment",
      path: "/solutions/energie-technologie-batiment",
      image: bat,
    },
    {
      name: "Télécommunications & Data",
      path: "/solutions/telecommuniaction-data",
      image: telecom,
    },
    {
      name: "Monétique & Moyens de paiement",
      path: "/solutions/monetique-moyens-paiement",
      image: money,
    },
    {
      name: "Gouvernance & Audit Systèmes IT",
      path: "/solutions/gouvernance-audit-systemes-IT",
      image: audit,
    },
    {
      name: "Infogérance & Services Managés",
      path: "/solutions/infogerance-services-manages",
      image: manage,
    },
  ];

  const doubled = [...solutions, ...solutions];

  return (
  
    <motion.section
      className="w-full px-2 py-8 sm:px-4 lg:px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
     
      <motion.div
        className="flex flex-col justify-center items-center mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-black">Nos solutions</h1>
        <p className="text-gray-500">
          Des solutions technologiques adaptées aux besoins de votre organisation.
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 200,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubled.map((solution, index) => (
            <Link
              key={index}
              href={solution.path}
              className="relative w-64 shrink-0 flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-red-600 transition-all duration-300"
            >
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={solution.image}
                  alt={solution.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 256px"
                  priority={index < 7}
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  {solution.name}
                </h3>
              </div>
            </Link>
          ))}
        </motion.div>


        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </motion.section>
  );
}