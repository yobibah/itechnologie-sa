"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import events from "../../../data/events/data";

export default function Details({ id }) {
  const event = events[id];

  if (!event) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center px-4">
        <div className="text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Événements
          </span>

          <h2 className="text-3xl font-bold ">
            Événement introuvable
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f8f9] py-16 sm:py-20 lg:py-24">
   

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          
  
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative"
          >
      
            <div className="absolute -left-3 top-8 z-10 h-28 w-1 bg-red-700" />

            <div className="relative h-[380px] overflow-hidden sm:h-[480px] lg:h-[560px]">
              <Image
                src={event.image}
                alt={event.name}
                fill
                priority
                className="object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>


            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border border-red-900/20 lg:block" />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="relative"
          >
           
            <div className="mb-5 flex items-center gap-3">
              {/* <span className="h-[2px] w-10 bg-red-700" /> */}

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-700">
                Nos événements
              </span>
            </div>

     
            <h1 className="mb-8 text-4xl font-bold uppercase leading-[1.12] tracking-tight  sm:text-5xl lg:text-[3.4rem]">
              {event.name}
            </h1>

            <div className="mb-10 border-l-2 border-gray-100 pl-6">
              <p className="max-w-xl text-[15px] leading-8 tracking-wide text-gray-500 sm:text-base">
                {event.desc}
              </p>
            </div>

         
            <div className="border-t border-gray-200 pt-8">
              <div className="grid gap-7 sm:grid-cols-2">
                
                {event.date && (
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-red-900/15 bg-white text-red-700">
                      <CalendarDays size={20} />
                    </div>

                    <div>
                      <h3 className="mb-1 text-lg font-bold text-[#29475b]">
                        Date
                      </h3>

                      <p className="text-sm leading-6 ">
                        {event.date}
                      </p>
                    </div>
                  </div>
                )}

                {event.location && (
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-red-900/15 bg-white text-red-700">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <h3 className="mb-1 text-lg font-bold">
                        Lieu
                      </h3>

                      <p className="text-sm leading-6">
                        {event.location}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}