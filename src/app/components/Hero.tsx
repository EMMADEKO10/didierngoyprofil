"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  images: string[];
}

export default function Hero({ images }: HeroProps) {
  const [activeHero, setActiveHero] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      if (hoverRef.current) return;
      setActiveHero((idx) => (idx + 1) % images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
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
                ✦ Didier Ngoyi Ngubu
              </div>
              <h1 className="heroTitle">
                Entrepreneur, Leader de la jeunesse, Citoyen engagé
              </h1>
              <p className="heroSubtitle" style={{ color: "var(--muted)", maxWidth: 720, marginBottom: 16 }}>
                Président de l&apos;ONG CONGO LEADERSHIP • Initiateur de la plate-forme GÉNÉRATION IMPACT • CEO de BIOTECK AFRICA GROUP • Écrivain & Conférencier.
              </p>
              <p style={{ fontSize: 15, fontStyle: "italic", color: "var(--muted)", opacity: 0.9, maxWidth: 720, lineHeight: 1.6 }}>
                « Un parcours inspirant marqué par la résilience, la foi en soi et la force d&apos;une vision qui refuse d&apos;abandonner. »
              </p>
              <div className="actions" style={{ marginTop: 24 }}>
                <Link href="#contact" className="btn btnPrimary">
                  Le contacter
                </Link>
                <Link href="#about" className="btn">
                  Le connaître
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="heroImage" onMouseEnter={() => (hoverRef.current = true)} onMouseLeave={() => (hoverRef.current = false)}>
              <div className="glass" style={{ position: "relative", height: "100%" }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
                  {images.map((src, i) => (
                    <div key={src} style={{ position: "absolute", inset: 0, transition: "opacity 900ms ease, transform 6000ms ease", opacity: activeHero === i ? 1 : 0, transform: activeHero === i ? "scale(1.02)" : "scale(1.0)" }}>
                      <Image src={src} alt={`Hero ${i + 1}`} fill style={{ objectFit: "cover" }} priority={i === 0} />
                    </div>
                  ))}
                </div>
                {/* Dots */}
                <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8 }}>
                  {images.map((_, i) => (
                    <button key={i} onClick={() => setActiveHero(i)} aria-label={`Slide ${i + 1}`} style={{ width: 8, height: 8, borderRadius: 999, border: "none", padding: 0, cursor: "pointer", background: activeHero === i ? "var(--primary)" : "rgba(255,255,255,0.5)" }} />
                  ))}
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
  );
}
