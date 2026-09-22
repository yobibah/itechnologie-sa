"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

// Import des images locales
import audit from "../../../public/images/audit.jpg";
import bat from "../../../public/images/batiment.jpg";
import dev from "../../../public/images/solution.jpg";
import manage from "../../../public/images/manger.webp";
import telecom from "../../../public/images/telecommunications.avif";
import money from "../../../public/images/monetique.webp";
import reseauxSe from "../../../public/images/reseauxSec.jpg";

export default function SolutionBarner() {
  const controls = useAnimation();
  const isPaused = useRef(false);

  const solutions = [
    {
      name: "Solutions Informatiques",
      path: "/solutions/solution-informatique",
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

  const moveLeft = async () => {
    isPaused.current = true;

    await controls.start({
      x: "-20%",
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    });

    isPaused.current = false;
  };

  const moveRight = async () => {
    isPaused.current = true;

    await controls.start({
      x: "0%",
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    });

    isPaused.current = false;
  };

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 200,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);


  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      moveRight();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      moveLeft();
    }
  };

  return (
    <motion.section
      className="w-full px-2 py-8 sm:px-4 lg:px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
          ease: "easeOut",
        }}
      >
        <div>
          <h1 className="text-3xl font-black">Nos solutions</h1>

          <p className="text-gray-500 mt-1">
            Des solutions technologiques adaptées aux besoins de votre
            organisation.
          </p>
        </div>
      </motion.div>
      <div
        className="relative w-full overflow-hidden outline-none"
        tabIndex={0}
        role="region"
        aria-label="Carousel des solutions"
        onKeyDown={handleKeyDown}
        onMouseEnter={() => {
          isPaused.current = true;
          controls.stop();
        }}
        onMouseLeave={() => {
          isPaused.current = false;

          controls.start({
            x: ["0%", "-50%"],
            transition: {
              duration: 200,
              ease: "linear",
              repeat: Infinity,
            },
          });
        }}
      >
        <motion.div
          className="flex gap-5 w-max"
          animate={controls}
        >
          {doubled.map((solution, index) => (
            <Link
              key={`${solution.name}-${index}`}
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

        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />


        <button
          type="button"
          onClick={moveRight}
          aria-label="Solutions précédentes"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={moveLeft}
          aria-label="Solutions suivantes"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.section>
  );
}