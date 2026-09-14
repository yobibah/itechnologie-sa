"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReferencesLogoMarquee({ references }) {
  if (!references || references.length === 0) return null;

  // On duplique la liste pour assurer une boucle infinie sans coupure
  const duplicatedReferences = [...references, ...references];

  return (
    <section className="border-y border-slate-200 bg-white py-6 overflow-hidden">
      <div className="flex w-full overflow-hidden select-none">
        <motion.div
          className="flex shrink-0 items-center gap-16 pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedReferences.map((r, i) => (
            <div
              key={`${r.id || r.name}-${i}`}
              className="shrink-0 h-12 w-32 relative opacity-70 hover:opacity-100 transition-opacity"
            >
              {r.logo && (
                <Image
                  src={r.logo}
                  alt={r.name || "Référence"}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}