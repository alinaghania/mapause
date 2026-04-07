import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Transparence",
    description:
      "Chaque ingredient de notre formule a une raison scientifique d'etre la. Pas de formule secrete, pas d'ingredient cache. Nous publions les pourcentages exacts et les niveaux de preuve.",
    icon: (
      <svg className="w-8 h-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Naturalite",
    description:
      "Formule bio-certifiable, plus de 95% d'ingredients d'origine naturelle. Aucun parfum synthetique, aucun conservateur controverse. Des hydrolats bio de Sauge Sclaree et Menthe Poivree au coeur de la formule.",
    icon: (
      <svg className="w-8 h-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Efficacite",
    description:
      "Notre triple action agit sur 3 mecanismes simultanes : activation des recepteurs TRPM8 pour une fraicheur immediate, vasoconstriction et refroidissement par evaporation, et regulation hormonale sur le long terme.",
    icon: (
      <svg className="w-8 h-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 00-.659 1.59v1.19a2.25 2.25 0 01-2.25 2.25h-3.242a2.25 2.25 0 01-2.25-2.25v-1.19a2.25 2.25 0 00-.659-1.59L5 14.5m14 0h-2.25m-10.5 0H4" />
      </svg>
    ),
  },
  {
    title: "Accessibilite",
    description:
      "Un produit premium ne devrait pas etre reserve a quelques-unes. A 19,90\u20AC le flacon 50ml, Mapause offre une qualite haut de gamme a un prix juste, parce que toutes les femmes meritent un soulagement efficace.",
    icon: (
      <svg className="w-8 h-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function NotreHistoirePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mist py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="tracking-[0.2em] uppercase text-xs text-sage-600">
            Notre histoire
          </p>
          <h1 className="font-[var(--font-heading)] text-5xl mt-6">
            Notre Histoire
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Nee d&apos;un constat simple : aucune solution rapide, naturelle et
            elegante n&apos;existait pour les bouffees de chaleur.
          </p>
          <div className="mt-10 max-w-sm mx-auto">
            <Image
              src="/images/packshot-nature.png"
              alt="Mapause - brume anti bouffees de chaleur dans un jardin"
              width={400}
              height={500}
              className="rounded-2xl shadow-lg w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Le constat */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="tracking-[0.2em] uppercase text-xs text-sage-600">
            Le point de depart
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl mt-4">
            Le constat
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-charcoal">8 femmes sur 10</strong>{" "}
              souffrent de bouffees de chaleur pendant la menopause. C&apos;est le
              symptome le plus frequent, le plus genant, et pourtant le plus mal
              adresse par l&apos;industrie cosmetique.
            </p>
            <p>
              Quand nous avons cherche une solution rapide et naturelle, voici
              ce que nous avons trouve : des produits trop cliniques qui
              ressemblent a des medicaments. Des brumes contenant de l&apos;alcool
              denature qui dessechent la peau. Des soins haut de gamme a plus de
              50\u20AC avec des listes d&apos;ingredients interminables dont la moitie
              sont des agents de texture.
            </p>
            <p>
              Aucune solution ne combinait efficacite scientifique, naturalite
              irreprochable et elegance au quotidien. Nous avons decide de la
              creer.
            </p>
          </div>
        </div>
      </section>

      {/* La solution Mapause */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
          <p className="tracking-[0.2em] uppercase text-xs text-sage-600">
            Notre reponse
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl mt-4">
            La solution Mapause
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Mapause est nee de la volonte de creer{" "}
              <strong className="text-charcoal">
                la brume parfaite contre les bouffees de chaleur
              </strong>
              . Une formule a triple action, concue par des femmes pour des
              femmes, fabriquee en France.
            </p>
            <p>
              Notre approche repose sur 3 mecanismes scientifiques simultanes :
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sage-600 mt-2.5 shrink-0" />
                <span>
                  <strong className="text-charcoal">Fraicheur immediate (0-10s)</strong>{" "}
                  &mdash; Le Menthyl Lactate et le L-Menthol activent les
                  recepteurs de froid TRPM8 de la peau, declenchant une
                  sensation de fraicheur sans baisser la temperature reelle.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sage-600 mt-2.5 shrink-0" />
                <span>
                  <strong className="text-charcoal">Refroidissement actif (10s-5min)</strong>{" "}
                  &mdash; L&apos;Hamamelis agit comme vasoconstricteur pour
                  reduire le flux sanguin cutane, tandis que l&apos;Aloe Vera
                  amplifie le refroidissement par evaporation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sage-600 mt-2.5 shrink-0" />
                <span>
                  <strong className="text-charcoal">Regulation long terme</strong>{" "}
                  &mdash; La Sauge Sclaree, utilisee depuis des siecles, aide a
                  reduire le cortisol et augmenter la serotonine, contribuant a
                  une regulation hormonale naturelle.
                </span>
              </li>
            </ul>
            <p>
              Notre formule est bio-certifiable, contient plus de 95%
              d&apos;ingredients d&apos;origine naturelle, et est fabriquee en
              France dans le respect des normes les plus strictes.
            </p>
          </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/woman-closeup.png"
              alt="Femme utilisant la brume Mapause"
              width={500}
              height={600}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="tracking-[0.2em] uppercase text-xs text-sage-600 text-center">
            Ce qui nous guide
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-ivory rounded-2xl p-8 border border-sage-100"
              >
                <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl mt-6">
                  {v.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-mist py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-heading)] text-4xl">
            Prete a essayer ?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Decouvrez la brume qui change le quotidien de milliers de femmes.
          </p>
          <Link
            href="/#product"
            className="inline-block mt-8 bg-sage-600 text-white rounded-full px-10 py-4 font-medium hover:bg-sage-700 transition-colors"
          >
            Decouvrir notre brume
          </Link>
        </div>
      </section>
    </>
  );
}
