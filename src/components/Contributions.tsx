"use client";

import { useEffect, useRef, useState } from "react";
import type { Contributions as Data } from "../lib/github";
import { person } from "../data/site";
import { ArrowUpRight } from "./ui/Icons";

const USER = "poojagosika";
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// One shade per GitHub level, from "nothing that day" to "a lot".
// GitHub's own greens, light theme then dark theme.
const SHADES = [
  "bg-black/[0.04] dark:bg-white/[0.04]",
  "bg-[#9be9a8] dark:bg-[#2b885a]",
  "bg-[#40c463] dark:bg-[#006d32]",
  "bg-[#30a14e] dark:bg-[#26a641]",
  "bg-[#216e39] dark:bg-[#39d353]",
];

function weekday(date: string) {
  return new Date(`${date}T00:00:00Z`).getUTCDay();
}

function label(date: string) {
  const [, month, day] = date.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}`;
}

// The GitHub contribution grid for the last year: one column per week, one
// square per day. Starts from the data saved at build time, then fetches
// today's numbers in the browser so the grid never goes stale.
export function ContributionGrid({ initial }: { initial: Data | null }) {
  const [data, setData] = useState(initial);
  const scroller = useRef<HTMLDivElement>(null);

  // On narrow screens the grid scrolls sideways; start at the latest weeks.
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [data]);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`)
      .then((response) => (response.ok ? response.json() : null))
      .then((json) => {
        if (cancelled || !json?.contributions?.length) return;
        setData({
          total: json.total?.lastYear ?? 0,
          days: json.contributions.map(
            (day: { date: string; count: number; level: number }) => ({
              date: day.date,
              count: day.count,
              level: day.level,
            }),
          ),
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data || data.days.length === 0) return null;

  // Empty squares before the first day, so each column starts on a Sunday.
  const lead = weekday(data.days[0].date);
  const weeks = Math.ceil((lead + data.days.length) / 7);

  // A month name under the first column that starts in that month.
  const months: { column: number; name: string }[] = [];
  data.days.forEach((day, index) => {
    const column = Math.floor((lead + index) / 7);
    const month = MONTHS[Number(day.date.slice(5, 7)) - 1];
    const last = months[months.length - 1];
    if (day.date.endsWith("-01") || index === 0) {
      if (!last || (last.name !== month && column - last.column >= 3)) {
        months.push({ column, name: month });
      }
    }
  });

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-foreground/60 text-sm">
          <span className="text-primary text-base font-semibold tabular-nums">
            {data.total.toLocaleString("en-US")}
          </span>{" "}
          contributions in the last year
        </p>
        <a
          href={person.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-primary flex items-center gap-0.5 text-xs transition-colors duration-150"
        >
          GitHub <ArrowUpRight className="size-3" />
        </a>
      </div>

      <div
        ref={scroller}
        className="mt-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="w-max">
          <div
            role="img"
            aria-label={`${data.total.toLocaleString("en-US")} GitHub contributions in the last year`}
            className="grid grid-flow-col gap-[3px] pb-[5px]"
            style={{
              gridTemplateRows: "repeat(7, 14px)",
              gridTemplateColumns: `repeat(${weeks}, 14px)`,
            }}
          >
            {Array.from({ length: lead }, (_, index) => (
              <span key={`lead-${index}`} aria-hidden="true" />
            ))}
            {data.days.map((day) => (
              <span
                key={day.date}
                title={`${day.count === 0 ? "No" : day.count} contribution${
                  day.count === 1 ? "" : "s"
                } on ${label(day.date)}`}
                className={`size-[14px] rounded-[3px] transition-transform duration-100 hover:scale-125 ${
                  SHADES[day.level] ?? SHADES[0]
                }`}
              />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="text-foreground/50 relative mt-2 h-4 font-mono text-[11px]"
          >
            {months.map((month) => (
              <span
                key={`${month.name}-${month.column}`}
                className="absolute whitespace-nowrap"
                style={{ left: month.column * 17 }}
              >
                {month.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
