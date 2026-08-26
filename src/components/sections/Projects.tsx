import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/home";

import styles from "./OnePage.module.css";

const projectLogos = {
  "segre-basket": "/projects/segre-basket/logo.png",
  escal: "/projects/escal/logo.png",
  nova: "/projects/nova/logo.png",
} as const;

export function Projects() {
  return (
    <section className={styles.projects} id="realisations">
      <Reveal className={styles.projectsHeader}>
        <h2>Nos réalisations</h2>
      </Reveal>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index + 1) * 100}>
            <a
              className={styles.projectCard}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.projectImage}>
                  <Image
                    src={projectLogos[project.slug]}
                    alt={`Logo ${project.name}`}
                    width={220}
                    height={220}
                    sizes="(max-width: 640px) 180px, (max-width: 1100px) 190px, 220px"
                    unoptimized
                  />
              </span>
              <span className={styles.projectInfo}>
                <span className={styles.projectTag}>{project.type}</span>
                <h3>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <span className="sr-only">Le projet s’ouvre dans un nouvel onglet.</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className={styles.projectsNote}>Cliquez sur un projet pour voir le site en ligne et découvrir concrètement le résultat.</p>
      </Reveal>
    </section>
  );
}
