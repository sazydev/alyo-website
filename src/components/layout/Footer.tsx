import Image from "next/image";
import Link from "next/link";

import { SectionLink } from "@/components/ui/SectionLink";
import {
  footerNavigation,
  legalNavigation,
  socialLinks,
} from "@/data/navigation";
import { siteConfig } from "@/data/site";

import { SocialIcon } from "../ui/SocialIcon";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} id="pied-de-page">
      <div className={styles.shell}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <SectionLink href="/" targetId="hero" className={styles.logo} aria-label="Alyo - retour à l'accueil">
              <Image
                src="/brand/logo-white.webp"
                alt="Logo Alyo"
                width={500}
                height={500}
                unoptimized
              />
            </SectionLink>
          </div>

          {footerNavigation.map((column) => (
            <div className={styles.column} key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <SectionLink href={link.href}>
                        {link.label}
                      </SectionLink>
                    ) : (
                      <span className={styles.placeholderLink}>{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.column}>
            <h2>Infos</h2>
            <ul>
              {legalNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <button type="button" className={styles.cookieButton} data-cookie-settings>
                  Gérer mes cookies
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={siteConfig.phoneHref}>{siteConfig.phoneLabel}</a>
              </li>
              <li>
                <span className={styles.contactText}>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <span>{siteConfig.copyright}</span>
            <span className={styles.dot} />
            <span>Tous droits réservés</span>
          </div>

          <div className={styles.socials}>
            {socialLinks.map((social) =>
              social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialButton}
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ) : (
                <span
                  key={social.label}
                  className={`${styles.socialButton} ${styles.socialPlaceholder}`}
                  aria-hidden="true"
                >
                  <SocialIcon name={social.icon} />
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
