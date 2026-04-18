"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Tag } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Link href={`/projects/${project.id}`} className="group block">
        <div className="overflow-hidden rounded-lg bg-card border border-theme shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-deep-blue/0 group-hover:bg-deep-blue/40 transition-all duration-500" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gold text-white text-xs font-medium rounded-full tracking-wide">
                {project.category}
              </span>
            </div>

            {/* View more overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="px-5 py-2 bg-white text-deep-blue text-sm font-medium rounded tracking-wide">
                Voir le projet
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-gold transition-colors duration-200 mb-2">
              {project.title}
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2 mb-4">
              {project.description}
            </p>
            <div className="flex items-center justify-between text-xs text-foreground/50">
              <div className="flex items-center gap-1">
                <MapPin size={12} className="text-gold" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={12} className="text-gold" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
