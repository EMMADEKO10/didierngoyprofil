"use client";

import Image from "next/image";
import Link from "next/link";

const heroImages = [
  "/484934957_1061141606033766_523380685090581092_n.jpg",
  "/558692288_1222148709933054_4229808147326803317_n.jpg",
  "/559121198_1222148909933034_2146408349376916210_n.jpg",
];

const galleryImages = [
  "/484543400_1061141416033785_7515035370954843507_n (1).jpg",
  "/484934957_1061141606033766_523380685090581092_n.jpg",
  "/484265619_1061141466033780_810270369698681610_n.jpg",
  "/484543400_1061141416033785_7515035370954843507_n.jpg",
  "/485719826_1066033182211275_7683936925466589761_n.jpg",
  "/541428021_1191573069657285_7679498536551268667_n.jpg",
  "/540792956_1191574599657132_6910296240050529151_n.jpg",
  "/557978692_1222147466599845_6621739788798749420_n (1).jpg",
  "/558212125_1222146659933259_3399914050264648036_n.jpg",
  "/558108300_1222148529933072_72893147480226747_n.jpg",
  "/557772313_1222146913266567_1373992692175798815_n.jpg",
  "/558692288_1222148709933054_4229808147326803317_n.jpg",
  "/559121198_1222148909933034_2146408349376916210_n.jpg",
  "/561277280_1222147326599859_8312679864147065488_n.jpg",
  "/557978692_1222147466599845_6621739788798749420_n.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.46_fad26780.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.46_3129f7eb.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.45_3714ef8b.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.45_788b91a1.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.44_0ea2a76c.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.44_f9434a6c.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.43_8a33c6a9.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.43_cc1ad471.jpg",
  "/WhatsApp Image 2025-10-13 à 10.24.43_c14af50d.jpg",
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", padding: "120px 0 80px" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid" style={{ alignItems: "center" }}>
            <div style={{ gridColumn: "span 7" }} className="fadeInUp">
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
                Portfolio de Didier Ngoyi Ngubu
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
              <p className="fadeInUp" style={{ color: "var(--muted)", maxWidth: 720 }}>
                Président de l’ONG CONGO LEADERSHIP • Initiateur de la plate-forme GÉNÉRATION IMPACT • CEO de BIOTECK AFRICA GROUP • Écrivain & Conférencier.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 24 }} className="fadeInUp">
                <Link href="#contact" className="btn btnPrimary">
                  Me contacter
                </Link>
                <Link href="#projets" className="btn">
                  Découvrir mes actions
                </Link>
              </div>
            </div>
            <div style={{ gridColumn: "span 5" }} className="fadeInUp">
              <div style={{ position: "relative", height: 420 }} className="glass">
                <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                  <Image src={heroImages[0]} alt="Didier Ngoyi" fill style={{ objectFit: "cover" }} priority />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* subtle background orbs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
          }}
        >
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
          <div className="grid">
            {galleryImages.map((rawSrc, idx) => {
              const src = encodeURI(rawSrc);
              return (
              <div key={src} style={{ gridColumn: "span 4" }} className="fadeInUp">
                <div style={{ position: "relative", height: idx % 3 === 0 ? 320 : 220 }} className="glass">
                  <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                    <Image src={src} alt={`Galerie ${idx + 1}`} fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* À propos & Mission */}
      <section id="about" style={{ padding: "40px 0 20px" }}>
        <div className="container">
          <div className="grid">
            <div style={{ gridColumn: "span 6" }}>
              <h2 className="sectionTitle">À propos</h2>
              <p className="sectionSub" style={{ marginTop: 8 }}>
                Issu de Kinshasa (RDC), j’ai choisi de mettre mon énergie et mon expérience au service d’une cause qui me tient à cœur : aider la jeunesse à devenir un moteur du changement.
              </p>
            </div>
            <div style={{ gridColumn: "span 6" }}>
              <div className="glass" style={{ padding: 20, borderRadius: 16 }}>
                <p style={{ color: "var(--muted)" }}>
                  À travers mes projets entrepreneuriaux, mes actions sociales et mon engagement citoyen, je porte une voix : celle d’une jeunesse debout, qui croit en elle-même, qui agit, qui innove et qui construit un Congo meilleur.
                </p>
              </div>
            </div>
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
              <div key={card.title} style={{ gridColumn: "span 3" }} className="fadeInUp">
                <div className="glass" style={{ padding: 20, borderRadius: 16, height: "100%" }}>
                  <h3 style={{ fontSize: 18, marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{card.desc}</p>
                </div>
              </div>
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
            {heroImages.map((src) => (
              <div key={src} style={{ gridColumn: "span 4" }} className="fadeInUp">
                <div style={{ position: "relative", height: 280 }} className="glass">
                  <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                    <Image src={src} alt="Projet" fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livres & Conférences */}
      <section id="livres" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="grid" style={{ alignItems: "center" }}>
            <div style={{ gridColumn: "span 5" }} className="fadeInUp">
              <div style={{ position: "relative", height: 360 }} className="glass">
                <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                  <Image src="/557772313_1222146913266567_1373992692175798815_n.jpg" alt="Conférence" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
            <div style={{ gridColumn: "span 7" }}>
              <h2 className="sectionTitle">Livres & Conférences</h2>
              <p className="sectionSub" style={{ marginBottom: 16 }}>
                Interventions inspirantes et publications pour éveiller, former et orienter la jeunesse.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <Link href="#contact" className="btn btnPrimary">Inviter pour une conférence</Link>
                <Link href="#contact" className="btn">Demander la bibliographie</Link>
              </div>
            </div>
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
                <a href="https://wa.me/243" target="_blank" rel="noreferrer" className="btn">WhatsApp</a>
              </div>
            </div>
          </div>
          <footer style={{ marginTop: 24, color: "var(--muted)", fontSize: 14 }}>
            © {new Date().getFullYear()} Didier Ngoyi Ngubu. Tous droits réservés.
          </footer>
        </div>
      </section>
    </main>
  );
}
