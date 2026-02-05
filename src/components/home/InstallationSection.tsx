import { Button } from "@/components/ui/button";
import { CheckCircle, Wrench, Clock, Award } from "lucide-react";

const benefits = [
  "Professional installation by certified technicians",
  "Optimal camera placement for maximum coverage",
  "Complete system configuration and testing",
  "Walkthrough demonstration of all features",
  "Mobile app setup and notification configuration",
  "No hidden fees or surprise charges",
];

const InstallationSection = () => {
  return (
    <section id="installation" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium mb-4 block">Free Installation</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Professional Setup at{" "}
              <span className="text-gradient">Zero Cost</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We believe in delivering complete value. That's why every security camera 
              system includes complimentary professional installation by our trained 
              experts. No DIY hassles, no extra charges—just seamless protection from 
              day one.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero">
              Schedule Free Installation
            </Button>
          </div>
          
          {/* Stats/Visual */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 text-center card-glow">
              <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">100%</div>
              <p className="text-muted-foreground">Free Installation</p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 text-center card-glow">
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">2-3 Hrs</div>
              <p className="text-muted-foreground">Average Setup Time</p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 text-center card-glow">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">10K+</div>
              <p className="text-muted-foreground">Installations Complete</p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 text-center card-glow">
              <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">99%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
