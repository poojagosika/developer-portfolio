import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { person } from "@/data/site";

// The picture shown when the site is shared on LinkedIn, X, WhatsApp, Slack
// and so on. Drawn in code so it always matches the site.
export const alt =
  "Pooja Gosika, Lead Software Engineer. I build AI products end-to-end.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(path.join(process.cwd(), "public", "pooja.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#000000",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={132}
          height={132}
          style={{
            borderRadius: 30,
            border: "3px solid rgba(255,255,255,0.35)",
            objectFit: "cover",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: -2 }}>
            {person.name}
          </div>
          <div style={{ fontSize: 30, color: "#a3a3a3", marginTop: 4 }}>
            {`${person.role} at ${person.company}`}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 62,
          lineHeight: 1.12,
          fontWeight: 600,
          letterSpacing: -2,
          maxWidth: 1000,
        }}
      >
        I build AI products end-to-end, usually as the only engineer on them.
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 26,
          color: "#a3a3a3",
        }}
      >
        <div>poojagosika.com</div>
        <div>Upivot · InterviewPrepUp · Deliver Website · Open source</div>
      </div>
    </div>,
    size,
  );
}
