'use client'

import { motion } from 'framer-motion'

const ease = [0.23, 1, 0.32, 1]

export default function SolutionHero({
    title,
    tagline,
    image,
    imageAlt,
}) {
    return (
        <section className="mt-6 w-full px-3 py-3 sm:mt-8 sm:px-4 sm:py-4 lg:mt-10 lg:px-6">
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
                        ease,
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
                        ease,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#0B1A38]/55 via-[#0B1A38]/25 to-transparent"
                    aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-center">
                    <div className="mx-auto w-full max-w-shell px-5 sm:px-6">
                        <div className="max-w-3xl">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                    ease,
                                }}
                                className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#E10600] sm:text-[11px] sm:tracking-[0.22em]"
                            >
                                Nos solutions
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.65,
                                    delay: 0.48,
                                    ease,
                                }}
                                className="mt-2 max-w-[90%] text-[25px] font-semibold leading-[1.08] tracking-tight text-white sm:mt-4 sm:max-w-2xl sm:text-[40px] lg:mt-5 lg:max-w-3xl lg:text-[56px]"
                            >
                                {title}
                            </motion.h1>

                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 56, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.7,
                                    ease,
                                }}
                                className="mt-3 h-[2px] bg-[#E10600] sm:mt-5 lg:mt-6"
                                aria-hidden="true"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.82,
                                    ease,
                                }}
                                className="mt-3 max-w-[95%] text-[12px] leading-[1.45] text-white/85 sm:mt-5 sm:max-w-2xl sm:text-[16px] sm:leading-[1.7] lg:mt-6 lg:text-[18px] lg:leading-relaxed"
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
                    className="absolute bottom-4 right-5 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 sm:flex lg:bottom-5 lg:right-6"
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

