import Link from "next/link";

const testimonials = [
  {
    quote:
      "Je l'ai vaporisee en pleine reunion quand j'ai senti la bouffee monter. En quelques secondes, la fraicheur m'a envahie. Personne n'a rien remarque. C'est devenu mon indispensable au bureau.",
    name: "Marie D.",
    age: 52,
    city: "Lyon",
  },
  {
    quote:
      "Depuis que je l'utilise avant de me coucher, mes sueurs nocturnes ont diminue de moitie. Je me reveille enfin reposee. Mon mari aussi, d'ailleurs !",
    name: "Sophie L.",
    age: 48,
    city: "Paris",
  },
  {
    quote:
      "J'ai essaye beaucoup de produits, mais c'est le seul avec des ingredients vraiment naturels et bio. La Sauge Sclaree fait une vraie difference. Je me sens bien dans ce que j'utilise.",
    name: "Isabelle M.",
    age: 55,
    city: "Bordeaux",
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
  },
  {
    quote:
      "Les premieres semaines, j'appreciais le soulagement instantane. Mais apres un mois d'utilisation reguliere, j'ai constate que mes bouffees etaient moins frequentes. La triple action, c'est reel.",
    name: "Veronique B.",
    age: 57,
    city: "Nantes",
  },
  {
    quote:
      "Le packaging est vraiment magnifique. On dirait un soin de luxe, pas un produit medical. Je suis fiere de le sortir de mon sac. Et le parfum naturel de menthe et sauge est tellement agreable.",
    name: "Anne-Marie G.",
    age: 54,
    city: "Strasbourg",
  },
  {
    quote:
      "Au bureau, je subissais mes bouffees en silence, rouge comme une tomate. Depuis que j'ai Mapause dans mon tiroir, je vaporise discretement et en 10 secondes c'est passe. Mes collegues n'y voient que du feu.",
    name: "Francoise T.",
    age: 59,
    city: "Lille",
  },
  {
    quote:
      "J'hesitais a commander, mais la garantie satisfaite ou remboursee m'a convaincue. Resultat : je n'ai jamais eu a l'utiliser ! La brume est devenue ma meilleure alliee au quotidien.",
    name: "Christine V.",
    age: 51,
    city: "Nice",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 fill-gold text-gold"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function TemoignagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F5F3] py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="tracking-[0.2em] uppercase text-xs text-[#344E41]">
            Temoignages
          </p>
          <h1 className="font-[var(--font-heading)] text-5xl mt-6">
            Ce qu&apos;elles en pensent
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Decouvrez les experiences de nos clientes qui ont adopte Mapause
            dans leur quotidien.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl shadow-sm border border-[#E5E5E5] flex flex-col overflow-hidden"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="italic text-lg leading-relaxed mt-4 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-medium mt-6">
                    {t.name}, {t.age} ans, {t.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F5F3] py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-heading)] text-4xl">
            Rejoignez-les
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Essayez Mapause et partagez votre experience.
          </p>
          <Link
            href="/#product"
            className="inline-block mt-8 bg-[#1A1A1A] text-white rounded-full px-10 py-4 font-medium hover:bg-[#333] transition-colors"
          >
            Commander maintenant
          </Link>
        </div>
      </section>
    </>
  );
}
