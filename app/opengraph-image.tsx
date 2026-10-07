import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#050505",
          backgroundImage: "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(139,92,246,0.22), transparent)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              border: "2px solid rgba(139,92,246,0.6)",
              background: "#0b0b0b",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#a1a1aa" }}>Portfolio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 34, color: "#d4d4d8" }}>
            {profile.role} · {profile.experience} experience
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 24, color: "#71717a" }}>
            React · Next.js · Node.js · Express · MongoDB · TypeScript
          </div>
        </div>
      </div>
    ),
    size
  );
}
