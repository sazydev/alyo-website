"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  targetId?: string;
};

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

export function SectionLink({
  href,
  targetId,
  onClick,
  ...props
}: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || isModifiedClick(event)) {
      return;
    }

    const destination = new URL(href, window.location.href);
    const isCurrentPage =
      destination.origin === window.location.origin &&
      destination.pathname === window.location.pathname;
    const sectionId = targetId ?? decodeURIComponent(destination.hash.slice(1));

    if (!isCurrentPage || !sectionId) {
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    event.preventDefault();

    const destinationUrl =
      destination.pathname + destination.search + destination.hash;
    const currentUrl =
      window.location.pathname + window.location.search + window.location.hash;

    if (destinationUrl !== currentUrl) {
      window.history.pushState(null, "", destinationUrl);
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
