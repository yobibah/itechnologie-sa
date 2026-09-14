"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import events from "../../../data/events/data";

export default function EventRepresentation() {
const Router = useRouter();

  return (
    <section       className="w-full px-2 py-8 sm:px-4 lg:px-6 mb-6" >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 max-w-xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Nos événements
          </span>

          <h2 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Formations et événements
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Retrouvez les formations, événements et différentes activités
            organisés par iTechnologie SA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <motion.article
              key={event.name}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{  }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900">
                  {event.name}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600">
                  {event.desc}
                </p>

                <button
                 onClick={()=> Router.push(`evenements/details?id=${index}`)}
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition group-hover:gap-3"
                >
                  En savoir plus
                  <ArrowRight size={17} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

