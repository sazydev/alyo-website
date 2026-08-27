import type { ReactNode } from "react";

import { SectionLink } from "./SectionLink";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
};

export function Button({
  children,
  className,
  href,
  variant = "primary",
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <SectionLink href={href} className={classes}>
        {children}
      </SectionLink>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
