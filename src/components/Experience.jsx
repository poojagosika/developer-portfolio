import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { baseline, panLeft } from "../animations";

const experiences = [
  {
    title: "Lead Software Engineer",
    company: "Upivot",
    type: "Full-time · Remote",
    period: "Mar 2026 — Present",
    details: [
      "Own engineering end-to-end for two live products: Upivot (PM career platform) and InterviewPrepUp (AI mock interviews)",
      "Built an AI interviewer with real-time voice over WebSockets, LLM follow-ups and 5-dimension scoring using OpenAI + LangChain",
      "Built a video pipeline: S3 multipart uploads, FFmpeg processing, HLS streaming and Whisper transcription",
      "Integrated Razorpay payments, Google OAuth, AWS SES email, scheduled jobs and PDF report generation",
      "Hardened APIs with rate limiting, input sanitization and secure headers; run deploys on AWS with Docker and GitHub Actions",
    ],
    tags: ["React", "Node.js", "MongoDB", "OpenAI", "LangChain", "AWS", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    type: "Full-time · Hybrid",
    period: "Nov 2023 — Mar 2026",
    details: [
      "Salesforce Developer building enterprise-grade solutions with Apex & Lightning",
      "Delivered scalable business solutions with cross-functional teams",
    ],
    tags: ["Salesforce", "Apex", "Lightning", "JavaScript"],
  },
  {
    title: "Web Developer Intern",
    company: "PaTaaK Inc",
    type: "Internship · Remote",
    period: "Nov 2019 — Apr 2020",
    details: [
      "Built responsive web interfaces with AngularJS, HTML5 & CSS3",
      "Integrated APIs and optimized reusable UI components",
    ],
    tags: ["AngularJS", "HTML5", "CSS3", "JavaScript", "Photoshop"],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.p
        variants={baseline}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Experience section --&gt;
      </motion.p>

      <motion.div
        variants={baseline}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            experience<span className="text-text-muted">.log</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-linear-to-b from-border-hover via-border to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              variants={baseline}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 2}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-border bg-bg-primary flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-text-muted"
                  animate={inView ? { scale: [0, 1.3, 1] } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                />
              </div>

              <motion.div
                whileHover={{
                  x: 8,
                  scale: 1.01,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 },
                }}
                className="rounded-2xl glass-card p-5 transition-colors duration-500 group"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-white transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-text-secondary font-mono">
                      {exp.company}
                    </p>
                    <p className="text-xs text-text-muted font-mono">
                      {exp.type}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-text-muted bg-bg-hover rounded-full px-3 py-1">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {exp.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-text-muted mt-1 shrink-0">
                        &#8250;
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/4 text-text-muted border border-white/4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
