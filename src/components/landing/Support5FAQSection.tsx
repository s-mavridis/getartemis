import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type FAQItem = {
  question: string;
  answer: string;
};

interface Support5FAQSectionProps {
  customFaqs?: FAQItem[];
  onOpenModal?: () => void;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How do I get my partner to use this?",
    answer: "You can sign up on their behalf (we'll reach out gently) or simply share this page with them. Our approach is compassionate and informative, not pushy.",
  },
  {
    question: "Is their health data secure?",
    answer: "Absolutely. All data is encrypted end-to-end and HIPAA compliant. Their information stays private—even from you, unless they choose to share it.",
  },
  {
    question: "What if they're really resistant?",
    answer: "Our physicians are trained to work with avoidant patients. They use a compassionate, no-pressure approach.",
  },
  {
    question: "Will this put pressure on our relationship?",
    answer: "The opposite, usually. You're no longer the one pushing—we are. Many couples find it reduces conflict around health conversations.",
  },
  {
    question: "What happens after I sign up?",
    answer: "We'll reach out within 24 hours with a gentle, informative message. Everything is at their pace.",
  },
];

export function Support5FAQSection({ customFaqs, onOpenModal }: Support5FAQSectionProps) {
  const faqs = customFaqs || defaultFaqs;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-cream" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 sm:p-10 text-primary-foreground"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            {/* Phone icon */}
            <div className="relative z-10 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-8">
              <Phone className="w-6 h-6" />
            </div>
            
            <h3 className="relative z-10 text-2xl sm:text-3xl font-display mb-8">
              Still not sure? Get your<br />partner screened today.
            </h3>
            
            <Button 
              onClick={onOpenModal}
              className="relative z-10 w-full bg-white text-primary hover:bg-white/90 rounded-full py-6 text-base font-medium"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            
            <p className="relative z-10 text-center text-white/80 mt-4 text-sm">
              or support@tryartemis.ai
            </p>
          </motion.div>

          {/* Right FAQ List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-primary font-medium">Frequently</span>
                <span className="text-sm text-muted-foreground">asked questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display text-foreground">
                Answers to your<br />asked queries
              </h2>
            </motion.div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 border-b border-border/50 group text-left"
                  >
                    <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-foreground flex items-center justify-center transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}>
                      {expandedIndex === index ? (
                        <ChevronDown className="w-5 h-5 text-background" />
                      ) : (
                        <ArrowRight className="w-5 h-5 text-background" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="py-4 text-muted-foreground text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
