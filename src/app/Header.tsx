"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <span className="logoFull">Didier Ngoyi</span>
          <span className="logoShort">D. Ngoyi</span>
        </Link>
        <div className="headerNav">
          <div className="navLinks">
            <a href="#about" className="btn navBtn">À propos</a>
            <a href="#roles" className="btn navBtn">Rôles</a>
            <a href="#projets" className="btn navBtn">Projets</a>
            <a href="#livres" className="btn navBtn">Livres</a>
            <a href="#galerie" className="btn navBtn">Galerie</a>
            <a href="#contact" className="btn btnPrimary navBtn">Contact</a>
          </div>
          <button 
            className="mobileMenuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="navLinksMobile">
            <a href="#about" className="btn" onClick={() => setMobileMenuOpen(false)}>À propos</a>
            <a href="#roles" className="btn" onClick={() => setMobileMenuOpen(false)}>Rôles</a>
            <a href="#projets" className="btn" onClick={() => setMobileMenuOpen(false)}>Projets</a>
            <a href="#livres" className="btn" onClick={() => setMobileMenuOpen(false)}>Livres</a>
            <a href="#galerie" className="btn" onClick={() => setMobileMenuOpen(false)}>Galerie</a>
            <a href="#contact" className="btn btnPrimary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}


