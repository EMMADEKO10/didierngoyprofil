"use client";

import Reveal from "../Reveal";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(40px, 6vw, 60px) 0", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, transparent, rgba(76, 201, 240, 0.02), transparent)" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <div className="glass card" style={{ padding: "clamp(32px, 5vw, 48px)", borderRadius: 24, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08), rgba(247, 37, 133, 0.06))", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, var(--primary), var(--accent))" }} />
            
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(76, 201, 240, 0.15)", marginBottom: 16 }}>
                <span style={{ fontSize: 16 }}>🌟</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>À PROPOS DE DIDIER</span>
              </div>
              <h2 className="sectionTitle" style={{ marginBottom: 16 }}>Didier Ngoy Ngubu</h2>
              <p className="sectionSub" style={{ maxWidth: 700, margin: "0 auto", fontSize: 16 }}>
                Citoyen engagé pour le changement et le développement de l&apos;Afrique, auteur, entrepreneur social et conférencier international, j&apos;incarne une nouvelle génération de leaders africains portés par la vision d&apos;une <strong style={{ color: "var(--primary)", fontWeight: 600 }}>Afrique unie, entreprenante et consciente de son potentiel</strong>.
              </p>
            </div>

            {/* Contenu principal en grille */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginBottom: 32 }}>
              {/* Parcours & Vision */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ fontSize: 32 }}>🎯</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ma Vision</h3>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--muted)", marginBottom: 16 }}>
                  Bâtir une Afrique unie, entreprenante et consciente de son potentiel. Former une génération de leaders africains audacieux, disciplinés et unis par le désir d&apos;impacter positivement le monde.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>
                  Né en République Démocratique du Congo dans une famille modeste de quatorze enfants, j&apos;ai très tôt manifesté un esprit d&apos;initiative exceptionnel. Dès l&apos;école secondaire, j&apos;ai lancé ma première entreprise : une petite cabine de téléphonie mobile.
                </p>
              </div>

              {/* Valeurs & Engagement */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ fontSize: 32 }}>💎</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, background: "linear-gradient(135deg, var(--accent), var(--primary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Mes Valeurs</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 16 }}>
                  {["Excellence", "Persévérance", "Discipline", "Foi", "Service", "Mérite"].map(val => (
                    <div key={val} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 6, height: 6, background: "linear-gradient(135deg, var(--primary), var(--accent))", borderRadius: "50%", flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>{val}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>
                  Je ne parle pas seulement de réussite, j&apos;incarne la <strong style={{ color: "var(--foreground)" }}>persévérance, la discipline et la foi</strong>. À travers mes interventions et mes actions, je transmets une énergie qui réveille la conscience, pousse à l&apos;action et redonne à chacun la conviction que <strong style={{ color: "var(--primary)" }}>le changement commence d&apos;abord en soi</strong>.
                </p>
              </div>
            </div>

            {/* Statistiques compactes */}
            {/* <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", padding: "24px 0", borderTop: "1px solid rgba(76, 201, 240, 0.2)" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "var(--primary)", marginBottom: 4 }}>14</div>
                <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>Enfants dans la famille</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "var(--primary)", marginBottom: 4 }}>+15</div>
                <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>Années d&apos;engagement</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "var(--primary)", marginBottom: 4 }}>Multi</div>
                <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>Secteurs d&apos;impact</div>
              </div>
            </div> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
