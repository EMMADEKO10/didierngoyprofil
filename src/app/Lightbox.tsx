"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="lightboxInner glass" onClick={(e) => e.stopPropagation()}>
        <button className="btn iconBtn" onClick={onClose} aria-label="Fermer">✕</button>
        <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
          <Image src={src} alt="Aperçu" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}


