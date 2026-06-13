import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "../animations";

const experiences = [
  {
    title: "Lead Software Engineer",
    company: "Upivot",
    type: "Full-time · Remote",
    period: "Mar 2026 — Present",
    details: [
      "Built and shipped Upivot — an EdTech mentorship platform for PM career transitions (37% placement rate)",
      "Built InterviewPrepUp — an AI-powered PM interview simulator with 5-dimension competency scoring",
      "Designed scalable full-stack architecture using MERN stack for both products",
      "Set up CI/CD pipelines with GitHub Actions, Docker, and AWS (EC2, S3, CloudFront, ECS)",
      "Implemented AI follow-up probing and quote-based feedback systems for interview evaluation",
      "Optimized application performance, SEO, and deployment efficiency through automation",
    ],
    tags: ["MERN", "AWS", "Docker", "CI/CD", "AI/ML", "Tailwind CSS"],
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    type: "Full-time · Hybrid",
    period: "Nov 2023 — Mar 2026",
    details: [
      "Worked as a Salesforce Developer building enterprise-grade solutions",
      "Developed and customized applications using Apex, Lightning Components",
      "Collaborated with cross-functional teams to deliver scalable business solutions",
      "Strengthened understanding of scalable architectures and clean coding practices",
    ],
    tags: ["Salesforce", "Apex", "Lightning", "JavaScript"],
  },
  {
    title: "Web Developer Intern",
    company: "PaTaaK Inc",
    type: "Internship · Remote",
    period: "Nov 2019 — Apr 2020",
    details: [
      "Developed responsive web interfaces using AngularJS, HTML5, CSS3, and JavaScript",
      "Built and optimized reusable UI components to improve development efficiency",
      "Collaborated with backend teams to integrate APIs and ensure seamless data flow",
      "Contributed to UI/UX improvements using Adobe Photoshop",
    ],
    tags: ["AngularJS", "HTML5", "CSS3", "JavaScript", "Photoshop"],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Experience section --&gt;
      </motion.p>

      <motion.div
        variants={fadeUp}
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
              variants={fadeUp}
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
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
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
