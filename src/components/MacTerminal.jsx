import { motion } from "framer-motion";

export default function MacTerminal({
  title = "terminal",
  children,
  className = "",
}) {
  return (
    <div className={`rounded-xl glass-card overflow-hidden ${className}`}>
      {/* macOS title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-center font-mono text-[10px] text-text-muted -ml-8">
          {title}
        </span>
      </div>
      {/* Content */}
      <div className="p-4 font-mono text-xs leading-relaxed">{children}</div>
    </div>
  );
}
