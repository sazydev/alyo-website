/* =============================================
   ALYO – script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. HEADER : apparition au scroll (desktop) / toujours visible (mobile ≤860px) ─── */
  const header = document.getElementById('mainHeader');
  const mobileHeaderMq = window.matchMedia('(max-width: 860px)');

  const updateHeaderVisibility = () => {
    if (!header) return;
    if (mobileHeaderMq.matches) {
      header.classList.add('visible');
      return;
    }
    if (window.scrollY > window.innerHeight * 0.8) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  };

  updateHeaderVisibility();
  window.addEventListener('scroll', updateHeaderVisibility, { passive: true });
  mobileHeaderMq.addEventListener('change', updateHeaderVisibility);


  /* ─── 2. BOUTON SCROLL HERO ─── */
  const heroScroll = document.getElementById('heroScroll');

  if (heroScroll) {
    heroScroll.addEventListener('click', () => {
      const target = document.getElementById('presentation');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }


  /* ─── 3. MENU BURGER PREMIUM ─── */
  const burgerBtn    = document.getElementById('burgerBtn');
  const headerNav    = document.getElementById('headerNav');
  const navOverlay   = document.getElementById('navOverlay');
  const navMobileBack = document.getElementById('navMobileBack');

  if (burgerBtn && headerNav && navOverlay) {

    const openMenu = () => {
      burgerBtn.classList.add('is-open');
      headerNav.classList.add('is-open');
      navOverlay.classList.add('is-open');
      burgerBtn.setAttribute('aria-expanded', 'true');
      burgerBtn.setAttribute('aria-label', 'Fermer le menu');
      document.body.style.overflow = 'hidden';
      if (navMobileBack) {
        navMobileBack.focus();
      }
    };

    const closeMenu = () => {
      burgerBtn.classList.remove('is-open');
      headerNav.classList.remove('is-open');
      navOverlay.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.setAttribute('aria-label', 'Ouvrir le menu');
      document.body.style.overflow = '';
    };

    /* Toggle au clic sur le burger */
    burgerBtn.addEventListener('click', () => {
      const isOpen = headerNav.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });

    /* Fermeture en cliquant sur l'overlay */
    navOverlay.addEventListener('click', closeMenu);

    if (navMobileBack) {
      navMobileBack.addEventListener('click', () => {
        closeMenu();
        burgerBtn.focus();
      });
    }

    /* Fermeture sur clic d'un lien nav */
    const navLinks = headerNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    /* Fermeture avec la touche Escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && headerNav.classList.contains('is-open')) {
        closeMenu();
        burgerBtn.focus();
      }
    });

    /* Fermeture si on repasse en desktop (resize) */
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) {
        closeMenu();
      }
    }, { passive: true });
  }


  /* ─── 4. RÉVÉLATION AU SCROLL (Intersection Observer) ─── */
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.10 }
  );

  reveals.forEach((el) => revealObserver.observe(el));


  /* ─── 5. CONSENTEMENT COOKIES / GOOGLE ANALYTICS ─── */
  const analyticsId = 'G-6P9Z4002K3';
  const consentKey = 'alyo_cookie_consent';
  const acceptedValue = 'accepted';
  const refusedValue = 'refused';

  const getStoredConsent = () => {
    try {
      return window.localStorage.getItem(consentKey);
    } catch (error) {
      return null;
    }
  };

  const setStoredConsent = (value) => {
    try {
      window.localStorage.setItem(consentKey, value);
    } catch (error) {
      /* Le bandeau reste fonctionnel même si localStorage est indisponible. */
    }
  };

  const loadGoogleAnalytics = () => {
    window[`ga-disable-${analyticsId}`] = false;

    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${analyticsId}"]`)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', analyticsId);

    const analyticsScript = document.createElement('script');
    analyticsScript.async = true;
    analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.appendChild(analyticsScript);
  };

  const disableGoogleAnalytics = () => {
    window[`ga-disable-${analyticsId}`] = true;

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const injectCookieStyles = () => {
    if (document.getElementById('cookieConsentStyles')) return;

    const style = document.createElement('style');
    style.id = 'cookieConsentStyles';
    style.textContent = `
      .cookie-banner {
        position: fixed;
        left: clamp(16px, 3vw, 32px);
        right: clamp(16px, 3vw, 32px);
        bottom: clamp(16px, 3vw, 28px);
        z-index: 120;
        max-width: 1120px;
        margin: 0 auto;
        color: #0A1A5C;
        background: rgba(255, 255, 255, 0.96);
        border: 1px solid rgba(31, 60, 255, 0.14);
        border-radius: 22px;
        box-shadow: 0 24px 70px rgba(10, 26, 92, 0.18);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        opacity: 0;
        pointer-events: none;
        transform: translateY(calc(100% + 28px));
        transition: opacity 0.28s ease, transform 0.28s ease;
      }

      .cookie-banner.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }

      .cookie-banner__inner {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 22px;
        align-items: center;
        padding: clamp(18px, 2.5vw, 24px);
      }

      .cookie-banner h2 {
        margin: 0 0 6px;
        font-family: 'Syne', sans-serif;
        font-size: clamp(18px, 2vw, 22px);
        font-weight: 800;
        line-height: 1.12;
        color: #1F3CFF;
      }

      .cookie-banner p {
        margin: 0;
        max-width: 760px;
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        line-height: 1.6;
        color: rgba(10, 26, 92, 0.68);
      }

      .cookie-banner a {
        color: #1F3CFF;
        font-weight: 700;
        text-decoration-thickness: 1px;
        text-underline-offset: 3px;
      }

      .cookie-banner__actions {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
      }

      .cookie-banner__button {
        min-height: 44px;
        padding: 0 20px;
        border-radius: 999px;
        border: 1px solid rgba(31, 60, 255, 0.18);
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      }

      .cookie-banner__button:hover {
        transform: translateY(-2px);
      }

      .cookie-banner__button--reject {
        background: rgba(31, 60, 255, 0.06);
        color: #0A1A5C;
      }

      .cookie-banner__button--accept {
        border-color: rgba(59, 227, 161, 0.58);
        background: #3BE3A1;
        color: #0A1A5C;
        box-shadow: 0 12px 26px rgba(59, 227, 161, 0.22);
      }

      .footer-cookie-link {
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: 0;
        border: 0;
        background: transparent;
        color: rgba(255,255,255,0.5);
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        line-height: 1.45;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.25s ease, transform 0.25s ease;
      }

      .footer-cookie-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 1px;
        background: rgba(255,255,255,0.75);
        transition: width 0.25s ease;
      }

      .footer-cookie-link:hover {
        color: #fff;
        transform: translateX(3px);
      }

      .footer-cookie-link:hover::after {
        width: 100%;
      }

      .footer-cookie-link:focus-visible,
      .cookie-banner__button:focus-visible,
      .cookie-banner a:focus-visible {
        outline: 3px solid rgba(59, 227, 161, 0.7);
        outline-offset: 3px;
      }

      @media (max-width: 720px) {
        .cookie-banner {
          left: 14px;
          right: 14px;
          bottom: 14px;
          border-radius: 18px;
        }

        .cookie-banner__inner {
          grid-template-columns: 1fr;
          gap: 16px;
          padding: 18px;
        }

        .cookie-banner__actions {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .cookie-banner__button {
          width: 100%;
          padding: 0 14px;
        }
      }

      @media (max-width: 420px) {
        .cookie-banner__actions {
          grid-template-columns: 1fr;
        }
      }
    `;

    document.head.appendChild(style);
  };

  const privacyPath = window.location.pathname.includes('/page/')
    ? 'confidentialite.html'
    : 'page/confidentialite.html';

  const createCookieBanner = () => {
    let banner = document.getElementById('cookieConsentBanner');
    if (banner) return banner;

    banner = document.createElement('section');
    banner.id = 'cookieConsentBanner';
    banner.className = 'cookie-banner';
    banner.setAttribute('aria-label', 'Gestion des cookies');
    banner.innerHTML = `
      <div class="cookie-banner__inner">
        <div class="cookie-banner__content">
          <h2>Gestion des cookies</h2>
          <p>Ce site utilise des cookies de mesure d'audience via Google Analytics afin de comprendre la navigation et améliorer l'expérience. Vous pouvez accepter ou refuser ces cookies. <a href="${privacyPath}">En savoir plus</a>.</p>
        </div>
        <div class="cookie-banner__actions">
          <button type="button" class="cookie-banner__button cookie-banner__button--reject" data-cookie-reject>Refuser</button>
          <button type="button" class="cookie-banner__button cookie-banner__button--accept" data-cookie-accept>Accepter</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    banner.querySelector('[data-cookie-reject]').addEventListener('click', () => {
      setStoredConsent(refusedValue);
      disableGoogleAnalytics();
      hideCookieBanner();
    });

    banner.querySelector('[data-cookie-accept]').addEventListener('click', () => {
      setStoredConsent(acceptedValue);
      loadGoogleAnalytics();
      hideCookieBanner();
    });

    return banner;
  };

  const showCookieBanner = () => {
    injectCookieStyles();
    const banner = createCookieBanner();
    banner.hidden = false;
    requestAnimationFrame(() => {
      banner.classList.add('is-visible');
    });
  };

  const hideCookieBanner = () => {
    const banner = document.getElementById('cookieConsentBanner');
    if (!banner) return;

    banner.classList.remove('is-visible');
    window.setTimeout(() => {
      banner.hidden = true;
    }, 280);
  };

  injectCookieStyles();

  document.querySelectorAll('[data-cookie-settings]').forEach((button) => {
    button.addEventListener('click', () => {
      showCookieBanner();
    });
  });

  const storedConsent = getStoredConsent();

  if (storedConsent === acceptedValue) {
    loadGoogleAnalytics();
  } else if (storedConsent === refusedValue) {
    disableGoogleAnalytics();
  } else {
    showCookieBanner();
  }

});
