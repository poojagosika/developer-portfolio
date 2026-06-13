import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { fadeUp, staggerContainer, staggerItem } from "../animations";

const projects = [
  {
    title: "Upivot — PM Mentorship Platform",
    desc: "EdTech platform offering 1:1 mentorship for Product Manager career transitions. 37% of students land PM roles within 4 months, with alumni at CRED, Morgan Stanley, Capgemini & more.",
    tags: ["React", "Node.js", "MongoDB", "AWS", "Tailwind CSS"],
    image: "/upivot.png",
    live: "https://www.upivot.in",
  },
  {
    title: "InterviewPrepUp — AI Interview Practice",
    desc: "AI-powered PM interview simulator with follow-up probing, quote-based feedback, and 5-dimension competency scoring. Built on 3000+ real MAANG interview patterns.",
    tags: ["React", "Node.js", "AI/ML", "MongoDB", "AWS"],
    image: "/interviewprepup.png",
    live: "https://www.interviewprepup.com",
  },
  {
    title: "AutoPublish — YouTube Auto Publisher",
    desc: "Auto-publish YouTube videos from Google Drive, scheduled via Google Sheets. Per-user Google OAuth, role-based access, and automated scheduling.",
    tags: [
      "Node.js",
      "Express",
      "Google OAuth",
      "YouTube API",
      "Google Sheets",
    ],
    image: "/auto-publish.png",
    live: "https://youtube-automatic-publishing.onrender.com/",
  },
  {
    title: "Drive My Portfolio",
    desc: "A Gaming Website built with Three.js and React, featuring a 3D interactive portfolio experience. It showcases my projects in a visually engaging manner.",
    tags: ["JavaScript", "Three.js", "React", "Shadcn UI", "Tailwind CSS"],
    image: "/drive-my-portfolio.png",
    live: "https://poojagosika.github.io/drive-my-portfolio/",
  },
];

export default function Work() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="work" className="py-20" ref={ref}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Work section --&gt;
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            work<span className="text-text-muted">.done</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 gap-5"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={staggerItem}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group rounded-2xl glass-card overflow-hidden transition-colors duration-500"
          >
            <div className="h-50 bg-bg-hover/30 flex items-center justify-center relative overflow-hidden border-b border-white/3">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="font-mono text-5xl text-text-muted/20 font-bold select-none group-hover:scale-110 transition-transform duration-500">
                  {project.title.charAt(0)}
                </div>
              )}
            </div>

            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/4 text-text-muted border border-white/4"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors font-mono"
                  >
                    <FiGithub size={14} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors font-mono"
                  >
                    <FiExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
