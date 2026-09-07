"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  PhoneCall,
  Mail,
  ChevronDown,
} from "lucide-react";

import { SocialIcon } from "react-social-icons";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    {
      name: "ACCUEIL",
      path: "/",
    },
    {
      name: "NOUS DÉCOUVRIR",
      path: "/about",
      children: [
        {
          name: "À propos de nous",
          path: "/about",
        },
        {
          name: "Notre histoire",
          path: "/about/histoire",
        },
        {
          name: "Notre équipe",
          path: "/about/equipe",
        },
      ],
    },
    {
      name: "NOS SOLUTIONS",
      path: "/solutions",
            children: [
        {
          name: "Cloud & infrastructure",
          path: "/about",
        },
        {
          name: "Réseau & cybersécurité",
          path: "/about/histoire",
        },
        {
          name: "Audit & conseil",
          path: "/about/equipe",
        },
          {
          name: "Assurance qualité",
          path: "/about/equipe",
        },
             {
          name: "Support & maintenance",
          path: "/about/equipe",
        },
      ],
    },
    {
      name: "NOS PARTENAIRES",
      path: "/centres",
    },
    {
      name: "AIDE",
      path: "/aides",
    },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  return (
    <>
    
      <div className="w-full bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between">

         
            <div className="hidden md:flex items-center gap-4 text-white text-sm">

              <div className="flex items-center gap-2">
                <PhoneCall size={16} />
                <span className="font-medium">
                  +226 09 98 78 77
                </span>
              </div>

              <span className="text-blue-300">|</span>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="font-medium">
                  itechnologiesa@gmail.com
                </span>
              </div>

            </div>

        
            <div className="flex items-center gap-2 ml-auto">
              <SocialIcon
                url="https://www.whatsapp.com"
                bgColor="white"
                fgColor="#162456"
                style={{ width: 26, height: 26 }}
              />

              <SocialIcon
                url="https://www.linkedin.com"
                bgColor="white"
                fgColor="#162456"
                style={{ width: 26, height: 26 }}
              />

              <SocialIcon
                url="https://www.facebook.com"
                bgColor="white"
                fgColor="#162456"
                style={{ width: 26, height: 26 }}
              />
            </div>

          </div>
        </div>
      </div>

   
      <header className="bg-white sticky top-0 z-50 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative h-20 flex items-center justify-between">

    
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <img
                  src="/oni.jpg"
                  alt="Logo ITECHNOLOGIE SA"
                  className="w-10 h-10 rounded-lg object-cover"
                />
              </div>

              <div className="leading-tight">
                <p className="text-base font-bold text-gray-900 tracking-tight">
                  ITECHNOLOGIE SA
                </p>

                <p className="text-[11px] text-gray-500 font-medium">
                  Solutions technologiques
                </p>
              </div>
            </Link>

         
            <nav
              className="
                hidden lg:flex
                absolute
                left-1/2
                -translate-x-1/2
                items-center
                gap-1
              "
            >

              {navLinks.map((link) => {

                const active = isActive(link.path);

             
                if (link.children) {
                  return (
                    <div
                      key={link.name}
                      className="relative group"
                    >

                      <button
                        className={`
                          flex items-center gap-1
                          px-4 py-3
                          rounded-lg
                          text-sm
                          font-semibold
                          transition-all
                          duration-200
                          whitespace-nowrap

                          ${
                            active
                              ? "text-blue-700 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          }
                        `}
                      >
                        {link.name}

                        <ChevronDown
                          size={15}
                          className="transition-transform duration-200 group-hover:rotate-180"
                        />
                      </button>

                      {/* SOUS-MENU */}
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
                        "
                      >
                        <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">

                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              className="
                                block
                                px-5 py-3
                                text-sm
                                font-medium
                                text-gray-700
                                hover:bg-blue-50
                                hover:text-blue-700
                                transition-colors
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
                      px-4 py-3
                      rounded-lg
                      text-sm
                      font-semibold
                      whitespace-nowrap
                      transition-all
                      duration-200

                      ${
                        active
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    {link.name}

                    {active && (
                      <span
                        className="
                          absolute
                          left-4
                          right-4
                          bottom-0
                          h-0.5
                          bg-blue-600
                          rounded-full
                        "
                      />
                    )}
                  </Link>
                );
              })}

            </nav>

         
            <button
              onClick={() =>
                setIsMobileMenuOpen((value) => !value)
              }
              className="
                lg:hidden
                p-2.5
                rounded-lg
                bg-blue-950
                text-white
                shadow-md
              "
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>
        </div>

    
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                lg:hidden
                bg-white
                border-t
                border-gray-100
                overflow-hidden
                shadow-lg
              "
            >

              <div className="px-4 py-4 space-y-1">

                {navLinks.map((link) => {

                  const active = isActive(link.path);

                  return (
                    <div key={link.name}>

                      <Link
                        href={link.path}
                        onClick={() =>
                          setIsMobileMenuOpen(false)
                        }
                        className={`
                          flex items-center justify-between
                          px-4 py-3
                          rounded-lg
                          text-sm
                          font-semibold

                          ${
                            active
                              ? "text-blue-700 bg-blue-50"
                              : "text-gray-700 hover:bg-gray-50"
                          }
                        `}
                      >
                        {link.name}

                        {link.children && (
                          <ChevronDown size={16} />
                        )}
                      </Link>

                
                      {link.children && (
                        <div className="ml-4 mt-1 border-l-2 border-blue-100">

                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              onClick={() =>
                                setIsMobileMenuOpen(false)
                              }
                              className="
                                block
                                px-4 py-2.5
                                text-sm
                                text-gray-600
                                hover:text-blue-600
                                hover:bg-gray-50
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
    </>
  );
}

