"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import { ArrowRight, Phone } from "lucide-react";

export default function ServicesPage() {
  const process = [
    { step: "01", title: "Premier contact", desc: "Échangez avec notre équipe pour nous décrire votre projet et vos attentes." },
    { step: "02", title: "Visite & analyse", desc: "Nous visitons votre espace pour effectuer un diagnostic complet." },
    { step: "03", title: "Proposition créative", desc: "Nous vous présentons nos idées avec plans, mood boards et estimations." },
    { step: "04", title: "Validation & exécution", desc: "Une fois validé, nous coordonnons tous les corps de métier." },
    { step: "05", title: "Suivi de chantier", desc: "Nous supervisons chaque étape pour garantir la qualité de réalisation." },
    { step: "06", title: "Remise des clés", desc: "Votre espace transformé vous est livré dans les détails les plus fins." },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-deep-blue/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-2">Expertise</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white">Nos services</h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">Ce que nous proposons</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Une offre complète
            </h2>
            <p className="text-foreground/60 text-base mt-4 max-w-2xl mx-auto">
              De la décoration à la rénovation complète, nous accompagnons votre projet
              à chaque étape avec expertise et créativité.
            </p>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-beige-light dark:bg-deep-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">Comment ça fonctionne</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Notre processus
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-card border border-theme rounded-lg hover:border-gold/30 transition-all duration-300"
              >
                <span className="font-serif text-5xl text-gold/15 font-bold absolute top-4 right-4">{item.step}</span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-deep-blue dark:bg-deep-blue-dark text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
            Démarrons votre projet
          </h2>
          <p className="text-white/70 text-base mb-8">
            Contactez-nous dès aujourd&apos;hui pour une consultation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-white font-medium tracking-wide rounded transition-all duration-300"
            >
              Demander un devis
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+212600000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-white text-white font-medium tracking-wide rounded transition-all duration-300"
            >
              <Phone size={16} />
              +212 6 00 00 00 00
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
