import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Share Your Records",
    description: "Securely connect your electronic health records for comprehensive analysis.",
    visual: "signup"
  },
  {
    number: 2,
    title: "AI Analysis",
    description: "We identify your personalized cancer and chronic disease risks using advanced algorithms.",
    visual: "connect"
  },
  {
    number: 3,
    title: "Get Recommendations",
    description: "Receive specific screening tests, provider connections, and your custom prevention plan.",
    visual: "assessment"
  }
];

export function StepsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get started in<br />3 simple steps.
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
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
              className="relative flex gap-4 sm:gap-8 lg:gap-12 pb-8 sm:pb-12 lg:pb-16 last:pb-0"
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
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground text-card flex items-center justify-center text-lg sm:text-xl font-semibold z-10 flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border border-dashed border-l-2 border-muted-foreground/30 mt-4" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 bg-muted rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
                {/* Visual area */}
                <div className="h-56 sm:h-64 lg:h-72 mb-6 sm:mb-8 flex items-center justify-center">
                  {step.visual === "signup" && (
                    <div className="relative">
                      {/* Realistic iPhone */}
                      <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[2rem] p-[6px]">
                        {/* Side buttons */}
                        <div className="absolute left-[-2px] top-16 w-[2px] h-5 bg-[#2a2a2a] rounded-l-sm" />
                        <div className="absolute left-[-2px] top-24 w-[2px] h-8 bg-[#2a2a2a] rounded-l-sm" />
                        <div className="absolute right-[-2px] top-20 w-[2px] h-10 bg-[#2a2a2a] rounded-r-sm" />
                        
                        {/* Inner bezel */}
                        <div className="bg-black rounded-[1.6rem] p-[2px]">
                          {/* Screen */}
                          <div className="relative bg-gradient-to-b from-[#f8f7f4] to-[#f5f4f1] rounded-[1.5rem] overflow-hidden w-[140px] sm:w-[160px] h-[260px] sm:h-[300px]">
                            {/* Dynamic Island */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-4 sm:h-5 bg-black rounded-full z-10 flex items-center justify-center gap-1">
                              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a]" />
                            </div>
                            
                            {/* Screen content */}
                            <div className="pt-8 sm:pt-10 px-2.5 sm:px-3 pb-4 h-full">
                              <div className="space-y-2.5 sm:space-y-3">
                                <p className="text-[9px] sm:text-[10px] text-gray-500">Connect Records</p>
                                <p className="text-xs sm:text-sm font-semibold text-gray-900">Share securely 🔒</p>
                                <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm">
                                  <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                                    <div className="w-6 sm:w-7 h-6 sm:h-7 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                                      <span className="text-white text-[10px] sm:text-xs">✧</span>
                                    </div>
                                    <div>
                                      <p className="text-[9px] sm:text-[10px] font-medium text-gray-800">Artemis</p>
                                      <p className="text-[7px] sm:text-[8px] text-gray-500">Health Platform</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-xl p-2 sm:p-2.5 shadow-sm">
                                  <div className="flex items-center gap-2">
                                    <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-green-500 flex items-center justify-center">
                                      <svg className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span className="text-[9px] sm:text-[10px] text-gray-700">HIPAA Secured</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Home indicator */}
                            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-black/20 rounded-full" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Fade overlay - covers phone frame completely */}
                      <div 
                        className="absolute -bottom-1 -left-1 -right-1 h-40 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to top, hsl(var(--muted)) 0%, hsl(var(--muted)) 50%, transparent 100%)'
                        }}
                      />
                      
                      {/* Floating badges - hidden on mobile */}
                      <div className="hidden sm:block absolute -right-16 top-1/4 bg-foreground text-card px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        App Store
                      </div>
                      <div className="hidden sm:block absolute -left-16 top-1/2 bg-foreground text-card px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Play Store
                      </div>
                    </div>
                  )}
                  
                  {step.visual === "connect" && (
                    <div className="bg-card rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-[240px] sm:max-w-[280px]">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-gradient-to-br from-secondary to-coral overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-secondary/80 to-coral/80" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm sm:text-base">Analyzing...</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">Your health data</p>
                        </div>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-muted/50 rounded-xl">
                          <span className="text-base sm:text-lg">🧬</span>
                          <span className="text-xs sm:text-sm">Genetic markers</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-muted/50 rounded-xl">
                          <span className="text-base sm:text-lg">📋</span>
                          <span className="text-xs sm:text-sm">Medical history</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-muted/50 rounded-xl">
                          <span className="text-base sm:text-lg">🏃</span>
                          <span className="text-xs sm:text-sm">Lifestyle factors</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step.visual === "assessment" && (
                    <div className="bg-card rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-[240px] sm:max-w-[280px]">
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-2.5 sm:mb-3">YOUR RECOMMENDATIONS</p>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-medium text-sm sm:text-base">Risk Assessment Complete</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">Schedule Screening</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">Connect to Provider</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text content */}
                <h3 className="text-xl sm:text-2xl font-display mb-2 sm:mb-3 text-center">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}