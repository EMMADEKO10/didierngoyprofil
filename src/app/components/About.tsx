"use client";

import Reveal from "../Reveal";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(30px, 4vw, 40px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 32px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(247, 37, 133, 0.1))", marginBottom: 20 }}>
              <span style={{ fontSize: 18 }}>🌟</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>À PROPOS DE DIDIER</span>
            </div>
            <h2 className="sectionTitle" style={{ marginBottom: 20 }}>Didier Ngoy Ngubu</h2>
            <p className="sectionSub" style={{ maxWidth: 800, margin: "0 auto", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
              Citoyen engagé pour le changement et le développement de l&apos;Afrique, auteur, entrepreneur social et conférencier international, j&apos;incarne une nouvelle génération de leaders africains portés par la vision d&apos;une <strong style={{ color: "var(--primary)", fontWeight: 600 }}>Afrique unie, entreprenante et consciente de son potentiel</strong>.
            </p>
          </div>

          {/* Contenu principal - Design moderne et responsive */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(24px, 4vw, 40px)" }}>
            {/* Vision */}
            <div className="glass card" style={{ padding: "clamp(24px, 4vw, 32px)", borderRadius: 20, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.06), rgba(76, 201, 240, 0.02))", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--primary), var(--accent))" }} />
              {/* <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 28px)" }}>🎯</div>
                <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)" }}>Ma Vision</h3>
              </div> */}
              <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.5, color: "var(--muted)" }}>
                Né en République Démocratique du Congo dans une famille modeste de quatorze enfants, j&apos;ai très tôt manifesté un esprit d&apos;initiative exceptionnel. Dès l&apos;école secondaire, j&apos;ai lancé ma première entreprise : une petite cabine de téléphonie mobile.
              </p>
              <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.6, color: "var(--muted)", marginBottom: 16 }}>
                Ma mission est de Bâtir une Afrique unie, entreprenante et consciente de son potentiel. Former une génération de leaders africains audacieux, disciplinés et unis par le désir d&apos;impacter positivement le monde.
              </p>
              
            </div>

            {/* Valeurs */}
            <div className="glass card" style={{ padding: "clamp(24px, 4vw, 32px)", borderRadius: 20, background: "linear-gradient(135deg, rgba(247, 37, 133, 0.06), rgba(247, 37, 133, 0.02))", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--accent), var(--primary))" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 28px)" }}>💎</div>
                <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)" }}>Mes Valeurs</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "clamp(8px, 1.5vw, 12px)", marginBottom: 16 }}>
                {["Excellence", "Persévérance", "Discipline", "Foi", "Service", "Mérite"].map(val => (
                  <div key={val} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 8, background: "rgba(255, 255, 255, 0.05)" }}>
                    <div style={{ width: 6, height: 6, background: "linear-gradient(135deg, var(--primary), var(--accent))", borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontSize: "clamp(12px, 1.4vw, 14px)", color: "var(--muted)", fontWeight: 500 }}>{val}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.5, color: "var(--muted)" }}>
                Je ne parle pas seulement de réussite, j&apos;incarne la <strong style={{ color: "var(--foreground)" }}>persévérance, la discipline et la foi</strong>. À travers mes interventions et mes actions, je transmets une énergie qui réveille la conscience, pousse à l&apos;action et redonne à chacun la conviction que <strong style={{ color: "var(--primary)" }}>le changement commence d&apos;abord en soi</strong>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
