import Link from "next/link";
import type { ReactNode } from "react";

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
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
