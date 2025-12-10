import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [email, setEmail] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Countdown timer state - set to 21 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 23,
    minutes: 57,
    seconds: 51
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onOpenModal();
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100"
        style={{ y: backgroundY }}
      />
      
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
      />
      
      {/* Content */}
      <motion.div 
        className="relative container-wide pt-32 pb-16"
        style={{ y: contentY, opacity }}
      >
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

          {/* Phone mockup with parallax */}
          <motion.div
            className="relative w-full max-w-sm mx-auto mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
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

          {/* Countdown timer */}
          <motion.div
            className="flex items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINUTES" },
              { value: timeLeft.seconds, label: "SECONDS" },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/40 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/40">
                    <span className="text-3xl md:text-4xl font-display text-foreground">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs text-foreground/60 mt-2 tracking-wider">{item.label}</span>
                </div>
                {index < 3 && (
                  <span className="text-2xl md:text-3xl text-foreground/40 font-light">:</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
