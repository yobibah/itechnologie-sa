"use client";

import {
  Building2,
  Shield,
  Network,
  Cloud,
  Database,
  Server,
  Wifi,
  Cpu,
  LayoutGrid,
} from "lucide-react";

function getCategoryIcon(category) {
  const key = category.toLowerCase();

  if (key.includes("sécurité") || key.includes("securite")) {
    return Shield;
  }

  if (key.includes("réseau") || key.includes("reseau")) {
    return Network;
  }

  if (key.includes("cloud")) {
    return Cloud;
  }

  if (key.includes("data") || key.includes("donnée")) {
    return Database;
  }

  if (key.includes("serveur")) {
    return Server;
  }

  if (
    key.includes("wifi") ||
    key.includes("télécom") ||
    key.includes("telecom")
  ) {
    return Wifi;
  }

  if (
    key.includes("matériel") ||
    key.includes("materiel") ||
    key.includes("hardware")
  ) {
    return Cpu;
  }

  return LayoutGrid;
}

export default function PartnersFilters({
  categories,
  activeCategory,
  setActiveCategory,
  countsByCategory,
  totalPartners,
}) {
  return (
    <div className="sticky top-0 z-30 backdrop-blur-md bg-white/80  border-b border-slate-200 ">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center gap-4">

        {/* Onglets */}
        <div className="flex flex-wrap gap-2 flex-1">
          {["Tous", ...categories].map((category) => {
            const isActive = activeCategory === category;

            const Icon =
              category === "Tous"
                ? Building2
                : getCategoryIcon(category);

            const count =
              category === "Tous"
                ? totalPartners
                : countsByCategory[category] || 0;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  isActive
                    ? "bg-red-950 text-white border-red-950"
                    : "bg-transparent text-red-900 border-blue-300  hover:text-red-950 hover:border-red-950/40"
                }`}
              >
                <Icon className="w-4 h-4" />

                {category}

                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20"
                      : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}