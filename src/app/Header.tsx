"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "../contexts/TranslationContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on ESC and lock body scroll when mobile menu is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", onKeyDown);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className="glass"
      style={{
        position: "fixed",
        top: 10,
        left: 0,
        right: 0,
        zIndex: 80,
        borderRadius: 16,
        margin: "10px auto 0",
        width: "min(1100px, 92%)",
        transition: "box-shadow .2s ease, transform .2s ease",
        boxShadow: scrolled ? "var(--glow)" : "none",
        transform: scrolled ? "translateY(0)" : "translateY(0)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
        }}
      >
        <Link href="#top" className="headerLogo" style={{ fontWeight: 700, letterSpacing: -0.2, whiteSpace: "nowrap" }}>
          <span className="logoFull">Didier Ngoy</span>
          <span className="logoShort">D. Ngoy</span>
        </Link>
        <div className="headerNav">
          <div className="navLinks">
            <a href="#about" className="btn navBtn"><span suppressHydrationWarning>{t.nav.about}</span></a>
            <a href="#projets" className="btn navBtn"><span suppressHydrationWarning>{t.nav.projects}</span></a>
            <a href="#livres" className="btn navBtn"><span suppressHydrationWarning>{t.nav.books}</span></a>
            <a href="#galerie" className="btn navBtn"><span suppressHydrationWarning>{t.nav.gallery}</span></a>
            <a href="#contact" className="btn btnPrimary navBtn"><span suppressHydrationWarning>{t.nav.contact}</span></a>
          </div>
          <div className="languageSelector" style={{ marginLeft: 16 }}>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
              style={{
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '6px 12px',
                fontSize: 14,
                cursor: 'pointer'
              }}
            >
              <option value="fr">🇫🇷 FR</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </div>
          <button 
            className="mobileMenuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'isActive' : ''}`} aria-hidden="true">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </span>
          </button>
        </div>
        {mobileMenuOpen && (
          <>
            <div className="menuBackdrop" onClick={() => setMobileMenuOpen(false)} />
            <div id="mobileMenu" className="navLinksMobile" role="menu">
              <a href="#about" className="btn" onClick={() => setMobileMenuOpen(false)}><span suppressHydrationWarning>{t.nav.about}</span></a>
              <a href="#projets" className="btn" onClick={() => setMobileMenuOpen(false)}><span suppressHydrationWarning>{t.nav.projects}</span></a>
              <a href="#livres" className="btn" onClick={() => setMobileMenuOpen(false)}><span suppressHydrationWarning>{t.nav.books}</span></a>
              <a href="#galerie" className="btn" onClick={() => setMobileMenuOpen(false)}><span suppressHydrationWarning>{t.nav.gallery}</span></a>
              <a href="#contact" className="btn btnPrimary" onClick={() => setMobileMenuOpen(false)}><span suppressHydrationWarning>{t.nav.contact}</span></a>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}