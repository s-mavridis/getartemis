import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

export type TestimonialItem = {
  quote: string;
  attribution: string;
};

const defaultTestimonials: TestimonialItem[] = [
  {
    quote: "I know I have to do it, but I don't really want to find out the answer. There's stress and anxiety from even getting the question answered. People just procrastinate until something physically shows.",
    attribution: "Individual with Family History"
  },
  {
    quote: "Only 14% of cancers are screen-detected right now in the U.S. When you look at lung cancer, less than 10% of eligible patients actually get screened. There's definitely a huge gap.",
    attribution: "Oncologist, Academic Medical Center"
  },
  {
    quote: "Even cancers with screening protocols have terrible uptake. Lung cancer: 17% for smokers. Breast cancer: 60%. There's a lot of work to be done in people's heads.",
    attribution: "Patient Discussing Screening Barriers"
  },
  {
    quote: "It's not just the fear of disease, but the fear of how much your life changes. The thinking required to reorganize everything plus the fear combined—that's what stops people.",
    attribution: "High-Risk Individual"
  },
  {
    quote: "For broad adoption of screening tests, coverage requires literally an act of Congress. The perfect is the enemy of the good—frustrating for the whole field and for patients.",
    attribution: "VP Medical Affairs, Cancer Detection Company"
  },
  {
    quote: "The payer space is super complicated in preventative medicine. It's a really heavy, expensive lift to navigate legislative efforts, regulatory pathways, and private payers.",
    attribution: "Industry Executive, Leading Cancer Detection Company"
  },
  {
    quote: "Even if it's non-invasive, there are barriers: 'What if it's positive? What do I do after? It's expensive. If my doctor doesn't mention it, why would I?' People lean toward 'no.'",
    attribution: "Patient Discussing Screening Decisions"
  },
  {
    quote: "What's mysterious is how we act—the behavioral side. The medical science is covered. The real question is understanding what motivates people to screen.",
    attribution: "Behavioral Science Researcher"
  }
];

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[440px] bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
      <blockquote className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 pr-8">
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
