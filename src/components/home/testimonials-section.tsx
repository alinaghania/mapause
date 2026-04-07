"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Je l'ai vaporisee en pleine reunion quand j'ai senti la bouffee monter. En quelques secondes, la fraicheur m'a envahie. Personne n'a rien remarque. C'est devenu mon indispensable au bureau.",
    name: "Marie D.",
    age: 52,
    city: "Lyon",
    image: "/images/woman-work.png",
    imageAlt: "Femme au bureau utilisant discrètement la brume MAPAUSE",
  },
  {
    quote:
      "Depuis que je l'utilise avant de me coucher, mes sueurs nocturnes ont diminue de moitie. Je me reveille enfin reposee. Mon mari aussi, d'ailleurs !",
    name: "Sophie L.",
    age: 48,
    city: "Paris",
    image: "/images/woman-bathroom.png",
    imageAlt: "Femme utilisant la brume MAPAUSE dans sa salle de bain",
  },
  {
    quote:
      "J'ai essaye beaucoup de produits, mais c'est le seul avec des ingredients vraiment naturels et bio. La Sauge Sclaree fait une vraie difference. Je me sens bien dans ce que j'utilise.",
    name: "Isabelle M.",
    age: 55,
    city: "Bordeaux",
    image: "/images/woman-garden.png",
    imageAlt: "Femme dans un jardin utilisant la brume MAPAUSE",
  },
  {
    quote:
      "Le format est parfait pour le sac a main. Je la degaine discretement en reunion ou au restaurant. Le spray est fin, pas de trace, et la sensation de fraicheur est immediate.",
    name: "Catherine R.",
    age: 61,
    city: "Marseille",
  },
  {
    quote:
      "Ma plus grande crainte c'etait que ca fasse couler mon maquillage. Pas du tout ! La brume est ultrafine et se pose comme un voile. En plus ca fixe le teint.",
    name: "Nathalie P.",
    age: 49,
    city: "Toulouse",
    image: "/images/woman-cafe.png",
    imageAlt: "Femme élégante au café utilisant la brume MAPAUSE",
  },
  {
    quote:
      "Les premieres semaines, j'appreciais le soulagement instantane. Mais apres un mois d'utilisation reguliere, j'ai constate que mes bouffees etaient moins frequentes. La triple action, c'est reel.",
    name: "Veronique B.",
    age: 57,
    city: "Nantes",
    image: "/images/woman-livingroom.png",
    imageAlt: "Femme se relaxant dans son salon avec la brume MAPAUSE",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="gradient-rose py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-6">
        <p className="tracking-[0.2em] uppercase text-xs text-sage-600 text-center">
          Temoignages
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
          1000+ femmes nous font confiance
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#D6B456] text-[#D6B456]" />
            ))}
          </div>
          <span className="text-muted-foreground text-base">4.9/5 basee sur 1247 avis</span>
        </div>

        <div className="relative mt-12 px-12">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 px-3"
                >
                  <div className="bg-white rounded-xl shadow-md border border-sage-100 min-h-[400px] h-full flex flex-col overflow-hidden">
                    {t.image && (
                      <div className="relative h-52 w-full">
                        <Image
                          src={t.image}
                          alt={t.imageAlt || ""}
                          fill
                          className="object-cover rounded-t-xl"
                        />
                      </div>
                    )}
                    <div className="p-8 pb-6 flex flex-col flex-1">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-[#D6B456] text-[#D6B456]"
                        />
                      ))}
                    </div>
                    <p className="italic text-base leading-relaxed mt-4 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="font-semibold text-base mt-6 pb-2">
                      {t.name}, {t.age} ans, {t.city}
                    </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-5 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-sage-50 transition-colors"
            aria-label="Temoignage precedent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-5 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-sage-50 transition-colors"
            aria-label="Temoignage suivant"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === selectedIndex ? "bg-sage-600" : "bg-sage-200"
              }`}
              aria-label={`Aller au temoignage ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
