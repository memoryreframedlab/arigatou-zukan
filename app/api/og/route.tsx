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
  if (slug === "toshokan") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* books side by side */}
        <rect x="18" y="30" width="20" height="85" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <rect x="42" y="42" width="22" height="73" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <rect x="68" y="35" width="18" height="80" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <rect x="90" y="25" width="24" height="90" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* shelf */}
        <line x1="10" y1="118" x2="130" y2="118" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "gakko") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* school building */}
        <rect x="20" y="55" width="100" height="70" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* roof/triangle */}
        <path d="M10 55 L70 18 L130 55" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* door */}
        <rect x="55" y="95" width="30" height="30" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* windows */}
        <rect x="30" y="68" width="22" height="18" rx="2" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <rect x="88" y="68" width="22" height="18" rx="2" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* bell */}
        <circle cx="70" cy="38" r="7" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  if (slug === "internet") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* globe */}
        <circle cx="70" cy="70" r="52" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* meridian lines */}
        <ellipse cx="70" cy="70" rx="28" ry="52" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* equator */}
        <line x1="18" y1="70" x2="122" y2="70" stroke={ICON_COLOR} strokeWidth="3" />
        {/* latitude lines */}
        <path d="M28 44 Q70 38 112 44" fill="none" stroke={ICON_COLOR} strokeWidth="2.5" />
        <path d="M28 96 Q70 102 112 96" fill="none" stroke={ICON_COLOR} strokeWidth="2.5" />
      </svg>
    );
  }
  if (slug === "smartphone") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* phone body */}
        <rect x="38" y="10" width="64" height="120" rx="12" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* screen */}
        <rect x="46" y="25" width="48" height="78" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* home button / indicator */}
        <circle cx="70" cy="120" r="0" fill="none" stroke={ICON_COLOR} strokeWidth="0" />
        <line x1="58" y1="116" x2="82" y2="116" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        {/* speaker */}
        <line x1="58" y1="18" x2="82" y2="18" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        {/* app icons */}
        <rect x="52" y="35" width="14" height="14" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="2.5" />
        <rect x="73" y="35" width="14" height="14" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="2.5" />
        <rect x="52" y="56" width="14" height="14" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="2.5" />
        <rect x="73" y="56" width="14" height="14" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="2.5" />
      </svg>
    );
  }
  if (slug === "megane") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* left lens */}
        <circle cx="42" cy="70" r="28" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* right lens */}
        <circle cx="98" cy="70" r="28" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* bridge */}
        <line x1="70" y1="70" x2="70" y2="70" stroke={ICON_COLOR} strokeWidth="0" />
        <path d="M70 65 Q70 62 70 65" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="70" y1="64" x2="70" y2="76" stroke={ICON_COLOR} strokeWidth="0" />
        {/* nose bridge */}
        <path d="M62 66 Q70 58 78 66" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* left arm */}
        <line x1="14" y1="62" x2="15" y2="70" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* right arm */}
        <line x1="126" y1="62" x2="125" y2="70" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "yakkyoku") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* mortar */}
        <path d="M35 95 Q35 125 70 125 Q105 125 105 95 L105 75 L35 75 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* mortar rim */}
        <line x1="28" y1="75" x2="112" y2="75" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        {/* pestle */}
        <line x1="70" y1="30" x2="70" y2="78" stroke={ICON_COLOR} strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="70" cy="26" rx="12" ry="6" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        {/* cross symbol */}
        <line x1="55" y1="50" x2="85" y2="50" stroke={ICON_COLOR} strokeWidth="0" />
      </svg>
    );
  }
  if (slug === "ginko") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* building */}
        <rect x="20" y="55" width="100" height="70" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* columns */}
        <line x1="40" y1="55" x2="40" y2="125" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="70" y1="55" x2="70" y2="125" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="100" y1="55" x2="100" y2="125" stroke={ICON_COLOR} strokeWidth="4" />
        {/* roof pediment */}
        <path d="M10 55 L70 20 L130 55" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        {/* base */}
        <line x1="10" y1="128" x2="130" y2="128" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "tokei") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* clock face */}
        <circle cx="70" cy="75" r="52" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* 12 o'clock mark */}
        <line x1="70" y1="27" x2="70" y2="38" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* 3 o'clock mark */}
        <line x1="118" y1="75" x2="107" y2="75" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* 6 o'clock mark */}
        <line x1="70" y1="123" x2="70" y2="112" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* 9 o'clock mark */}
        <line x1="22" y1="75" x2="33" y2="75" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* hour hand */}
        <line x1="70" y1="75" x2="70" y2="50" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        {/* minute hand */}
        <line x1="70" y1="75" x2="95" y2="75" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        {/* crown */}
        <rect x="60" y="16" width="20" height="8" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  if (slug === "karenda") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* calendar body */}
        <rect x="15" y="35" width="110" height="90" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        {/* header */}
        <line x1="15" y1="60" x2="125" y2="60" stroke={ICON_COLOR} strokeWidth="4" />
        {/* rings top */}
        <line x1="45" y1="28" x2="45" y2="44" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="95" y1="28" x2="95" y2="44" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        {/* date grid */}
        <circle cx="38" cy="78" r="4" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="60" cy="78" r="4" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="82" cy="78" r="4" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="104" cy="78" r="4" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="38" cy="100" r="4" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="60" cy="100" r="4" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        {/* highlight circle */}
        <circle cx="82" cy="100" r="9" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
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
        <rect x="12" y="30" width="116" height="80" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <rect x="22" y="42" width="72" height="56" rx="5" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="102" y1="38" x2="102" y2="102" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="116" cy="58" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="116" cy="80" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  if (slug === "shinbun") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="18" y="25" width="104" height="90" rx="5" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <line x1="32" y1="50" x2="108" y2="50" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="32" y1="68" x2="108" y2="68" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="82" x2="80" y2="82" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="96" x2="90" y2="96" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <rect x="32" y="30" width="42" height="14" rx="2" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  if (slug === "terebi") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="15" y="35" width="110" height="75" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <rect x="28" y="46" width="84" height="52" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="50" y1="112" x2="90" y2="112" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="70" y1="112" x2="70" y2="125" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="125" x2="90" y2="125" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "jidosha") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="10" y="60" width="120" height="45" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M30 60 L45 35 L95 35 L115 60" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <circle cx="38" cy="112" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="102" cy="112" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <rect x="50" y="42" width="35" height="18" rx="3" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  if (slug === "hikoki") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M20 75 L120 75" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <path d="M50 75 L70 30 L90 75" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinejoin="round" />
        <path d="M30 75 L20 100 L55 90" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinejoin="round" />
        <path d="M100 75 L120 65" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <circle cx="118" cy="75" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  if (slug === "jitensha") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="38" cy="98" r="28" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <circle cx="102" cy="98" r="28" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M38 98 L70 45 L102 98" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinejoin="round" />
        <line x1="70" y1="45" x2="55" y2="45" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M55 45 Q48 35 55 28 Q65 20 72 28" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "kagi") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="50" cy="58" r="28" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <circle cx="50" cy="58" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="75" y1="75" x2="125" y2="125" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="105" y1="108" x2="115" y2="98" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="118" y1="118" x2="128" y2="108" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "futon") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="20" y="55" width="100" height="60" rx="12" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <line x1="20" y1="85" x2="120" y2="85" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <circle cx="70" cy="40" r="22" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
      </svg>
    );
  }
  if (slug === "kasa") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M70 20 Q20 60 20 80 L120 80 Q120 60 70 20 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <line x1="70" y1="80" x2="70" y2="120" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <path d="M70 120 Q60 128 55 122" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="80" x2="70" y2="20" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
        <line x1="55" y1="80" x2="70" y2="20" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
        <line x1="85" y1="80" x2="70" y2="20" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="80" x2="70" y2="20" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "denchi") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="35" y="40" width="70" height="85" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <rect x="52" y="28" width="36" height="15" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="70" y1="60" x2="70" y2="80" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="60" y1="70" x2="80" y2="70" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "sato") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M30 110 L30 50 Q30 30 70 30 Q110 30 110 50 L110 110 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <line x1="30" y1="80" x2="110" y2="80" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
        <path d="M50 30 Q70 18 90 30" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "pan") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M25 90 Q25 50 70 42 Q115 50 115 90 L115 110 L25 110 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <line x1="25" y1="110" x2="115" y2="110" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M50 42 Q70 28 90 42" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="75" x2="85" y2="75" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "gyunyu") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M50 30 L35 120 L105 120 L90 30 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <line x1="48" y1="65" x2="92" y2="65" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <path d="M90 45 Q110 45 108 60 Q106 72 90 68" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <rect x="55" y="20" width="30" height="12" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "ryokucha") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M30 75 Q30 115 70 115 Q110 115 110 75 L100 50 L40 50 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <path d="M100 60 Q125 55 118 38 Q110 22 95 32" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M70 50 Q70 30 55 22" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <path d="M70 50 Q80 30 95 26" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "kohi") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M30 60 L38 115 L102 115 L110 60 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <path d="M110 75 Q132 75 128 92 Q124 108 110 100" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="25" y1="60" x2="115" y2="60" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M55 45 Q58 32 52 22" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <path d="M70 48 Q73 35 67 25" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <path d="M85 45 Q88 32 82 22" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "kamera") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="15" y="45" width="110" height="75" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M50 45 L58 28 L82 28 L90 45" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinejoin="round" />
        <circle cx="70" cy="85" r="24" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <circle cx="70" cy="85" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <circle cx="108" cy="62" r="5" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
      </svg>
    );
  }
  if (slug === "rajio") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="18" y="50" width="104" height="70" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <circle cx="55" cy="90" r="20" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <circle cx="55" cy="90" r="8" fill="none" stroke={ICON_COLOR} strokeWidth="3" />
        <line x1="90" y1="72" x2="110" y2="72" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="90" y1="84" x2="108" y2="84" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="90" y1="96" x2="110" y2="96" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <path d="M40 38 Q70 22 100 38" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "seifuku") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M50 25 L30 50 L20 120 L120 120 L110 50 L90 25" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <path d="M50 25 Q70 38 90 25" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M50 25 L60 50 L70 38 L80 50 L90 25" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinejoin="round" />
        <line x1="70" y1="38" x2="70" y2="120" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 4" />
      </svg>
    );
  }
  if (slug === "meishi") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="15" y="40" width="110" height="65" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <line x1="30" y1="65" x2="110" y2="65" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="30" y1="80" x2="80" y2="80" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="92" x2="65" y2="92" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="52" x2="55" y2="52" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "hoken") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M70 18 Q30 28 20 60 Q18 100 70 122 Q122 100 120 60 Q110 28 70 18 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <line x1="70" y1="55" x2="70" y2="85" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <line x1="55" y1="70" x2="85" y2="70" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "koban") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="25" y="45" width="90" height="75" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M25 60 L70 25 L115 60" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <rect x="52" y="88" width="36" height="32" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="70" y1="88" x2="70" y2="120" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "sento") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="15" y="75" width="110" height="45" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M35 75 Q35 45 70 40 Q105 45 105 75" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <path d="M50 38 Q55 22 50 12" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <path d="M70 35 Q75 19 70 9" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <path d="M90 38 Q95 22 90 12" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "tatami") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="15" y="50" width="110" height="70" rx="6" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <line x1="15" y1="85" x2="125" y2="85" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="70" y1="50" x2="70" y2="120" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="55" x2="65" y2="55" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
        <line x1="75" y1="55" x2="120" y2="55" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
        <line x1="20" y1="115" x2="65" y2="115" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
        <line x1="75" y1="115" x2="120" y2="115" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
      </svg>
    );
  }
  if (slug === "enpitsu") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M50 15 L90 15 L90 110 L70 128 L50 110 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <line x1="50" y1="110" x2="90" y2="110" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="30" x2="90" y2="30" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="42" x2="90" y2="42" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "kagami") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <ellipse cx="70" cy="58" rx="40" ry="45" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <rect x="55" y="100" width="30" height="30" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="55" y1="100" x2="48" y2="130" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="85" y1="100" x2="92" y2="130" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="42" y1="130" x2="98" y2="130" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "denwa") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M35 25 Q25 25 22 38 L18 62 Q16 75 28 80 Q42 88 58 95 Q72 100 88 98 Q102 96 112 88 Q122 80 118 68 L114 52 Q110 40 98 42 L80 48 Q72 52 72 60 Q72 68 80 72 Q70 76 62 68 Q54 60 58 50 Q62 42 58 36 Q52 28 35 25 Z" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinejoin="round" />
      </svg>
    );
  }
  if (slug === "purasu") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M35 35 L45 105 L95 105 L105 35 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <line x1="30" y1="35" x2="110" y2="35" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M52 35 L50 22 L90 22 L88 35" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinejoin="round" />
        <line x1="55" y1="60" x2="85" y2="60" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 4" />
        <line x1="57" y1="80" x2="83" y2="80" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 4" />
      </svg>
    );
  }
  if (slug === "umi-yu") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M15 90 Q35 75 55 90 Q75 105 95 90 Q115 75 125 90" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinecap="round" />
        <path d="M15 108 Q35 93 55 108 Q75 123 95 108 Q115 93 125 108" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <circle cx="70" cy="45" r="18" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="70" y1="63" x2="70" y2="75" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="55" x2="35" y2="65" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <line x1="90" y1="55" x2="105" y2="65" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "undokai") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="50" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <path d="M70 20 L70 40 M100 30 L88 48 M120 55 L102 60 M120 85 L102 80 M100 110 L88 92 M70 120 L70 100 M40 110 L52 92 M20 85 L38 80 M20 55 L38 60 M40 30 L52 48" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
        <circle cx="70" cy="70" r="12" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
      </svg>
    );
  }
  if (slug === "hanko") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="45" y="15" width="50" height="85" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <rect x="38" y="95" width="64" height="30" rx="5" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="45" y1="100" x2="95" y2="100" stroke={ICON_COLOR} strokeWidth="3" />
        <line x1="60" y1="110" x2="80" y2="110" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="120" x2="82" y2="120" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "furoshiki") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <path d="M70 15 Q105 40 115 70 Q125 100 95 115 Q70 125 45 115 Q15 100 25 70 Q35 40 70 15 Z" fill="none" stroke={ICON_COLOR} strokeWidth="5" strokeLinejoin="round" />
        <path d="M58 15 Q45 8 40 18" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M82 15 Q95 8 100 18" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
        <path d="M50 70 Q70 55 90 70" fill="none" stroke={ICON_COLOR} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "geta") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <rect x="20" y="55" width="100" height="28" rx="8" fill="none" stroke={ICON_COLOR} strokeWidth="5" />
        <rect x="35" y="50" width="30" height="12" rx="4" fill="none" stroke={ICON_COLOR} strokeWidth="4" />
        <line x1="40" y1="83" x2="40" y2="115" stroke={ICON_COLOR} strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="83" x2="100" y2="115" stroke={ICON_COLOR} strokeWidth="6" strokeLinecap="round" />
        <path d="M55 45 Q70 28 85 45" fill="none" stroke={ICON_COLOR} strokeWidth="4" strokeLinecap="round" />
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
