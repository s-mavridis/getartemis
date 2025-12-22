import { motion } from "framer-motion";
import { Share2, Database, Stethoscope, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Share2,
    title: "Share This Page",
    description: "Send Artemis to your partner, or sign up yourself. We'll reach out with a gentle, informative approach—no pressure.",
  },
  {
    number: 2,
    icon: Database,
    title: "Health Data Analysis",
    description: "If they connect their records, our AI analyzes their health profile. If not, we can still provide general guidance based on their age and risk factors.",
  },
  {
    number: 3,
    icon: Stethoscope,
    title: "Physician Conversation",
    description: "A compassionate Stanford physician discusses screening options directly with your partner. It's medical guidance, not a lecture.",
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Their Choice, Supported",
    description: "We help schedule screenings they're comfortable with. Progress happens at their pace—with professional support.",
  }
];

export function Support5StepsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">How it works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Trusted support in 4 gentle steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A compassionate approach that respects your partner's autonomy while providing professional guidance.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5 mt-2">
                <step.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{step.description}</p>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
