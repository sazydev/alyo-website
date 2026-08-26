import { Button } from "@/components/ui/Button";

import styles from "./LegalPlaceholder.module.css";

type LegalPlaceholderProps = {
  title: string;
};

export function LegalPlaceholder({ title }: LegalPlaceholderProps) {
  return (
    <main className={styles.page}>
      <div className={`container ${styles.card}`}>
        <span>Route préparée</span>
        <h1>{title}</h1>
        <p>
          Le contenu de cette page sera migré depuis l’ancien site lors d’une
          prochaine étape.
        </p>
        <Button href="/" variant="secondary">
          Retour à l’accueil
        </Button>
      </div>
    </main>
  );
}
