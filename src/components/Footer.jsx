import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="pt-10 pb-8 border-t border-border">
      <p className="font-mono text-xs text-text-muted mb-4">
        &lt;!-- End of file --&gt;
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-sm text-text-muted">
          <span className="text-text-muted">&lt;/</span>
          <span className="text-text-secondary">Pooja</span>
          <span className="text-text-muted">&gt;</span> &copy;{" "}
          {new Date().getFullYear()}. Built end-to-end with code &amp; coffee.
        </p>

        <div className="flex gap-4">
          {[
            { name: "GitHub", href: "https://github.com/poojagosika" },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/in/poojagosika/",
            },
            { name: "X", href: "https://x.com/0xPoojaDev" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
