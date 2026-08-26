"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./CookieConsent.module.css";

const ANALYTICS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "G-6P9Z4002K3";
const CONSENT_KEY = "alyo_cookie_consent";
const ACCEPTED_VALUE = "accepted";
const REFUSED_VALUE = "refused";
const EXIT_DURATION = 280;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

function getStoredConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function setStoredConsent(value: string) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Le bandeau reste utilisable lorsque localStorage est indisponible.
  }
}

function setAnalyticsDisabled(disabled: boolean) {
  const analyticsWindow = window as unknown as Record<string, unknown>;
  analyticsWindow["ga-disable-" + ANALYTICS_ID] = disabled;
}

function loadGoogleAnalytics() {
  setAnalyticsDisabled(false);

  if (document.querySelector('script[src*="googletagmanager.com/gtag/js?id=' + ANALYTICS_ID + '"]')) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args));
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const analyticsScript = document.createElement("script");
  analyticsScript.async = true;
  analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=" + ANALYTICS_ID;
  document.head.appendChild(analyticsScript);
}

function disableGoogleAnalytics() {
  setAnalyticsDisabled(true);
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

export function CookieConsent() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const openBanner = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsMounted(true);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsVisible(true));
    });
  }, []);

  const closeBanner = useCallback(() => {
    setIsVisible(false);
    closeTimerRef.current = window.setTimeout(() => {
      setIsMounted(false);
      closeTimerRef.current = null;
    }, EXIT_DURATION);
  }, []);

  useEffect(() => {
    const storedConsent = getStoredConsent();
    let initialFrame: number | null = null;

    if (storedConsent === ACCEPTED_VALUE) {
      loadGoogleAnalytics();
    } else if (storedConsent === REFUSED_VALUE) {
      disableGoogleAnalytics();
    } else {
      initialFrame = window.requestAnimationFrame(openBanner);
    }

    const handleCookieSettings = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-cookie-settings]")) {
        openBanner();
      }
    };

    document.addEventListener("click", handleCookieSettings);

    return () => {
      document.removeEventListener("click", handleCookieSettings);
      if (initialFrame !== null) {
        window.cancelAnimationFrame(initialFrame);
      }
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [openBanner]);

  const rejectCookies = () => {
    setStoredConsent(REFUSED_VALUE);
    disableGoogleAnalytics();
    closeBanner();
  };

  const acceptCookies = () => {
    setStoredConsent(ACCEPTED_VALUE);
    loadGoogleAnalytics();
    closeBanner();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section
      className={[styles.banner, isVisible ? styles.visible : ""].filter(Boolean).join(" ")}
      aria-label="Gestion des cookies"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>Gestion des cookies</h2>
          <p>
            Ce site utilise des cookies de mesure d&apos;audience via Google Analytics afin de comprendre la navigation
            et améliorer l&apos;expérience. Vous pouvez accepter ou refuser ces cookies.{" "}
            <Link href="/politique-de-confidentialite">En savoir plus</Link>.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={[styles.button, styles.reject].join(" ")} type="button" onClick={rejectCookies}>
            Refuser
          </button>
          <button className={[styles.button, styles.accept].join(" ")} type="button" onClick={acceptCookies}>
            Accepter
          </button>
        </div>
      </div>
    </section>
  );
}
