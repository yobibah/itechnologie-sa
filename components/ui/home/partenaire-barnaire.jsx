"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ibm from "../../../public/images/ibm.png";
import apc from "../../../public/images/apc.jpeg";
import cisco from "../../../public/images/cisco.png";
import dell from "../../../public/images/dell.jpg";
import diabold from "../../../public/images/diabold.png";
import f5 from "../../../public/images/f5.png";
import hikbusiness from "../../../public/images/hikbusiness.jpeg";
import hikvi from "../../../public/images/hikvision.jpeg";
import hua from "../../../public/images/huawei.jpeg";
import gona from "../../../public/images/iagona.webp";
import kasp from "../../../public/images/kaspersky.jpeg";
import leno from "../../../public/images/lenovo.png";
import lifes from "../../../public/images/life.png";
import mic from "../../../public/images/microsoft.png";
import ora from "../../../public/images/oracle.png";
import pala from "../../../public/images/palao.webp";
import ven from "../../../public/images/veean.png";

export default function PartenairesBanner() {
  const partenaires = [
    { name: "IBM", photo: ibm },
    { name: "Cisco", photo: cisco },
    { name: "Palo Alto", photo: pala },
    { name: "Kaspersky", photo: kasp },
    { name: "F5", photo: f5 },
    { name: "Veeam", photo: ven },
    { name: "Lenovo", photo: leno },
    { name: "Life Is On", photo: lifes },
    { name: "APC", photo: apc },
    { name: "Hikvision", photo: hikvi },
    { name: "Hewlett Packard", photo: hikbusiness },
    { name: "Dell", photo: dell },
    { name: "Huawei", photo: hua },
    { name: "Microsoft", photo: mic },
    { name: "Diebold", photo: diabold },
    { name: "Iagona", photo: gona },
    { name: "Oracle", photo: ora },
  ];

  const doubledPartenaires = [...partenaires, ...partenaires];

  return (
    
    <motion.section
      className="w-full px-2 py-8 sm:px-4 lg:px-6 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
   
      <motion.div
        className="flex flex-col justify-center items-center mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-black">Nos partenaires</h1>
        <p className="mt-2 text-gray-500 text-center">
          Nous collaborons avec des acteurs technologiques de référence.
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

  
        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 100,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubledPartenaires.map((partenaire, index) => (
            <div
              key={index}
              className="relative w-44 h-44 shrink-0 flex items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm hover:border-red-700 hover:shadow-md transition-all"
            >
              {partenaire.photo ? (
                <Image
                  src={partenaire.photo}
                  alt={partenaire.name}
                  width={130}
                  height={64}
                  className="max-h-16 max-w-[130px] object-contain"
                />
              ) : (
                <span className="text-lg font-bold text-gray-700">
                  {partenaire.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      <div className="border-b border-gray-300 mt-8" />
    </motion.section>
  );
}