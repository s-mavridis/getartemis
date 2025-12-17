import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { User, Stethoscope, Briefcase, FlaskConical } from "lucide-react";

export type TestimonialCategory = "patient" | "medical" | "industry" | "researcher";

export type TestimonialItem = {
  quote: string;
  attribution: string;
  category?: TestimonialCategory;
};

const defaultTestimonials: TestimonialItem[] = [
  {
    quote: "I know I have to do it, but I don't really want to find out the answer. There's stress and anxiety from even getting the question answered. People just procrastinate until something physically shows.",
    attribution: "Individual with Family History",
    category: "patient"
  },
  {
    quote: "It's not just the fear of disease, but the fear of how much your life changes. The thinking required to reorganize everything plus the fear combined—that's what stops people.",
    attribution: "High-Risk Individual",
    category: "patient"
  },
  {
    quote: "Even cancers with screening protocols have terrible uptake. Lung cancer: 17% for smokers. Breast cancer: 60%. There's a lot of work to be done in people's heads.",
    attribution: "Patient Discussing Screening Barriers",
    category: "patient"
  },
  {
    quote: "Only 14% of cancers are screen-detected right now in the U.S. When you look at lung cancer, less than 10% of eligible patients actually get screened. There's definitely a huge gap.",
    attribution: "Oncologist, Academic Medical Center",
    category: "medical"
  },
  {
    quote: "Risk stratification is the key. It has to be a combination of things—symptoms, lab tests, imaging, EHR data. Out of the top 1,000 patients identified by the model, 113 developed pancreatic cancer within 24 months. There's a clear signal that it has validity.",
    attribution: "Healthcare Technology Executive",
    category: "industry"
  },
  {
    quote: "If your risk prediction model shows one in 125 people have pancreatic cancer versus the population average of one in 200, that's enough to justify screening. You don't even need a blood test—the risk stratification itself becomes the signal.",
    attribution: "Cancer Researcher, Academic Medical Center",
    category: "researcher"
  },
  {
    quote: "USPSTF guidelines aren't based on individual risk—they just go by age. For lung cancer, you need 20 pack-years of smoking, which is ridiculous because never-smoker lung cancer is the sixth most prevalent cancer. We're ignoring a substantial population.",
    attribution: "Proteomics Researcher, Stanford",
    category: "researcher"
  },
  {
    quote: "Risk stratification is smart. It helps physicians identify patients who will benefit most from screening. Hospital systems with strong disease programs already use homegrown risk models. The question is how to scale this across broader populations and cancer types.",
    attribution: "Director of Clinical Science, Cancer Detection Company",
    category: "industry"
  }
];

const categoryConfig = {
  patient: {
    icon: User,
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-600",
    label: "Patient"
  },
  medical: {
    icon: Stethoscope,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
    label: "Physician"
  },
  industry: {
    icon: Briefcase,
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    label: "Industry"
  },
  researcher: {
    icon: FlaskConical,
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600",
    label: "Researcher"
  }
};

interface TestimonialsSectionProps {
  customTestimonials?: TestimonialItem[];
  headerTitle?: string;
  headerSubtitle?: string;
}

export function TestimonialsSection({ 
  customTestimonials,
  headerTitle = "Voices from the Field",
  headerSubtitle = "Insights from patients, physicians, and researchers highlighting the critical gaps in cancer screening today—the problems Artemis is built to solve."
}: TestimonialsSectionProps) {
  const testimonials = customTestimonials || defaultTestimonials;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll animation for desktop
  useEffect(() => {
    if (isMobile) return;

    const cardWidth = 460; // lg:w-[440px] + gap
    const totalWidth = testimonials.length * cardWidth;
    
    let controls: ReturnType<typeof animate> | null = null;
    
    const startAnimation = () => {
      const currentX = x.get();
      const remainingDistance = -totalWidth - currentX;
      const duration = Math.abs(remainingDistance) / 50; // Speed: 50px per second
      
      controls = animate(x, -totalWidth, {
        duration,
        ease: "linear",
        onComplete: () => {
          x.set(0);
          if (!isHovered) startAnimation();
        }
      });
    };

    if (!isHovered) {
      startAnimation();
    }

    return () => {
      controls?.stop();
    };
  }, [isMobile, x, testimonials.length, isHovered]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {headerTitle}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {headerSubtitle}
          </p>
        </motion.div>
      </div>

      {/* Mobile: Draggable carousel */}
      {isMobile && (
        <div className="relative" ref={containerRef}>
          <motion.div
            className="flex gap-4 sm:gap-6 px-4 sm:px-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ 
              left: -(testimonials.length * 340) + (typeof window !== 'undefined' ? window.innerWidth : 400) - 32, 
              right: 0 
            }}
            dragElastic={0.1}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </motion.div>
        </div>
      )}

      {/* Desktop: Auto-scrolling carousel */}
      {!isMobile && (
        <div 
          className="relative overflow-hidden"
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6"
            style={{ x }}
          >
            {/* Double the testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: TestimonialItem; index: number }) {
  const category = testimonial.category || "patient";
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[440px] bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300"
    >
      <div className={`absolute top-4 right-4 w-10 h-10 rounded-full ${config.bgColor} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${config.iconColor}`} />
      </div>
      <blockquote className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 pr-12">
        "{testimonial.quote}"
      </blockquote>
      <div className="pt-4 border-t border-border/30">
        <p className="text-sm sm:text-base font-medium text-muted-foreground italic">
          — {testimonial.attribution}
        </p>
      </div>
    </motion.div>
  );
}
