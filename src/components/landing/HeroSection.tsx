import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span className="text-sm text-muted-foreground">Stanford-backed healthcare platform</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] tracking-tight">
              Access personalized<br />
              <span className="italic">cancer screening</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              ArtemisAI makes trusted care simple, giving you direct access to personalized risk assessments and the right screening tests.
            </p>
            
            {/* CTA with rating */}
            <div className="flex flex-wrap items-center gap-6">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={onOpenModal}
              >
                Get Your Assessment
              </Button>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5/5 (2,739)</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-border">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display">15+</span>
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Cancer types analyzed</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display">70+</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Expert validations</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display">500+</span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Early access users</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right visual - Doctor/Medical image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-4xl overflow-hidden bg-gradient-to-br from-muted to-background">
              {/* Abstract medical visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  viewBox="0 0 400 500" 
                  className="w-full h-full p-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circles */}
                  <circle cx="200" cy="250" r="150" fill="hsl(16, 85%, 55%)" opacity="0.1" />
                  <circle cx="200" cy="250" r="100" fill="hsl(16, 85%, 55%)" opacity="0.15" />
                  
                  {/* DNA helix representation */}
                  <path 
                    d="M120,100 Q200,150 280,100 Q200,50 120,100" 
                    stroke="hsl(16, 85%, 55%)" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.6"
                  />
                  <path 
                    d="M120,150 Q200,100 280,150 Q200,200 120,150" 
                    stroke="hsl(16, 85%, 55%)" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.6"
                  />
                  
                  {/* Central shield icon */}
                  <g transform="translate(140, 180)">
                    <path 
                      d="M60,20 L100,40 L100,80 Q100,120 60,140 Q20,120 20,80 L20,40 Z" 
                      fill="hsl(16, 85%, 55%)"
                      opacity="0.8"
                    />
                    <path 
                      d="M45,75 L55,85 L80,60" 
                      stroke="white" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>
                  
                  {/* Floating data points */}
                  <circle cx="100" cy="350" r="8" fill="hsl(16, 85%, 55%)" opacity="0.6">
                    <animate attributeName="cy" values="350;340;350" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="380" r="6" fill="hsl(142, 76%, 36%)" opacity="0.6">
                    <animate attributeName="cy" values="380;370;380" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="150" r="5" fill="hsl(217, 91%, 60%)" opacity="0.6">
                    <animate attributeName="cy" values="150;160;150" dur="2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Network lines */}
                  <line x1="100" y1="350" x2="180" y2="300" stroke="hsl(16, 85%, 55%)" strokeWidth="1" opacity="0.2" />
                  <line x1="300" y1="380" x2="220" y2="320" stroke="hsl(16, 85%, 55%)" strokeWidth="1" opacity="0.2" />
                  <line x1="320" y1="150" x2="260" y2="200" stroke="hsl(16, 85%, 55%)" strokeWidth="1" opacity="0.2" />
                </svg>
              </div>
              
              {/* Floating card */}
              <motion.div 
                className="absolute bottom-8 right-8 bg-card rounded-2xl shadow-lg p-4"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Risk Status</p>
                    <p className="text-sm font-medium">Low Risk</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}