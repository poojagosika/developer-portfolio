import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-bg-primary"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-2xl font-bold mb-4"
        >
          <span className="text-text-muted">&lt;</span>
          <span className="text-text-primary">Pooja</span>
          <span className="text-text-muted"> /&gt;</span>
        </motion.div>

        <div className="flex items-center gap-1 justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0.3 }}
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              className="w-1 h-6 rounded-full bg-text-secondary"
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-xs text-text-muted mt-4"
        >
          initializing...
        </motion.p>
      </div>
    </motion.div>
  );
}
