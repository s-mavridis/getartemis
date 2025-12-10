import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-teal-50 rounded-2xl p-8 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stop Guessing. Start Screening.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the 500+ people getting early access to personalized cancer prevention.
          </p>
          
          <Button variant="hero" size="lg" onClick={onOpenModal} className="mb-6">
            Get Your Risk Assessment
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Takes 2 minutes • No credit card required • Results in 24-48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
