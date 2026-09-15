'use client'

import { motion } from 'framer-motion'

export default function SolutionHero({
    title,
    tagline,
    image,
    imageAlt,
}) {
    return (
        <section className="mt-10 w-full px-4 py-4 sm:px-4 sm:py-4 lg:px-6">
            <div
                className="
                    relative
                    aspect-[16/9]
                    w-full
                    overflow-hidden
                    rounded-lg
                    bg-black
                    sm:aspect-[16/8]
                    lg:aspect-[16/4]
                "
            >
                <motion.img
                    src={image}
                    alt={imageAlt}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-[#0B1A38]/30"
                    aria-hidden="true"
                />

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#0B1A38]/45 via-[#0B1A38]/20 to-transparent"
                    aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-center">
                    <div className="mx-auto w-full max-w-shell px-6">
                        <div className="max-w-3xl">
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E10600]"
                            >
                                Nos solutions
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.65,
                                    delay: 0.48,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[44px] lg:text-[56px]"
                            >
                                {title}
                            </motion.h1>

                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 56, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.75,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                className="mt-6 h-[2px] bg-[#E10600]"
                                aria-hidden="true"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.88,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/80 md:text-[18px]"
                            >
                                {tagline}
                            </motion.p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 1.15,
                    }}
                    className="absolute bottom-5 right-6 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 sm:flex"
                >
                    <span>Découvrir</span>

                    <motion.span
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="text-[#E10600]"
                    >
                        ↓
                    </motion.span>
                </motion.div>
            </div>
        </section>
    )
}