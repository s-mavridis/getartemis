import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  { value: "2%", description: "Only 2% of cancer types have official screening guidelines" },
  { value: "13-18%", description: "Lung cancer screening adherence—even for high-risk smokers" },
  { value: "69%", description: "Of eligible adults skip colorectal cancer screening" },
];

export function ProblemSection() {
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
            >
              <Card className="h-full border border-border rounded-xl shadow-sm text-center">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Here's the truth: Current screening guidelines are one-size-fits-all. They're designed for average-risk populations, which means they systematically exclude:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>People with family histories of cancer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Never-smokers with occupational exposures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Those with genetic predispositions (BRCA, Lynch syndrome)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Individuals with pre-cancerous conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Anyone concerned about the 98% of cancers without screening guidelines</span>
              </li>
            </ul>
            
            <p className="text-lg leading-relaxed mb-4">
              And even when you DO qualify for screening, the system makes it nearly impossible to know what tests you need, when to get them, and how to actually access them.
            </p>
            
            <p className="text-xl font-semibold text-foreground">
              We fix this.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
