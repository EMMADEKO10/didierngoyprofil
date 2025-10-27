"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import { useState } from "react";
import Lightbox from "../Lightbox";
import { useTranslation } from "../../contexts/TranslationContext";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const { t } = useTranslation();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <section id="galerie" style={{ padding: "clamp(20px, 4vw, 40px) 0 clamp(40px, 6vw, 60px)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 className="sectionTitle">{t.gallery.title}</h2>
            <p className="sectionSub" style={{ marginLeft: "auto", marginRight: "auto" }}>{t.gallery.subtitle}</p>
          </div>
          <div className="galleryGrid">
            {images.map((rawSrc, idx) => {
              const src = encodeURI(rawSrc);
              return (
                <Reveal key={src} delay={(idx % 6) * 60}>
                  <div className="glass card galleryCard" style={{ position: "relative", aspectRatio: "4/5", borderRadius: 18, cursor: "zoom-in" }} onClick={() => setLightboxSrc(src)}>
                    <div style={{ position: "absolute", inset: 0, borderRadius: 18, overflow: "hidden" }}>
                      <Image src={src} alt={`${t.gallery.alt} ${idx + 1}`} fill style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </>
  );
}
