"use client";

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
    <section id="problem" className="w-full bg-[#1A1A1A] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tracking-[0.3em] uppercase text-xs text-white/30"
        >
          Le constat
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mt-8 leading-tight"
        >
          Ce moment ou tout bascule
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          La chaleur monte sans prevenir. Le coeur s&apos;emballe. La gene s&apos;installe.{" "}
          <span className="text-white font-medium">8 femmes sur 10</span> connaissent
          ces instants. Vous meritez mieux qu&apos;un eventail.
        </motion.p>

        {/* Cards on dark bg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="border border-white/10 rounded-xl p-8 text-left"
            >
              <span className="text-4xl font-[var(--font-heading)] text-white/10">{card.number}</span>
              <h3 className="font-bold text-lg mt-4 text-white">
                {card.title}
              </h3>
              <p className="text-base text-white/50 mt-2 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
