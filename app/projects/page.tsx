"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["Tous", "Décoration intérieure", "Rénovation complète", "Aménagement d'espace", "Home staging", "Rénovation"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-deep-blue/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-2">Portfolio</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white">Nos projets</h1>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">Nos réalisations</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Chaque projet, une histoire</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold border-gold text-white"
                    : "border-theme text-foreground/60 hover:border-gold hover:text-gold bg-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-foreground/50">
              <p className="font-serif text-2xl">Aucun projet dans cette catégorie</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
