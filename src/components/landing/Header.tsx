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
          ? "bg-background/95 backdrop-blur-md py-4" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className={`text-xl font-semibold transition-colors ${scrolled ? 'text-foreground' : 'text-foreground'}`}>
              ArtemisAI
            </span>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant={scrolled ? "hero" : "heroLight"}
            size="default" 
            onClick={onOpenModal}
            className="uppercase tracking-wider text-xs font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
