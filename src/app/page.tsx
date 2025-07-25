"use client";

import { BackgroundLines } from "@/components/BackgroundLines";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { TechSection } from "@/components/sections/TechSection";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

// ===========================
// MAIN PAGE COMPONENT
// ===========================

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const sections = [
    "hero",
    "about",
    "kongsimakan",
    "codequest",
    "smartiq",
    "tech",
    "contact",
  ];
  const totalSections = sections.length;

  // Debounced scroll handler
  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (isScrolling) return;

      setIsScrolling(true);

      const direction = event.deltaY > 0 ? 1 : -1;

      setCurrentSection((prev) => {
        const next = prev + direction;
        return Math.max(0, Math.min(totalSections - 1, next));
      });

      // Reset scrolling flag after animation completes
      setTimeout(() => setIsScrolling(false), 1000);
    },
    [isScrolling, totalSections]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isScrolling) return;

      if (event.key === "ArrowDown" || event.key === " ") {
        event.preventDefault();
        setIsScrolling(true);
        setCurrentSection((prev) => Math.min(totalSections - 1, prev + 1));
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setIsScrolling(true);
        setCurrentSection((prev) => Math.max(0, prev - 1));
        setTimeout(() => setIsScrolling(false), 1000);
      }
    },
    [isScrolling, totalSections]
  );

  // Add event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    container.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleScroll, handleKeyDown, isMobile]);

  return (
    <div
      ref={containerRef}
      className={`bg-black text-white ${
        !isMobile ? "overflow-hidden h-screen" : ""
      }`}
      tabIndex={0}
    >
      {/* Fixed BackgroundLines for all sections */}
      <div className="fixed inset-0 w-full h-full z-0">
        <BackgroundLines className="w-full h-full opacity-30">
          <div className="absolute inset-0 bg-black/20" />
        </BackgroundLines>
      </div>

      {/* Section Navigation Indicator */}
      {!isMobile && (
        <div className="flex flex-col fixed right-8 top-1/2 transform -translate-y-1/2 z-[100] gap-4">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => {
                if (!isScrolling) {
                  setIsScrolling(true);
                  setCurrentSection(index);
                  setTimeout(() => setIsScrolling(false), 1000);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/60"
              }`}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            />
          ))}
        </div>
      )}

      {/* Sections */}
      <div className={isMobile ? "flex flex-col" : ""}>
        <HeroSection isActive={isMobile || currentSection === 0} />
        <AboutSection isActive={isMobile || currentSection === 1} />
        <ProjectSection
          isActive={isMobile || currentSection === 2}
          projectNumber={1}
        />
        <ProjectSection
          isActive={isMobile || currentSection === 3}
          projectNumber={2}
        />
        <ProjectSection
          isActive={isMobile || currentSection === 4}
          projectNumber={3}
        />
        <TechSection isActive={isMobile || currentSection === 5} />
        <ContactSection isActive={isMobile || currentSection === 6} />
      </div>
    </div>
  );
}
