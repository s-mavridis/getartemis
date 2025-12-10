import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How is this different from asking ChatGPT about my health?",
    answer: "ChatGPT doesn't have your medical records. We analyze YOUR actual health data—not generic population statistics. Plus, we connect you directly to screening providers, not just information.",
  },
  {
    question: "Do I need to have cancer to use this?",
    answer: "No—we're focused on prevention. This is for healthy people who want to catch cancer early (or prevent it entirely) through personalized screening.",
  },
  {
    question: "Will insurance cover the recommended tests?",
    answer: "Many tests are covered when you have documented risk factors. We help you navigate insurance pre-authorization and can connect you to affordable out-of-pocket options when needed.",
  },
  {
    question: "How do you access my health records?",
    answer: "You grant us secure, one-time access through FHIR APIs (the same technology Epic and other EHRs use). Alternatively, you can complete our comprehensive health questionnaire.",
  },
  {
    question: "What happens after I get my risk assessment?",
    answer: "You'll receive a detailed report with specific screening recommendations, provider options, and—if you want—ongoing monitoring for any changes in your risk profile.",
  },
  {
    question: "Is this FDA-approved?",
    answer: "We're a clinical decision support tool, not a diagnostic device, so we don't require FDA approval. We follow evidence-based guidelines from USPSTF, NCCN, and published medical literature.",
  },
];

export function FAQSection() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Questions? We've Got Answers.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
