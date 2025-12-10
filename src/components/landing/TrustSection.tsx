import { GraduationCap, FlaskConical, Lock } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: GraduationCap,
    title: "Stanford-Founded",
    description: "Built by researchers and physicians from Stanford Medicine and Stanford GSB.",
  },
  {
    icon: FlaskConical,
    title: "Expert-Validated",
    description: "70+ interviews with oncologists and screening providers at leading cancer centers.",
  },
  {
    icon: Lock,
    title: "HIPAA Compliant",
    description: "Your health data is encrypted end-to-end and never shared without explicit consent.",
  },
];

export function TrustSection() {
  return (
    <section className="section-spacing bg-card">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display leading-tight">
            Backed by <span className="italic">science</span>
          </h2>
        </motion.div>
        
        {/* Trust items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-background rounded-3xl p-8 h-full">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-secondary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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