import Image from "next/image";

import { SectionLink } from "@/components/ui/SectionLink";
import { heroPatternLines, heroPatternPositions } from "@/data/hero";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.pattern} aria-hidden="true">
        {heroPatternLines.map((line, index) => (
          <div
            key={line}
            className={styles.patternLine}
            style={{ top: `${heroPatternPositions[index]}%` }}
          >
            {line}
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src="/brand/logo-white.webp"
            alt="Alyo logo"
            width={500}
            height={500}
            preload
            unoptimized
          />
        </div>

        <h1 aria-label="ALYO, création de sites internet et communication pour les clubs et associations à Angers">
          ATTIREZ
          <br />
          <span>CONVERTISSEZ</span>
          <br />
          DÉVELOPPEZ
        </h1>

        <p>Une présence digitale simple et efficace pour attirer plus d&apos;adhérents</p>

        <SectionLink href="#presentation" className={styles.button}>
          Découvrir Alyo
        </SectionLink>
      </div>
    </section>
  );
}
