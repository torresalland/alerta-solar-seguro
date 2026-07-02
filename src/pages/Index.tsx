import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ProblemSection from "@/components/ProblemSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import PageFooter from "@/components/PageFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

// Import Stitch Styles and Utils
import "@/styles/stitch-animations.css";
import { initStitchAnimations } from "@/utils/stitch-animations";

const Index = () => {
  useEffect(() => {
    // Timeout garante que o DOM principal (tags header, section) foi montado no browser
    const timer = setTimeout(() => {
      initStitchAnimations();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-primary/20 bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        <HeroSection />
        <ProcessSection />
        <ProblemSection />
        <TargetAudienceSection />
        <TestimonialSection />
        <FaqSection />
      </main>
      <PageFooter />
      {/* Botão Global Obrigatório sendo Preservado Intocável */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
