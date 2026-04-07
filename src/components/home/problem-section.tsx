"use client";

import Image from "next/image";
import { motion } from "motion/react";

const cards = [
  {
    number: "01",
    title: "La nuit",
    description:
      "3h du matin. Les draps sont trempes. Le sommeil, brise.",
  },
  {
    number: "02",
    title: "Au quotidien",
    description:
      "En pleine reunion. Le rouge qui monte. L'envie de disparaitre.",
  },
  {
    number: "03",
    title: "L'inconfort",
    description:
      "La chaleur qui envahit. Le corps qui reagit. Et vous, qui subissez.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero image + text overlay - editorial style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/woman-closeup.png"
            alt="Femme utilisant Aura de Mapause"
            fill
            className="object-cover object-top"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          {/* Text overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-2xl">
              Ce moment ou tout bascule
            </h2>
            <p className="text-white/80 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
              La chaleur monte sans prevenir. Le coeur s&apos;emballe. La gene s&apos;installe.{" "}
              <span className="text-white font-semibold">8 femmes sur 10</span> connaissent
              ces instants. Vous meritez mieux qu&apos;un eventail.
            </p>
          </div>
        </motion.div>

        {/* Cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-[#F5F5F3] rounded-xl p-8"
            >
              <span className="text-4xl font-[var(--font-heading)] text-[#D5D5D5]">{card.number}</span>
              <h3 className="font-bold text-xl mt-4 text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="text-base text-[#6B6B6B] mt-2 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
