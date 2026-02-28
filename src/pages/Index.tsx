import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ProblemSection from "@/components/ProblemSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import PageFooter from "@/components/PageFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-primary/20 bg-white">
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
