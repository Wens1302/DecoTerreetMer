"use client";

import { motion } from "framer-motion";
import { Palette, Hammer, LayoutDashboard, Star, CheckCircle2, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Hammer,
  LayoutDashboard,
  Star,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "featured";
}

export default function ServiceCard({
  service,
  index = 0,
  variant = "default",
}: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Palette;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative p-8 rounded-lg border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        variant === "featured"
          ? "bg-deep-blue dark:bg-deep-blue-dark border-gold/30 text-white"
          : "bg-card border-theme hover:border-gold/30"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${
          variant === "featured"
            ? "bg-gold/20 group-hover:bg-gold/30"
            : "bg-gold/10 group-hover:bg-gold/20"
        }`}
      >
        <Icon size={22} className="text-gold" />
      </div>

      {/* Title */}
      <h3
        className={`font-serif text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-200 ${
          variant === "featured" ? "text-white" : "text-foreground"
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-6 ${
          variant === "featured" ? "text-white/70" : "text-foreground/60"
        }`}
      >
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckCircle2
              size={14}
              className="flex-shrink-0 text-gold"
            />
            <span
              className={`text-xs ${
                variant === "featured" ? "text-white/70" : "text-foreground/60"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-8 bg-gold/30 group-hover:bg-gold/60 transition-colors duration-300" />
        <div className="absolute top-0 right-0 h-px w-8 bg-gold/30 group-hover:bg-gold/60 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}
