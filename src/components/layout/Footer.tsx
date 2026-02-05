import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-xl">
                USA Security<span className="text-primary">Cameras</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Your trusted partner for professional security camera solutions across the United States. 
              Protecting homes and businesses with cutting-edge surveillance technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <a href="/#cameras" className="text-muted-foreground hover:text-primary transition-colors">
                Camera Types
              </a>
              <a href="/#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="/#installation" className="text-muted-foreground hover:text-primary transition-colors">
                Free Installation
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} USA Security Cameras. All rights reserved.</p>
          <p className="mt-2">
            Professional security solutions for residential and commercial properties.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
