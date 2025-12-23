import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Share2, GraduationCap, ShieldCheck } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getAdSource } from "@/lib/utm";

interface HeroSectionProps {
  onOpenModal: () => void;
  heroEmail: string;
  onHeroEmailChange: (email: string) => void;
  landingPageSource?: string;
  headline?: React.ReactNode;
  subheadline?: string;
  ctaText?: string;
  promoText?: string;
}

export function HeroSection({ 
  onOpenModal, 
  heroEmail, 
  onHeroEmailChange,
  landingPageSource = 'home',
  headline,
  subheadline = "We identify your risk based on your health data. Give you concierge access to Stanford physicians, to guide you through next steps and get screened.",
  ctaText = "Join Waitlist",
  promoText
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const timeLeft = video.duration - video.currentTime;
      // Fade out during the last 2 seconds
      if (timeLeft < 2) {
        setVideoOpacity(timeLeft / 2);
      } else if (video.currentTime < 2) {
        // Fade in during the first 2 seconds
        setVideoOpacity(video.currentTime / 2);
      } else {
        setVideoOpacity(1);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  // Save email when clicking Join Waitlist (before opening modal)
  const saveEmailOnly = async (email: string) => {
    if (!email) return;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return;

    try {
      const adSource = getAdSource();
      
      // Use secure RPC function to upsert lead (bypasses RLS safely)
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
    // Save email immediately when user clicks Join Waitlist
    await saveEmailOnly(heroEmail);
    // Then open the modal
    onOpenModal();
  };

  return (
    <section className="relative min-h-[70vh] sm:min-h-screen overflow-hidden">
      {/* Hero background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: videoOpacity }}
      >
        <source 
          src="https://videos.pexels.com/video-files/3127278/3127278-hd_1920_1080_24fps.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Gradient overlay - mobile (fades to cream) */}
      <div 
        className="absolute inset-0 sm:hidden" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.4) 85%, rgba(247,246,242,0.7) 92%, rgb(247,246,242) 98%, rgb(247,246,242) 100%)'
        }}
      />
      
      {/* Gradient overlay - desktop (fades to cream) */}
      <div 
        className="absolute inset-0 hidden sm:block" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.25) 52%, rgba(0,0,0,0.3) 60%, rgba(247,246,242,0.4) 66%, rgba(247,246,242,0.8) 74%, rgb(247,246,242) 82%)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Main headline */}
          <motion.h1 
            className="font-display font-bold leading-tight tracking-tight text-white text-center mb-8 sm:mb-10 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {headline || (
              <>
                <span className="text-5xl sm:text-6xl lg:text-7xl block">Know your cancer risk,</span>
                <span className="text-3xl sm:text-4xl lg:text-5xl block mt-3 sm:mt-4">get screened</span>
              </>
            )}
          </motion.h1>

          {/* Service highlight - Primary value prop */}
          <motion.div 
            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-5 mb-8 sm:mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-white text-base sm:text-lg drop-shadow-md">Personalized Cancer Risk Score + Screening Navigation</p>
              <p className="text-white/80 text-sm sm:text-base">Based on medical history, family history & lifestyle</p>
            </div>
          </motion.div>

          {/* Promo text */}
          {promoText && (
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-amber-300 font-semibold max-w-2xl mb-6 sm:mb-10 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              ✨ {promoText}
            </motion.p>
          )}

          {/* Email input with button */}
          <motion.form 
            onSubmit={handleSubmit}
            className="w-full max-w-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-stretch bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-full p-2 shadow-lg gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your email address"
                value={heroEmail}
                onChange={(e) => onHeroEmailChange(e.target.value)}
                className="flex-1 w-full px-4 sm:px-6 py-3 h-12 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base text-center sm:text-left rounded-xl sm:rounded-none"
              />
              <Button 
                type="submit"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto h-12 uppercase tracking-wider text-xs font-semibold rounded-xl sm:rounded-full"
              >
                {ctaText}
              </Button>
            </div>
          </motion.form>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-white/90 mb-12 sm:mb-16 lg:mb-20 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Stanford-Founded</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Expert avatars */}
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face" 
                  alt="Expert" 
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face" 
                  alt="Expert" 
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face" 
                  alt="Expert" 
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                />
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-foreground text-card flex items-center justify-center text-[9px] sm:text-[10px] font-semibold">
                  +97
                </div>
              </div>
              <span>Validated by 100+ Experts</span>
            </div>
          </motion.div>

          {/* Phone mockup with fade effect - hidden on very small screens */}
          <motion.div
            className="relative w-full max-w-[220px] sm:max-w-[280px] lg:max-w-xs mx-auto hidden sm:block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Phone frame - realistic iPhone style */}
            <div className="relative">
              {/* Outer phone body with subtle gradient */}
              <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[2.8rem] p-[10px]">
                {/* Side buttons - volume */}
                <div className="absolute left-[-2px] top-24 w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute left-[-2px] top-36 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute left-[-2px] top-52 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                {/* Power button */}
                <div className="absolute right-[-2px] top-32 w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />
                
                {/* Screen bezel */}
                <div className="bg-black rounded-[2.2rem] p-[2px] overflow-hidden">
                  {/* Screen content */}
                  <div className="bg-[#faf9f7] rounded-[2.1rem] overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="relative flex items-center justify-center pt-3 pb-2 bg-[#faf9f7]">
                      <div className="w-[90px] h-[28px] bg-black rounded-full flex items-center justify-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a]" />
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="px-5 pb-8 pt-2 space-y-5 min-h-[340px] bg-[#faf9f7]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-[hsl(16,85%,55%)] rounded-md flex items-center justify-center">
                            <Share2 className="w-3 h-3 text-white" />
                          </div>
                          <h3 className="text-xl font-display font-semibold text-[#1a1a1a]">Artemis</h3>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#f0ede8] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#7a7a7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-[11px] text-[#999] uppercase tracking-[0.2em] font-medium">Risk Assessment</p>
                      
                      {/* Completed task card */}
                      <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-left">
                        <div className="flex items-start gap-3.5">
                          <div className="w-7 h-7 rounded-full bg-[#4ade80] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(74,222,128,0.4)] mt-0.5">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-[#1a1a1a] text-[15px]">Initial Screening</span>
                              <span className="text-[11px] text-[#999] bg-[#f5f3f0] px-2.5 py-1 rounded-lg font-medium flex-shrink-0">Feb 20</span>
                            </div>
                            <p className="text-[13px] text-[#888] mt-0.5">Artemis Analysis</p>
                            <span className="inline-flex items-center gap-1.5 text-[11px] bg-[#dcfce7] text-[#15803d] px-2.5 py-1 rounded-lg font-semibold mt-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                              Completed
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pending task */}
                      <div className="bg-white/70 rounded-2xl p-4 text-left">
                        <div className="flex items-center gap-3.5">
                          <div className="w-7 h-7 rounded-full border-2 border-[#e0dcd5] flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-medium text-[#999] text-[15px]">Follow-up Review</span>
                              <span className="text-[11px] text-[#aaa] bg-[#f5f3f0] px-2.5 py-1 rounded-lg font-medium flex-shrink-0">Mar 15</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Clean fade overlay - matches cream page background */}
            <div 
              className="absolute -bottom-1 -left-1 -right-1 h-40 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgb(247,246,242) 0%, rgb(247,246,242) 50%, transparent 100%)'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
