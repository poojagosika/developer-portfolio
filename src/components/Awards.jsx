import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiStar, FiTrendingUp } from "react-icons/fi";
import { fadeUp, staggerContainer, staggerItem } from "../animations";

const awards = [
  {
    icon: FiAward,
    title: "Hackathon Winner",
    desc: "1st Place — National Coding Challenge 2024",
  },
  {
    icon: FiStar,
    title: "Open Source Contributor",
    desc: "Top Contributor — Popular JS Framework 2023",
  },
  {
    icon: FiTrendingUp,
    title: "Dean's List",
    desc: "Academic Excellence — University 2020-2022",
  },
];

export default function Awards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="awards" className="py-20" ref={ref}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Awards section --&gt;
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            awards<span className="text-text-muted">.won</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {awards.map((award) => (
          <motion.div
            key={award.title}
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
            className="group rounded-2xl glass-card p-6 text-center transition-colors duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/4 border border-white/4 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/6 group-hover:scale-110 transition-all duration-300">
              <award.icon size={24} className="text-text-secondary" />
            </div>
            <h3 className="font-bold text-text-primary mb-1">{award.title}</h3>
            <p className="text-text-muted text-sm font-mono">{award.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
