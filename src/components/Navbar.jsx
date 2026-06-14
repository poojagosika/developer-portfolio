import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="font-mono text-lg font-bold group">
            <span className="text-text-muted group-hover:text-text-secondary transition-colors">
              &lt;
            </span>
            <span className="text-text-primary">PG</span>
            <span className="text-text-muted group-hover:text-text-secondary transition-colors">
              {" "}
              /&gt;
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { href: "#work", label: "work", ext: ".done" },
              { href: "#about", label: "about", ext: ".info" },
              { href: "#experience", label: "experience", ext: ".log" },
              { href: "#blog", label: "blog", ext: ".share" },
              { href: "#contact", label: "contact", ext: ".send" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm px-3 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all duration-300"
              >
                {link.label}
                <span className="text-text-muted">{link.ext}</span>
              </a>
            ))}
          </div>

          {/* Availability Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-border">
            <div
              className="w-2 h-2 rounded-full bg-[#28c840]"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            <span className="font-mono text-xs text-text-secondary">
              Available
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
