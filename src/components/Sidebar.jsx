import { motion } from "framer-motion";
import { FiMapPin, FiDownload } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";
import MacTerminal from "./MacTerminal";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-0 w-72 h-screen z-30 glass-sidebar overflow-y-auto">
      <div className="pt-24 pb-8 px-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Avatar + Name row */}
          <div className="flex items-center gap-4 mb-5 text-left">
            <div className="relative shrink-0 w-14 h-14">
              <div className="w-full h-full rounded-xl border border-border p-0.5">
                <div className="w-full h-full rounded-xl bg-bg-secondary flex items-center justify-center">
                  <span className="text-xl font-bold text-text-primary font-mono">
                    P
                  </span>
                </div>
              </div>
              <div
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#28c840] border-2 border-bg-secondary"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-text-primary leading-tight">
                Pooja
              </h2>
              <p className="font-mono text-xs text-text-secondary">
                Lead Software Engineer
              </p>
              <div className="flex items-center gap-1 text-text-muted mt-0.5">
                <FiMapPin size={10} />
                <span className="font-mono text-[10px]">Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="glass-card rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-text-primary">3+</div>
              <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                Years Exp
              </div>
            </div>
            <div className="glass-card rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-text-primary">500+</div>
              <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                Connections
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-2 mb-6">
            <a
              href="#contact"
              className="block w-full py-2.5 rounded-xl bg-text-primary text-bg-primary hover:bg-white text-sm font-medium transition-all duration-300 text-center"
            >
              Let's Talk
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-border hover:border-border-hover text-text-secondary hover:text-text-primary text-sm font-medium transition-all duration-300"
            >
              <FiDownload size={14} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border my-4" />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-2"
        >
          {[
            {
              icon: FaGithub,
              href: "https://github.com/poojagosika",
              label: "GitHub",
            },
            {
              icon: FaLinkedinIn,
              href: "https://linkedin.com/in/poojagosika",
              label: "LinkedIn",
            },
            { icon: FaXTwitter, href: "#", label: "Twitter" },
            { icon: FaInstagram, href: "#", label: "Instagram" },
            {
              icon: FaEnvelope,
              href: "mailto:pgstechmail@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-text-muted hover:text-text-primary transition-all duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </motion.div>

        {/* Code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MacTerminal title="pooja.js" className="mt-6">
            <div className="text-[11px] text-text-muted">
              {[
                { key: 'const', value: 'dev', line: 'header' },
                { key: 'name', value: '"Pooja"' },
                { key: 'role', value: '"Lead SDE"' },
                { key: 'stack', value: '"MERN + DevOps"' },
                { key: 'coffee', value: 'true', primary: true },
                { key: 'building', value: '"InterviewPrepUp"', last: true },
              ].map((item, i) =>
                item.line === 'header' ? (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  >
                    <span className="text-text-secondary">const</span>{" "}
                    <span className="text-text-primary">dev</span> = {"{"}
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.key}
                    className="pl-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  >
                    <span className="text-text-muted">{item.key}:</span>{" "}
                    <span className={item.primary ? "text-text-primary" : "text-text-secondary"}>
                      {item.value}
                    </span>
                    {!item.last && ","}
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                {"}"}
              </motion.div>
            </div>
          </MacTerminal>
        </motion.div>
      </div>
    </aside>
  );
}
