import { Smartphone, Cloud, Moon, Zap, Lock, Headphones } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile App Control",
    description: "Monitor your property from anywhere with our intuitive mobile application. Receive instant alerts and view live footage on iOS and Android devices.",
  },
  {
    icon: Cloud,
    title: "Secure Cloud Storage",
    description: "Never worry about losing footage. Our encrypted cloud storage keeps your recordings safe and accessible for up to 30 days.",
  },
  {
    icon: Moon,
    title: "Advanced Night Vision",
    description: "Crystal-clear video even in complete darkness. Our infrared and starlight technology ensures round-the-clock visibility.",
  },
  {
    icon: Zap,
    title: "Smart Motion Detection",
    description: "AI-powered detection distinguishes between people, vehicles, and animals. Reduce false alerts and focus on what matters.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption protects your video feeds from unauthorized access. Your privacy is our top priority.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our expert team is available to assist with setup, troubleshooting, and system optimization whenever you need help.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge Technology at Your Fingertips
          </h2>
          <p className="text-muted-foreground text-lg">
            Our security systems combine advanced hardware with intelligent software 
            to deliver unmatched protection and peace of mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
