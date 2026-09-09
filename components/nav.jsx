"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Menu, X, PhoneCall, Mail, ChevronDown } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
  }, [pathname]);

  const navLinks = [
    { name: "ACCUEIL", path: "/" },
    {
      name: "NOUS DÉCOUVRIR",
      path: "/about",
      children: [
        { name: "À propos de nous", path: "/about" },
        { name: "Notre histoire", path: "/about/histoire" },
        { name: "Notre équipe", path: "/about/equipe" },
      ],
    },
    {
      name: "NOS SOLUTIONS",
      path: "/solutions",
      children: [
        { name: "Solutions Informatiques", path: "/solutions/developpement-informatique" },
        { name: "Réseau & cybersécurité", path: "/solutions/reseaux-cyber-securite" },
        { name: "Énergie & Technologies du bâtiment", path: "/solutions/energie-technologie-batiment" },
        { name: "Télécommunications & Data", path: "/solutions/telecommuniaction-data" },
        { name: "Monétique & Moyens de paiement", path: "/solutions/monetique-moyens-paiement" },
        { name: "Gouvernance & Audit Systèmes IT", path: "/solutions/gouvernance-audit-systemes-IT" },
        { name: "Infogérance & Services Managés", path: "/solutions/infogerance-services-manages" },
      ],
    },
    { name: "NOS PARTENAIRES", path: "/partenaires" },
    { name: "NOS EVENEMENTS", path: "/evenements" },
    { name: "NOS REFERENCES", path: "/references" },
    { name: "NOUS CONTACTER", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>

      <div className="w-full ">
        <div className="w-full bg-red-950">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-10 flex items-center justify-between">
              <div className="hidden md:flex items-center gap-4 text-white text-sm">
                <div className="flex items-center gap-2">
                  <PhoneCall size={14} />
                  <span className="font-medium">+226 09 98 02 02</span>
                </div>
                <span className="text-red-300">|</span>
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span className="font-medium">itechnologiesa@gmail.com</span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 ml-auto md:ml-0">
                <SocialIcon
                  url="https://www.whatsapp.com"
                  bgColor="white"
                  fgColor="#162456"
                  style={{ width: 24, height: 24 }}
                />
                <SocialIcon
                  url="https://www.linkedin.com"
                  bgColor="white"
                  fgColor="#162456"
                  style={{ width: 24, height: 24 }}
                />
                <SocialIcon
                  url="https://www.facebook.com"
                  bgColor="white"
                  fgColor="#162456"
                  style={{ width: 24, height: 24 }}
                />
              </div>
            </div>
          </div>
        </div>


        <header className="bg-white sticky top-0 z-50 shadow-sm">
          <div className=" mx-auto px-4 sm:px-1 lg:px-2">
            <div className="h-20 flex items-center justify-between gap-2">
              {/* LOGO */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg"
                >
                  <Image
                    src="/logo.jpg"
                    alt="Logo ITECHNOLOGIE SA"
                    width={320}
                    height={10}
                    className="
                      w-28
                      sm:w-36
                      md:w-44
                      lg:w-48
               
                      max-h-10
                      sm:max-h-12
                      md:max-h-14
                      lg:max-h-16
                      object-contain
                      rounded-md
                    "
                    priority
                  />
                </Link>
              </div>

              <nav className="hidden xl:flex items-center justify-center flex-1 min-w-0 gap-0.5">
                {navLinks.map((link) => {
                  const active = isActive(link.path);

                  if (link.children) {
                    return (
                      <div key={link.name} className="relative group shrink-0">
                        <button
                          className={`
                            flex items-center gap-1
                            px-2.5 py-2.5
                            rounded-lg
                            text-[13px]
                            font-semibold
                            tracking-wide
                            transition-colors
                            duration-200
                            whitespace-nowrap
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-red-600
                            ${
                              active
                                ? "text-red-700 bg-red-50"
                                : "text-gray-900 hover:text-red-600 hover:bg-gray-50"
                            }
                          `}
                        >
                          {link.name}
                          <ChevronDown
                            size={14}
                            className="transition-transform duration-200 group-hover:rotate-180 shrink-0"
                          />
                        </button>

                  
                        <div
                          className="
                            absolute
                            left-0
                            top-full
                            pt-2
                            invisible
                            opacity-0
                            translate-y-2
                            group-hover:visible
                            group-hover:opacity-100
                            group-hover:translate-y-0
                            transition-all
                            duration-200
                            z-50
                          "
                        >
                          <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                href={child.path}
                                className="
                                  block
                                  px-4
                                  py-3
                                  text-[13px]
                                  font-medium
                                  text-gray-800
                                  hover:bg-red-50
                                  hover:text-red-700
                                  transition-colors
                                  focus-visible:outline-none
                                  focus-visible:bg-red-50
                                "
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`
                        relative
                        shrink-0
                        px-2.5
                        py-2.5
                        rounded-lg
                        text-[13px]
                        font-semibold
                        tracking-wide
                        whitespace-nowrap
                        transition-colors
                        duration-200
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-red-600
                        ${
                          active
                            ? "text-red-700 bg-red-50"
                            : "text-gray-900 hover:text-red-600 hover:bg-gray-50"
                        }
                      `}
                    >
                      {link.name}
                      {active && (
                        <span className="absolute left-3 right-3 -bottom-px h-0.5 bg-red-600 rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex-shrink-0 xl:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen((value) => !value)}
                  className="
                    p-2.5
                    rounded-lg
                    bg-red-950
                    text-white
                    shadow-md
                    hover:bg-red-900
                    transition-colors
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-red-400
                  "
                  aria-label="Menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

      
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="xl:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
              >
                <div className="px-4 py-4 space-y-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.path);
                    const isOpen = openMobileSubmenu === link.name;

                    return (
                      <div key={link.name}>
                        <div className="flex items-center">
                          <Link
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`
                              flex-1
                              px-4
                              py-3
                              rounded-lg
                              text-[13px]
                              font-semibold
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-red-600
                              ${
                                active
                                  ? "text-red-700 bg-red-50"
                                  : "text-gray-800 hover:bg-gray-50"
                              }
                            `}
                          >
                            {link.name}
                          </Link>

                          {link.children && (
                            <button
                              onClick={() =>
                                setOpenMobileSubmenu(isOpen ? null : link.name)
                              }
                              aria-label={`${
                                isOpen ? "Fermer" : "Ouvrir"
                              } le sous-menu ${link.name}`}
                              aria-expanded={isOpen}
                              className="
                                p-3
                                text-gray-500
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-red-600
                                rounded-lg
                              "
                            >
                              <ChevronDown
                                size={16}
                                className={`
                                  transition-transform
                                  duration-200
                                  ${isOpen ? "rotate-180" : ""}
                                `}
                              />
                            </button>
                          )}
                        </div>

                        {link.children && isOpen && (
                          <div className="ml-4 mt-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                href={child.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="
                                  block
                                  px-4
                                  py-2.5
                                  text-[13px]
                                  text-gray-600
                                  font-semibold
                                  hover:text-red-600
                                  hover:bg-gray-50
                                  focus-visible:outline-none
                                  focus-visible:bg-gray-50
                                "
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
    </>
  );
}