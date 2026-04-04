"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";

export function EditorialSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <ParallaxImage
          src="/products/top-rouge-festif.png"
          alt="Top brode indien SONA"
          className="aspect-[4/5]"
          speed={0.2}
        />
        <Reveal direction="right" delay={0.2}>
          <div className="flex flex-col items-center justify-center py-16 lg:py-0 lg:px-20 text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
              Savoir-faire
            </p>
            <h2 className="font-[var(--font-serif)] text-4xl lg:text-5xl font-light italic leading-tight">
              Brode a la main,
              <br />
              porte avec fierte
            </h2>
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Chaque top est une oeuvre artisanale. Broderies, sequins, miroirs
              et perles sont poses a la main par des artisans indiens.
              Les churiyans completent chaque tenue avec leur eclat traditionnel.
            </p>
            <Link
              href="/products"
              className="mt-10 inline-block border-b border-foreground pb-1 text-[12px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
            >
              Decouvrir la collection
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
