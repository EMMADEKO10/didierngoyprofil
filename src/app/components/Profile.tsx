"use client";

import Reveal from "../Reveal";

export default function Profile() {
  return (
    <section id="profile" style={{ padding: "clamp(30px, 4vw, 40px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 32px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(247, 37, 133, 0.1))", marginBottom: 20 }}>
              <span style={{ fontSize: 18 }}>👤</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>PROFIL COMPLET</span>
            </div>
            <h2 className="sectionTitle" style={{ marginBottom: 20 }}>Didier Ngoyi Ngubu</h2>
            <p className="sectionSub" style={{ maxWidth: 800, margin: "0 auto", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
              Découvrez l&apos;ensemble du parcours et des réalisations de Didier Ngoyi Ngubu, de son engagement social à ses initiatives entrepreneuriales.
            </p>
          </div>

          {/* Contenu du profil */}
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "left" }}>
            <div style={{ fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.7, color: "var(--muted)" }}>

              <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 16, marginTop: 32 }}>🕊️ L&apos;Engagé et le Philanthrope</h3>
              <p style={{ marginBottom: 16 }}>
                En tant que <strong>président de l&apos;ONG Congo Leadership</strong>, Didier Ngoyi Ngubu œuvre activement pour <strong>former, unir et accompagner les jeunes et les femmes</strong> dans l&apos;entrepreneuriat, tout en menant diverses <strong>actions philanthropiques</strong>.
              </p>
              <p style={{ marginBottom: 32 }}>
                En <strong>2024</strong>, il publie son premier ouvrage :<br/>
                <em><strong>« Le Fondement du Bonheur »</strong>,<br/>
                un livre à la fois profond et universel où il partage sa vision du bonheur comme <strong>la ressource la plus précieuse à cultiver</strong> dans la vie humaine.</em>
              </p>

              <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 16 }}>🎤 Le Conférencier</h3>
              <p style={{ marginBottom: 16 }}>
                Conférencier international <strong>charismatique</strong> et <strong>visionnaire</strong>, Didier Ngoyi Ngubu inspire et captive par la puissance de ses idées et son plaidoyer passionné pour une <strong>Afrique responsable et prospère</strong>.
              </p>
              <p style={{ marginBottom: 12 }}>
                Ses interventions abordent des thématiques essentielles telles que :<br/>
                - Le <strong>leadership transformationnel</strong><br/>
                - La <strong>culture de l&apos;excellence</strong><br/>
                - L&apos;<strong>entrepreneuriat inclusif</strong><br/>
                - L&apos;<strong>éthique du travail</strong><br/>
                - La <strong>responsabilité citoyenne</strong>
              </p>
              <p style={{ marginBottom: 32, fontStyle: "italic" }}>
                Il a partagé sa vision dans de nombreuses <strong>conférences, panels et programmes de formation</strong> à travers l&apos;Afrique et le monde, s&apos;adressant aux <strong>étudiants, entrepreneurs, décideurs et acteurs sociaux</strong>.<br/><br/>
                <strong>Son message : réveiller la conscience, ranimer la foi et provoquer le passage à l&apos;action.</strong>
              </p>


              <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 16 }}>✍️ En Résumé</h3>
              <p style={{ marginBottom: 16 }}>
                Didier Ngoyi Ngubu est bien plus qu&apos;un entrepreneur ou conférencier :<br/>
                il est le symbole d&apos;une <strong>Afrique qui croit, qui agit et qui bâtit</strong>.
              </p>
              <p style={{ marginBottom: 16 }}>
                Son parcours illustre la puissance de la <strong>vision</strong>, la <strong>discipline</strong> et la <strong>foi en soi</strong>.<br/>
                À travers ses initiatives, il démontre qu&apos;un changement durable commence toujours <strong>dans la conscience et dans l&apos;action</strong>.
              </p>

              <div style={{ textAlign: "center", marginTop: 40, padding: "24px", background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08), rgba(247, 37, 133, 0.05))", borderRadius: 16, border: "1px solid rgba(76, 201, 240, 0.2)" }}>
                <p style={{ fontSize: "clamp(16px, 2.2vw, 20px)", lineHeight: 1.6, color: "var(--foreground)", fontWeight: 500, fontStyle: "italic", marginBottom: 12 }}>
                  <strong>« L&apos;Afrique de demain se construira par ceux qui refusent de subir et choisissent d&apos;agir. »</strong>
                </p>
                <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "var(--primary)", fontWeight: 600 }}>
                  — Didier Ngoyi Ngubu
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
