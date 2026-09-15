'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'

const ease = [0.23, 1, 0.32, 1]

export default function SolutionServices({ services }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeService = services[activeIndex]

  return (
    <section className="bg-[#F4F6F9]">
      <div className="mx-auto max-w-shell px-6 py-5 md:py-7 lg:py-9">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{
            y: -3,
            boxShadow: '0 18px 50px rgba(11,26,56,0.08)',
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="overflow-hidden rounded-2xl border border-[#E2E7EF] bg-white shadow-[0_12px_40px_rgba(11,26,56,0.06)]"
        >
          <div className="p-7 md:p-9 lg:p-11">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease,
              }}
              className="mb-9 max-w-3xl"
            >
              <p className="eyebrow">
                Nos expertises
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.15,
                  ease,
                }}
                className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-tight text-[#0B1A38] md:text-[36px]"
              >
                Des solutions adaptées à chaque besoin
              </motion.h2>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 56, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                  ease,
                }}
                className="mt-6 h-[2px] bg-[#E10600]"
                aria-hidden="true"
              />
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="border-t border-[#DDE3EC]">
                  {services.map((service, index) => {
                    const isActive = index === activeIndex

                    return (
                      <motion.button
                        key={service.number}
                        type="button"
                        onMouseEnter={() => setActiveIndex(index)}
                        onFocus={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        whileHover={{
                          x: 4,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.06,
                          ease,
                        }}
                        className={`group relative flex w-full items-center gap-4 border-b border-[#DDE3EC] py-5 text-left transition-all duration-300 ${
                          isActive
                            ? 'bg-[#F4F6F9] px-4'
                            : 'px-0 hover:bg-[#F8F9FB] hover:px-4'
                        }`}
                      >
                        <span
                          className={`w-8 shrink-0 text-[12px] font-semibold tracking-[0.15em] transition-colors duration-300 ${
                            isActive
                              ? 'text-[#E10600]'
                              : 'text-[#9AA5B5] group-hover:text-[#E10600]'
                          }`}
                        >
                          {service.number}
                        </span>

                        <span
                          className={`flex-1 text-[16px] font-semibold tracking-tight transition-colors duration-300 md:text-[18px] ${
                            isActive
                              ? 'text-[#0B1A38]'
                              : 'text-[#33405C] group-hover:text-[#0B1A38]'
                          }`}
                        >
                          {service.title}
                        </span>

                        <motion.span
                          animate={{
                            x: isActive ? 0 : -5,
                            opacity: isActive ? 1 : 0,
                          }}
                          whileHover={{
                            x: 3,
                          }}
                          transition={{
                            duration: 0.25,
                            ease,
                          }}
                          className="text-[#E10600]"
                        >
                          <ArrowRightIcon
                            className="h-4 w-4"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                        </motion.span>

                        {isActive && (
                          <motion.span
                            layoutId="active-service-indicator"
                            className="absolute left-0 top-0 h-full w-[2px] bg-[#E10600]"
                            transition={{
                              duration: 0.35,
                              ease,
                            }}
                          />
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.number}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{
                      duration: 0.45,
                      ease,
                    }}
                  >
                    <motion.div
                      whileHover="hover"
                      className="group relative overflow-hidden bg-[#F4F6F9]"
                    >
                      <motion.img
                        key={activeService.image}
                        src={activeService.image}
                        alt={activeService.imageAlt}
                        initial={{
                          scale: 1.05,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        variants={{
                          hover: {
                            scale: 1.04,
                          },
                        }}
                        transition={{
                          duration: 0.65,
                          ease,
                        }}
                        className="h-[280px] w-full object-cover md:h-[350px]"
                      />

                      <motion.div
                        variants={{
                          hover: {
                            opacity: 0.9,
                          },
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="absolute inset-0 bg-gradient-to-t from-[#0B1A38]/75 via-[#0B1A38]/10 to-transparent"
                      />

                      <div className="absolute bottom-0 left-0 p-6 md:p-7">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E10600]">
                          Expertise {activeService.number}
                        </span>

                        <h3 className="mt-2 text-[24px] font-semibold tracking-tight text-white md:text-[30px]">
                          {activeService.title}
                        </h3>
                      </div>
                    </motion.div>

                    <div className="pt-7">
                      <p className="text-[15px] leading-[1.75] text-[#6E7A93] md:text-[16px]">
                        {activeService.description}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {activeService.items.map((item, index) => (
                          <motion.div
                            key={item}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            whileHover={{
                              x: 4,
                            }}
                            transition={{
                              duration: 0.35,
                              delay: 0.06 * index,
                              ease,
                            }}
                            className="group flex items-start gap-3 border-b border-[#E8ECF2] pb-3"
                          >
                            <motion.span
                              whileHover={{
                                scale: 1.4,
                              }}
                              className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#E10600]"
                              aria-hidden="true"
                            />

                            <span className="text-[14px] leading-relaxed text-[#33405C] transition-colors duration-200 group-hover:text-[#0B1A38]">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease,
            }}
            className="h-[2px] origin-left bg-[#E10600]"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  )
}
