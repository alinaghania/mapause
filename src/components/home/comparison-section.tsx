import { CheckCircle2, XCircle, Star } from "lucide-react";

const rows = [
  {
    feature: "Prix",
    mapause: "19,90\u20AC (50ml)",
    no7: "14,99\u20AC",
    stripes: "38\u20AC (110ml)",
    type: "text" as const,
  },
  {
    feature: "Actifs cibles menopause",
    mapause: true,
    mapauseNote: "Sauge Sclaree",
    no7: false,
    stripes: false,
    type: "bool" as const,
  },
  {
    feature: "Sans alcool",
    mapause: true,
    no7: false,
    stripes: true,
    type: "bool" as const,
  },
  {
    feature: "Sans parfum synthetique",
    mapause: true,
    no7: true,
    stripes: false,
    type: "bool" as const,
  },
  {
    feature: "Triple action (3 mecanismes)",
    mapause: true,
    no7: false,
    stripes: false,
    type: "bool" as const,
  },
  {
    feature: "Made in France",
    mapause: true,
    no7: false,
    stripes: false,
    type: "bool" as const,
  },
  {
    feature: "Bio certifiable",
    mapause: true,
    no7: false,
    stripes: false,
    type: "bool" as const,
  },
];

function BoolCell({ value, note }: { value: boolean; note?: string }) {
  return value ? (
    <span className="inline-flex items-center gap-1.5 text-sage-600">
      <CheckCircle2 className="h-6 w-6" />
      {note && <span className="text-xs">({note})</span>}
    </span>
  ) : (
    <span className="inline-flex items-center text-red-400">
      <XCircle className="h-6 w-6" />
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section className="bg-white">
      <div className="py-20 lg:py-28 px-6 max-w-screen-xl mx-auto">
        <p className="tracking-[0.2em] uppercase text-xs text-sage-600 text-center">
          Comparatif
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
          La difference, c&apos;est la science
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mt-4">
          Pourquoi Mapause est differente
        </p>

        <div className="overflow-x-auto mt-12 rounded-xl overflow-hidden">
          <table className="w-full min-w-[600px] text-base">
            <thead>
              <tr className="bg-sage-700 text-white">
                <th className="text-left py-4 px-6 font-semibold">
                  Critere
                </th>
                <th className="py-4 px-6 font-semibold text-center">
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-current" />
                    MAPAUSE
                  </span>
                </th>
                <th className="py-4 px-6 font-semibold text-center">
                  No7 (Boots)
                </th>
                <th className="py-4 px-6 font-semibold text-center">
                  Stripes
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-white" : "bg-sage-50"}
                >
                  <td className="py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center bg-sage-50 border-l border-r border-sage-200">
                    {row.type === "text" ? (
                      <span className="font-medium">
                        {row.mapause as string}
                      </span>
                    ) : (
                      <BoolCell
                        value={row.mapause as boolean}
                        note={row.mapauseNote}
                      />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.type === "text" ? (
                      row.no7 as string
                    ) : (
                      <BoolCell value={row.no7 as boolean} />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.type === "text" ? (
                      row.stripes as string
                    ) : (
                      <BoolCell value={row.stripes as boolean} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Comparaison basee sur les compositions publiques des produits. Mars
          2026.
        </p>
      </div>
    </section>
  );
}
