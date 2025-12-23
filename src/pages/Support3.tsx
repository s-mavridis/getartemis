import { useEffect, useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { CancerStatsSection } from "@/components/landing/CancerStatsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { StepsSection, StepItem } from "@/components/landing/StepsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FAQSection, FAQItem } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { LeadCaptureModal } from "@/components/landing/LeadCaptureModal";
import { captureUTMParams, getAdSource } from "@/lib/utm";
import { trackPageView, trackCTAClick, trackHeroEmailEntered, trackModalClosed } from "@/lib/analytics";
import { Shield, Clock, Users, Target } from "lucide-react";

const LANDING_PAGE_SOURCE = "support3";

// Spouse specific features
const supportFeatures = [
  {
    icon: Shield,
    title: "Neutral Medical Guidance",
    description: "When it comes from a doctor, it's different. Our Stanford physicians provide the medical authority that helps reluctant partners take action—without you having to push.",
    visual: "risk"
  },
  {
    icon: Clock,
    title: "Every Screening Option",
    description: "Blood tests, imaging, colonoscopy—we present all options clearly and objectively. Your partner can choose what feels right for them.",
    visual: "detection"
  },
  {
    icon: Users,
    title: "Stanford Physician Support",
    description: "A compassionate Stanford-trained physician talks directly to your partner. You don't have to be the one delivering medical advice anymore.",
    visual: "experts"
  },
  {
    icon: Target,
    title: "Clear, Gentle Path Forward",
    description: "We provide a clear screening plan without pressure. Your partner gets the information they need to make their own informed decision.",
    visual: "plans"
  }
];

// Spouse specific steps
const supportSteps: StepItem[] = [
  {
    number: 1,
    title: "Share This Page",
    description: "Send Artemis to your partner, or sign up yourself. We'll reach out with a gentle, informative approach—no pressure.",
    visual: "signup"
  },
  {
    number: 2,
    title: "Health Data Analysis",
    description: "If they connect their records, our AI analyzes their health profile. If not, we can still provide general guidance based on their age and risk factors.",
    visual: "connect"
  },
  {
    number: 3,
    title: "Physician Conversation",
    description: "A compassionate Stanford physician discusses screening options directly with your partner. It's medical guidance, not a lecture.",
    visual: "physician"
  },
  {
    number: 4,
    title: "Their Choice, Supported",
    description: "We help schedule screenings they're comfortable with. Progress happens at their pace—with professional support.",
    visual: "assessment"
  }
];


// Spouse specific FAQs
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

const Support3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroEmail, setHeroEmail] = useState("");

  useEffect(() => {
    captureUTMParams();
    const adSource = getAdSource();
    trackPageView(LANDING_PAGE_SOURCE, adSource);
  }, []);

  const handleOpenModal = (location: 'hero' | 'nav' | 'final_cta') => {
    trackCTAClick(location, LANDING_PAGE_SOURCE);
    setIsModalOpen(true);
  };

  const handleHeroEmailChange = (email: string) => {
    if (email && !heroEmail) {
      trackHeroEmailEntered(LANDING_PAGE_SOURCE);
    }
    setHeroEmail(email);
  };

  const handleModalClose = (completed: boolean) => {
    trackModalClosed(completed, LANDING_PAGE_SOURCE);
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
          landingPageSource={LANDING_PAGE_SOURCE}
          headline={
            <>
              <span className="text-5xl sm:text-6xl lg:text-7xl block">We help you</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl block mt-3 sm:mt-4">get them screened</span>
            </>
          }
          subheadline="Worried about a partner who avoids health conversations? We take the pressure off you. Stanford physicians provide the neutral medical guidance that helps reluctant loved ones take action."
          ctaText="Get Support Now"
          promoText="Join the waitlist for early access and a 50% launch discount."
        />
        <CancerStatsSection headerText="Why This Matters for Your Family" />
        <FeaturesSection 
          customFeatures={supportFeatures}
          headerTitle="We Take the Pressure Off"
          headerSubtitle="Neutral medical authority that helps reluctant partners take action—without you being the bad guy."
        />
        <StepsSection 
          customSteps={supportSteps}
          headerTitle="Trusted support in 4 gentle steps."
          headerSubtitle="A compassionate approach that respects your partner's autonomy while providing professional guidance."
        />
        <TestimonialsSection />
        <FinalCTASection 
          onOpenModal={() => handleOpenModal('final_cta')}
          headline="Let Us Help You Both"
          subheadline="Join 500+ spouses who found a better way to support their partner's health—without carrying all the weight."
          ctaText="Get Trusted Support"
          helperText="Compassionate approach • No pressure, just guidance"
        />
        <FAQSection customFaqs={supportFaqs} />
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

export default Support3;
