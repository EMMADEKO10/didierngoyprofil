"use client";

import Image from "next/image";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" style={{ padding: "4rem 0" }}>
      <div className="container">
        <div className="contactCard">
          <div className="contactGrid">
            <div>
              <h2 className="sectionTitle" style={{ marginBottom: 10 }}>{t.contact.title}</h2>
              <p className="sectionSub" style={{ marginBottom: 0 }}>
                {t.contact.description}
              </p>
            </div>
            <div>
              {/* Social links */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
                <a href="https://www.linkedin.com/in/didier-ngoy-ngu-officiel-48a1b715a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="btn" style={{ gap: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src="/projet/icons_reseaux/icons8-linkedin.svg" alt="LinkedIn" width={16} height={16} />
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/didier_ngoyi_ngubu?igsh=MTlpeGV2eWpwMHVqcw==" target="_blank" rel="noreferrer" className="btn" style={{ gap: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src="/projet/icons_reseaux/icons8-instagram.svg" alt="Instagram" width={16} height={16} />
                  Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=100064138083508&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noreferrer" className="btn" style={{ gap: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src="/projet/icons_reseaux/icons8-facebook.svg" alt="Facebook" width={16} height={16} />
                  Facebook
                </a>
                <a href="mailto:didierngoyprim@gmail.com" target="_blank" rel="noreferrer" className="btn" style={{ gap: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src="/projet/icons_reseaux/icons8-gmail.svg" alt="Gmail" width={16} height={16} />
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
