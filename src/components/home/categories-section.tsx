"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

const categories = [
  {
    name: "Tops Brodes",
    slug: "tops",
    image: "/products/top-vert-dore.png",
    subtitle: "Artisanat indien",
  },
  {
    name: "Churiyans & Accessoires",
    slug: "accessoires",
    image: "/products/churiyans-or.png",
    subtitle: "Bracelets traditionnels",
  },
];

export function CategoriesSection() {
  return (
    <section className="bg-accent/50">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-3">Explorer</p>
            <h2 className="font-[var(--font-serif)] text-4xl lg:text-5xl font-light italic">Nos univers</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 0.15}>
              <Link href={`/products?category=${cat.slug}`} className="group relative aspect-[3/4] overflow-hidden block">
                <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }}>
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </motion.div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-2">{cat.subtitle}</p>
                  <h3 className="font-[var(--font-serif)] text-2xl lg:text-3xl text-white font-light italic">{cat.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
