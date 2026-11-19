// Builds src/data/world.json: one SVG path per country, already projected
// (Equal Earth), plus the projection numbers the browser needs to place a
// latitude/longitude on the same map. Run with `npm run world`.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const require = createRequire(import.meta.url);
const topo = JSON.parse(
  readFileSync(require.resolve("world-atlas/countries-110m.json"), "utf8"),
);

const W = 1000;
const H = 470;

const countries = feature(topo, topo.objects.countries).features.filter(
  (f) => f.properties.name !== "Antarctica",
);

const projection = geoEqualEarth().fitExtent(
  [
    [4, 4],
    [W - 4, H - 4],
  ],
  { type: "FeatureCollection", features: countries },
);

// One decimal place is plenty at this size and keeps the file small.
const path = geoPath(projection).digits(1);

const out = {
  width: W,
  height: H,
  scale: +projection.scale().toFixed(4),
  translate: projection.translate().map((n) => +n.toFixed(4)),
  countries: countries
    .map((f) => ({ name: f.properties.name, d: path(f) }))
    .filter((c) => c.d),
};

// Check that the hand-written projection in src/lib/geo.ts will agree.
const A1 = 1.340264;
const A2 = -0.081106;
const A3 = 0.000893;
const A4 = 0.003796;
const M = Math.sqrt(3) / 2;
function project(lon, lat) {
  const lambda = (lon * Math.PI) / 180;
  const phi = (lat * Math.PI) / 180;
  const l = Math.asin(M * Math.sin(phi));
  const l2 = l * l;
  const l6 = l2 * l2 * l2;
  const x =
    (lambda * Math.cos(l)) /
    (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)));
  const y = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2));
  return [out.translate[0] + out.scale * x, out.translate[1] - out.scale * y];
}
for (const [lon, lat] of [
  [78.4867, 17.385],
  [-122.42, 37.77],
  [151.2, -33.87],
]) {
  const a = projection([lon, lat]);
  const b = project(lon, lat);
  const off = Math.hypot(a[0] - b[0], a[1] - b[1]);
  if (off > 0.05)
    throw new Error(`projection mismatch at ${lon},${lat}: ${off}`);
}

mkdirSync(new URL("../src/data/", import.meta.url), { recursive: true });
writeFileSync(
  new URL("../src/data/world.json", import.meta.url),
  JSON.stringify(out),
);
console.log(
  `world.json: ${out.countries.length} countries, ` +
    `${(JSON.stringify(out).length / 1024).toFixed(0)} KB`,
);
