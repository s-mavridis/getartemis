import { useEffect, useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { CancerStatsSection } from "@/components/landing/CancerStatsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { StepsSection, StepItem } from "@/components/landing/StepsSection";
import { TestimonialsSection, TestimonialItem } from "@/components/landing/TestimonialsSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FAQSection, FAQItem } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { LeadCaptureModal } from "@/components/landing/LeadCaptureModal";
import { captureUTMParams, getAdSource } from "@/lib/utm";
import { Shield, Clock, Users, Target } from "lucide-react";

const LANDING_PAGE_SOURCE = "parents";

// Adult Child specific features
const parentsFeatures = [
  {
    icon: Shield,
    title: "We Handle the Analysis",
    description: "No need to research screening options yourself. We analyze your parent's health data and identify the right screenings—done for you.",
    visual: "risk"
  },
  {
    icon: Clock,
    title: "All Screening Options Covered",
    description: "Blood tests, imaging, colonoscopy—we present every option clearly. No chasing down information or comparing providers.",
    visual: "detection"
  },
  {
    icon: Users,
    title: "Stanford Physician Coordination",
    description: "A Stanford-trained physician reviews results and guides your parent through next steps. You don't have to be the medical expert.",
    visual: "experts"
  },
  {
    icon: Target,
    title: "Clear Action Plan",
    description: "Get a concrete screening schedule with specific next steps. No more wondering what to do or when. We handle the coordination.",
    visual: "plans"
  }
];

// Adult Child specific steps
const parentsSteps: StepItem[] = [
  {
    number: 1,
    title: "Start in 15 Minutes",
    description: "Help your parent connect their health records—or we can guide them through it. Quick and secure.",
    visual: "signup"
  },
  {
    number: 2,
    title: "We Analyze Everything",
    description: "Our AI reviews their complete health profile and identifies appropriate screenings. No research required on your end.",
    visual: "connect"
  },
  {
    number: 3,
    title: "Physician Consultation",
    description: "A Stanford-trained physician reviews results directly with your parent—you can join the call or let them handle it.",
    visual: "physician"
  },
  {
    number: 4,
    title: "Screenings Scheduled",
    description: "We help book appropriate screenings with trusted providers. No more chasing appointments or coordinating logistics.",
    visual: "assessment"
  }
];

// Adult Child specific testimonials
const parentsTestimonials: TestimonialItem[] = [
  {
    quote: "I live 3 states away from my dad. Artemis handled everything—the analysis, the physician call, the scheduling. I finally stopped worrying about what I was missing.",
    name: "Sarah Chen",
    role: "Adult Daughter",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "My mom kept putting off screenings. Having a Stanford physician call her directly made all the difference. She actually followed through.",
    name: "Michael Roberts",
    role: "Adult Son",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Between work and kids, I didn't have time to research cancer screenings for my parents. Artemis did it all—I just needed 15 minutes to get them started.",
    name: "Emily Johnson",
    role: "Busy Professional",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The coordination alone was worth it. No more calling around to schedule appointments or figuring out which tests my dad actually needed.",
    name: "David Park",
    role: "Adult Son",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "I used to nag my mom about screenings every visit. Now I just check the Artemis dashboard. She's on track and I'm not the bad guy anymore.",
    name: "Lisa Martinez",
    role: "Adult Daughter",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "My parents are in their 70s and I couldn't be there for every appointment. Having a Stanford physician coordinate their care remotely was a game-changer.",
    name: "James Wilson",
    role: "Long-Distance Caregiver",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "As an oncologist, I see adult children struggling to coordinate their parents' preventive care. Artemis takes that burden off families efficiently.",
    name: "Dr. Amanda Foster",
    role: "Oncologist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "I finally stopped feeling guilty about not doing enough. My parents are getting the screenings they need, and I didn't have to become a medical coordinator.",
    name: "Robert Kim",
    role: "Adult Son",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  }
];

// Adult Child specific FAQs
const parentsFaqs: FAQItem[] = [
  {
    question: "How much time will this take me?",
    answer: "About 15 minutes to get your parent started. After that, we handle the analysis, physician coordination, and scheduling. You can stay involved or let us manage it—your choice.",
  },
  {
    question: "Is my parent's health data secure?",
    answer: "Yes. All data is encrypted end-to-end and HIPAA compliant. Your parent maintains control of their data and can revoke access anytime.",
  },
  {
    question: "What if my parent lives far away?",
    answer: "That's exactly who we built this for. Everything happens remotely—health record connection, physician consultations, and scheduling. We partner with providers nationwide.",
  },
  {
    question: "Will my parent actually follow through?",
    answer: "Having a Stanford physician call them directly makes a big difference. It's not you nagging—it's expert medical guidance. We also handle scheduling and send reminders.",
  },
  {
    question: "What happens after I sign them up?",
    answer: "We'll email secure instructions within 24 hours. Your parent (or you, helping them) connects their health records. Our AI analyzes their data (24-48 hours), then a physician consultation is scheduled to review results and next steps.",
  },
];

const Parents = () => {
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
              <span className="text-5xl sm:text-6xl lg:text-7xl block">We handle it</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl block mt-3 sm:mt-4">so you don't have to chase</span>
            </>
          }
          subheadline="Worried about your parents' cancer screenings? We analyze their health data, coordinate with Stanford physicians, and schedule appropriate screenings. Done for you in 15 minutes."
          ctaText="Get Them Started"
        />
        <CancerStatsSection headerText="Why Screening Matters for Your Parents" />
        <FeaturesSection 
          customFeatures={parentsFeatures}
          headerTitle="Done For You"
          headerSubtitle="No chasing, no scheduling stress. We handle the coordination so you can focus on what matters."
        />
        <StepsSection 
          customSteps={parentsSteps}
          headerTitle="15 minutes to start. We handle the rest."
          headerSubtitle="Get your parents the screening they need without becoming a full-time medical coordinator."
        />
        <TestimonialsSection 
          customTestimonials={parentsTestimonials}
          headerTitle="Adult children like you found relief"
          headerSubtitle="Stop worrying about what you're missing. Let us handle the coordination."
        />
        <FinalCTASection 
          onOpenModal={() => handleOpenModal('final_cta')}
          headline="Take This Off Your Plate"
          subheadline="Join 500+ adult children who stopped chasing and let Artemis handle their parents' screening coordination."
          ctaText="Get Them Started"
          helperText="15 minutes to start • Stanford physician coordination included"
        />
        <FAQSection customFaqs={parentsFaqs} />
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

export default Parents;