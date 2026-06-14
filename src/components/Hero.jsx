import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import MacTerminal from "./MacTerminal";

function Typewriter({ text, delay = 0, speed = 60, className }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayed, started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span
          className="text-text-primary"
          style={{ animation: "blink 0.6s step-end infinite" }}
        >
          |
        </span>
      )}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center py-20"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-mono text-xs text-text-muted mb-8"
      >
        &lt;!-- Hero section --&gt;
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="font-mono text-sm text-text-muted mb-4">
          <span className="text-text-muted/50">&lt;h1&gt;</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
          <Typewriter text="Hey, I'm " delay={400} speed={70} />
          <span className="relative inline-block">
            <Typewriter
              text="Pooja"
              delay={1050}
              speed={90}
              className="text-white"
            />
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-px bg-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </h1>

        <div className="font-mono text-sm text-text-muted mb-6">
          <span className="text-text-muted/50">&lt;/h1&gt;</span>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary mb-6"
      >
        Lead Software Engineer &{" "}
        <span className="text-text-primary">Full Stack Developer</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-text-secondary max-w-xl text-lg leading-relaxed mb-10"
      >
        I build and scale products end-to-end — from idea to deployment to
        optimization. Specializing in{" "}
        <span className="text-text-primary font-medium">MERN stack</span> and{" "}
        <span className="text-text-primary font-medium">DevOps</span> with AWS,
        Docker & CI/CD. Currently leading product development at Upivot.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-wrap gap-4 mb-10"
      >
        <motion.a
          href="#work"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-bg-primary hover:bg-white font-medium transition-colors duration-300"
        >
          View My Work
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-text-secondary hover:text-text-primary font-medium transition-colors duration-300"
        >
          <FiMessageCircle />
          Get In Touch
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-md"
      >
        <MacTerminal title="stack.sh">
          <span className="text-[#28c840]">$ </span>
          <span className="text-[#28c840]">echo $CURRENT_STACK</span>
          <div className="text-text-secondary mt-1">
            MERN | AWS | Docker | CI/CD
          </div>
          <div className="mt-1">
            <span className="text-[#28c840]">$ </span>
            <span className="text-[#28c840]">Building AutoPublish...</span>
          </div>
          <div className="mt-1">
            <span className="text-text-muted">$ </span>
            <span
              className="text-text-primary"
              style={{ animation: "blink 1s step-end infinite" }}
            >
              |
            </span>
          </div>
        </MacTerminal>
      </motion.div>
    </section>
  );
}
