import { motion } from "framer-motion";

const stats = [
  { value: "2%", label: "Cancer types", suffix: "with screening" },
  { value: "13%", label: "Lung screening", suffix: "adherence" },
  { value: "69%", label: "Skip colorectal", suffix: "screening" },
];

export function ProblemSection() {
  return (
    <section id="services" className="section-spacing bg-card">
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
            The screening gap is <span className="italic">real</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Current guidelines are one-size-fits-all. They're designed for average-risk populations, which means they systematically exclude people like you.
          </p>
        </motion.div>
        
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-background rounded-3xl p-8">
                <div className="text-6xl md:text-7xl font-display text-foreground mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{stat.suffix}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Excluded groups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-background rounded-3xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Standard guidelines exclude:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Family histories of cancer",
                "Genetic predispositions",
                "Occupational exposures",
                "Pre-cancerous conditions",
                "98% of cancer types",
                "Early symptom carriers",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-2xl">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl font-display text-center mt-8">
              We fix this.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}