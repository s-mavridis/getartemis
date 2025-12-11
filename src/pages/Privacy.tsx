const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl font-bold font-display mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 10, 2024</p>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-lg font-medium">
            Artemis is HIPAA compliant and takes your privacy seriously.
          </p>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">We collect:</strong> Email, health records (with your consent), and usage data
            </p>
            
            <p>
              <strong className="text-foreground">We use it for:</strong> Personalized cancer risk assessment and screening recommendations
            </p>
            
            <p>
              <strong className="text-foreground">We share it:</strong> Never, with anyone, without explicit consent
            </p>
            
            <p>
              <strong className="text-foreground">Your rights:</strong> Access, delete, or revoke access to your data anytime
            </p>
          </div>
          
          <p className="text-muted-foreground mt-8">
            <strong className="text-foreground">Data security:</strong> End-to-end encryption, secure storage, regular audits
          </p>
          
          <p className="text-muted-foreground mt-8">
            Contact: <a href="mailto:hello@artemisai.health" className="text-blue-600 hover:underline">hello@artemisai.health</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
