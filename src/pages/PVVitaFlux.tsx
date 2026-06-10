import { useEffect } from "react";
import { useTikTokPixel } from "@/hooks/useTikTokPixel";
import Header from "@/components/pv-vitaflux/Header";
import Hero from "@/components/pv-vitaflux/Hero";
import BenefitsSection from "@/components/pv-vitaflux/BenefitsSection";
import IngredientsSection from "@/components/pv-vitaflux/IngredientsSection";
import TestimonialsSection from "@/components/pv-vitaflux/TestimonialsSection";
import PricingSection from "@/components/pv-vitaflux/PricingSection";
import FAQSection from "@/components/pv-vitaflux/FAQSection";
import Footer from "@/components/pv-vitaflux/Footer";

const PVVitaFlux = () => {
  useTikTokPixel();

  useEffect(() => {
    document.title = "Vita Flux";
  }, []);

  return (
    <div className="theme-vitaflux min-h-screen bg-brand-dark">
      <Header />
      <Hero />
      <BenefitsSection />
      <IngredientsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default PVVitaFlux;
