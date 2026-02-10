import HeroSection from "@/components/HeroSection";
import EducationalSection from "@/components/EducationalSection";
import FaqSection from "@/components/FaqSection";
import LeadForm from "@/components/LeadForm";
import PageFooter from "@/components/PageFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <EducationalSection />
        <FaqSection />
        <LeadForm />
      </main>
      <PageFooter />
    </div>
  );
};

export default Index;
