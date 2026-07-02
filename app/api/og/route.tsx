import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const BG = "#F5F0E8";
const TEXT_DARK = "#2C2017";
const ICON_COLOR = "#C8B89A";
const LOGO_COLOR = "#8C7B6B";

function Icon({ slug }: { slug: string }) {
  if (slug === "suidou") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* faucet spout */}
        <rect x="50" y="20" width="40" height="12" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <rect x="62" y="32" width="16" height="40" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* spout curve */}
        <path d="M62 72 Q62 90 50 95" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        {/* water drop */}
        <ellipse cx="48" cy="108" rx="7" ry="9" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "reizouko") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* fridge body */}
        <rect x="30" y="15" width="80" height="110" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* divider line */}
        <line x1="30" y1="65" x2="110" y2="65" stroke={ICON_COLOR} strokeWidth="4" />
        {/* top handle */}
        <line x1="85" y1="35" x2="85" y2="55" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        {/* bottom handle */}
        <line x1="85" y1="80" x2="85" y2="105" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "denki") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* bulb globe */}
        <path d="M70 20 C42 20 24 42 24 62 C24 80 36 92 50 98 L50 112 L90 112 L90 98 C104 92 116 80 116 62 C116 42 98 20 70 20 Z"
          fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* base lines */}
        <line x1="50" y1="118" x2="90" y2="118" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="55" y1="126" x2="85" y2="126" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "shingo") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="45" y="10" width="50" height="110" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <circle cx="70" cy="38" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="70" cy="70" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="70" cy="102" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "yubin") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="15" y="35" width="110" height="78" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M15 41 L70 82 L125 41" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
      </svg>
    );
  }
  if (slug === "kyukyusha") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* ambulance body */}
        <rect x="10" y="50" width="110" height="60" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* cab roof */}
        <path d="M80 50 L80 25 L110 25 L120 50" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* cross symbol */}
        <line x1="40" y1="70" x2="40" y2="90" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="30" y1="80" x2="50" y2="80" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        {/* wheels */}
        <circle cx="35" cy="116" r="10" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="105" cy="116" r="10" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  // generic icon
  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <circle cx="70" cy="70" r="55" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
    </svg>
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "";
  const title = searchParams.get("title") ?? "有難う図鑑";
  const catchphrase = searchParams.get("text") ?? "当たり前にあるものの、知らなかった話。";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: BG,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 64px 48px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* logo */}
        <div style={{ color: LOGO_COLOR, fontSize: "22px", letterSpacing: "0.1em", display: "flex" }}>
          有難う図鑑
        </div>

        {/* catchphrase */}
        <div
          style={{
            color: TEXT_DARK,
            fontSize: catchphrase.length > 22 ? "50px" : "64px",
            fontWeight: "bold",
            lineHeight: "1.5",
            maxWidth: "840px",
            wordBreak: "keep-all",
            overflowWrap: "anywhere",
            display: "flex",
          }}
        >
          {catchphrase}
        </div>

        {/* bottom: title + icon */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ color: LOGO_COLOR, fontSize: "20px", maxWidth: "680px", lineHeight: "1.5", display: "flex" }}>
            {title}
          </div>
          <div style={{ display: "flex", opacity: 0.9 }}>
            <Icon slug={slug} />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
