"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { toast } from "sonner";

const formats = [
  { id: "50ml", label: "50ml - Sac a main", price: "19,90", cents: 1990 },
  { id: "100ml", label: "100ml - Maison", price: "29,90", cents: 2990 },
];

const benefits = [
  "Fraicheur immediate en 10 secondes",
  "Effet longue duree jusqu'a 2h",
  "Compatible maquillage",
  "Sans alcool, sans parfum ajoute",
];

export function ProductSection() {
  const [selectedFormat, setSelectedFormat] = useState("50ml");
  const { addItem } = useCart();

  const currentFormat = formats.find((f) => f.id === selectedFormat)!;

  function handleAddToCart() {
    addItem(
      {
        slug: "aura-de-mapause",
        name: "Aura de Mapause",
        description: "Brume rafraichissante anti-bouffees de chaleur",
        price: currentFormat.cents,
        format: selectedFormat as "50ml" | "100ml",
        images: ["/images/packshot-spa.png"],
        featured: true,
        createdAt: new Date(),
      },
      selectedFormat
    );
    toast.success("Produit ajoute au panier", {
      description: `${currentFormat.label} - ${currentFormat.price}€`,
    });
  }

  return (
    <section id="product" className="bg-white w-full py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tracking-[0.2em] uppercase text-xs text-[#344E41] text-center"
        >
          NOTRE SOLUTION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-heading)] text-4xl md:text-5xl text-center text-[#1A1A1A] mt-4"
        >
          Aura de Mapause
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-foreground/60 max-w-2xl mx-auto mt-4 text-lg leading-relaxed"
        >
          La premiere brume francaise qui agit sur les 3 mecanismes de la bouffee de chaleur.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          {/* Left - Product placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/packshot-spa.png"
                alt="Aura de Mapause brume rafraichissante"
                fill
                className="object-cover"
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
              <div>
                <h3 className="font-[var(--font-heading)] text-4xl font-semibold text-[#1A1A1A]">
                  Aura
                </h3>
                <p className="text-sm text-foreground/50 mt-1">par Mapause</p>
              </div>
              <span className="bg-[#344E41] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Nouveaute
              </span>
            </div>
            <p className="text-foreground/70 mt-2">
              Une brumisation, et la chaleur s&apos;efface.
            </p>

            {/* Format selector */}
            <div className="flex gap-3 mt-6">
              {formats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => setSelectedFormat(format.id)}
                  className={`rounded-full px-6 py-4 text-sm transition-colors ${
                    selectedFormat === format.id
                      ? "bg-[#1A1A1A] text-white font-medium shadow-md"
                      : "border border-[#1A1A1A] text-[#1A1A1A] bg-transparent"
                  }`}
                >
                  {format.label}
                </button>
              ))}
            </div>

            {/* Price */}
            <p className="text-4xl font-[var(--font-heading)] font-bold text-[#1A1A1A] mt-6">
              {currentFormat.price}&euro;
            </p>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full h-16 text-lg font-medium transition-colors mt-6 shadow-lg"
            >
              Ajouter au panier
            </button>

            {/* Trust line */}
            <p className="text-center mt-3 text-sm text-foreground/60">
              Livraison offerte des 45&euro; · Paiement securise
            </p>

            {/* Benefits list */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="bg-[#344E41] text-white rounded-full p-0.5 shrink-0">
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
