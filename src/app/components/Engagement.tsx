"use client";

import Image from "next/image";
import Reveal from "../Reveal";

// Styles CSS pour le responsive design
const styles = `
  @media (max-width: 768px) {
    .engagement-desktop-photo {
      display: none !important;
    }
    .engagement-mobile-photo {
      display: block !important;
    }
    .engagement-content {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
    }
  }
  
  @media (min-width: 769px) {
    .engagement-desktop-photo {
      display: block !important;
    }
    .engagement-mobile-photo {
      display: none !important;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .engagement-content {
      gap: clamp(32px, 4vw, 60px) !important;
    }
  }
`;

export default function Engagement() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="engagement" style={{ padding: "clamp(30px, 4vw, 40px) 0", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 32px)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(247, 37, 133, 0.1))", marginBottom: 20 }}>
                <span style={{ fontSize: 18 }}>🕊️</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>ENGAGEMENT & CONFÉRENCIER</span>
              </div>
              <h2 className="sectionTitle" style={{ marginBottom: 20 }}>L&apos;Engagé et le Philanthrope</h2>
              <p className="sectionSub" style={{ maxWidth: 800, margin: "0 auto", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
                Découvrez l&apos;engagement social et l&apos;expertise de Didier Ngoyi Ngubu en tant que conférencier international.
              </p>
            </div>

            {/* Layout responsive avec photo et contenu */}
            <div className="engagement-content" style={{ 
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "clamp(40px, 6vw, 80px)", 
              alignItems: "start", 
              maxWidth: 1200, 
              margin: "0 auto"
            }}>
              
              {/* Contenu texte */}
              <div style={{ 
                fontSize: "clamp(14px, 1.8vw, 16px)", 
                lineHeight: 1.3, 
                color: "var(--muted)",
                minWidth: 0
              }}>
                <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 8, marginTop: 16 }}>🕊️ L&apos;Engagé et le Philanthrope</h3>
                <p style={{ marginBottom: 8 }}>
                    En tant que <strong>président de l&apos;ONG Congo Leadership</strong>, Didier Ngoyi Ngubu œuvre activement pour <strong>former, unir et accompagner les jeunes et les femmes</strong> dans l&apos;entrepreneuriat, tout en menant diverses <strong>actions philanthropiques</strong>.
                </p>
                <p style={{ marginBottom: 16 }}>
                  En <strong>2024</strong>, il publie son premier ouvrage :<br/>
                  <em><strong>« Le Fondement du Bonheur »</strong>,<br/>
                  un livre à la fois profond et universel où il partage sa vision du bonheur comme <strong>la ressource la plus précieuse à cultiver</strong> dans la vie humaine.</em>
                </p>

                <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 8, marginTop: 24 }}>🎤 Le Conférencier</h3>
                <p style={{ marginBottom: 8 }}>
                    Conférencier international <strong>charismatique</strong> et <strong>visionnaire</strong>, Didier Ngoyi Ngubu inspire et captive son public par la puissance de ses idées, la profondeur de sa réflexion et son plaidoyer passionné pour une <strong>Afrique responsable et prospère</strong>.
                </p>
                <p style={{ marginBottom: 8 }}>
                  Reconnu pour son expertise en <strong>leadership, entrepreneuriat social, développement personnel</strong> et <strong>autonomisation de la jeunesse</strong>, il apporte une perspective ancrée dans l&apos;action et l&apos;expérience de terrain. Sa voix porte haut la vision d&apos;une <strong>jeunesse africaine consciente de son rôle</strong> dans la transformation du continent.
                </p>
                <p style={{ marginBottom: 8 }}>
                    À travers ses interventions, Didier Ngoyi Ngubu aborde des thématiques essentielles telles que le <strong>leadership transformationnel</strong>, la <strong>culture de l&apos;excellence</strong>, l&apos;<strong>entrepreneuriat inclusif</strong>, l&apos;<strong>éthique du travail</strong>, et la <strong>responsabilité citoyenne</strong>. Il a partagé sa vision dans de nombreuses conférences, panels et programmes de formation, aussi bien en Afrique qu&apos;à l&apos;international, devant des étudiants, entrepreneurs, décideurs politiques et acteurs sociaux.
                </p>
                <p style={{ marginBottom: 8 }}>
                  Qu&apos;il s&apos;adresse à des jeunes en quête de repères, à des leaders d&apos;entreprise ou à des institutions, son message a toujours le même effet : <strong>réveiller la conscience, ranimer la foi et provoquer le passage à l&apos;action</strong>.
                </p>
                <p style={{ marginBottom: 0 }}>
                  Sa capacité à allier <strong>inspiration et pragmatisme</strong>, à traduire les valeurs africaines en leviers de progrès, fait de Didier Ngoyi Ngubu un orateur recherché et respecté, symbole d&apos;une génération qui choisit d&apos;agir, de servir et de bâtir.
                </p>
              </div>

              {/* Photo de Didier - Desktop */}
              <div className="engagement-desktop-photo" style={{ 
                position: "relative", 
                width: "clamp(380px, 35vw, 520px)", 
                height: "clamp(480px, 45vw, 650px)",
                borderRadius: "clamp(20px, 2.5vw, 28px)",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.08)",
                background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08), rgba(247, 37, 133, 0.04))",
                border: "3px solid rgba(76, 201, 240, 0.15)",
                display: "block",
                alignSelf: "center"
              }}>
                {/* Effet de gradient overlay */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(135deg, rgba(76, 201, 240, 0.1) 0%, rgba(247, 37, 133, 0.05) 100%)",
                  zIndex: 1
                }} />
                
                {/* Image */}
                <Image 
                  src="/galerie/557772313_1222146913266567_1373992692175798815_n.jpg" 
                      alt="Didier Ngoyi Ngubu - Conférencier et Leader Engagé"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "clamp(14px, 1.8vw, 22px)"
                  }}
                  priority={false}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 35vw, 520px"
                />
                
                {/* Badge de qualité */}
                <div style={{
                  position: "absolute",
                  bottom: "clamp(16px, 2vw, 24px)",
                  left: "clamp(16px, 2vw, 24px)",
                  right: "clamp(16px, 2vw, 24px)",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "clamp(8px, 1vw, 12px)",
                  padding: "clamp(12px, 1.5vw, 16px)",
                  zIndex: 2,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
                }}>
                  <div style={{ 
                    fontSize: "clamp(12px, 1.4vw, 14px)", 
                    fontWeight: 600, 
                    color: "var(--primary)",
                    marginBottom: "4px"
                  }}>
                    🎤 Conférencier International
                  </div>
                  <div style={{ 
                    fontSize: "clamp(10px, 1.2vw, 12px)", 
                    color: "var(--muted)",
                    lineHeight: 1.4
                  }}>
                    Leadership • Entrepreneuriat • Engagement
                  </div>
                </div>
              </div>
            </div>

            {/* Photo mobile - version centrée pour petits écrans */}
            <div className="engagement-mobile-photo" style={{ 
              display: "none",
              textAlign: "center",
              marginBottom: "40px",
              padding: "0 20px"
            }}>
              <div style={{ 
                position: "relative", 
                width: "clamp(280px, 50vw, 380px)", 
                height: "clamp(350px, 50vw, 450px)",
                borderRadius: "clamp(18px, 2.2vw, 26px)",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.08)",
                background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08), rgba(247, 37, 133, 0.04))",
                border: "3px solid rgba(76, 201, 240, 0.15)",
                margin: "0 auto"
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(135deg, rgba(76, 201, 240, 0.1) 0%, rgba(247, 37, 133, 0.05) 100%)",
                  zIndex: 1
                }} />
                
                <Image 
                  src="/galerie/557772313_1222146913266567_1373992692175798815_n.jpg" 
                      alt="Didier Ngoyi Ngubu - Conférencier et Leader Engagé"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "clamp(14px, 1.8vw, 22px)"
                  }}
                  priority={false}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 35vw, 520px"
                />
                
                <div style={{
                  position: "absolute",
                  bottom: "clamp(12px, 1.5vw, 20px)",
                  left: "clamp(12px, 1.5vw, 20px)",
                  right: "clamp(12px, 1.5vw, 20px)",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "clamp(6px, 1vw, 10px)",
                  padding: "clamp(8px, 1.2vw, 12px)",
                  zIndex: 2,
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)"
                }}>
                  <div style={{ 
                    fontSize: "clamp(10px, 1.2vw, 12px)", 
                    fontWeight: 600, 
                    color: "var(--primary)",
                    marginBottom: "2px"
                  }}>
                    🎤 Conférencier International
                  </div>
                  <div style={{ 
                    fontSize: "clamp(8px, 1vw, 10px)", 
                    color: "var(--muted)",
                    lineHeight: 1.3
                  }}>
                    Leadership • Entrepreneuriat • Engagement
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
