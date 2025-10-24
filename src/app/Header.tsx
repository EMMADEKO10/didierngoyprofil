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
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "var(--background)",
      borderBottom: "1px solid var(--border)",
      padding: "1rem 0"
    }}>
      <div className="container">
        <nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Link href="#top" className="headerLogo">
            Didier Ngoyi Ngubu
          </Link>
          <div className="navLinks">
            <a href="#about" className="navBtn">À propos</a>
            <a href="#projets" className="navBtn">Projets</a>
            <a href="#livres" className="navBtn">Livres</a>
            <a href="#galerie" className="navBtn">Galerie</a>
            <a href="#contact" className="btnPrimary navBtn">Contact</a>
          </div>
          <button 
            className="mobileMenuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "var(--foreground)"
            }}
          >
            ☰
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="navLinksMobile" style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
            padding: "1rem",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "8px"
          }}>
            <a href="#about" className="btn" onClick={() => setMobileMenuOpen(false)}>À propos</a>
            <a href="#projets" className="btn" onClick={() => setMobileMenuOpen(false)}>Projets</a>
            <a href="#livres" className="btn" onClick={() => setMobileMenuOpen(false)}>Livres</a>
            <a href="#galerie" className="btn" onClick={() => setMobileMenuOpen(false)}>Galerie</a>
            <a href="#contact" className="btn btnPrimary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}