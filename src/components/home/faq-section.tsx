"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qu'est-ce que Mapause exactement ?",
    answer:
      "Mapause est une brume rafraichissante visage et corps formulee specifiquement pour les femmes sujettes aux bouffees de chaleur. Composee a plus de 95% d'hydrolats bio (Sauge Sclaree, Menthe Poivree) et d'Eau Thermale, elle offre une sensation de fraicheur immediate tout en agissant en profondeur grace a sa triple action.",
  },
  {
    question: "Comment utiliser la brume ?",
    answer:
      "Vaporisez 2-3 pressions sur le visage et/ou le corps des que vous sentez la chaleur monter. Gardez les yeux fermes lors de la vaporisation. Vous pouvez l'utiliser aussi souvent que necessaire, a tout moment de la journee ou de la nuit. Le format 50ml se glisse facilement dans votre sac.",
  },
  {
    question: "Est-ce que ca marche vraiment ?",
    answer:
      "Notre formule agit sur 3 mecanismes simultanes : le Menthyl Lactate et le L-Menthol activent les recepteurs de froid (effet en 0-10 secondes), l'Hamamelis et l'Aloe Vera agissent sur la vasoconstriction et le refroidissement par evaporation (10 sec - 5 min), et la Sauge Sclaree contribue a la regulation hormonale sur le long terme.",
  },
  {
    question: "La brume est-elle compatible avec le maquillage ?",
    answer:
      "Oui, notre formule 100% aqueuse est compatible avec tous les types de maquillage. Le spray ultrafin se depose comme un voile sans faire couler le fond de teint, la poudre ou le mascara. De nombreuses clientes l'utilisent meme comme brume fixatrice de maquillage.",
  },
  {
    question: "Quels sont les ingredients ?",
    answer:
      "Notre formule contient des hydrolats bio (Sauge Sclaree 35%, Menthe Poivree 20%), de l'Eau Thermale (20%), de l'Hamamelis (10%), de l'Aloe Vera (5%), ainsi que du Menthyl Lactate et du L-Menthol. Sans alcool, sans parfum synthetique, sans conservateur controverse. Formule bio certifiable.",
  },
  {
    question: "Est-ce un medicament ?",
    answer:
      "Non, Mapause est un produit cosmetique. Ce n'est pas un traitement medical et il ne remplace en aucun cas une consultation medicale ou un traitement hormonal prescrit par votre medecin. Si vos symptomes sont severes, nous vous recommandons de consulter un professionnel de sante.",
  },
  {
    question: "Quels sont les delais de livraison ?",
    answer:
      "Nous expedions sous 48h. Livraison en 3-5 jours ouvrables en France metropolitaine. Livraison offerte des 45\u20AC d'achat. Vous recevrez un email de confirmation avec un numero de suivi des l'expedition de votre commande.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white">
      <div className="py-16 lg:py-20 px-6 max-w-3xl mx-auto">
        <p className="tracking-[0.2em] uppercase text-xs text-[#344E41] text-center">
          FAQ
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
          Vos questions, nos reponses
        </h2>
        <p className="text-center text-muted-foreground mt-4">
          Tout ce que vous devez savoir avant de commander
        </p>

        <div className="mt-12 bg-white rounded-2xl shadow-sm p-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#E5E5E5] py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between items-center w-full text-left cursor-pointer"
              >
                <span className="text-lg font-semibold text-[#1A1A1A] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
