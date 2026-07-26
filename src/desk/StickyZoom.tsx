import { useEffect } from "react";
import { profile, socials } from "./content";

// A zoomed-in sticky note version of "Contact me". The PC still has its own
// Contact window (with the message form).
export default function StickyZoom({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="zoom-overlay" onClick={onClose}>
      <div className="zoom-sticky" onClick={(e) => e.stopPropagation()}>
        <button className="sticky-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h2>Let's work together!</h2>
        <p>Got a project or a raket? Ping me — I reply fast.</p>
        <div className="sticky-lines">
          <div>
            ✉️{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>📞 {profile.phone}</div>
          <div>📍 {profile.location}</div>
        </div>
        <div className="sticky-socials">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.name}
            </a>
          ))}
        </div>
        <p className="sticky-foot">
          (or open "Contact" on the PC to send a message)
        </p>
      </div>
    </div>
  );
}
