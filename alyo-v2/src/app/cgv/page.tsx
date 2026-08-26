import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/data/seo";

import styles from "../mentions-legales/page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente d’ALYO : prestations, devis, tarifs, paiement, livraison, maintenance et responsabilités.",
  path: "/cgv",
});

const summary = [
  { id: "objet", label: "Objet" },
  { id: "prestataire", label: "Prestataire" },
  { id: "prestations", label: "Prestations proposées" },
  { id: "devis-commande", label: "Devis et commande" },
  { id: "tarifs", label: "Tarifs" },
  { id: "paiement", label: "Modalités de paiement" },
  { id: "delais", label: "Délais de réalisation" },
  { id: "obligations-client", label: "Obligations du client" },
  { id: "revisions", label: "Révisions" },
  { id: "livraison", label: "Livraison" },
  { id: "maintenance", label: "Maintenance" },
  { id: "propriete-intellectuelle", label: "Propriété intellectuelle" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "resiliation", label: "Résiliation" },
  { id: "force-majeure", label: "Force majeure" },
  { id: "protection-donnees", label: "Protection des données" },
  { id: "droit-applicable", label: "Droit applicable" },
  { id: "contact", label: "Contact" },
] as const;

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>Conditions contractuelles</span>
          <h1>Conditions Générales de Vente</h1>
          <p className={styles.updated}>Dernière mise à jour : 1 juillet 2026</p>
          <p className={styles.intro}>
            Les présentes Conditions Générales de Vente (CGV) définissent les
            conditions dans lesquelles ALYO réalise ses prestations de services
            auprès de ses clients.
          </p>
          <Link className={styles.backLink} href="/">
            <span aria-hidden="true">←</span> Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <div className={`container ${styles.layout}`}>
        <nav className={styles.summary} aria-label="Sommaire des conditions générales de vente">
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
          <section id="objet">
            <h2>Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente s&apos;appliquent à
              l&apos;ensemble des prestations proposées par ALYO.
            </p>
            <p>Elles régissent les relations contractuelles entre ALYO et ses clients.</p>
            <p>
              Toute commande implique l&apos;acceptation pleine et entière des présentes
              CGV.
            </p>
          </section>

          <section id="prestataire">
            <h2>Prestataire</h2>
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
                <dt>Email</dt>
                <dd>
                  <a href="mailto:contact@alyo-communication.fr">
                    contact@alyo-communication.fr
                  </a>
                </dd>
              </div>
              <div>
                <dt>Téléphone</dt>
                <dd><a href="tel:+33754366013">+33 7 54 36 60 13</a></dd>
              </div>
            </dl>
          </section>

          <section id="prestations">
            <h2>Prestations proposées</h2>
            <p>ALYO propose notamment :</p>
            <ul>
              <li>création de sites internet sur mesure ;</li>
              <li>développement web ;</li>
              <li>maintenance de sites internet ;</li>
              <li>intégration de CMS (Directus) ;</li>
              <li>création de logos ;</li>
              <li>création d&apos;identités visuelles ;</li>
              <li>création de supports de communication ;</li>
              <li>accompagnement numérique.</li>
            </ul>
            <p>Toute prestation fait l&apos;objet d&apos;un devis préalable.</p>
          </section>

          <section id="devis-commande">
            <h2>Devis et commande</h2>
            <p>Chaque projet fait l&apos;objet d&apos;un devis personnalisé.</p>
            <p>
              Le devis devient contractuel dès lors qu&apos;il est accepté par le client.
            </p>
            <p>
              Toute demande complémentaire pourra faire l&apos;objet d&apos;un devis
              supplémentaire.
            </p>
          </section>

          <section id="tarifs">
            <h2>Tarifs</h2>
            <p>Les prix sont exprimés en euros (€).</p>
            <p>
              ALYO étant une micro-entreprise bénéficiant de la franchise en base de
              TVA :
            </p>
            <p><strong>TVA non applicable – article 293 B du Code général des impôts.</strong></p>
            <p>
              Les prix peuvent évoluer à tout moment mais les prestations déjà
              commandées conservent le tarif accepté sur le devis.
            </p>
          </section>

          <section id="paiement">
            <h2>Modalités de paiement</h2>
            <p>Le règlement peut être effectué :</p>
            <ul>
              <li>par virement bancaire ;</li>
              <li>par paiement en ligne lorsque celui-ci est proposé.</li>
            </ul>
            <p>Sauf indication contraire sur le devis :</p>
            <ul>
              <li>un acompte de 30 % est demandé avant le début de la prestation ;</li>
              <li>le solde est exigible à la livraison du projet.</li>
            </ul>
            <p>Aucun livrable final ne sera remis avant règlement complet.</p>
          </section>

          <section id="delais">
            <h2>Délais de réalisation</h2>
            <p>Les délais indiqués sont donnés à titre estimatif.</p>
            <p>Ils peuvent varier selon :</p>
            <ul>
              <li>la complexité du projet ;</li>
              <li>la réactivité du client ;</li>
              <li>la réception des contenus nécessaires.</li>
            </ul>
            <p>
              ALYO ne pourra être tenu responsable d&apos;un retard provoqué par
              l&apos;absence d&apos;éléments fournis par le client.
            </p>
          </section>

          <section id="obligations-client">
            <h2>Obligations du client</h2>
            <p>Le client s&apos;engage à fournir :</p>
            <ul>
              <li>les textes ;</li>
              <li>les images ;</li>
              <li>les informations ;</li>
              <li>les accès techniques nécessaires à la réalisation du projet.</li>
            </ul>
            <p>
              Le client garantit disposer des droits nécessaires sur les contenus
              transmis.
            </p>
          </section>

          <section id="revisions">
            <h2>Révisions</h2>
            <p>
              Les ajustements mineurs demandés pendant la réalisation du projet sont
              inclus dans la prestation.
            </p>
            <p>
              Toute demande entraînant une modification importante du cahier des
              charges ou des fonctionnalités pourra faire l&apos;objet d&apos;une facturation
              complémentaire après validation du client.
            </p>
          </section>

          <section id="livraison">
            <h2>Livraison</h2>
            <p>
              La prestation est considérée comme livrée lorsque les livrables sont
              mis à disposition du client.
            </p>
            <p>Le client est invité à vérifier les livrables dans les meilleurs délais.</p>
          </section>

          <section id="maintenance">
            <h2>Maintenance</h2>
            <p>
              Les prestations de maintenance font l&apos;objet d&apos;un abonnement ou d&apos;un
              accord spécifique.
            </p>
            <p>
              La maintenance comprend uniquement les prestations prévues dans le
              devis ou le contrat correspondant.
            </p>
            <p>
              Toute intervention hors périmètre pourra être facturée séparément.
            </p>
          </section>

          <section id="propriete-intellectuelle">
            <h2>Propriété intellectuelle</h2>
            <p>
              Sauf disposition contraire prévue au devis, les créations réalisées
              par ALYO demeurent sa propriété jusqu&apos;au paiement intégral des sommes
              dues.
            </p>
            <p>
              Le transfert des droits d&apos;utilisation intervient uniquement après
              règlement complet de la prestation.
            </p>
            <p>
              ALYO conserve le droit de présenter les réalisations effectuées dans
              son portfolio, sur son site internet ou ses réseaux sociaux, sauf
              demande écrite contraire du client.
            </p>
          </section>

          <section id="responsabilite">
            <h2>Responsabilité</h2>
            <p>
              ALYO s&apos;engage à mettre en œuvre tous les moyens nécessaires à la bonne
              exécution des prestations.
            </p>
            <p>Sa responsabilité ne saurait être engagée en cas :</p>
            <ul>
              <li>d&apos;utilisation inappropriée du site par le client ;</li>
              <li>de mauvaise manipulation ;</li>
              <li>de modification réalisée par un tiers ;</li>
              <li>de défaillance d&apos;un hébergeur ;</li>
              <li>de panne indépendante de sa volonté.</li>
            </ul>
          </section>

          <section id="resiliation">
            <h2>Résiliation</h2>
            <p>
              En cas d&apos;annulation d&apos;une commande par le client après son
              acceptation, l&apos;acompte versé reste acquis à ALYO afin de couvrir les
              travaux déjà réalisés.
            </p>
          </section>

          <section id="force-majeure">
            <h2>Force majeure</h2>
            <p>
              ALYO ne pourra être tenu responsable en cas de force majeure empêchant
              l&apos;exécution normale de la prestation.
            </p>
          </section>

          <section id="protection-donnees">
            <h2>Protection des données</h2>
            <p>
              Les données personnelles collectées dans le cadre de la relation
              commerciale sont traitées conformément à la{" "}
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>{" "}
              disponible sur le site.
            </p>
          </section>

          <section id="droit-applicable">
            <h2>Droit applicable</h2>
            <p>
              Les présentes Conditions Générales de Vente sont régies par le droit
              français.
            </p>
            <p>
              Tout litige relatif à leur interprétation ou à leur exécution relève
              des juridictions françaises compétentes.
            </p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>Pour toute question concernant les présentes CGV :</p>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:contact@alyo-communication.fr">
                  contact@alyo-communication.fr
                </a>
              </li>
              <li><a href="tel:+33754366013">+33 7 54 36 60 13</a></li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
