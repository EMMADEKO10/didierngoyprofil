"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Publications() {
  const { t } = useTranslation();
  
  return (
    <section id="livres" style={{ padding: "clamp(40px, 6vw, 60px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 50px)" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(156, 39, 176, 0.1))", marginBottom: 16 }}>
              <span style={{ fontSize: 16 }}>📚</span>
              <span style={{ fontSize: 12, fontWeight: 700, background: "linear-gradient(135deg, rgb(251, 146, 60), rgb(156, 39, 176))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "0.5px" }}>{t.publications.subtitle}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sectionTitle" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>{t.publications.title}</h2>
          </Reveal>
        </div>

        {/* Le Fondement du Bonheur - Carte Featured */}
        <Reveal delay={100}>
          <div className="glass card" style={{ padding: "clamp(24px, 4vw, 32px)", borderRadius: 20, marginBottom: "clamp(32px, 5vw, 40px)", background: "linear-gradient(135deg, rgba(251, 146, 60, 0.06), rgba(156, 39, 176, 0.04))", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, rgb(251, 146, 60), rgb(156, 39, 176))" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(24px, 4vw, 32px)", alignItems: "center", position: "relative", zIndex: 1 }}>
              <div style={{ position: "relative", aspectRatio: "4/3", minHeight: "clamp(200px, 30vw, 250px)" }} className="glass">
                <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}>
                  <Image src="/livre/livre.jpg" alt="Le Fondement du Bonheur" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: 999, background: "rgba(251, 146, 60, 0.15)", marginBottom: 16 }}>
                  <span style={{ fontSize: 14 }}>✨</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "rgb(251, 146, 60)", letterSpacing: "0.5px" }}>{t.publications.new}</span>
                </div>
                <h3 style={{ fontSize: "clamp(20px, 3vw, 24px)", fontWeight: 700, marginBottom: 12, background: "linear-gradient(135deg, rgb(251, 146, 60), rgb(156, 39, 176))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {t.publications.bookTitle}
                </h3>
                <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.6, color: "var(--muted)", marginBottom: 16 }}>
                  {t.publications.bookDescription}
                </p>
                <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.5, color: "var(--muted)", marginBottom: 20 }}>
                  {t.publications.bookDescription2}
                </p>
                <div className="actions">
                  <Link href="#contact" className="btn btnPrimary">{t.publications.orderBook}</Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
