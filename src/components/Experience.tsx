import { education, experience, stack } from "../data/site";

export function Experience() {
  return (
    <section id="experience">
      <h2 className="label">Experience</h2>
      <ol className="mt-5 flex flex-col gap-7">
        {experience.map((job) => (
          <li key={job.company}>
            <h3 className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-medium">{job.role}</span>
              <span className="text-foreground/50 text-sm">at</span>
              <span className="text-foreground/80 text-sm">{job.company}</span>
            </h3>
            <p className="text-foreground/50 mt-1 font-mono text-xs">
              {job.dates} · {job.meta}
            </p>
            {job.about ? (
              <p className="text-foreground/60 mt-1.5 text-sm italic">
                {job.about}
              </p>
            ) : null}
            <ul className="text-foreground/70 mt-2.5 flex flex-col gap-1.5 text-sm leading-relaxed">
              {job.points.map((point) => (
                <li key={point} className="relative pl-4 text-pretty">
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.7em] left-0 size-1 rounded-full bg-primary"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Education() {
  return (
    <section>
      <h2 className="label">Education</h2>
      <ul className="mt-4 flex flex-col gap-1">
        {education.map((item) => (
          <li
            key={item.title}
            className="flex items-baseline justify-between gap-6 py-1.5"
          >
            <span className="min-w-0">
              <span className="block text-pretty">{item.title}</span>
              <span className="text-foreground/60 block text-sm">
                {item.place}
              </span>
            </span>
            <span className="text-foreground/50 shrink-0 font-mono text-xs font-light tabular-nums">
              {item.dates}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Skills() {
  return (
    <section>
      <h2 className="label">Skills</h2>
      <dl className="mt-5 flex flex-col gap-4">
        {stack.map((group) => (
          <div
            key={group.group}
            className="grid gap-x-6 gap-y-2 md:grid-cols-[8.5rem_1fr]"
          >
            <dt className="text-sm font-medium md:pt-1">{group.group}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-foreground/80 rounded-md bg-chip px-2 py-1 text-[13px] leading-tight"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
