import { HeroSection } from "@/components/home/hero-section";
import { TrustBanner } from "@/components/home/trust-banner";
import { ProblemSection } from "@/components/home/problem-section";
import { ProductSection } from "@/components/home/product-section";
import { MechanismSection } from "@/components/home/mechanism-section";
import { IngredientsPreview } from "@/components/home/ingredients-preview";
import { ComparisonSection } from "@/components/home/comparison-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBanner />
      <ProblemSection />
      <ProductSection />
      <MechanismSection />
      <IngredientsPreview />
      <ComparisonSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
