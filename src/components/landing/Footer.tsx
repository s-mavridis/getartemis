export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-card">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:opacity-80 transition-opacity">About</a>
            <span className="text-card/30">·</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy</a>
            <span className="text-card/30">·</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Terms</a>
          </div>
          
          <p className="text-sm text-card/60">
            © 2025 ArtemisAI. HIPAA Compliant.
          </p>
        </div>
      </div>
    </footer>
  );
}
