export const mainNavigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "À propos", href: "/#a-propos" },
] as const;

export const contactHref = "/#contactez-nous";

export const legalNavigation = [
  { label: "Mentions légales", href: "/mentions-legales" },
  {
    label: "Confidentialité",
    href: "/politique-de-confidentialite",
  },
  { label: "CGV", href: "/cgv" },
] as const;

export const footerNavigation = [
  {
    title: "Services",
    links: [
      { label: "Création web", href: "/#services" },
      { label: "Identité visuelle", href: "/#services-identite" },
      { label: "Tarifs", href: "/#tarifs" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/#a-propos" },
      { label: "LinkedIn", href: null },
      { label: "Contact", href: contactHref },
    ],
  },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: null, icon: "linkedin" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alyocommunication/",
    icon: "instagram",
  },
  { label: "TikTok", href: null, icon: "tiktok" },
] as const;

export type SocialIconName = (typeof socialLinks)[number]["icon"];
