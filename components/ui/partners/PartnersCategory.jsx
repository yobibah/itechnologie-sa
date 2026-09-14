"use client";

import { motion } from "framer-motion";
import PartnersCard from "./PartnersCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PartnersCategory({
  category,
  items,
  CategoryIcon,
}) {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-4 mb-6">
        {CategoryIcon && (
          <div className="w-10 h-10 rounded-xl bg-red-700/10 flex items-center justify-center">
            <CategoryIcon className="w-5 h-5 text-red-900" />
          </div>
        )}

        <h2 className="text-2xl md:text-3xl font-bold text-red-900">
          {category}
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap items-center gap-8 md:gap-12"
      >
        {items
          .filter(Boolean)
          .map((partner) => (
            <motion.div key={partner.id || partner.name} variants={itemVariants}>
              <PartnersCard partner={partner} />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
}