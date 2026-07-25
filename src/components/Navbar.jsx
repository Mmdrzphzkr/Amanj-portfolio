import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Services", to: "services" },
  { name: "Experience", to: "experience" },
  { name: "Team", to: "team" },
  { name: "Projects", to: "projects" },
  { name: "Order", to: "order" },
  { name: "Contact", to: "contact" },
];

// ✅ Plain SVG icons - no react-icons library needed
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-lg shadow-accent/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="hero"
              smooth
              duration={800}
              className="cursor-pointer flex items-center gap-2"
            >
              <div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-neonGreen 
                flex items-center justify-center"
              >
                <span className="font-heading font-black text-white text-lg">
                  A
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg tracking-wider">
                  AMANJ
                </span>
                <span className="font-heading font-bold text-accent text-lg ml-1">
                  DEVS
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={800}
                  offset={-80}
                  spy
                  activeClass="text-accent"
                  className="px-3 py-2 font-body font-medium text-sm text-gray-300
                    hover:text-accent cursor-pointer transition-colors duration-300 tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="order" smooth duration={800} offset={-80}>
                <button className="btn-primary ml-4 text-xs py-2 px-6">
                  GET A QUOTE
                </button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 glass-strong p-8 pt-24">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={800}
                      offset={-80}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 font-body font-medium text-gray-300
                        hover:text-accent hover:bg-accent/5 rounded-lg cursor-pointer
                        transition-all duration-300 tracking-wide"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="order"
                  smooth
                  duration={800}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                >
                  <button className="btn-primary w-full mt-4 text-xs py-3">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
