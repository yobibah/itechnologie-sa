"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import reseauxSe from "../../../public/images/about/itech.png";
import { useRouter } from "next/navigation";
export default function Us() {
    const router = useRouter();
  return (
    <motion.section
      className="w-full px-2 py-8 sm:px-4 lg:px-6 mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="
          relative
          mt-10
          min-h-[420px]
          w-full
          overflow-hidden
          rounded-lg
          border
          border-gray-300
          shadow-lg
          lg:min-h-[500px]
        "
      >
        
        <motion.div
          className="
            absolute
            right-0
            top-0
            h-full
            w-full
            lg:w-[58%]
          "
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={reseauxSe}
            alt="Solutions technologiques Itechnologie SA"
            fill
            priority
            className="object-cover object-center lg:object-left"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-white/40 lg:to-transparent" />
        </motion.div>

        <div
          className="
            relative
            z-10
            flex
            min-h-[420px]
            items-center
            px-6
            py-12
            sm:px-10
            lg:min-h-[500px]
            lg:w-[62%]
            lg:px-14
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-700">
              Qui sommes-nous ?
            </p>

            <h1 className="mb-5 text-3xl font-black leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
              À propos de{" "}
              <span className="text-red-700">
                Itechnologie SA
              </span>
            </h1>

            <p className="mb-4 text-sm font-medium leading-7 text-gray-700 sm:text-base">
              Itechnologie SA est une entreprise spécialisée dans les
              solutions technologiques et les services informatiques. Nous
              accompagnons les entreprises dans leur transformation numérique
              en leur proposant des solutions adaptées à leurs besoins et à
              leurs objectifs.
            </p>

            <p className="mb-7 text-sm font-medium leading-7 text-gray-600 sm:text-base">
              Notre expertise couvre notamment les infrastructures serveurs,
              le développement logiciel, la cybersécurité et les
              télécommunications. Nous plaçons l'innovation, la fiabilité et
              la proximité au cœur de notre approche afin de contribuer
              durablement à la performance de nos clients.
            </p>

            <motion.button
            onClick={()=>router.push('/contact')}
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                flex
                items-center
                gap-3
                rounded-md
                bg-red-700
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-md
                transition
                duration-300
                hover:bg-red-800
              "
            >
              <span>Nous contacter</span>

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}