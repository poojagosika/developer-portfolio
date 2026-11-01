import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGitPullRequest } from "react-icons/fi";
import { skate } from "../animations";

// Merged open-source fixes. Add new ones at the top as they land.
const merged = [
  {
    repo: "getlago/lago-front",
    project: "Lago",
    about: "Open-source usage-based billing",
    title: "Convert add-on amounts with the add-on's currency precision",
    date: "Oct 2026",
  },
  {
    repo: "modelence/modelence",
    project: "Modelence",
    about: "Agent-operated backend cloud",
    title: "Set status params correctly on auth redirect URLs",
    date: "Oct 2026",
  },
  {
    repo: "modelence/modelence",
    project: "Modelence",
    about: "Agent-operated backend cloud",
    title: "Stop rebuilding collation indexes on every startup",
    date: "Oct 2026",
  },
  {
    repo: "traceroot-ai/traceroot",
    project: "TraceRoot",
    about: "AI agent observability (YC S25)",
    title: "Break trace start-time ties by trace ID in the trace list",
    date: "Oct 2026",
  },
  {
    repo: "traceroot-ai/traceroot",
    project: "TraceRoot",
    about: "AI agent observability (YC S25)",
    title: "Count DECISION spans in the default by-model dashboard widgets",
    date: "Oct 2026",
  },
];

const inReview = ["Okteto", "SigNoz", "mcp-use", "Dittofeed"];

export default function OpenSource() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="opensource" className="py-20" ref={ref}>
      <motion.p
        variants={skate}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs text-text-muted mb-6"
      >
        &lt;!-- Open source section --&gt;
      </motion.p>

      <motion.div
        variants={skate}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">
            open<span className="text-text-muted">.source</span>
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
        </div>
        <p className="text-sm text-text-secondary mb-8 max-w-2xl">
          I read unfamiliar production codebases, find the bug, and ship a
          small, focused fix. Merged so far:
        </p>
      </motion.div>

      <div className="space-y-3">
        {merged.map((pr, i) => (
          <motion.div
            key={pr.title}
            variants={skate}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i + 2}
            whileHover={{
              x: 10,
              scale: 1.01,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 },
            }}
            className="group rounded-2xl glass-card p-5 transition-colors duration-500 flex gap-4 items-start"
          >
            <FiGitPullRequest
              className="text-[#a371f7] mt-1 shrink-0"
              size={16}
              aria-label="Merged pull request"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="font-semibold text-text-primary">
                  {pr.project}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/4 text-text-muted border border-white/4">
                  {pr.about}
                </span>
                <span className="font-mono text-xs text-text-muted ml-auto">
                  {pr.date}
                </span>
              </div>
              <p className="text-sm text-text-secondary">{pr.title}</p>
              <p className="font-mono text-[11px] text-text-muted mt-1">
                {pr.repo}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={skate}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={merged.length + 2}
        className="font-mono text-xs text-text-muted mt-6"
      >
        // in review: {inReview.join(", ")}
      </motion.p>
    </section>
  );
}
