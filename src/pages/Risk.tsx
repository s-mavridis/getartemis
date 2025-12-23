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
import { Shield, Clock, Users, Target } from "lucide-react";

const LANDING_PAGE_SOURCE = "risk";

// Self-Concerned specific features
const riskFeatures = [
  {
    icon: Shield,
    title: "Personalized Risk Assessment",
    description: "Your concerns are valid. We analyze your family history, genetics, and health data to give you clarity—not generic statistics that may not apply to you.",
    visual: "risk"
  },
  {
    icon: Clock,
    title: "All Screening Options",
    description: "Blood tests, whole body MRI, colonoscopy, and more. We show you every screening option available so you can make informed decisions with your doctor.",
    visual: "detection"
  },
  {
    icon: Users,
    title: "Stanford Physician Guidance",
    description: "You're not alone in this. Every assessment includes a consultation with a Stanford-trained physician who understands your concerns.",
    visual: "experts"
  },
  {
    icon: Target,
    title: "Clear Next Steps",
    description: "No more uncertainty. Get a personalized screening plan with specific recommendations based on YOUR risk profile, not generic guidelines.",
    visual: "plans"
  }
];

// Self-Concerned specific steps
const riskSteps: StepItem[] = [
  {
    number: 1,
    title: "Share Your Health History",
    description: "Securely connect your health records. We take your family history and concerns seriously.",
    visual: "signup"
  },
  {
    number: 2,
    title: "Understand Your Risk",
    description: "Our AI analyzes your unique profile to give you clarity about your actual risk—not worst-case scenarios.",
    visual: "connect"
  },
  {
    number: 3,
    title: "Talk to a Stanford Physician",
    description: "15-minute consultation with a Stanford-trained physician who will listen to your concerns and guide you calmly through your options.",
    visual: "physician"
  },
  {
    number: 4,
    title: "Take Calm, Early Action",
    description: "Schedule appropriate screenings based on your risk profile. Know what to do and when—no more uncertainty.",
    visual: "assessment"
  }
];


// Self-Concerned specific FAQs
const riskFaqs: FAQItem[] = [
  {
    question: "Is it normal to be worried about cancer?",
    answer: "Absolutely. Especially if you have family history or know someone who's been diagnosed. Your concerns are valid, and taking proactive steps is smart—not overreacting. Many people like you use Artemis to get clarity and peace of mind.",
  },
  {
    question: "Is my health data secure?",
    answer: "Yes. Your data is encrypted end-to-end and we follow all HIPAA regulations. We understand this is sensitive information, and we treat it with the utmost care. You can revoke access anytime.",
  },
  {
    question: "Will I get scary results?",
    answer: "Our goal is clarity, not fear. You'll receive a clear risk assessment with actionable recommendations. Most people find that understanding their actual risk—rather than imagining worst-case scenarios—actually reduces anxiety.",
  },
  {
    question: "What if I find out I'm high risk?",
    answer: "Early detection saves lives. If you have elevated risk, you'll have a Stanford physician to guide you through appropriate screening options. Knowledge is power—it means you can take calm, early action.",
  },
  {
    question: "What happens after I sign up?",
    answer: "We'll email you within 24 hours with secure instructions to connect your health records. After our AI analyzes your data (24-48 hours), you'll receive your personalized risk assessment and a physician consultation to discuss next steps.",
  },
];

const Risk = () => {
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
        <HeroSection 
          onOpenModal={() => handleOpenModal('hero')} 
          heroEmail={heroEmail}
          onHeroEmailChange={handleHeroEmailChange}
          landingPageSource={LANDING_PAGE_SOURCE}
          headline={
            <>
              <span className="text-5xl sm:text-6xl lg:text-7xl block">Know your cancer risk.</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl block mt-3 sm:mt-4">Catch cancer early</span>
            </>
          }
          subheadline="Whether it's family history or a friend's recent diagnosis—your concern is valid. We help you understand your actual risk and take calm, early action with Stanford physician guidance."
          ctaText="Get Clarity Now"
        />
        <CancerStatsSection headerText="Why Many People Like You Are Concerned" />
        <FeaturesSection 
          customFeatures={riskFeatures}
          headerTitle="Clarity Over Fear"
          headerSubtitle="Replace worry with understanding. Get personalized insights based on your actual health data."
        />
        <StepsSection 
          customSteps={riskSteps}
          headerTitle="From worry to clarity in 4 steps."
          headerSubtitle="A calm, supportive process to understand your risk and take appropriate action."
        />
        <TestimonialsSection />
        <FinalCTASection 
          onOpenModal={() => handleOpenModal('final_cta')}
          headline="Get the Clarity You Deserve"
          subheadline="Join 500+ people who replaced worry with understanding. Your concerns are valid—now let's address them."
          ctaText="Start My Assessment"
          helperText="Calm process • Stanford physician consultation included"
        />
        <FAQSection customFaqs={riskFaqs} />
      </main>
      
      <Footer />
      
      <LeadCaptureModal 
        open={isModalOpen} 
        onOpenChange={handleModalClose}
        prefilledEmail={heroEmail}
        landingPageSource={LANDING_PAGE_SOURCE}
        title="Get Clarity About Your Risk"
        description="Your concerns are valid. We'll analyze your health data to give you clarity—not fear. Join our early access program and we'll email you secure connection instructions within 24 hours."
        submitButtonText="Get Clarity Now"
      />
    </div>
  );
};

export default Risk;