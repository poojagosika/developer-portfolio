import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer, staggerItem } from "../animations";

const testimonials = [
  {
    text: "An exceptional developer who consistently delivers high-quality code. Their attention to detail and problem-solving skills are remarkable.",
    name: "John Doe",
    role: "Engineering Manager, Tech Co.",
    initials: "JD",
  },
  {
    text: "Working with Pooja was a fantastic experience. They understood our requirements perfectly and delivered beyond expectations.",
    name: "Alice Smith",
    role: "Product Manager, Digital Agency",
    initials: "AS",
  },
  {
    text: "A true team player with excellent communication skills. They bring both technical expertise and creative thinking to every project.",
    name: "Mike Johnson",
    role: "CTO, Startup Labs",
    initials: "MJ",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20" ref={ref}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Testimonials section --&gt;
      </motion.p>

      <motion.div
        variants={fadeUp}
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
            variants={staggerItem}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
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
