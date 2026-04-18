"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      description:
        "Chaque projet est traité avec le plus grand soin, des matériaux aux finitions.",
    },
    {
      title: "Authenticité",
      description:
        "Nous créons des espaces qui reflètent l'identité unique de chaque client.",
    },
    {
      title: "Innovation",
      description:
        "Nous marions le design contemporain avec l'artisanat traditionnel marocain.",
    },
    {
      title: "Durabilité",
      description:
        "Nous privilégions des matériaux durables et des solutions éco-responsables.",
    },
  ];

  const team = [
    {
      name: "Yasmine Idrissi",
      role: "Fondatrice & Architecte d'Intérieur",
      description:
        "Diplômée des Beaux-Arts de Paris, Yasmine apporte une vision internationale à chaque projet.",
      avatar: "Y",
    },
    {
      name: "Omar Benali",
      role: "Designer Senior",
      description:
        "Spécialiste en design d'intérieur contemporain avec une passion pour les espaces minimalistes.",
      avatar: "O",
    },
    {
      name: "Leila Fassi",
      role: "Chef de Projet",
      description:
        "Coordinatrice expérimentée qui assure la livraison de chaque projet dans les délais.",
      avatar: "L",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-deep-blue/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-2">
              Notre histoire
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white">
              À propos de nous
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Notre agence
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                L&apos;art de sublimer
                <br />
                <span className="italic text-gold">chaque espace</span>
              </h2>
              <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                <p>
                  Fondée à Tanger en 2016, Terre et Mer est née d&apos;une passion
                  profonde pour la beauté des espaces intérieurs et de la
                  richesse culturelle marocaine. Notre nom évoque cette dualité
                  unique de Tanger – ville où la terre et la mer se rencontrent.
                </p>
                <p>
                  Nous croyons que chaque espace raconte une histoire. Notre
                  mission est de vous aider à écrire la vôtre, en créant des
                  intérieurs qui reflètent votre personnalité et répondent à vos
                  aspirations.
                </p>
                <p>
                  Avec plus de 50 projets réalisés à Tanger et au Maroc, nous
                  avons développé une expertise unique alliant design
                  contemporain et artisanat local.
                </p>
              </div>
              <div className="w-16 h-px bg-gold mt-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"
                  alt="Notre agence Terre et Mer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-beige-light dark:bg-deep-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">
              Notre vision
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Nos valeurs fondamentales
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-gold font-bold text-lg">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80"
                    alt="Design process"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
                    alt="Interior design"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                    alt="Renovation"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                    alt="Luxury interior"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Notre méthode
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                Une approche
                <br />
                <span className="italic text-gold">sur mesure</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Consultation initiale",
                    desc: "Nous écoutons vos besoins, vos goûts et vos contraintes pour comprendre votre vision.",
                  },
                  {
                    step: "02",
                    title: "Concept & Design",
                    desc: "Nous élaborons un concept unique avec plans, visualisations 3D et sélection de matériaux.",
                  },
                  {
                    step: "03",
                    title: "Réalisation",
                    desc: "Nous coordonnons tous les artisans et fournisseurs pour une exécution parfaite.",
                  },
                  {
                    step: "04",
                    title: "Livraison",
                    desc: "Nous finalisons chaque détail et vous livrons un espace d'exception.",
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="font-serif text-3xl text-gold/30 font-bold w-12 flex-shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-deep-blue dark:bg-deep-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">
              L&apos;équipe
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Des passionnés à votre service
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 border border-white/10 rounded-lg hover:border-gold/30 transition-colors duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-white text-2xl font-bold">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-3">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
            Prêt à transformer votre espace ?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-white font-medium tracking-wide rounded transition-all duration-300 hover:shadow-lg"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </section>
    </>
  );
}
