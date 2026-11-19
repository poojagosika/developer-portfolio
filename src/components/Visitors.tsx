"use client";

import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { motion, useInView } from "motion/react";
import { EASE, SPRING } from "../lib/motion";
import { MAP, distanceKm, project } from "../lib/geo";
import { person } from "../data/site";
import { useClock } from "../lib/useClock";
import { Rise } from "./ui/Rise";

type Place = { lat: number; lon: number; city: string; country: string };
type Stored = Place & { count: number };
type Data = {
  enabled: boolean;
  you: Place | null;
  total: number;
  places: Stored[];
};

const HOME = project(person.home.lon, person.home.lat);

// Approximate position from the visitor's IP.
async function lookUp(): Promise<Place | null> {
  try {
    const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
    if (!response.ok) return null;
    const geo = (await response.json()) as {
      latitude?: string;
      longitude?: string;
      city?: string;
      country?: string;
    };
    const lat = Number(geo.latitude);
    const lon = Number(geo.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
    return { lat, lon, city: geo.city ?? "", country: geo.country ?? "" };
  } catch {
    return null;
  }
}

function percent(point: [number, number]) {
  return {
    left: `${(point[0] / MAP.width) * 100}%`,
    top: `${(point[1] / MAP.height) * 100}%`,
  };
}

// A curved line between two points on the map, bowed upward.
function arc(from: [number, number], to: [number, number]) {
  const midX = (from[0] + to[0]) / 2;
  const midY = (from[1] + to[1]) / 2;
  const lift = Math.min(
    110,
    Math.hypot(to[0] - from[0], to[1] - from[1]) * 0.28,
  );
  return `M${from[0]} ${from[1]} Q${midX} ${midY - lift} ${to[0]} ${to[1]}`;
}

export function Visitors() {
  const ref = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const time = useClock(person.home.timeZone);

  const [you, setYou] = useState<Place | null>(null);
  const [data] = useState<Data | null>(null);
  const [lit, setLit] = useState<Set<number>>(new Set());
  const [yours, setYours] = useState(-1);
  const [tip, setTip] = useState<{ name: string; x: number; y: number } | null>(
    null,
  );

  // Find roughly where the visitor is.
  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    (async () => {
      const place = await lookUp();
      if (cancelled) return;
      setYou(place);
    })();

    return () => {
      cancelled = true;
    };
  }, [inView]);

  const places = data?.places ?? [];
  const youPoint = useMemo(
    () => (you ? project(you.lon, you.lat) : null),
    [you],
  );

  // Work out which country shapes contain a visitor, so they can be tinted.
  useEffect(() => {
    const root = svg.current;
    if (!root) return;
    const paths = Array.from(
      root.querySelectorAll<SVGPathElement>("path[data-country]"),
    );
    const find = (lon: number, lat: number) => {
      const [x, y] = project(lon, lat);
      const point = new DOMPoint(x, y);
      return paths.findIndex((path) => path.isPointInFill(point));
    };
    const next = new Set<number>();
    for (const place of places) {
      const index = find(place.lon, place.lat);
      if (index >= 0) next.add(index);
    }
    setLit(next);
    setYours(you ? find(you.lon, you.lat) : -1);
  }, [places, you]);

  const topCountries = useMemo(() => {
    const totals = new Map<string, number>();
    for (const place of places) {
      if (!place.country) continue;
      totals.set(place.country, (totals.get(place.country) ?? 0) + place.count);
    }
    return [...totals.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [places]);

  const km = you ? Math.round(distanceKm(you, person.home) / 10) * 10 : null;
  const where = you ? [you.city, you.country].filter(Boolean).join(", ") : "";

  function onMove(event: MouseEvent<SVGSVGElement>) {
    const target = event.target as SVGElement;
    const index = target.getAttribute?.("data-country");
    const box = event.currentTarget.getBoundingClientRect();
    if (index === null || index === undefined) {
      setTip(null);
      return;
    }
    setTip({
      name: MAP.countries[Number(index)].name,
      x: event.clientX - box.left,
      y: event.clientY - box.top,
    });
  }

  return (
    <section id="visitors">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="label">Visitors</h2>
        <p className="text-foreground/50 font-mono text-xs">
          {time ? `Hyderabad ${time} · UTC+5:30` : "Hyderabad · UTC+5:30"}
        </p>
      </div>

      <Rise>
        <p className="text-foreground/70 mt-4 text-pretty">
          {where && km !== null ? (
            km < 30 ? (
              <>
                You&apos;re reading this from{" "}
                <span className="text-primary font-medium">{where}</span>.
                We&apos;re practically neighbours.
              </>
            ) : (
              <>
                You&apos;re reading this from{" "}
                <span className="text-primary font-medium">{where}</span>, about{" "}
                {km.toLocaleString("en-US")} km from my desk in Hyderabad.
              </>
            )
          ) : (
            <>I work from Hyderabad, with teams wherever they are.</>
          )}
        </p>
      </Rise>

      <div ref={ref} className="relative mt-5">
        <svg
          ref={svg}
          viewBox={`0 0 ${MAP.width} ${MAP.height}`}
          role="img"
          aria-label="World map showing where visitors are"
          className="block h-auto w-full"
          onMouseMove={onMove}
          onMouseLeave={() => setTip(null)}
        >
          {MAP.countries.map((country, index) => (
            <path
              key={country.name}
              data-country={index}
              d={country.d}
              className={`stroke-page transition-[fill] duration-300 ${
                index === yours
                  ? "fill-foreground/30 hover:fill-foreground/40"
                  : lit.has(index)
                    ? "fill-land-lit hover:fill-land-lit/80"
                    : "fill-land hover:fill-land-lit"
              }`}
              strokeWidth={0.6}
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {youPoint && km !== null && km >= 30 ? (
            <motion.path
              d={arc(youPoint, HOME)}
              fill="none"
              className="stroke-primary"
              strokeWidth={1.5}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
            />
          ) : null}
        </svg>

        {/* Everyone else who has stopped by. */}
        {places.map((place, index) => (
          <motion.span
            key={`${place.lat},${place.lon},${place.city}`}
            aria-hidden="true"
            style={percent(project(place.lon, place.lat))}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...SPRING, delay: 0.3 + Math.min(index, 40) * 0.02 }}
            className="bg-primary pointer-events-none absolute -mt-[3px] -ml-[3px] size-1.5 rounded-full"
          />
        ))}

        {/* Home. */}
        <span
          style={percent(HOME)}
          className="pointer-events-none absolute -mt-[5px] -ml-[5px] size-2.5"
        >
          <span className="ping absolute bg-primary inset-0 rounded-full" />
          <span className="absolute inset-0 rounded-full bg-primary ring-2 ring-page" />
          <span className="text-primary absolute top-1/2 left-4 font-mono text-[11px] -translate-y-1/2 rounded bg-page/85 px-1 whitespace-nowrap">
            Hyderabad
          </span>
        </span>

        {/* You. */}
        {youPoint && km !== null && km >= 30 ? (
          <motion.span
            style={percent(youPoint)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...SPRING, delay: 1.3 }}
            className="pointer-events-none absolute -mt-[5px] -ml-[5px] size-2.5"
          >
            <span className="bg-primary absolute inset-0 rounded-full ring-2 ring-page" />
            <span
              className={`text-primary absolute top-1/2 font-mono text-[11px] -translate-y-1/2 rounded bg-page/85 px-1 whitespace-nowrap ${
                youPoint[0] > MAP.width * 0.8 ? "right-4" : "left-4"
              }`}
            >
              You
            </span>
          </motion.span>
        ) : null}

        {tip ? (
          <span
            style={{ left: tip.x, top: tip.y }}
            className="bg-primary pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+12px)] rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap text-page"
          >
            {tip.name}
          </span>
        ) : null}
      </div>

      {data?.enabled && data.total > 0 ? (
        <Rise>
          <div className="mt-4 flex flex-col gap-2 border-t border-dashed border-line pt-4">
            <p className="text-primary text-sm font-medium">
              {data.total.toLocaleString("en-US")} visits from {places.length}{" "}
              {places.length === 1 ? "place" : "places"}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {topCountries.map(([country, count]) => (
                <li key={country}>
                  <span className="text-foreground/70">{country}</span>{" "}
                  <span className="text-foreground/50 font-mono text-xs">
                    {count.toLocaleString("en-US")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Rise>
      ) : null}

      <p className="text-foreground/50 mt-4 font-mono text-xs">
        Location is approximate, worked out from your connection.{" "}
        {data?.enabled
          ? "Only the city is saved, never anything that identifies you."
          : "Nothing is saved."}
      </p>
    </section>
  );
}
