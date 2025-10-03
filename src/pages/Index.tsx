import ScrollRevealCards from "@/components/ScrollRevealCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Scroll Down
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Watch the cards appear one by one
          </p>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Reveal Cards Section */}
      <ScrollRevealCards />

      {/* Footer Section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 to-background">
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            That's All!
          </h2>
          <p className="text-lg text-muted-foreground">
            You've discovered all our core values
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
