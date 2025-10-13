"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = stored || "dark"; // default theme as requested
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      aria-label="Basculer le thème"
      onClick={toggle}
      className="btn glass"
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 50,
        height: 48,
        padding: "0 16px",
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        boxShadow: "var(--glow)",
      }}
    >
      <span aria-hidden style={{ display: "inline-flex" }}>
        {theme === "light" ? "🌞" : "🌙"}
      </span>
      <span style={{ fontWeight: 600 }}>{theme === "light" ? "Clair" : "Sombre"}</span>
    </button>
  );
}


