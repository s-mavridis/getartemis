import { motion } from "framer-motion";
import { Shield, Clock, Users, Target } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI-Powered Risk Analysis",
    description: "Comprehensive cancer risk assessment based on your genetics, family history, lifestyle, and medical records.",
    visual: "risk"
  },
  {
    icon: Clock,
    title: "Proactive Screening",
    description: "Access ALL cancer screening technologies—blood tests, whole body MRI, colonoscopy, and more. We're test-agnostic and show you every option.",
    visual: "detection"
  },
  {
    icon: Users,
    title: "Stanford-Backed Science",
    description: "Every assessment is built on research validated by 70+ oncologists and screening specialists from leading institutions.",
    visual: "experts"
  },
  {
    icon: Target,
    title: "Your Custom Roadmap",
    description: "Tailored screening schedules including out-of-pocket options when insurance doesn't cover. Plus direct connection to Stanford physicians.",
    visual: "plans"
  }
];

// Reusable realistic iPhone component
function RealisticPhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Outer phone body with subtle gradient */}
      <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[2rem] p-[6px]">
        {/* Side buttons - volume */}
        <div className="absolute left-[-2px] top-16 w-[2px] h-5 bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute left-[-2px] top-24 w-[2px] h-8 bg-[#2a2a2a] rounded-l-sm" />
        {/* Side button - power */}
        <div className="absolute right-[-2px] top-20 w-[2px] h-10 bg-[#2a2a2a] rounded-r-sm" />
        
        {/* Inner bezel */}
        <div className="bg-black rounded-[1.6rem] p-[2px]">
          {/* Screen */}
          <div className="relative bg-gradient-to-b from-[#f8f7f4] to-[#f5f4f1] rounded-[1.5rem] overflow-hidden w-[140px] sm:w-[160px] h-[260px] sm:h-[300px]">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-4 sm:h-5 bg-black rounded-full z-10 flex items-center justify-center gap-1">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a]" />
            </div>
            
            {/* Screen content */}
            <div className="pt-8 sm:pt-10 px-2.5 sm:px-3 pb-4 h-full">
              {children}
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-black/20 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Fade overlay at bottom - white to match card background */}
      <div 
        className="absolute -bottom-1 -left-1 -right-1 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 40%, transparent 100%)'
        }}
      />
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display text-foreground mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything You Need<br className="hidden sm:block" /><span className="sm:hidden"> </span>for Early Detection.
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

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Visual area */}
              <div className="h-72 sm:h-80 lg:h-64 mb-4 sm:mb-6 flex items-end justify-center pt-12 sm:pt-16 lg:pt-8">
                {feature.visual === "risk" && (
                  <RealisticPhone>
                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-[9px] sm:text-[10px] text-gray-500">Risk Analysis</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                          <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-gray-900">Low Risk</p>
                          <p className="text-[8px] sm:text-[9px] text-gray-500">Artemis</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm mt-3 sm:mt-4">
                        <p className="text-[9px] sm:text-[10px] font-medium text-gray-700 mb-1.5 sm:mb-2">Assessment Summary</p>
                        <div className="space-y-1 sm:space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-[8px] sm:text-[9px] text-gray-500">Genetic</span>
                            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="w-1/4 h-full bg-green-400 rounded-full" />
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[8px] sm:text-[9px] text-gray-500">Lifestyle</span>
                            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="w-2/3 h-full bg-green-400 rounded-full" />
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[8px] sm:text-[9px] text-gray-500">History</span>
                            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="w-1/3 h-full bg-green-400 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RealisticPhone>
                )}
                
                {feature.visual === "detection" && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=600&fit=crop" 
                      alt="Blood test for cancer screening" 
                      className="rounded-xl h-48 sm:h-56 lg:h-52 w-auto object-cover shadow-lg"
                    />
                  </div>
                )}
                
                {feature.visual === "experts" && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&crop=face" 
                      alt="Stanford physician" 
                      className="rounded-xl h-48 sm:h-56 lg:h-52 w-auto object-cover shadow-lg"
                    />
                  </div>
                )}
                
                {feature.visual === "plans" && (
                  <RealisticPhone>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-amber-100 flex items-center justify-center">
                          <span className="text-xs sm:text-sm">📋</span>
                        </div>
                        <div>
                          <p className="text-[8px] sm:text-[9px] text-gray-500">Screening Plan</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-900">Your Roadmap</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm space-y-2">
                        {/* Step 1 - Completed */}
                        <div className="flex items-center gap-2">
                          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[8px] sm:text-[9px] font-medium text-gray-800 truncate">Blood Panel</p>
                            <p className="text-[7px] sm:text-[8px] text-gray-400">Completed</p>
                          </div>
                        </div>
                        {/* Step 2 - Completed */}
                        <div className="flex items-center gap-2">
                          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[8px] sm:text-[9px] font-medium text-gray-800 truncate">MRI Scan</p>
                            <p className="text-[7px] sm:text-[8px] text-gray-400">Completed</p>
                          </div>
                        </div>
                        {/* Step 3 - Current */}
                        <div className="flex items-center gap-2">
                          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-[8px] sm:text-[9px] text-white font-bold">3</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[8px] sm:text-[9px] font-medium text-gray-800 truncate">Colonoscopy</p>
                            <p className="text-[7px] sm:text-[8px] text-orange-500">Scheduled</p>
                          </div>
                        </div>
                        {/* Step 4 - Pending */}
                        <div className="flex items-center gap-2 opacity-50">
                          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                            <span className="text-[8px] sm:text-[9px] text-gray-400 font-medium">4</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[8px] sm:text-[9px] font-medium text-gray-500 truncate">Follow-up</p>
                            <p className="text-[7px] sm:text-[8px] text-gray-400">Upcoming</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RealisticPhone>
                )}
              </div>

              {/* Text content */}
              <h3 className="text-xl sm:text-2xl font-display mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
