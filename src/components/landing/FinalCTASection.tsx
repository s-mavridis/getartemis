import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  return (
    <section className="section-spacing bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6">
            Stop guessing.<br /><span className="italic">Start screening.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Join the 500+ people getting early access to personalized cancer prevention.
          </p>
          
          <Button variant="hero" size="lg" onClick={onOpenModal}>
            Get Your Risk Assessment
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Takes 2 minutes • No credit card required • Results in 24-48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}