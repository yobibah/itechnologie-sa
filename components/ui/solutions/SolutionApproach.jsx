'use client'

import { motion } from 'framer-motion'

const ease = [0.23, 1, 0.32, 1]

export default function SolutionApproach({ paragraph }) {
  return (
    <section className="relative overflow-hidden bg-[#F4F6F9]">
      <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-white/30 lg:block" />

      <div className="relative mx-auto max-w-shell px-6 py-2 md:py-5 lg:py-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="lg:col-span-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease,
              }}
              className="mb-8 flex items-center gap-4"
            >
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#E10600]">
                01
              </span>

              <span className="h-px w-10 bg-[#DDE3EC]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E7A93]">
                Notre approche
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease,
              }}
              className="max-w-xl text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0B1A38] md:text-[38px]"
            >
              Une démarche structurée, du conseil à la mise en œuvre
            </motion.h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 56, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.45,
                ease,
              }}
              className="mt-7 h-[2px] bg-[#E10600]"
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="relative lg:col-span-7"
          >
            <div className="absolute -left-6 top-0 hidden h-full w-px bg-[#DDE3EC] lg:block" />

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease,
              }}
              className="absolute -left-6 top-0 hidden h-full w-[2px] origin-top bg-[#E10600] lg:block"
            />

            <p className="max-w-3xl text-[17px] leading-[1.8] text-[#33405C] md:text-[20px] md:leading-[1.85]">
              {paragraph}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.55,
                ease,
              }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 bg-[#E10600]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E7A93]">
                Expertise · Conseil · Mise en œuvre
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
