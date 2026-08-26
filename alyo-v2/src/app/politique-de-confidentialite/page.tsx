import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/data/seo";

import styles from "../mentions-legales/page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site ALYO : données collectées, finalités, conservation, cookies et droits des utilisateurs.",
  path: "/politique-de-confidentialite",
});

const summary = [
  { id: "responsable-traitement", label: "Responsable du traitement" },
  { id: "donnees-collectees", label: "Données collectées" },
  { id: "finalites-collecte", label: "Finalités de la collecte" },
  { id: "base-legale", label: "Base légale du traitement" },
  { id: "duree-conservation", label: "Durée de conservation" },
  { id: "destinataires", label: "Destinataires des données" },
  { id: "google-analytics", label: "Google Analytics et Google Tag Manager" },
  { id: "cookies", label: "Cookies" },
  { id: "securite", label: "Sécurité des données" },
  { id: "droits-utilisateurs", label: "Droits des utilisateurs" },
  { id: "reclamation-cnil", label: "Réclamation auprès de la CNIL" },
  { id: "transfert-hors-ue", label: "Transfert hors Union européenne" },
  { id: "modification", label: "Modification de la politique de confidentialité" },
  { id: "contact", label: "Contact" },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>Protection des données</span>
          <h1>Politique de confidentialité</h1>
          <p className={styles.updated}>Dernière mise à jour : 1 juillet 2026</p>
          <p className={styles.intro}>
            La présente politique de confidentialité explique comment ALYO
            collecte, utilise et protège les données personnelles transmises via
            le site alyo-communication.fr.
          </p>
          <Link className={styles.backLink} href="/">
            <span aria-hidden="true">←</span> Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <div className={`container ${styles.layout}`}>
        <nav
          className={styles.summary}
          aria-label="Sommaire de la politique de confidentialité"
        >
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
          <section id="responsable-traitement">
            <h2>Responsable du traitement</h2>
            <p>Le responsable du traitement des données personnelles est :</p>
            <dl className={styles.details}>
              <div><dt>Nom commercial</dt><dd>ALYO</dd></div>
              <div><dt>Entrepreneur individuel</dt><dd>Mattéo Boyeau Courtin</dd></div>
              <div><dt>SIREN</dt><dd>104 851 068</dd></div>
              <div><dt>SIRET</dt><dd>104 851 068 00015</dd></div>
              <div>
                <dt>Adresse</dt>
                <dd>6 rue Valdemaine<br />49100 Angers<br />France</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href="mailto:contact@alyo-communication.fr">
                    contact@alyo-communication.fr
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section id="donnees-collectees">
            <h2>Données collectées</h2>
            <p>
              ALYO peut collecter les données personnelles suivantes lorsque vous
              utilisez le formulaire de contact :
            </p>
            <ul>
              <li>nom et prénom ;</li>
              <li>adresse e-mail ;</li>
              <li>numéro de téléphone ;</li>
              <li>type de demande ;</li>
              <li>contenu du message transmis.</li>
            </ul>
            <p>
              Ces données sont fournies directement par l&apos;utilisateur lorsqu&apos;il
              remplit le formulaire de contact.
            </p>
          </section>

          <section id="finalites-collecte">
            <h2>Finalités de la collecte</h2>
            <p>Les données collectées sont utilisées uniquement pour :</p>
            <ul>
              <li>répondre aux demandes envoyées via le formulaire de contact ;</li>
              <li>échanger avec les prospects et clients ;</li>
              <li>préparer un devis ou une proposition commerciale ;</li>
              <li>assurer le suivi d&apos;une demande ou d&apos;un projet ;</li>
              <li>gérer la relation commerciale.</li>
            </ul>
            <p>
              ALYO ne vend pas, ne loue pas et ne transmet pas les données
              personnelles à des tiers à des fins commerciales.
            </p>
          </section>

          <section id="base-legale">
            <h2>Base légale du traitement</h2>
            <p>Les données personnelles sont traitées sur la base :</p>
            <ul>
              <li>
                du consentement de l&apos;utilisateur lorsqu&apos;il remplit le formulaire
                de contact ;
              </li>
              <li>
                de l&apos;intérêt légitime d&apos;ALYO à répondre aux demandes reçues ;
              </li>
              <li>
                de l&apos;exécution de mesures précontractuelles lorsqu&apos;une demande
                concerne un devis ou une prestation.
              </li>
            </ul>
          </section>

          <section id="duree-conservation">
            <h2>Durée de conservation</h2>
            <p>
              Les données transmises via le formulaire de contact sont conservées
              pendant une durée maximale de 3 ans à compter du dernier échange avec
              l&apos;utilisateur, sauf obligation légale imposant une durée de
              conservation plus longue.
            </p>
            <p>
              Les données relatives aux devis, factures et documents comptables
              peuvent être conservées pendant la durée légale applicable.
            </p>
          </section>

          <section id="destinataires">
            <h2>Destinataires des données</h2>
            <p>Les données collectées sont destinées uniquement à ALYO.</p>
            <p>
              Elles peuvent toutefois être traitées par certains prestataires
              techniques strictement nécessaires au fonctionnement du site ou des
              services utilisés, notamment :
            </p>
            <ul>
              <li>Netlify, pour l&apos;hébergement du site ;</li>
              <li>
                les services de messagerie utilisés pour recevoir les demandes de
                contact ;
              </li>
              <li>
                Google, pour les outils de mesure d&apos;audience et de gestion des
                balises si Google Analytics ou Google Tag Manager sont activés.
              </li>
            </ul>
            <p>
              Ces prestataires peuvent traiter certaines données dans le cadre de
              leurs propres conditions et politiques de confidentialité.
            </p>
          </section>

          <section id="google-analytics">
            <h2>Google Analytics et Google Tag Manager</h2>
            <p>
              ALYO peut utiliser Google Analytics afin de mesurer l&apos;audience du
              site et comprendre la manière dont les visiteurs naviguent sur les
              pages.
            </p>
            <p>
              ALYO peut également utiliser Google Tag Manager afin de gérer certains
              scripts ou balises techniques.
            </p>
            <p>Ces outils peuvent collecter certaines informations techniques, comme :</p>
            <ul>
              <li>les pages consultées ;</li>
              <li>la durée de visite ;</li>
              <li>le type d&apos;appareil utilisé ;</li>
              <li>le navigateur utilisé ;</li>
              <li>des informations de navigation anonymisées ou pseudonymisées.</li>
            </ul>
            <p>
              Les cookies non essentiels liés à la mesure d&apos;audience ne sont
              déposés qu&apos;après consentement de l&apos;utilisateur, lorsque le bandeau
              cookies est mis en place.
            </p>
          </section>

          <section id="cookies">
            <h2>Cookies</h2>
            <p>
              Le site peut utiliser des cookies nécessaires à son bon fonctionnement
              ainsi que des cookies de mesure d&apos;audience, notamment via Google
              Analytics.
            </p>
            <p>
              L&apos;utilisateur peut accepter, refuser ou modifier ses préférences
              concernant les cookies non essentiels.
            </p>
            <p>
              Pour plus d&apos;informations, une politique de cookies dédiée est
              accessible sur le site.
            </p>
          </section>

          <section id="securite">
            <h2>Sécurité des données</h2>
            <p>
              ALYO met en œuvre des mesures raisonnables afin de protéger les
              données personnelles contre l&apos;accès non autorisé, la perte,
              l&apos;altération ou la divulgation.
            </p>
            <p>
              Toutefois, aucun système de transmission ou de stockage de données sur
              Internet ne peut être garanti comme totalement sécurisé.
            </p>
          </section>

          <section id="droits-utilisateurs">
            <h2>Droits des utilisateurs</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données et à
              la loi Informatique et Libertés, l&apos;utilisateur dispose des droits
              suivants :
            </p>
            <ul>
              <li>droit d&apos;accès à ses données personnelles ;</li>
              <li>droit de rectification ;</li>
              <li>droit d&apos;effacement ;</li>
              <li>droit d&apos;opposition ;</li>
              <li>droit à la limitation du traitement ;</li>
              <li>droit à la portabilité des données lorsque cela est applicable ;</li>
              <li>droit de retirer son consentement à tout moment.</li>
            </ul>
            <p>
              Pour exercer ces droits, l&apos;utilisateur peut contacter ALYO à
              l&apos;adresse suivante :{" "}
              <a href="mailto:contact@alyo-communication.fr">
                contact@alyo-communication.fr
              </a>.
            </p>
            <p>
              ALYO pourra demander une preuve d&apos;identité si cela est nécessaire
              afin de traiter la demande.
            </p>
          </section>

          <section id="reclamation-cnil">
            <h2>Réclamation auprès de la CNIL</h2>
            <p>
              Si l&apos;utilisateur estime que ses droits ne sont pas respectés, il peut
              adresser une réclamation auprès de la Commission Nationale de
              l&apos;Informatique et des Libertés.
            </p>
            <p>
              Site internet :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
                www.cnil.fr
              </a>
            </p>
          </section>

          <section id="transfert-hors-ue">
            <h2>Transfert hors Union européenne</h2>
            <p>
              Certains prestataires utilisés par ALYO, notamment Google ou Netlify,
              peuvent être situés en dehors de l&apos;Union européenne.
            </p>
            <p>
              Lorsque des données sont transférées hors de l&apos;Union européenne, ces
              transferts sont encadrés par les garanties prévues par la
              réglementation applicable.
            </p>
          </section>

          <section id="modification">
            <h2>Modification de la politique de confidentialité</h2>
            <p>
              ALYO se réserve le droit de modifier la présente politique de
              confidentialité à tout moment afin de l&apos;adapter aux évolutions du
              site, des services proposés ou de la réglementation.
            </p>
            <p>
              La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>
              Pour toute question concernant la présente politique de
              confidentialité ou le traitement des données personnelles, vous pouvez
              contacter :
            </p>
            <ul className={styles.contactList}>
              <li><strong>ALYO</strong></li>
              <li>
                <a href="mailto:contact@alyo-communication.fr">
                  contact@alyo-communication.fr
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
