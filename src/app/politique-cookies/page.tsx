export default function PolitiqueCookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <h1 className="font-[var(--font-heading)] text-4xl lg:text-5xl text-[#2D2926] mb-2">
        Politique de Cookies
      </h1>
      <p className="text-sm text-muted-foreground mb-12">
        Derniere mise a jour : 7 avril 2026
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        1. Qu&apos;est-ce qu&apos;un cookie ?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Un cookie est un petit fichier texte depose sur votre terminal
        (ordinateur, tablette, smartphone) lors de votre visite sur un site
        internet. Il permet au site de memoriser des informations relatives a
        votre navigation (pages consultees, date et heure de la visite,
        preferences de langue, etc.) afin de faciliter votre prochaine visite et
        de rendre le site plus convivial.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        2. Cookies strictement necessaires
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Ces cookies sont indispensables au fonctionnement du site et ne peuvent
        pas etre desactives. Ils ne necessitent pas votre consentement
        prealable conformement a la reglementation en vigueur.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-muted-foreground border border-[#E8EDE3] mt-4">
          <thead>
            <tr className="bg-[#E8EDE3]">
              <th className="text-left p-3 font-medium text-[#2D2926]">Cookie</th>
              <th className="text-left p-3 font-medium text-[#2D2926]">Finalite</th>
              <th className="text-left p-3 font-medium text-[#2D2926]">Duree</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#E8EDE3]">
              <td className="p-3">Session</td>
              <td className="p-3">Maintien de votre session de navigation</td>
              <td className="p-3">Session</td>
            </tr>
            <tr className="border-t border-[#E8EDE3]">
              <td className="p-3">Panier</td>
              <td className="p-3">Conservation du contenu de votre panier d&apos;achat</td>
              <td className="p-3">7 jours</td>
            </tr>
            <tr className="border-t border-[#E8EDE3]">
              <td className="p-3">Preferences</td>
              <td className="p-3">Memorisation de vos preferences (cookies, langue)</td>
              <td className="p-3">13 mois</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        3. Cookies analytiques
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Ces cookies nous permettent de mesurer l&apos;audience du site et d&apos;analyser
        la maniere dont les visiteurs l&apos;utilisent, afin d&apos;ameliorer nos
        services. Ils necessitent votre consentement prealable.
      </p>
      <p className="text-muted-foreground leading-relaxed italic">
        [A configurer si des outils d&apos;analyse sont ajoutes ulterieurement.
        Aucun cookie analytique n&apos;est actuellement utilise sur le site.]
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        4. Cookies marketing
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Les cookies marketing sont utilises pour suivre les visiteurs a travers
        les sites web afin d&apos;afficher des publicites pertinentes.
        Actuellement, aucun cookie marketing n&apos;est utilise sur le site
        mapause.fr.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        5. Gestion de vos preferences
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Vous pouvez a tout moment gerer vos preferences en matiere de cookies
        de plusieurs manieres :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
        <li>
          <strong>Via le bandeau cookies :</strong> lors de votre premiere visite
          sur le site, un bandeau vous permet d&apos;accepter ou de refuser les
          cookies non essentiels. Vous pouvez modifier vos choix a tout moment
          en cliquant sur le lien &quot;Gerer les cookies&quot; present en pied de page.
        </li>
        <li>
          <strong>Via les parametres de votre navigateur :</strong> la plupart
          des navigateurs vous permettent de gerer les cookies dans leurs
          parametres. Vous pouvez configurer votre navigateur pour refuser tous
          les cookies ou pour etre alerte lorsqu&apos;un cookie est depose.
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed mt-4">
        Attention : la desactivation de certains cookies peut affecter le bon
        fonctionnement du site, notamment la gestion de votre panier d&apos;achat.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        6. Duree de conservation
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Conformement aux recommandations de la CNIL, les cookies sont conserves
        pour une duree maximale de 13 mois a compter de leur depot sur votre
        terminal. Au-dela de cette duree, votre consentement sera de nouveau
        sollicite.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        7. Contact
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Pour toute question relative a notre utilisation des cookies, vous pouvez
        nous contacter a l&apos;adresse{" "}
        <a
          href="mailto:contact@mapause.fr"
          className="text-[#7E8C69] underline hover:text-[#7E8C69]/80"
        >
          contact@mapause.fr
        </a>
        .
      </p>
      <p className="text-muted-foreground leading-relaxed mt-4">
        Pour en savoir plus sur les cookies et vos droits, vous pouvez consulter
        le site de la CNIL :{" "}
        <a
          href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7E8C69] underline hover:text-[#7E8C69]/80"
        >
          www.cnil.fr
        </a>
        .
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
