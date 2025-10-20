"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";

export default function Publications() {
  return (
    <section id="livres" style={{ padding: "clamp(40px, 6vw, 60px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 50px)" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(156, 39, 176, 0.1))", marginBottom: 16 }}>
              <span style={{ fontSize: 16 }}>📚</span>
              <span style={{ fontSize: 12, fontWeight: 700, background: "linear-gradient(135deg, rgb(251, 146, 60), rgb(156, 39, 176))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "0.5px" }}>PUBLICATIONS & CONFÉRENCES</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sectionTitle" style={{ fontSize: "clamp(28px, 4vw, 36px)" }}>Livres & Interventions</h2>
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
                  <span style={{ fontSize: 11, fontWeight: 600, color: "rgb(251, 146, 60)", letterSpacing: "0.5px" }}>NOUVEAU • 2024</span>
                </div>
                <h3 style={{ fontSize: "clamp(20px, 3vw, 24px)", fontWeight: 700, marginBottom: 12, background: "linear-gradient(135deg, rgb(251, 146, 60), rgb(156, 39, 176))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Le Fondement du Bonheur
                </h3>
                <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.6, color: "var(--muted)", marginBottom: 16 }}>
                  Un livre à la fois profond et universel dans lequel je partage ma vision du <strong style={{ color: "var(--foreground)" }}>bonheur comme la ressource la plus précieuse à cultiver dans la vie humaine</strong>.
                </p>
                <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.5, color: "var(--muted)", marginBottom: 20 }}>
                  Au-delà des apparences et des succès matériels, ce livre invite à une réflexion profonde sur ce qui fonde véritablement une vie épanouie, remplie de sens et d&apos;impact durable.
                </p>
                <div className="actions">
                  <Link href="#contact" className="btn btnPrimary">Commander le livre</Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Conférencier Section - Responsive */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(24px, 4vw, 32px)" }}>
          <Reveal delay={150}>
            <div className="glass card" style={{ padding: "clamp(24px, 4vw, 32px)", borderRadius: 20, height: "100%", background: "linear-gradient(135deg, rgba(76, 201, 240, 0.05), rgba(76, 201, 240, 0.02))", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--primary), var(--accent))" }} />
              <div style={{ fontSize: "clamp(36px, 4vw, 40px)", marginBottom: 16 }}>🎤</div>
              <h4 style={{ fontSize: "clamp(18px, 2.5vw, 20px)", fontWeight: 700, marginBottom: 12, color: "var(--foreground)" }}>Conférencier International</h4>
              <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", lineHeight: 1.6, color: "var(--muted)", marginBottom: 16 }}>
                Reconnu pour son <strong style={{ color: "var(--foreground)" }}>éloquence, sa sagesse et son authenticité</strong>, je captive mon public par la puissance de mes idées et mon plaidoyer passionné pour une Afrique responsable et prospère.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "clamp(8px, 1.5vw, 12px)" }}>
                {["Leadership transformationnel", "Culture de l'excellence", "Entrepreneuriat inclusif", "Éthique du travail", "Responsabilité citoyenne"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 8, background: "rgba(76, 201, 240, 0.08)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", flexShrink: 0 }} />
                    <span style={{ fontSize: "clamp(12px, 1.4vw, 13px)", color: "var(--muted)", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass card" style={{ padding: "clamp(24px, 4vw, 32px)", borderRadius: 20, height: "100%", background: "linear-gradient(135deg, rgba(247, 37, 133, 0.05), rgba(247, 37, 133, 0.02))", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--accent), var(--primary))" }} />
              <div style={{ fontSize: "clamp(36px, 4vw, 40px)", marginBottom: 16 }}>🌍</div>
              <h4 style={{ fontSize: "clamp(18px, 2.5vw, 20px)", fontWeight: 700, marginBottom: 12, color: "var(--foreground)" }}>Mon Message</h4>
              <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", lineHeight: 1.6, color: "var(--muted)", marginBottom: 16 }}>
                Qu&apos;il s&apos;adresse à des jeunes en quête de repères, à des leaders d&apos;entreprise ou à des institutions, mon message a toujours le même effet : <strong style={{ color: "var(--accent)" }}>réveiller la conscience, ranimer la foi et provoquer le passage à l&apos;action</strong>.
              </p>
              <div style={{ padding: "clamp(16px, 3vw, 20px)", borderRadius: 12, background: "rgba(247, 37, 133, 0.08)", borderLeft: "3px solid var(--accent)", marginBottom: 20 }}>
                <p style={{ fontSize: "clamp(13px, 1.6vw, 14px)", lineHeight: 1.5, color: "var(--muted)", margin: 0, fontStyle: "italic" }}>
                  &quot;Ma capacité à allier inspiration et pragmatisme, à traduire les valeurs africaines en leviers de progrès, fait de moi un orateur recherché et respecté.&quot;
                </p>
              </div>
              <Link href="#contact" className="btn btnPrimary" style={{ width: "100%" }}>M&apos;inviter pour une conférence</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
