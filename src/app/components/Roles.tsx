"use client";

import Reveal from "../Reveal";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Roles() {
  const { t } = useTranslation();
  
  return (
    <section id="roles" style={{ padding: "clamp(50px, 7vw, 80px) 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 20%, rgba(76, 201, 240, 0.03), transparent 60%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Reveal>
            <h2 className="sectionTitle" style={{ fontSize: "clamp(32px, 5vw, 44px)" }}>{t.roles.title}</h2>
            <p className="sectionSub" style={{ margin: "0 auto", maxWidth: 680 }}>
              {t.roles.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Congo Leadership - Carte principale */}
        <Reveal delay={100}>
          <div className="glass card" style={{ padding: "clamp(32px, 5vw, 48px)", borderRadius: 24, marginBottom: 40, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.06), rgba(76, 201, 240, 0.02))", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 250, height: 250, background: "radial-gradient(circle, rgba(76, 201, 240, 0.15), transparent 70%)", filter: "blur(60px)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 48 }}>🌍</div>
                <div>
                  <h3 style={{ fontSize: 26, fontWeight: 700, background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>{t.roles.congoLeadership.title}</h3>
                  <div style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600, letterSpacing: "0.5px" }}>{t.roles.congoLeadership.subtitle}</div>
                </div>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)", marginBottom: 24 }}>
                {t.roles.congoLeadership.description}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 24 }}>
                {t.roles.congoLeadership.features.map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, borderRadius: 12, background: "rgba(255, 255, 255, 0.03)" }}>
                    <div style={{ fontSize: 24 }}>{item.icon}</div>
                    <span style={{ fontSize: 14, color: "var(--muted)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: 20, borderRadius: 16, background: "rgba(76, 201, 240, 0.08)", borderLeft: "4px solid var(--primary)" }}>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
                  {t.roles.congoLeadership.quote}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Génération Impact - Carte principale */}
        <Reveal delay={150}>
          <div className="glass card" style={{ padding: "clamp(32px, 5vw, 48px)", borderRadius: 24, marginBottom: 40, background: "linear-gradient(135deg, rgba(247, 37, 133, 0.06), rgba(247, 37, 133, 0.02))", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -50, left: -50, width: 250, height: 250, background: "radial-gradient(circle, rgba(247, 37, 133, 0.15), transparent 70%)", filter: "blur(60px)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 48 }}>⚡</div>
                <div>
                  <h3 style={{ fontSize: 26, fontWeight: 700, background: "linear-gradient(135deg, var(--accent), var(--primary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>{t.roles.generationImpact.title}</h3>
                  <div style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600, letterSpacing: "0.5px" }}>{t.roles.generationImpact.subtitle}</div>
                </div>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)", marginBottom: 24 }}>
                {t.roles.generationImpact.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
                {t.roles.generationImpact.tags.map((tag) => (
                  <div key={tag} style={{ padding: "8px 16px", borderRadius: 999, background: "rgba(247, 37, 133, 0.1)", border: "1px solid rgba(247, 37, 133, 0.2)" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>{tag}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: 20, borderRadius: 16, background: "rgba(247, 37, 133, 0.08)", borderLeft: "4px solid var(--accent)" }}>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", margin: 0, marginBottom: 12 }}>
                  {t.roles.generationImpact.quote1}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
                  {t.roles.generationImpact.quote2}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Autres Rôles - Grille compacte */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {t.roles.otherRoles.map((card, i) => (
            <Reveal key={card.title} delay={200 + i * 80}>
              <div className="glass card" style={{ padding: 28, borderRadius: 20, height: "100%", position: "relative", overflow: "hidden", background: `linear-gradient(135deg, rgba(${card.gradient}, 0.05), rgba(${card.gradient}, 0.02))` }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 150, height: 150, background: `radial-gradient(circle, rgba(${card.gradient}, 0.12), transparent 70%)`, filter: "blur(40px)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{card.icon}</div>
                  <h4 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, color: "var(--foreground)" }}>{card.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{card.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
