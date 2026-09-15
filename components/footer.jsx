"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowBigRight, ArrowUp, Play, StepForward } from "lucide-react";
import { motion } from "framer-motion";
export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const bottomLinks = [
    { name: "Qui sommes-nous ?", path: "/about" },
    { name: "Nos References", path: "/references" },
    { name: "Nos événements", path: "/evenements" },
    { name: "Nos partenaires", path: "/partenaires" },
    { name: "Contacts", path: "/contact" },
  ];

  return (
    <footer className="relative bg-black text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-8 mb-5">
          {/* <h2 className="text-2xl sm:text-3xl font-light text-white max-w-xl">
            ITECHNOLOGIE, votre partenaire{" "}
            <span className="font-semibold">technologique de confiance</span>
          </h2> */}

          <Image
            src="/logo.jpeg"
            alt="Logo ITECHNOLOGIE SA"
            width={160}
            height={100}
            className="w-36 sm:w-50 h-auto object-contain rounded-md p-1.5 shrink-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              ITECHNOLOGIE - Siège
            </h3>

            <p className="text-sm leading-relaxed">Ouagadougou, Burkina Faso</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              Nos solutions
            </h3>

            <p className="text-sm leading-relaxed">
              Informatique - Réseaux &amp; Cybersécurité - Énergie &amp;
              Bâtiment
              <br />
              Télécoms &amp; Data - Monétique
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              Liens rapides
            </h3>
            <nav
              className="grid grid-cols-1 "
              aria-label="Navigation du pied de page"
            >
              {bottomLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className=" hover:text-red-700 md:text-sm flex  gap-1.5 transition-colors py-1.5"
                >
                  {/* <StepForward size={16} color="#9f0712"/> */}
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              Horaires
            </h3>

            <p className="text-sm leading-relaxed">Lun - Ven : 08h00 - 17h00</p>
          </div>

          <div className="lg:text-right">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              Contact
            </h3>

            <a
              href="mailto:info@itechnologiesa.com"
              className="text-sm hover:text-red-700 transition-colors"
            >
              info@itechnologiesa.com
            </a>

            <div className="w-16 h-px bg-red-700 my-3 lg:ml-auto" />

            <a
              href="tel:+22668080202"
              className="text-sm leading-relaxed hover:text-red-700 transition-colors"
            >
              +226 68 08 02 02
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            aria-label="Navigation du pied de page"
          >
            {bottomLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav> */}

          <div className="flex justify-center items-center gap-10">
            <p className="text-md whitespace-nowrap">
              © {currentYear} <strong className="text-red-700">i</strong>
              TECHNOLOGIE SA
            </p>

            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2.5,

                ease: "easeInOut",
              }}
              type="button"
              onClick={scrollToTop}
              aria-label="Retour en haut"
              title="Retour en haut"
              className="
                  shrink-0
                  absolute
                  right-6
                  sm:right-8
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                bg-red-900/50
                hover:bg-red-500
                text-white
                rounded-full
                shadow-lg
                transition-colors
                focus-visible:outline-none
                focus-visible:ring-2
                cursor-pointer
              Wfocus-visible:ring-red-300
        "
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
