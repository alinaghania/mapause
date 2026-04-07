"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Check, Truck, Lock } from "lucide-react";

const formats = [
  { id: "50ml", label: "50ml - Sac a main", price: "19,90" },
  { id: "100ml", label: "100ml - Maison", price: "29,90" },
];

const benefits = [
  "Fraicheur immediate en 10 secondes",
  "Effet longue duree jusqu'a 2h",
  "Compatible maquillage",
  "Sans alcool, sans parfum ajoute",
];

export function ProductSection() {
  const [selectedFormat, setSelectedFormat] = useState("50ml");

  const currentFormat = formats.find((f) => f.id === selectedFormat)!;

  return (
    <section className="bg-white w-full py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tracking-[0.2em] uppercase text-xs text-sage-600 text-center"
        >
          NOTRE SOLUTION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-heading)] text-4xl md:text-5xl text-center text-foreground mt-4"
        >
          Votre alliee anti-bouffees de chaleur
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mt-4 text-lg leading-relaxed"
        >
          La seule brume qui agit sur 3 mecanismes simultanes de la bouffee de
          chaleur. Fraicheur instantanee, action vasculaire, regulation hormonale.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
          {/* Left - Product placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative aspect-square bg-sage-50 rounded-3xl p-8 shadow-xl overflow-hidden">
              <Image
                src="/images/packshot-spa.png"
                alt="MAPAUSE brume SOS fraîcheur"
                fill
                className="object-contain p-6"
              />
            </div>
          </motion.div>

          {/* Right - Product details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="flex items-center gap-3">
              <h3 className="font-[var(--font-heading)] text-3xl font-semibold text-charcoal">
                MAPAUSE - Brume SOS Fraicheur
              </h3>
              <span className="bg-sage-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Nouveaute
              </span>
            </div>
            <p className="text-muted-foreground mt-2">
              Quand la chaleur monte, Mapause vous rafraichit en 10 secondes.
            </p>

            {/* Format selector */}
            <div className="flex gap-3 mt-6">
              {formats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => setSelectedFormat(format.id)}
                  className={`rounded-full px-6 py-4 text-sm transition-colors ${
                    selectedFormat === format.id
                      ? "bg-sage-700 text-white font-medium shadow-md"
                      : "bg-white border-2 border-sage-200 text-charcoal hover:border-sage-400"
                  }`}
                >
                  {format.label}
                </button>
              ))}
            </div>

            {/* Price */}
            <p className="text-4xl font-[var(--font-heading)] font-bold text-sage-800 mt-6">
              {currentFormat.price}&euro;
            </p>

            {/* Add to cart */}
            <button className="w-full bg-sage-700 hover:bg-sage-800 text-white rounded-full h-16 text-lg font-semibold transition-colors mt-6 shadow-lg">
              Ajouter au panier
            </button>

            {/* Trust line */}
            <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Truck className="size-3.5" />
                Livraison offerte des 45&euro;
              </span>
              <span className="text-sage-300">|</span>
              <span className="flex items-center gap-1.5">
                <Lock className="size-3.5" />
                Paiement securise
              </span>
            </div>

            {/* Benefits list */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-charcoal"
                >
                  <span className="bg-sage-600 text-white rounded-full p-0.5 shrink-0">
                    <Check className="size-4" />
                  </span>
                  <span className="text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
