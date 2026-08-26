export const services = [
  {
    number: "01",
    title: "Création web",
    description:
      "Un site clair, rapide et adapté à votre activité pour présenter votre structure et faciliter la prise de contact.",
    points: [
      "Site vitrine ou projet e-commerce",
      "Mise en ligne et accompagnement",
      "Maintenance et évolutions si nécessaire",
    ],
  },
  {
    number: "02",
    title: "Identité visuelle",
    description:
      "Une identité reconnaissable et cohérente pour donner une image professionnelle à votre projet.",
    points: [
      "Création ou refonte de logo",
      "Couleurs et typographies",
      "Déclinaisons prêtes à utiliser",
    ],
  },
  {
    number: "03",
    title: "Supports de communication",
    description:
      "Des supports utiles et alignés avec votre identité pour communiquer au quotidien.",
    points: [
      "Affiches et supports imprimés",
      "Visuels pour les réseaux sociaux",
      "Modèles réutilisables",
    ],
  },
] as const;

export const reasons = [
  {
    number: "01",
    title: "Tout rendre plus clair",
    description:
      "Vos informations sont organisées pour être trouvées rapidement.",
  },
  {
    number: "02",
    title: "Donner une meilleure image",
    description:
      "Un site et des visuels propres pour une image professionnelle.",
  },
  {
    number: "03",
    title: "Vous faire gagner du temps",
    description:
      "Des solutions simples qui vous évitent du travail en plus.",
  },
  {
    number: "04",
    title: "Vous accompagner simplement",
    description:
      "Vous expliquez votre besoin, je m’occupe de la technique.",
  },
] as const;

export const projects = [
  {
    slug: "segre-basket",
    name: "Segré Basket",
    title: "Site web club sportif",
    type: "Club sportif",
    description:
      "Conception et développement complet du site de Segré Basket : équipes, entraînements, actualités, galerie, informations pratiques et accès aux matchs et résultats.",
    href: "https://segrebasket2.netlify.app/",
  },
  {
    slug: "escal",
    name: "ESCA’L",
    title: "Site web associatif",
    type: "Association",
    description:
      "Refonte du logo et conception du site d’ESCA’L : présentation de l’association, activités, actualités et informations pratiques pour les adhérents et les familles.",
    href: "https://escalmds.netlify.app/",
  },
  {
    slug: "nova",
    name: "Nova",
    title: "Projet e-commerce Nova",
    type: "E-commerce",
    description:
      "Création de l’identité visuelle et du site e-commerce : univers graphique, direction artistique et présentation cohérente des produits.",
    href: "https://novamds.netlify.app/",
  },
] as const;

export const projectTypes = [
  "Création de site web",
  "Identité visuelle",
  "Supports de communication",
  "Plusieurs besoins",
] as const;
