"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Projet non trouvé</h1>
          <Link href="/projects" className="text-gold hover:text-gold-dark">
            ← Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep-blue/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1 bg-gold text-white text-xs rounded-full mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white">{project.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-gold text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Retour aux projets
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-serif text-3xl font-light text-foreground mb-4">À propos du projet</h2>
                <p className="text-foreground/70 text-base leading-relaxed mb-8">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-beige-light dark:bg-deep-blue/20 text-foreground/60 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Before/After if available */}
                {project.beforeImage && project.afterImage && (
                  <div>
                    <h3 className="font-serif text-2xl font-light text-foreground mb-6">Avant / Après</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="relative h-56 rounded-lg overflow-hidden">
                          <Image
                            src={project.beforeImage}
                            alt="Avant"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        <p className="text-center text-xs text-foreground/50 mt-2 uppercase tracking-wide">Avant</p>
                      </div>
                      <div>
                        <div className="relative h-56 rounded-lg overflow-hidden ring-2 ring-gold">
                          <Image
                            src={project.afterImage}
                            alt="Après"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        <p className="text-center text-xs text-gold mt-2 uppercase tracking-wide font-medium">Après</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="p-6 bg-card border border-theme rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Détails du projet</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-foreground/70">
                    <MapPin size={16} className="text-gold" />
                    {project.location}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground/70">
                    <Calendar size={16} className="text-gold" />
                    {project.year}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground/70">
                    <Tag size={16} className="text-gold" />
                    {project.category}
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-deep-blue dark:bg-deep-blue-dark text-white rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-3">Un projet similaire ?</h3>
                <p className="text-white/70 text-sm mb-4">Contactez-nous pour discuter de votre projet.</p>
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 bg-gold hover:bg-gold-dark text-white text-sm font-medium rounded transition-all duration-200"
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="py-16 bg-beige-light dark:bg-deep-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light text-foreground mb-8 text-center">Autres projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`} className="group block">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-deep-blue/0 group-hover:bg-deep-blue/40 transition-all duration-300" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-white font-serif text-lg font-light">{p.title}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
