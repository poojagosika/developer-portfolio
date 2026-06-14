import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fade, staggerContainer, staggerSkate } from "../animations";

const testimonials = [
  {
    text: "Pooja single-handedly built and shipped our entire platform — from architecture to deployment. Her ability to own the full product lifecycle is rare and invaluable.",
    name: "Abhik Chowdhury",
    role: "Founder, Upivot",
    initials: "AC",
  },
  {
    text: "One of the most reliable engineers I've worked with. She doesn't just write code — she thinks about scale, performance, and user experience at every step.",
    name: "Ravi Shankar",
    role: "Engineering Lead, Accenture",
    initials: "RS",
  },
  {
    text: "Pooja brought our vision to life with clean, maintainable code and pixel-perfect execution. Her communication and delivery are consistently top-notch.",
    name: "Neha Verma",
    role: "Product Manager, Upivot",
    initials: "NV",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20" ref={ref}>
      <motion.p
        variants={fade}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Testimonials section --&gt;
      </motion.p>

      <motion.div
        variants={fade}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            testimonials<span className="text-text-muted">.read</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={staggerSkate}
            whileHover={{
              y: -6,
              scale: 1.03,
              transition: { duration: 0.3, type: "spring", stiffness: 150 },
            }}
            className="group rounded-2xl glass-card p-6 transition-colors duration-500 relative overflow-hidden"
          >
            <span className="absolute top-3 right-4 text-5xl font-serif text-white/3 select-none leading-none">
              "
            </span>

            <p className="text-sm text-text-secondary leading-relaxed mb-5 relative z-10">
              "{t.text}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-bg-hover border border-border flex items-center justify-center">
                <span className="text-xs font-bold text-text-secondary">
                  {t.initials}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">
                  {t.name}
                </h4>
                <p className="text-xs text-text-muted font-mono">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
