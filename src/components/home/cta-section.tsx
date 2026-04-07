"use client";

import Image from "next/image";
import { Shield, Truck, RotateCcw } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Paiement securise" },
  { icon: Truck, label: "Livraison offerte des 45\u20AC" },
  { icon: RotateCcw, label: "Retour 30 jours" },
];

export function CtaSection() {
  return (
    <section className="bg-[#1A1A1A] py-16 lg:py-20 text-center text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <Image
          src="/images/packshot-spa.png"
          alt="Aura de Mapause brume rafraichissante"
          width={160}
          height={160}
          className="h-40 w-auto mx-auto mb-6 brightness-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        />
        <h2 className="font-[var(--font-heading)] text-5xl md:text-6xl text-white">
          Aura vous attend
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mt-4">
          Livraison offerte. Satisfaite ou remboursee 30 jours. Sans engagement.
        </p>
        <p className="text-3xl font-bold font-[var(--font-heading)] mt-8">
          A partir de 19,90&euro;
        </p>
        <button
          onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-block bg-white text-[#1A1A1A] hover:bg-[#F5F5F3] rounded-full px-14 py-5 text-xl font-medium mt-6 transition-colors"
        >
          Decouvrir Aura
        </button>
        <div className="flex justify-center gap-8 mt-8 text-white/70 text-sm flex-wrap">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className="inline-flex items-center gap-2">
                <Icon size={18} />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
