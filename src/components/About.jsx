import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { wipe, panRight } from "../animations";
import MacTerminal from "./MacTerminal";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="about" className="py-20" ref={ref}>
      <motion.p
        variants={wipe}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- About section --&gt;
      </motion.p>

      <motion.div
        variants={wipe}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            about<span className="text-text-muted">.me</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10">
        <motion.div
          className="lg:col-span-3 space-y-4"
          variants={wipe}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
        >
          <p className="text-text-secondary leading-relaxed">
            I'm a Lead Software Engineer who builds and scales products
            end-to-end — from idea to deployment to optimization. I don't just
            write code — I own outcomes. From architecture decisions to
            production deployment, I ensure systems are efficient, scalable, and
            production-ready.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Currently at{" "}
            <span className="text-text-primary font-medium">Upivot</span>, I
            operate as a Lead Developer, owning the entire product lifecycle —
            translating business requirements into scalable features, designing
            full-stack applications with the MERN stack, and managing AWS
            infrastructure & CI/CD pipelines.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Previously at{" "}
            <span className="text-text-primary font-medium">Accenture</span>, I
            worked as a Software Developer specializing in Salesforce, building
            enterprise-grade solutions and gaining strong foundations in
            scalable system design.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          variants={panRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
        >
          <MacTerminal title="about.json">
            <div className="text-[11px] space-y-2">
              {[
                { label: "name", value: '"Pooja"' },
                { label: "role", value: '"Lead Software Engineer"' },
                { label: "company", value: '"Upivot"' },
                { label: "location", value: '"Hyderabad, India"' },
                { label: "stack", value: '"MERN + DevOps"' },
                { label: "education", value: '"B.Tech ECE"' },
                { label: "focus", value: '"Scalable Systems"' },
                { label: "email", value: '"pooja0xdev@gmail.com"' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center"
                >
                  <span className="text-text-muted">{item.label}:</span>
                  <span className="text-text-secondary">{item.value}</span>
                </div>
              ))}
            </div>
          </MacTerminal>
        </motion.div>
      </div>
    </section>
  );
}
