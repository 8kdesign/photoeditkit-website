import { ImageResponse } from "next/og";
import { CORE, CX, CY, rays } from "@/components/SunMark";

export const alt = "PhotoEditKit — one call gives a photo the edit it needs, entirely on the device";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const WARM = "#f5a524";
const GREY = "#646c72";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0b0c",
          color: "#f1f3f4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={72} height={72} viewBox="0 0 24 24">
            {rays.map((r, i) => (
              <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={r.lit ? WARM : GREY} strokeWidth={1.85} strokeLinecap="round" />
            ))}
            <circle cx={CX} cy={CY} r={CORE} fill={WARM} />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em" }}>
            PhotoEdit<span style={{ color: "#a4abb0" }}>Kit</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: 960 }}>
            One call gives a photo the edit it needs.
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#a4abb0" }}>
            On-device photo editing · iOS · macOS · Android
          </div>
        </div>
      </div>
    ),
    size,
  );
}
