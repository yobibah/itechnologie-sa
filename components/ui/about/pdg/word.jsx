"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import word from "../../../../public/images/about/dg.png";

export default function Word() {
  const domains = [
    "Ingénierie et développement de solutions informatiques",
    "Réseaux, infrastructures et systèmes",
    "Cybersécurité et protection des données",
    "Télécommunications et connectivité",
    "Solutions énergétiques et technologies du bâtiment",
    "Audit, conseil et accompagnement technologique",
    "Intégration de solutions et équipements professionnels",
  ];

  return (
    <motion.section
  className="w-full px-3 py-4 sm:px-4 sm:py-14 lg:px-6 mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
  <motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.6,
    delay: 0.2,
    ease: "easeOut",
  }}
  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen lg:sticky lg:top-0 overflow-hidden"
>
  <Image
    src={word}
    alt="Itechnologie SA"
    fill
    priority
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
    className="
      object-contain
      object-center
      sm:object-contain
      lg:object-cover
      lg:object-center
    "
  />
</motion.div>
    
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="flex flex-col px-4 sm:px-6 lg:px-10 py-10 lg:h-screen lg:overflow-y-auto"
        >
   
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-900">
              Le mot de la Direction
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mt-3">
              La technologie au service de votre performance
            </h2>

            <div className="w-16 h-1 bg-red-900 rounded-full mt-5" />
          </div>

     
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Notre parcours
            </h3>

            <p className="text-gray-600 leading-7 text-base">
              Depuis plus de 9 ans, Itechnologie SA accompagne les entreprises
              et les institutions en Afrique dans leurs choix technologiques
              et dans la mise en œuvre de solutions adaptées à leurs enjeux.
            </p>

            <p className="text-gray-600 leading-7 text-base mt-4">
              Au fil des années, nous avons construit notre expertise autour
              d'une conviction forte : la technologie doit être un véritable
              levier de performance, de développement et de résilience pour
              nos clients.
            </p>
          </div>

          {/* Section 02 — Nos domaines d'expertise */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Nos domaines d'expertise
            </h3>

            <p className="text-gray-600 leading-7 text-base mb-4">
              Notre savoir-faire s'appuie sur plusieurs domaines
              complémentaires :
            </p>

            <div className="grid grid-cols-1 gap-3">
              {domains.map((domain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.05,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-red-900 shrink-0" />

                  <span className="text-gray-600 text-sm leading-6">
                    {domain}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Notre engagement
            </h3>

            <p className="text-gray-600 leading-7 text-base">
              Nous avons eu l'opportunité d'accompagner de nombreuses
              organisations dans la réalisation de leurs projets
              technologiques, en apportant des solutions fiables, évolutives
              et adaptées aux réalités de leurs environnements.
            </p>

            <p className="text-gray-600 leading-7 text-base mt-4">
              Notre ambition ne se limite pas à fournir des équipements ou
              des solutions. Nous souhaitons construire avec nos clients des
              relations durables fondées sur l'écoute, la confiance,
              l'expertise et la recherche constante de solutions adaptées
              à leurs besoins.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Anticiper les évolutions technologiques
            </h3>

            <p className="text-gray-600 leading-7 text-base">
              L'évolution rapide du numérique, l'essor du cloud, de
              l'intelligence artificielle, de l'automatisation et des nouvelles
              technologies ouvrent aujourd'hui de nouvelles perspectives pour
              les entreprises.
            </p>

            <p className="text-gray-600 leading-7 text-base mt-4">
              Chez Itechnologie SA, nous suivons ces évolutions avec attention
              afin d'intégrer les innovations pertinentes à nos offres et de
              permettre à nos clients de tirer pleinement parti des
              opportunités qu'elles représentent.
            </p>
          </div>

          {/* Section 05 — Sécurité */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Sécurité et résilience
            </h3>

            <p className="text-gray-600 leading-7 text-base">
              Dans un contexte où les infrastructures numériques sont
              devenues essentielles au fonctionnement des organisations,
              la sécurité, la disponibilité et la continuité des systèmes
              constituent plus que jamais des priorités.
            </p>

            <p className="text-gray-600 leading-7 text-base mt-4">
              Nous nous engageons ainsi à proposer des architectures robustes,
              des solutions sécurisées et un accompagnement de proximité,
              soutenus par l'expertise de nos équipes et par des partenariats
              technologiques solides.
            </p>
          </div>

          {/* Citation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="border-l-4 border-red-900 bg-gray-50 rounded-r-lg p-5 mb-8"
          >
            <p className="text-gray-900 text-lg font-semibold italic leading-7">
              « Chaque projet représente pour nous une nouvelle occasion
              d'innover, de progresser et de créer de la valeur. »
            </p>
          </motion.div>

          {/* Section 06 — Notre vision */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Construire l'avenir ensemble
            </h3>

            <p className="text-gray-600 leading-7 text-base">
              La croissance de nos activités et notre présence dans plusieurs
              pays d'Afrique témoignent de notre volonté de nous rapprocher
              davantage de nos partenaires et de contribuer activement au
              développement numérique du continent.
            </p>

            <p className="text-gray-600 leading-7 text-base mt-4">
              Chaque projet représente pour nous une nouvelle occasion
              d'innover, de progresser et de créer de la valeur.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 leading-7 text-base">
              Itechnologie SA reste pleinement engagée aux côtés de ses clients
              et partenaires pour développer des solutions fiables, sécurisées
              et durables, au service de leur performance et de leur
              transformation numérique.
            </p>

            <div className="mt-6">
              <p className="text-sm text-gray-500">
                La Direction Générale
              </p>

              <p className="text-base font-bold text-gray-900">
                Itechnologie SA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}