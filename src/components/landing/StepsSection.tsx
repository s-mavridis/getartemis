import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Sign Up for Access",
    description: "Join our waitlist to get early access to ArtemisAI's personalized screening platform.",
    visual: "signup"
  },
  {
    number: 2,
    title: "Connect Your Records",
    description: "Securely link your electronic health records for comprehensive analysis.",
    visual: "connect"
  },
  {
    number: 3,
    title: "Get Your Assessment",
    description: "Receive personalized risk insights and screening recommendations.",
    visual: "assessment"
  }
];

export function StepsSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="how-it-works">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get started in<br />3 simple steps.
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore the features designed to keep you healthy and on track.
          </motion.p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative flex gap-8 md:gap-12 pb-16 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-foreground text-card flex items-center justify-center text-lg font-semibold z-10">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border border-dashed border-l-2 border-muted-foreground/30 mt-4" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 bg-muted rounded-3xl p-8 md:p-10">
                {/* Visual area */}
                <div className="h-72 mb-8 flex items-center justify-center">
                  {step.visual === "signup" && (
                    <div className="relative">
                      <div className="bg-foreground rounded-[2.5rem] p-3 shadow-2xl max-w-[220px]">
                        <div className="bg-card rounded-[2rem] overflow-hidden">
                          <div className="px-4 py-3 flex items-center justify-between">
                            <span className="text-xs font-medium">9:41</span>
                            <div className="w-16 h-5 bg-foreground rounded-full" />
                            <div className="flex items-center gap-1 text-xs">
                              <span>📶</span>
                              <span>🔋</span>
                            </div>
                          </div>
                          <div className="px-4 py-4">
                            <p className="text-xs text-muted-foreground mb-1">Thu, 20 February</p>
                            <p className="font-medium mb-4">Good morning 🔥</p>
                            <div className="bg-muted/50 rounded-xl p-3 mb-3">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                                  <span className="text-secondary text-sm">✧</span>
                                </div>
                                <div>
                                  <p className="text-xs font-medium">ArtemisAI</p>
                                  <p className="text-[10px] text-muted-foreground">Health Platform</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <span>Initial Screening</span>
                                </div>
                                <span className="text-muted-foreground">Feb 20</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating badges */}
                      <div className="absolute -right-16 top-1/4 bg-foreground text-card px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        App Store
                      </div>
                      <div className="absolute -left-16 top-1/2 bg-foreground text-card px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Play Store
                      </div>
                    </div>
                  )}
                  
                  {step.visual === "connect" && (
                    <div className="bg-card rounded-2xl shadow-lg p-6 max-w-[280px]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-coral overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-secondary/80 to-coral/80" />
                        </div>
                        <div>
                          <p className="font-semibold">Jane Smith</p>
                          <p className="text-sm text-muted-foreground">janesmith@gmail.com</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                          <span className="text-lg">👥</span>
                          <span className="text-sm">Connect health records</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                          <span className="text-lg">📁</span>
                          <span className="text-sm">Link your provider</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step.visual === "assessment" && (
                    <div className="bg-card rounded-2xl shadow-lg p-6 max-w-[280px]">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">TOP PRIORITY</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-medium">Risk Assessment Complete</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                          <span className="text-muted-foreground">Schedule Screening</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                          <span className="text-muted-foreground">Review Results</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text content */}
                <h3 className="text-2xl font-display mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
