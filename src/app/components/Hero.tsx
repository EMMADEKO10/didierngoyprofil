"use client";

import Image from "next/image";
import Link from "next/link";
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
    <section id="top" style={{ padding: "4rem 0" }}>
      <div className="container">
        <div className="heroGrid">
          <div className="heroContent fade-in">
            <div className="heroBadge">
              Didier Ngoyi Ngubu
            </div>
            <h1 className="heroTitle">
              Entrepreneur, Leader de la jeunesse, Citoyen engagé
            </h1>
            <p className="heroSubtitle">
              Président de l&apos;ONG CONGO LEADERSHIP • Initiateur de la plate-forme GÉNÉRATION IMPACT • CEO de BIOTECK AFRICA GROUP • Écrivain & Conférencier.
            </p>
            <p style={{ fontStyle: "italic", color: "var(--muted)", marginBottom: "2rem" }}>
              « Un parcours inspirant marqué par la résilience, la foi en soi et la force d&apos;une vision qui refuse d&apos;abandonner. »
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="#contact" className="btn btnPrimary">
                Le contacter
              </Link>
              <Link href="#about" className="btn">
                Le connaître
              </Link>
            </div>
          </div>
          <div className="heroImage fade-in">
            <div className="glass" style={{ position: "relative", height: "400px", borderRadius: "12px", overflow: "hidden" }}>
              {images.map((src, i) => (
                <div key={src} style={{ position: "absolute", inset: 0, transition: "opacity 0.5s ease", opacity: activeHero === i ? 1 : 0 }}>
                  <Image src={src} alt={`Hero ${i + 1}`} fill style={{ objectFit: "cover" }} priority={i === 0} />
                </div>
              ))}
              {/* Dots */}
              <div style={{ position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.5rem" }}>
                {images.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveHero(i)} 
                    aria-label={`Slide ${i + 1}`} 
                    style={{ 
                      width: "8px", 
                      height: "8px", 
                      borderRadius: "50%", 
                      border: "none", 
                      cursor: "pointer", 
                      background: activeHero === i ? "var(--primary)" : "rgba(255,255,255,0.5)",
                      transition: "background 0.2s ease"
                    }} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
