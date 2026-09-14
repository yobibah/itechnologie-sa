"use client";

import { motion } from "framer-motion";
import { Eye, HandshakeIcon, StarCheck, Users2 } from "lucide-react";
import Image from "next/image";

import vs from "../../../public/images/about/vis.avif";

export default function Vison() {
  const card = [
    {
      name: "Notre vision",
      descri:
        "Être un partenaire technologique de référence en accompagnant les entreprises et les institutions dans leur transformation numérique.",
      Icon: Eye,
    },
    {
      name: "Notre mission",
      descri:
        "Concevoir, intégrer et accompagner des solutions technologiques performantes, fiables et adaptées aux besoins de chaque organisation.",
      Icon: Users2,
    },
    {
      name: "Nos valeurs",
      descri:
        "Innovation, expertise, proximité et fiabilité guident chacune de nos actions et de nos relations avec nos clients.",
      Icon: HandshakeIcon,
    },
    {
      name: "Notre promesse",
      descri:
        "Mettre notre expertise au service de votre performance en vous proposant des solutions durables et un accompagnement de qualité.",
      Icon: StarCheck,
    },
  ];

  return (
    <motion.section
      className="w-full px-2 py-10 sm:px-4 lg:px-6 mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
   
      <div className="px-4 mb-8">
        <h1 className="font-black text-3xl md:text-4xl text-gray-900">
          Notre vision, missions et valeurs
        </h1>


      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {card.map((c, index) => {
            const Icon = c.Icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="group flex flex-col items-center justify-center
                           bg-red-900 rounded-lg text-white p-6
                           shadow-md hover:shadow-xl
                           transition-shadow duration-300
                           min-h-[250px]"
              >
            
                <div
                  className="p-4 rounded-full bg-white/10
                             border border-white/20
                             flex items-center justify-center
                             mb-5
                             group-hover:scale-110
                             transition-transform duration-300"
                >
                  <Icon size={32} strokeWidth={1.8} />
                </div>

           
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-3">
                    {c.name}
                  </h2>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {c.descri}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

       
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut",
          }}
          whileHover={{
            y: -6,
          }}
        className="hidden sm:flex w-full min-h-[300px] lg:min-h-full
           rounded-lg overflow-hidden
           bg-gray-100
           items-center justify-center"
        >
          <Image
            src={vs}
            alt="Vision Itechnologie"
            width={1200}
            height={800}
            className="w-full h-full object-contain rounded-lg"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
