"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="tracking-[0.2em] uppercase text-sm text-[#344E41] font-medium"
            >
              AURA DE MAPAUSE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-[var(--font-heading)] text-5xl md:text-6xl lg:text-7xl text-charcoal mt-6 leading-tight italic"
            >
              Fraicheur instantanee,
              <br />
              confiance retrouvee.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-md mt-6 leading-relaxed"
            >
              Une vague de fraicheur en 10 secondes. Les rougeurs s&apos;apaisent, le coeur ralentit, vous reprenez le controle. Naturellement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1A1A1A] text-white rounded-full h-14 px-10 text-base font-medium hover:bg-[#333] transition-colors shadow-lg"
              >
                Decouvrir Aura - 19,90&euro;
              </button>
              <button
                onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-[#1A1A1A] text-[#1A1A1A] bg-transparent rounded-full h-14 px-10 text-base font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Decouvrir
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Livraison offerte des 45&euro; · Satisfaite ou remboursee 30j
            </motion.div>
          </div>

          {/* Right side - Product placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-lg rounded-2xl overflow-hidden">
              <Image
                src="/images/packshot-nature.png"
                alt="Aura de Mapause brume rafraichissante dans un cadre naturel"
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
