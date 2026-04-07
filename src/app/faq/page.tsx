"use client";

import { useState } from "react";
import Link from "next/link";
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
  {
    question: "Peut-on utiliser Mapause pendant la grossesse ?",
    answer:
      "L'utilisation de Mapause pendant la grossesse n'est pas recommandee, en raison de la presence d'hydrolat de Sauge Sclaree et de menthol. Par precaution, nous vous conseillons de consulter votre medecin ou sage-femme avant toute utilisation.",
  },
  {
    question: "La brume a-t-elle une odeur ?",
    answer:
      "Oui, Mapause a une odeur fraiche et herbacee 100% naturelle, provenant de ses hydrolats de Menthe Poivree et de Sauge Sclaree. Il n'y a aucun parfum synthetique ajoute. L'odeur est legere, agreable et s'estompe rapidement apres application.",
  },
  {
    question: "Combien de temps dure un flacon ?",
    answer:
      "Le flacon 50ml dure environ 2-3 semaines a raison de 3-4 utilisations par jour (2-3 pressions par utilisation). Le format 100ml dure environ 5-6 semaines dans les memes conditions d'utilisation. La duree varie selon la frequence et l'intensite de vos bouffees de chaleur.",
  },
  {
    question: "Puis-je l'utiliser sur le corps ?",
    answer:
      "Absolument ! Mapause peut etre vaporisee sur le visage, le cou, le decollete et les poignets. Ces zones sont particulierement reactives et permettent une diffusion rapide de la fraicheur. Evitez le contour des yeux et les muqueuses.",
  },
  {
    question: "Comment conserver ma brume ?",
    answer:
      "Conservez votre brume Mapause a temperature ambiante, a l'abri de la lumiere directe du soleil. Pour un boost de fraicheur supplementaire, vous pouvez la placer au refrigerateur : la sensation de froid sera encore plus intense lors de l'application. Ne pas exposer a des temperatures superieures a 40\u00B0C.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="gradient-mist py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="tracking-[0.2em] uppercase text-xs text-sage-600">
            FAQ
          </p>
          <h1 className="font-[var(--font-heading)] text-5xl mt-6">
            Questions Frequentes
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur Mapause et notre brume
            rafraichissante.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-sage-100 py-6">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex justify-between items-center w-full text-left cursor-pointer"
                >
                  <span className="text-lg font-medium pr-4">
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
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-mist py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-heading)] text-4xl">
            Encore des questions ?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Notre equipe est la pour vous repondre. Ou essayez directement !
          </p>
          <Link
            href="/#product"
            className="inline-block mt-8 bg-sage-600 text-white rounded-full px-10 py-4 font-medium hover:bg-sage-700 transition-colors"
          >
            Commander maintenant
          </Link>
        </div>
      </section>
    </>
  );
}
