export function Footer() {
  return (
    <footer className="py-8 sm:py-12 bg-foreground text-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="hover:opacity-80 transition-opacity py-2">About</a>
            <span className="text-card/30 hidden sm:inline">·</span>
            <a href="#" className="hover:opacity-80 transition-opacity py-2">Privacy</a>
            <span className="text-card/30 hidden sm:inline">·</span>
            <a href="#" className="hover:opacity-80 transition-opacity py-2">Terms</a>
          </div>
          
          <p className="text-xs sm:text-sm text-card/60">
            © 2025 Artemis. HIPAA Compliant.
          </p>
        </div>
      </div>
    </footer>
  );
}