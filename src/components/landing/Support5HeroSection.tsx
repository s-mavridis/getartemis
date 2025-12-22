import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getAdSource } from "@/lib/utm";
import { useRef, useState, useEffect } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0.4);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      if (currentTime <= 2) {
        setVideoOpacity(0.2 + (currentTime / 2) * 0.2);
      } else {
        setVideoOpacity(0.4);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);
  
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoOpacity }}
        >
          <source 
            src="https://videos.pexels.com/video-files/7579840/7579840-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full" />
            Stanford Healthcare Support
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight mb-6"
          >
            You don't have to carry this alone
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Worried about a partner who avoids health conversations? Stanford physicians provide the neutral medical guidance that helps reluctant loved ones take action.
          </motion.p>

          {/* Email form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="mb-8 max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={heroEmail}
                onChange={(e) => onHeroEmailChange(e.target.value)}
                className="flex-1 px-5 py-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <Button 
                type="submit"
                className="h-auto py-4 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Support
              </Button>
            </div>
          </motion.form>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold">5/5</span>
            <span className="text-muted-foreground">(500+ families helped)</span>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Families helped</p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50">
              <p className="text-2xl sm:text-3xl font-bold text-accent">24hr</p>
              <p className="text-sm text-muted-foreground">Response time</p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">HIPAA Secure</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
