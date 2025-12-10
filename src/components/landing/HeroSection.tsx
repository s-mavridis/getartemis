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
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container-wide grid lg:grid-cols-5 gap-12 lg:gap-8 items-center py-16 lg:py-0">
        {/* Left content - 60% */}
        <motion.div 
          className="lg:col-span-3 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Most Cancer Screening Guidelines Weren't Written for You
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            If you have a family history, genetic risk, or concerning symptoms but don't qualify for standard screening—you're not alone. We identify your personalized cancer and chronic disease risks, then connect you to the right tests.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onOpenModal}
              className="w-full sm:w-auto"
            >
              Get Your Risk Assessment
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg" 
              onClick={scrollToHowItWorks}
              className="w-full sm:w-auto"
            >
              See How It Works
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Built by Stanford researchers • Validated against 70+ medical experts • HIPAA compliant
          </p>
        </motion.div>
        
        {/* Right visual - 40% */}
        <motion.div 
          className="lg:col-span-2 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-square relative">
            {/* Abstract medical visualization with SVG */}
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(166, 91%, 32%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(168, 84%, 26%)" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="coralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(24, 94%, 53%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(24, 94%, 53%)" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(224, 58%, 37%)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(224, 58%, 37%)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Background circles */}
              <circle cx="200" cy="200" r="180" fill="url(#tealGradient)" opacity="0.1" />
              <circle cx="200" cy="200" r="140" fill="url(#tealGradient)" opacity="0.15" />
              <circle cx="200" cy="200" r="100" fill="url(#tealGradient)" opacity="0.2" />
              
              {/* DNA helix-inspired curves */}
              <path 
                d="M100,100 Q200,150 300,100 T500,100" 
                stroke="url(#tealGradient)" 
                strokeWidth="3" 
                fill="none"
                opacity="0.6"
              />
              <path 
                d="M100,150 Q200,100 300,150 T500,150" 
                stroke="url(#coralGradient)" 
                strokeWidth="3" 
                fill="none"
                opacity="0.6"
              />
              
              {/* Floating orbs representing data points */}
              <circle cx="150" cy="120" r="20" fill="url(#tealGradient)">
                <animate attributeName="cy" values="120;130;120" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="250" cy="100" r="15" fill="url(#coralGradient)">
                <animate attributeName="cy" values="100;90;100" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="320" cy="150" r="12" fill="url(#blueGradient)">
                <animate attributeName="cy" values="150;160;150" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Central shield/protection symbol */}
              <path 
                d="M200,160 L240,180 L240,230 Q240,270 200,290 Q160,270 160,230 L160,180 Z" 
                fill="url(#tealGradient)"
                opacity="0.8"
              />
              <path 
                d="M185,210 L195,220 L220,195" 
                stroke="white" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              
              {/* Orbiting dots */}
              <circle cx="200" cy="200" r="3" fill="hsl(166, 91%, 32%)">
                <animateTransform 
                  attributeName="transform" 
                  type="rotate" 
                  from="0 200 200" 
                  to="360 200 200" 
                  dur="10s" 
                  repeatCount="indefinite"
                />
                <animate attributeName="cx" values="200;320;200;80;200" dur="10s" repeatCount="indefinite" />
                <animate attributeName="cy" values="80;200;320;200;80" dur="10s" repeatCount="indefinite" />
              </circle>
              
              {/* Network lines */}
              <line x1="100" y1="300" x2="180" y2="260" stroke="hsl(166, 91%, 32%)" strokeWidth="1" opacity="0.3" />
              <line x1="180" y1="260" x2="220" y2="290" stroke="hsl(166, 91%, 32%)" strokeWidth="1" opacity="0.3" />
              <line x1="220" y1="290" x2="300" y2="280" stroke="hsl(166, 91%, 32%)" strokeWidth="1" opacity="0.3" />
              
              {/* Small dots at intersections */}
              <circle cx="100" cy="300" r="4" fill="hsl(24, 94%, 53%)" opacity="0.7" />
              <circle cx="180" cy="260" r="4" fill="hsl(166, 91%, 32%)" opacity="0.7" />
              <circle cx="220" cy="290" r="4" fill="hsl(224, 58%, 37%)" opacity="0.7" />
              <circle cx="300" cy="280" r="4" fill="hsl(24, 94%, 53%)" opacity="0.7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
