"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      value: "Boulevard Mohammed V, Tanger, Maroc",
      link: null,
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+212 6 00 00 00 00",
      link: "tel:+212600000000",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@terreetmer.ma",
      link: "mailto:contact@terreetmer.ma",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-deep-blue/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-2">Parlons de votre projet</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white">Contact</h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-3">Nous contacter</p>
                <h2 className="font-serif text-4xl font-light text-foreground mb-4">
                  Discutons de votre <span className="italic text-gold">vision</span>
                </h2>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Que vous ayez un projet précis ou simplement une envie de changement,
                  notre équipe est là pour vous guider et vous inspirer.
                </p>
                <div className="w-12 h-px bg-gold mt-6" />
              </div>

              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wide mb-1">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-foreground hover:text-gold text-sm transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/212600000000?text=Bonjour%20Terre%20et%20Mer,%20je%20souhaite%20un%20devis%20pour%20mon%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1eb355] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 w-full justify-center"
              >
                <MessageCircle size={20} />
                Contacter via WhatsApp
              </a>

              {/* Hours */}
              <div className="p-5 bg-card border border-theme rounded-lg">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Horaires d&apos;ouverture</h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex justify-between">
                    <span>Lundi – Vendredi</span>
                    <span>9h00 – 18h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span>10h00 – 16h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-gold">Fermé</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 bg-card border border-theme rounded-lg">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl font-light text-foreground mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Merci pour votre message. Notre équipe vous contactera dans les 24 heures.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", budget: "", projectType: "", message: "" }); }}
                      className="mt-6 text-gold hover:text-gold-dark text-sm transition-colors duration-200"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-serif text-2xl font-light text-foreground mb-6">
                      Votre demande de devis
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-foreground/50 uppercase tracking-wide mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full px-4 py-3 bg-background border border-theme rounded text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-foreground/50 uppercase tracking-wide mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className="w-full px-4 py-3 bg-background border border-theme rounded text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-foreground/50 uppercase tracking-wide mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+212 6 00 00 00 00"
                          className="w-full px-4 py-3 bg-background border border-theme rounded text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-foreground/50 uppercase tracking-wide mb-2">
                          Budget estimé
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-theme rounded text-foreground text-sm focus:outline-none focus:border-gold transition-colors duration-200"
                        >
                          <option value="">Sélectionner...</option>
                          <option value="< 20 000 MAD">Moins de 20 000 MAD</option>
                          <option value="20 000 - 50 000 MAD">20 000 – 50 000 MAD</option>
                          <option value="50 000 - 100 000 MAD">50 000 – 100 000 MAD</option>
                          <option value="> 100 000 MAD">Plus de 100 000 MAD</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-foreground/50 uppercase tracking-wide mb-2">
                        Type de projet *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-theme rounded text-foreground text-sm focus:outline-none focus:border-gold transition-colors duration-200"
                      >
                        <option value="">Sélectionner le type de projet...</option>
                        <option value="Décoration intérieure">Décoration intérieure</option>
                        <option value="Rénovation complète">Rénovation complète</option>
                        <option value="Aménagement d'espace">Aménagement d&apos;espace</option>
                        <option value="Home staging">Home staging</option>
                        <option value="Consultation">Consultation uniquement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-foreground/50 uppercase tracking-wide mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet, vos envies, la surface approximative..."
                        className="w-full px-4 py-3 bg-background border border-theme rounded text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-deep-blue hover:bg-deep-blue-dark dark:bg-gold dark:hover:bg-gold-dark text-white font-medium tracking-wide rounded transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Envoyer ma demande
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-beige-light dark:bg-deep-blue/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="text-gold mx-auto mb-2" />
            <p className="font-serif text-lg text-foreground">Tanger, Maroc</p>
            <p className="text-foreground/50 text-sm">Boulevard Mohammed V</p>
          </div>
        </div>
      </section>
    </>
  );
}
