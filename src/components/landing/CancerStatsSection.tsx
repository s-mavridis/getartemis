import { motion } from "framer-motion";
import { Droplet, Scan, Activity } from "lucide-react";

const stats = [
  {
    number: "86%",
    label: "of cancers are found accidentally"
  },
  {
    number: "5",
    label: "cancer types have screening in the US"
  },
  {
    number: "50+",
    label: "typical screening age—but cancer doesn't wait"
  }
];

const modalities = [
  {
    icon: Droplet,
    title: "Blood-Based Testing",
    description: "Detect cancer signals from a simple blood draw—earlier than imaging can see tumors."
  },
  {
    icon: Scan,
    title: "Whole Body MRI",
    description: "Comprehensive imaging to detect tumors as small as 1cm across your entire body."
  },
  {
    icon: Activity,
    title: "Low-Dose CT Scan",
    description: "Specialized imaging for lung cancer and other high-risk areas with minimal radiation."
  }
];

export function CancerStatsSection() {
  return (
    <section className="py-12 sm:py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Cancer Screening Gap
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-5xl sm:text-6xl font-bold text-[hsl(16,85%,55%)]">
                {stat.number}
              </p>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Screening modalities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
            Available Screening Technologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalities.map((modality, index) => (
              <motion.div
                key={modality.title}
                className="bg-muted rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <modality.icon className="w-10 h-10 text-[hsl(16,85%,55%)] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{modality.title}</h4>
                <p className="text-sm text-muted-foreground">{modality.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
