import { useEffect, useState } from "react";
import { Header } from "@/components/landing/Header";
import { Support5HeroSection } from "@/components/landing/Support5HeroSection";
import { Support5FeaturesSection } from "@/components/landing/Support5FeaturesSection";
import { Support5StatsSection } from "@/components/landing/Support5StatsSection";
import { Support5StepsSection } from "@/components/landing/Support5StepsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { Support5FAQSection } from "@/components/landing/Support5FAQSection";
import { Support5CTASection } from "@/components/landing/Support5CTASection";
import { Footer } from "@/components/landing/Footer";
import { LeadCaptureModal } from "@/components/landing/LeadCaptureModal";
import { captureUTMParams, getAdSource } from "@/lib/utm";

const LANDING_PAGE_SOURCE = "support6";

const Support6 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroEmail, setHeroEmail] = useState("");

  useEffect(() => {
    captureUTMParams();
    const adSource = getAdSource();
    console.log('page_view', { ad_source: adSource, landing_page: LANDING_PAGE_SOURCE, timestamp: new Date().toISOString() });
  }, []);

  const handleOpenModal = (location: 'hero' | 'nav' | 'final_cta') => {
    console.log('cta_clicked', { location, landing_page: LANDING_PAGE_SOURCE });
    setIsModalOpen(true);
  };

  const handleHeroEmailChange = (email: string) => {
    if (email && !heroEmail) {
      console.log('hero_email_entered', { landing_page: LANDING_PAGE_SOURCE });
    }
    setHeroEmail(email);
  };

  const handleModalClose = (completed: boolean) => {
    console.log('modal_closed', { completed, landing_page: LANDING_PAGE_SOURCE });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => handleOpenModal('nav')} />
      
      <main>
        <Support5HeroSection 
          onOpenModal={() => handleOpenModal('hero')} 
          heroEmail={heroEmail}
          onHeroEmailChange={handleHeroEmailChange}
          landingPageSource={LANDING_PAGE_SOURCE}
        />
        <Support5StatsSection />
        <Support5FeaturesSection />
        <Support5StepsSection />
        <TestimonialsSection />
        <Support5FAQSection onOpenModal={() => handleOpenModal('final_cta')} />
        <Support5CTASection onOpenModal={() => handleOpenModal('final_cta')} />
      </main>
      
      <Footer />
      
      <LeadCaptureModal 
        open={isModalOpen} 
        onOpenChange={handleModalClose}
        prefilledEmail={heroEmail}
        landingPageSource={LANDING_PAGE_SOURCE}
      />
    </div>
  );
};

export default Support6;
