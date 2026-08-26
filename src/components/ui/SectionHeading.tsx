import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  title: string;
};

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
