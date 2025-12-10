import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Share Your Records",
    description: "Securely connect your electronic health records for analysis.",
  },
  {
    number: 2,
    title: "AI Analysis",
    description: "We identify your personalized cancer and chronic disease risks.",
  },
  {
    number: 3,
    title: "Get Recommendations",
    description: "Receive specific screening tests and provider connections.",
  },
];

export function StepsSection() {
  return (
    <section className="pt-8 md:pt-12 pb-24 md:pb-32 bg-background" id="how-it-works">
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
                {/* Visual area - simplified EHR Connected card */}
                <div className="h-48 mb-8 flex items-center justify-center">
                  {step.number === 1 && (
                    <div className="bg-card rounded-2xl shadow-lg p-6 max-w-[280px] w-full">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">EHR Connected</p>
                          <p className="text-sm text-muted-foreground">Records synced securely</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step.number === 2 && (
                    <div className="bg-card rounded-2xl shadow-lg p-6 max-w-[280px] w-full">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Analysis in Progress</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm">Medical history reviewed</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm">Risk factors identified</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 animate-pulse" />
                          <span className="text-muted-foreground text-sm">Generating report...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step.number === 3 && (
                    <div className="bg-card rounded-2xl shadow-lg p-6 max-w-[280px] w-full">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Your Recommendations</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-medium text-sm">Risk Assessment Complete</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                          <span className="text-muted-foreground text-sm">Schedule Screening</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                          <span className="text-muted-foreground text-sm">Connect with Provider</span>
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
