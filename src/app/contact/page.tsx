"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending (no backend yet)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message envoye avec succes ! Nous vous repondrons sous 24-48h ouvrees.");
    setFormData({ nom: "", email: "", sujet: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <h1 className="font-[var(--font-heading)] text-4xl lg:text-5xl text-[#2D2926] mb-12">
        Nous Contacter
      </h1>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl text-[#2D2926] mb-4">
              Informations
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <p className="font-medium text-[#2D2926]">Email</p>
                <a
                  href="mailto:contact@mapause.fr"
                  className="text-[#7E8C69] underline hover:text-[#7E8C69]/80"
                >
                  contact@mapause.fr
                </a>
              </div>
              <div>
                <p className="font-medium text-[#2D2926]">Delai de reponse</p>
                <p>24-48h ouvrees</p>
              </div>
              <div>
                <p className="font-medium text-[#2D2926]">Adresse</p>
                <p>MAPAUSE SAS</p>
                <p>[adresse a completer]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-[#2D2926] mb-1.5"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className="w-full rounded-md border border-[#E8EDE3] bg-white px-4 py-2.5 text-sm text-[#2D2926] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7E8C69]/40 focus:border-[#7E8C69]"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#2D2926] mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-[#E8EDE3] bg-white px-4 py-2.5 text-sm text-[#2D2926] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7E8C69]/40 focus:border-[#7E8C69]"
                placeholder="votre@email.fr"
              />
            </div>

            <div>
              <label
                htmlFor="sujet"
                className="block text-sm font-medium text-[#2D2926] mb-1.5"
              >
                Sujet
              </label>
              <select
                id="sujet"
                name="sujet"
                required
                value={formData.sujet}
                onChange={handleChange}
                className="w-full rounded-md border border-[#E8EDE3] bg-white px-4 py-2.5 text-sm text-[#2D2926] focus:outline-none focus:ring-2 focus:ring-[#7E8C69]/40 focus:border-[#7E8C69]"
              >
                <option value="" disabled>
                  Choisir un sujet
                </option>
                <option value="produit">Question sur le produit</option>
                <option value="commande">Ma commande</option>
                <option value="retour">Retour / Remboursement</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#2D2926] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-[#E8EDE3] bg-white px-4 py-2.5 text-sm text-[#2D2926] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7E8C69]/40 focus:border-[#7E8C69] resize-vertical"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-[#7E8C69] px-6 py-3 text-sm font-medium text-white hover:bg-[#7E8C69]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>

      {/* FAQ shortcut */}
      <div className="mt-16 pt-8 border-t border-[#E8EDE3] text-center">
        <p className="text-muted-foreground">
          Consultez peut-etre d&apos;abord notre{" "}
          <Link
            href="/faq"
            className="text-[#7E8C69] underline hover:text-[#7E8C69]/80 font-medium"
          >
            FAQ
          </Link>{" "}
          pour trouver rapidement une reponse a votre question.
        </p>
      </div>
    </div>
  );
}
