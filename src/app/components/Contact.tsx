"use client";

import Image from "next/image";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" style={{ padding: "clamp(40px, 6vw, 60px) 0 clamp(60px, 8vw, 100px)" }}>
      <div className="container">
        {/* Citation finale inspirante */}

        <div className="glass contactCard" style={{ borderRadius: 20, padding: "clamp(28px, 4vw, 40px)", background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08), rgba(247, 37, 133, 0.06))" }}>
          <div className="grid contactGrid" style={{ alignItems: "center" }}>
            <div>
              <h2 className="sectionTitle" style={{ marginBottom: 10 }}>{t.contact.title}</h2>
              <p className="sectionSub" style={{ marginBottom: 0 }}>
                {t.contact.description}
              </p>
            </div>
            <div className="actions" style={{ justifyContent: "flex-end", display: "flex", flexDirection: "column", gap: 12 }}>
              
              {/* Social links */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginTop: 16 }}>
                <a href="https://www.linkedin.com/in/didier-ngoy-ngu-officiel-48a1b715a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="btn" style={{ gap: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 16px" }}>
                  <Image src="/projet/icons_reseaux/icons8-linkedin.svg" alt="LinkedIn" width={20} height={20} />
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/didier_ngoyi_ngubu?igsh=MTlpeGV2eWpwMHVqcw==" target="_blank" rel="noreferrer" className="btn" style={{ gap: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 16px" }}>
                  <Image src="/projet/icons_reseaux/icons8-instagram.svg" alt="Instagram" width={20} height={20} />
                  Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=100064138083508&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noreferrer" className="btn" style={{ gap: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 16px" }}>
                  <Image src="/projet/icons_reseaux/icons8-facebook.svg" alt="Facebook" width={20} height={20} />
                  Facebook
                </a>
                <a href="mailto:didierngoyprim@gmail.com" target="_blank" rel="noreferrer" className="btn" style={{ gap: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 16px" }}>
                  <Image src="/projet/icons_reseaux/icons8-gmail.svg" alt="Gmail" width={20} height={20} />
                  Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer style={{ marginTop: 40, color: "var(--muted)", fontSize: 14, textAlign: "center", opacity: 0.7 }}>
           © {new Date().getFullYear()} Didier Ngoy Ngubu. {t.contact.copyright}
        </footer>
      </div>
    </section>
  );
}
