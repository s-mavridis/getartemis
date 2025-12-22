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
}

export function Support5HeroSection({ 
  onOpenModal, 
  heroEmail, 
  onHeroEmailChange,
  landingPageSource = 'support5'
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Stanford Healthcare Support
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              You don't have to carry this alone
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg">
              Worried about a partner who avoids health conversations? Stanford physicians provide the neutral medical guidance that helps reluctant loved ones take action.
            </p>

            {/* CTA Button + Rating */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button 
                onClick={onOpenModal}
                className="h-auto py-4 px-8 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book a call
              </Button>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-foreground font-semibold">5/5</span>
                <span className="text-muted-foreground">(500+)</span>
              </div>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] sm:h-[500px] lg:h-[560px] object-cover"
                poster="https://images.pexels.com/videos/5794025/pexels-photo-5794025.jpeg?auto=compress&cs=tinysrgb&w=800"
              >
                <source 
                  src="https://videos.pexels.com/video-files/5794025/5794025-hd_1080_1920_25fps.mp4" 
                  type="video/mp4" 
                />
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
