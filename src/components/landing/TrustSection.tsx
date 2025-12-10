import { GraduationCap, FlaskConical, Lock } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: GraduationCap,
    title: "Stanford-Founded",
    description: "Built by researchers and physicians from Stanford Medicine and Stanford GSB. Our founders previously scaled diagnostics at McKinsey and led cancer biology research at Cambridge.",
    image: "🎓",
  },
  {
    icon: FlaskConical,
    title: "Expert-Validated",
    description: "70+ interviews with oncologists, liquid biopsy scientists, and screening providers at GRAIL, Exact Sciences, Freenome, and leading cancer centers.",
    image: "🔬",
  },
  {
    icon: Lock,
    title: "HIPAA Compliant",
    description: "Your health data is encrypted end-to-end and never shared without explicit consent. We follow all HIPAA regulations and industry best practices.",
    image: "🔒",
  },
];

export function TrustSection() {
  return (
    <section className="section-spacing bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Why Trust Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Backed by Science, Built for You
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-background rounded-3xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-6">{item.image}</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}