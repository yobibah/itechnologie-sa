'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'

const ease = [0.23, 1, 0.32, 1]

export default function SolutionIntro({
  label,
  title,
  paragraphs,
}) {
  return (
    <section className="bg-[#F4F6F9]">
      <div className="mx-auto max-w-shell px-6 py-5 md:py-7 lg:py-9">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="overflow-hidden rounded-2xl border border-[#E2E7EF] bg-white shadow-[0_12px_40px_rgba(11,26,56,0.06)]"
        >
          <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-12 lg:gap-14 lg:p-11">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease,
              }}
              className="lg:col-span-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.15,
                  ease,
                }}
              >
                <p className="eyebrow">
                  {label}
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                  ease,
                }}
                className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-tight text-[#0B1A38] md:text-[36px]"
              >
                {title}
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
                className="mt-6 h-[2px] bg-[#E10600]"
                aria-hidden="true"
              />
            </motion.div>

            <div className="lg:col-span-7">
              <div className="space-y-5">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={`${index}-${paragraph.slice(0, 24)}`}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.12,
                      ease,
                    }}
                    className={
                      index === 0
                        ? 'text-[16px] leading-[1.7] text-[#33405C] md:text-[18px]'
                        : 'text-[14px] leading-[1.75] text-[#6E7A93] md:text-[15px]'
                    }
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + paragraphs.length * 0.12,
                  ease,
                }}
                whileHover={{
                  y: -2,
                }}
                className="group mt-7 inline-flex items-center gap-3 border border-[#DDE3EC] px-5 py-3 text-[13px] font-semibold text-[#0B1A38] transition-all duration-200 ease-institutional hover:border-[#0B1A38] hover:bg-[#0B1A38] hover:text-white"
              >
                Échanger avec un expert

                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 ease-institutional group-hover:translate-x-1"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </motion.a>
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

