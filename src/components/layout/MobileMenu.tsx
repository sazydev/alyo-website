import type { RefObject } from "react";

import { SectionLink } from "@/components/ui/SectionLink";
import { contactHref, mainNavigation, socialLinks } from "@/data/navigation";

import { SocialIcon } from "../ui/SocialIcon";

import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  isOpen: boolean;
  activeHref: (typeof mainNavigation)[number]["href"] | null;
  backRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onBack: () => void;
};

export function MobileMenu({
  isOpen,
  activeHref,
  backRef,
  onClose,
  onBack,
}: MobileMenuProps) {
  return (
    <nav
      id="header-navigation"
      className={`${styles.navigation} ${isOpen ? styles.open : ""}`}
      aria-label="Navigation principale"
    >
      <button
        ref={backRef}
        type="button"
        className={styles.back}
        aria-label="Fermer le menu"
        onClick={onBack}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Retour</span>
      </button>

      {mainNavigation.map((item) => (
        <SectionLink
          key={item.href}
          href={item.href}
          targetId={item.href === "/" ? "hero" : undefined}
          className={item.href === activeHref ? styles.active : undefined}
          aria-current={item.href === activeHref ? "location" : undefined}
          onClick={onClose}
        >
          {item.label}
        </SectionLink>
      ))}

      <div className={styles.mobileCta}>
        <SectionLink
          href={contactHref}
          className={styles.greenButton}
          onClick={onClose}
        >
          Contactez-nous
        </SectionLink>
      </div>

      <div className={styles.socials}>
        {socialLinks.map((social) =>
          social.href ? (
            <a
              key={social.label}
              href={social.href}
              className={styles.socialLink}
              aria-label={social.label}
              onClick={onClose}
            >
              <SocialIcon name={social.icon} />
            </a>
          ) : (
            <span key={social.label} className={styles.socialLink} aria-hidden="true">
              <SocialIcon name={social.icon} />
            </span>
          ),
        )}
      </div>
    </nav>
  );
}
