"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

export function CategoriesSection() {
  return (
    <section className="bg-accent/50">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-serif)] text-4xl lg:text-5xl font-light italic">
              5 couleurs, 1 geste
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
              Un seul modele. Cinq teintes choisies. Le meme savoir-faire artisanal.
            </p>
          </div>
        </Reveal>
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x">
          {[
            { src: "/products/top-bordeaux.png", label: "Amara" },
            { src: "/products/top-bleu-nuit.png", label: "Nila" },
            { src: "/products/top-rose-poudre.png", label: "Priya" },
            { src: "/products/top-noir-dore.png", label: "Kali" },
            { src: "/products/top-vert-emeraude.png", label: "Meera" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <Link href="/products" className="group block snap-start shrink-0 w-[280px]">
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden"
                  whileHover={{ scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image src={item.src} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="280px" />
                </motion.div>
                <p className="mt-3 text-center text-[12px] tracking-[0.2em] uppercase">{item.label}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
