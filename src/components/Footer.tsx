import React from 'react';
import { Heart, ArrowUp, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': ['Home', 'About', 'Services', 'Contact'],
    'Services': ['UI/UX Design', 'Web Development', 'Mobile Apps', 'Branding'],
    'Company': ['About Us', 'Our Team', 'Careers', 'Privacy Policy', 'Terms of Service']
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-lime-400 mb-4">
              CreativeFlow
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating exceptional digital experiences that blend creativity with functionality. 
              Let's bring your vision to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-lime-400 hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      className="text-gray-400 hover:text-lime-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0 flex items-center">
              Made with <Heart className="text-red-500 mx-2" size={16} /> by CreativeFlow
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-gray-400">
                © 2024 CreativeFlow. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-black hover:bg-lime-500 transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;