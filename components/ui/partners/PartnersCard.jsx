"use client";

import Image from "next/image";

export default function PartnersCard({ partner }) {
  if (!partner || !partner.logo) return null;

  return (
    <div className="flex h-28 w-48 items-center justify-center p-2 transition-transform duration-300 hover:scale-110">
      <Image
        src={partner.logo}
        alt={partner.name || "Logo"}
        width={200}
        height={100}
        className="max-h-24 w-auto object-contain"
      />
    </div>
  );
}