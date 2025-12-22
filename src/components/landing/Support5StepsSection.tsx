import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Share This Page",
    description: "Send Artemis to your partner, or sign up yourself. We'll reach out with a gentle approach.",
    visual: "share"
  },
  {
    number: 2,
    title: "Health Data Analysis",
    description: "If they connect their records, our AI analyzes their health profile for personalized insights.",
    visual: "analysis"
  },
  {
    number: 3,
    title: "Physician Conversation",
    description: "A compassionate Stanford physician discusses screening options directly with your partner.",
    visual: "physician"
  },
  {
    number: 4,
    title: "Their Choice, Supported",
    description: "We help schedule screenings they're comfortable with. Progress happens at their pace.",
    visual: "choice"
  }
];

export function Support5StepsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">How it works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Trusted support in 4 gentle steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A compassionate approach that respects your partner's autonomy while providing professional guidance.
          </p>
        </motion.div>

        {/* Steps grid - like template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-card rounded-2xl sm:rounded-3xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Text content at top */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-accent">Step {step.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Visual area */}
              <div className="px-5 sm:px-6 pb-6 pt-2">
                <StepVisual visual={step.visual} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepVisual({ visual }: { visual: string }) {
  if (visual === "share") {
    return (
      <div className="bg-muted/50 rounded-xl p-4 space-y-3">
        {/* Timeline items */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Email sent</p>
            <p className="text-xs text-muted-foreground">Today, 2:30 PM</p>
          </div>
          <span className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">✓</span>
        </div>
        <div className="ml-1.5 w-px h-4 bg-muted-foreground/20" />
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Link opened</p>
            <p className="text-xs text-muted-foreground">Today, 3:15 PM</p>
          </div>
          <span className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">✓</span>
        </div>
        <div className="ml-1.5 w-px h-4 bg-accent/40" />
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Signed up</p>
            <p className="text-xs text-muted-foreground">Today, 3:45 PM</p>
          </div>
          <div className="flex -space-x-2">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full border-2 border-card" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="" className="w-6 h-6 rounded-full border-2 border-card" />
          </div>
        </div>
      </div>
    );
  }

  if (visual === "analysis") {
    return (
      <div className="bg-muted/50 rounded-xl p-4 space-y-3">
        {/* Chat-style interface */}
        <div className="flex justify-end">
          <div className="bg-accent text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%]">
            <p className="text-sm">Analyzing your health records...</p>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground">Just now</p>
        <div className="flex justify-start">
          <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%]">
            <p className="text-sm text-foreground">We've identified key risk factors based on your profile. Ready to review? 💪</p>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "physician") {
    return (
      <div className="relative">
        <div className="bg-muted/50 rounded-xl p-4 flex flex-col items-center">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face" 
            alt="Stanford physician" 
            className="w-32 h-32 object-cover rounded-xl shadow-lg mb-4"
          />
          {/* Action icons */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "choice") {
    return (
      <div className="bg-muted/50 rounded-xl p-4 space-y-3">
        {/* Screening options */}
        <div className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">Blood Panel</p>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
            <span className="text-xs text-white font-bold">2</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">MRI Scan</p>
            <p className="text-xs text-accent">Scheduled: March 15</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border opacity-60">
          <div className="w-8 h-8 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center flex-shrink-0">
            <span className="text-xs text-muted-foreground font-medium">3</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-muted-foreground">Follow-up</p>
            <p className="text-xs text-muted-foreground">Upcoming</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
