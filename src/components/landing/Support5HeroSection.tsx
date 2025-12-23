import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getAdSource } from "@/lib/utm";

interface Support5HeroSectionProps {
  onOpenModal: () => void;
  heroEmail: string;
  onHeroEmailChange: (email: string) => void;
  landingPageSource?: string;
  promoText?: string;
}

export function Support5HeroSection({ 
  onOpenModal, 
  heroEmail, 
  onHeroEmailChange,
  landingPageSource = 'support5',
  promoText
}: Support5HeroSectionProps) {
  
  const saveEmailOnly = async (email: string) => {
    if (!email) return;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return;

    try {
      const adSource = getAdSource();
      
      await supabase.rpc("upsert_lead", {
        p_email: email,
        p_ad_source: adSource,
        p_ehr_consent_given: false,
        p_ehr_consent_timestamp: null,
        p_email_only: true,
        p_landing_page_source: landingPageSource,
      });
      
      console.log('hero_email_captured', { email_only: true });
    } catch (error) {
      console.error("Error capturing email:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveEmailOnly(heroEmail);
    onOpenModal();
  };

  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Rating badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/70 text-amber-400/70'}`} 
                  />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.7/5</span>
              <span className="text-muted-foreground">(127 reviews)</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              We coordinate their cancer screening for you
            </h1>

            {/* Service highlight - Primary value prop */}
            <div className="flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-6 max-w-lg">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">Personalized Cancer Risk Score + Screening Navigation</p>
                <p className="text-foreground/80 text-base">Based on medical history, family history & lifestyle</p>
              </div>
            </div>

            {/* Promo text */}
            {promoText && (
              <p className="text-sm sm:text-base text-accent font-medium mb-8 max-w-lg">
                {promoText}
              </p>
            )}

            {!promoText && <div className="mb-4" />}

            {/* CTA Button + Rating */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button 
                onClick={onOpenModal}
                className="h-auto py-4 px-8 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book a call
              </Button>
              
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 sm:gap-12">
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">500+</p>
                  <span className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground">Families helped</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">24hr</p>
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground">Response time</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">100%</p>
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground">HIPAA Secure</p>
              </div>
            </div>
          </motion.div>

          {/* Right content - Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Video container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-[3/4]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=1200&fit=crop&q=80"
              >
                <source src="/videos/hero-pexels-8878321.mp4" type="video/mp4" />
              </video>
              
              {/* Floating audio/call indicator */}
              <div className="absolute bottom-6 right-6 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <div className="flex gap-0.5">
                  <div className="w-1 h-4 bg-white rounded-full animate-pulse" />
                  <div className="w-1 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <div className="w-1 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
