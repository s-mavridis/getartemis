import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-semibold">ArtemisAI</span>
            </div>
            <p className="text-slate-400">Cancer Prevention OS</p>
            <p className="text-slate-500 text-sm">Built in Stanford, CA</p>
            <a 
              href="mailto:hello@artemisai.health" 
              className="text-slate-400 hover:text-primary transition-colors text-sm"
            >
              hello@artemisai.health
            </a>
          </div>
          
          {/* Middle column - Company */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">
                  Our Science
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Right column - Resources */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-slate-400 hover:text-primary transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="mailto:hello@artemisai.health" className="text-slate-400 hover:text-primary transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        
        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © 2024 ArtemisAI. All rights reserved. | HIPAA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
