import { Fragment } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { reasons } from "@/data/home";

import styles from "./OnePage.module.css";

function ReasonIcon({ index }: { index: number }) {
  const paths = [
    <Fragment key="web"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9Z" /></Fragment>,
    <Fragment key="image"><path d="m12 3 1.8 3.6L18 8.4l-3 3 .7 4.2L12 14l-3.7 1.6.7-4.2-3-3 4.2-1.8L12 3Z" /></Fragment>,
    <Fragment key="time"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Fragment>,
    <Fragment key="support"><path d="M4 6h16v12H4Z" /><path d="m4 8 8 5 8-5" /></Fragment>,
  ];

  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[index]}</svg>;
}

export function WhyAlyo() {
  return (
    <section className={styles.why} id="pourquoi-alyo">
      <span className={`${styles.whyShape} ${styles.whyShapeOne}`} aria-hidden="true" />
      <span className={`${styles.whyShape} ${styles.whyShapeTwo}`} aria-hidden="true" />
      <div className={styles.whyInner}>
        <div className={styles.whyLeft}>
          <Reveal>
            <span className={styles.whyLabel}>POURQUOI ALYO</span>
            <h2>
              VOUS GÉREZ
              <br />
              VOTRE STRUCTURE.
              <br />
              ON S’OCCUPE DE VOTRE IMAGE
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.whyIntro}>
              Pas besoin de maîtriser le web ou le design. Alyo aide les clubs, associations et structures locales à
              rendre leur communication plus claire et simple à gérer.
            </p>
          </Reveal>
          <div className={styles.reasonsList}>
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={(index + 1) * 100}>
                <article className={styles.reasonCard}>
                  <span className={styles.reasonIcon}><ReasonIcon index={index} /></span>
                  <span className={styles.reasonText}>
                    <strong>{reason.title}</strong>
                    <span>{reason.description}</span>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={200}>
          <article className={styles.whyFeature}>
            <h3>Votre communication ne devrait pas être une corvée.</h3>
            <p>
              Site, identité visuelle ou supports de communication : je vous aide à mettre en place quelque chose de
              simple, propre et adapté à votre structure.
            </p>
            <a className={styles.whyFeatureButton} href="#contactez-nous">
              Parlons-en simplement <span aria-hidden="true">→</span>
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
