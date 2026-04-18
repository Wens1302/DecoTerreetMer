// Mock data for projects and services

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  tags: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "villa-tanger",
    title: "Villa Contemporaine",
    category: "Décoration intérieure",
    location: "Tanger, Maroc",
    year: "2024",
    description:
      "Transformation complète d'une villa avec une touche de luxe minimaliste. Mélange harmonieux de matériaux naturels et de lignes épurées pour créer un espace raffiné.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tags: ["Luxe", "Minimaliste", "Villa"],
    featured: true,
  },
  {
    id: "appartement-malabata",
    title: "Appartement Malabata",
    category: "Rénovation complète",
    location: "Malabata, Tanger",
    year: "2024",
    description:
      "Rénovation totale d'un appartement face à la mer avec des matériaux nobles et une palette de couleurs inspirée de l'horizon marin.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    tags: ["Vue mer", "Rénovation", "Appartement"],
    featured: true,
  },
  {
    id: "riad-medina",
    title: "Riad Médina",
    category: "Aménagement d'espace",
    location: "Médina, Tanger",
    year: "2023",
    description:
      "Fusion entre l'architecture traditionnelle marocaine et le design contemporain pour ce riad au cœur de la médina.",
    image:
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80",
    tags: ["Traditionnel", "Riad", "Fusion"],
    featured: true,
  },
  {
    id: "penthouse-cap-spartel",
    title: "Penthouse Cap Spartel",
    category: "Décoration intérieure",
    location: "Cap Spartel, Tanger",
    year: "2023",
    description:
      "Aménagement d'un penthouse avec vue panoramique sur l'Atlantique. Chaque pièce raconte une histoire entre terre et mer.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    tags: ["Penthouse", "Vue panoramique", "Luxe"],
    featured: false,
  },
  {
    id: "bureau-centre-ville",
    title: "Bureau Centre-Ville",
    category: "Home staging",
    location: "Centre-Ville, Tanger",
    year: "2023",
    description:
      "Mise en scène professionnelle d'un espace de bureaux pour maximiser son attrait et sa valeur sur le marché immobilier.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["Bureau", "Home staging", "Commercial"],
    featured: false,
  },
  {
    id: "maison-famille",
    title: "Maison Familiale",
    category: "Rénovation",
    location: "Tanger, Maroc",
    year: "2022",
    description:
      "Rénovation chaleureuse et fonctionnelle d'une maison familiale alliant esthétisme et praticité du quotidien.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    tags: ["Familial", "Fonctionnel", "Chaleureux"],
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: "decoration",
    title: "Décoration Intérieure",
    description:
      "Créez un intérieur qui vous ressemble. Nous sélectionnons mobilier, textiles et accessoires pour composer des espaces harmonieux et élégants.",
    icon: "Palette",
    features: [
      "Conseil en décoration",
      "Sélection de mobilier",
      "Coordination des matériaux",
      "Mise en scène finale",
    ],
  },
  {
    id: "renovation",
    title: "Rénovation Complète",
    description:
      "De la conception à la réalisation, nous prenons en charge votre projet de rénovation pour transformer votre espace en véritable chef-d'œuvre.",
    icon: "Hammer",
    features: [
      "Étude de faisabilité",
      "Plans et visualisations 3D",
      "Gestion des artisans",
      "Suivi de chantier",
    ],
  },
  {
    id: "amenagement",
    title: "Aménagement d'Espace",
    description:
      "Optimisez chaque mètre carré de votre intérieur. Nous concevons des plans d'aménagement fonctionnels qui maximisent l'espace et la fluidité.",
    icon: "LayoutDashboard",
    features: [
      "Analyse de l'espace",
      "Plans d'optimisation",
      "Solutions sur mesure",
      "Rangements intégrés",
    ],
  },
  {
    id: "home-staging",
    title: "Home Staging",
    description:
      "Valorisez votre bien immobilier pour la vente ou la location. Nous mettons en scène votre propriété pour maximiser son attrait et sa valeur.",
    icon: "Star",
    features: [
      "Diagnostic immobilier",
      "Dépersonnalisation",
      "Relooking économique",
      "Photos professionnelles",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sofia El Amrani",
    role: "Propriétaire d'appartement, Tanger",
    content:
      "Terre et Mer a transformé mon appartement au-delà de mes espérances. Leur sens du détail et leur vision artistique sont exceptionnels.",
    rating: 5,
    avatar: "S",
  },
  {
    id: 2,
    name: "Karim Benali",
    role: "Directeur, Villa Malabata",
    content:
      "Une équipe professionnelle et créative. Ils ont su capturer l'essence de notre vision tout en apportant leur expertise unique.",
    rating: 5,
    avatar: "K",
  },
  {
    id: 3,
    name: "Nadia Fassi",
    role: "Architecte, Casablanca",
    content:
      "Je recommande Terre et Mer à tous mes clients. Leur approche haut de gamme et leur maîtrise des matériaux sont incomparables.",
    rating: 5,
    avatar: "N",
  },
];
