import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">A</span>
            </div>
            <span className={`text-xl font-display font-semibold transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}>
              ArtemisAI
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#how-it-works" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              FAQs
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button 
            variant={scrolled ? "default" : "heroLight"} 
            size="default" 
            onClick={onOpenModal}
            className={scrolled ? "" : "py-2 px-6"}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}