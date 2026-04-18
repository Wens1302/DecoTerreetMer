import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

// Simple social icons as SVG since lucide-react doesn't include them in this version
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-blue dark:bg-deep-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-white text-sm font-serif font-bold">T</span>
              </span>
              <div>
                <span className="font-serif text-xl font-semibold">Terre et Mer</span>
                <p className="text-xs tracking-widest text-gold uppercase">Design d&apos;Intérieur</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mt-4">
              Agence de décoration et d&apos;architecture intérieure basée à Tanger.
              Nous transformons vos espaces en œuvres d&apos;art habitables, entre
              l&apos;élégance de la terre et la sérénité de la mer.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/about", label: "À propos" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projets" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Tanger, Maroc<br />Boulevard Mohammed V</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+212600000000" className="hover:text-gold transition-colors duration-200">
                  +212 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:contact@terreetmer.ma" className="hover:text-gold transition-colors duration-200">
                  contact@terreetmer.ma
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Terre et Mer Design. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Décoration intérieure Tanger · Rénovation Maroc · Architecture intérieure
          </p>
        </div>
      </div>
    </footer>
  );
}
