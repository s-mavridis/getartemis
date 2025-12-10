import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Microscope } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Stanford-Founded",
    description: "Built by researchers and physicians from Stanford Medicine and Stanford GSB.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description: "Your health data is encrypted end-to-end and never shared without explicit consent.",
  },
  {
    icon: Microscope,
    title: "Expert-Validated",
    description: "70+ interviews with oncologists and screening providers at GRAIL, Exact Sciences, and Freenome.",
  },
];

export function FeaturesSection() {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-background" id="services">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Backed by Science,<br />Built for You.
          </motion.h2>
        </motion.div>

        {/* Features grid - 3 cards in single row */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-muted rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300 text-center"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-background" />
                </div>
              </div>

              {/* Text content */}
              <h3 className="text-2xl font-display mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
