"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "../lib/motion";
import { openSource, person } from "../data/site";
import { ArrowUpRight, ChevronDown, Star } from "./ui/Icons";

const FIRST = 6;

type Merged = (typeof openSource.merged)[number];

function Fix({ pr }: { pr: Merged }) {
  return (
    <a
      href={pr.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group -mx-2 flex items-baseline justify-between gap-6 px-2 py-2 transition-colors duration-150"
    >
      <span className="min-w-0">
        <span className="text-foreground/80 group-hover:text-primary block text-pretty transition-colors duration-150">
          {pr.title}
        </span>
        <span className="text-foreground/50 mt-0.5 block font-mono text-xs">
          {pr.project} · {pr.repo}
        </span>
      </span>
      <span className="text-foreground/50 group-hover:text-primary shrink-0 font-mono text-xs font-light tabular-nums transition-colors duration-150">
        {pr.date.replace(/, \d{4}$/, "")}
      </span>
    </a>
  );
}

export function OpenSource() {
  const [open, setOpen] = useState(false);
  const first = openSource.merged.slice(0, FIRST);
  const rest = openSource.merged.slice(FIRST);

  return (
    <section id="open-source">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="label">
          {openSource.merged.length} merged open-source fixes
        </h2>
        <a
          href={person.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-primary flex items-center gap-0.5 text-xs transition-colors duration-150"
        >
          GitHub <ArrowUpRight className="size-3" />
        </a>
      </div>
      <p className="text-foreground/70 mt-4 text-pretty">{openSource.intro}</p>

      <ul className="mt-4 flex flex-col gap-1">
        {first.map((pr) => (
          <li key={pr.url}>
            <Fix pr={pr} />
          </li>
        ))}
      </ul>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.ul
            id="more-fixes"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { type: "spring", duration: 0.5, bounce: 0 },
                opacity: { duration: 0.25, ease: EASE_OUT },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.22, ease: EASE_OUT },
            }}
            className="flex flex-col gap-1 overflow-hidden pt-1"
          >
            {rest.map((pr) => (
              <li key={pr.url}>
                <Fix pr={pr} />
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="more-fixes"
        onClick={() => setOpen((value) => !value)}
        className="text-foreground/60 hover:text-primary mt-3 flex cursor-pointer items-center gap-1 text-sm transition-colors duration-150"
      >
        {open ? "Show fewer" : `Show all ${openSource.merged.length}`}
        <ChevronDown
          className={`size-4 transition-transform duration-200 ease-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <p className="text-foreground/50 mt-5 font-mono text-xs leading-relaxed">
        {openSource.openCount} more in review across{" "}
        {openSource.inReview.length} projects: {openSource.inReview.join(", ")}
      </p>
    </section>
  );
}

// Logo grid of the projects GitHub lists under "contributed to".
export function Contributed() {
  return (
    <section>
      <h2 className="label">Projects I&apos;ve contributed to</h2>
      <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
        {openSource.repos.map((item) => {
          const [owner, name] = item.repo.split("/");
          return (
            <li key={item.repo}>
              <a
                href={`https://github.com/${item.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github.com/${owner}.png?size=64`}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="bg-chip outline-line size-8 shrink-0 rounded-md shadow-sm outline outline-1 -outline-offset-1 transition-transform duration-200 ease-out group-hover:scale-105"
                />
                <span className="flex min-w-0 flex-col">
                  <span className="text-foreground/80 group-hover:text-primary truncate text-sm font-medium transition-colors duration-150">
                    {name}
                  </span>
                  <span className="text-foreground/50 flex items-center gap-1 font-mono text-[11px] leading-tight">
                    <Star className="size-2.5" /> {item.stars}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
