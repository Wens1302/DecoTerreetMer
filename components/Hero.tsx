"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1920&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/70 via-deep-blue/50 to-deep-blue/80" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gold/40" />
      <div className="absolute top-1/4 right-8 w-px h-32 bg-gold/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium"
        >
          Agence de Design d&apos;Intérieur · Tanger, Maroc
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
        >
          Sublimer vos espaces
          <br />
          <span className="italic text-gold-light">entre Terre et Mer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Nous créons des intérieurs d&apos;exception qui reflètent votre personnalité,
          alliant élégance intemporelle et modernité audacieuse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py-4 bg-gold hover:bg-gold-dark text-white font-medium tracking-wide rounded transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            Découvrir nos projets
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/50 hover:border-white text-white font-medium tracking-wide rounded transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            Demander un devis
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { number: "50+", label: "Projets réalisés" },
            { number: "8+", label: "Années d'expérience" },
            { number: "100%", label: "Clients satisfaits" },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-3xl font-semibold text-gold-light">{number}</div>
              <div className="text-white/60 text-xs mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
