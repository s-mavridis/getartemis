import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => {}} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: December 10, 2024
            </p>
            
            <p>
              Artemis is HIPAA compliant and takes your privacy seriously.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">We collect:</h3>
                <p>Email, health records (with your consent), and usage data</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground">We use it for:</h3>
                <p>Personalized cancer risk assessment and screening recommendations</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground">We share it:</h3>
                <p>Never, with anyone, without explicit consent</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground">Your rights:</h3>
                <p>Access, delete, or revoke access to your data anytime</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground">Data security:</h3>
                <p>End-to-end encryption, secure storage, regular audits</p>
              </div>
            </div>
            
            <p>
              Contact:{" "}
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

export default Privacy;
