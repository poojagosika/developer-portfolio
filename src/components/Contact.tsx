"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "../lib/motion";
import { contact, person } from "../data/site";
import { useToast } from "./ui/Toast";
import { Box, type BoxColor } from "./ui/Box";
import { Button } from "./ui/Button";
import { ArrowUpRight, ChevronDown, LinkedIn, Mail, Send } from "./ui/Icons";

type Status = "idle" | "sending" | "sent" | "error";

const rowClass =
  "transition-colors duration-150 group -mx-2 flex w-[calc(100%+1rem)] cursor-pointer items-center gap-4 px-2 py-2 text-left";

function RowText({ title, text }: { title: string; text: string }) {
  return (
    <span className="flex min-w-0 flex-1 flex-col items-start gap-0.5 md:flex-row md:items-center md:gap-2">
      <span className="group-hover:text-primary shrink-0 font-medium transition-colors duration-150">
        {title}
      </span>
      <span
        aria-hidden="true"
        className="hidden size-1 shrink-0 rounded-full bg-neutral-200 md:block"
      />
      <span className="text-foreground/70 group-hover:text-primary text-pretty transition-colors duration-150">
        {text}
      </span>
    </span>
  );
}

function Lead({ color, children }: { color: BoxColor; children: ReactNode }) {
  return <Box color={color}>{children}</Box>;
}

export function Contact() {
  const toast = useToast();
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(person.email);
      toast("Email copied to clipboard");
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    // Hidden field that only bots fill in.
    if (fields.get("company")) return;

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          from_name: fields.get("name"),
          subject: "Portfolio Contact Form",
          email: fields.get("email"),
          message: fields.get("message"),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
      toast("Message sent. I'll reply soon.");
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <h2 className="label">Work with me</h2>
      <p className="text-foreground/70 mt-4 text-pretty">{contact.body}</p>

      <ul className="mt-4 flex flex-col gap-2 md:gap-1">
        <li>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={`Copy ${person.email} to clipboard`}
            className={rowClass}
          >
            <Lead color="indigo">
              <Mail />
            </Lead>
            <RowText title="Email me" text={person.email} />
            <span className="text-foreground/40 group-hover:text-primary shrink-0 font-mono text-xs transition-colors duration-150">
              Copy
            </span>
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-expanded={formOpen}
            aria-controls="contact-form"
            onClick={() => setFormOpen((value) => !value)}
            className={rowClass}
          >
            <Lead color="pink">
              <Send />
            </Lead>
            <RowText
              title="Send a message"
              text="Tell me about your project."
            />
            <ChevronDown
              className={`group-hover:text-primary size-4 shrink-0 transition-[rotate,color] duration-200 ease-out ${
                formOpen ? "text-primary rotate-180" : "text-foreground/40"
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {formOpen ? (
              <motion.div
                id="contact-form"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { type: "spring", duration: 0.45, bounce: 0 },
                    opacity: { duration: 0.2, ease: EASE_OUT },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: { duration: 0.22, ease: EASE_OUT },
                }}
                className="overflow-hidden"
              >
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-1 pt-2 pb-5 md:pl-12"
                >
                  <label className="sr-only" htmlFor="contact-name">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="field"
                  />
                  <label className="sr-only" htmlFor="contact-email">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="field"
                  />
                  <input
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <label className="sr-only" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Tell me about your project..."
                    className="field resize-none"
                  />
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <Button type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send message"}
                    </Button>
                    {status === "sent" || status === "error" ? (
                      <p role="status" className="text-foreground/70 text-sm">
                        {status === "sent"
                          ? "Thanks, your message is on its way."
                          : "That didn't send. Please email me instead."}
                      </p>
                    ) : null}
                  </div>
                </form>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </li>

        <li>
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={rowClass}
          >
            <Lead color="dark">
              <LinkedIn />
            </Lead>
            <RowText title="Hire me" text={person.openTo + "."} />
            <ArrowUpRight className="text-foreground/40 group-hover:text-primary size-4 shrink-0 transition-[color,translate] duration-200 ease-out group-hover:translate-x-px group-hover:-translate-y-px" />
          </a>
        </li>
      </ul>
    </section>
  );
}
