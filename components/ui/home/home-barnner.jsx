
"use client";

import cyb from "../../../public/cyb-secu.png";
import dev from "../../../public/dev.png";
import telecom from "../../../public/telecom.png";
import serv from "../../../public/serv.png";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeBanner() {
  const router = useRouter();

  const banner = [
    {
      name: "Infrastructure serveur",
      description:
        "Des solutions serveurs fiables et performantes pour accompagner votre entreprise.",
      type: "serveur",
      image: serv,
      path: "/solutions/developpement-informatique",
    },
    {
      name: "Développement logiciel",
      description:
        "Conception d'applications web et mobiles adaptées à vos besoins.",
      type: "dev",
      image: dev,
      path: "/solutions/developpement-informatique",
    },
    {
      name: "Cybersécurité",
      description:
        "Protégez vos données et vos systèmes contre les menaces informatiques.",
      type: "Cybersécurité et réseaux",
      image: cyb,
      path: "/solutions/reseaux-cyber-securite",
    },
    {
      name: "Télécommunications",
      description:
        "Des solutions de communication modernes pour rester connecté.",
      type: "telecom et data",
      image: telecom,
      path: "/solutions/telecommuniaction-data",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banner.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banner.length]);

  const item = banner[currentIndex];

  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + banner.length) % banner.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banner.length);
  };

  return (
    <section className="mt-10 w-full px-4 py-4 sm:px-4 sm:py-4 lg:px-6">

      <div
        className="
          relative
          aspect-[16/9]
          w-full
          overflow-hidden
          rounded-lg
          bg-black
          sm:aspect-[16/8]
          lg:aspect-[16/4]
        "
      >

        <AnimatePresence mode="wait">
          <motion.div
            key={item.type}
            className="absolute inset-0"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.4,
                },
              },
            }}
          >


            <motion.div
              className="absolute inset-0"
              initial={{
                scale: 1.08,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

  
            <motion.div
              className="absolute inset-0 bg-black/80"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
            />

        
            <div className="absolute inset-0 flex items-center">

              <div
                className="
                  w-full
                  max-w-3xl
                  px-5
                  sm:px-8
                  md:px-12
                  lg:px-16
                  xl:px-20
                "
              >

         
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <span
                    className="
                      inline-block
                      rounded-full
                      bg-red-900
                      px-3
                      py-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-white
                      sm:text-xs
                    "
                  >
                    {item.type}
                  </span>
                </motion.div>

          
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mt-3
                    max-w-2xl
                    text-2xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-6xl
                  "
                >
                  {item.name}
                </motion.h1>

         
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.55,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="
                    mt-2
                    max-w-xl
                    text-xs
                    leading-relaxed
                    text-gray-200
                    sm:mt-3
                    sm:text-sm
                    md:text-base
                    lg:text-lg
                  "
                >
                  {item.description}
                </motion.p>

                {/* BOUTONS */}
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
                    delay: 0.7,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="mt-4 flex gap-4 sm:mt-6"
                >

                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() => router.push(item.path)}
                    className="
                      cursor-pointer
                      rounded-md
                      bg-red-900
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-white
                      transition
                      hover:bg-red-800
                      sm:px-6
                      sm:py-3
                      sm:text-sm
                    "
                  >
                    En savoir plus
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() => router.push("/about")}
                    className="
                      cursor-pointer
                      rounded-md
                      border
                      border-white/70
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-white
                      transition
                      hover:bg-white/10
                      sm:px-6
                      sm:py-3
                      sm:text-sm
                    "
                  >
                    Qui sommes-nous ?
                  </motion.button>

                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="
            absolute
            bottom-8
            left-8
            z-20
            flex
            gap-2
          "
        >
          {banner.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Afficher la bannière ${index + 1}`}
              className="cursor-pointer"
            >
              <motion.div
                animate={{
                  width: index === currentIndex ? 32 : 8,
                  opacity: index === currentIndex ? 1 : 0.6,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="h-1.5 rounded-full bg-red-900"
              />
            </button>
          ))}
        </motion.div>

  
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="
            absolute
            bottom-4
            right-4
            z-20
            flex
            gap-3
          "
        >

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#7f1d1d",
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={previousSlide}
            className="
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              transition-all
              sm:h-10
              sm:w-10
            "
          >
            <ArrowLeft
              className="h-4 w-4 sm:h-5 sm:w-5"
              color="#fff"
            />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#7f1d1d",
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={nextSlide}
            className="
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              transition-all
              sm:h-10
              sm:w-10
            "
          >
            <ArrowRight
              color="#fff"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}

