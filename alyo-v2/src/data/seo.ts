import type { Metadata } from "next";

export const SITE_URL = "https://alyo-communication.fr";
export const SITE_NAME = "ALYO";
export const HOME_TITLE = "Agence web à Angers | Création de sites internet | ALYO";
export const HOME_DESCRIPTION =
  "ALYO accompagne les clubs, associations et structures locales à Angers avec des sites internet, identités visuelles et supports de communication sur mesure.";
export const SOCIAL_IMAGE_PATH = "/opengraph-image";
export const PRIMARY_IMAGE_PATH =
  "/sections/presentation/alyo-club-communication.png";

const WEBSITE_ID = SITE_URL + "/#website";
const WEBPAGE_ID = SITE_URL + "/#webpage";
const ORGANIZATION_ID = SITE_URL + "/#organization";
const PRIMARY_IMAGE_ID = SITE_URL + "/#primaryimage";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const socialTitle = absoluteTitle ? title : title + " | ALYO";

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: SOCIAL_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "ALYO, création de sites internet et communication à Angers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE_PATH],
    },
  };
}

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL + "/",
      name: SITE_NAME,
      alternateName: "Alyo Communication",
      inLanguage: "fr-FR",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
    },
    {
      "@type": "ImageObject",
      "@id": PRIMARY_IMAGE_ID,
      url: SITE_URL + PRIMARY_IMAGE_PATH,
      contentUrl: SITE_URL + PRIMARY_IMAGE_PATH,
      width: 1536,
      height: 1024,
      caption:
        "Créations ALYO pour un club sportif : site web, réseaux sociaux, affiche et identité visuelle",
    },
    {
      "@type": "WebPage",
      "@id": WEBPAGE_ID,
      url: SITE_URL + "/",
      name: HOME_TITLE,
      description: HOME_DESCRIPTION,
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      about: {
        "@id": ORGANIZATION_ID,
      },
      primaryImageOfPage: {
        "@id": PRIMARY_IMAGE_ID,
      },
      inLanguage: "fr-FR",
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      legalName: "Mattéo Boyeau Courtin",
      alternateName: "Alyo Communication",
      url: SITE_URL + "/",
      logo: {
        "@type": "ImageObject",
        url: SITE_URL + "/icon.png",
        contentUrl: SITE_URL + "/icon.png",
        width: 512,
        height: 512,
      },
      image: {
        "@id": PRIMARY_IMAGE_ID,
      },
      description: HOME_DESCRIPTION,
      foundingDate: "2026-05-11",
      founder: {
        "@type": "Person",
        name: "Mattéo Boyeau Courtin",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "SIREN",
        value: "104851068",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "6 rue Valdemaine",
        addressLocality: "Angers",
        postalCode: "49100",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Angers" },
        { "@type": "AdministrativeArea", name: "Maine-et-Loire" },
        { "@type": "Country", name: "France" },
      ],
      email: "contact@alyo-communication.fr",
      telephone: "+33754366013",
      sameAs: ["https://www.instagram.com/alyocommunication/"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services ALYO",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Création de sites internet",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Création d’identité visuelle",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Supports de communication",
            },
          },
        ],
      },
    },
  ],
} as const;
