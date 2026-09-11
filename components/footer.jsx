
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

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
    { name: "Nos solutions", path: "/solutions" },
    { name: "Nos événements", path: "/evenements" },
    { name: "Nos partenaires", path: "/partenaires" },
    { name: "Contacts", path: "/contact" },
  ];

  return (
    <footer className="relative bg-red-950 text-white">

      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-14">
          <h2 className="text-2xl sm:text-3xl font-light text-white max-w-xl">
            ITECHNOLOGIE, votre partenaire{" "}
            <span className="font-semibold">
              technologique de confiance
            </span>
          </h2>

          <Image
            src="/logo.png"
            alt="Logo ITECHNOLOGIE SA"
            width={160}
            height={50}
            className="w-36 sm:w-40 h-auto object-contain rounded-md p-1.5 shrink-0"
          />
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
    
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              ITECHNOLOGIE - Siège
            </h3>

            <p className="text-red-200 text-sm leading-relaxed">
              Ouagadougou, Burkina Faso
            </p>
          </div>

        
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              Nos solutions
            </h3>

            <p className="text-red-200 text-sm leading-relaxed">
              Informatique - Réseaux &amp; Cybersécurité - Énergie &amp; Bâtiment
              <br />
              Télécoms &amp; Data - Monétique
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              Horaires
            </h3>

            <p className="text-red-200 text-sm leading-relaxed">
              Lun - Ven : 08h00 - 17h30
            </p>
          </div>

        
          <div className="lg:text-right">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
              Contact
            </h3>

            <a
              href="mailto:itechnologiesa@gmail.com"
              className="text-red-200 text-sm hover:text-white transition-colors"
            >
              itechnologiesa@gmail.com
            </a>

            <div className="w-16 h-px bg-red-700 my-3 lg:ml-auto" />

            <a
              href="tel:+22609980202"
              className="text-red-200 text-sm leading-relaxed hover:text-white transition-colors"
            >
              +226 09 98 02 02
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-red-900" />

    
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
       
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            aria-label="Navigation du pied de page"
          >
            {bottomLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-red-200 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <p className="text-red-300 text-sm whitespace-nowrap">
            © {currentYear} ITECHNOLOGIE SA
          </p>
        </div>
      </div>

   
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Retour en haut"
        title="Retour en haut"
        className="
          absolute
          bottom-6
          right-6
          sm:bottom-8
          sm:right-8
          w-11
          h-11
          flex
          items-center
          justify-center
          bg-red-600
          hover:bg-red-500
          text-white
          rounded-md
          shadow-lg
          transition-colors
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-red-300
        "
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}

