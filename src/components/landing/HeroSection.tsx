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
            className="relative w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Phone frame */}
            <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-card rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-card relative">
                  <span className="text-sm font-semibold text-foreground">9:41</span>
                  <div className="absolute left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-full" />
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                    </svg>
                    <svg className="w-6 h-4" viewBox="0 0 24 14" fill="currentColor">
                      <rect x="0" y="0" width="22" height="14" rx="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <rect x="2" y="2" width="16" height="10" rx="1.5" fill="currentColor"/>
                      <rect x="23" y="4" width="1" height="6" rx="0.5" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                
                {/* App content */}
                <div className="px-5 py-4 space-y-4 min-h-[320px]">
                  <h3 className="text-2xl font-semibold text-foreground">My health</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Risk Assessment</p>
                  
                  {/* Task card */}
                  <div className="bg-muted/60 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-foreground">Initial Screening</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-lg font-medium">Feb 20</span>
                    </div>
                    <p className="text-sm text-muted-foreground">ArtemisAI Analysis</p>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-lg font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Completed
                    </span>
                  </div>
                  
                  {/* Another task */}
                  <div className="bg-muted/40 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30" />
                        <span className="font-medium text-muted-foreground">Follow-up Review</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-lg font-medium">Mar 15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fade overlay at bottom */}
            <div className="absolute -bottom-1 left-0 right-0 h-48 bg-gradient-to-t from-background from-20% via-background/95 via-40% to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
