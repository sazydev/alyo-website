import { SectionLink } from "@/components/ui/SectionLink";
import { contactHref } from "@/data/navigation";
import {
  digitalPricingOffers,
  type PricingIconName,
  type PricingOffer,
  webPricingOffers,
} from "@/data/pricing";

import { Reveal } from "../ui/Reveal";
import styles from "./Pricing.module.css";

function PricingIcon({ name }: { name: PricingIconName }) {
  if (name === "website") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21c-2.2-2.4-3.4-5.4-3.4-9S9.8 5.4 12 3Z" /></svg>;
  }

  if (name === "evolving") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></svg>;
  }

  if (name === "maintenance") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7.5a5 5 0 0 1-6.8 4.65L6.1 19.25a2 2 0 0 1-2.83-2.83l7.1-7.1A5 5 0 0 1 16.5 3L14 5.5l.5 3 3 .5L20 6.5v1Z" /></svg>;
  }

  if (name === "logo") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5Z" /></svg>;
  }

  if (name === "posters") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
  }

  if (name === "social") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}

function PricingCard({ offer }: { offer: PricingOffer }) {
  return (
    <article className={`${styles.card} ${offer.featured ? styles.featured : ""}`}>
      {offer.badge ? <span className={styles.badge}>{offer.badge}</span> : null}

      <div className={styles.cardHeader}>
        <span className={`${styles.icon} ${offer.featured ? styles.featuredIcon : ""}`}>
          <PricingIcon name={offer.icon} />
        </span>
        <div className={styles.titleGroup}>
          <span className={styles.kicker}>{offer.kicker}</span>
          <h4>{offer.title}</h4>
        </div>
      </div>

      <div className={styles.priceWrap}>
        {offer.pricePrefix ? <span className={styles.pricePrefix}>{offer.pricePrefix}</span> : null}
        <div className={styles.price}>{offer.price}<span>{offer.suffix}</span></div>
      </div>

      {offer.description ? <p>{offer.description}</p> : null}

      <ul className={styles.list}>
        {offer.points.map((point) => <li key={point}>{point}</li>)}
      </ul>

      <SectionLink
        href={contactHref}
        className={`${styles.button} ${offer.featured ? styles.featuredButton : ""}`}
        aria-label={`${offer.buttonLabel} pour l’offre ${offer.title}`}
      >
        {offer.buttonLabel}
      </SectionLink>
    </article>
  );
}

function PricingGrid({ offers, className }: { offers: readonly PricingOffer[]; className?: string }) {
  return (
    <div className={`${styles.grid} ${className ?? ""}`}>
      {offers.map((offer, index) => (
        <Reveal key={offer.title} className={styles.revealCard} delay={(index + 1) * 100}>
          <PricingCard offer={offer} />
        </Reveal>
      ))}
    </div>
  );
}

export function Pricing() {
  return (
    <section className={styles.pricing} id="tarifs" aria-labelledby="tarifs-title">
      <div className={styles.container}>
        <Reveal className={styles.sectionHead}>
          <span className={styles.tag}>Tarifs</span>
          <h2 id="tarifs-title">Des offres simples<br />pour bien démarrer</h2>
          <p>Des tarifs de lancement pensés pour aider les clubs à soigner leur image, sans superflu ni mauvaise surprise.</p>
        </Reveal>

        <div className={styles.group} aria-labelledby="tarifs-web-title">
          <Reveal className={styles.groupHead}>
            <div className={styles.groupTitle}>
              <h3 id="tarifs-web-title">Sites web</h3>
            </div>
            <p>Chaque projet est différent. Le tarif final dépend de vos besoins et des fonctionnalités souhaitées.</p>
          </Reveal>
          <PricingGrid offers={webPricingOffers} className={styles.webGrid} />
        </div>

        <div className={styles.group} aria-labelledby="tarifs-digital-title">
          <Reveal className={styles.groupHead}>
            <div className={styles.groupTitle}>
              <h3 id="tarifs-digital-title">Création digitale & communication</h3>
            </div>
          </Reveal>
          <PricingGrid offers={digitalPricingOffers} />
        </div>
      </div>
    </section>
  );
}
