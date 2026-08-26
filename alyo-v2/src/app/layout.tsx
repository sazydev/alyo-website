import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL } from "@/data/seo";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | ALYO",
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Mattéo Boyeau Courtin", url: SITE_URL }],
  creator: "ALYO",
  publisher: "ALYO",
  category: "Création de sites internet et communication",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f3cff",
  colorScheme: "light",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Aller au contenu principal
        </a>
        <Header />
        <div className="site-content" id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
