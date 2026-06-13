import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SectionIndex from "./components/SectionIndex";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import CursorGlow from "./components/CursorGlow";
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <div className="noise-overlay">
      <>
          <Navbar
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <MusicPlayer />
          <CursorGlow />

          <div className="flex relative z-10">
            {/* Left Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 min-w-0 lg:ml-72 xl:mr-48">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                <Hero />
                <About />
                <Services />
                <Work />
                <Experience />
                <Education />
                <Certifications />
                <TechStack />
                <Testimonials />
                <Blog />
                <Contact />
                <Footer />
              </div>
            </main>

            {/* Right Sidebar - Section Index */}
            <SectionIndex activeSection={activeSection} />
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <MobileMenu
                setMobileMenuOpen={setMobileMenuOpen}
                activeSection={activeSection}
              />
            )}
          </AnimatePresence>
      </>
    </div>
  );
}

import { motion } from "framer-motion";

function MobileMenu({ setMobileMenuOpen, activeSection }) {
  const sections = [
    { id: "hero", label: "hero", num: "01" },
    { id: "about", label: "about", num: "02" },
    { id: "services", label: "services", num: "03" },
    { id: "work", label: "work", num: "04" },
    { id: "experience", label: "experience", num: "05" },
    { id: "education", label: "education", num: "06" },
    { id: "certifications", label: "certs", num: "07" },
    { id: "techstack", label: "tech stack", num: "08" },
    { id: "testimonials", label: "testimonials", num: "09" },
    { id: "blog", label: "blog", num: "10" },
    { id: "contact", label: "contact", num: "11" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      <div
        className="absolute inset-0 bg-bg-primary/90 backdrop-blur-xl"
        onClick={() => setMobileMenuOpen(false)}
      />
      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-72 h-full glass-sidebar p-8 flex flex-col gap-2 overflow-y-auto"
      >
        <p className="font-mono text-text-muted text-xs mb-4">// navigation</p>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
              activeSection === s.id
                ? "bg-white/5 text-text-primary"
                : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"
            }`}
          >
            <span className="text-text-muted text-xs w-6">{s.num}</span>
            <span>{s.label}</span>
          </a>
        ))}
      </motion.nav>
    </motion.div>
  );
}
