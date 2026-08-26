import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALYO — Sites web et communication",
    short_name: "ALYO",
    description:
      "Création de sites internet, identités visuelles et supports de communication pour les clubs, associations et structures locales.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fcfc",
    theme_color: "#1f3cff",
    lang: "fr",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
