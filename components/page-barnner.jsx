"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PageBanner({
titles,
route,
currentRoute,
images,
}) {
return ( <section className="relative w-full h-[280px] md:h-[350px] overflow-hidden">
{/* Image de fond */} <Image
     src={images}
     alt={titles}
     fill
     priority
     className="object-cover"
   />


  <div className="absolute inset-0 bg-black/50" />


  <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >

      <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
        <Link
          href="/"
          className="hover:text-white transition-colors"
        >
          Accueil
        </Link>

        <ChevronRight size={16} />

        {route && (
          <Link
            href={route}
            className="hover:text-white transition-colors"
          >
            {currentRoute}
          </Link>
        )}
      </div>

     
      <h1 className="text-3xl md:text-5xl font-black text-white">
        {titles}
      </h1>

     
      <div className="w-16 h-1 bg-red-900 rounded-full mt-4" />
    </motion.div>
  </div>
</section>


);
}
