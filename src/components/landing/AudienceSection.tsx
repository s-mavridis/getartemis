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
    gradient: "from-sky-400 to-sky-500",
  },
  {
    title: "The Health Optimizer",
    quote: "I track my sleep, exercise, and nutrition. Why wouldn't I track my actual disease risk?",
    bullets: [
      "Whole-body MRI guidance",
      "Advanced biomarker panels",
      "Proactive monitoring plans",
    ],
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "The Symptom Navigator",
    quote: "I've had this persistent cough for months. My PCP says 'let's wait and see.' Should I push for screening?",
    bullets: [
      "Symptom-based risk analysis",
      "Specialist referral guidance",
      "When to escalate care",
    ],
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "The Guideline Excluder",
    quote: "I'm a never-smoker, but I have family history of lung cancer. Do I qualify for LDCT screening?",
    bullets: [
      "Beyond-guideline eligibility",
      "Insurance navigation help",
      "Provider network access",
    ],
    gradient: "from-violet-400 to-purple-500",
  },
];

export function AudienceSection() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Who It's For</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Built for People Like You
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-card rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group">
                {/* Gradient accent bar */}
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${audience.gradient} mb-6`} />
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {audience.title}
                </h3>
                
                <blockquote className="text-muted-foreground italic mb-6 pl-4 border-l-2 border-border">
                  "{audience.quote}"
                </blockquote>
                
                <ul className="space-y-3">
                  {audience.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-foreground">
                      <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}