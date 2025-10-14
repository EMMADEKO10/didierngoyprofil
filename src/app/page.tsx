"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useState } from "react";
import Lightbox from "./Lightbox";

const heroImages = [
  "/hirosection/WhatsApp Image 2025-10-13 à 10.24.43_c14af50d.jpg",
];

const projectImages = [
  "/projet/WhatsApp Image 2025-10-13 à 17.16.48_46f69da3.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.21.13_8115392f.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.21.45_d5e602f4.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.22.02_d9c6583c.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.22.42_3d152655.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.23.32_ea9e07dd.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.23.55_3b9939f0.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.24.21_7b5d5f41.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.25.33_9efeb24d.jpg",
];

const galleryImages = [
  "/galerie/484543400_1061141416033785_7515035370954843507_n (1).jpg",
  "/galerie/557772313_1222146913266567_1373992692175798815_n.jpg",
  "/galerie/557978692_1222147466599845_6621739788798749420_n.jpg",
  "/galerie/558692288_1222148709933054_4229808147326803317_n.jpg",
  "/galerie/WhatsApp Image 2025-10-13 à 10.24.43_c14af50d.jpg",
  "/galerie/WhatsApp Image 2025-10-13 à 10.24.43_cc1ad471.jpg",
  "/galerie/WhatsApp Image 2025-10-13 à 10.24.45_788b91a1.jpg",
  "/galerie/WhatsApp Image 2025-10-13 à 10.24.46_3129f7eb.jpg",
];

// Respect the directory order by sorting by filename (stable, locale-aware)
const byName = (a: string, b: string) => a.localeCompare(b, "fr", { numeric: true, sensitivity: "base" });
const projectImagesOrdered = [...projectImages].sort(byName);
const galleryImagesOrdered = [...galleryImages].sort(byName);

export default function Home() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", padding: "clamp(50px, 6vw, 80px) 0 clamp(30px, 4vw, 50px)" }} id="top">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="heroGrid">
            <Reveal>
            <div className="heroContent">
              <div
                className="glass heroBadge"
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: 999,
                  marginBottom: 12,
                  color: "var(--primary)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                }}
              >
                ✦ Didier Ngoyi Ngu
              </div>
              <h1 className="heroTitle">
                Entrepreneur, Leader de la jeunesse, Citoyen engagé
              </h1>
              <p className="heroSubtitle" style={{ color: "var(--muted)", maxWidth: 720 }}>
                Président de l&apos;ONG CONGO LEADERSHIP • Initiateur de la plate-forme GÉNÉRATION IMPACT • CEO de BIOTECK AFRICA GROUP • Écrivain & Conférencier.
              </p>
              <div className="actions" style={{ marginTop: 24 }}>
                <Link href="#contact" className="btn btnPrimary">
                  Me contacter
                </Link>
                <Link href="#projets" className="btn">
                  Découvrir mes actions
                </Link>
              </div>
            </div>
            </Reveal>
            <Reveal delay={150}>
            <div className="heroImage">
              <div className="glass" style={{ position: "relative", height: "100%" }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                  <Image src={heroImages[0]} alt="Didier Ngoyi" fill style={{ objectFit: "cover" }} priority />
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
        {/* subtle background orbs + animated gradient */}
        <div
            aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
          }}
        >
          <div className="heroGradient" />
          <div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              right: -80,
              top: -80,
              filter: "blur(80px)",
              background: "radial-gradient(circle at 30% 30%, rgba(76,201,240,.4), transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              left: -120,
              bottom: -120,
              filter: "blur(90px)",
              background: "radial-gradient(circle at 60% 60%, rgba(247,37,133,.35), transparent 60%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </section>

      {/* Galerie Photo */}
      <section id="galerie" style={{ padding: "clamp(20px, 4vw, 40px) 0 clamp(40px, 6vw, 60px)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 className="sectionTitle">Galerie</h2>
            <p className="sectionSub" style={{ marginLeft: "auto", marginRight: "auto" }}>Moments d&apos;actions, d&apos;échanges et d&apos;inspiration</p>
          </div>
          <div className="galleryGrid">
            {galleryImagesOrdered.map((rawSrc, idx) => {
              const src = encodeURI(rawSrc);
              return (
                <Reveal key={src} delay={(idx % 6) * 60}>
                  <div className="glass card galleryCard" style={{ position: "relative", aspectRatio: "4/5", borderRadius: 18, cursor: "zoom-in" }} onClick={() => setLightboxSrc(src)}>
                    <div style={{ position: "absolute", inset: 0, borderRadius: 18, overflow: "hidden" }}>
                      <Image src={src} alt={`Galerie ${idx + 1}`} fill style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* À propos & Mission */}
      <section id="about" style={{ padding: "clamp(40px, 6vw, 60px) 0", position: "relative", overflow: "hidden" }}>
        {/* Background decorative elements */}
        <div style={{ position: "absolute", top: "20%", left: "-5%", width: 300, height: 300, background: "radial-gradient(circle, rgba(76, 201, 240, 0.08), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 250, height: 250, background: "radial-gradient(circle, rgba(247, 37, 133, 0.06), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid aboutGrid">
            <Reveal>
            <div className="aboutContent">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(76, 201, 240, 0.1)", marginBottom: 16 }}>
                <span style={{ fontSize: 16 }}>🌟</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.5px" }}>MON PARCOURS</span>
              </div>
              <h2 className="sectionTitle" style={{ marginBottom: 20 }}>À propos</h2>
              <p className="sectionSub" style={{ marginBottom: 20, lineHeight: 1.7 }}>
                Issu de Kinshasa (RDC), j&apos;ai choisi de mettre mon énergie et mon expérience au service d&apos;une cause qui me tient à cœur : <strong style={{ color: "var(--primary)", fontWeight: 600 }}>aider la jeunesse à devenir un moteur du changement</strong>.
              </p>
              <div style={{ display: "flex", gap: 24, marginTop: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 4, height: 40, background: "linear-gradient(180deg, var(--primary), var(--accent))", borderRadius: 4 }} />
                  <div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "var(--primary)" }}>10+</div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Années d&apos;expérience</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 4, height: 40, background: "linear-gradient(180deg, var(--accent), var(--primary))", borderRadius: 4 }} />
                  <div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "var(--primary)" }}>1000+</div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Jeunes formés</div>
                  </div>
                </div>
              </div>
            </div>
            </Reveal>
            <Reveal delay={120}>
            <div className="aboutCard">
              <div className="glass card aboutMissionCard" style={{ padding: 28, borderRadius: 18, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: "radial-gradient(circle, rgba(76, 201, 240, 0.15), transparent 70%)", filter: "blur(40px)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>💡</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, background: "linear-gradient(135deg, var(--foreground), var(--primary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Ma Mission
                  </h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 15 }}>
                    À travers mes projets entrepreneuriaux, mes actions sociales et mon engagement citoyen, je porte une voix : celle d&apos;une <strong style={{ color: "var(--foreground)" }}>jeunesse debout</strong>, qui croit en elle-même, qui agit, qui innove et qui construit un <strong style={{ color: "var(--foreground)" }}>Congo meilleur</strong>.
                  </p>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership & Rôles */}
      <section id="roles" style={{ padding: "clamp(40px, 6vw, 60px) 0" }}>
        <div className="container">
          <h2 className="sectionTitle">Leadership & Rôles</h2>
          <p className="sectionSub" style={{ marginBottom: 32 }}>
            Mes responsabilités et engagements actuels
          </p>
          <div className="grid rolesGrid">
            {[
              {
                title: "Président de l'ONG CONGO LEADERSHIP",
                desc: "Initiatives d'impact social pour former et responsabiliser la jeunesse congolaise.",
                icon: "🌍",
              },
              {
                title: "Initiateur de GÉNÉRATION IMPACT",
                desc: "Plateforme de mobilisation et d'action pour une jeunesse qui ose et construit.",
                icon: "⚡",
              },
              {
                title: "CEO de BIOTECK AFRICA GROUP",
                desc: "Entreprise innovante au service du développement durable et des solutions africaines.",
                icon: "🚀",
              },
              {
                title: "Écrivain & Conférencier",
                desc: "Transmission d'idées, de valeurs et d'expériences pour inspirer et former.",
                icon: "📚",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className="roleCard">
                  <div className="glass card" style={{ padding: 20, borderRadius: 16, height: "100%" }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
                    <h3 style={{ fontSize: 17, marginBottom: 10, fontWeight: 600, lineHeight: 1.3 }}>{card.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.5 }}>{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projets & Initiatives */}
      <section id="projets" style={{ padding: "clamp(40px, 6vw, 60px) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 className="sectionTitle">Projets & Initiatives</h2>
            <p className="sectionSub" style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 600 }}>
              Quelques actions phares au service de la jeunesse et du développement du Congo
            </p>
          </div>
          <div className="galleryGrid projectsGrid">
            {projectImagesOrdered.map((src, i) => (
              <Reveal key={src} delay={i * 70}>
                <div className="projectCard">
                  <div style={{ position: "relative", aspectRatio: "4/3" }} className="glass card">
                    <div style={{ position: "absolute", inset: 0, borderRadius: 18, overflow: "hidden" }}>
                      <Image src={src} alt={`Projet ${i + 1}`} fill style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Livres & Conférences */}
      <section id="livres" style={{ padding: "clamp(40px, 6vw, 60px) 0" }}>
        <div className="container">
          <div className="grid booksGrid" style={{ alignItems: "center" }}>
            <Reveal>
            <div className="bookImageWrapper">
              <div style={{ position: "relative", aspectRatio: "4/3" }} className="glass">
                <div style={{ position: "absolute", inset: 0, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}>
                  <Image src="/livre/livre.jpg" alt="Conférence" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
            </Reveal>
            <Reveal delay={140}>
            <div className="bookContent">
              <div style={{ display: "inline-block", padding: "5px 12px", borderRadius: 999, background: "rgba(76, 201, 240, 0.1)", color: "var(--primary)", fontSize: 12, fontWeight: 600, marginBottom: 12 }}>
                📖 Publications & Speaking
              </div>
              <h2 className="sectionTitle">Livres & Conférences</h2>
              <p className="sectionSub" style={{ marginBottom: 20 }}>
                Interventions inspirantes et publications pour éveiller, former et orienter la jeunesse congolaise vers l&apos;excellence et le leadership.
              </p>
              <div className="actions">
                <Link href="#contact" className="btn btnPrimary">Inviter pour une conférence</Link>
                <Link href="#contact" className="btn">Demander la bibliographie</Link>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "clamp(40px, 6vw, 60px) 0 clamp(60px, 8vw, 100px)" }}>
        <div className="container">
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
            © {new Date().getFullYear()} Didier Ngoyi Ngu. Tous droits réservés.
      </footer>
    </div>
      </section>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </main>
  );
}
