"use client";

import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Presentation from "./components/Presentation";
import About from "./components/About";
// import Roles from "./components/Roles";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

const heroImages = [
  "/hirosection/WhatsApp Image 2025-10-13 à 10.24.43_c14af50d.jpg",
  "/hirosection/WhatsApp Image 2025-10-18 à 11.29.35_ede24d21.jpg",
  "/hirosection/558692288_1222148709933054_4229808147326803317_n.jpg",
  "/hirosection/557978692_1222147466599845_6621739788798749420_n.jpg",
];

const projectImages = [
  // 2025-10-18 new batch
  "/projet/WhatsApp Image 2025-10-18 à 11.38.18_197f8f3e.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.38.16_d72dd618.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.38.14_a953067c.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.38.13_ba251aad.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.38.14_75d201cf.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.38.11_f80d7b47.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.38.10_f314f97c.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.38.04_d4d406f2.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.38.03_eb83234c.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.37.56_07215689.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.37.56_71b2493c.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 11.29.35_ede24d21.jpg",
  "/projet/WhatsApp Image 2025-10-18 à 10.21.22_6ff399ae.jpg",
  // 2025-10-13 batch
  "/projet/WhatsApp Image 2025-10-13 à 17.25.33_9efeb24d.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.24.21_7b5d5f41.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.23.55_3b9939f0.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.23.32_ea9e07dd.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.22.42_3d152655.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.22.02_d9c6583c.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.21.45_d5e602f4.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.21.13_8115392f.jpg",
  "/projet/WhatsApp Image 2025-10-13 à 17.16.48_46f69da3.jpg",
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
  return (
    <main>
      <Hero images={heroImages} />
      <About />
      <Presentation />

      {/* <Roles /> */}

      <Projects images={projectImagesOrdered} />

      <Publications />
      <Gallery images={galleryImagesOrdered} />

      <Contact />
    </main>
  );
}
