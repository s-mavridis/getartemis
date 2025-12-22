import { motion } from "framer-motion";

const features = [
  {
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
    title: "Neutral Medical Guidance",
    description: "When it comes from a doctor, it's different. Our Stanford physicians provide the medical authority that helps reluctant partners take action.",
  },
  {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80",
    title: "Every Screening Option",
    description: "Blood tests, imaging, colonoscopy—we present all options clearly and objectively. Your partner can choose what feels right for them.",
  },
  {
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80",
    title: "Stanford Physician Support",
    description: "A compassionate Stanford-trained physician talks directly to your partner. You don't have to be the one delivering medical advice anymore.",
  },
  {
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&q=80",
    title: "Clear, Gentle Path Forward",
    description: "We provide a clear screening plan without pressure. Your partner gets the information they need to make their own informed decision.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop&q=80",
    title: "Relationship Preservation",
    description: "You're no longer the one pushing—we are. Many couples find it reduces conflict around health conversations.",
  },
  {
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&q=80",
    title: "Compassionate Approach",
    description: "Our physicians are trained to work with avoidant patients using a no-pressure approach that respects autonomy.",
  }
];

export function Support5FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">How we help</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            We Take the Pressure Off
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Neutral medical authority that helps reluctant partners take action—without you being the bad guy.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-5 ring-2 ring-primary/20">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
