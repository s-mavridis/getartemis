import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = {
  question: string;
  answer: string;
};

const defaultFaqs: FAQItem[] = [
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

interface FAQSectionProps {
  customFaqs?: FAQItem[];
}

export function FAQSection({ customFaqs }: FAQSectionProps) {
  const faqs = customFaqs || defaultFaqs;
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display text-foreground mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently asked<br />questions
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about Artemis and how it works.
          </motion.p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
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
                  className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:no-underline py-4 sm:py-6 [&>svg]:w-5 [&>svg]:h-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-gray-600 pb-4 sm:pb-6">
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
