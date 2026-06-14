import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "hero", num: "01" },
  { id: "work", label: "work", num: "02" },
  { id: "about", label: "about", num: "03" },
  { id: "services", label: "services", num: "04" },
  { id: "experience", label: "experience", num: "05" },
  { id: "education", label: "education", num: "06" },
  { id: "certifications", label: "certs", num: "07" },
  { id: "techstack", label: "tech", num: "08" },
  { id: "testimonials", label: "reviews", num: "09" },
  { id: "blog", label: "blog", num: "10" },
  { id: "contact", label: "contact", num: "11" },
];

export default function SectionIndex({ activeSection }) {
  return (
    <aside className="hidden xl:block fixed right-0 top-0 w-48 h-screen z-30">
      <div className="pt-28 px-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-4 px-2">
            // index
          </p>
          <nav className="space-y-0.5">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg font-mono text-xs transition-all duration-300 group ${
                  activeSection === s.id
                    ? "text-text-primary bg-white/5"
                    : "text-text-muted hover:text-text-secondary hover:bg-bg-hover"
                }`}
              >
                <span
                  className={`text-[10px] w-5 ${activeSection === s.id ? "text-text-secondary" : "text-text-muted"}`}
                >
                  {s.num}
                </span>
                <span>{s.label}</span>
                {activeSection === s.id && (
                  <motion.div
                    layoutId="activeIndex"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-text-secondary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </aside>
  );
}
