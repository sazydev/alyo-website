"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { contactHref, mainNavigation } from "@/data/navigation";

import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

const MOBILE_BREAKPOINT = 860;

type MainNavigationHref = (typeof mainNavigation)[number]["href"];

const navigationSections = mainNavigation.map((item) => ({
  href: item.href,
  sectionId: item.href === "/" ? "hero" : item.href.split("#")[1],
}));

export function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<MainNavigationHref | null>(
    pathname === "/" ? "/" : null,
  );
  const burgerRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const updateVisibility = () => {
      setIsVisible(
        pathname !== "/" ||
          mediaQuery.matches ||
          window.scrollY > window.innerHeight * 0.8,
      );
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    mediaQuery.addEventListener("change", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      mediaQuery.removeEventListener("change", updateVisibility);
    };
  }, [pathname]);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      if (pathname !== "/") {
        setActiveHref(null);
        return;
      }

      const activationLine =
        window.scrollY + Math.min(window.innerHeight * 0.25, 180);
      let currentHref: MainNavigationHref = "/";

      navigationSections.forEach((item) => {
        if (!item.sectionId) {
          return;
        }

        const section = document.getElementById(item.sectionId);

        if (section && section.offsetTop <= activationLine) {
          currentHref = item.href;
        }
      });

      setActiveHref((current) =>
        current === currentHref ? current : currentHref,
      );
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        burgerRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize, { passive: true });
    const focusFrame = window.requestAnimationFrame(() => backRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const closeMenuAndReturnFocus = () => {
    closeMenu();
    window.requestAnimationFrame(() => burgerRef.current?.focus());
  };

  const handleContactClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (
      pathname !== "/" ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const contactSection = document.getElementById("contactez-nous");

    if (!contactSection) {
      return;
    }

    event.preventDefault();

    if (window.location.hash !== "#contactez-nous") {
      window.history.pushState(null, "", contactHref);
    }

    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`${styles.header} ${isVisible ? styles.visible : ""}`}
        id="mainHeader"
      >
        <div className={styles.backdrop} aria-hidden="true" />

        <Link href="/" className={styles.logo} aria-label="Accueil Alyo">
          <span className={styles.logoMark} />
        </Link>

        <MobileMenu
          isOpen={isMenuOpen}
          activeHref={activeHref}
          backRef={backRef}
          onClose={closeMenu}
          onBack={closeMenuAndReturnFocus}
          onContactClick={handleContactClick}
        />

        <div className={styles.desktopCta}>
          <Link
            href={contactHref}
            className={styles.greenButton}
            onClick={handleContactClick}
          >
            Contactez-nous
          </Link>
        </div>

        <button
          ref={burgerRef}
          type="button"
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="header-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </header>

      <button
        type="button"
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
        aria-label="Fermer le menu"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </>
  );
}
