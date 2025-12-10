import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onOpenModal();
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Warm gradient background that fades into cream */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,30%,90%)] via-[hsl(38,25%,93%)] to-background" />
      
      <div className="relative container-wide pt-32 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-border/50 text-sm text-foreground/80">
              Coming Soon
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get early access
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're getting close. Sign up to get early access to ArtemisAI and start your personalized cancer screening journey.
          </motion.p>

          {/* Email input with button */}
          <motion.form 
            onSubmit={handleSubmit}
            className="w-full max-w-lg mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border/30">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <Button 
                type="submit"
                variant="hero"
                size="lg"
                className="uppercase tracking-wider text-xs font-semibold"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.form>

          {/* Phone mockup with fade effect */}
          <motion.div
            className="relative w-full max-w-xs mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Phone frame - realistic iPhone style */}
            <div className="relative">
              {/* Outer phone body with subtle gradient */}
              <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[2.8rem] p-[10px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
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
                    <div className="px-5 pb-8 pt-2 space-y-4 min-h-[340px] bg-[#faf9f7]">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-[#1a1a1a]">My Health</h3>
                        <div className="w-8 h-8 rounded-full bg-[#e8e4df] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#6b6b6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-[10px] text-[#8a8a8a] uppercase tracking-[0.15em] font-medium">Risk Assessment</p>
                      
                      {/* Completed task card */}
                      <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#f0ede8]">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 mt-0.5 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-[#1a1a1a] text-sm">Initial Screening</span>
                              <span className="text-[10px] text-[#8a8a8a] bg-[#f5f3f0] px-2 py-1 rounded-md font-medium flex-shrink-0">Feb 20</span>
                            </div>
                            <p className="text-xs text-[#6b6b6b] mt-1">ArtemisAI Analysis</p>
                            <span className="inline-flex items-center gap-1.5 text-[10px] bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded-md font-medium mt-2">
                              <span className="w-1 h-1 rounded-full bg-[#22c55e]" />
                              Completed
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pending task */}
                      <div className="bg-white/60 rounded-2xl p-4 border border-[#f0ede8]/50">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 mt-0.5 rounded-full border-2 border-[#d4d0c8] flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-medium text-[#6b6b6b] text-sm">Follow-up Review</span>
                              <span className="text-[10px] text-[#8a8a8a] bg-[#f5f3f0] px-2 py-1 rounded-md font-medium flex-shrink-0">Mar 15</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fade overlay - extends below phone */}
            <div className="absolute -bottom-4 -left-8 -right-8 h-56 bg-gradient-to-t from-background from-30% via-background/90 via-50% to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
