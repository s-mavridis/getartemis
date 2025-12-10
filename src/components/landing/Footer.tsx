import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Logo column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-display">ArtemisAI</span>
              <span className="text-secondary text-lg">®</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Cancer Prevention OS. Built by Stanford researchers.
            </p>
            <a 
              href="mailto:hello@artemisai.health" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-block"
            >
              hello@artemisai.health
            </a>
          </div>
          
          {/* Company column */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Our Science
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources column */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="mailto:hello@artemisai.health" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        
        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-muted-foreground text-sm text-center">
            © 2024 ArtemisAI. All rights reserved. HIPAA Compliant.
          </p>
        </div>
      </div>
    </footer>
  );
}