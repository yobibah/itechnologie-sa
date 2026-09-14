"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIAL_SLIDE_DURATION = 4000;

function getGenericTestimonial(client) {
  return {
    quote: `iTechnologie a accompagné ${client?.name || "son client"} dans la mise en place de solutions informatiques adaptées à ses besoins : fourniture d'équipements, installation soignée et minimisant les interruptions, puis formation des équipes et support continu.`,
    person: "Responsable IT",
    role: client?.name || "Client Partner",
  };
}

export default function ReferencesTestimonials({ references }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const client = references?.[index] || {};
  const testimonial = client.testimonial || getGenericTestimonial(client);

  const goTo = (i) => setIndex((i + references.length) % references.length);

  useEffect(() => {
    if (!references || references.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % references.length);
    }, TESTIMONIAL_SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, references]);

  if (!references || references.length === 0) return null;

  return (
    <section
      className="container mx-auto px-4 py-16 md:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-10 h-[2px] bg-red-950" />
        <span className="text-red-900 font-bold tracking-wide uppercase text-sm ">
          Nos Références
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-900 mb-10 md:mb-14">
        Quelques Clients
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={client.id || index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-14 items-start"
        >
          <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  h-40 md:h-52 flex items-center justify-center p-6">
            <div className="relative w-full h-full">
              {client.logo && (
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>

          <div>
            <svg
              width="48"
              height="36"
              viewBox="0 0 48 36"
              fill="none"
              className="text-red-900 mb-4"
              aria-hidden="true"
            >
              <path
                d="M0 36V21.6C0 9.6 7.2 1.2 19.2 0L21.6 4.8C13.2 6.8 9.6 12 9.6 18H19.2V36H0ZM26.4 36V21.6C26.4 9.6 33.6 1.2 45.6 0L48 4.8C39.6 6.8 36 12 36 18H45.6V36H26.4Z"
                fill="currentColor"
              />
            </svg>

            <p className="text-lg md:text-xl leading-relaxed text-slate-800  mb-6">
              {testimonial.quote}
            </p>

            <div>
              <div className="font-bold text-red-950 ">{testimonial.person}</div>
              <div className="text-slate-500 ">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-4 mt-10">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Client précédent"
          className="w-10 h-10 rounded-full border border-slate-200  flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-700"
        >
          ←
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Client suivant"
          className="w-10 h-10 rounded-full border border-slate-200  flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-700 "
        >
          →
        </button>
        <span className="text-sm font-semibold text-red-950  ml-2">
          {index + 1} / {references.length}
        </span>
      </div>

      <div className="mt-4 h-1 w-full max-w-xs bg-slate-10 rounded-full overflow-hidden">
        {!isPaused && (
          <motion.div
            key={`${client.id || index}-progress`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: TESTIMONIAL_SLIDE_DURATION / 1000, ease: "linear" }}
            className="h-full bg-white-200 "
          />
        )}
      </div>
    </section>
  );
}