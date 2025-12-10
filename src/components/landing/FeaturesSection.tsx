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

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="services">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            Features designed<br />for your success.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Explore the features designed to keep you healthy and on track.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-muted rounded-3xl p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Visual area */}
              <div className="h-64 mb-8 flex items-center justify-center">
                {feature.visual === "risk" && (
                  <div className="relative">
                    <div className="bg-card rounded-2xl shadow-lg p-4 transform -rotate-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Risk Analysis</span>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">Low</span>
                      </div>
                      <p className="text-xs text-muted-foreground">ArtemisAI Assessment</p>
                    </div>
                    <div className="bg-card rounded-2xl shadow-lg p-4 transform rotate-1 translate-x-4 -translate-y-2 absolute top-4 left-4 -z-10 opacity-60">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-5 h-5 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">Screening Status</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Up to date</p>
                    </div>
                  </div>
                )}
                
                {feature.visual === "detection" && (
                  <div className="bg-foreground rounded-[2rem] p-2 shadow-xl max-w-[200px]">
                    <div className="bg-card rounded-[1.5rem] p-4">
                      <div className="text-xs text-muted-foreground mb-1">Thu, 20 February</div>
                      <p className="font-medium mb-4">Good morning 👋</p>
                      <div className="bg-muted/50 rounded-xl p-3 mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <span className="text-secondary">✧</span>
                          </div>
                          <div>
                            <p className="text-xs font-medium">Health Score</p>
                            <p className="text-xs text-muted-foreground">ArtemisAI</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="text-sm font-semibold">92</p>
                            <p className="text-[10px] text-muted-foreground">Score</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">0</p>
                            <p className="text-[10px] text-muted-foreground">Alerts</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">4</p>
                            <p className="text-[10px] text-muted-foreground">Tasks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {feature.visual === "experts" && (
                  <div className="bg-foreground rounded-[2rem] p-2 shadow-xl max-w-[200px]">
                    <div className="bg-card rounded-[1.5rem] p-4">
                      <p className="font-medium mb-4">My health</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex -space-x-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-coral border-2 border-card" />
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 border-2 border-card" />
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-card" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-card text-lg">🏆</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Expert Reviewed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {feature.visual === "plans" && (
                  <div className="bg-card rounded-2xl shadow-lg p-5 max-w-[220px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                        <span className="text-xl">🎯</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Goals</p>
                        <p className="font-medium">Your Plan</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-muted/50 rounded-xl p-2">
                        <p className="text-lg font-semibold">10<span className="text-xs text-muted-foreground">/20</span></p>
                        <p className="text-[10px] text-muted-foreground">Tasks</p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-2">
                        <p className="text-lg font-semibold">10h<span className="text-xs text-muted-foreground">/20h</span></p>
                        <p className="text-[10px] text-muted-foreground">Time</p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-2">
                        <p className="text-lg font-semibold">5<span className="text-xs text-muted-foreground">/10</span></p>
                        <p className="text-[10px] text-muted-foreground">Goals</p>
                      </div>
                    </div>
                  </div>
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
