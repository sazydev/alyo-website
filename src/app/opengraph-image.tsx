import { ImageResponse } from "next/og";

export const alt = "ALYO, création de sites internet et communication à Angers";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          background: "linear-gradient(135deg, #1f3cff 0%, #1029dc 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 60, fontWeight: 900, letterSpacing: "-4px" }}>
            ALYO
          </div>
          <div
            style={{
              display: "flex",
              padding: "13px 22px",
              borderRadius: 999,
              background: "#3be3a1",
              color: "#0a1a5c",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Angers
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 940,
              fontSize: 66,
              fontWeight: 900,
              letterSpacing: "-3px",
              lineHeight: 1.02,
            }}
          >
            Sites web et communication pour les structures locales
          </div>
          <div style={{ display: "flex", color: "#cbd3ff", fontSize: 27 }}>
            Sites internet · Identités visuelles · Supports de communication
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22 }}>
          <div
            style={{
              width: 13,
              height: 13,
              display: "flex",
              borderRadius: 999,
              background: "#3be3a1",
            }}
          />
          alyo-communication.fr
        </div>
      </div>
    ),
    size,
  );
}
