import { Reveal } from "@/components/ui/Reveal";
import { projectTypes } from "@/data/home";
import { siteConfig } from "@/data/site";

import styles from "./OnePage.module.css";

function ContactIcon({ type }: { type: "email" | "phone" | "location" }) {
  if (type === "email") {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4V6Z" /><path d="m4 7 8 6 8-6" /></svg>;
  }
  if (type === "phone") {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.4 4.7 10 8.4c.2.5.1 1.1-.3 1.5l-1 1c1.2 2.3 3.1 4.2 5.4 5.4l1-1c.4-.4 1-.5 1.5-.3l3.7 1.6c.6.3.9.9.8 1.5l-.5 2.2c-.1.6-.7 1-1.3 1C10.4 21 3 13.6 3 4.7c0-.6.4-1.2 1-1.3l2.2-.5c.6-.1 1.3.2 1.5.8Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" /><circle cx="12" cy="9" r="3" /></svg>;
}

export function Contact() {
  return (
    <section className={styles.contact} id="contactez-nous">
      <span className={`${styles.contactGlow} ${styles.contactGlowOne}`} aria-hidden="true" />
      <span className={`${styles.contactGlow} ${styles.contactGlowTwo}`} aria-hidden="true" />
      <div className={styles.contactInner}>
        <Reveal className={styles.contactIntro}>
          <span className={styles.contactLabel}>Contact</span>
          <h2>Parlons de votre projet</h2>
          <p>Vous avez besoin d’un site, d’une identité visuelle ou de supports de communication ? Présentez votre projet en quelques lignes.</p>
          <div className={styles.contactInfoList}>
            <a className={styles.contactInfoItem} href={`mailto:${siteConfig.email}`}>
              <span className={styles.contactInfoIcon}><ContactIcon type="email" /></span>
              <span><strong>Email</strong><small>{siteConfig.email}</small></span>
            </a>
            <a className={styles.contactInfoItem} href={siteConfig.phoneHref}>
              <span className={styles.contactInfoIcon}><ContactIcon type="phone" /></span>
              <span><strong>Téléphone</strong><small>{siteConfig.phoneLabel}</small></span>
            </a>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactInfoIcon}><ContactIcon type="location" /></span>
              <span><strong>Localisation</strong><small>{siteConfig.location}</small></span>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.contactCard} delay={200}>
          <form className={styles.contactForm} action="https://formspree.io/f/xykowkyj" method="POST">
            <input type="hidden" name="_subject" value="Nouveau projet Alyo" />
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name">Nom et prénom</label>
                <input id="contact-name" type="text" name="name" autoComplete="name" placeholder="Votre nom complet" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-phone">Téléphone <span>(facultatif)</span></label>
                <input id="contact-phone" type="tel" name="phone" autoComplete="tel" placeholder="06 00 00 00 00" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-email">Adresse email</label>
              <input id="contact-email" type="email" name="email" autoComplete="email" placeholder="votre@email.fr" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-project">Type de projet</label>
              <select id="contact-project" name="projectType" defaultValue="" required>
                <option value="" disabled>Choisir un projet</option>
                {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={7} placeholder="Présentez votre projet, votre besoin ou votre objectif…" required />
            </div>
            <label className={styles.formConsent}>
              <input type="checkbox" name="consent" value="accepted" required />
              <span>J’accepte que mes informations soient utilisées pour répondre à ma demande.</span>
            </label>
            <button className={styles.contactSubmit} type="submit">
              Envoyer la demande
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
