import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I always felt anxious about cancer screening, yet ArtemisAI gave me clarity and peace of mind. Truly life-changing!",
    name: "Sarah Chen",
    role: "Early Access User",
    avatar: "SC"
  },
  {
    quote: "The personalized risk assessment helped me understand my health better than any doctor visit ever has.",
    name: "Michael Roberts",
    role: "Beta Tester",
    avatar: "MR"
  },
  {
    quote: "Finally, a platform that makes cancer prevention accessible and understandable. The Stanford backing gives me confidence.",
    name: "Emily Johnson",
    role: "Healthcare Professional",
    avatar: "EJ"
  },
  {
    quote: "ArtemisAI's expert validation process sets it apart. Knowing real oncologists review my assessment is invaluable.",
    name: "David Park",
    role: "Early Access User",
    avatar: "DP"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-muted overflow-hidden">
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
            What our beta<br />clients are saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            ArtemisAI is transforming the way people approach cancer prevention. Here's what some of our users have to say about their experience.
          </p>
        </motion.div>
      </div>

      {/* Testimonials carousel */}
      <div className="relative">
        <motion.div
          className="flex gap-6 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="flex-shrink-0 w-[400px] md:w-[500px] bg-card rounded-3xl p-8 shadow-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-32 rounded-2xl bg-gradient-to-br from-sky-200 to-sky-300 flex items-center justify-center overflow-hidden">
                    <span className="text-2xl font-semibold text-sky-700">{testimonial.avatar}</span>
                  </div>
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
      </div>
    </section>
  );
}
