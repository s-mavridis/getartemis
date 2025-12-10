import { motion } from "framer-motion";
import { Shield, Clock, Users, Target } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Get personalized cancer risk analysis based on your health data and genetic factors.",
    visual: "risk"
  },
  {
    icon: Clock,
    title: "Early Detection",
    description: "Catch potential issues early with AI-powered screening recommendations.",
    visual: "detection"
  },
  {
    icon: Users,
    title: "Expert Validation",
    description: "Every assessment is reviewed by Stanford-trained oncology specialists.",
    visual: "experts"
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Receive tailored screening schedules and lifestyle recommendations.",
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
          <div className="relative bg-gradient-to-b from-[#f8f7f4] to-[#f5f4f1] rounded-[1.5rem] overflow-hidden w-[160px] h-[300px]">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10 flex items-center justify-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a]" />
            </div>
            
            {/* Screen content */}
            <div className="pt-10 px-3 pb-4 h-full">
              {children}
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/20 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Fade overlay at bottom - covers phone frame completely */}
      <div 
        className="absolute -bottom-1 -left-1 -right-1 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(var(--muted)) 0%, hsl(var(--muted)) 50%, transparent 100%)'
        }}
      />
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-background" id="services">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Features designed<br />for your success.
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

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-muted rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Visual area */}
              <div className="h-72 mb-8 flex items-center justify-center">
                {feature.visual === "risk" && (
                  <RealisticPhone>
                    <div className="space-y-3">
                      <p className="text-[10px] text-gray-500">Risk Analysis</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Low Risk</p>
                          <p className="text-[9px] text-gray-500">ArtemisAI</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm mt-4">
                        <p className="text-[10px] font-medium text-gray-700 mb-2">Assessment Summary</p>
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-gray-500">Genetic</span>
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="w-1/4 h-full bg-green-400 rounded-full" />
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-gray-500">Lifestyle</span>
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="w-2/3 h-full bg-green-400 rounded-full" />
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-gray-500">History</span>
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
                    <div className="space-y-3">
                      <p className="text-[10px] text-gray-500">Thu, 20 February</p>
                      <p className="text-sm font-semibold text-gray-900">Good morning 👋</p>
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs">✧</span>
                          </div>
                          <div>
                            <p className="text-[10px] font-medium text-gray-800">Health Score</p>
                            <p className="text-[8px] text-gray-500">ArtemisAI</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-center">
                          <div className="bg-gray-50 rounded-lg p-1.5">
                            <p className="text-sm font-bold text-gray-900">92</p>
                            <p className="text-[8px] text-gray-500">Score</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-1.5">
                            <p className="text-sm font-bold text-green-600">0</p>
                            <p className="text-[8px] text-gray-500">Alerts</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-1.5">
                            <p className="text-sm font-bold text-gray-900">4</p>
                            <p className="text-[8px] text-gray-500">Tasks</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 shadow-sm">
                        <p className="text-[9px] font-medium text-gray-700 mb-1.5">Next Screening</p>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-[10px]">📅</span>
                          </div>
                          <p className="text-[9px] text-gray-600">March 15, 2025</p>
                        </div>
                      </div>
                    </div>
                  </RealisticPhone>
                )}
                
                {feature.visual === "experts" && (
                  <RealisticPhone>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-900">My Health Team</p>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-[#f8f7f4]" />
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 border-2 border-[#f8f7f4]" />
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 border-2 border-[#f8f7f4]" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <span className="text-sm">🏆</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-gray-700">Expert Reviewed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-gray-700">Stanford Verified</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 shadow-sm">
                        <p className="text-[9px] font-medium text-gray-700 mb-1">Latest Review</p>
                        <p className="text-[8px] text-gray-500">Dr. Chen • 2 days ago</p>
                      </div>
                    </div>
                  </RealisticPhone>
                )}
                
                {feature.visual === "plans" && (
                  <RealisticPhone>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center">
                          <span className="text-sm">🎯</span>
                        </div>
                        <div>
                          <p className="text-[9px] text-gray-500">Goals</p>
                          <p className="text-sm font-semibold text-gray-900">Your Plan</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="grid grid-cols-3 gap-1.5 text-center">
                          <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-xs font-bold text-gray-900">10<span className="text-[8px] text-gray-400">/20</span></p>
                            <p className="text-[8px] text-gray-500">Tasks</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-xs font-bold text-gray-900">10h<span className="text-[8px] text-gray-400">/20</span></p>
                            <p className="text-[8px] text-gray-500">Time</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-xs font-bold text-gray-900">5<span className="text-[8px] text-gray-400">/10</span></p>
                            <p className="text-[8px] text-gray-500">Goals</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 shadow-sm">
                        <p className="text-[9px] font-medium text-gray-700 mb-2">Progress</p>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
                        </div>
                        <p className="text-[8px] text-gray-500 mt-1">50% complete</p>
                      </div>
                    </div>
                  </RealisticPhone>
                )}
              </div>

              {/* Text content */}
              <h3 className="text-2xl font-display mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
