const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl font-bold font-display mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 10, 2024</p>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <p>By using Artemis, you agree to:</p>
          
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Provide accurate health information</li>
            <li>Use the service for personal, non-commercial purposes only</li>
            <li>Not share your account credentials</li>
            <li>Understand this is an educational tool, not medical advice</li>
          </ol>
          
          <p className="text-muted-foreground mt-8">
            Artemis reserves the right to update these terms at any time. 
            Continued use constitutes acceptance of changes.
          </p>
          
          <p className="text-muted-foreground mt-8">
            For questions: <a href="mailto:hello@artemisai.health" className="text-blue-600 hover:underline">hello@artemisai.health</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
