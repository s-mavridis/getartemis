import { useEffect, useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { CancerStatsSection } from "@/components/landing/CancerStatsSection";
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
  const [heroEmail, setHeroEmail] = useState("");

  useEffect(() => {
    // Capture UTM parameters on page load
    captureUTMParams();
    const adSource = getAdSource();
    console.log('page_view', { ad_source: adSource, timestamp: new Date().toISOString() });
  }, []);

  const handleOpenModal = (location: 'hero' | 'nav' | 'final_cta') => {
    console.log('cta_clicked', { location });
    console.log('modal_opened');
    console.log('modal_email_prefilled', { prefilled: heroEmail.length > 0 });
    setIsModalOpen(true);
  };

  const handleHeroEmailChange = (email: string) => {
    if (email && !heroEmail) {
      console.log('hero_email_entered');
    }
    setHeroEmail(email);
  };

  const handleModalClose = (completed: boolean) => {
    console.log('modal_closed', { completed });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => handleOpenModal('nav')} />
      
      <main>
        <HeroSection 
          onOpenModal={() => handleOpenModal('hero')} 
          heroEmail={heroEmail}
          onHeroEmailChange={handleHeroEmailChange}
          landingPageSource="home"
        />
        <CancerStatsSection />
        <FeaturesSection />
        <StepsSection />
        <TestimonialsSection />
        <FinalCTASection onOpenModal={() => handleOpenModal('final_cta')} />
        <FAQSection />
      </main>
      
      <Footer />
      
      <LeadCaptureModal 
        open={isModalOpen} 
        onOpenChange={handleModalClose}
        prefilledEmail={heroEmail}
        landingPageSource="home"
      />
    </div>
  );
};

export default Index;
