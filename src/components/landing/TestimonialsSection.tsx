import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "I always felt anxious about cancer screening, yet ArtemisAI gave me clarity and peace of mind. Truly life-changing!",
    name: "Sarah Chen",
    role: "Early Access User",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The personalized risk assessment helped me understand my health better than any doctor visit ever has.",
    name: "Michael Roberts",
    role: "Beta Tester",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Finally, a platform that makes cancer prevention accessible and understandable. The Stanford backing gives me confidence.",
    name: "Emily Johnson",
    role: "Healthcare Professional",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "ArtemisAI's expert validation process sets it apart. Knowing real oncologists review my assessment is invaluable.",
    name: "David Park",
    role: "Early Access User",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "As someone with a family history of cancer, this platform gave me the proactive tools I needed. Highly recommend!",
    name: "Lisa Martinez",
    role: "Beta Tester",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The interface is incredibly intuitive. Got my risk assessment in minutes and the recommendations were spot-on.",
    name: "James Wilson",
    role: "Early Access User",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "I've recommended ArtemisAI to all my patients. It's exactly what preventive healthcare needs.",
    name: "Dr. Amanda Foster",
    role: "Oncologist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The peace of mind this platform provides is priceless. Finally feel in control of my health journey.",
    name: "Robert Kim",
    role: "Beta Tester",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  }
];

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
  }, [isHovered, isMobile, x]);

  // Handle horizontal scroll on desktop (wheel event)
  const handleWheel = (e: React.WheelEvent) => {
    if (isMobile) return;
    
    // Allow horizontal scrolling with mouse wheel
    const delta = e.deltaY || e.deltaX;
    const newX = x.get() - delta;
    const cardWidth = 460;
    const totalWidth = testimonials.length * cardWidth;
    const clampedX = Math.max(-totalWidth + window.innerWidth, Math.min(0, newX));
    x.set(clampedX);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted overflow-hidden">
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
            What our beta<br />clients are saying
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ArtemisAI is transforming the way people approach cancer prevention. Here's what some of our users have to say about their experience.
          </motion.p>
        </motion.div>
      </div>

      {/* Mobile: Draggable carousel */}
      <div className="lg:hidden overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex gap-4 sm:gap-6 pl-4 sm:pl-6"
          drag="x"
          dragConstraints={{ left: -((testimonials.length - 1) * 320), right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`mobile-${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
        
        {/* Drag hint */}
        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 px-4">
          ← Drag to explore more →
        </p>
      </div>

      {/* Desktop: Auto-scrolling with hover-to-pause and scroll control */}
      <div 
        ref={containerRef}
        className="hidden lg:block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onWheel={handleWheel}
      >
        <motion.div
          ref={scrollRef}
          className="flex gap-6 pl-6"
          style={{ x }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`desktop-${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
        
        {/* Scroll hint */}
        <p className="text-center text-sm text-muted-foreground mt-6 px-4">
          Hover to pause • Scroll to navigate
        </p>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[280px] sm:w-[360px] lg:w-[440px] bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm select-none"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-12 h-12 sm:w-16 sm:h-20 lg:w-20 lg:h-28 rounded-full sm:rounded-2xl object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">
          <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-4 sm:mb-6">
            "{testimonial.quote}"
          </p>
          <div>
            <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
