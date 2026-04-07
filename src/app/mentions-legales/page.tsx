export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <h1 className="font-[var(--font-heading)] text-4xl lg:text-5xl text-[#2D2926] mb-2">
        Mentions Legales
      </h1>
      <p className="text-sm text-muted-foreground mb-12">
        Derniere mise a jour : 7 avril 2026
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        1. Editeur du site
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-2">
        <p>Le site mapause.fr est edite par :</p>
        <ul className="list-none space-y-1 pl-0">
          <li><strong>Raison sociale :</strong> MAPAUSE SAS</li>
          <li><strong>Adresse du siege social :</strong> [adresse a completer]</li>
          <li><strong>RCS :</strong> [a completer]</li>
          <li><strong>SIRET :</strong> [a completer]</li>
          <li><strong>Capital social :</strong> [a completer]</li>
          <li><strong>Numero de TVA intracommunautaire :</strong> [a completer]</li>
          <li>
            <strong>Email :</strong>{" "}
            <a
              href="mailto:contact@mapause.fr"
              className="text-[#7E8C69] underline hover:text-[#7E8C69]/80"
            >
              contact@mapause.fr
            </a>
          </li>
          <li><strong>Telephone :</strong> [a completer]</li>
          <li><strong>Directeur de la publication :</strong> [a completer]</li>
        </ul>
      </div>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        2. Hebergeur
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-2">
        <p>Le site mapause.fr est heberge par :</p>
        <ul className="list-none space-y-1 pl-0">
          <li><strong>Raison sociale :</strong> Vercel Inc.</li>
          <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
          <li>
            <strong>Site web :</strong>{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7E8C69] underline hover:text-[#7E8C69]/80"
            >
              https://vercel.com
            </a>
          </li>
        </ul>
      </div>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        3. Propriete intellectuelle
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        L&apos;ensemble des contenus du site mapause.fr (textes, images,
        photographies, logos, marques, graphismes, videos, sons, logiciels, mise
        en page, base de donnees) est protege par les dispositions du Code de la
        propriete intellectuelle et par les conventions internationales en
        vigueur.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Toute reproduction, representation, modification, publication,
        distribution, retransmission, ou exploitation commerciale de tout ou
        partie des elements du site, sans l&apos;autorisation ecrite et prealable de
        MAPAUSE, est strictement interdite et constitue une contrefacon
        sanctionnee par les articles L.335-2 et suivants du Code de la propriete
        intellectuelle.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        4. Limitation de responsabilite
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        MAPAUSE s&apos;efforce d&apos;assurer l&apos;exactitude et la mise a jour des
        informations diffusees sur le site. Toutefois, MAPAUSE ne garantit pas
        l&apos;exactitude, la precision ou l&apos;exhaustivite des informations mises a
        disposition sur le site.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        MAPAUSE ne saurait etre tenue responsable des dommages directs ou
        indirects pouvant resulter de l&apos;acces au site ou de l&apos;utilisation des
        informations qu&apos;il contient, y compris l&apos;inaccessibilite, les pertes de
        donnees, les deteriorations, les destructions ou les virus qui
        pourraient affecter l&apos;equipement informatique de l&apos;utilisateur.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        5. Liens hypertextes
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Le site mapause.fr peut contenir des liens hypertextes vers d&apos;autres
        sites internet. MAPAUSE n&apos;exerce aucun controle sur le contenu de ces
        sites tiers et decline toute responsabilite quant a leur contenu ou aux
        eventuels traitements de donnees personnelles qu&apos;ils operent.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        La mise en place de liens hypertextes vers le site mapause.fr est
        autorisee sans accord prealable, sous reserve que ces liens ne portent
        pas atteinte a l&apos;image de MAPAUSE.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        6. Droit applicable
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Les presentes mentions legales sont soumises au droit francais. En cas de
        litige, les tribunaux francais seront seuls competents.
      </p>

      <div className="mt-16 pt-8 border-t border-[#E8EDE3]">
        <p className="text-sm text-muted-foreground">
          MAPAUSE SAS, [adresse a completer], RCS [a completer], SIRET [a
          completer]
        </p>
      </div>
    </div>
  );
}
