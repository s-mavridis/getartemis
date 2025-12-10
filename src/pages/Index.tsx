import { useEffect, useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";
import { LeadCaptureModal } from "@/components/landing/LeadCaptureModal";
import { captureUTMParams } from "@/lib/utm";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Capture UTM parameters on page load
    captureUTMParams();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={handleOpenModal} />
      
      <main className="pt-16">
        <HeroSection onOpenModal={handleOpenModal} />
        <HowItWorksSection onOpenModal={handleOpenModal} />
        <ProblemSection />
        <AudienceSection />
        <TrustSection />
        <FAQSection />
        <FinalCTASection onOpenModal={handleOpenModal} />
      </main>
      
      <Footer />
      
      <LeadCaptureModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </div>
  );
};

export default Index;
