"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import bf from "../../../public/images/global.png";
import { useRouter } from "next/navigation";

export default function UsBanner() {
  const router = useRouter();
  return (
    <motion.section className="w-full mb-10 px-2 py-8 sm:px-4 lg:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src={bf}
              alt="Technologie en Afrique"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="px-2 sm:px-4 lg:px-8"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-red-900">
            Itechnologie SA
          </span>

          <h1 className="mt-2 text-3xl  font-bold text-gray-900">
            Qui sommes-nous ?
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600">
            iTechnologie SA est une entreprise spécialisée dans les solutions
            informatiques et la transformation numérique au Burkina Faso.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            Nous accompagnons les entreprises dans{" "}
            <strong>
              {" "}
              la conception, le déploiement et la sécurisation de leurs
              infrastructures grâce à des solutions innovantes en informatique,
              développement logiciel, réseaux, cybersécurité et
              télécommunications
            </strong>
            . Notre mission : transformer la technologie en un véritable levier
            de performance pour votre organisation.
          </p>

          <button
          onClick={()=>router.push('/about')}
            className="
              mt-6
              rounded-lg
              bg-red-900
              px-6 py-3
              font-medium
              text-white
              cursor-pointer
              transition-colors
              hover:bg-red-800
            
            "
          >
            En savoir plus
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
