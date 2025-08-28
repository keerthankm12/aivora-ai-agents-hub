import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="glass-card border-0 border-t border-glass-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div className="text-center md:text-left">
              <span className="text-lg font-bold gradient-text">The Aivora</span>
              <p className="text-sm text-muted-foreground">
                We deploy agents, You deploy growth.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 The Aivora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;