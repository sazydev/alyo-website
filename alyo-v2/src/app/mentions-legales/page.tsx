import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/data/seo";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site ALYO : éditeur, hébergement, propriété intellectuelle, données personnelles et contact.",
  path: "/mentions-legales",
});

const summary = [
  { id: "editeur", label: "Éditeur du site" },
  { id: "directeur-publication", label: "Directeur de la publication" },
  { id: "hebergement", label: "Hébergement" },
  { id: "nom-domaine", label: "Nom de domaine" },
  { id: "propriete-intellectuelle", label: "Propriété intellectuelle" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "donnees-personnelles", label: "Données personnelles" },
  { id: "liens-externes", label: "Liens externes" },
  { id: "contact", label: "Contact" },
  { id: "droit-applicable", label: "Droit applicable" },
] as const;

export default function LegalNoticePage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>Informations légales</span>
          <h1>Mentions légales</h1>
          <p className={styles.updated}>Dernière mise à jour : 1 juillet 2026</p>
          <p className={styles.intro}>
            Les présentes mentions légales ont pour objet de définir les
            informations relatives à l&apos;éditeur du site internet ALYO ainsi que
            les conditions d&apos;utilisation du site.
          </p>
          <Link className={styles.backLink} href="/">
            <span aria-hidden="true">←</span> Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <div className={`container ${styles.layout}`}>
        <nav className={styles.summary} aria-label="Sommaire des mentions légales">
          <p>Sommaire</p>
          <ol>
            {summary.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className={styles.content}>
          <section id="editeur">
            <h2>Éditeur du site</h2>
            <dl className={styles.details}>
              <div><dt>Nom commercial</dt><dd>ALYO</dd></div>
              <div><dt>Entrepreneur individuel</dt><dd>Mattéo Boyeau Courtin</dd></div>
              <div><dt>Statut juridique</dt><dd>Micro-entreprise (Entreprise Individuelle)</dd></div>
              <div><dt>Date de création</dt><dd>11 mai 2026</dd></div>
              <div><dt>SIREN</dt><dd>104 851 068</dd></div>
              <div><dt>SIRET</dt><dd>104 851 068 00015</dd></div>
              <div><dt>TVA</dt><dd>TVA non applicable – article 293 B du Code général des impôts.</dd></div>
              <div>
                <dt>Adresse du siège</dt>
                <dd>6 rue Valdemaine<br />49100 Angers<br />France</dd>
              </div>
              <div>
                <dt>Téléphone</dt>
                <dd><a href="tel:+33754366013">+33 7 54 36 60 13</a></dd>
              </div>
              <div>
                <dt>Adresse électronique</dt>
                <dd><a href="mailto:contact@alyo-communication.fr">contact@alyo-communication.fr</a></dd>
              </div>
              <div>
                <dt>Activité principale</dt>
                <dd>
                  Création de sites internet sur mesure, développement web,
                  maintenance de sites, intégration de systèmes de gestion de
                  contenu (CMS), création d&apos;identités visuelles et de supports de
                  communication destinés principalement aux clubs sportifs,
                  associations et structures locales.
                </dd>
              </div>
            </dl>
          </section>

          <section id="directeur-publication">
            <h2>Directeur de la publication</h2>
            <p>Le directeur de la publication du présent site est :</p>
            <p><strong>Mattéo Boyeau Courtin</strong></p>
            <p>En qualité de dirigeant de l&apos;entreprise ALYO.</p>
          </section>

          <section id="hebergement">
            <h2>Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <p><strong>Netlify Inc.</strong></p>
            <address>
              2325 3rd Street<br />
              Suite 296<br />
              San Francisco, California 94107<br />
              États-Unis
            </address>
            <p>
              Site internet :{" "}
              <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
                www.netlify.com
              </a>
            </p>
          </section>

          <section id="nom-domaine">
            <h2>Nom de domaine</h2>
            <p>Le nom de domaine alyo-communication.fr est enregistré auprès de :</p>
            <p><strong>OVHcloud</strong></p>
            <address>2 rue Kellermann<br />59100 Roubaix<br />France</address>
            <p>
              <a href="https://www.ovhcloud.com" target="_blank" rel="noreferrer">
                www.ovhcloud.com
              </a>
            </p>
          </section>

          <section id="propriete-intellectuelle">
            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu présent sur le site ALYO est protégé par les
              dispositions du Code de la propriété intellectuelle.
            </p>
            <p>Cela comprend notamment :</p>
            <ul>
              <li>le logo ALYO ;</li>
              <li>les textes ;</li>
              <li>les photographies ;</li>
              <li>les illustrations ;</li>
              <li>les animations ;</li>
              <li>le design ;</li>
              <li>l&apos;identité graphique ;</li>
              <li>les maquettes ;</li>
              <li>les développements réalisés ;</li>
              <li>le code source.</li>
            </ul>
            <p>
              Tous ces éléments ont été conçus et développés par ALYO sauf mention
              contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification, diffusion ou
              exploitation, totale ou partielle, sans autorisation écrite préalable
              est strictement interdite.
            </p>
          </section>

          <section id="responsabilite">
            <h2>Responsabilité</h2>
            <p>
              ALYO met tout en œuvre afin d&apos;assurer l&apos;exactitude des informations
              publiées sur le présent site.
            </p>
            <p>
              Toutefois, malgré le soin apporté à leur rédaction, certaines
              informations peuvent être incomplètes, inexactes ou évoluer avec le
              temps.
            </p>
            <p>
              L&apos;utilisateur demeure seul responsable de l&apos;utilisation qu&apos;il fait
              des informations présentes sur le site.
            </p>
            <p>
              ALYO ne saurait être tenu responsable des dommages directs ou
              indirects pouvant résulter de l&apos;utilisation du présent site.
            </p>
          </section>

          <section id="donnees-personnelles">
            <h2>Données personnelles</h2>
            <p>
              Certaines données personnelles peuvent être collectées via le
              formulaire de contact.
            </p>
            <p>
              Les traitements de données sont détaillés dans la{" "}
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>{" "}
              accessible depuis le site.
            </p>
          </section>

          <section id="liens-externes">
            <h2>Liens externes</h2>
            <p>Le site peut contenir des liens vers des sites internet tiers.</p>
            <p>
              ALYO ne peut être tenu responsable du contenu, des services ou des
              politiques de confidentialité de ces sites externes.
            </p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>
              Pour toute question concernant le présent site ou les services
              proposés, vous pouvez contacter :
            </p>
            <ul className={styles.contactList}>
              <li><a href="mailto:contact@alyo-communication.fr">contact@alyo-communication.fr</a></li>
              <li><a href="tel:+33754366013">+33 7 54 36 60 13</a></li>
              <li><Link href="/#contactez-nous">Le formulaire de contact du site</Link></li>
            </ul>
          </section>

          <section id="droit-applicable">
            <h2>Droit applicable</h2>
            <p>Les présentes mentions légales sont régies par le droit français.</p>
            <p>
              Tout litige relatif à leur interprétation ou à leur exécution relève
              de la compétence des juridictions françaises compétentes.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
