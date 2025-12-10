import { ShieldCheck, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HowItWorksSectionProps {
  onOpenModal: () => void;
}

const steps = [
  {
    step: "01",
    icon: ShieldCheck,
    title: "Share Your Health History",
    description: "Securely connect your medical records or answer a 5-minute questionnaire. We analyze your family history, past diagnoses, medications, and lifestyle factors.",
  },
  {
    step: "02",
    icon: Brain,
    title: "Get Your Risk Profile",
    description: "Our AI identifies elevated risks for 15+ cancers and chronic diseases that standard guidelines might miss—including those without population-wide screening programs.",
  },
  {
    step: "03",
    icon: Target,
    title: "Access the Right Tests",
    description: "Receive specific screening recommendations with direct connections to providers. No more guessing what tests you need or navigating insurance alone.",
  },
];

export function HowItWorksSection({ onOpenModal }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="section-spacing bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Three Steps to Personalized Screening
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed to help you track and understand your health to make informed decisions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-card rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 group">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="hero" size="lg" onClick={onOpenModal}>
            Start Your Assessment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}