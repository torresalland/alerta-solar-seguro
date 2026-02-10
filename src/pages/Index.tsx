import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import LeadForm from "@/components/LeadForm";
import PageFooter from "@/components/PageFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <LeadForm />
      </main>
      <PageFooter />
    </div>
  );
};

export default Index;
