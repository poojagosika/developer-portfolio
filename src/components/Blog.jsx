import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";
import { fadeUp } from "../animations";

const posts = [
  {
    date: "Jun 2026",
    tag: "AI / EdTech",
    title: "Building InterviewPrepUp: AI-Powered PM Interview Simulator",
    excerpt:
      "How I built an AI interview platform with follow-up probing, quote-based feedback, and 5-dimension competency scoring based on 3000+ real MAANG interviews...",
    link: "https://www.interviewprepup.com",
  },
  {
    date: "May 2026",
    tag: "EdTech",
    title: "Shipping Upivot: From Idea to a PM Mentorship Platform",
    excerpt:
      "The technical journey of building Upivot end-to-end — MERN architecture, AWS infrastructure, and scaling to help 37% of students land PM roles...",
    link: "https://www.upivot.in",
  },
  {
    date: "Apr 2026",
    tag: "DevOps",
    title: "Setting Up CI/CD Pipelines with GitHub Actions & AWS",
    excerpt:
      "A practical guide to automating deployments with GitHub Actions, Docker, and AWS ECS — lessons from deploying Upivot and InterviewPrepUp...",
    link: "https://app.upivot.in",
  },
  {
    date: "Feb 2026",
    tag: "YouTube API",
    title: "Building AutoPublish: Auto-Publishing YouTube Videos",
    excerpt:
      "How I built a YouTube auto-publishing platform with Google OAuth, Drive integration, and Sheets-based scheduling...",
    link: "https://youtube-automatic-publishing.onrender.com/",
  },
];

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="blog" className="py-20" ref={ref}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Blog section --&gt;
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            blog<span className="text-text-muted">.share</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
      </motion.div>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <motion.a
            href={post.link}
            target={post.link !== "#" ? "_blank" : undefined}
            rel={post.link !== "#" ? "noopener noreferrer" : undefined}
            key={post.title}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i + 2}
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            className="group rounded-2xl glass-card p-5 transition-colors duration-500 cursor-pointer block"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs text-text-muted">
                {post.date}
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/4 text-text-muted border border-white/4">
                {post.tag}
              </span>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-white transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-text-secondary mb-3">{post.excerpt}</p>
            <span className="inline-flex items-center gap-1 font-mono text-sm text-text-muted group-hover:text-text-primary group-hover:gap-2 transition-all">
              Read more <FiArrowRight size={14} />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
