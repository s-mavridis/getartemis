import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Background gradient box */}
          <div className="gradient-hero rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative wave */}
            <div className="absolute inset-0 wave-lines opacity-30" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero-text mb-4">
                Stop Guessing.{" "}
                <span className="italic">Start Screening.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the 500+ people getting early access to personalized cancer prevention.
              </p>
              
              <Button 
                variant="heroLight" 
                size="lg" 
                onClick={onOpenModal} 
                className="mb-6"
              >
                Get Your Risk Assessment
              </Button>
              
              <p className="text-sm text-white/60">
                Takes 2 minutes • No credit card required • Results in 24-48 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}