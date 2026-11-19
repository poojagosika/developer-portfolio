"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { EASE, SPRING } from "../lib/motion";
import { person } from "../data/site";
import { useClock } from "../lib/useClock";
import { LinkPreview } from "./ui/LinkPreview";
import { ThemeToggle } from "./ui/ThemeToggle";
import { External, GitHub, LinkedIn, Pin, XLogo } from "./ui/Icons";

const links = [
  { id: "top", label: "Home" },
  { id: "work", label: "Work" },
  { id: "open-source", label: "Open source" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { label: "LinkedIn", href: person.links.linkedin, icon: <LinkedIn /> },
  { label: "GitHub", href: person.links.github, icon: <GitHub /> },
  { label: "X", href: person.links.x, icon: <XLogo /> },
];

function merged(repo: string) {
  return `https://github.com/${repo}/pulls?q=is%3Apr+author%3Apoojagosika+is%3Amerged`;
}

export function Header({
  cover,
}: {
  cover?: { light?: string; dark?: string };
}) {
  const [active, setActive] = useState("top");
  const time = useClock(person.home.timeZone);

  // Mark the link for whichever section is on screen.
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header id="top">
      {/* Cover band: /public/cover.* in the light theme and
          /public/cover-dark.* in the dark theme. Without them it shows a
          soft colour wash. */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: EASE }}
        className="cover fade-out relative -mx-4 h-44 overflow-hidden sm:h-56"
      >
        {cover ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover.light}
              alt=""
              className="absolute inset-0 size-full object-cover dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover.dark}
              alt=""
              className="absolute inset-0 hidden size-full object-cover dark:block"
            />
          </>
        ) : null}
      </motion.div>

      <div className="flex items-end gap-4 sm:gap-5">
        <span className="beam -mt-12 shrink-0 sm:-mt-14">
          <motion.img
            src="/pooja.jpg"
            alt="Pooja Gosika"
            width={104}
            height={104}
            initial={{ opacity: 0, scale: 0.6, rotateY: 40, rotateX: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            transition={{ ...SPRING, delay: 0.1 }}
            style={{ transformPerspective: 800 }}
            className="relative z-10 block size-[88px] rounded-[22px] object-cover shadow-lg shadow-black/15 sm:size-[104px]"
          />
        </span>
        <div className="min-w-0 flex-1 pb-0.5">
          <h1 className="text-[28px] leading-tight font-semibold tracking-tight sm:text-[34px]">
            {person.name}
          </h1>
          <div className="mt-1 flex flex-wrap items-center gap-x-1 gap-y-1">
            <a
              href="https://ui.deliverwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary mr-2 flex items-center gap-1.5 text-[15px] transition-colors duration-150"
            >
              ui.deliverwebsite.com <External className="size-3.5" />
            </a>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={social.label}
                className="transition-colors duration-150 text-foreground/60 hover:text-primary flex size-8 items-center justify-center [&_svg]:size-[17px]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <ThemeToggle />
      </div>

      <p className="text-foreground/60 mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <span className="flex items-center gap-1.5">
          <Pin className="text-foreground/40 size-3.5" />
          {person.location}
        </span>
        <span>She/Her</span>
        {time ? <span className="font-mono text-xs">{time} local</span> : null}
      </p>
      <nav
        aria-label="Main"
        className="mt-8 flex flex-wrap gap-x-4 gap-y-1 border-t border-dashed border-line pt-5"
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            data-active={active === link.id}
            className={`transition-colors duration-150 ${
              active === link.id
                ? "text-primary font-medium"
                : "text-foreground/55 hover:text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p className="pt-5 text-base text-pretty">
        I build AI products end-to-end, usually as the only engineer on them. At{" "}
        {person.company} I built and run{" "}
        <span className="whitespace-nowrap">
          <LinkPreview href="https://www.upivot.in" image="/work/upivot.png">
            Upivot
          </LinkPreview>
          ,
        </span>{" "}
        a mentorship platform for people moving into product management, and{" "}
        <span className="whitespace-nowrap">
          <LinkPreview
            href="https://www.interviewprepup.com"
            image="/work/interviewprepup.png"
          >
            InterviewPrepUp
          </LinkPreview>
          ,
        </span>{" "}
        an AI mock-interview platform with real-time voice, speech-to-text and
        LLM feedback.
      </p>
      <p className="pt-4 text-base text-pretty">
        I also run{" "}
        <span className="whitespace-nowrap">
          <LinkPreview
            href="https://deliverwebsite.com"
            image="/work/deliver.jpg"
          >
            Deliver Website
          </LinkPreview>
          ,
        </span>{" "}
        a studio that designs and builds high-converting websites for startups,
        and{" "}
        <span className="whitespace-nowrap">
          <LinkPreview
            href="https://ui.deliverwebsite.com"
            image="/work/deliver-ui.jpg"
          >
            Deliver Website UI
          </LinkPreview>
          ,
        </span>{" "}
        a free library of React components and landing pages.
      </p>
      <p className="pt-4 text-base text-pretty">
        In open source, I contribute to 25+ projects, including{" "}
        {[
          ["Vercel", "https://github.com/vercel/ai"],
          ["Supabase", "https://github.com/supabase/supabase-js"],
          ["Firecrawl", "https://github.com/firecrawl/firecrawl"],
          ["SigNoz", "https://github.com/SigNoz/signoz"],
        ].map(([name, href]) => (
          <span key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="dotlink"
            >
              {name}
            </a>
            ,{" "}
          </span>
        ))}
        <a
          href="https://github.com/twentyhq/twenty"
          target="_blank"
          rel="noopener noreferrer"
          className="dotlink"
        >
          Twenty
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/okteto/okteto"
          target="_blank"
          rel="noopener noreferrer"
          className="dotlink"
        >
          Okteto
        </a>
        , with 20 fixes merged in{" "}
        {[
          ["Modelence", "modelence/modelence"],
          ["Okteto", "okteto/okteto"],
          ["TraceRoot", "traceroot-ai/traceroot"],
          ["BuildBuddy", "buildbuddy-io/buildbuddy"],
        ].map(([name, repo]) => (
          <span key={name}>
            <a
              href={merged(repo)}
              target="_blank"
              rel="noopener noreferrer"
              className="dotlink"
            >
              {name}
            </a>
            ,{" "}
          </span>
        ))}
        and{" "}
        <a
          href={merged("getlago/lago-front")}
          target="_blank"
          rel="noopener noreferrer"
          className="dotlink"
        >
          Lago
        </a>
        .
      </p>
    </header>
  );
}
