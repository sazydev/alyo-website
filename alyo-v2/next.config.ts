import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/page/web.html", destination: "/#services", permanent: true },
      { source: "/page/creation.html", destination: "/#services", permanent: true },
      { source: "/page/a-propos.html", destination: "/#a-propos", permanent: true },
      { source: "/page/contact.html", destination: "/#contactez-nous", permanent: true },
      {
        source: "/page/mentions-legales.html",
        destination: "/mentions-legales",
        permanent: true,
      },
      {
        source: "/page/confidentialite.html",
        destination: "/politique-de-confidentialite",
        permanent: true,
      },
      { source: "/page/cgv.html", destination: "/cgv", permanent: true },
      {
        source: "/infos/mentions-legales.html",
        destination: "/mentions-legales",
        permanent: true,
      },
      {
        source: "/infos/confidentialite.html",
        destination: "/politique-de-confidentialite",
        permanent: true,
      },
      {
        source: "/infos/cookies.html",
        destination: "/politique-de-confidentialite#cookies",
        permanent: true,
      },
      { source: "/infos/conditions.html", destination: "/cgv", permanent: true },
    ];
  },
};

export default nextConfig;
