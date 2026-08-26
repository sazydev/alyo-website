import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/home";

import styles from "./OnePage.module.css";

function ServiceIcon({ index }: { index: number }) {
  if (index === 0) {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="13" rx="2" /><path d="M3 9h18M8 21h8M12 18v3" /></svg>;
  }
  if (index === 1) {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>;
  }
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v14H4V5Z" /><path d="m7 15 3-3 2.5 2.5L17 10l2 2M8 9h.01" /></svg>;
}

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesInner}>
        <Reveal className={styles.servicesIntro}>
          <span className={styles.servicesLabel}>Nos services</span>
          <h2>Trois services pour présenter votre structure</h2>
        </Reveal>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index + 1) * 100}>
              <article className={styles.serviceCard} id={index === 1 ? "services-identite" : undefined}>
                <div className={styles.serviceCardTop}>
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <span className={styles.serviceIcon}><ServiceIcon index={index} /></span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
