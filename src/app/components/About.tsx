"use client";

import Image from "next/image";
import Reveal from "../Reveal";

// Styles CSS pour le responsive design
const styles = `
  @media (max-width: 768px) {
    .about-desktop-photo {
      display: none !important;
    }
    .about-mobile-photo {
      display: block !important;
    }
    .about-content {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
    }
  }
  
  @media (min-width: 769px) {
    .about-desktop-photo {
      display: block !important;
    }
    .about-mobile-photo {
      display: none !important;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .about-content {
      gap: clamp(32px, 4vw, 60px) !important;
    }
  }
`;

export default function About() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    <section id="about" style={{ padding: "clamp(30px, 4vw, 40px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 32px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(247, 37, 133, 0.1))", marginBottom: 20 }}>
              <span style={{ fontSize: 18 }}></span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>À PROPOS DE DIDIER</span>
            </div>
            <h2 className="sectionTitle" style={{ marginBottom: 20 }}>Didier Ngoy Ngubu</h2>
          </div>

          {/* Layout responsive avec photo et contenu */}
          <div className="about-content" style={{ 
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
              <p style={{ marginBottom: 8 }}>
                Didier <strong>Ngoy Ngubu</strong> est un <strong>citoyen engagé</strong>, <strong>auteur</strong>, <strong>entrepreneur social</strong> et <strong>conférencier international</strong>, représentant une nouvelle génération de leaders africains portés par la vision d&apos;une <strong>Afrique unie, entreprenante et consciente de son potentiel</strong>.
              </p>

              <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 8, marginTop: 16 }}>🌍 Parcours et Origines</h3>
              <p style={{ marginBottom: 8 }}>
                Né en <strong>République Démocratique du Congo</strong> dans une famille modeste de quatorze enfants, Didier Ngoy Ngubu a très tôt manifesté un <strong>esprit d&apos;initiative</strong> remarquable.<br/>
                Dès l&apos;école secondaire, il lance sa <strong>première entreprise</strong>, une petite cabine de téléphonie mobile.
              </p>
              <p style={{ marginBottom: 16 }}>
                Pendant ses études universitaires, il s&apos;engage dans <strong>l&apos;activisme social</strong> à travers <em>Birth Women Organisation</em> — une ONG basée à Londres œuvrant pour la défense des droits des femmes — où il gravit les échelons jusqu&apos;à devenir <strong>coordonnateur général à Kinshasa</strong>.
              </p>

              {/* <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 14 }}> L&apos;Entrepreneur Visionnaire</h3> */}
              <p style={{ marginBottom: 8 }}>
                Convaincu que le <strong>développement de l&apos;Afrique</strong> passe par la <strong>formation</strong> et <strong>l&apos;autonomisation</strong>, il fonde <strong>New Vision Service</strong>, une entreprise dédiée à la formation professionnelle et à l&apos;accompagnement des femmes dans divers métiers :<br/>
                - Administration, Hôtellerie, Couture, Santé domestique
              </p>
              <p style={{ marginBottom: 8 }}>
                Plus tard, il cofonde <strong>Panthère Security</strong>, une société de gardiennage et de protection, qu&apos;il revend avec succès.
              </p>
              <p style={{ marginBottom: 0 }}>
                En <strong>2019</strong>, il crée <strong>Bioteck Africa Groupe</strong>, une structure multisectorielle active dans :<br/>
                - L&apos;agriculture, La transformation agroalimentaire, L&apos;immobilier, Le transport, La restauration<br/><br/>
                Cette entreprise témoigne de sa <strong>foi en un développement africain intégré et durable</strong>.
              </p>
            </div>

            {/* Photo de Didier - Desktop */}
            <div className="about-desktop-photo" style={{ 
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
                src="/hirosection/WhatsApp Image 2025-10-18 à 10.21.22_6ff399ae.jpg" 
                alt="Didier Ngoy Ngubu - Entrepreneur, Conférencier et Leader Africain"
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
                  🌟 Visionnaire Africain
                </div>
                <div style={{ 
                  fontSize: "clamp(10px, 1.2vw, 12px)", 
                  color: "var(--muted)",
                  lineHeight: 1.4
                }}>
                  Entrepreneur • Conférencier • Leader
                </div>
              </div>
            </div>
          </div>

          {/* Photo mobile - version centrée pour petits écrans */}
          <div className="about-mobile-photo" style={{ 
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
                src="/hirosection/WhatsApp Image 2025-10-18 à 10.21.22_6ff399ae.jpg" 
                alt="Didier Ngoy Ngubu - Entrepreneur, Conférencier et Leader Africain"
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
                  🌟 Visionnaire Africain
                </div>
                <div style={{ 
                  fontSize: "clamp(8px, 1vw, 10px)", 
                  color: "var(--muted)",
                  lineHeight: 1.3
                }}>
                  Entrepreneur • Conférencier • Leader
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
