'use client'

import { motion } from 'framer-motion'

export default function SolutionHero({
    title,
    tagline,
    image,
    imageAlt,
}) {
    return (
        <section className="relative isolate overflow-hidden bg-[#0B1A38]">
            <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div
                className="absolute inset-0 bg-[#0B1A38]/20"
                aria-hidden="true"
            />

            <div className="relative mx-auto flex min-h-87.5 max-w-shell flex-col justify-end px-6 pb-14 pt-20 md:min-h-100 md:pb-16 lg:min-h-115">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.28,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className="max-w-3xl"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E10600]">
                        Nos solutions
                    </p>

                    <h1 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[44px] lg:text-[56px]">
                        {title}
                    </h1>

                    <div
                        className="mt-6 h-[2px] w-14 bg-[#E10600]"
                        aria-hidden="true"
                    />

                    <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75 md:text-[18px]">
                        {tagline}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}