import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBookOpen } from "react-icons/fi";
import { fadeUp, staggerContainer, staggerItem } from "../animations";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics & Communication Engineering",
    school: "Sphoorthy Engineering College",
    period: "2018 — 2022",
  },
  {
    degree: "Intermediate (12th)",
    field: "MPC",
    school: "Sri Chaitanya College of Education",
    period: "2016 — 2018",
  },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="education" className="py-20" ref={ref}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Education section --&gt;
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            education<span className="text-text-muted">.grad</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={staggerItem}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group rounded-2xl glass-card p-5 transition-colors duration-500"
          >
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white/4 border border-white/4 flex items-center justify-center group-hover:bg-white/6 transition-colors">
                <FiBookOpen size={20} className="text-text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary text-lg">
                  {edu.degree}
                </h3>
                <p className="text-text-secondary font-mono text-sm">
                  {edu.field}
                </p>
                <p className="text-text-muted text-sm mt-1 font-mono">
                  {edu.school} &bull; {edu.period}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
