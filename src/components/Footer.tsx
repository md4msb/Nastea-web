import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from 'lucide-react'; // Assuming these icons are available

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/nastea.in?igsh=cGxmNDJiZXdiaXZu' },
  ];

  return (
    <footer className="bg-nasteaGreen-dark text-nasteaBeige-light py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-nasteaWhite">Nastea</h3>
            <p className="text-sm">
              Bringing you the finest organic teas from the heart of India.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-nasteaWhite">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-nasteaWhite transition-colors">Our Teas</a></li>
              <li><a href="#why-us" className="hover:text-nasteaWhite transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-nasteaWhite transition-colors">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-nasteaWhite">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:nastealeaf@gmail.com" className="hover:text-nasteaWhite transition-colors">nastealeaf@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+917034271777" className="hover:text-nasteaWhite transition-colors">+91 7034271777</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-nasteaBeige-light hover:text-nasteaWhite transition-colors"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-nasteaGreen pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Nastea. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
