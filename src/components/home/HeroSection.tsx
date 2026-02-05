import { Button } from "@/components/ui/button";
import { Shield, Play, CheckCircle } from "lucide-react";
import cameraFrontDoor from "@/assets/camera-front-door.jpg";
import cameraBackyard from "@/assets/camera-backyard.jpg";
import cameraGarage from "@/assets/camera-garage.jpg";
import cameraDriveway from "@/assets/camera-driveway.jpg";

const cameraFeeds = [
  { image: cameraFrontDoor, label: "Front Door" },
  { image: cameraBackyard, label: "Backyard" },
  { image: cameraGarage, label: "Garage" },
  { image: cameraDriveway, label: "Driveway" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Trusted Security Solutions</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Protect What Matters Most with{" "}
              <span className="text-gradient">Professional Security</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Advanced surveillance systems designed to safeguard your home and business. 
              Experience crystal-clear monitoring with our state-of-the-art security cameras 
              and enjoy complimentary professional installation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" asChild>
                <a href="#installation">Get Free Installation</a>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="#cameras">
                  <Play className="h-5 w-5" />
                  Explore Cameras
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Free Professional Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>24/7 Monitoring Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Nationwide Coverage</span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform scale-90" />
              
              {/* Main card */}
              <div className="relative bg-card border border-border rounded-3xl p-4 card-glow">
                <div className="grid grid-cols-2 gap-3">
                  {/* Camera preview cards with actual images */}
                  {cameraFeeds.map((feed) => (
                    <div key={feed.label} className="relative rounded-xl overflow-hidden border border-border group">
                      <img 
                        src={feed.image} 
                        alt={`${feed.label} camera feed`}
                        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                        <span className="text-xs text-foreground font-medium">{feed.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Status bar */}
                <div className="mt-3 flex items-center justify-between bg-secondary/50 rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground">All Systems Online</span>
                  </div>
                  <span className="text-sm text-primary font-medium">4 Cameras Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
