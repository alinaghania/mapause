"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";

export function EditorialSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <ParallaxImage
          src="/products/top-bordeaux.png"
          alt="Amara"
          className="aspect-[4/5]"
          speed={0.2}
        />
        <Reveal direction="right" delay={0.2}>
          <div className="flex flex-col items-center justify-center py-16 lg:py-0 lg:px-20 text-center">
            <h2 className="font-[var(--font-serif)] text-4xl lg:text-5xl font-light italic leading-tight">
              Ce que les mains
              <br />
              transmettent
            </h2>
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Pas une machine. Des mains. Celles d'artisans qui perpetuent
              un savoir-faire transmis de generation en generation.
              Chaque sequin, chaque perle, chaque fil est pose avec soin.
            </p>
            <Link
              href="/products"
              className="mt-10 inline-block border-b border-foreground pb-1 text-[12px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
            >
              Voir la collection
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
