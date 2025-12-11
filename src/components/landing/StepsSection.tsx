import { motion } from "framer-motion";
import { UserRoundCheck, Calendar } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Share Your Records",
    description: "Securely connect your electronic health records for comprehensive analysis.",
    visual: "signup"
  },
  {
    number: 2,
    title: "AI Risk Analysis",
    description: "We identify your personalized cancer risks using advanced algorithms validated by oncologists.",
    visual: "connect"
  },
  {
    number: 3,
    title: "Stanford Physician Consultation",
    description: "15-minute concierge call with a Stanford-trained physician to review your results and guide next steps.",
    visual: "consultation"
  },
  {
    number: 4,
    title: "Get Screened",
    description: "Book appropriate screening tests with our partner providers—blood tests, imaging, or both.",
    visual: "screening"
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
            Get started in<br />4 simple steps.
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From signup to screening in days, not months.
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
                <div className="relative mb-6 flex items-center justify-center" style={{ minHeight: '280px' }}>
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
                        className="absolute -bottom-1 -left-1 -right-1 h-28 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to top, hsl(var(--muted)) 0%, hsl(var(--muted)) 40%, transparent 100%)'
                        }}
                      />
                    </div>
                  )}
                  
                  {step.visual === "connect" && (
                    <div className="relative w-full max-w-[280px] sm:max-w-[300px]" style={{ height: '280px' }}>
                      {/* Background card - Progress */}
                      <div className="absolute top-0 left-6 right-6 bg-card/70 rounded-2xl shadow-sm p-4 z-10">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">ANALYSIS PROGRESS</p>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1.5">67% complete</p>
                      </div>
                      
                      {/* Middle card - Data points (overlapping) */}
                      <div className="absolute top-[65px] left-3 right-3 bg-card/90 rounded-2xl shadow-md p-4 z-20">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🧬</span>
                          <span className="text-xs">Genetic markers analyzed</span>
                          <div className="ml-auto w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Front card - Main (overlapping) */}
                      <div className="absolute top-[125px] left-0 right-0 bg-card rounded-2xl shadow-xl p-5 z-30">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-coral flex items-center justify-center">
                            <span className="text-white text-lg">✧</span>
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Analyzing...</p>
                            <p className="text-xs text-muted-foreground">Your health data</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-2.5 bg-muted/50 rounded-xl">
                            <span className="text-sm">📋</span>
                            <span className="text-xs">Medical history</span>
                          </div>
                          <div className="flex items-center gap-2 p-2.5 bg-muted/50 rounded-xl">
                            <span className="text-sm">🏃</span>
                            <span className="text-xs">Lifestyle factors</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step.visual === "consultation" && (
                    <div className="flex flex-col items-center justify-center h-full">
                      <UserRoundCheck className="w-20 h-20 text-[hsl(16,85%,55%)] mb-6" />
                      <div className="text-center space-y-2">
                        <p className="text-lg font-semibold text-foreground">15-Minute Call</p>
                        <p className="text-sm text-muted-foreground">Stanford-trained physician</p>
                      </div>
                      <div className="mt-6 bg-card rounded-2xl p-4 shadow-sm max-w-[240px]">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <span className="text-white text-lg">👨‍⚕️</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Dr. Sarah Chen</p>
                            <p className="text-xs text-muted-foreground">Oncologist • Stanford</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step.visual === "screening" && (
                    <div className="flex flex-col items-center justify-center h-full">
                      <Calendar className="w-20 h-20 text-[hsl(16,85%,55%)] mb-6" />
                      <div className="text-center space-y-2">
                        <p className="text-lg font-semibold text-foreground">Book Your Tests</p>
                        <p className="text-sm text-muted-foreground">Partner providers nationwide</p>
                      </div>
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="bg-card rounded-xl p-3 text-center shadow-sm">
                          <span className="text-2xl">🩸</span>
                          <p className="text-xs mt-1">Blood</p>
                        </div>
                        <div className="bg-card rounded-xl p-3 text-center shadow-sm">
                          <span className="text-2xl">🔬</span>
                          <p className="text-xs mt-1">MRI</p>
                        </div>
                        <div className="bg-card rounded-xl p-3 text-center shadow-sm">
                          <span className="text-2xl">📷</span>
                          <p className="text-xs mt-1">CT</p>
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
