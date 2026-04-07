import { CheckCircle2, XCircle } from "lucide-react";

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
      <CheckCircle2 size={18} />
      {note && <span className="text-xs">({note})</span>}
    </span>
  ) : (
    <span className="inline-flex items-center text-rose-gold">
      <XCircle size={18} />
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
          Pourquoi Mapause est differente
        </h2>

        <div className="overflow-x-auto mt-12">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-sage-600 text-white rounded-t-2xl">
                <th className="text-left py-4 px-6 rounded-tl-2xl font-medium">
                  Critere
                </th>
                <th className="py-4 px-6 font-bold text-center">MAPAUSE</th>
                <th className="py-4 px-6 font-medium text-center">
                  No7 (Boots)
                </th>
                <th className="py-4 px-6 font-medium text-center rounded-tr-2xl">
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
                  <td className="py-4 px-6 text-center bg-sage-50/60">
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
