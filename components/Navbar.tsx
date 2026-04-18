"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-deep-blue-dark/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <span className="text-white text-sm font-serif font-bold">T</span>
            </span>
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-xl font-semibold transition-colors duration-300 ${
                  scrolled
                    ? "text-deep-blue dark:text-beige"
                    : "text-white"
                }`}
              >
                Terre et Mer
              </span>
              <span
                className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-gold" : "text-gold-light"
                }`}
              >
                Design d&apos;Intérieur
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  scrolled
                    ? "text-deep-blue dark:text-beige hover:text-gold dark:hover:text-gold"
                    : "text-white/90 hover:text-white"
                } ${pathname === href ? "text-gold dark:text-gold" : ""}`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${
                scrolled
                  ? "text-deep-blue dark:text-beige hover:bg-beige dark:hover:bg-deep-blue"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              href="/contact"
              className="px-5 py-2 bg-gold hover:bg-gold-dark text-white text-sm font-medium rounded tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${
                scrolled
                  ? "text-deep-blue dark:text-beige"
                  : "text-white"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors duration-200 ${
                scrolled
                  ? "text-deep-blue dark:text-beige"
                  : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-deep-blue-dark border-t border-beige dark:border-deep-blue/50 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium py-2 border-b border-beige dark:border-deep-blue/30 transition-colors duration-200 ${
                    pathname === href
                      ? "text-gold"
                      : "text-deep-blue dark:text-beige hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 bg-gold hover:bg-gold-dark text-white text-sm font-medium rounded tracking-wide text-center transition-all duration-200"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
