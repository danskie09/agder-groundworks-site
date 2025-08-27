import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import skogLogo from '@/assets/skog-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src={skogLogo}
              alt="Skog og Anleggsdrift logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Professional machinery contractor serving Agder since 2013. Specializing in excavation, blasting, transport, and quarry operations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100054403634516" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {['Services', 'Why Us', 'Pricing', 'About', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:post@skogoganleggsdrift.no"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  post@skogoganleggsdrift.no
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div className="text-primary-foreground/80">
                  <a href="tel:+4793044930" className="hover:text-accent transition-smooth block">
                    +47 930 44 930
                  </a>
                  <a href="tel:+4797086857" className="hover:text-accent transition-smooth block">
                    +47 970 86 857
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  Lundegrend, Agder, Norway
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Skog og Anleggsdrift. All rights reserved. Org. Nr: 912 306 579
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;