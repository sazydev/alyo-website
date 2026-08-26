export type PricingIconName =
  | "website"
  | "evolving"
  | "maintenance"
  | "logo"
  | "posters"
  | "social"
  | "communication";

export type PricingOffer = {
  title: string;
  kicker: string;
  price: string;
  suffix: string;
  description?: string;
  points: readonly string[];
  icon: PricingIconName;
  buttonLabel: string;
  badge?: string;
  featured?: boolean;
  pricePrefix?: string;
};

export const webPricingOffers = [
  {
    title: "Site vitrine",
    kicker: "Présence en ligne",
    pricePrefix: "À partir de",
    price: "280",
    suffix: "€",
    points: [
      "Site responsive pour présenter votre activité",
      "Formulaire de contact",
      "Mise en ligne",
    ],
    icon: "website",
    buttonLabel: "Demander un devis",
  },
  {
    title: "Site évolutif",
    kicker: "Projet sur mesure",
    pricePrefix: "À partir de",
    price: "650",
    suffix: "€",
    points: [
      "Site sur mesure avec gestion de contenu possible",
      "Fonctionnalités adaptées au besoin",
      "Accompagnement à la mise en ligne",
    ],
    icon: "evolving",
    buttonLabel: "Demander un devis",
    badge: "Recommandé",
    featured: true,
  },
  {
    title: "Maintenance",
    kicker: "Suivi dans le temps",
    pricePrefix: "À partir de",
    price: "25",
    suffix: "€/mois",
    points: [
      "Mises à jour et petites modifications",
      "Suivi technique",
      "Ajout progressif de contenu ou fonctionnalités selon le besoin",
    ],
    icon: "maintenance",
    buttonLabel: "Demander un devis",
  },
] as const satisfies readonly PricingOffer[];

export const digitalPricingOffers = [
  {
    title: "Création de logo",
    kicker: "Identité visuelle",
    price: "50",
    suffix: "€",
    points: [
      "Création ou refonte",
      "Jusqu'à 3 modifications",
      "Fichier prêt à utiliser",
    ],
    icon: "logo",
    buttonLabel: "Choisir",
  },
  {
    title: "Pack 10 affiches",
    kicker: "Affichage & impression",
    price: "90",
    suffix: "€",
    points: [
      "Format print haute définition, prêt à imprimer",
      "Matchs, recrutement, événements",
      "Idéal pour le club-house et les locaux",
    ],
    icon: "posters",
    buttonLabel: "Choisir",
  },
  {
    title: "Pack 10 visuels",
    kicker: "Réseaux sociaux",
    price: "70",
    suffix: "€",
    points: [
      "10 visuels prêts à publier",
      "Format Instagram et Facebook",
      "Pour une communication régulière",
    ],
    icon: "social",
    buttonLabel: "Choisir",
  },
  {
    title: "Pack communication",
    kicker: "Accompagnement mensuel",
    price: "99",
    suffix: "€/mois",
    points: [
      "5 affiches + 5 visuels chaque mois",
      "Logo offert",
      "Suivi et conseils inclus",
    ],
    icon: "communication",
    buttonLabel: "Choisir",
    badge: "Le plus rentable",
    featured: true,
  },
] as const satisfies readonly PricingOffer[];
