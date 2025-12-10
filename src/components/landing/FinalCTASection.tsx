import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <motion.div
          className="bg-muted rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-display mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join 500+ People Getting Early Access
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take control of your cancer prevention journey today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              onClick={onOpenModal}
              variant="hero"
              size="lg"
              className="mt-6 px-8 py-4 text-base font-semibold"
            >
              Get Early Access
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Takes 2 minutes • Results in 24-48 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
