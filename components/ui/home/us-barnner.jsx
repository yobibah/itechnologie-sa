"use client";

import { motion } from "framer-motion";
import reseauxSe from "../../../public/images/reseauxSec.jpg";
import Image from "next/image";

export default function UsBarnner() {
  return (
    <motion.section className="w-full mb-10 px-2 py-8 sm:px-4 lg:px-6">
      
      <div className="relative h-[350px] w-full overflow-hidden rounded-2xl">
        
        {/* Image arrière-plan */}
        <Image
          src={reseauxSe}
          alt="Nos représentations"
          fill
          className="object-cover"
          priority
        />

        {/* Bloc blanc à droite */}
        <div
          className="
            absolute
            right-6
            top-6
            bottom-6
            z-10
            flex
            w-[45%]
            flex-col
            justify-center
            rounded-2xl
            bg-white
            px-8
            shadow-xl
          "
        >
          <div>
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[3px] text-blue-600">
              Nos représentations
            </span>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Présents dans plusieurs pays
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 md:text-base">
              Découvrez nos représentations et notre présence à travers
              différents pays.
            </p>
          </div>
        </div>

      </div>

    </motion.section>
  );
}