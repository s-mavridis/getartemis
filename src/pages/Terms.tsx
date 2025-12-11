import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => {}} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: December 10, 2024
            </p>
            
            <p>
              By using Artemis, you agree to:
            </p>
            
            <ol className="list-decimal list-inside space-y-3">
              <li>Provide accurate health information</li>
              <li>Use the service for personal, non-commercial purposes only</li>
              <li>Not share your account credentials</li>
              <li>Understand this is an educational tool, not medical advice</li>
            </ol>
            
            <p>
              Artemis reserves the right to update these terms at any time. Continued use constitutes acceptance of changes.
            </p>
            
            <p>
              For questions:{" "}
              <a href="mailto:hello@artemisai.health" className="text-blue-600 hover:text-blue-700 underline">
                hello@artemisai.health
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
