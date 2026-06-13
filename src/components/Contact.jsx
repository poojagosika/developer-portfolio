import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSend, FiMapPin } from "react-icons/fi";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { fadeUp } from "../animations";
import MacTerminal from "./MacTerminal";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Contact section --&gt;
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            contact<span className="text-text-muted">.send</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          className="lg:col-span-2"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
        >
          <h3 className="text-xl font-bold text-text-primary mb-3">
            Let's work together
          </h3>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Have a project in mind or need a Lead Full-Stack Developer? Feel
            free to reach out. Always open to collaborating on impactful
            products.
          </p>

          <div className="space-y-3 mb-6">
            <a
              href="mailto:pgstechmail@gmail.com"
              className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-white/4 border border-white/4 flex items-center justify-center">
                <FaEnvelope size={16} className="text-text-secondary" />
              </div>
              <span className="font-mono text-sm">pooja0xdev@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-text-secondary">
              <div className="w-9 h-9 rounded-lg bg-white/4 border border-white/4 flex items-center justify-center">
                <FiMapPin size={16} className="text-text-secondary" />
              </div>
              <span className="font-mono text-sm">Hyderabad, India</span>
            </div>
          </div>

          <MacTerminal title="terminal">
            <div className="text-text-muted">
              <span className="text-[#28c840]">pooja</span>
              <span className="text-[#28c840]">@</span>
              <span className="text-[#28c840]">dev</span>
              <span className="text-text-muted"> ~ % </span>
              <span className="text-text-primary">npm run hire-me</span>
            </div>
            <div className="text-text-secondary mt-1">
              &gt; Ready to build scalable products together.
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

        <motion.form
          className="lg:col-span-3 space-y-4"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-xs text-text-muted mb-2">
                // name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl glass-input text-text-primary placeholder-text-muted text-sm font-mono focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-text-muted mb-2">
                // email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-xl glass-input text-text-primary placeholder-text-muted text-sm font-mono focus:outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs text-text-muted mb-2">
              // subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Project Inquiry"
              className="w-full px-4 py-3 rounded-xl glass-input text-text-primary placeholder-text-muted text-sm font-mono focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-text-muted mb-2">
              // message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl glass-input text-text-primary placeholder-text-muted text-sm font-mono focus:outline-none transition-all duration-300 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium transition-all duration-500 cursor-pointer ${
              submitted
                ? "bg-text-secondary text-bg-primary"
                : "bg-text-primary hover:bg-white text-bg-primary"
            }`}
          >
            {submitted ? (
              "Message Sent!"
            ) : (
              <>
                <FiSend size={16} /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
