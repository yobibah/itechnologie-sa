"use client";
import PartnersHero from "../../../components/ui/partners/PartnersHero";
import PartnersCategory from "../../../components/ui/partners/PartnersCategory";

import {
  Shield,
  Network,
  Cloud,
  Database,
  Server,
  Wifi,
  Cpu,
  LayoutGrid,
} from "lucide-react";

import * as partnersData from "@/app/data/partners";

const partenairesTechnologiques = partnersData.partenairesTechnologiques || [];
const categoriesTechnologiques = partnersData.categoriesTechnologiques || [];

function getCategoryIcon(category) {
  if (!category) return LayoutGrid;
  const key = category.toLowerCase();

  if (key.includes("sécurité") || key.includes("securite")) return Shield;
  if (key.includes("réseau") || key.includes("reseau")) return Network;
  if (key.includes("cloud")) return Cloud;
  if (key.includes("data") || key.includes("donnée")) return Database;
  if (key.includes("serveur")) return Server;
  if (key.includes("wifi") || key.includes("télécom") || key.includes("telecom")) return Wifi;
  if (key.includes("matériel") || key.includes("materiel") || key.includes("hardware")) return Cpu;

  return LayoutGrid;
}

export default function PartenairesTechnologiquesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white transition-colors duration-300">
      {/* HERO STATIQUE */}
      <PartnersHero />

      {/* CONTENU LOGOS PAR CATÉGORIE */}
      <div className="container mx-auto px-4 py-14 md:py-20">
        {categoriesTechnologiques.length > 0 ? (
          categoriesTechnologiques.map((category) => {
            const items = partenairesTechnologiques.filter(
              (partner) => partner && partner.category === category
            );

            if (items.length === 0) return null;

            const CategoryIcon = getCategoryIcon(category);

            return (
              <PartnersCategory
                key={category}
                category={category}
                items={items}
                CategoryIcon={CategoryIcon}
              />
            );
          })
        ) : (
          <p className="text-center text-slate-500">Aucun partenaire à afficher.</p>
        )}
      </div>
    </main>
  );
}