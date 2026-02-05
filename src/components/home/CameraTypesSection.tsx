import { Camera, Eye, Video, Wifi, Home, Building2 } from "lucide-react";

const cameraTypes = [
  {
    icon: Camera,
    title: "Indoor Cameras",
    description: "Compact, discreet surveillance for monitoring interior spaces. Perfect for living rooms, nurseries, and home offices with wide-angle coverage.",
    features: ["HD Resolution", "Night Vision", "Two-Way Audio"],
  },
  {
    icon: Eye,
    title: "Outdoor Cameras",
    description: "Weather-resistant cameras built to withstand rain, snow, and extreme temperatures while delivering reliable outdoor monitoring.",
    features: ["Weatherproof IP66", "Motion Detection", "Color Night Vision"],
  },
  {
    icon: Video,
    title: "PTZ Cameras",
    description: "Pan-Tilt-Zoom capabilities for comprehensive coverage. Control viewing angles remotely and track movement across large areas.",
    features: ["360° Rotation", "Optical Zoom", "Auto-Tracking"],
  },
  {
    icon: Wifi,
    title: "Wireless Cameras",
    description: "Easy-to-install wire-free solutions with cloud storage options. No drilling required—just mount and connect to your WiFi network.",
    features: ["Easy Setup", "Cloud Storage", "Battery Powered"],
  },
  {
    icon: Home,
    title: "Doorbell Cameras",
    description: "Smart video doorbells that let you see, hear, and speak to visitors from anywhere using your smartphone or tablet.",
    features: ["Package Detection", "Visitor Alerts", "HD Video"],
  },
  {
    icon: Building2,
    title: "Commercial Systems",
    description: "Enterprise-grade surveillance solutions for businesses, warehouses, and retail locations with multi-camera management.",
    features: ["NVR Systems", "License Plate Recognition", "Analytics"],
  },
];

const CameraTypesSection = () => {
  return (
    <section id="cameras" className="py-24 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Security Cameras for Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential homes to large commercial facilities, we offer a comprehensive 
            range of surveillance solutions tailored to your specific requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameraTypes.map((camera, index) => (
            <div
              key={camera.title}
              className="group bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 card-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <camera.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-3">{camera.title}</h3>
              <p className="text-muted-foreground mb-4">{camera.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {camera.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CameraTypesSection;
