"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/products/top-bordeaux-brode.png"
          alt="SONA Collection"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end text-center text-white pb-24 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[11px] tracking-[0.4em] uppercase mb-4 text-white/70"
        >
          Tops indiens brodes & Churiyans
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-[var(--font-serif)] text-5xl sm:text-7xl lg:text-8xl font-light italic tracking-wide"
        >
          L'Eclat Indien
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 max-w-md text-sm text-white/80 leading-relaxed tracking-wide"
        >
          Des tops brodes a la main et des churiyans artisanaux
          qui celebrent l'heritage et la beaute.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Link
            href="/products"
            className="mt-10 inline-block border border-white px-12 py-4 text-[12px] tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Decouvrir
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
