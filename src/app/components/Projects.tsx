"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import { useEffect, useRef, useState } from "react";
import Lightbox from "../Lightbox";

interface ProjectsProps {
  images: string[];
}

export default function Projects({ images }: ProjectsProps) {
  const [projectsStart, setProjectsStart] = useState(0);
  const projectsHoverRef = useRef(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (images.length <= 6) return; // rotate only if many images
    const id = setInterval(() => {
      if (projectsHoverRef.current) return;
      setProjectsStart((s) => (s + 6) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section id="projets" style={{ padding: "clamp(40px, 6vw, 60px) 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 className="sectionTitle">Projets & Initiatives</h2>
          <p className="sectionSub" style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 600 }}>
            Quelques actions phares au service de la jeunesse et du développement du Congo
          </p>
        </div>
        <div className="galleryGrid projectsGrid" onMouseEnter={() => (projectsHoverRef.current = true)} onMouseLeave={() => (projectsHoverRef.current = false)}>
          {Array.from({ length: Math.min(12, images.length) }).map((_, idx) => {
            const src = images[(projectsStart + idx) % images.length];
            return (
              <Reveal key={`${src}-${idx}`} delay={(idx % 6) * 60}>
                <div className="projectCard">
                  <div style={{ position: "relative", aspectRatio: "4/3", cursor: "zoom-in" }} className="glass card" onClick={() => setLightboxSrc(src)}>
                    <div style={{ position: "absolute", inset: 0, borderRadius: 18, overflow: "hidden" }}>
                      <Image src={src} alt={`Projet ${idx + 1}`} fill style={{ objectFit: "cover", transition: "transform 6s ease" }} />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </section>
  );
}
