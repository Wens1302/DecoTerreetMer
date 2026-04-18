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
      "Transformation complète d'une villa avec une fusion harmonieuse entre modernité et touches marocaines traditionnelles. Matériaux naturels, zellige artisanal et lignes épurées se mêlent pour un résultat raffiné.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    tags: ["Moderne Mixé", "Zellige", "Villa"],
    featured: true,
  },
  {
    id: "appartement-malabata",
    title: "Appartement Malabata",
    category: "Rénovation complète",
    location: "Malabata, Tanger",
    year: "2024",
    description:
      "Rénovation totale d'un appartement face à la mer alliant design contemporain et touches de décoration traditionnelle marocaine. Palette terracotta et matériaux nobles pour une ambiance chaleureuse et élégante.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    tags: ["Vue mer", "Rénovation", "Moderne Mixé"],
    featured: true,
  },
  {
    id: "riad-medina",
    title: "Riad Médina",
    category: "Aménagement d'espace",
    location: "Médina, Tanger",
    year: "2023",
    description:
      "Restauration fidèle de ce riad traditionnel au cœur de la médina : moucharabieh, arches andalouses, zellige coloré et fontaine centrale pour une immersion dans le patrimoine architectural marocain.",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d04b47?w=800&q=80",
    tags: ["Traditionnel", "Riad", "Patrimoine"],
    featured: true,
  },
  {
    id: "penthouse-cap-spartel",
    title: "Penthouse Cap Spartel",
    category: "Décoration intérieure",
    location: "Cap Spartel, Tanger",
    year: "2023",
    description:
      "Aménagement d'un penthouse avec vue panoramique sur l'Atlantique. Mélange audacieux de mobilier contemporain et d'artisanat marocain pour un espace entre modernité et tradition.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    tags: ["Penthouse", "Vue panoramique", "Moderne Mixé"],
    featured: false,
  },
  {
    id: "bureau-centre-ville",
    title: "Bureau Centre-Ville",
    category: "Home staging",
    location: "Centre-Ville, Tanger",
    year: "2023",
    description:
      "Mise en scène d'un espace de bureaux avec des accents décoratifs traditionnels marocains pour valoriser son attrait sur le marché immobilier.",
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
      "Rénovation chaleureuse d'une maison familiale puisant dans la décoration traditionnelle marocaine : couleurs terracotta, tissus brodés et mobilier artisanal pour une atmosphère conviviale et authentique.",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80",
    tags: ["Familial", "Traditionnel", "Chaleureux"],
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
