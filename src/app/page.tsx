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
      <section style={{ position: "relative", padding: "120px 0 80px" }} id="top">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid" style={{ alignItems: "center" }}>
            <Reveal style={{ gridColumn: "span 7" }}>
            <div>
              <div
                className="glass"
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: 999,
                  marginBottom: 16,
                  color: "var(--muted)",
                }}
              >
                Didier Ngoyi Ngubu
              </div>
              <h1
                style={{
                  fontSize: 56,
                  lineHeight: 1.05,
                  letterSpacing: -0.02,
                  marginBottom: 16,
                }}
              >
                Entrepreneur, Leader de la jeunesse, Citoyen engagé
              </h1>
              <p style={{ color: "var(--muted)", maxWidth: 720 }}>
                Président de l’ONG CONGO LEADERSHIP • Initiateur de la plate-forme GÉNÉRATION IMPACT • CEO de BIOTECK AFRICA GROUP • Écrivain & Conférencier.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <Link href="#contact" className="btn btnPrimary">
                  Me contacter
                </Link>
                <Link href="#projets" className="btn">
                  Découvrir mes actions
                </Link>
              </div>
            </div>
            </Reveal>
            <Reveal delay={150} style={{ gridColumn: "span 5" }}>
            <div>
              <div style={{ position: "relative", height: 420 }} className="glass">
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
      <section id="galerie" style={{ padding: "20px 0 60px" }}>
        <div className="container">
          <h2 className="sectionTitle">Galerie</h2>
          <p className="sectionSub" style={{ marginBottom: 24 }}>Moments d’actions, d’échanges et d’inspiration</p>
          <div className="galleryGrid">
            {galleryImagesOrdered.map((rawSrc, idx) => {
              const src = encodeURI(rawSrc);
              return (
                <Reveal key={src} delay={(idx % 6) * 70}>
                  <div className="glass card" style={{ position: "relative", paddingTop: "140%", borderRadius: 16, cursor: "zoom-in" }} onClick={() => setLightboxSrc(src)}>
                    <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
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
      <section id="about" style={{ padding: "40px 0 20px" }}>
        <div className="container">
          <div className="grid">
            <Reveal style={{ gridColumn: "span 6" }}>
            <div>
              <h2 className="sectionTitle">À propos</h2>
              <p className="sectionSub" style={{ marginTop: 8 }}>
                Issu de Kinshasa (RDC), j’ai choisi de mettre mon énergie et mon expérience au service d’une cause qui me tient à cœur : aider la jeunesse à devenir un moteur du changement.
              </p>
            </div>
            </Reveal>
            <Reveal delay={120} style={{ gridColumn: "span 6" }}>
            <div>
              <div className="glass card" style={{ padding: 20, borderRadius: 16 }}>
                <p style={{ color: "var(--muted)" }}>
                  À travers mes projets entrepreneuriaux, mes actions sociales et mon engagement citoyen, je porte une voix : celle d’une jeunesse debout, qui croit en elle-même, qui agit, qui innove et qui construit un Congo meilleur.
                </p>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership & Rôles */}
      <section id="roles" style={{ padding: "60px 0" }}>
        <div className="container">
          <h2 className="sectionTitle">Leadership & Rôles</h2>
          <p className="sectionSub" style={{ marginBottom: 24 }}>
            Mes responsabilités et engagements actuels
          </p>
          <div className="grid">
            {[
              {
                title: "Président de l’ONG CONGO LEADERSHIP",
                desc: "Initiatives d’impact social pour former et responsabiliser la jeunesse congolaise.",
              },
              {
                title: "Initiateur de GÉNÉRATION IMPACT",
                desc: "Plateforme de mobilisation et d’action pour une jeunesse qui ose et construit.",
              },
              {
                title: "CEO de BIOTECK AFRICA GROUP",
                desc: "Entreprise innovante au service du développement durable et des solutions africaines.",
              },
              {
                title: "Écrivain & Conférencier",
                desc: "Transmission d’idées, de valeurs et d’expériences pour inspirer et former.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80} style={{ gridColumn: "span 3" }}>
                <div>
                  <div className="glass card" style={{ padding: 20, borderRadius: 16, height: "100%" }}>
                    <h3 style={{ fontSize: 18, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ color: "var(--muted)" }}>{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projets & Initiatives */}
      <section id="projets" style={{ padding: "60px 0" }}>
        <div className="container">
          <h2 className="sectionTitle">Projets & Initiatives</h2>
          <p className="sectionSub" style={{ marginBottom: 24 }}>
            Quelques actions phares au service de la jeunesse et du pays
          </p>
          <div className="grid">
            {projectImagesOrdered.map((src, i) => (
              <Reveal key={src} delay={i * 90} style={{ gridColumn: "span 4" }}>
                <div>
                  <div style={{ position: "relative", height: 280 }} className="glass card">
                    <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                      <Image src={src} alt="Projet" fill style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Livres & Conférences */}
      <section id="livres" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="grid" style={{ alignItems: "center" }}>
            <Reveal style={{ gridColumn: "span 5" }}>
            <div>
              <div style={{ position: "relative", height: 360 }} className="glass">
                <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                  <Image src="/livre/livre.jpg" alt="Conférence" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
            </Reveal>
            <Reveal delay={140} style={{ gridColumn: "span 7" }}>
            <div>
              <h2 className="sectionTitle">Livres & Conférences</h2>
              <p className="sectionSub" style={{ marginBottom: 16 }}>
                Interventions inspirantes et publications pour éveiller, former et orienter la jeunesse.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <Link href="#contact" className="btn btnPrimary">Inviter pour une conférence</Link>
                <Link href="#contact" className="btn">Demander la bibliographie</Link>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div className="glass" style={{ borderRadius: 20, padding: 24 }}>
            <div className="grid" style={{ alignItems: "center" }}>
              <div style={{ gridColumn: "span 8" }}>
                <h2 className="sectionTitle">Travaillons ensemble</h2>
                <p className="sectionSub" style={{ marginBottom: 16 }}>
                  Vous avez un projet, une initiative sociale ou un événement ? Contactez-moi.
                </p>
              </div>
              <div style={{ gridColumn: "span 4", display: "flex", justifyContent: "flex-end", gap: 12 }}>
                <a href="mailto:contact@didierngoy.com" className="btn btnPrimary">Envoyer un email</a>
                <a href="https://wa.me/243821355601" target="_blank" rel="noreferrer" className="btn">WhatsApp</a>
              </div>
            </div>
          </div>
          <footer style={{ marginTop: 24, color: "var(--muted)", fontSize: 14 }}>
            © {new Date().getFullYear()} Didier Ngoyi Ngubu. Tous droits réservés.
      </footer>
    </div>
      </section>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </main>
  );
}
