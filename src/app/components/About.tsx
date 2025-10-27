"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import { useTranslation } from "../../contexts/TranslationContext";

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
  const { t } = useTranslation();
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    <section id="about" style={{ padding: "clamp(30px, 4vw, 40px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 32px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(247, 37, 133, 0.1))", marginBottom: 20 }}>
              <span style={{ fontSize: 18 }}></span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>{t.about.subtitle}</span>
            </div>
            <h2 className="sectionTitle" style={{ marginBottom: 20 }}>{t.about.title}</h2>
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
                {t.about.description}
              </p>

              <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 8, marginTop: 16 }}>{t.about.journeyTitle}</h3>
              <p style={{ marginBottom: 8 }}>
                {t.about.story}
              </p>
              <p style={{ marginBottom: 16 }}>
                {t.about.university}
              </p>

              {/* <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "var(--foreground)", marginBottom: 14 }}> L&apos;Entrepreneur Visionnaire</h3> */}
              <p style={{ marginBottom: 8 }}>
                {t.about.newVision}
              </p>
              <p style={{ marginBottom: 8 }}>
                {t.about.panthere}
              </p>
              <p style={{ marginBottom: 0 }}>
                {t.about.bioteck}
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
                alt={t.alt.aboutImage}
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
                  {t.about.badgeTitle}
                </div>
                <div style={{ 
                  fontSize: "clamp(10px, 1.2vw, 12px)", 
                  color: "var(--muted)",
                  lineHeight: 1.4
                }}>
                  {t.about.badgeSubtitle}
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
                alt={t.alt.aboutImage}
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
                  {t.about.badgeTitle}
                </div>
                <div style={{ 
                  fontSize: "clamp(8px, 1vw, 10px)", 
                  color: "var(--muted)",
                  lineHeight: 1.3
                }}>
                  {t.about.badgeSubtitle}
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
