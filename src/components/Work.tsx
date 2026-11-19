"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "../lib/motion";
import { projects, type Project } from "../data/site";
import { Box, type BoxColor } from "./ui/Box";
import { ButtonLink } from "./ui/Button";
import { Cap, ChevronDown, Cube, Globe, Merge, Mic, Picture } from "./ui/Icons";

const looks: Record<string, { color: BoxColor; icon: ReactNode }> = {
  InterviewPrepUp: { color: "indigo", icon: <Mic /> },
  Upivot: { color: "teal", icon: <Cap /> },
  "Deliver Website": { color: "sky", icon: <Globe /> },
  "Deliver Website UI": { color: "pink", icon: <Picture /> },
  "Drive My Portfolio": { color: "amber", icon: <Cube /> },
  CodeRoutine: { color: "dark", icon: <Merge /> },
};

export function Work() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="work">
      <h2 className="label">Work</h2>
      <ul className="mt-4 flex flex-col gap-3 md:gap-0">
        {projects.map((project) => (
          <Row
            key={project.name}
            project={project}
            open={open === project.name}
            onToggle={() =>
              setOpen((current) =>
                current === project.name ? null : project.name,
              )
            }
          />
        ))}
      </ul>
    </section>
  );
}

function domain(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function Row({
  project,
  open,
  onToggle,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const reduce = useReducedMotion();
  const look = looks[project.name] ?? {
    color: "indigo" as BoxColor,
    icon: <Cube />,
  };

  return (
    <li>
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="transition-colors duration-150 group -mx-2 flex w-[calc(100%+1rem)] cursor-pointer items-center gap-3.5 px-2 md:gap-3 py-1.5 text-left"
      >
        {project.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.logo}
            alt=""
            width={32}
            height={32}
            className={`bg-card ring-line size-12 shrink-0 rounded-xl md:size-8 md:rounded-lg ring-1 ${
              project.logoPadded ? "object-contain p-1.5 md:p-1" : "object-cover"
            }`}
          />
        ) : project.emoji ? (
          <span
            aria-hidden="true"
            className="bg-card ring-line flex size-12 shrink-0 items-center justify-center rounded-xl text-3xl ring-1 md:size-8 md:rounded-lg md:text-lg leading-none"
          >
            <span className="-translate-y-[0.2em]">{project.emoji}</span>
          </span>
        ) : (
          <span className="shrink-0">
            <Box color={look.color}>{look.icon}</Box>
          </span>
        )}
        <span className="flex w-full min-w-0 flex-1 flex-col items-start gap-0.5 md:flex-row md:items-center md:gap-2.5">
          <span className="group-hover:text-primary shrink-0 font-semibold transition-colors duration-150">
            {project.name}
          </span>
          <span
            aria-hidden="true"
            className="text-foreground/30 hidden shrink-0 md:block"
          >
            /
          </span>
          <span className="text-foreground/70 group-hover:text-primary text-sm text-pretty md:text-base transition-colors duration-150">
            {project.blurb}
          </span>
        </span>
        <ChevronDown
          className={`group-hover:text-primary hidden size-4 shrink-0 md:block transition-[rotate,color,opacity] duration-200 ease-out group-hover:opacity-100 ${
            open ? "text-primary rotate-180" : "text-foreground/40 opacity-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
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
            <div className="flex flex-col gap-4 pt-3 pb-5 md:pl-8">
              {project.image ? (
                <motion.div
                  initial={
                    reduce
                      ? false
                      : {
                          clipPath: "inset(0% 0% 100% 0% round 12px)",
                          scale: 1.04,
                          filter: "blur(6px)",
                        }
                  }
                  animate={{
                    clipPath: "inset(0% 0% 0% 0% round 12px)",
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.05 }}
                  className="group/pic relative overflow-hidden rounded-xl shadow-md shadow-black/10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={1200}
                    height={630}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[1200/630] w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover/pic:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-xl outline outline-1 -outline-offset-1 outline-line" />
                </motion.div>
              ) : null}

              <p className="text-foreground/80 max-w-prose text-sm leading-relaxed text-pretty">
                {project.detail}
              </p>
              <p className="text-foreground/50 font-mono text-xs leading-relaxed">
                {project.tech.join(" · ")}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {project.live ? (
                  <ButtonLink href={project.live} arrow>
                    Visit {domain(project.live)}
                  </ButtonLink>
                ) : null}
                {project.code && project.live ? (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dotlink text-sm"
                  >
                    View code
                  </a>
                ) : null}
                {project.code && !project.live ? (
                  <ButtonLink href={project.code} arrow>
                    View code
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
