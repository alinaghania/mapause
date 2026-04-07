export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <h1 className="font-[var(--font-heading)] text-4xl lg:text-5xl text-[#2D2926] mb-2">
        Politique de Confidentialite
      </h1>
      <p className="text-sm text-muted-foreground mb-12">
        Derniere mise a jour : 7 avril 2026
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        1. Responsable du traitement
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Le responsable du traitement des donnees personnelles collectees sur le
        site mapause.fr est la societe MAPAUSE SAS, [adresse a completer],
        immatriculee au RCS [a completer], SIRET [a completer]. Pour toute
        question relative a la protection de vos donnees personnelles, vous
        pouvez nous contacter a l&apos;adresse{" "}
        <a
          href="mailto:dpo@mapause.fr"
          className="text-[#7E8C69] underline hover:text-[#7E8C69]/80"
        >
          dpo@mapause.fr
        </a>
        .
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        2. Donnees collectees
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Dans le cadre de votre utilisation du site et de vos commandes, nous
        sommes amenes a collecter les donnees personnelles suivantes :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
        <li>Nom et prenom</li>
        <li>Adresse email</li>
        <li>Adresse postale (livraison et facturation)</li>
        <li>Numero de telephone</li>
        <li>
          Donnees de paiement (traitees directement par notre prestataire de
          paiement Stripe ; MAPAUSE n&apos;a jamais acces a vos numeros de carte
          bancaire)
        </li>
      </ul>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        3. Finalites du traitement
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Vos donnees personnelles sont collectees et traitees pour les finalites
        suivantes :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
        <li>Gestion et suivi des commandes</li>
        <li>Livraison des produits</li>
        <li>Service client et gestion des reclamations</li>
        <li>Envoi de la newsletter et d&apos;offres promotionnelles (uniquement si vous y avez consenti)</li>
        <li>Amelioration de nos services et de l&apos;experience utilisateur</li>
      </ul>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        4. Base legale du traitement
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Le traitement de vos donnees repose sur les bases legales suivantes :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
        <li>
          <strong>Execution du contrat :</strong> traitement necessaire a la
          gestion de vos commandes et a la livraison des produits
        </li>
        <li>
          <strong>Consentement :</strong> envoi de la newsletter et
          communications marketing
        </li>
        <li>
          <strong>Interet legitime :</strong> amelioration de nos services,
          prevention de la fraude et securite du site
        </li>
        <li>
          <strong>Obligation legale :</strong> conservation des factures et
          donnees de facturation
        </li>
      </ul>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        5. Destinataires des donnees
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Vos donnees personnelles sont susceptibles d&apos;etre communiquees aux
        destinataires suivants :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
        <li>Les equipes internes de MAPAUSE (service client, logistique)</li>
        <li>
          <strong>Stripe</strong> : prestataire de paiement securise, pour le
          traitement de vos transactions
        </li>
        <li>
          <strong>Transporteur</strong> : pour l&apos;acheminement de vos commandes
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed mt-4">
        Vos donnees ne sont jamais vendues ni cedees a des tiers a des fins
        commerciales.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        6. Duree de conservation
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Vos donnees personnelles sont conservees pendant les durees suivantes :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
        <li>
          <strong>Donnees clients :</strong> 3 ans a compter de la derniere
          commande
        </li>
        <li>
          <strong>Donnees prospects :</strong> 3 ans a compter du dernier contact
        </li>
        <li>
          <strong>Donnees de facturation :</strong> 10 ans (obligation legale
          comptable)
        </li>
      </ul>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        7. Vos droits
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Conformement au Reglement General sur la Protection des Donnees (RGPD)
        et a la loi Informatique et Libertes, vous disposez des droits suivants
        sur vos donnees personnelles :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
        <li><strong>Droit d&apos;acces :</strong> obtenir la confirmation que des donnees vous concernant sont traitees et en obtenir une copie</li>
        <li><strong>Droit de rectification :</strong> faire corriger des donnees inexactes ou incompletes</li>
        <li><strong>Droit a l&apos;effacement :</strong> demander la suppression de vos donnees dans les cas prevus par la reglementation</li>
        <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure et lisible par machine</li>
        <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donnees pour des motifs legitimes</li>
        <li><strong>Droit a la limitation :</strong> demander la limitation du traitement de vos donnees</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed mt-4">
        Pour exercer vos droits, contactez-nous a l&apos;adresse{" "}
        <a
          href="mailto:dpo@mapause.fr"
          className="text-[#7E8C69] underline hover:text-[#7E8C69]/80"
        >
          dpo@mapause.fr
        </a>
        . Nous nous engageons a repondre a votre demande dans un delai d&apos;un mois.
      </p>
      <p className="text-muted-foreground leading-relaxed mt-4">
        Vous disposez egalement du droit d&apos;introduire une reclamation aupres de
        la Commission Nationale de l&apos;Informatique et des Libertes (CNIL) :{" "}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7E8C69] underline hover:text-[#7E8C69]/80"
        >
          www.cnil.fr
        </a>
        .
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        8. Transferts hors UE
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Certaines de vos donnees peuvent etre transferees en dehors de l&apos;Union
        europeenne, notamment vers les Etats-Unis, dans le cadre de nos
        prestataires Stripe (paiement) et Vercel (hebergement). Ces transferts
        sont encadres par les clauses contractuelles types adoptees par la
        Commission europeenne, garantissant un niveau de protection adequat de
        vos donnees personnelles.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        9. Securite
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        MAPAUSE met en oeuvre des mesures techniques et organisationnelles
        appropriees pour proteger vos donnees personnelles contre tout acces non
        autorise, modification, divulgation ou destruction. L&apos;ensemble des
        echanges de donnees entre votre navigateur et notre site est chiffre via
        le protocole SSL/TLS. Les donnees de paiement sont traitees dans un
        environnement securise certifie PCI-DSS par notre prestataire Stripe.
      </p>

      <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mt-12 mb-4">
        10. Modification de la politique
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        La presente Politique de Confidentialite peut etre modifiee a tout
        moment afin de se conformer aux evolutions legislatives et
        reglementaires. En cas de modification substantielle, nous vous en
        informerons par email ou par une notification sur notre site. La date de
        derniere mise a jour est indiquee en haut de cette page.
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
