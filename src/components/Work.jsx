import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { rise, staggerContainer, staggerPop } from "../animations";

const projects = [
  {
    title: "InterviewPrepUp — AI Interview Practice",
    desc: "AI mock interviewer for product manager roles. Real-time voice sessions over WebSockets, LLM follow-up questions and 5-dimension scoring with OpenAI + LangChain, resume parsing, and downloadable PDF reports.",
    tags: ["React", "Node.js", "OpenAI", "LangChain", "WebSockets", "AWS"],
    image: "/interviewprepup.png",
    live: "https://www.interviewprepup.com",
  },
  {
    title: "Upivot — PM Mentorship Platform",
    desc: "The full platform behind a PM career program (37% placement rate). Video lessons with HLS streaming, Whisper transcription, Razorpay payments, S3 uploads, SES email and an admin CMS.",
    tags: ["React", "Node.js", "MongoDB", "AWS", "FFmpeg", "Razorpay"],
    image: "/upivot.png",
    live: "https://www.upivot.in",
  },
  {
    title: "High-Performing Thumbnail",
    desc: "Upload an image and a title, get the top 5 best-performing YouTube thumbnails with matching keywords, then design your own from them.",
    tags: ["React", "Node.js", "Express", "MongoDB", "YouTube API"],
    github: "https://github.com/poojagosika/high-performing-thumbnail",
  },
  {
    title: "AutoPublish — YouTube Auto Publisher",
    desc: "Publishes YouTube videos straight from Google Drive on a schedule set in Google Sheets, with Google OAuth and role-based access.",
    tags: [
      "Node.js",
      "Express",
      "Google OAuth",
      "YouTube API",
      "Google Sheets",
    ],
    image: "/auto-publish.png",
    live: "https://youtube-automatic-publishing.onrender.com/",
    github: "https://github.com/poojagosika/youtube-automatic-publishing",
  },
  {
    title: "Drive My Portfolio",
    desc: "A 3D portfolio you explore by driving an F1 car through an open world, built with Three.js and React.",
    tags: ["JavaScript", "Three.js", "React", "Shadcn UI", "Tailwind CSS"],
    image: "/drive-my-portfolio.png",
    live: "https://poojagosika.github.io/drive-my-portfolio/",
    github: "https://github.com/poojagosika/drive-my-portfolio",
  },
];

export default function Work() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="work" className="py-20" ref={ref}>
      <motion.p
        variants={rise}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Work section --&gt;
      </motion.p>

      <motion.div
        variants={rise}
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
            variants={staggerPop}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              transition: { duration: 0.3 },
            }}
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
