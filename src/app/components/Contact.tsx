"use client";

import Reveal from "../Reveal";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "clamp(40px, 6vw, 60px) 0 clamp(60px, 8vw, 100px)" }}>
      <div className="container">
        {/* Citation finale inspirante */}
        <Reveal>
          <div className="glass card" style={{ padding: "clamp(32px, 5vw, 48px)", borderRadius: 24, marginBottom: 50, textAlign: "center", background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08), rgba(247, 37, 133, 0.06))", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(76, 201, 240, 0.1), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>🌍</div>
              <p style={{ fontSize: "clamp(18px, 3vw, 24px)", lineHeight: 1.6, fontStyle: "italic", fontWeight: 600, color: "var(--foreground)", maxWidth: 800, margin: "0 auto", marginBottom: 16 }}>
                « L&apos;Afrique de demain se construira par ceux qui refusent de subir et choisissent d&apos;agir. »
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)", fontWeight: 500, letterSpacing: "0.5px" }}>— Didier Ngoy Ngubu</p>
            </div>
          </div>
        </Reveal>

        <div className="glass contactCard" style={{ borderRadius: 20, padding: "clamp(28px, 4vw, 40px)", background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08), rgba(247, 37, 133, 0.06))" }}>
          <div className="grid contactGrid" style={{ alignItems: "center" }}>
            <div>
              <h2 className="sectionTitle" style={{ marginBottom: 10 }}>Travaillons ensemble</h2>
              <p className="sectionSub" style={{ marginBottom: 0 }}>
                Vous avez un projet, une initiative sociale ou un événement ? Contactez-moi.
              </p>
            </div>
            <div className="actions" style={{ justifyContent: "flex-end" }}>
              <a href="mailto:contact@didierngoy.com" className="btn btnPrimary" style={{ gap: 8 }}>
                <span>✉</span> Envoyer un email
              </a>
              <a href="https://wa.me/243821355601" target="_blank" rel="noreferrer" className="btn" style={{ gap: 8 }}>
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <footer style={{ marginTop: 40, color: "var(--muted)", fontSize: 14, textAlign: "center", opacity: 0.7 }}>
          © {new Date().getFullYear()} Didier Ngoy Ngubu. Tous droits réservés.
        </footer>
      </div>
    </section>
  );
}
