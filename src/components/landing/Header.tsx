import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-lg font-semibold text-foreground">ArtemisAI</span>
          </div>
          
          {/* CTA Button */}
          <Button variant="default" size="sm" onClick={onOpenModal}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
