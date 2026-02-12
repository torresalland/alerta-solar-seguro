import HeroSection from "@/components/HeroSection";
import NormContextSection from "@/components/NormContextSection";
import ComparisonSection from "@/components/ComparisonSection";
import TechnicalClarification from "@/components/TechnicalClarification";
import FaqSection from "@/components/FaqSection";
import LeadForm from "@/components/LeadForm";
import PageFooter from "@/components/PageFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <ComparisonSection />
        <TechnicalClarification />
        <NormContextSection />
        <FaqSection />
        <LeadForm />
      </main>
      <PageFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
