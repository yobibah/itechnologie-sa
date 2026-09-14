"use client";

import ReferencesHero from "../../../components/ui/references/ReferencesHero";
import ReferencesTestimonials from "../../../components/ui/references/ReferencesTestimonials";
import { references } from "@/app/data/references";

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white transition-colors duration-300">
      {/* HERO STATIQUE */}
      <ReferencesHero />

      {/* TÉMOIGNAGES */}
      <ReferencesTestimonials references={references} />
    </main>
  );
}