import { motion } from "framer-motion";

export function Support5StatsSection() {
  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground">
            Why This Matters for Your Family
          </h2>
        </motion.div>

        {/* Marquee-style stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-5xl sm:text-6xl font-bold text-accent mb-2">86%</p>
            <p className="text-muted-foreground">of cancers are found accidentally</p>
          </motion.div>

          <div className="hidden md:block w-px h-16 bg-border" />

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-5xl sm:text-6xl font-bold text-accent mb-2">2%</p>
            <p className="text-muted-foreground">of cancer types have screening protocols</p>
          </motion.div>

          <div className="hidden md:block w-px h-16 bg-border" />

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-5xl sm:text-6xl font-bold text-accent mb-2">50+</p>
            <p className="text-muted-foreground">typical screening age—but cancer doesn't wait</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
