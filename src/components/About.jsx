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
            I'm a Lead Software Engineer who builds products end-to-end, from
            the first conversation about what to build to keeping it fast and
            stable in production. I care about outcomes more than tickets: the
            right architecture, a clean deploy, and a product people actually
            use.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Currently at{" "}
            <span className="text-text-primary font-medium">Upivot</span>, I
            own engineering for two products. Upivot is the platform behind a PM
            career program: video lessons, payments, cohorts and admin tools.
            InterviewPrepUp is an AI mock interviewer with real-time voice,
            speech-to-text and LLM scoring. I designed both on React, Node.js
            and MongoDB, and run them on AWS with CI/CD.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Previously at{" "}
            <span className="text-text-primary font-medium">Accenture</span>, I
            worked as a Software Developer specializing in Salesforce, building
            enterprise-grade solutions and gaining strong foundations in
            scalable system design.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Outside work I contribute to open source. I've had fixes merged in{" "}
            <span className="text-text-primary font-medium">TraceRoot</span>,{" "}
            <span className="text-text-primary font-medium">Modelence</span> and{" "}
            <span className="text-text-primary font-medium">Lago</span>.
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
                { label: "open_to", value: '"Remote / US roles"' },
                { label: "stack", value: '"MERN + AI + AWS"' },
                { label: "education", value: '"B.Tech ECE"' },
                { label: "focus", value: '"AI products"' },
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
