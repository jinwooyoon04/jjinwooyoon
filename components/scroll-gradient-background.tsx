"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ScrollGradientBackground() {
  const [scrollY, setScrollY] = useState(0);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = resolvedTheme || theme || "light";
  const maxScroll = 2000; // Maximum scroll distance for full gradient
  const scrollProgress = Math.min(scrollY / maxScroll, 1);

  // Dark mode: midnight blue gradient (lighter at top, darker as scroll)
  // Light mode: sky blue gradient (lighter at top, darker as scroll)
  
  let gradientColor: string;
  
  if (currentTheme === "dark") {
    // Midnight blue: starts at lighter midnight blue, gets darker
    // HSL: hue ~220 (blue), saturation ~50-60%, lightness decreases
    const startLightness = 15; // Lighter midnight blue
    const endLightness = 8; // Darker midnight blue
    const lightness = startLightness - (startLightness - endLightness) * scrollProgress;
    gradientColor = `hsl(220, 55%, ${lightness}%)`;
  } else {
    // Sky blue: starts at light sky blue, gets slightly darker
    // HSL: hue ~200 (sky blue), saturation ~40-50%, lightness decreases
    const startLightness = 95; // Very light sky blue
    const endLightness = 88; // Slightly darker sky blue
    const lightness = startLightness - (startLightness - endLightness) * scrollProgress;
    gradientColor = `hsl(200, 45%, ${lightness}%)`;
  }

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-300 ease-out"
      style={{
        backgroundColor: gradientColor,
      }}
    />
  );
}

