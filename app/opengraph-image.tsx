import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0A0D0C",
          padding: "80px",
        }}
      >
        <div
          style={{
            width: 64,
            height: 6,
            backgroundColor: "#34D399",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#F2F5F3",
          }}
        >
          {site.fullName}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#8FA29A",
            marginTop: 16,
          }}
        >
          {site.role}
        </div>
      </div>
    ),
    { ...size },
  );
}
