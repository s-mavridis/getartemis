import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "The Family History Carrier",
    quote: "My mom had breast cancer at 42. I'm 35. Am I supposed to just wait until I'm 50 for a mammogram?",
    bullets: [
      "Personalized screening timelines",
      "Genetic testing guidance",
      "High-risk imaging options",
    ],
  },
  {
    title: "The Health Optimizer",
    quote: "I track my sleep, exercise, and nutrition. Why wouldn't I track my actual disease risk?",
    bullets: [
      "Whole-body MRI guidance",
      "Advanced biomarker panels",
      "Proactive monitoring plans",
    ],
  },
  {
    title: "The Symptom Navigator",
    quote: "I've had this persistent cough for months. My PCP says 'let's wait and see.' Should I push for screening?",
    bullets: [
      "Symptom-based risk analysis",
      "Specialist referral guidance",
      "When to escalate care",
    ],
  },
  {
    title: "The Guideline Excluder",
    quote: "I'm a never-smoker, but I have family history of lung cancer. Do I qualify for LDCT screening?",
    bullets: [
      "Beyond-guideline eligibility",
      "Insurance navigation help",
      "Provider network access",
    ],
  },
];

export function AudienceSection() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Built for People Like You
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {audience.title}
                  </h3>
                  
                  <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4 mb-6">
                    "{audience.quote}"
                  </blockquote>
                  
                  <ul className="space-y-2">
                    {audience.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-foreground">
                        <span className="text-primary font-bold">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
