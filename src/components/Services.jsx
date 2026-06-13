import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiServer, FiLayers, FiLayout } from "react-icons/fi";
import { fadeUp, staggerContainer, staggerItem } from "../animations";

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    desc: "Building responsive, performant web applications using the MERN stack and modern best practices.",
  },
  {
    icon: FiServer,
    title: "DevOps & Cloud",
    desc: "Setting up CI/CD pipelines, Docker containers, and AWS infrastructure for reliable, automated deployments.",
  },
  {
    icon: FiLayers,
    title: "API Design",
    desc: "Designing and developing RESTful APIs with Express.js and Node.js that are scalable and well-documented.",
  },
  {
    icon: FiLayout,
    title: "UI/UX Design",
    desc: "Crafting intuitive interfaces with a focus on user experience, accessibility, and visual appeal.",
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="services" className="py-20" ref={ref}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Services section --&gt;
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            services<span className="text-text-muted">.offer</span>
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
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl glass-card p-6 transition-colors duration-500"
          >
            <div className="inline-flex p-3 rounded-xl bg-white/6 border border-white/6 mb-4 group-hover:bg-white/6 transition-colors">
              <service.icon
                size={24}
                className="text-text-secondary group-hover:text-text-primary transition-colors"
              />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
