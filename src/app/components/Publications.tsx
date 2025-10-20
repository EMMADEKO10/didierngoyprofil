"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";

export default function Publications() {
  return (
    <section id="livres" style={{ padding: "clamp(50px, 7vw, 80px) 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(251, 146, 60, 0.04), transparent 60%)", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", borderRadius: 999, background: "linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(156, 39, 176, 0.1))", marginBottom: 16 }}>
              <span style={{ fontSize: 18 }}>📚</span>
              <span style={{ fontSize: 13, fontWeight: 700, background: "linear-gradient(135deg, rgb(251, 146, 60), rgb(156, 39, 176))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "1px" }}>PUBLICATIONS & CONFÉRENCES</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sectionTitle" style={{ fontSize: "clamp(32px, 5vw, 44px)" }}>Livres & Interventions</h2>
          </Reveal>
        </div>

        {/* Le Fondement du Bonheur - Carte Featured */}
        <Reveal delay={100}>
          <div className="glass card" style={{ padding: "clamp(32px, 5vw, 48px)", borderRadius: 24, marginBottom: 50, background: "linear-gradient(135deg, rgba(251, 146, 60, 0.06), rgba(156, 39, 176, 0.04))", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, background: "radial-gradient(circle, rgba(251, 146, 60, 0.15), transparent 70%)", filter: "blur(70px)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "center", position: "relative", zIndex: 1 }}>
              <div style={{ position: "relative", aspectRatio: "4/3", minHeight: 300 }} className="glass">
                <div style={{ position: "absolute", inset: 0, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 80px rgba(0, 0, 0, 0.4)" }}>
                  <Image src="/livre/livre.jpg" alt="Le Fondement du Bonheur" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(251, 146, 60, 0.15)", marginBottom: 16 }}>
                  <span style={{ fontSize: 16 }}>✨</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "rgb(251, 146, 60)", letterSpacing: "0.5px" }}>NOUVEAU • 2024</span>
                </div>
                <h3 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, marginBottom: 16, background: "linear-gradient(135deg, rgb(251, 146, 60), rgb(156, 39, 176))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Le Fondement du Bonheur
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)", marginBottom: 20 }}>
                  Un livre à la fois profond et universel dans lequel je partage ma vision du <strong style={{ color: "var(--foreground)" }}>bonheur comme la ressource la plus précieuse à cultiver dans la vie humaine</strong>.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", marginBottom: 24 }}>
                  Au-delà des apparences et des succès matériels, ce livre invite à une réflexion profonde sur ce qui fonde véritablement une vie épanouie, remplie de sens et d&apos;impact durable.
                </p>
                <div className="actions">
                  <Link href="#contact" className="btn btnPrimary">Commander le livre</Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Conférencier Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          <Reveal delay={150}>
            <div className="glass card" style={{ padding: 32, borderRadius: 20, height: "100%", background: "linear-gradient(135deg, rgba(76, 201, 240, 0.05), rgba(76, 201, 240, 0.02))" }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🎤</div>
              <h4 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: "var(--foreground)" }}>Conférencier International</h4>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginBottom: 20 }}>
                Reconnu pour son <strong style={{ color: "var(--foreground)" }}>éloquence, sa sagesse et son authenticité</strong>, je captive mon public par la puissance de mes idées et mon plaidoyer passionné pour une Afrique responsable et prospère.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>Leadership transformationnel</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>Culture de l&apos;excellence</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>Entrepreneuriat inclusif</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>Éthique du travail</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>Responsabilité citoyenne</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass card" style={{ padding: 32, borderRadius: 20, height: "100%", background: "linear-gradient(135deg, rgba(247, 37, 133, 0.05), rgba(247, 37, 133, 0.02))" }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🌍</div>
              <h4 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: "var(--foreground)" }}>Mon Message</h4>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginBottom: 20 }}>
                Qu&apos;il s&apos;adresse à des jeunes en quête de repères, à des leaders d&apos;entreprise ou à des institutions, mon message a toujours le même effet : <strong style={{ color: "var(--accent)" }}>réveiller la conscience, ranimer la foi et provoquer le passage à l&apos;action</strong>.
              </p>
              <div style={{ padding: 20, borderRadius: 12, background: "rgba(247, 37, 133, 0.08)", borderLeft: "3px solid var(--accent)" }}>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)", margin: 0, fontStyle: "italic" }}>
                  &quot;Ma capacité à allier inspiration et pragmatisme, à traduire les valeurs africaines en leviers de progrès, fait de moi un orateur recherché et respecté.&quot;
                </p>
              </div>
              <div style={{ marginTop: 24 }}>
                <Link href="#contact" className="btn btnPrimary" style={{ width: "100%" }}>M&apos;inviter pour une conférence</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
