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

            {/* Email form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={heroEmail}
                  onChange={(e) => onHeroEmailChange(e.target.value)}
                  className="flex-1 px-5 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <Button 
                  type="submit"
                  className="h-auto py-4 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Support
                </Button>
              </div>
            </form>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-foreground font-semibold">5/5</span>
              <span className="text-muted-foreground">(500+ families helped)</span>
            </div>
          </motion.div>

          {/* Right content - Doctor image with card overlay */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main doctor image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop&crop=face" 
                alt="Stanford physician ready to help"
                className="w-full h-[400px] sm:h-[500px] lg:h-[560px] object-cover"
              />
              
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

            {/* Stats cards */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-border">
                <p className="text-xl sm:text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Families helped</p>
              </div>
              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-border">
                <p className="text-xl sm:text-2xl font-bold text-accent">24hr</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Response time</p>
              </div>
              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-border">
                <p className="text-xl sm:text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">HIPAA Secure</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
