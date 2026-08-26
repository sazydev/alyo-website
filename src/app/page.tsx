import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Presentation } from "@/components/sections/Presentation";
import { Pricing } from "@/components/sections/Pricing";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { WhyAlyo } from "@/components/sections/WhyAlyo";
import {
  createPageMetadata,
  HOME_DESCRIPTION,
  HOME_TITLE,
  homeStructuredData,
} from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <main>
        <Hero />
        <Presentation />
        <Services />
        <WhyAlyo />
        <Projects />
        <Pricing />
        <About />
        <Contact />
      </main>
    </>
  );
}
