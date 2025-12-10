import { useEffect, useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { StepsSection } from "@/components/landing/StepsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { LeadCaptureModal } from "@/components/landing/LeadCaptureModal";
import { captureUTMParams, getAdSource } from "@/lib/utm";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Capture UTM parameters on page load
    captureUTMParams();
    
    // Log page view
    const adSource = getAdSource();
    console.log("page_view", { ad_source: adSource, timestamp: new Date().toISOString() });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={handleOpenModal} />
      
      <main>
        <HeroSection onOpenModal={handleOpenModal} />
        <FeaturesSection />
        <StepsSection />
        <TestimonialsSection />
        <FinalCTASection onOpenModal={handleOpenModal} />
        <FAQSection />
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
