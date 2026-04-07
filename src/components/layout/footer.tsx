"use client";

import Link from "next/link";
import { Truck, Shield, Leaf, MapPin } from "lucide-react";

const navigationLinks = [
  { label: "Notre Histoire", href: "/notre-histoire" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Temoignages", href: "/temoignages" },
  { label: "FAQ", href: "/faq" },
];

const informationLinks = [
  { label: "CGV", href: "/cgv" },
  { label: "Mentions Legales", href: "/mentions-legales" },
  { label: "Politique de Confidentialite", href: "/politique-confidentialite" },
  { label: "Politique de Cookies", href: "/politique-cookies" },
  { label: "Contact", href: "/contact" },
];

const reassuranceItems = [
  { icon: Truck, text: "Livraison offerte des 45EUR" },
  { icon: Shield, text: "Paiement 100% securise" },
  { icon: Leaf, text: "Formule naturelle & bio" },
  { icon: MapPin, text: "Fabrique en France" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <span className="font-[var(--font-heading)] text-2xl tracking-[0.2em] uppercase">
              MAPAUSE
            </span>
            <p className="mt-3 font-[var(--font-heading)] text-base italic text-white/80">
              Quand la chaleur monte, Mapause.
            </p>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Brume rafraichissante aux hydrolats bio, formulee en France pour
              vous offrir une sensation de fraicheur immediate lors des bouffees
              de chaleur.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-white/40">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Informations */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-white/40">
              Informations
            </h4>
            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-white/40">
              Newsletter
            </h4>
            <p className="text-sm text-white/60 mb-4">
              Conseils bien-etre et offres exclusives, directement dans votre
              boite mail.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 bg-white/10 border border-white/20 text-sm text-white py-2.5 px-4 rounded-full focus:outline-none focus:border-white/50 placeholder:text-white/30"
              />
              <button
                type="submit"
                className="bg-white text-[#1A1A1A] text-xs font-medium tracking-wide uppercase px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Reassurance Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {reassuranceItems.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-[#344E41] shrink-0" />
                <span className="text-xs text-white/60">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.15em] uppercase text-white/30">
            MAPAUSE 2026 - Tous droits reserves
          </p>
          <div className="flex items-center gap-4 text-[11px] text-white/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
