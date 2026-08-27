import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLink } from "@/components/ui/SectionLink";

import styles from "./OnePage.module.css";

export function Presentation() {
  return (
    <section className={styles.presentation} id="presentation">
      <div className={styles.presentationInner}>
        <Reveal className={styles.presentationVisual}>
          <Image
            className={styles.presentationIllustration}
            src="/sections/presentation/alyo-club-communication.png"
            alt="Illustration des créations Alyo pour un club sportif : site web, réseaux sociaux, affiche et identité visuelle"
            width={1536}
            height={1024}
            sizes="(max-width: 480px) calc(100vw - 40px), (max-width: 1100px) 650px, 50vw"
          />
        </Reveal>

        <Reveal className={styles.presentationText} delay={200}>
          <span className={styles.tagLabel}>Pensé pour les clubs</span>
          <h2>Une présence digitale pensée pour donner confiance à vos <span>sponsors et adhérents</span></h2>
          <p>
            Des solutions simples pour améliorer votre visibilité et votre image professionnelle.
          </p>
          <div className={styles.checklist} aria-label="Les services Alyo">
            <span><i>✓</i> Création de sites web</span>
            <span><i>✓</i> Identité visuelle</span>
            <span><i>✓</i> Réseaux sociaux</span>
          </div>
          <SectionLink className={styles.blueButton} href="#contactez-nous">
            Demander un devis <span aria-hidden="true">→</span>
          </SectionLink>
        </Reveal>
      </div>
    </section>
  );
}
