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

});
