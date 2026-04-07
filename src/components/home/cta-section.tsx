"use client";

export function CtaSection() {
  return (
    <section className="bg-[#1A1A1A] py-20 lg:py-28 text-center text-white">
      <div className="max-w-screen-md mx-auto px-6">
        <p className="tracking-[0.3em] uppercase text-xs text-white/40">
          Aura de Mapause
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mt-6 leading-tight">
          Vous meritez de traverser chaque journee avec serenite
        </h2>
        <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-lg mx-auto">
          Une brumisation. La chaleur s&apos;efface. Vous reprenez le controle.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#1A1A1A] hover:bg-white/90 rounded-full px-12 py-4 text-lg font-medium transition-colors"
          >
            Decouvrir Aura — 19,90&euro;
          </button>
          <p className="text-white/40 text-sm">
            Livraison offerte des 45&euro; · Satisfaite ou remboursee 30 jours
          </p>
        </div>
      </div>
    </section>
  );
}
