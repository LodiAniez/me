import { useEffect, useState } from "react";
import { services, profile, aboutParagraphs, stats } from "./content";

const DOODLES = ["🎨", "⚙️", "🗄️", "📱", "🖥️", "🧑‍🏫"];
const PAGES = 2;

function WhatIDoPage() {
  return (
    <>
      <h1 className="nb-title">What I Do</h1>
      <p className="nb-sub">~ my little field guide to building software ~</p>
      {services.map((s, i) => (
        <div className="nb-entry" key={s.title}>
          <h3>
            <span className="nb-bullet">{DOODLES[i] ?? "✦"}</span> {s.title}
          </h3>
          <p>{s.description}</p>
        </div>
      ))}
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1 className="nb-title">About Me</h1>
      <p className="nb-sub">~ a page from my diary ~</p>
      <p className="nb-greet">Dear diary,</p>
      {aboutParagraphs.map((p, i) => (
        <p className="nb-diary" key={i}>
          {p}
        </p>
      ))}
      <div className="nb-notes">
        <div>🧭 {profile.roles.join(" · ")}</div>
        <div>📍 From {profile.location}</div>
        <div>🎂 Born {profile.dob}</div>
        <div>✉️ {profile.email}</div>
      </div>
      <div className="nb-stats">
        {stats.map((s) => (
          <span key={s.label}>
            <b>{s.number}</b> {s.label}
          </span>
        ))}
      </div>
      <p className="nb-sign">— Dexter ✦</p>
    </>
  );
}

// A flip-through diary. Page 1 = "What I Do", page 2 = "About Me".
export default function Notebook({
  initialPage = 0,
  onClose,
}: {
  initialPage?: number;
  onClose: () => void;
}) {
  const [page, setPage] = useState(initialPage);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const go = (d: number) => {
    setPage((p) => {
      const next = Math.max(0, Math.min(PAGES - 1, p + d));
      if (next !== p) setDir(d > 0 ? "next" : "prev");
      return next;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="notebook-overlay" onClick={onClose}>
      <div className="notebook" onClick={(e) => e.stopPropagation()}>
        <div className="nb-rings" aria-hidden>
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <button className="nb-close" onClick={onClose} aria-label="Close notebook">
          ✕
        </button>

        <div className={`nb-page flip-${dir}`} key={page}>
          {page === 0 ? <WhatIDoPage /> : <AboutPage />}
        </div>

        <div className="nb-nav">
          <button className="nb-turn" onClick={() => go(-1)} disabled={page === 0}>
            ‹ prev
          </button>
          <div className="nb-dots" aria-hidden>
            {Array.from({ length: PAGES }).map((_, i) => (
              <span key={i} className={`nb-dot${i === page ? " on" : ""}`} />
            ))}
          </div>
          <button
            className="nb-turn"
            onClick={() => go(1)}
            disabled={page === PAGES - 1}
          >
            next ›
          </button>
        </div>
      </div>
    </div>
  );
}
