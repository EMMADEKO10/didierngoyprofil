"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../contexts/TranslationContext";
import dynamic from "next/dynamic";
const Reveal = dynamic(() => import("../Reveal"), { ssr: false });

interface HeroProps {
  images: string[];
}

export default function Hero({ images }: HeroProps) {
  const [activeHero, setActiveHero] = useState(0);
  const hoverRef = useRef(false);
  const { t } = useTranslation();

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
                ✦ Didier Ngoy Ngubu
              </div>
              <h1 className="heroTitle">
                {t.hero.subtitle}
              </h1>
              <p className="heroSubtitle" style={{ color: "var(--muted)", maxWidth: 720, marginBottom: 16 }}>
                {t.hero.description}
              </p>
              <p style={{ fontSize: 15, fontStyle: "italic", color: "var(--muted)", opacity: 0.9, maxWidth: 720, lineHeight: 1.6 }}>
                « Un parcours inspirant marqué par la résilience, la foi en soi et la force d&apos;une vision qui refuse d&apos;abandonner. »
              </p>
              <div className="actions" style={{ marginTop: 24 }}>
                <Link href="#contact" className="btn btnPrimary">
                  {t.nav.contact}
                </Link>
                <Link href="#about" className="btn">
                  {t.nav.about}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
