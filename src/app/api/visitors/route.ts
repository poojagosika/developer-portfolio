import type { NextRequest } from "next/server";

// Visitor map API.
//
// GET  /api/visitors  -> where this visitor is (from the host's location
//                        headers) and every place people have visited from.
// POST /api/visitors  -> counts this visit.
//
// Places are kept in an Upstash Redis database, reached over plain HTTPS, so
// there is nothing to install. Set these two variables on the host:
//   UPSTASH_REDIS_REST_URL
//   UPSTASH_REDIS_REST_TOKEN
// Without them the map still works, but only shows the current visitor.
//
// Only a rounded position (about 10 km), city and country are stored.
// No IP address, no cookie, nothing that identifies a person.

export const dynamic = "force-dynamic";

const URL_ = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = "visitors:places";

type Place = { lat: number; lon: number; city: string; country: string };

async function redis<T>(command: (string | number)[]): Promise<T | null> {
  if (!URL_ || !TOKEN) return null;
  try {
    const response = await fetch(URL_, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(command),
      cache: "no-store",
    });
    if (!response.ok) return null;
    const data = (await response.json()) as { result?: T };
    return data.result ?? null;
  } catch {
    return null;
  }
}

function clean(text: string | null) {
  if (!text) return "";
  let value = text;
  try {
    value = decodeURIComponent(text);
  } catch {
    // Keep the raw value if it is not URL-encoded.
  }
  // "|" separates the parts of a stored place, so it cannot appear inside one.
  return value
    .replace(/[|\n\r]/g, " ")
    .trim()
    .slice(0, 60);
}

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

function countryName(code: string) {
  if (!/^[A-Za-z]{2}$/.test(code)) return code;
  try {
    return regionNames.of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
}

function validPlace(lat: number, lon: number) {
  return (
    Number.isFinite(lat) &&
    Number.isFinite(lon) &&
    Math.abs(lat) <= 90 &&
    Math.abs(lon) <= 180
  );
}

// Vercel, Netlify and Cloudflare each tell us roughly where a request came
// from. Read whichever is present.
function placeFromHeaders(request: NextRequest): Place | null {
  const h = request.headers;

  const vercelLat = h.get("x-vercel-ip-latitude");
  const vercelLon = h.get("x-vercel-ip-longitude");
  if (vercelLat && vercelLon) {
    const lat = Number(vercelLat);
    const lon = Number(vercelLon);
    if (validPlace(lat, lon)) {
      return {
        lat,
        lon,
        city: clean(h.get("x-vercel-ip-city")),
        country: countryName(clean(h.get("x-vercel-ip-country"))),
      };
    }
  }

  const netlify = h.get("x-nf-geo");
  if (netlify) {
    try {
      const geo = JSON.parse(
        Buffer.from(netlify, "base64").toString("utf8"),
      ) as {
        latitude?: number;
        longitude?: number;
        city?: string;
        country?: { name?: string };
      };
      const lat = Number(geo.latitude);
      const lon = Number(geo.longitude);
      if (validPlace(lat, lon)) {
        return {
          lat,
          lon,
          city: clean(geo.city ?? ""),
          country: clean(geo.country?.name ?? ""),
        };
      }
    } catch {
      // Not the header we expected; fall through.
    }
  }

  const cfLat = h.get("cf-iplatitude");
  const cfLon = h.get("cf-iplongitude");
  if (cfLat && cfLon) {
    const lat = Number(cfLat);
    const lon = Number(cfLon);
    if (validPlace(lat, lon)) {
      return {
        lat,
        lon,
        city: clean(h.get("cf-ipcity")),
        country: countryName(clean(h.get("cf-ipcountry"))),
      };
    }
  }

  return null;
}

function round(value: number) {
  return Math.round(value * 10) / 10;
}

export async function GET(request: NextRequest) {
  const you = placeFromHeaders(request);
  const stored = await redis<string[]>(["HGETALL", KEY]);

  const places: (Place & { count: number })[] = [];
  if (stored) {
    for (let i = 0; i + 1 < stored.length; i += 2) {
      const [lat, lon, city = "", country = ""] = stored[i].split("|");
      const count = Number(stored[i + 1]);
      if (validPlace(Number(lat), Number(lon)) && count > 0) {
        places.push({
          lat: Number(lat),
          lon: Number(lon),
          city,
          country,
          count,
        });
      }
    }
  }

  return Response.json({
    enabled: Boolean(URL_ && TOKEN),
    you,
    total: places.reduce((sum, place) => sum + place.count, 0),
    places,
  });
}

export async function POST(request: NextRequest) {
  if (!URL_ || !TOKEN) return Response.json({ saved: false });

  // Trust the host's own headers first. Outside those hosts (local testing,
  // other providers) accept the position the browser looked up.
  let place = placeFromHeaders(request);
  if (!place) {
    try {
      const body = (await request.json()) as Partial<Place>;
      const lat = Number(body.lat);
      const lon = Number(body.lon);
      if (validPlace(lat, lon)) {
        place = {
          lat,
          lon,
          city: clean(String(body.city ?? "")),
          country: clean(String(body.country ?? "")),
        };
      }
    } catch {
      // No usable body.
    }
  }
  if (!place) return Response.json({ saved: false });

  const field = [
    round(place.lat),
    round(place.lon),
    place.city,
    place.country,
  ].join("|");
  const result = await redis<number>(["HINCRBY", KEY, field, 1]);
  return Response.json({ saved: result !== null });
}
