import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-accent text-white py-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Left column - Logo and info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-display font-semibold">ArtemisAI</span>
            </div>
            <p className="text-white/60">Cancer Prevention OS</p>
            <p className="text-white/40 text-sm">Built in Stanford, CA</p>
            <a 
              href="mailto:hello@artemisai.health" 
              className="text-white/60 hover:text-primary transition-colors text-sm inline-block"
            >
              hello@artemisai.health
            </a>
          </div>
          
          {/* Middle column - Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Our Science
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Right column - Resources */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#faq" className="text-white/60 hover:text-primary transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="mailto:hello@artemisai.health" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-sm text-center">
            © 2024 ArtemisAI. All rights reserved. | HIPAA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}