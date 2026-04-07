"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Truck, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="gradient-hero w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="tracking-[0.2em] uppercase text-xs text-sage-600"
            >
              BRUME RAFRAICHISSANTE VISAGE &amp; CORPS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-[var(--font-heading)] text-5xl md:text-6xl lg:text-7xl text-charcoal mt-6 leading-tight"
            >
              Quand la chaleur monte,
              <br />
              <span className="italic">Mapause.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-md mt-6 leading-relaxed"
            >
              Sensation de fraicheur immediate en 10 secondes. Aux hydrolats bio
              de Sauge Sclaree et Menthe Poivree.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className="bg-sage-600 text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-sage-700 transition-colors">
                Decouvrir
              </button>
              <button className="bg-rose-gold text-charcoal rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
                Commander - 19,90&euro;
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 flex items-center gap-4 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <Truck className="size-3.5" />
                Livraison offerte des 45&euro;
              </span>
              <span className="text-sage-300">|</span>
              <span className="flex items-center gap-1.5">
                <Shield className="size-3.5" />
                Satisfaite ou remboursee 30j
              </span>
            </motion.div>
          </div>

          {/* Right side - Product placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[3/4] w-full max-w-md rounded-2xl overflow-hidden">
              <Image
                src="/images/packshot-nature.png"
                alt="MAPAUSE brume rafraîchissante dans un cadre naturel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
