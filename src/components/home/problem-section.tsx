"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Moon, Sun, Thermometer } from "lucide-react";

const cards = [
  {
    icon: Moon,
    title: "La nuit",
    description:
      "Les bouffees nocturnes perturbent votre sommeil et votre recuperation.",
  },
  {
    icon: Sun,
    title: "Au quotidien",
    description:
      "Au bureau, en reunion, en public... la chaleur arrive sans prevenir.",
  },
  {
    icon: Thermometer,
    title: "L'inconfort",
    description:
      "Rougeurs, sueurs, palpitations : votre corps reagit, vous subissez.",
  },
];

export function ProblemSection() {
  return (
    <section className="w-full bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center text-charcoal leading-tight"
        >
          Elles arrivent sans prevenir. Vous n&apos;avez rien demande.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto text-lg mt-6 leading-relaxed"
        >
          <span className="font-semibold text-charcoal">8 femmes sur 10</span> souffrent de bouffees de chaleur.
          Au bureau, en reunion, la nuit. La chaleur envahit tout, le coeur s&apos;emballe,
          la gene s&apos;installe. Vous n&apos;etes pas seule.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative w-full max-h-[500px] rounded-2xl overflow-hidden mt-12"
        >
          <Image
            src="/images/woman-closeup.png"
            alt="Femme utilisant la brume MAPAUSE, les yeux fermés, sereine"
            width={1200}
            height={500}
            className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl p-8 shadow-sm border border-sage-200"
            >
              <div className="bg-sage-600 rounded-xl p-3 w-fit">
                <card.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mt-4 text-charcoal">
                {card.title}
              </h3>
              <p className="text-base text-muted-foreground mt-2">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
