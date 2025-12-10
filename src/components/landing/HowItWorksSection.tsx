import { ShieldCheck, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface HowItWorksSectionProps {
  onOpenModal: () => void;
}

const steps = [
  {
    icon: ShieldCheck,
    title: "Share Your Health History",
    description: "Securely connect your medical records or answer a 5-minute questionnaire. We analyze your family history, past diagnoses, medications, and lifestyle factors.",
  },
  {
    icon: Brain,
    title: "Get Your Risk Profile",
    description: "Our AI identifies elevated risks for 15+ cancers and chronic diseases that standard guidelines might miss—including those without population-wide screening programs.",
  },
  {
    icon: Target,
    title: "Access the Right Tests",
    description: "Receive specific screening recommendations with direct connections to providers. No more guessing what tests you need or navigating insurance alone.",
  },
];

export function HowItWorksSection({ onOpenModal }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="section-spacing bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three Steps to Personalized Screening
          </h2>
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
              <Card className="h-full border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-8">
                  <step.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
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
