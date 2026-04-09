"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <nav
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
          scrolled ? "top-4 w-auto" : "top-6 w-[calc(100%-2rem)] max-w-2xl md:w-auto",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-6 px-2 py-2 rounded-full border transition-all duration-500 backdrop-blur-xl",
            "bg-background/60 border-border shadow-2xl overflow-hidden",
            scrolled ? "px-4 w-auto" : "px-6 w-full",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-lg tracking-tight hover:opacity-80 transition-opacity pl-2 flex items-center"
          >
            <span className="font-light text-foreground/70">Shadow</span>
            <span className="font-bold text-foreground">Tech</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[13px] font-medium px-3 py-1.5 rounded-full transition-all duration-300",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/50 hover:text-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-[12px] font-bold hover:opacity-90 transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-primary/20"
            >
              Get started
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full border border-border bg-foreground/5 text-foreground/50 hover:text-foreground transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <button
          onClick={closeMenu}
          className="absolute top-8 right-8 p-3 rounded-full border border-border bg-foreground/5"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className={cn(
                "text-3xl font-bold tracking-tight transition-all duration-300 hover:scale-105",
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0 text-foreground/50 hover:text-foreground",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={closeMenu}
            className="mt-8 flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-black text-lg shadow-xl shadow-primary/25"
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
