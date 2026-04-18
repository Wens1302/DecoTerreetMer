"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { projects, services, testimonials } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">
              Nos expertises
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Des services d&apos;exception
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                variant={i === 1 ? "featured" : "default"}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark text-sm font-medium tracking-wide transition-colors duration-200 group"
            >
              Voir tous nos services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-beige-light dark:bg-deep-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">
              Notre portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Projets en vedette
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-white text-sm font-medium rounded tracking-wide transition-all duration-300"
            >
              Voir tous les projets
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">
              Transformation
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Avant / Après
            </h2>
            <p className="text-foreground/60 text-base mt-4 max-w-xl mx-auto">
              Découvrez la magie de nos transformations – des espaces ordinaires
              en intérieurs d&apos;exception.
            </p>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Appartement Malabata",
                before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
                after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
                description: "Rénovation complète face à la mer, fusion moderne et touches traditionnelles.",
              },
              {
                title: "Villa Contemporaine",
                before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
                after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
                description: "Transformation alliant design contemporain et artisanat marocain.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{item.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <Image src={item.before} alt={`Avant – ${item.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    </div>
                    <p className="text-center text-xs text-foreground/50 mt-2 tracking-wide uppercase">Avant</p>
                  </div>
                  <div>
                    <div className="relative h-48 overflow-hidden rounded-lg ring-2 ring-gold">
                      <Image src={item.after} alt={`Après – ${item.title}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    </div>
                    <p className="text-center text-xs text-gold mt-2 tracking-wide uppercase font-medium">Après</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-deep-blue dark:bg-deep-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">
              Témoignages
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Ils nous font confiance
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-gold/30 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx} className="text-gold text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-serif font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-beige-light dark:bg-deep-blue/20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Commençons ensemble
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              Votre projet mérite
              <br />
              <span className="italic text-gold">une approche d&apos;exception</span>
            </h2>
            <p className="text-foreground/60 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Partagez votre vision avec nous. Nous vous offrons une consultation
              gratuite pour discuter de votre projet à Tanger ou partout au Maroc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-deep-blue hover:bg-deep-blue-dark dark:bg-gold dark:hover:bg-gold-dark text-white font-medium tracking-wide rounded transition-all duration-300 hover:shadow-lg"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="https://wa.me/212600000000?text=Bonjour%20Terre%20et%20Mer,%20je%20souhaite%20un%20devis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1eb355] text-white font-medium tracking-wide rounded transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Contacter via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
