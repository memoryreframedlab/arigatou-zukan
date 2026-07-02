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
        <rect x="50" y="20" width="40" height="12" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <rect x="62" y="32" width="16" height="40" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M62 72 Q62 90 50 95" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="48" cy="108" rx="7" ry="9" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "reizouko") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="30" y="15" width="80" height="110" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <line x1="30" y1="65" x2="110" y2="65" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="85" y1="35" x2="85" y2="55" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="85" y1="80" x2="85" y2="105" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "denki") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M70 20 C42 20 24 42 24 62 C24 80 36 92 50 98 L50 112 L90 112 L90 98 C104 92 116 80 116 62 C116 42 98 20 70 20 Z"
          fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
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
        <rect x="10" y="50" width="110" height="60" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M80 50 L80 25 L110 25 L120 50" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <line x1="40" y1="70" x2="40" y2="90" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="30" y1="80" x2="50" y2="80" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <circle cx="35" cy="116" r="10" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="105" cy="116" r="10" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "toilet") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* tank */}
        <rect x="38" y="15" width="64" height="38" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* bowl */}
        <path d="M30 53 Q30 115 70 115 Q110 115 110 53 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* base */}
        <line x1="50" y1="115" x2="90" y2="115" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "sentakuki") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* body */}
        <rect x="20" y="15" width="100" height="110" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* drum circle */}
        <circle cx="70" cy="82" r="32" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* inner circle */}
        <circle cx="70" cy="82" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* control panel line */}
        <line x1="30" y1="42" x2="110" y2="42" stroke={ICON_COLOR} strokeWidth="4" />
        {/* knob */}
        <circle cx="50" cy="29" r="7" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "aircon") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* unit body */}
        <rect x="15" y="30" width="110" height="40" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* vent lines */}
        <line x1="30" y1="80" x2="110" y2="80" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* airflow arrows */}
        <path d="M40 95 Q55 108 70 95" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M70 95 Q85 108 100 95" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* indicator dot */}
        <circle cx="95" cy="50" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "kyutoki") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* heater body */}
        <rect x="35" y="20" width="70" height="90" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* pipe top */}
        <line x1="70" y1="20" x2="70" y2="8" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        {/* pipe bottom */}
        <line x1="55" y1="110" x2="55" y2="125" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="85" y1="110" x2="85" y2="125" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        {/* flame indicator */}
        <path d="M58 75 Q65 60 70 70 Q75 55 82 75" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "erebeta") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* shaft */}
        <rect x="40" y="10" width="60" height="120" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* car */}
        <rect x="48" y="60" width="44" height="45" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* door split */}
        <line x1="70" y1="65" x2="70" y2="100" stroke={ICON_COLOR} strokeWidth="3" />
        {/* up/down arrows */}
        <path d="M68 25 L70 18 L72 25" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinejoin="round" />
        <path d="M68 45 L70 52 L72 45" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinejoin="round" />
      </svg>
    );
  }
  if (slug === "shobo") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* fire truck body */}
        <rect x="10" y="55" width="105" height="55" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* cab */}
        <path d="M95 55 L95 35 L118 35 L118 55" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* ladder on top */}
        <line x1="15" y1="52" x2="92" y2="52" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="44" x2="92" y2="44" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="44" x2="30" y2="52" stroke={ICON_COLOR} strokeWidth="3" />
        <line x1="55" y1="44" x2="55" y2="52" stroke={ICON_COLOR} strokeWidth="3" />
        <line x1="78" y1="44" x2="78" y2="52" stroke={ICON_COLOR} strokeWidth="3" />
        {/* wheels */}
        <circle cx="38" cy="116" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="100" cy="116" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "gomi") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* bin body */}
        <path d="M35 45 L45 125 L95 125 L105 45 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* lid */}
        <rect x="25" y="32" width="90" height="16" rx="5" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* handle on lid */}
        <path d="M57 32 Q70 18 83 32" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* lines on body */}
        <line x1="56" y1="68" x2="52" y2="108" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="70" y1="68" x2="70" y2="108" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="84" y1="68" x2="88" y2="108" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "konbini") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* store front */}
        <rect x="15" y="45" width="110" height="80" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* roof/sign */}
        <rect x="10" y="28" width="120" height="20" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* door */}
        <rect x="52" y="85" width="36" height="40" rx="2" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* window left */}
        <rect x="22" y="58" width="22" height="22" rx="2" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* window right */}
        <rect x="96" y="58" width="22" height="22" rx="2" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* clock/24h symbol */}
        <circle cx="70" cy="38" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  if (slug === "takuhaibin") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* box */}
        <rect x="25" y="45" width="90" height="75" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* box flaps top */}
        <path d="M25 45 L55 30 L85 45" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinejoin="round" />
        <path d="M115 45 L85 30 L85 45" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinejoin="round" />
        {/* tape line */}
        <line x1="70" y1="45" x2="70" y2="120" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* label */}
        <rect x="40" y="75" width="50" height="28" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <line x1="47" y1="88" x2="83" y2="88" stroke={ICON_COLOR} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "reitoshokuhin") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* snowflake */}
        <line x1="70" y1="18" x2="70" y2="62" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="70" y1="78" x2="70" y2="122" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="25" y1="70" x2="115" y2="70" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="36" y1="36" x2="104" y2="104" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="104" y1="36" x2="36" y2="104" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <circle cx="70" cy="70" r="10" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "toilet-paper") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* roll body */}
        <ellipse cx="70" cy="70" rx="45" ry="55" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* inner hole */}
        <ellipse cx="70" cy="70" rx="18" ry="22" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* paper tail */}
        <path d="M70 125 Q60 138 50 130" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "jihanki") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* machine body */}
        <rect x="30" y="12" width="80" height="116" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* display window */}
        <rect x="40" y="22" width="60" height="55" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* can icons in window */}
        <rect x="48" y="32" width="14" height="34" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <rect x="68" y="32" width="14" height="34" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* coin slot */}
        <rect x="90" y="85" width="14" height="4" rx="2" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* output tray */}
        <rect x="40" y="108" width="60" height="12" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "hoso-doro") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* road surface */}
        <path d="M10 120 L50 20 L90 20 L130 120 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* center dashes */}
        <line x1="70" y1="30" x2="70" y2="50" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" />
        <line x1="70" y1="60" x2="70" y2="80" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" />
        <line x1="70" y1="90" x2="70" y2="110" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" />
      </svg>
    );
  }
  if (slug === "tetsudo") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* train body */}
        <rect x="25" y="30" width="90" height="70" rx="14" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* nose */}
        <path d="M25 44 Q10 70 25 96" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* windows */}
        <rect x="45" y="48" width="22" height="18" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <rect x="78" y="48" width="22" height="18" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* wheels */}
        <circle cx="50" cy="108" r="10" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="90" cy="108" r="10" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* rail */}
        <line x1="10" y1="120" x2="130" y2="120" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "gas-konro") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* stove top */}
        <rect x="15" y="55" width="110" height="60" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* burner left */}
        <circle cx="47" cy="85" r="16" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="47" cy="85" r="6" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* burner right */}
        <circle cx="93" cy="85" r="16" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="93" cy="85" r="6" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* flame */}
        <path d="M40 52 Q47 35 54 52" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M86 52 Q93 35 100 52" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "mado-garasu") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* window frame */}
        <rect x="20" y="20" width="100" height="100" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* center divider vertical */}
        <line x1="70" y1="20" x2="70" y2="120" stroke={ICON_COLOR} strokeWidth="4" />
        {/* center divider horizontal */}
        <line x1="20" y1="70" x2="120" y2="70" stroke={ICON_COLOR} strokeWidth="4" />
        {/* light reflection lines */}
        <line x1="30" y1="30" x2="55" y2="55" stroke={ICON_COLOR} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="38" y1="30" x2="55" y2="47" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "sekken") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* soap bar */}
        <rect x="25" y="55" width="90" height="55" rx="14" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* label line */}
        <line x1="42" y1="82" x2="98" y2="82" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        {/* bubbles */}
        <circle cx="52" cy="38" r="9" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="75" cy="28" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="98" cy="36" r="8" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "haburashi") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* handle */}
        <rect x="55" y="75" width="20" height="55" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* head */}
        <rect x="35" y="20" width="60" height="58" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* bristle rows */}
        <line x1="48" y1="35" x2="48" y2="68" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" strokeDasharray="6 4" />
        <line x1="65" y1="35" x2="65" y2="68" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" strokeDasharray="6 4" />
        <line x1="82" y1="35" x2="82" y2="68" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" strokeDasharray="6 4" />
      </svg>
    );
  }
  if (slug === "kanzume") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* can body */}
        <rect x="30" y="40" width="80" height="80" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* top lid */}
        <rect x="25" y="30" width="90" height="16" rx="5" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* pull tab */}
        <path d="M70 22 L80 30" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <circle cx="82" cy="22" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* label line */}
        <line x1="45" y1="95" x2="95" y2="95" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="45" y1="108" x2="95" y2="108" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "denshi-renji") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* body */}
        <rect x="12" y="30" width="116" height="80" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* door window */}
        <rect x="22" y="42" width="72" height="56" rx="5" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* control panel divider */}
        <line x1="102" y1="38" x2="102" y2="102" stroke={ICON_COLOR} strokeWidth="3" />
        {/* control buttons */}
        <circle cx="116" cy="58" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="116" cy="80" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <rect x="20" y="20" width="100" height="100" rx="12" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
    </svg>
  );
}

// Pick font size so the longest clause fits within 840px (≈ font-size × chars)
function longestClauseFontSize(text: string): number {
  const clauses = text.split(/[、。！？]/).filter((c) => c.length > 0);
  const max = Math.max(...clauses.map((c) => c.length), 1);
  if (max <= 8) return 70;
  if (max <= 12) return 60;
  if (max <= 15) return 52;
  if (max <= 17) return 48;
  return 44;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "";
  const title = searchParams.get("title") ?? "有難う図鑑";
  const catchphrase = searchParams.get("text") ?? "当たり前にあるものの、知らなかった話。";

  // Fetch Noto Sans JP in TTF format (Satori requires TTF/OTF, not WOFF2)
  // Sending a non-browser UA causes Google Fonts to respond with TTF URLs
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap",
    { headers: { "User-Agent": "curl/7.0" } }
  ).then((res) => res.text());
  const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1] ?? "";
  const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer());

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
          fontFamily: "'Noto Sans JP', serif",
          position: "relative",
        }}
      >
        {/* logo */}
        <div style={{ color: LOGO_COLOR, fontSize: "30px", letterSpacing: "0.1em", display: "flex" }}>
          有難う図鑑
        </div>

        {/* catchphrase – font size based on longest clause to prevent mid-word wrapping */}
        <div
          style={{
            color: TEXT_DARK,
            fontSize: `${longestClauseFontSize(catchphrase)}px`,
            fontWeight: "bold",
            lineHeight: "1.5",
            maxWidth: "840px",
            whiteSpace: "pre-wrap",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {catchphrase.replace(/、/g, "、\n")}
        </div>

        {/* bottom: title + icon */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ color: LOGO_COLOR, fontSize: "24px", maxWidth: "680px", lineHeight: "1.5", display: "flex" }}>
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
      fonts: [
        {
          name: "Noto Sans JP",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
