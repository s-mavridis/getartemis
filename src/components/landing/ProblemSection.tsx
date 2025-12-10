import { motion } from "framer-motion";

const stats = [
  { value: "2%", label: "of cancer types", description: "have official screening guidelines" },
  { value: "13-18%", label: "adherence", description: "for lung cancer screening—even high-risk" },
  { value: "69%", label: "skip screening", description: "of eligible adults avoid colorectal tests" },
];

export function ProblemSection() {
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
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            The Screening Gap
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-background rounded-3xl p-8 h-full">
                <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-background rounded-3xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Current screening guidelines are one-size-fits-all. They systematically exclude:
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "People with family histories of cancer",
                "Never-smokers with occupational exposures",
                "Those with genetic predispositions (BRCA, Lynch syndrome)",
                "Individuals with pre-cancerous conditions",
                "Anyone concerned about cancers without screening guidelines",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-xl font-display font-semibold text-foreground">
              We fix this.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}