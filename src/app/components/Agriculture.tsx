"use client";

import Image from "next/image";
import Reveal from "../Reveal";

// Styles CSS pour le responsive design
const styles = `
  @media (max-width: 768px) {
    .agriculture-desktop-photo {
      display: none !important;
    }
    .agriculture-mobile-photo {
      display: block !important;
    }
    .agriculture-content {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
    }
  }
  
  @media (min-width: 769px) {
    .agriculture-desktop-photo {
      display: block !important;
    }
    .agriculture-mobile-photo {
      display: none !important;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .agriculture-content {
      gap: clamp(32px, 4vw, 60px) !important;
    }
  }
`;

export default function Agriculture() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="agriculture" style={{ padding: "clamp(30px, 4vw, 40px) 0", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 32px)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(247, 37, 133, 0.1))", marginBottom: 20 }}>
                <span style={{ fontSize: 18 }}>🌱</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>AGRICULTURE & STRUCTURES</span>
              </div>
                  <h2 className="sectionTitle" style={{ marginBottom: 20 }}>L&apos;Agriculteur et Homme de Terrain</h2>
                  <p className="sectionSub" style={{ maxWidth: 800, margin: "0 auto", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
                    Découvrez l&apos;engagement de Didier Ngoyi Ngubu pour l&apos;agriculture africaine et les structures qu&apos;il dirige.
                  </p>
            </div>

            {/* Layout responsive avec photo et contenu */}
            <div className="agriculture-content" style={{ 
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
                <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 8, marginTop: 16 }}>🌱 L&apos;Agriculteur et Homme de Terrain</h3>
                <p style={{ marginBottom: 8 }}>
                    Entrepreneur social passionné par l&apos;<strong>agriculture</strong> et la <strong>souveraineté alimentaire</strong>, Didier Ngoyi Ngubu est le fondateur de <strong>Bioteck Africa Group</strong>.<br/>
                  Cette entreprise promeut la <strong>production locale</strong>, la <strong>transformation agroalimentaire</strong> et la <strong>valorisation des produits africains</strong>.
                </p>
                <p style={{ marginBottom: 8 }}>
                  Il a également fondé le <strong>Centre Bioteck de Formation Agricole et de Leadership</strong>, un programme qui forme et accompagne les jeunes, les femmes et les entrepreneurs ruraux à :<br/>
                  - Créer et gérer leurs propres entreprises agricoles<br/>
                  - Acquérir des compétences techniques et managériales<br/>
                  - Développer un leadership fondé sur la responsabilité et la vision
                </p>
                <p style={{ marginBottom: 16 }}>
                  Aujourd&apos;hui, plusieurs jeunes formés par <strong>Bioteck Africa</strong> exploitent leurs propres fermes et participent à la construction d&apos;une <strong>Afrique autosuffisante, productive et fière de ses terres</strong>.
                </p>

                <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 8, marginTop: 24 }}>🤝 Les Structures qu&apos;il dirige</h3>
                
                <h4 style={{ fontSize: "clamp(16px, 2vw, 18px)", fontWeight: 600, color: "var(--primary)", marginBottom: 8, marginTop: 16 }}>1. Congo Leadership</h4>
                <p style={{ marginBottom: 8 }}>
                  <strong>Congo Leadership</strong> est une organisation non gouvernementale fondée par Didier Ngoyi Ngubu, avec pour mission de <strong>réveiller le potentiel de la jeunesse congolaise et africaine</strong>.<br/>
                  L&apos;organisation forme et encadre hommes et femmes à travers :<br/>
                  - Des <strong>formations pratiques</strong><br/>
                  - Des <strong>ateliers de leadership et d&apos;entrepreneuriat</strong><br/>
                  - Des <strong>concours et programmes de financement</strong><br/>
                  - Des <strong>actions philanthropiques</strong>
                </p>
                <p style={{ marginBottom: 16, fontStyle: "italic" }}>
                  Elle prône une <strong>culture du mérite, du travail bien fait et du dépassement de soi</strong>.<br/>
                  <em><strong>Congo Leadership</strong>, c&apos;est plus qu&apos;une structure : <strong>c&apos;est un mouvement de transformation pour une Afrique forte, digne et innovante.</strong></em>
                </p>

                <h4 style={{ fontSize: "clamp(16px, 2vw, 18px)", fontWeight: 600, color: "var(--accent)", marginBottom: 8 }}>2. Génération Impact</h4>
                <p style={{ marginBottom: 8 }}>
                  <strong>Génération Impact</strong> est un <strong>mouvement d&apos;unité, de vision et d&apos;action</strong> qui réunit jeunes entrepreneurs, leaders politiques, activistes et innovateurs africains.
                </p>
                <p style={{ marginBottom: 0 }}>
                  Sa mission :<br/>
                  - Créer un espace de <strong>collaboration et de réseautage</strong><br/>
                  - Favoriser l&apos;<strong>excellence et la solidarité</strong><br/>
                  - Transformer la jeunesse africaine en une <strong>force organisée et consciente de son rôle</strong>
                </p>
              </div>

              {/* Photo de Didier - Desktop */}
              <div className="agriculture-desktop-photo" style={{ 
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
                  src="/projet/fermier/didier-ngoy-moto.jpg" 
                      alt="Didier Ngoyi Ngubu - Agriculteur et Leader des Structures"
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
                    🌱 Agriculteur & Leader
                  </div>
                  <div style={{ 
                    fontSize: "clamp(10px, 1.2vw, 12px)", 
                    color: "var(--muted)",
                    lineHeight: 1.4
                  }}>
                    Bioteck Africa • Congo Leadership • Génération Impact
                  </div>
                </div>
              </div>
            </div>

            {/* Photo mobile - version centrée pour petits écrans */}
            <div className="agriculture-mobile-photo" style={{ 
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
                  src="/projet/agriculteur/WhatsApp Image 2025-10-13 à 17.25.33_9efeb24d.jpg" 
                      alt="Didier Ngoyi Ngubu - Agriculteur et Leader des Structures"
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
                    🌱 Agriculteur & Leader
                  </div>
                  <div style={{ 
                    fontSize: "clamp(8px, 1vw, 10px)", 
                    color: "var(--muted)",
                    lineHeight: 1.3
                  }}>
                    Bioteck Africa • Congo Leadership • Génération Impact
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
