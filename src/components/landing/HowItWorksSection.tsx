import { ShieldCheck, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HowItWorksSectionProps {
  onOpenModal: () => void;
}

const steps = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Share Your Health History",
    description: "Securely connect your medical records or answer a 5-minute questionnaire. We analyze your family history, past diagnoses, medications, and lifestyle factors.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Get Your Risk Profile",
    description: "Our AI identifies elevated risks for 15+ cancers and chronic diseases that standard guidelines might miss—including those without population-wide screening programs.",
  },
  {
    number: "03",
    icon: Target,
    title: "Access the Right Tests",
    description: "Receive specific screening recommendations with direct connections to providers. No more guessing what tests you need or navigating insurance alone.",
  },
];

export function HowItWorksSection({ onOpenModal }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="section-spacing">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider">HJ® — How It Works</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 leading-tight">
            What ArtemisAI<br />actually means
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            ArtemisAI connects you with personalized screening, diagnostics, and care plans that actually improve outcomes.
          </p>
        </motion.div>
        
        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-card rounded-3xl p-8 border border-border hover:border-secondary/30 transition-colors">
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Step {step.number}
                  </span>
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-secondary" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-display mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
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