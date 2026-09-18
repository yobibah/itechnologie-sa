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
  Flag,
} from "lucide-react";

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
    {
      name: "ACCUEIL",
      path: "/",
    },

    {
      name: "NOUS DÉCOUVRIR",
      children: [
        {
          name: "À propos de nous",
          path: "/about",
        },
        {
          name: "Mots du DG",
          path: "/about/mots-du-DG",
        },
        {
          name: "Notre équipe",
          path: "/about/equipe",
        },
      ],
    },

    {
      name: "NOS SOLUTIONS",
      children: [
        {
          name: "Developpement & Integration",
          path: "/solutions/developpement-integration",
        },
        {
          name: "Réseau & cybersécurité",
          path: "/solutions/reseaux-cyber-securite",
        },
        {
          name: "Énergie & Technologies du bâtiment",
          path: "/solutions/energie-technologie-batiment",
        },
        {
          name: "Télécommunications & Data",
          path: "/solutions/telecommuniaction-data",
        },
        {
          name: "Monétique & Moyens de paiement",
          path: "/solutions/monetique-moyens-paiement",
        },
        {
          name: "Gouvernance & Audit Systèmes IT",
          path: "/solutions/gouvernance-audit-systemes-IT",
        },
        {
          name: "Infogérance & Services Managés",
          path: "/solutions/infogerance-services-manages",
        },
      ],
    },

    {
      name: "NOS PARTENAIRES",
      path: "/partenaires",
    },

    {
      name: "NOS EVENEMENTS",
      path: "/evenements",
    },

    {
      name: "NOS REFERENCES",
      path: "/references",
    },

    {
      name: "NOUS CONTACTER",
      path: "/contact",
    },
  ];

  const isActive = (path) => {
    if (!path) return false;

    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  const isParentActive = (children) => {
    if (!children) return false;

    return children.some((child) => isActive(child.path));
  };

  const contact = [
    {
      pays: "Burkina Faso",
      telephone: "+226 68 08 02 02",
      email: "info@itechnologiesa.com",
    },
    {
      pays: "Republique de Guinée",
      telephone: "+224 620 92 48 33",
      email: "info@itechnologiesa.com",
    },
  ];

  const [curentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState({});

  useEffect(() => {
    setItems(contact[curentIndex]);

    const timer = setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % contact.length
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [curentIndex]);

  return (
    <>
      <div className="w-full">

        {/* TOP BAR */}
        <div className="w-full bg-red-950">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-10 flex items-center justify-between">

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${items.pays}-${items.telephone}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="hidden md:flex items-center gap-4 text-white text-sm"
                >

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05,
                    }}
                    className="flex items-center gap-2"
                  >
                    <Flag size={14} />
                    <span className="font-medium">
                      {items.pays}
                    </span>
                  </motion.div>

                  <span className="text-red-300">|</span>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                    }}
                    className="flex items-center gap-2"
                  >
                    <PhoneCall size={14} />

                    <a
                      href={`tel:${items.telephone}`}
                      className="font-medium"
                    >
                      {items.telephone}
                    </a>
                  </motion.div>

                  <span className="text-red-300">|</span>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15,
                    }}
                    className="flex items-center gap-2"
                  >
                    <Mail size={14} />

                    <a
                      href="mailto:info@itechnologiesa.com"
                      className="font-medium"
                    >
                      {items.email}
                    </a>
                  </motion.div>

                </motion.div>
              </AnimatePresence>

              {/* SOCIAL */}
              <div className="hidden md:flex items-center gap-2 ml-auto md:ml-0">

                <SocialIcon
                  url="https://api.whatsapp.com/send/?phone=22670763637&text&type=phone_number&app_absent=0"
                  bgColor="white"
                  fgColor="#162456"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />

                <SocialIcon
                  url="https://www.linkedin.com/company/itechnologie-sa/"
                  bgColor="white"
                  fgColor="#162456"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />

                <SocialIcon
                  url="https://web.facebook.com/profile.php?id=61592744157536"
                  bgColor="white"
                  fgColor="#162456"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />

              </div>

            </div>
          </div>
        </div>

        {/* HEADER */}
        <header className="bg-white sticky top-0 z-50 shadow-sm">

          <div className="mx-auto px-4 sm:px-4 lg:px-16">

            <div className="h-20 flex items-center justify-between gap-2">

              {/* LOGO */}
              <div className="flex-shrink-0 flex items-center">

                <Link
                  href="/"
                  className="
                    flex items-center
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-red-600
                    rounded-lg
                  "
                >

                  <Image
                    src="/logo.jpeg"
                    alt="Logo ITECHNOLOGIE SA"
                    width={180}
                    height={50}
                    className="
                      w-28
                      sm:w-36
                      md:w-40
                      lg:w-44
                      h-auto
                      max-h-20
                      object-contain
                    "
                    priority
                  />

                </Link>

              </div>

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden xl:flex items-center justify-center flex-1 min-w-0 gap-0.5">

                {navLinks.map((link) => {

                  const active = link.children
                    ? isParentActive(link.children)
                    : isActive(link.path);

                  {/* MENU AVEC ENFANTS */}
                  if (link.children) {
                    return (
                      <div
                        key={link.name}
                        className="relative group shrink-0"
                      >

                        {/* PARENT = BOUTON, PAS DE LINK */}
                        <button
                          type="button"
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
                            className="
                              transition-transform
                              duration-200
                              group-hover:rotate-180
                              shrink-0
                            "
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
                            z-50
                          "
                        >

                          <div
                            className="
                              w-64
                              bg-white
                              rounded-xl
                              shadow-xl
                              border
                              border-gray-100
                              overflow-hidden
                            "
                          >

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

                  {/* LIEN NORMAL */}
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
                        <span
                          className="
                            absolute
                            left-3
                            right-3
                            -bottom-px
                            h-0.5
                            bg-red-600
                            rounded-full
                          "
                        />
                      )}

                    </Link>
                  );
                })}

              </nav>

              {/* MOBILE BUTTON */}
              <div className="flex-shrink-0 xl:hidden">

                <button
                  type="button"
                  onClick={() =>
                    setIsMobileMenuOpen(
                      (value) => !value
                    )
                  }
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

                  {isMobileMenuOpen ? (
                    <X size={27} />
                  ) : (
                    <Menu size={27} />
                  )}

                </button>

              </div>

            </div>

          </div>

          {/* MOBILE MENU */}
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
                  xl:hidden
                  bg-white
                  border-t
                  border-gray-100
                  overflow-hidden
                  shadow-lg
                "
              >

                <div className="px-4 py-4 space-y-1">

                  {navLinks.map((link) => {

                    const active = link.children
                      ? isParentActive(link.children)
                      : isActive(link.path);

                    const isOpen =
                      openMobileSubmenu === link.name;

                    return (
                      <div key={link.name}>

                        {/* PARENT AVEC CHILDREN */}
                        {link.children ? (

                          <div>

                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileSubmenu(
                                  isOpen
                                    ? null
                                    : link.name
                                )
                              }
                              aria-expanded={isOpen}
                              className={`
                                w-full
                                flex
                                items-center
                                justify-between
                                px-4
                                py-3
                                rounded-lg
                                text-[13px]
                                font-semibold
                                text-left
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

                              <span>
                                {link.name}
                              </span>

                              <ChevronDown
                                size={16}
                                className={`
                                  transition-transform
                                  duration-200
                                  ${
                                    isOpen
                                      ? "rotate-180"
                                      : ""
                                  }
                                `}
                              />

                            </button>

                            {/* CHILDREN */}
                            <AnimatePresence>

                              {isOpen && (

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
                                    duration: 0.2,
                                  }}
                                  className="
                                    ml-4
                                    mt-1
                                    overflow-hidden
                                  "
                                >

                                  {link.children.map(
                                    (child) => (

                                      <Link
                                        key={child.path}
                                        href={child.path}
                                        onClick={() =>
                                          setIsMobileMenuOpen(
                                            false
                                          )
                                        }
                                        className="
                                          block
                                          px-4
                                          py-2.5
                                          rounded-lg
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

                                    )
                                  )}

                                </motion.div>

                              )}

                            </AnimatePresence>

                          </div>

                        ) : (

                          /* LIEN NORMAL */
                          <Link
                            href={link.path}
                            onClick={() =>
                              setIsMobileMenuOpen(false)
                            }
                            className={`
                              block
                              w-full
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