import { motion } from "framer-motion";
import { Shield, Clock, GraduationCap, ClipboardCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI-Powered Risk Analysis",
    description: "Comprehensive cancer risk assessment based on your genetics, family history, lifestyle, and medical records.",
    visual: "risk",
    showPhone: true
  },
  {
    icon: Clock,
    title: "Proactive Screening",
    description: "Access to ALL cancer screening technologies—blood tests, whole body MRI, low-dose CT, and more. We're test-agnostic, you're not locked into one option.",
    visual: "detection",
    showPhone: true
  },
  {
    icon: GraduationCap,
    title: "Stanford-Backed Science",
    description: "Every assessment is built on research validated by 70+ oncologists and screening specialists from leading institutions.",
    visual: "experts",
    showPhone: false
  },
  {
    icon: ClipboardCheck,
    title: "Your Custom Roadmap",
    description: "Tailored screening schedules including out-of-pocket options when insurance doesn't cover. Plus direct access to Stanford physicians who guide you through every step.",
    visual: "plans",
    showPhone: false
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
      
      {/* Fade overlay at bottom - covers phone frame completely */}
      <div 
        className="absolute -bottom-1 -left-1 -right-1 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(var(--muted)) 0%, hsl(var(--muted)) 40%, transparent 100%)'
        }}
      />
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background" id="services">
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
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display mb-4 sm:mb-6"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-muted rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Visual area */}
              <div className="h-72 sm:h-80 lg:h-96 mb-4 sm:mb-6 flex items-end justify-center pt-12 sm:pt-16">
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
                  <RealisticPhone>
                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-[9px] sm:text-[10px] text-gray-500">Thu, 20 February</p>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">Good morning 👋</p>
                      <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                          <div className="w-6 sm:w-7 h-6 sm:h-7 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-[10px] sm:text-xs">✧</span>
                          </div>
                          <div>
                            <p className="text-[9px] sm:text-[10px] font-medium text-gray-800">Health Score</p>
                            <p className="text-[7px] sm:text-[8px] text-gray-500">Artemis</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-center">
                          <div className="bg-gray-50 rounded-lg p-1 sm:p-1.5">
                            <p className="text-xs sm:text-sm font-bold text-gray-900">92</p>
                            <p className="text-[7px] sm:text-[8px] text-gray-500">Score</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-1 sm:p-1.5">
                            <p className="text-xs sm:text-sm font-bold text-green-600">0</p>
                            <p className="text-[7px] sm:text-[8px] text-gray-500">Alerts</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-1 sm:p-1.5">
                            <p className="text-xs sm:text-sm font-bold text-gray-900">4</p>
                            <p className="text-[7px] sm:text-[8px] text-gray-500">Tasks</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-2 sm:p-2.5 shadow-sm">
                        <p className="text-[8px] sm:text-[9px] font-medium text-gray-700 mb-1 sm:mb-1.5">Next Screening</p>
                        <div className="flex items-center gap-2">
                          <div className="w-4 sm:w-5 h-4 sm:h-5 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-[8px] sm:text-[10px]">📅</span>
                          </div>
                          <p className="text-[8px] sm:text-[9px] text-gray-600">March 15, 2025</p>
                        </div>
                      </div>
                    </div>
                  </RealisticPhone>
                )}
                
                {feature.visual === "experts" && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <GraduationCap className="w-16 h-16 text-[hsl(16,85%,55%)] mb-6" />
                    <div className="text-center space-y-2">
                      <p className="text-sm font-semibold text-foreground">70+ Oncologists</p>
                      <p className="text-xs text-muted-foreground">Stanford • Mayo • MD Anderson</p>
                    </div>
                    {/* Placeholder for photo */}
                    <div className="h-24 w-full max-w-[200px] bg-muted-foreground/10 rounded-lg mt-6 flex items-center justify-center">
                      <p className="text-xs text-muted-foreground italic">[Stanford physician photo to be added]</p>
                    </div>
                  </div>
                )}
                
                {feature.visual === "plans" && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <ClipboardCheck className="w-16 h-16 text-[hsl(16,85%,55%)] mb-6" />
                    <div className="text-center space-y-2">
                      <p className="text-sm font-semibold text-foreground">Personalized Plan</p>
                      <p className="text-xs text-muted-foreground">Insurance + Out-of-Pocket Options</p>
                    </div>
                    {/* Placeholder for photo */}
                    <div className="h-24 w-full max-w-[200px] bg-muted-foreground/10 rounded-lg mt-6 flex items-center justify-center">
                      <p className="text-xs text-muted-foreground italic">[Stanford physician photo to be added]</p>
                    </div>
                  </div>
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
