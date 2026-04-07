export function AnnouncementBar() {
  const messages = [
    "Livraison offerte des 45EUR d'achat",
    "Fabrique en France avec amour",
    "Satisfaite ou remboursee - 30 jours",
    "Formule 100% naturelle & bio",
  ];

  return (
    <div className="relative h-9 overflow-hidden bg-[#344E41]">
      <div className="flex h-full items-center animate-marquee whitespace-nowrap">
        {[...messages, ...messages].map((msg, i) => (
          <span
            key={i}
            className="mx-8 text-xs tracking-wide text-white"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
