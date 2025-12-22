import { useEffect, useState } from "react";
import { Header } from "@/components/landing/Header";
import { Support5HeroSection } from "@/components/landing/Support5HeroSection";
import { Support5FeaturesSection } from "@/components/landing/Support5FeaturesSection";
import { Support5StatsSection } from "@/components/landing/Support5StatsSection";
import { Support5StepsSection } from "@/components/landing/Support5StepsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection, FAQItem } from "@/components/landing/FAQSection";
import { Support5CTASection } from "@/components/landing/Support5CTASection";
import { Footer } from "@/components/landing/Footer";
import { LeadCaptureModal } from "@/components/landing/LeadCaptureModal";
import { captureUTMParams, getAdSource } from "@/lib/utm";

const LANDING_PAGE_SOURCE = "support5";

// Spouse specific FAQs (reusing from Support page)
const supportFaqs: FAQItem[] = [
  {
    question: "How do I get my partner to use this?",
    answer: "You can sign up on their behalf (we'll reach out gently) or simply share this page with them. Our approach is compassionate and informative, not pushy. Many reluctant partners respond better to neutral medical guidance than to spouse pressure.",
  },
  {
    question: "Is their health data secure?",
    answer: "Absolutely. All data is encrypted end-to-end and HIPAA compliant. Their information stays private—even from you, unless they choose to share it.",
  },
  {
    question: "What if they're really resistant to medical stuff?",
    answer: "Our physicians are trained to work with avoidant patients. They use a compassionate, no-pressure approach. Sometimes having a neutral third party makes all the difference.",
  },
  {
    question: "Will this put pressure on our relationship?",
    answer: "The opposite, usually. You're no longer the one pushing—we are. Many couples find it actually reduces conflict around health conversations because there's a neutral expert involved.",
  },
  {
    question: "What happens after I sign up?",
    answer: "We'll reach out to your partner (or you, if you prefer) within 24 hours with a gentle, informative message. If they engage, we guide them through health record connection and schedule a physician consultation. Everything is at their pace.",
  },
];

const Support5 = () => {
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
        <FAQSection customFaqs={supportFaqs} />
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

export default Support5;
