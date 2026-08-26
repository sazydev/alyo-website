import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./FoundationPreview.module.css";

const colors = [
  { name: "Bleu Alyo", className: styles.blue },
  { name: "Vert menthe", className: styles.mint },
  { name: "Bleu nuit", className: styles.navy },
  { name: "Fond clair", className: styles.light },
  { name: "Blanc", className: styles.white },
] as const;

export function FoundationPreview() {
  return (
    <main id="fondations" className={styles.page}>
      <section className={styles.intro}>
        <div className={`container ${styles.introInner}`}>
          <Reveal>
            <span className={styles.status}>Base technique prête</span>
            <p className={styles.brand}>Alyo</p>
            <h1>ALYO V2</h1>
            <p className={styles.lead}>
              Next.js, TypeScript, Tailwind et le design system Alyo sont
              correctement configurés. La reconstruction visuelle commencera
              après validation de cette fondation.
            </p>
            <Button href="#palette">Voir les fondations</Button>
          </Reveal>

          <div className={styles.decorativeCard} aria-hidden="true">
            <span className={styles.decorativeMark}>A</span>
            <span className={styles.decorativeDot} />
          </div>
        </div>
      </section>

      <section id="palette" className={styles.paletteSection}>
        <div className="container">
          <SectionHeading
            eyebrow="Design system"
            title="Une base Alyo cohérente"
            description="Une palette resserrée, deux typographies et des tokens réutilisables pour construire la suite sans dupliquer les styles."
          />

          <div className={styles.swatches}>
            {colors.map((color, index) => (
              <Reveal key={color.name} delay={index * 70}>
                <article className={styles.swatchCard}>
                  <span className={`${styles.swatch} ${color.className}`} />
                  <strong>{color.name}</strong>
                </article>
              </Reveal>
            ))}
          </div>

          <div className={styles.typeCard}>
            <div>
              <span className={styles.typeLabel}>Syne — titres</span>
              <h2>Une identité forte.</h2>
            </div>
            <div>
              <span className={styles.typeLabel}>DM Sans — texte</span>
              <p>
                Une lecture claire, moderne et confortable sur toutes les
                tailles d’écran.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
