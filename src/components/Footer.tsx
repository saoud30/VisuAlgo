
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-glass-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-electric to-neon rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-gradient">VisuAlgo</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Transform your code into vivid visual animations. Making algorithms accessible and engaging for learners worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass-white hover:bg-electric/20 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass-white hover:bg-electric/20 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <Link
                to="/contact"
                className="p-2 rounded-lg bg-glass-white hover:bg-electric/20 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/try" className="text-foreground/70 hover:text-electric transition-colors duration-200">
                  Try Visualizer
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-foreground/70 hover:text-electric transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-electric transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-electric transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-electric transition-colors duration-200">
                  GitHub Repo
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-electric transition-colors duration-200">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-electric transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-electric transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 VisuAlgo. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> for computer science education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
