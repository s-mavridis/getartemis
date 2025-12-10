import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Share2, GraduationCap, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
  heroEmail: string;
  onHeroEmailChange: (email: string) => void;
}

export function HeroSection({ onOpenModal, heroEmail, onHeroEmailChange }: HeroSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenModal();
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://videos.pexels.com/video-files/5667133/5667133-hd_1920_1080_30fps.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Smoother gradient overlay that fades to cream */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.1) 55%, hsl(38, 25%, 95%) 80%, hsl(38, 25%, 95%) 100%)'
        }}
      />
      
      <div className="relative container-wide pt-32 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Main headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] tracking-tight text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Know your cancer risk
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We identify your risks based on YOUR health data—not generic guidelines—and connect you to the right tests.
          </motion.p>

          {/* Email input with button */}
          <motion.form 
            onSubmit={handleSubmit}
            className="w-full max-w-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-center bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your email address"
                value={heroEmail}
                onChange={(e) => onHeroEmailChange(e.target.value)}
                className="flex-1 w-full sm:w-auto px-6 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-center sm:text-left"
              />
              <Button 
                type="submit"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto uppercase tracking-wider text-xs font-semibold"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.form>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-white/90 mb-16 drop-shadow-md"
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
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face" 
                  alt="Expert" 
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face" 
                  alt="Expert" 
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
                <div className="w-6 h-6 rounded-full border-2 border-white bg-foreground text-card flex items-center justify-center text-[10px] font-semibold">
                  +97
                </div>
              </div>
              <span>Validated by 100+ Experts</span>
            </div>
          </motion.div>

          {/* Phone mockup with fade effect */}
          <motion.div
            className="relative w-full max-w-xs mx-auto"
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
            
            {/* Clean fade overlay - no shadow, just background blend */}
            <div 
              className="absolute -bottom-4 -left-4 -right-4 h-48 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)) 30%, transparent 100%)'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
