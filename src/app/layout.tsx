import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./simple-styles.css";
import ThemeToggle from "./ThemeToggle";
import Header from "./Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Didier Ngoyi Ngubu | Entrepreneur, Leader & Conférencier",
  description:
    "Portfolio officiel de Didier Ngoyi Ngubu – Entrepreneur congolais, leader de la jeunesse, président de CONGO LEADERSHIP, initiateur de GÉNÉRATION IMPACT, CEO de BIOTECK AFRICA GROUP, écrivain et conférencier.",
  metadataBase: new URL("https://didierngoy-portfolio.example"),
  openGraph: {
    title: "Didier Ngoyi Ngubu | Entrepreneur, Leader & Conférencier",
    description:
      "Entrepreneur, leader de la jeunesse et citoyen engagé. Découvrez ses projets, missions et engagements.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Didier Ngoyi Ngubu | Entrepreneur, Leader & Conférencier",
    description:
      "Entrepreneur, leader de la jeunesse et citoyen engagé. Découvrez ses projets, missions et engagements.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div id="app-root">{children}</div>
        <ThemeToggle />
      </body>
    </html>
  );
}
