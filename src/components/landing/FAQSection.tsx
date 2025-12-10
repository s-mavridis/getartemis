import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ArtemisAI?",
    answer: "ArtemisAI is a Stanford-backed personalized cancer screening platform that uses AI to analyze your health data and provide tailored risk assessments and screening recommendations.",
  },
  {
    question: "How does the risk assessment work?",
    answer: "Our AI analyzes your electronic health records, family history, and lifestyle factors to calculate your personalized cancer risk profile. Every assessment is validated by Stanford-trained oncology specialists.",
  },
  {
    question: "Is my health data secure?",
    answer: "Absolutely. We are fully HIPAA compliant and use end-to-end encryption for all health data. Your information is never shared with third parties or used for marketing purposes.",
  },
  {
    question: "What types of cancer does ArtemisAI screen for?",
    answer: "ArtemisAI currently analyzes risk factors for over 15 different cancer types, including breast, colorectal, lung, prostate, and skin cancers, among others.",
  },
  {
    question: "When will ArtemisAI be available?",
    answer: "We're currently in closed beta with early access users. Join our waitlist to be notified when we expand access. We expect to launch publicly in early 2025.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="faq">
      <div className="container-narrow">
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
            Frequently asked<br />questions
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about ArtemisAI and how it works.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-muted rounded-2xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
