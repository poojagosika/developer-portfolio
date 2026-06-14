import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward } from "react-icons/fi";
import { tumble, staggerContainer, staggerWipe } from "../animations";

const certs = [
  { title: "Cisco Cybersecurity", issuer: "Cisco", year: "2019" },
  {
    title: "LinkedIn JavaScript Assessment",
    issuer: "LinkedIn",
    year: "Passed",
  },
  { title: "LinkedIn HTML Assessment", issuer: "LinkedIn", year: "Passed" },
  { title: "LinkedIn CSS Assessment", issuer: "LinkedIn", year: "Passed" },
];

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="certifications" className="py-20" ref={ref}>
      <motion.p
        variants={tumble}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Certifications section --&gt;
      </motion.p>

      <motion.div
        variants={tumble}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            certifications<span className="text-text-muted">.verified</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {certs.map((cert) => (
          <motion.div
            key={cert.title}
            variants={staggerWipe}
            whileHover={{
              y: -6,
              scale: 1.04,
              boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
              transition: { duration: 0.3 },
            }}
            className="group rounded-2xl glass-card p-5 text-center transition-colors duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-white/4 border border-white/4 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/6 transition-colors">
              <FiAward size={22} className="text-text-secondary" />
            </div>
            <h3 className="font-bold text-text-primary text-sm mb-1">
              {cert.title}
            </h3>
            <p className="text-text-muted text-xs font-mono">
              {cert.issuer} &bull; {cert.year}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
