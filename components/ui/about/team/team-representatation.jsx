"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamRepresentation() {
  const teams = [
    {
      name: "Pierre NANEMA",
      poste: "Directeur Général",
      image: "",
      level: 1,
    },
    {
      name: "Carlos ZIBA",
      poste: "Directeur Général Adjoint",
      image: "",
      level: 2,
    },
    {
      name: "Marcellin ILBOUDO",
      poste: "Directeur Commercial",
      image: "",
      level: 3,
    },
    {
      name: "Project Manager & Presale",
      poste: "Équipes Projets",
      image: "",
      level: 4,
    },
    {
      name: "Ingénieurs d'Affaires",
      poste: "Équipe Commerciale",
      image: "",
      level: 4,
    },
  ];

  const renderMember = (member, index) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-zinc-100 shadow-md">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-2xl font-bold text-zinc-400">
            {member.name.charAt(0)}
          </span>
        )}
      </div>

      <div className="mt-3 text-center">
        <h3 className="font-semibold text-zinc-900">{member.name}</h3>
        <p className="mt-1 text-sm text-red-700">{member.poste}</p>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      className="w-full px-2 py-8 sm:px-4 lg:px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-3xl font-semibold uppercase tracking-widest text-red-700">
            Notre organisation
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Une équipe organisée autour de l’expertise
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
            Une organisation structurée permettant à chaque équipe de contribuer
            efficacement à la réalisation de nos projets et au développement de
            nos solutions.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col items-center">
            {renderMember(teams[0], 0)}

            <div className="h-10 w-px bg-zinc-300" />

            {renderMember(teams[1], 1)}

            <div className="h-10 w-px bg-zinc-300" />

            {renderMember(teams[2], 2)}

            <div className="h-10 w-px bg-zinc-300" />

            <div className="relative w-full">
              <div className="absolute left-1/2 top-0 hidden h-px w-[50%] -translate-x-1/2 bg-zinc-300 md:block" />

              <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2 md:gap-20">
                {renderMember(teams[3], 3)}
                {renderMember(teams[4], 4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
``
