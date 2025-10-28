"use client";

import Image from "next/image";
<<<<<<< HEAD
=======
import Reveal from "../Reveal";
import { useTranslation } from "../../contexts/TranslationContext";
>>>>>>> main

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
<<<<<<< HEAD
      <section id="about" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="heroBadge" style={{ display: "inline-block", marginBottom: "1rem" }}>
              À PROPOS DE DIDIER
            </div>
            <h2 className="sectionTitle">Didier Ngoyi Ngubu</h2>
=======
    <section id="about" style={{ padding: "clamp(30px, 4vw, 40px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 32px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(247, 37, 133, 0.1))", marginBottom: 20 }}>
              <span style={{ fontSize: 18 }}></span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>{t.about.subtitle}</span>
            </div>
            <h2 className="sectionTitle" style={{ marginBottom: 20 }}>{t.about.title}</h2>
>>>>>>> main
          </div>

          {/* Layout responsive avec photo et contenu */}
          <div className="heroGrid" style={{ alignItems: "start" }}>
            
            {/* Contenu texte */}
            <div style={{ 
              fontSize: "1rem", 
              lineHeight: 1.6,
              color: "var(--muted)"
            }}>
<<<<<<< HEAD
              <p style={{ marginBottom: "1rem" }}>
                Didier <strong>Ngoyi Ngubu</strong> est un <strong>citoyen engagé</strong>, <strong>auteur</strong>, <strong>entrepreneur social</strong> et <strong>conférencier international</strong>, représentant une nouvelle génération de leaders africains portés par la vision d&apos;une <strong>Afrique unie, entreprenante et consciente de son potentiel</strong>.
              </p>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", marginTop: "1.5rem" }}>🌍 Parcours et Origines</h3>
              <p style={{ marginBottom: "0.5rem" }}>
                Né en <strong>République Démocratique du Congo</strong> dans une famille modeste de quatorze enfants, Didier Ngoyi Ngubu a très tôt manifesté un <strong>esprit d&apos;initiative</strong> remarquable.<br/>
                Dès l&apos;école secondaire, il lance sa <strong>première entreprise</strong>, une petite cabine de téléphonie mobile.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Pendant ses études universitaires, il s&apos;engage dans <strong>l&apos;activisme social</strong> à travers <em>Birth Women Organisation</em> — une ONG basée à Londres œuvrant pour la défense des droits des femmes — où il gravit les échelons jusqu&apos;à devenir <strong>coordonnateur général à Kinshasa</strong>.
              </p>

              <p style={{ marginBottom: "0.5rem" }}>
                Convaincu que le <strong>développement de l&apos;Afrique</strong> passe par la <strong>formation</strong> et <strong>l&apos;autonomisation</strong>, il fonde <strong>New Vision Service</strong>, une entreprise dédiée à la formation professionnelle et à l&apos;accompagnement des femmes dans divers métiers :<br/>
                - Administration, Hôtellerie, Couture, Santé domestique
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                Plus tard, il cofonde <strong>Panthère Security</strong>, une société de gardiennage et de protection, qu&apos;il revend avec succès.
=======
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
>>>>>>> main
              </p>
              <p style={{ marginBottom: 0 }}>
                {t.about.bioteck}
              </p>
            </div>

            {/* Photo de Didier - Desktop */}
            <div className="about-desktop-photo" style={{ 
              position: "relative", 
              width: "100%",
              maxWidth: "400px",
              height: "500px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              background: "var(--card)",
              border: "1px solid var(--border)"
            }}>
              <Image 
                src="/hirosection/WhatsApp Image 2025-10-18 à 10.21.22_6ff399ae.jpg" 
<<<<<<< HEAD
                alt="Didier Ngoyi Ngubu - Entrepreneur, Conférencier et Leader Africain"
=======
                alt={t.alt.aboutImage}
>>>>>>> main
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                priority={false}
                sizes="(max-width: 768px) 100vw, 400px"
              />
              
              {/* Badge simple */}
              <div style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                right: "1rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "0.75rem",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}>
                <div style={{ 
                  fontSize: "0.875rem", 
                  fontWeight: 600, 
                  color: "var(--primary)",
                  marginBottom: "0.25rem"
                }}>
                  {t.about.badgeTitle}
                </div>
                <div style={{ 
                  fontSize: "0.75rem", 
                  color: "var(--muted)"
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
            marginBottom: "2rem",
            padding: "0 1rem"
          }}>
            <div style={{ 
              position: "relative", 
              width: "100%",
              maxWidth: "300px",
              height: "400px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              background: "var(--card)",
              border: "1px solid var(--border)",
              margin: "0 auto"
            }}>
              <Image 
                src="/hirosection/WhatsApp Image 2025-10-18 à 10.21.22_6ff399ae.jpg" 
<<<<<<< HEAD
                alt="Didier Ngoyi Ngubu - Entrepreneur, Conférencier et Leader Africain"
=======
                alt={t.alt.aboutImage}
>>>>>>> main
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                priority={false}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              
              <div style={{
                position: "absolute",
                bottom: "0.75rem",
                left: "0.75rem",
                right: "0.75rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "0.5rem",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}>
                <div style={{ 
                  fontSize: "0.75rem", 
                  fontWeight: 600, 
                  color: "var(--primary)",
                  marginBottom: "0.125rem"
                }}>
                  {t.about.badgeTitle}
                </div>
                <div style={{ 
                  fontSize: "0.625rem", 
                  color: "var(--muted)"
                }}>
                  {t.about.badgeSubtitle}
                  </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    </>
  );
}