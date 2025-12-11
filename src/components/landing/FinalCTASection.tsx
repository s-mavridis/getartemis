import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-foreground rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't Wait for Symptoms
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base text-gray-300 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            86% of cancers are found by accident. Join 500+ people taking control with personalized screening.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              onClick={onOpenModal}
              variant="secondary"
              size="lg"
              className="mt-6 w-full sm:w-auto sm:min-w-[200px] h-12 px-8 text-sm sm:text-base font-semibold bg-white text-slate-900 hover:bg-gray-100"
            >
              Get Early Access
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-xs sm:text-sm text-gray-400 mt-3"
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
