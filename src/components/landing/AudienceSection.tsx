import { motion } from "framer-motion";

const audiences = [
  {
    label: "Family History",
    title: "The Family History Carrier",
    quote: "My mom had breast cancer at 42. I'm 35. Am I supposed to just wait until I'm 50 for a mammogram?",
    bullets: ["Personalized screening timelines", "Genetic testing guidance", "High-risk imaging options"],
  },
  {
    label: "Health Optimizer",
    title: "The Health Optimizer",
    quote: "I track my sleep, exercise, and nutrition. Why wouldn't I track my actual disease risk?",
    bullets: ["Whole-body MRI guidance", "Advanced biomarker panels", "Proactive monitoring plans"],
  },
  {
    label: "Symptom Navigator",
    title: "The Symptom Navigator",
    quote: "I've had this persistent cough for months. My PCP says 'let's wait and see.' Should I push for screening?",
    bullets: ["Symptom-based risk analysis", "Specialist referral guidance", "When to escalate care"],
  },
  {
    label: "Guideline Excluder",
    title: "The Guideline Excluder",
    quote: "I'm a never-smoker, but I have family history of lung cancer. Do I qualify for LDCT screening?",
    bullets: ["Beyond-guideline eligibility", "Insurance navigation help", "Provider network access"],
  },
];

export function AudienceSection() {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider">HJ® — Who It's For</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 leading-tight">
            Built for people<br /><span className="italic">like you</span>
          </h2>
        </motion.div>
        
        {/* Audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-card rounded-3xl p-8 border border-border hover:border-secondary/30 transition-colors group">
                {/* Label */}
                <span className="inline-block text-xs text-muted-foreground uppercase tracking-wider mb-6">
                  {audience.label}
                </span>
                
                <h3 className="text-xl font-display mb-4">
                  {audience.title}
                </h3>
                
                <blockquote className="text-muted-foreground text-sm italic mb-6 pl-4 border-l-2 border-secondary/30">
                  "{audience.quote}"
                </blockquote>
                
                <ul className="space-y-3">
                  {audience.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{bullet}</span>
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