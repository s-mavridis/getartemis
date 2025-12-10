import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Sky blue gradient background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative wave lines */}
      <div className="absolute inset-0 wave-lines opacity-50" />
      
      {/* Flowing wave SVG at bottom */}
      <svg 
        className="absolute bottom-0 left-0 right-0 w-full h-auto"
        viewBox="0 0 1440 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,100 C360,150 720,50 1080,100 C1260,125 1380,110 1440,100 L1440,200 L0,200 Z" 
          fill="rgba(255,255,255,0.1)"
        />
        <path 
          d="M0,120 C360,170 720,70 1080,120 C1260,145 1380,130 1440,120 L1440,200 L0,200 Z" 
          fill="rgba(255,255,255,0.05)"
        />
      </svg>
      
      {/* Rounded container effect */}
      <div className="absolute inset-x-4 top-4 bottom-0 rounded-t-3xl overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-wide pt-32 pb-16 min-h-screen flex flex-col justify-center items-center text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-hero-text leading-tight">
            Modern Cancer Screening,{" "}
            <span className="italic">Delivered Personally.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            If you have a family history, genetic risk, or concerning symptoms but don't qualify for standard screening—you're not alone. We identify your personalized cancer risks and connect you to the right tests.
          </p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="heroLight" 
              size="lg" 
              onClick={onOpenModal}
              className="min-w-[200px]"
            >
              Get Started Free
            </Button>
          </motion.div>
          
          {/* Trust badges */}
          <motion.p 
            className="text-sm text-white/60 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Built by Stanford researchers • Validated against 70+ medical experts • HIPAA compliant
          </motion.p>
        </motion.div>
        
        {/* Phone mockup visual */}
        <motion.div
          className="mt-12 md:mt-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative mx-auto w-[280px] md:w-[320px]">
            {/* Phone frame */}
            <div className="bg-slate-800 rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-slate-100 px-6 py-3 flex justify-between items-center text-xs">
                  <span className="font-medium text-slate-600">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-slate-400 rounded-sm" />
                    <div className="w-4 h-2 bg-slate-400 rounded-sm" />
                    <div className="w-6 h-3 bg-slate-600 rounded-sm" />
                  </div>
                </div>
                
                {/* App content */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Good Morning 👋</p>
                      <p className="font-display font-semibold text-slate-800">Your Health</p>
                    </div>
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                      <span className="text-sky-600 font-semibold text-sm">JD</span>
                    </div>
                  </div>
                  
                  {/* Risk assessment card */}
                  <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl p-4 text-white">
                    <p className="text-xs opacity-80">Your Risk Profile</p>
                    <p className="text-2xl font-display font-bold mt-1">Low Risk</p>
                    <p className="text-xs mt-2 opacity-70">Last updated: Today</p>
                  </div>
                  
                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-cream-100 rounded-xl p-3">
                      <p className="text-xs text-slate-500">Screenings</p>
                      <p className="font-semibold text-slate-800">3 Due</p>
                    </div>
                    <div className="bg-cream-100 rounded-xl p-3">
                      <p className="text-xs text-slate-500">Next Test</p>
                      <p className="font-semibold text-slate-800">In 2 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating cards around phone */}
            <motion.div 
              className="absolute -left-16 top-1/4 bg-white rounded-2xl shadow-xl p-3 hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500">Status</p>
                  <p className="text-sm font-semibold text-slate-800">Connected</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -right-12 top-1/2 bg-white rounded-2xl shadow-xl p-3 hidden md:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <p className="text-xs text-slate-500">Risk Score</p>
                <p className="text-xl font-display font-bold text-sky-600">92</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}