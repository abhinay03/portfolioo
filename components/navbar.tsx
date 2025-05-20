"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -90% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Only update if we're not at the top of the page
          if (window.scrollY > 100) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections except home
    const sections = document.querySelectorAll("section[id]:not(#home)");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Add this after your existing useEffect for scroll handling
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark && !scrolled) {
        // In dark mode with transparent navbar, make text more visible
        const navbarLinks = document.querySelectorAll(".navbar-link");
        navbarLinks.forEach((link) => {
          link.classList.add("text-foreground/90");
          link.classList.remove("text-foreground/70");
        });
      }
    };

    // Initial check
    handleThemeChange();

    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Abhinay Sambherao
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`navbar-link px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`navbar-link block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.href.substring(1)
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
