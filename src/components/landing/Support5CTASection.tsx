import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface Support5CTASectionProps {
  onOpenModal: () => void;
}

export function Support5CTASection({ onOpenModal }: Support5CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-foreground rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Let Us Help You Both
            </h2>
            
            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Join 500+ spouses who found a better way to support their partner's health—without carrying all the weight.
            </p>

            <Button 
              onClick={onOpenModal}
              size="lg"
              className="h-14 px-10 bg-white text-foreground hover:bg-white/90 rounded-xl font-semibold text-base"
            >
              Get Trusted Support
            </Button>

            <p className="text-sm text-white/60 mt-4">
              Compassionate approach • No pressure, just guidance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
