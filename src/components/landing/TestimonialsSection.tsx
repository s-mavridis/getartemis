import { motion } from "framer-motion";
import { useRef } from "react";

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
  const constraintsRef = useRef(null);

  return (
    <section className="py-24 md:py-32 bg-muted overflow-hidden">
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
            What our beta<br />clients are saying
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ArtemisAI is transforming the way people approach cancer prevention. Here's what some of our users have to say about their experience.
          </motion.p>
        </motion.div>
      </div>

      {/* Draggable testimonials carousel */}
      <div ref={constraintsRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex gap-6 pl-6"
          drag="x"
          dragConstraints={{ left: -((testimonials.length - 2) * 520), right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[400px] md:w-[500px] bg-card rounded-3xl p-8 shadow-sm select-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-20 h-28 rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <p className="text-lg font-medium leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Drag hint */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          ← Drag to explore more →
        </p>
      </div>
    </section>
  );
}
