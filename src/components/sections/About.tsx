import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";

import styles from "./OnePage.module.css";

export function About() {
  return (
    <section className={styles.about} id="a-propos">
      <Reveal className={styles.aboutInner}>
        <div className={styles.aboutStage}>
          <Image className={styles.aboutHandLeft} src="/decor/hands-left.webp" alt="" width={230} height={136} sizes="230px" unoptimized aria-hidden="true" />
          <Image className={styles.aboutHandRight} src="/decor/hands-right.webp" alt="" width={230} height={160} sizes="230px" unoptimized aria-hidden="true" />
          <article className={styles.aboutCard}>
            <span className={styles.aboutLogo} aria-hidden="true" />
            <h2>
              FAITES
              <br />
              CONFIANCE À
              <br />
              ALYO
            </h2>
            <p>
              Des projets concrets réalisés pour des structures locales avec des résultats visibles. Nos équipes
              combinent expertise digitale et connaissance du terrain.
            </p>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
