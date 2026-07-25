import React from "react";
import { Link } from "react-scroll";
import { HiHeart, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative border-t border-darkBorder bg-primary/80">
      {/* Back to top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <Link to="hero" smooth duration={1000}>
          <button
            className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center 
              text-white hover:bg-accentLight transition-colors shadow-lg shadow-accent/30 
              cursor-pointer"
          >
            <HiArrowUp />
          </button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-neonGreen flex items-center justify-center">
                <span className="font-heading font-black text-white text-sm">
                  A
                </span>
              </div>
              <span className="font-heading font-bold text-white tracking-wider">
                AMANJ <span className="text-accent">DEVS</span>
              </span>
            </div>
            <p className="font-body text-sm text-gray-500 leading-relaxed">
              Building digital products that make a difference. Websites, apps,
              and trading bots crafted with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "About",
                "Skills",
                "Services",
                "Experience",
                "Team",
                "Projects",
                "Order",
                "Contact",
              ].map((link) => (
                <Link
                  key={link}
                  to={link.toLowerCase()}
                  smooth
                  duration={800}
                  offset={-80}
                  className="font-body text-sm text-gray-500 hover:text-accent 
                      cursor-pointer transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "App Development",
                "Trading Bots",
                "UI/UX Design",
                "Consulting",
              ].map((service) => (
                <li key={service} className="font-body text-sm text-gray-500">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-darkBorder pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-600">
            © {new Date().getFullYear()} Amanj Devs. All rights reserved.
          </p>
          <p className="font-body text-xs text-gray-600 flex items-center gap-1">
            Made with <HiHeart className="text-neonPink" /> by Amanj Devs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
