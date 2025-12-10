import { GraduationCap, FlaskConical, Lock } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: GraduationCap,
    title: "Stanford-Founded",
    description: "Built by researchers and physicians from Stanford Medicine and Stanford GSB. Our founders previously scaled diagnostics at McKinsey and led cancer biology research at Cambridge.",
  },
  {
    icon: FlaskConical,
    title: "Expert-Validated",
    description: "70+ interviews with oncologists, liquid biopsy scientists, and screening providers at GRAIL, Exact Sciences, Freenome, and leading cancer centers.",
  },
  {
    icon: Lock,
    title: "HIPAA Compliant",
    description: "Your health data is encrypted end-to-end and never shared without explicit consent. We follow all HIPAA regulations and industry best practices.",
  },
];

export function TrustSection() {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Backed by Science, Built for You
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <item.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
