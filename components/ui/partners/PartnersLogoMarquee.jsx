"use client";

import Image from "next/image";

export default function PartnersLogoMarquee({ partners }) {
  return (
    <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6 overflow-hidden">
      <div className="marquee-track flex items-center gap-16">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="shrink-0 h-10 w-28 relative opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}