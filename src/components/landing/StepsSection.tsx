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
                      {/* Realistic iPhone */}
                      <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[2rem] p-[6px]">
                        {/* Side buttons */}
                        <div className="absolute left-[-2px] top-16 w-[2px] h-5 bg-[#2a2a2a] rounded-l-sm" />
                        <div className="absolute left-[-2px] top-24 w-[2px] h-8 bg-[#2a2a2a] rounded-l-sm" />
                        <div className="absolute right-[-2px] top-20 w-[2px] h-10 bg-[#2a2a2a] rounded-r-sm" />
                        
                        {/* Inner bezel */}
                        <div className="bg-black rounded-[1.6rem] p-[2px]">
                          {/* Screen */}
                          <div className="relative bg-gradient-to-b from-[#f8f7f4] to-[#f5f4f1] rounded-[1.5rem] overflow-hidden w-[160px] h-[300px]">
                            {/* Dynamic Island */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10 flex items-center justify-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a]" />
                            </div>
                            
                            {/* Screen content */}
                            <div className="pt-10 px-3 pb-4 h-full">
                              <div className="space-y-3">
                                <p className="text-[10px] text-gray-500">Thu, 20 February</p>
                                <p className="text-sm font-semibold text-gray-900">Good morning 🔥</p>
                                <div className="bg-white rounded-xl p-3 shadow-sm">
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-7 h-7 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                                      <span className="text-white text-xs">✧</span>
                                    </div>
                                    <div>
                                      <p className="text-[10px] font-medium text-gray-800">ArtemisAI</p>
                                      <p className="text-[8px] text-gray-500">Health Platform</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-xl p-2.5 shadow-sm">
                                  <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span className="text-[10px] text-gray-700">Initial Screening</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Home indicator */}
                            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/20 rounded-full" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Fade overlay */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none rounded-b-[2rem]"
                        style={{
                          background: 'linear-gradient(to top, hsl(var(--muted)) 0%, hsl(var(--muted)) 30%, transparent 100%)'
                        }}
                      />
                      
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
