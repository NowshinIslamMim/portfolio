import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "The World of Games",
    desc: "A web-based gaming platform featuring a collection of games with an interactive, user-friendly interface.",
    stack: ["Web"],
    url: "https://github.com/saima-iqrah/The-World-of-Games",
  },
  {
    title: "Detecting Synthetic Tampering in Medical Images",
    desc: "Notebook-based project exploring detection of synthetic tampering in medical images.",
    stack: ["Jupyter Notebook"],
    url: "https://github.com/saima-iqrah/Detecting-Synthetic-Tampering-in-Medical-Images",
  },
  {
    title: "Classroom Device Booking Platform",
    desc: "A platform for booking classroom devices, built to streamline scheduling and resource management.",
    stack: ["PHP"],
    url: "https://github.com/saima-iqrah/Classroom_Device_Booking_Platform",
  },
  {
    title: "IIUC Campus Network System",
    desc: "A system project modeling the campus network setup for IIUC.",
    stack: ["Networking"],
    url: "https://github.com/saima-iqrah/IIUC-Campus-Network-System",
  },
  {
    title: "Real Estate Platform",
    desc: "A platform for browsing and managing real estate listings.",
    stack: ["Web"],
    url: "https://github.com/saima-iqrah/Real_Estate_Platform",
  },
];

const SKILLS = [
  "C", "C++", "Python", "Machine Learning", "HTML", "CSS",  "UI/UX", "Word", "PowerPoint","Excel"
];

const PASTELS_LIGHT = [
  { bg: "#F1ECFE", fg: "#5B4BB8" },
  { bg: "#FDECF3", fg: "#C24E85" },
  { bg: "#E9F6EF", fg: "#2F9E5D" },
  { bg: "#EAF2FE", fg: "#3A7BD5" },
  { bg: "#FFF3E0", fg: "#C87F1E" },
];

const PASTELS_DARK = [
  { bg: "#2E2650", fg: "#C6B6FA" },
  { bg: "#4A2438", fg: "#F5A8CC" },
  { bg: "#1F3A2C", fg: "#8FDBAE" },
  { bg: "#1E3350", fg: "#8FC0FA" },
  { bg: "#4A3418", fg: "#F5C878" },
];

const EDUCATION = [
  { school: "International Islamic University Chittagong (IIUC)", degree: "BSc in Computer Science & Engineering", period: "Autumn 2022 - Present (4th Year)" },
  { school: "Chattogram Cantonment Public College", degree: "Higher Secondary Certificate — GPA 5.00/5.00", period: "2018 - 2019" },
  { school: "Bangladesh Elementary School", degree: "Secondary School Certificate — GPA 5.00/5.00", period: "2016 - 2017" },
];

const EXPERIENCE = [
  
];

const CERTIFICATIONS = [
  "Machine Learning with Python - EDGE, Government of Bangladesh",
 // "Self-Defense Training (6 months) — Chittagong Rifle Club",
];


const PHOTO_URL = null;

function IconGitHub({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function IconLinkedIn({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

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

const SPARKLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.round((i * 113.7) % 100),
  delay: (i * 1.1) % 12,
  duration: 9 + (i % 5) * 2,
  emoji: ["✦", "✧", "★", "•"][i % 4],
}));

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [burst, setBurst] = useState(false);
  const [dark, setDark] = useState(true);
  const email = "nowshinislam2905@gmail.com";
  const phone = "+880 1890920683";
  const name = "Nowshin Islam Mim";

  const initials = name.split(" ").map((w) => w[0]).join("");

  const copyEmail = () => {
    navigator.clipboard?.writeText(email).catch(() => {});
    setCopied(true);
    setBurst(true);
    setTimeout(() => setCopied(false), 1800);
    setTimeout(() => setBurst(false), 900);
  };

  const t = dark
    ? {
        bg: "#15131F",
        text: "#EDE9FA",
        muted: "#B6ADD1",
        mutedLight: "#8B84A8",
        cardBg: "#1E1B2E",
        cardBorder: "#332C4E",
        navLink: "#B6ADD1",
        link: "#B7A6F5",
        accent: "#B7A6F5",
        accentSolid: "#7C6FE0",
        badgeBg: "#1B3327",
        badgeFg: "#7FDDA0",
        badgeDot: "#4CD37B",
        dotColor: "#332C4E",
        blob1: "#4A3E82",
        blob2: "#2E4560",
        blob3: "#5A3450",
        sparkle: "#8F7BD9",
        avatarGrad: "linear-gradient(135deg, #6E5FCB, #43366E)",
        scrollCue: "#7A70A8",
        pills: PASTELS_DARK,
      }
    : {
        bg: "#FAF8FF",
        text: "#241C3D",
        muted: "#5A5270",
        mutedLight: "#9891AB",
        cardBg: "#FFFFFF",
        cardBorder: "#E9E4FA",
        navLink: "#6B6280",
        link: "#5B4BB8",
        accent: "#7C6FE0",
        accentSolid: "#5B4BB8",
        badgeBg: "#EAF7EA",
        badgeFg: "#3C8A4C",
        badgeDot: "#4CAF63",
        dotColor: "#D8CFF7",
        blob1: "#C9BBF7",
        blob2: "#A6C8F5",
        blob3: "#F5C9E8",
        sparkle: "#9B7FE8",
        avatarGrad: "linear-gradient(135deg, #B7A6F5, #7C6FE0)",
        scrollCue: "#A99CD6",
        pills: PASTELS_LIGHT,
      };

  return (
    <div style={{
      background: t.bg,
      color: t.text,
      fontFamily: "-apple-system, 'Segoe UI', Inter, Arial, sans-serif",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      transition: "background 0.3s ease, color 0.3s ease",
    }}>
      <style>{`
        html, body, #root { margin: 0; padding: 0; background: ${t.bg}; min-height: 100%; }
        .card { background: ${t.cardBg}; border: 1px solid ${t.cardBorder}; border-radius: 16px; position: relative; z-index: 1; transition: box-shadow 0.2s ease, background 0.3s ease, border-color 0.3s ease; }
        .card:hover { box-shadow: 0 8px 20px rgba(124,111,224,0.14); }
        .pill { border-radius: 999px; font-size: 13px; padding: 6px 14px; display: inline-block; transition: transform 0.18s ease, filter 0.18s ease; cursor: default; }
        .pill:hover { transform: translateY(-3px) rotate(-2deg); filter: brightness(1.08); }
        .link { color: ${t.link}; text-decoration: none; font-weight: 600; }
        .link:hover { text-decoration: underline; }
        .icon-row { display: flex; gap: 10px; align-items: center; }
        .icon-btn {
          width: 38px; height: 38px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          background: ${t.cardBg}; border: 1px solid ${t.cardBorder}; color: ${t.link};
          text-decoration: none; cursor: pointer; padding: 0;
          transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease;
        }
        .icon-btn:hover { transform: translateY(-3px); background: ${t.accentSolid}; color: #fff; }
        .copy-icon-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 600; padding: 10px 18px;
          background: ${t.accentSolid}; color: #fff; border: none;
          border-radius: 999px; cursor: pointer; position: relative; overflow: visible;
        }
        .proj-card { transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .proj-card:hover { transform: translateY(-4px) rotate(-0.3deg); box-shadow: 0 12px 26px rgba(91,75,184,0.18); }
        .nav-link { color: ${t.navLink}; text-decoration: none; font-size: 14px; }
        .nav-link:hover { color: ${t.link}; }
        .theme-toggle {
          border: 1px solid ${t.cardBorder}; background: ${t.cardBg}; border-radius: 999px;
          width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 15px; transition: transform 0.2s ease;
        }
        .theme-toggle:hover { transform: scale(1.08); }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: ${dark ? 0.4 : 0.35};
          pointer-events: none;
          z-index: 0;
          animation: drift 18s ease-in-out infinite;
        }
        .blob-1 { width: 380px; height: 380px; background: ${t.blob1}; top: -120px; left: -100px; animation-delay: 0s; }
        .blob-2 { width: 300px; height: 300px; background: ${t.blob2}; top: 40px; right: -80px; animation-delay: -6s; }
        .blob-3 { width: 320px; height: 320px; background: ${t.blob3}; top: 420px; left: 40%; animation-delay: -12s; }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(24px, 30px) scale(1.06); }
        }
        .dotgrid {
          position: absolute; inset: 0; z-index: 0; opacity: 0.5;
          background-image: radial-gradient(${t.dotColor} 1.4px, transparent 1.4px);
          background-size: 26px 26px;
          -webkit-mask-image: linear-gradient(to bottom, black, transparent 700px);
          mask-image: linear-gradient(to bottom, black, transparent 700px);
        }
        header, section { position: relative; z-index: 1; }
        .timeline-item { border-left: 2px solid ${t.cardBorder}; padding-left: 18px; padding-bottom: 22px; position: relative; }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-item::before { content: ""; position: absolute; left: -6px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: ${t.accentSolid}; }
        .avatar { animation: bob 5s ease-in-out infinite; overflow: hidden; }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .badge { background: ${t.badgeBg}; color: ${t.badgeFg}; border-radius: 999px; font-size: 12.5px; padding: 5px 12px; display: inline-flex; align-items: center; gap: 6px; }
        .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: ${t.badgeDot}; animation: pulse 1.6s ease-in-out infinite; }
        .scroll-cue {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          color: ${t.scrollCue}; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;
          margin: -20px 0 30px; position: relative; z-index: 1;
        }
        .scroll-arrow { animation: bounce 1.8s ease-in-out infinite; font-size: 15px; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        .sparkle {
          position: absolute;
          bottom: -20px;
          color: ${t.sparkle};
          z-index: 0;
          pointer-events: none;
          animation: rise linear infinite;
          text-shadow: 0 0 8px ${dark ? "rgba(155,127,232,0.6)" : "rgba(124,111,224,0.35)"};
        }
        @keyframes rise {
          0% { transform: translateY(0) translateX(0) rotate(0deg) scale(0.7); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 0.9; }
          100% { transform: translateY(-1400px) translateX(40px) rotate(120deg) scale(1); opacity: 0; }
        }
        .copy-btn { position: relative; overflow: visible; }
        .confetti-sp { position: absolute; font-size: 16px; opacity: 0; pointer-events: none; left: 50%; top: 0; }
        .copy-btn.burst .confetti-sp { animation: pop 0.8s ease-out forwards; }
        .confetti-sp:nth-child(1) { animation-delay: 0s; }
        .confetti-sp:nth-child(2) { animation-delay: 0.05s; }
        .confetti-sp:nth-child(3) { animation-delay: 0.1s; }
        @keyframes pop {
          0% { opacity: 1; transform: translate(-50%, 0) scale(0.6); }
          100% { opacity: 0; transform: translate(calc(-50% + var(--dx, 0px)), -46px) scale(1.1) rotate(30deg); }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 32px !important; }
          .proj-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .blob, .avatar, .badge-dot, .sparkle, .scroll-arrow { animation: none; }
        }
      `}</style>

      <div className="dotgrid" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      {SPARKLES.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            fontSize: s.emoji === "•" ? 9 : 20,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.emoji}
        </span>
      ))}

      {/* Nav */}
      <div style={{
        position: "fixed", top: 16, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "center", pointerEvents: "none",
      }}>
        <header style={{
          pointerEvents: "auto",
          display: "flex", justifyContent: "center", alignItems: "center",
          padding: "10px 22px", gap: 20, flexWrap: "wrap",
          borderRadius: 999,
          background: dark ? "rgba(30,27,46,0.7)" : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
          border: `1px solid ${dark ? "rgba(179,166,245,0.18)" : "rgba(124,111,224,0.14)"}`,
          boxShadow: dark ? "0 8px 24px rgba(0,0,0,0.35)" : "0 8px 24px rgba(124,111,224,0.14)",
        }}>
          <nav style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#education">Education</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#contact">Contact</a>
            <button
              className="theme-toggle"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </nav>
        </header>
      </div>
      <div style={{ height: 54 }} />

      {/* Hero */}
      <section style={{
        maxWidth: 900, margin: "0 auto", padding: "72px 24px 56px",
        display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap",
      }}>
        <div className="avatar" style={{
          width: 88, height: 88, borderRadius: "50%",
          background: t.avatarGrad,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 30, fontWeight: 700, flexShrink: 0,
        }}>
          {PHOTO_URL ? (
            <img src={PHOTO_URL} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            initials
          )}
        </div>
        <div>
          <span className="badge" style={{ marginBottom: 10 }}>
            <span className="badge-dot" /> Currently learning Full Stack .Net Development
          </span>
          <h1 className="hero-title" style={{ fontSize: 40, fontWeight: 700, margin: "12px 0 10px", color: t.text }}>
            Hi, I'm {name}
          </h1>
          <p style={{ fontSize: 17, color: t.muted, lineHeight: 1.65, maxWidth: 540, margin: 0 }}>
            Final-year CSE student at IIUC, currently focused on strengthening my skills in Full Stack .NET Development
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 18, flexWrap: "wrap", alignItems: "center" }}>
            <div className="icon-row">
              <a className="icon-btn" href="https://github.com/saima-iqrah" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <IconGitHub />
              </a>
              <a className="icon-btn" href="https://www.linkedin.com/in/saima-kawsar-54a130294/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <IconLinkedIn />
              </a>
              <a className="icon-btn" href={`mailto:${email}`} aria-label="Email" title={email}>
                <IconMail />
              </a>
            </div>
            <a className="link" href="#projects">View projects →</a>
          </div>
        </div>
      </section>

      <div className="scroll-cue">
        <span>scroll</span>
        <span className="scroll-arrow">↓</span>
      </div>

      {/* About */}
      <section id="about" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
        <Reveal>
          <div className="card" style={{ padding: "28px 30px" }}>
            <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 0.6, color: t.mutedLight, margin: "0 0 14px", fontWeight: 700 }}>
               About
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: t.muted, margin: 0 }}>
             As a final-year CSE student at International Islamic University Chittagong(IIUC), exploring different areas of technology-from building web applications and working with databases to applying machine learning concepts. I'm equally interested in growing through teamwork, collaboration, and real-world projects.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Education */}
      <section id="education" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
        <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 0.6, color: t.mutedLight, margin: "0 0 18px", fontWeight: 700 }}>
           Education
        </h2>
        <Reveal>
          <div className="card" style={{ padding: "26px 30px" }}>
            {EDUCATION.map((e) => (
              <div key={e.school} className="timeline-item">
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 3px", color: t.text }}>{e.degree}</h3>
                <p style={{ fontSize: 14, color: t.muted, margin: "0 0 3px" }}>{e.school}</p>
                <p style={{ fontSize: 13, color: t.mutedLight, margin: 0 }}>{e.period}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Experience */}
      <section id="experience" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
        <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 0.6, color: t.mutedLight, margin: "0 0 18px", fontWeight: 700 }}>
           Experience
        </h2>
        <Reveal>
          <div className="card" style={{ padding: "26px 30px" }}>
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="timeline-item">
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 3px", color: t.text }}>{e.role} · {e.org}</h3>
                <p style={{ fontSize: 13, color: t.mutedLight, margin: "0 0 10px" }}>{e.period}</p>
                <ul style={{ margin: 0, paddingLeft: 18, color: t.muted, fontSize: 14, lineHeight: 1.7 }}>
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="projects" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
        <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 0.6, color: t.mutedLight, margin: "0 0 18px", fontWeight: 700 }}>
           Projects
        </h2>
        <Reveal>
          <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {PROJECTS.map((p) => (
              <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="card proj-card" style={{ padding: "22px 24px", display: "block", textDecoration: "none" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px", color: t.text }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: t.muted, margin: "0 0 14px" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                  {p.stack.map((s, i) => {
                    const c = t.pills[i % t.pills.length];
                    return <span key={s} className="pill" style={{ background: c.bg, color: c.fg }}>{s}</span>;
                  })}
                  <span style={{ fontSize: 12.5, color: t.link, fontWeight: 600, marginLeft: "auto" }}>View on GitHub →</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Skills + Certifications */}
      <section id="skills" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
        <Reveal>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <div className="card" style={{ padding: "28px 30px" }}>
              <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 0.6, color: t.mutedLight, margin: "0 0 16px", fontWeight: 700 }}>
                 Skills
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {SKILLS.map((s, i) => {
                  const c = t.pills[i % t.pills.length];
                  return <span key={s} className="pill" style={{ background: c.bg, color: c.fg }}>{s}</span>;
                })}
              </div>
            </div>
            <div className="card" style={{ padding: "28px 30px" }}>
              <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 0.6, color: t.mutedLight, margin: "0 0 16px", fontWeight: 700 }}>
                 Certifications
              </h2>
              <ul style={{ margin: 0, paddingLeft: 18, color: t.muted, fontSize: 13.5, lineHeight: 1.9 }}>
                {CERTIFICATIONS.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 60px" }}>
        <Reveal>
          <div className="card" style={{
            padding: "36px 30px", textAlign: "center",
            background: dark ? "linear-gradient(135deg, #241F3D, #1B1830)" : "linear-gradient(135deg, #F1ECFE, #FAF8FF)",
          }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 10px", color: t.text }}>
              Let's get in touch <span style={{ display: "inline-block" }}>✨</span>
            </h2>
            <p style={{ fontSize: 15, color: t.muted, margin: "0 0 8px" }}>
              Open to internships, collaborations, and interesting problems.
            </p>
            <p style={{ fontSize: 13, color: t.mutedLight, margin: "0 0 20px" }}>
              Chittagong, Bangladesh · {phone}
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              <a className="icon-btn" href="https://github.com/NowshinIslamMim" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <IconGitHub />
              </a>
              <a className="icon-btn" href="https://www.linkedin.com/in/nowshin-islam-mim-85777b24a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <IconLinkedIn />
              </a>
              <button
                onClick={copyEmail}
                className={`copy-icon-btn copy-btn${burst ? " burst" : ""}`}
                title={email}
                aria-label={copied ? "Email copied" : `Copy email: ${email}`}
              >
                <IconMail size={16} />
                {copied ? "Copied!" : "Copy email"}
                <span className="confetti-sp" style={{ "--dx": "-24px" }}>✨</span>
                <span className="confetti-sp" style={{ "--dx": "0px" }}>💜</span>
                <span className="confetti-sp" style={{ "--dx": "24px" }}>✨</span>
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      <p style={{ textAlign: "center", fontSize: 12.5, color: t.mutedLight, padding: "0 24px 40px" }}>
        Portfolio · {new Date().getFullYear()}
      </p>
    </div>
  );
}

