import { motion } from "framer-motion";
import { Droplet, Scan, Microscope } from "lucide-react";

const stats = [
  {
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop",
    number: "86%",
    label: "of cancers are found accidentally"
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    number: "2%",
    label: "of cancer types have screening protocols in the US"
  },
  {
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop",
    number: "50+",
    label: "typical screening age—but cancer doesn't wait"
  }
];

const screeningModalities = [
  {
    icon: Droplet,
    title: "Blood-Based Testing",
    description: "Multi-cancer early detection from a simple blood draw",
    examples: ["Galleri", "Thrive", "CancerSEEK"]
  },
  {
    icon: Scan,
    title: "Advanced Imaging",
    description: "Comprehensive scans to detect tumors across your entire body",
    examples: ["Whole Body MRI", "Low-Dose CT", "PET Scans"]
  },
  {
    icon: Microscope,
    title: "Established Standards",
    description: "Proven screening methods recommended by medical guidelines",
    examples: ["Colonoscopy", "Mammography", "Pap Smear", "PSA Test"]
  }
];

export function CancerStatsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-white mb-12 sm:mb-16"
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
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={stat.image} 
                alt="" 
                className="rounded-lg mb-4 h-40 sm:h-48 w-full object-cover"
              />
              <p className="text-5xl sm:text-6xl font-bold text-orange-500 mb-2">{stat.number}</p>
              <p className="text-gray-700 text-base sm:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Screening modalities */}
        <motion.h3 
          className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Comprehensive Screening Technologies
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {screeningModalities.map((modality, index) => (
            <motion.div
              key={modality.title}
              className="bg-white rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <modality.icon className="w-10 h-10 text-orange-500 mb-4" />
              <h4 className="text-xl font-bold mb-3">{modality.title}</h4>
              <p className="text-gray-600 mb-4">{modality.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-gray-700">Examples:</span>
                {modality.examples.map((example) => (
                  <span 
                    key={example} 
                    className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
