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

const LANDING_PAGE_SOURCE = "optimize";

// Health Optimizer specific features
const optimizerFeatures = [
  {
    icon: Shield,
    title: "Complete Risk Stratification",
    description: "Add cancer risk to your health metrics. Our AI analyzes genetic markers, biomarkers, and lifestyle data to fill the blind spot in your health protocol.",
    visual: "risk"
  },
  {
    icon: Clock,
    title: "All Screening Modalities",
    description: "Blood-based multi-cancer tests, whole body MRI, colonoscopy, and more. We're test-agnostic—you see every protocol option available.",
    visual: "detection"
  },
  {
    icon: Users,
    title: "Stanford-Validated Algorithms",
    description: "Risk models validated by 70+ oncologists and screening specialists. Precision medicine meets comprehensive data analysis.",
    visual: "experts"
  },
  {
    icon: Target,
    title: "Personalized Protocol",
    description: "Custom screening schedules based on YOUR data—not population averages. Direct physician consultation included for protocol optimization.",
    visual: "plans"
  }
];

// Health Optimizer specific steps
const optimizerSteps: StepItem[] = [
  {
    number: 1,
    title: "Connect Your Data",
    description: "Securely link your EHR, wearables, and lab results. We integrate with major health platforms.",
    visual: "signup"
  },
  {
    number: 2,
    title: "AI Risk Stratification",
    description: "Our algorithms analyze your complete health profile to identify unmeasured cancer risk factors.",
    visual: "connect"
  },
  {
    number: 3,
    title: "Stanford Physician Review",
    description: "15-minute protocol consultation with a Stanford-trained physician to review your risk profile and screening options.",
    visual: "physician"
  },
  {
    number: 4,
    title: "Execute Your Protocol",
    description: "Schedule recommended screenings with our partner providers. Track completion and results in one place.",
    visual: "assessment"
  }
];


// Health Optimizer specific FAQs
const optimizerFaqs: FAQItem[] = [
  {
    question: "How is this different from asking ChatGPT about my health?",
    answer: "ChatGPT doesn't have access to your biomarkers, genetic data, or medical history. We analyze YOUR actual health data to provide precise risk stratification—not generic population statistics. Plus, we connect you directly to screening providers.",
  },
  {
    question: "Is my health data secure?",
    answer: "Yes. Your data is encrypted end-to-end and we follow all HIPAA regulations. We integrate with your existing health platforms securely. You maintain full control and can revoke access anytime.",
  },
  {
    question: "Will insurance cover the recommended tests?",
    answer: "Many tests are covered when you have documented risk factors. We help navigate insurance pre-authorization and provide transparent pricing for out-of-pocket options when needed.",
  },
  {
    question: "How does this integrate with my existing health tracking?",
    answer: "We complement your existing health stack. Connect your EHR, wearable data, and lab results. Our risk assessment becomes another data point in your comprehensive health protocol.",
  },
  {
    question: "What happens after I sign up?",
    answer: "You'll receive secure instructions to connect your health data within 24 hours. Our AI analyzes your complete profile (24-48 hours), then you'll receive your risk stratification report and personalized screening protocol.",
  },
];

const Optimize = () => {
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
              <span className="text-3xl sm:text-4xl lg:text-5xl block mt-3 sm:mt-4">Complete your health protocol</span>
            </>
          }
          subheadline="You track sleep, HRV, glucose, and fitness—but cancer risk remains a blind spot. Complete your health protocol with AI-powered risk stratification and Stanford physician guidance."
          ctaText="Complete My Protocol"
        />
        <CancerStatsSection headerText="The Unmeasured Risk in Your Protocol" />
        <FeaturesSection 
          customFeatures={optimizerFeatures}
          headerTitle="Complete Your Health Protocol"
          headerSubtitle="Precision risk stratification to fill the gap in your optimized health system."
        />
        <StepsSection 
          customSteps={optimizerSteps}
          headerTitle="Integrate in 4 simple steps."
          headerSubtitle="Add comprehensive cancer screening to your existing health protocol."
        />
        <TestimonialsSection />
        <FinalCTASection 
          onOpenModal={() => handleOpenModal('final_cta')}
          headline="Complete Your Protocol"
          subheadline="Join 500+ health optimizers who've added cancer risk to their measured metrics."
          ctaText="Get Risk Stratification"
          helperText="Takes 15 minutes • Comprehensive risk report in 48 hours"
        />
        <FAQSection customFaqs={optimizerFaqs} />
      </main>
      
      <Footer />
      
      <LeadCaptureModal 
        open={isModalOpen} 
        onOpenChange={handleModalClose}
        prefilledEmail={heroEmail}
        landingPageSource={LANDING_PAGE_SOURCE}
        title="Complete Your Health Protocol"
        description="Add cancer risk to your measured metrics. We'll email you secure instructions to connect your health data within 24 hours. Your personalized risk stratification report follows in 48 hours."
        submitButtonText="Complete My Protocol"
      />
    </div>
  );
};

export default Optimize;