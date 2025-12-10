import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  const handleClick = () => {
    console.log("cta_clicked", { location: "final_cta", timestamp: new Date().toISOString() });
    onOpenModal();
  };

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
            className="text-3xl md:text-4xl lg:text-5xl font-display mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join 500+ People Getting Early Access
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              onClick={handleClick}
              variant="hero"
              size="lg"
              className="uppercase tracking-wider text-xs font-semibold px-8 mb-4"
            >
              Get Early Access
            </Button>
            <p className="text-sm text-muted-foreground">
              Takes 2 minutes • Results in 24-48 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
