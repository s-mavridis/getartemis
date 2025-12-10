import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from asking ChatGPT about my health?",
    answer: "ChatGPT doesn't have your medical records. We analyze YOUR actual health data—not generic population statistics. Plus, we connect you directly to screening providers, not just information.",
  },
  {
    question: "Is my health data secure?",
    answer: "Yes. Your data is encrypted end-to-end and we follow all HIPAA regulations. We never share your data with third parties without explicit consent, and you can revoke access anytime.",
  },
  {
    question: "Will insurance cover the recommended tests?",
    answer: "Many tests are covered when you have documented risk factors. We help you navigate insurance pre-authorization and can connect you to affordable out-of-pocket options when needed.",
  },
  {
    question: "Do I need to have cancer to use this?",
    answer: "No—we're focused on prevention. This is for healthy people who want to catch cancer early through personalized screening.",
  },
  {
    question: "What happens after I sign up?",
    answer: "We'll email you within 24 hours with secure instructions to connect your EHR. After you connect, our AI analyzes your data (24-48 hours) and you'll receive your personalized risk assessment and screening recommendations.",
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
