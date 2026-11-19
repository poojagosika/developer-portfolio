import { getContributions } from "../lib/github";
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
const SHADES = [
  "bg-foreground/[0.07]",
  "bg-foreground/25",
  "bg-foreground/45",
  "bg-foreground/70",
  "bg-foreground",
];

function weekday(date: string) {
  return new Date(`${date}T00:00:00Z`).getUTCDay();
}

function label(date: string) {
  const [, month, day] = date.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}`;
}

// The GitHub contribution grid for the last year: one column per week, one
// square per day. Shows nothing if GitHub cannot be reached.
export async function Contributions() {
  const data = await getContributions(USER);
  if (!data) return null;

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
        role="img"
        aria-label={`${data.total.toLocaleString("en-US")} GitHub contributions in the last year`}
        className="mt-4 grid grid-flow-col gap-[2px] sm:gap-[3px]"
        style={{
          gridTemplateRows: "repeat(7, auto)",
          gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))`,
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
            className={`aspect-square rounded-[2px] sm:rounded-[3px] ${
              SHADES[day.level] ?? SHADES[0]
            }`}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="text-foreground/50 mt-2 grid gap-[2px] font-mono text-[11px] sm:gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
      >
        {months.map((month) => (
          <span
            key={`${month.name}-${month.column}`}
            className="whitespace-nowrap"
            style={{ gridColumnStart: month.column + 1 }}
          >
            {month.name}
          </span>
        ))}
      </div>
    </div>
  );
}
