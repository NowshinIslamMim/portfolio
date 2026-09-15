import { useState, useEffect, useRef } from "react";

const PROJECTS = [
 
];

const SKILLS = [
  "C",
  "C++",
  "Python",
  "Machine Learning",
  "HTML",
  "CSS",
  "Word",
  "PowerPoint",
  "Excel",
  "UI/UX",
];

const PASTELS_LIGHT = [
  { bg: "#D9F3EA", fg: "#0E9A78" },
  { bg: "#FCF0D9", fg: "#B07A0C" },
  { bg: "#E6F3E0", fg: "#3C7A3E" },
  { bg: "#DCEEF0", fg: "#2E7A87" },
  { bg: "#F5E6DA", fg: "#B15A2E" },
];

const PASTELS_DARK = [
  { bg: "#123B32", fg: "#4FE3C1" },
  { bg: "#332008", fg: "#F5B942" },
  { bg: "#1F3320", fg: "#8FD08F" },
  { bg: "#12313A", fg: "#7FCBDD" },
  { bg: "#3A2115", fg: "#E8946A" },
];

const EDUCATION = [
  {
    school: "International Islamic University Chittagong (IIUC)",
    degree: "BSc in Computer Science & Engineering",
    period: "Autumn 2022 - Present (4th Year)",
  },
  {
    school: "Chattogram Cantonment Public College",
    degree: "Higher Secondary Certificate — GPA 5.00/5.00",
    period: "2018 - 2019",
  },
  {
    school: "Bangladesh Elementary School",
    degree: "Secondary School Certificate — GPA 5.00/5.00",
    period: "2016 - 2017",
  },
];

const EXPERIENCE = [
  
];

const CERTIFICATIONS = [
  "Machine Learning with Python - EDGE, Government of Bangladesh",
];

const PHOTO_URL = null;


/* =========================
   ICONS
========================= */

function IconGitHub({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function IconLinkedIn({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconAbout({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

function IconEducation({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function IconExperience({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M2 13h20" />
    </svg>
  );
}

function IconProjects({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M3 10h18" />
    </svg>
  );
}

function IconSkills({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z" />
    </svg>
  );
}

function IconCertifications({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M9 13.5 7 22l5-3 5 3-2-8.5" />
    </svg>
  );
}

function IconChip({ children, bg, fg }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 26,
        height: 26,
        borderRadius: 8,
        background: bg,
        color: fg,
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}


/* =========================
   REVEAL ANIMATION
========================= */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, style }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}


/* =========================
   PORTFOLIO
========================= */

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [burst, setBurst] = useState(false);

  const [dark, setDark] = useState(true);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const email = "nowshinislam2905@gmail.com";
  const phone = "+880 1890920683";
  const name = "Nowshin Islam Mim";

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  const copyEmail = () => {
    navigator.clipboard?.writeText(email).catch(() => {});

    setCopied(true);
    setBurst(true);

    setTimeout(() => setCopied(false), 1800);
    setTimeout(() => setBurst(false), 900);
  };

  const t = dark
    ? {
        bg: "#0A1613",
        text: "#F0F7F4",
        muted: "#A9C7C0",
        mutedLight: "#748F89",
        cardBg: "#101F1C",
        cardBorder: "#1E3833",
        navLink: "#A9C7C0",
        link: "#4FE3C1",
        accent: "#4FE3C1",
        accentSolid: "#1FAE8C",
        badgeBg: "#332008",
        badgeFg: "#F5B942",
        badgeDot: "#F5B942",
        dotColor: "#1E3833",
        blob1: "#134A3F",
        blob2: "#3A2A0C",
        blob3: "#0F2E28",
        sparkle: "#4FE3C1",
        avatarGrad: "linear-gradient(135deg, #1FAE8C, #0B2620)",
        scrollCue: "#748F89",
        chipBg: "#123B32",
        chipFg: "#4FE3C1",
        pills: PASTELS_DARK,
      }
    : {
        bg: "#FAF8F2",
        text: "#123128",
        muted: "#4C6B62",
        mutedLight: "#7E968E",
        cardBg: "#FFFFFF",
        cardBorder: "#E1EBE6",
        navLink: "#4C6B62",
        link: "#0E9A78",
        accent: "#0E9A78",
        accentSolid: "#0B7F63",
        badgeBg: "#FCF0D9",
        badgeFg: "#B07A0C",
        badgeDot: "#E3A62E",
        dotColor: "#E6EFE9",
        blob1: "#BFE9DB",
        blob2: "#F6E2AE",
        blob3: "#DCEDE4",
        sparkle: "#0E9A78",
        avatarGrad: "linear-gradient(135deg, #38C7A1, #0B7F63)",
        scrollCue: "#7E968E",
        chipBg: "#D9F3EA",
        chipFg: "#0E9A78",
        pills: PASTELS_LIGHT,
      };

  return (
    <div
      style={{
        background: t.bg,
        color: t.text,
        fontFamily:
          "-apple-system, 'Segoe UI', Inter, Arial, sans-serif",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >

      {/* =========================
          GLOBAL CSS
      ========================= */}

      <style>{`

        html,
        body,
        #root {
          margin: 0;
          padding: 0;
          background: ${t.bg};
          min-height: 100%;
        }

        .card {
          background: ${t.cardBg};
          border: 1px solid ${t.cardBorder};
          border-radius: 16px;
          position: relative;
          z-index: 1;
          transition:
            box-shadow 0.2s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 8px 20px rgba(11,127,99,0.18);
        }

        .pill {
          border-radius: 999px;
          font-size: 13px;
          padding: 6px 14px;
          display: inline-block;
          transition:
            transform 0.18s ease,
            filter 0.18s ease;
          cursor: default;
        }

        .pill:hover {
          transform: translateY(-3px) rotate(-2deg);
          filter: brightness(1.08);
        }

        .link {
          color: ${t.link};
          text-decoration: none;
          font-weight: 600;
        }

        .link:hover {
          text-decoration: underline;
        }

        .icon-row {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: ${t.cardBg};
          border: 1px solid ${t.cardBorder};
          color: ${t.link};
          text-decoration: none;
          cursor: pointer;
          padding: 0;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            color 0.18s ease;
        }

        .icon-btn:hover {
          transform: translateY(-3px);
          background: ${t.accentSolid};
          color: #fff;
        }

        .copy-icon-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 18px;
          background: ${t.accentSolid};
          color: #fff;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          position: relative;
          overflow: visible;
        }

        .proj-card {
          transition:
            transform 0.15s ease,
            box-shadow 0.15s ease;
        }

        .proj-card:hover {
          transform: translateY(-4px) rotate(-0.3deg);
          box-shadow: 0 12px 26px rgba(11,127,99,0.24);
        }

        /* =========================
           SIDEBAR
        ========================= */

        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 12px;
          transition:
            width 0.25s ease,
            background 0.3s ease,
            border-color 0.3s ease;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .sidebar-collapse {
          position: absolute;
          top: 20px;
          right: -14px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 110;
          transition: transform 0.2s ease;
        }

        .sidebar-collapse:hover {
          transform: scale(1.08);
        }

        .sidebar-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 20px;
          flex-shrink: 0;
          overflow: hidden;
          margin-top: 22px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          margin-top: 10px;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          color: ${t.navLink};
          text-decoration: none;
          font-size: 14px;
          white-space: nowrap;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .sidebar-link:hover {
          background: ${t.badgeBg};
          color: ${t.link};
          transform: translateX(2px);
        }

        .sidebar-theme-toggle {
          margin-top: auto;
        }

        .theme-toggle {
          border: 1px solid ${t.cardBorder};
          background: ${t.cardBg};
          border-radius: 999px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          transition:
            transform 0.2s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .theme-toggle:hover {
          transform: scale(1.08);
        }

        /* =========================
           MAIN CONTENT
        ========================= */

        .main-content {
          transition: margin-left 0.25s ease;
          min-height: 100vh;
          position: relative;
          z-index: 1;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: ${dark ? 0.4 : 0.35};
          pointer-events: none;
          z-index: 0;
          animation: drift 18s ease-in-out infinite;
        }

        .blob-1 {
          width: 380px;
          height: 380px;
          background: ${t.blob1};
          top: -120px;
          left: -100px;
          animation-delay: 0s;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: ${t.blob2};
          top: 40px;
          right: -80px;
          animation-delay: -6s;
        }

        .blob-3 {
          width: 320px;
          height: 320px;
          background: ${t.blob3};
          top: 420px;
          left: 40%;
          animation-delay: -12s;
        }

        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(24px, 30px) scale(1.06);
          }
        }

        .dotgrid {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          background-image:
            radial-gradient(${t.dotColor} 1.4px, transparent 1.4px);
          background-size: 26px 26px;
          -webkit-mask-image:
            linear-gradient(to bottom, black, transparent 700px);
          mask-image:
            linear-gradient(to bottom, black, transparent 700px);
        }

        header,
        section {
          position: relative;
          z-index: 1;
        }

        .timeline-item {
          border-left: 2px solid ${t.cardBorder};
          padding-left: 18px;
          padding-bottom: 22px;
          position: relative;
        }

        .education-row {
          display: flex;
          align-items: flex-start;
        }

        .education-copy {
          min-width: 0;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          left: -6px;
          top: 4px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${t.accentSolid};
        }

        .avatar {
          animation: bob 5s ease-in-out infinite;
          overflow: hidden;
        }

        @keyframes bob {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .badge {
          background: ${t.badgeBg};
          color: ${t.badgeFg};
          border-radius: 999px;
          font-size: 12.5px;
          padding: 5px 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${t.badgeDot};
          animation: pulse 1.6s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(0.75);
          }
        }

        .copy-btn {
          position: relative;
          overflow: visible;
        }

        .confetti-sp {
          position: absolute;
          font-size: 16px;
          opacity: 0;
          pointer-events: none;
          left: 50%;
          top: 0;
        }

        .copy-btn.burst .confetti-sp {
          animation: pop 0.8s ease-out forwards;
        }

        .confetti-sp {
          color: #ffffff;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
        }

        @keyframes pop {
          0% {
            opacity: 1;
            transform: translate(-50%, 0) scale(0.6);
          }

          100% {
            opacity: 0;
            transform:
              translate(
                calc(-50% + var(--dx, 0px)),
                -46px
              )
              scale(1.1)
              rotate(30deg);
          }
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .flag-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          overflow: hidden;
          font-size: 12px;
          border: 1px solid ${t.cardBorder};
          background: ${t.cardBg};
        }

        @media (max-width: 780px) {

          .main-content {
            margin-left: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            padding-bottom: 82px !important;
            overflow-x: hidden;
          }

          .sidebar {
            width: 100% !important;
            height: 68px !important;
            position: fixed !important;
            top: auto !important;
            bottom: 0 !important;
            left: 0 !important;
            padding: 8px 10px !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            align-items: center !important;
            overflow: hidden !important;
            border-right: none !important;
            border-top: 1px solid ${t.cardBorder} !important;
            z-index: 9999 !important;
            box-sizing: border-box !important;
          }

          .sidebar-avatar { display: none !important; }

          .sidebar > div:not(.sidebar-avatar):not(.sidebar-nav) {
            display: none !important;
          }

          .sidebar-nav {
            width: auto !important;
            margin-top: 0 !important;
            display: flex !important;
            flex-direction: row !important;
            gap: 5px !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .sidebar-link {
            width: 42px !important;
            height: 42px !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 12px !important;
            flex-shrink: 0;
          }

          .sidebar-link span { display: none !important; }
          .sidebar-collapse { display: none !important; }

          .sidebar-theme-toggle {
            margin-top: 0 !important;
            margin-left: 5px !important;
            flex-shrink: 0 !important;
          }

          .hero-section {
            width: 100% !important;
            max-width: 100% !important;
            padding: 48px 20px 40px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 24px !important;
            box-sizing: border-box !important;
          }

          .hero-content {
            width: 100% !important;
            max-width: 650px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .hero-title {
            font-size: 34px !important;
            line-height: 1.15 !important;
            text-align: center !important;
            word-break: normal !important;
            overflow-wrap: anywhere !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .hero-content p {
            max-width: 600px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            text-align: center !important;
            line-height: 1.7 !important;
          }

          .hero-content .icon-btn {
            width: 42px !important;
            height: 42px !important;
          }

          .main-content section {
            padding-left: 18px !important;
            padding-right: 18px !important;
            box-sizing: border-box !important;
          }

          .proj-grid, .two-col {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .card {
            width: 100% !important;
            box-sizing: border-box !important;
            border-radius: 14px !important;
          }
        }

        @media (max-width: 640px) {

          .main-content { padding-bottom: 78px !important; }

          .hero-section {
            padding: 38px 16px 32px !important;
            gap: 20px !important;
          }

          .hero-title {
            font-size: 30px !important;
            line-height: 1.18 !important;
          }

          .hero-content p {
            font-size: 14px !important;
            line-height: 1.65 !important;
          }

          .main-content section {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .card {
            padding: 20px !important;
            border-radius: 14px !important;
          }

          .sidebar {
            height: 64px !important;
            padding: 7px 8px !important;
          }

          .sidebar-nav { gap: 3px !important; }

          .sidebar-link {
            width: 40px !important;
            height: 40px !important;
            border-radius: 11px !important;
          }

          .sidebar-theme-toggle {
            width: 40px !important;
            height: 40px !important;
          }

          .proj-grid, .two-col {
            grid-template-columns: 1fr !important;
          }

          .icon-btn {
            width: 40px !important;
            height: 40px !important;
          }
        }

        @media (max-width: 390px) {

          .hero-section {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }

          .hero-title { font-size: 27px !important; }
          .hero-content p { font-size: 13.5px !important; }

          .main-content section {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }

          .sidebar-link,
          .sidebar-theme-toggle {
            width: 38px !important;
            height: 38px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .blob,
          .avatar,
          .badge-dot {
            animation: none;
          }
        }

      `}</style>


      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="dotgrid" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />


      {/* =========================
          SIDEBAR
      ========================= */}

      <aside
        className="sidebar"
        style={{
          width: sidebarOpen ? 220 : 76,
          background: t.cardBg,
          borderRight: `1px solid ${t.cardBorder}`,
        }}
      >

        <button
          className="sidebar-collapse"
          onClick={() => setSidebarOpen((s) => !s)}
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
          style={{
            background: t.cardBg,
            border: `1px solid ${t.cardBorder}`,
            color: t.link,
          }}
        >
          {sidebarOpen ? "‹" : "›"}
        </button>


        <div
          className="sidebar-avatar"
          style={{
            background: t.avatarGrad,
          }}
        >
          {PHOTO_URL ? (
            <img
              src={PHOTO_URL}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            initials
          )}
        </div>


        {sidebarOpen && (
          <>
            <div
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: t.text,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              {name}
            </div>

            <div
              style={{
                fontSize: 12,
                color: t.mutedLight,
                textAlign: "center",
                marginBottom: 18,
              }}
            >
              CSE Student
            </div>
          </>
        )}


        <nav className="sidebar-nav">

          <a
            className="sidebar-link"
            href="#about"
            title="About"
          >
            <IconAbout size={17} />
            {sidebarOpen && <span>About</span>}
          </a>

          <a
            className="sidebar-link"
            href="#education"
            title="Education"
          >
            <IconEducation size={17} />
            {sidebarOpen && <span>Education</span>}
          </a>

          <a
            className="sidebar-link"
            href="#experience"
            title="Experience"
          >
            <IconExperience size={17} />
            {sidebarOpen && <span>Experience</span>}
          </a>

          <a
            className="sidebar-link"
            href="#projects"
            title="Projects"
          >
            <IconProjects size={17} />
            {sidebarOpen && <span>Projects</span>}
          </a>

          <a
            className="sidebar-link"
            href="#skills"
            title="Skills"
          >
            <IconSkills size={17} />
            {sidebarOpen && <span>Skills</span>}
          </a>

          <a
            className="sidebar-link"
            href="#contact"
            title="Contact"
          >
            <IconMail size={17} />
            {sidebarOpen && <span>Contact</span>}
          </a>

        </nav>


        <button
          className="theme-toggle sidebar-theme-toggle"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {dark ? "🌻" : "🌙"}
        </button>

      </aside>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div
        className="main-content"
        style={{
          marginLeft: sidebarOpen ? 220 : 76,
        }}
      >

        {/* =========================
            HERO
        ========================= */}

        <section
          className="hero-section"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "72px 24px 56px",
            display: "flex",
            alignItems: "center",
            gap: 36,
            flexWrap: "wrap",
          }}
        >

          <div
            className="avatar"
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: t.avatarGrad,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {PHOTO_URL ? (
              <img
                src={PHOTO_URL}
                alt={name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              initials
            )}
          </div>


          <div className="hero-content">

            <span
              className="badge"
              style={{
                marginBottom: 10,
              }}
            >
              <span className="badge-dot" />
              Currently learning Full Stack .Net Development
            </span>


            <h1
              className="hero-title"
              style={{
                fontSize: 35,
                fontWeight: 700,
                margin: "12px 0 10px",
                color: t.text,
              }}
            >
              AssalamuAlaikum, I'm {name}
            </h1>


            <p
              style={{
                fontSize: 17,
                color: t.muted,
                lineHeight: 1.65,
                maxWidth: 540,
                margin: 0,
              }}
            >
              Final-year CSE student at IIUC, currently focused on
              strengthening my skills in Full Stack .NET Development
            </p>


            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 18,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >

              <div className="icon-row">

                <a
                  className="icon-btn"
                  href="https://github.com/NowshinIslamMim"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <IconGitHub />
                </a>


                <a
                  className="icon-btn"
                  href="https://www.linkedin.com/in/nowshin-islam-mim-85777b24a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <IconLinkedIn />
                </a>


                <a
                  className="icon-btn"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  title={email}
                >
                  <IconMail />
                </a>

              </div>


              <a
                className="link"
                href="#projects"
              >
                View projects
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >

          <Reveal>

            <div
              className="card"
              style={{
                padding: "28px 30px",
              }}
            >

              <h2
                className="section-title"
                style={{
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: 0.6,
                  color: t.mutedLight,
                  margin: "0 0 14px",
                  fontWeight: 700,
                }}
              >

                <IconChip
                  bg={t.chipBg}
                  fg={t.chipFg}
                >
                  <IconAbout size={15} />
                </IconChip>

                About

              </h2>


              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.75,
                  color: t.muted,
                  margin: 0,
                }}
              >
                As a final-year CSE student at International Islamic
                University Chittagong (IIUC), exploring different areas of
                technology-from building web applications and working with
                databases to applying machine learning concepts. I'm equally
                interested in growing through teamwork, collaboration, and
                real-world projects.
              </p>

            </div>

          </Reveal>

        </section>


        {/* =========================
            EDUCATION
        ========================= */}

        <section
          id="education"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >

          <h2
            className="section-title"
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              color: t.mutedLight,
              margin: "0 0 18px",
              fontWeight: 700,
            }}
          >

            <IconChip
              bg={t.chipBg}
              fg={t.chipFg}
            >
              <IconEducation size={15} />
            </IconChip>

            Education

          </h2>


          <Reveal>

            <div
              className="card"
              style={{
                padding: "26px 30px",
              }}
            >

              {EDUCATION.map((e) => (

                <div
                  key={e.school}
                  className="timeline-item"
                >

                  <div className="education-row">

                    <div className="education-copy">

                      <h3
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          margin: "0 0 3px",
                          color: t.text,
                        }}
                      >
                        {e.degree}
                      </h3>


                      <p
                        style={{
                          fontSize: 14,
                          color: t.muted,
                          margin: "0 0 3px",
                        }}
                      >
                        {e.school}
                      </p>


                      <p
                        style={{
                          fontSize: 13,
                          color: t.mutedLight,
                          margin: 0,
                        }}
                      >
                        {e.period}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </Reveal>

        </section>


        {/* =========================
            EXPERIENCE
        ========================= */}

        <section
          id="experience"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >

          <h2
            className="section-title"
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              color: t.mutedLight,
              margin: "0 0 18px",
              fontWeight: 700,
            }}
          >

            <IconChip
              bg={t.chipBg}
              fg={t.chipFg}
            >
              <IconExperience size={15} />
            </IconChip>

            Experience

          </h2>


          <Reveal>

            <div
              className="card"
              style={{
                padding: "26px 30px",
              }}
            >

              {EXPERIENCE.map((e) => (

                <div
                  key={e.role}
                  className="timeline-item"
                >

                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      margin: "0 0 3px",
                      color: t.text,
                    }}
                  >
                    {e.role} · {e.org}
                  </h3>


                  <p
                    style={{
                      fontSize: 13,
                      color: t.mutedLight,
                      margin: "0 0 10px",
                    }}
                  >
                    {e.period}
                  </p>


                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: 18,
                      color: t.muted,
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >

                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}

                  </ul>

                </div>

              ))}

            </div>

          </Reveal>

        </section>


        {/* =========================
            PROJECTS
        ========================= */}

        <section
          id="projects"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >

          <h2
            className="section-title"
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              color: t.mutedLight,
              margin: "0 0 18px",
              fontWeight: 700,
            }}
          >

            <IconChip
              bg={t.chipBg}
              fg={t.chipFg}
            >
              <IconProjects size={15} />
            </IconChip>

            Projects

          </h2>


          <Reveal>

            <div
              className="proj-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
              }}
            >

              {PROJECTS.map((p) => (

                <a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card proj-card"
                  style={{
                    padding: "22px 24px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >

                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      margin: "0 0 8px",
                      color: t.text,
                    }}
                  >
                    {p.title}
                  </h3>


                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: t.muted,
                      margin: "0 0 14px",
                    }}
                  >
                    {p.desc}
                  </p>


                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >

                    {p.stack.map((s, i) => {

                      const c =
                        t.pills[i % t.pills.length];

                      return (
                        <span
                          key={s}
                          className="pill"
                          style={{
                            background: c.bg,
                            color: c.fg,
                          }}
                        >
                          {s}
                        </span>
                      );

                    })}


                    <span
                      style={{
                        fontSize: 12.5,
                        color: t.link,
                        fontWeight: 600,
                        marginLeft: "auto",
                      }}
                    >
                      View on GitHub →
                    </span>

                  </div>

                </a>

              ))}

            </div>

          </Reveal>

        </section>


        {/* =========================
            SKILLS + CERTIFICATIONS
        ========================= */}

        <section
          id="skills"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >

          <Reveal>

            <div
              className="two-col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
              }}
            >

              <div
                className="card"
                style={{
                  padding: "28px 30px",
                }}
              >

                <h2
                  className="section-title"
                  style={{
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 0.6,
                    color: t.mutedLight,
                    margin: "0 0 16px",
                    fontWeight: 700,
                  }}
                >

                  <IconChip
                    bg={t.chipBg}
                    fg={t.chipFg}
                  >
                    <IconSkills size={15} />
                  </IconChip>

                  Skills

                </h2>


                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >

                  {SKILLS.map((s, i) => {

                    const c =
                      t.pills[i % t.pills.length];

                    return (
                      <span
                        key={s}
                        className="pill"
                        style={{
                          background: c.bg,
                          color: c.fg,
                        }}
                      >
                        {s}
                      </span>
                    );

                  })}

                </div>

              </div>


              <div
                className="card"
                style={{
                  padding: "28px 30px",
                }}
              >

                <h2
                  className="section-title"
                  style={{
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 0.6,
                    color: t.mutedLight,
                    margin: "0 0 16px",
                    fontWeight: 700,
                  }}
                >

                  <IconChip
                    bg={t.chipBg}
                    fg={t.chipFg}
                  >
                    <IconCertifications size={15} />
                  </IconChip>

                  Certifications

                </h2>


                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 18,
                    color: t.muted,
                    fontSize: 13.5,
                    lineHeight: 1.9,
                  }}
                >

                  {CERTIFICATIONS.map((c) => (
                    <li key={c}>{c}</li>
                  ))}

                </ul>

              </div>

            </div>

          </Reveal>

        </section>


        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >

          <Reveal>

            <div
              className="card"
              style={{
                padding: "36px 30px",
                textAlign: "center",
                background: dark
                  ? "linear-gradient(135deg, #123128, #0A1613)"
                  : "linear-gradient(135deg, #D9F3EA, #FAF8F2)",
              }}
            >

              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  margin: "0 0 10px",
                  color: t.text,
                }}
              >
                Let's Connect
              </h2>


              <p
                style={{
                  fontSize: 15,
                  color: t.muted,
                  margin: "0 0 8px",
                }}
              >
                Open to internships, collaborations, and meaningful
                opportunities to grow.
              </p>


              <p
                style={{
                  fontSize: 13,
                  color: t.mutedLight,
                  margin: "0 0 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >

                <span className="flag-chip">
                  🇧🇩
                </span>

                Chittagong, Bangladesh · {phone}

              </p>


              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >

                <a
                  className="icon-btn"
                  href="https://github.com/NowshinIslamMim"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <IconGitHub />
                </a>


                <a
                  className="icon-btn"
                  href="https://www.linkedin.com/in/nowshin-islam-mim-85777b24a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <IconLinkedIn />
                </a>


                <button
                  onClick={copyEmail}
                  className={`copy-icon-btn copy-btn${
                    burst ? " burst" : ""
                  }`}
                  title={email}
                  aria-label={
                    copied
                      ? "Email copied"
                      : `Copy email: ${email}`
                  }
                >

                  <IconMail size={16} />

                  {copied
                    ? "Copied!"
                    : "Copy email"}

                  <span
                    className="confetti-sp"
                    style={{ "--dx": "0px" }}
                  >
                    ✦
                  </span>

                </button>

              </div>

            </div>

          </Reveal>

        </section>


        {/* =========================
            FOOTER
        ========================= */}

        <p
          style={{
            textAlign: "center",
            fontSize: 12.5,
            color: t.mutedLight,
            padding: "0 24px 40px",
          }}
        >
          Portfolio · {new Date().getFullYear()}
        </p>

      </div>

    </div>
  );
}