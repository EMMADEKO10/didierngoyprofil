"use client";

import Reveal from "../Reveal";

export default function Presentation() {
  return (
    <section id="presentation" style={{ padding: "clamp(30px, 4vw, 40px) 0", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, rgba(76, 201, 240, 0.02), transparent)" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 30%, rgba(76, 201, 240, 0.05), transparent 50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 70%, rgba(247, 37, 133, 0.04), transparent 50%)", pointerEvents: "none" }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 32px)" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", borderRadius: 999, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(247, 37, 133, 0.1))", marginBottom: 16 }}>
              <span style={{ fontSize: 18 }}>✨</span>
              <span style={{ fontSize: 13, fontWeight: 700, background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "1px" }}>PRÉSENTATION PROFESSIONNELLE</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sectionTitle" style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 16 }}>Mon Parcours & Vision</h2>
            <p className="sectionSub" style={{ maxWidth: 700, margin: "0 auto", fontSize: "clamp(15px, 2vw, 17px)" }}>
              Un engagement profond pour transformer la jeunesse africaine en moteur du développement
            </p>
          </Reveal>
        </div>

        {/* Parcours Professionnel Timeline - Version compacte */}
        <Reveal delay={150}>
          <div className="glass card" style={{ padding: "clamp(20px, 3vw, 28px)", borderRadius: 20, marginBottom: "clamp(24px, 4vw, 32px)", background: "linear-gradient(135deg, rgba(76, 201, 240, 0.03), rgba(247, 37, 133, 0.02))" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 22 }}>📈</span>
              Parcours Professionnel
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { year: "2024", role: "Auteur", org: "Le Fondement du Bonheur", desc: "Publication de son premier ouvrage, un livre profond et universel sur la vision du bonheur comme ressource la plus précieuse à cultiver." },
                { year: "2019", role: "CEO & Fondateur", org: "BIOTECK AFRICA GROUP", desc: "Lancement d'une structure multisectorielle : agriculture, transformation agroalimentaire, immobilier, transport et restauration." },
                { year: "2019", role: "Président", org: "ONG CONGO LEADERSHIP", desc: "Formation, union et accompagnement des jeunes et femmes dans l'entrepreneuriat, avec actions philanthropiques continues." },
                { year: "Avant", role: "Entrepreneur Serial", org: "NEW VISION SERVICE & PANTHÈRE SECURITY", desc: "Création d'entreprises de formation professionnelle, accompagnement des femmes et société de gardiennage revendue avec succès." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, position: "relative" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 70 }}>
                    <div className="glass" style={{ padding: "6px 12px", borderRadius: 999, background: "linear-gradient(135deg, var(--primary), var(--accent))", color: "white", fontWeight: 700, fontSize: 12, boxShadow: "0 3px 15px rgba(76, 201, 240, 0.3)" }}>
                      {item.year}
                    </div>
                    {i !== 3 && <div style={{ width: 2, flex: 1, background: "linear-gradient(180deg, var(--primary), transparent)", marginTop: 6 }} />}
                  </div>
                  <div className="glass" style={{ flex: 1, padding: 16, borderRadius: 12, background: "rgba(255, 255, 255, 0.03)" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 3, color: "var(--primary)" }}>{item.role}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: "var(--foreground)" }}>{item.org}</div>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Compétences & Expertises */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          {[
            { 
              title: "Leadership Transformationnel", 
              icon: "👔",
              skills: ["Formation des jeunes", "Culture de l'excellence", "Responsabilité citoyenne", "Autonomisation"],
              gradient: "76, 201, 240"
            },
            { 
              title: "Entrepreneuriat & Agriculture", 
              icon: "🌾",
              skills: ["Agro-business", "Souveraineté alimentaire", "Transformation locale", "Formation agricole"],
              gradient: "34, 197, 94"
            },
            { 
              title: "Conférencier International", 
              icon: "🎤",
              skills: ["Leadership africain", "Développement personnel", "Plaidoyer visionnaire", "Inspiration collective"],
              gradient: "247, 37, 133"
            },
            { 
              title: "Activisme & Philanthropie", 
              icon: "",
              skills: ["Défense des droits", "Actions sociales", "Éthique du travail", "Impact communautaire"],
              gradient: "156, 39, 176"
            },
          ].map((cat, i) => (
            <Reveal key={cat.title} delay={i * 120}>
              <div className="glass card" style={{ padding: 28, borderRadius: 20, height: "100%", position: "relative", overflow: "hidden", background: `linear-gradient(135deg, rgba(${cat.gradient}, 0.05), rgba(${cat.gradient}, 0.02))` }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 150, height: 150, background: `radial-gradient(circle, rgba(${cat.gradient}, 0.12), transparent 70%)`, filter: "blur(40px)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{cat.icon}</div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "var(--foreground)" }}>{cat.title}</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {cat.skills.map((skill) => (
                      <div key={skill} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: `rgb(${cat.gradient})` }} />
                        <span style={{ fontSize: 14, color: "var(--muted)" }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
