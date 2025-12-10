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
    <section className="relative min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 overflow-hidden">
      <div className="container-wide pt-32 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-sm text-foreground/80">
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
            className="text-lg md:text-xl text-foreground/70 max-w-lg mb-10"
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
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 bg-transparent text-foreground placeholder:text-foreground/50 focus:outline-none"
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

          {/* Phone mockup */}
          <motion.div
            className="relative w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Phone frame */}
            <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-card rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-card">
                  <span className="text-sm font-medium">9:41</span>
                  <div className="absolute left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-2 bg-foreground rounded-sm" />
                      <div className="w-1 h-3 bg-foreground rounded-sm" />
                      <div className="w-1 h-4 bg-foreground rounded-sm" />
                      <div className="w-1 h-3 bg-foreground/40 rounded-sm" />
                    </div>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                    </svg>
                    <svg className="w-6 h-4" viewBox="0 0 24 16" fill="currentColor">
                      <rect x="0" y="2" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <rect x="2" y="4" width="14" height="8" rx="1" fill="currentColor"/>
                      <rect x="21" y="5" width="2" height="6" rx="1" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                
                {/* App content */}
                <div className="px-5 py-4 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">My health</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Risk Assessment</p>
                  
                  {/* Task card */}
                  <div className="bg-muted/50 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">Initial Screening</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Feb 20</span>
                    </div>
                    <p className="text-sm text-muted-foreground">ArtemisAI Analysis</p>
                    <span className="inline-flex items-center gap-1 text-xs bg-coral-light text-secondary px-2 py-1 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Completed
                    </span>
                  </div>
                  
                  {/* Another task */}
                  <div className="bg-muted/30 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                        <span className="font-medium text-muted-foreground">Follow-up Review</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Mar 15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
