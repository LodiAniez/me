import ZoomOverlay from "../../components/ZoomOverlay";
import { profile, socials } from "../content";
import type { CloseProps } from "../types";

// A zoomed-in sticky note version of "Contact me".
export default function StickyZoom({ onClose }: CloseProps) {
  return (
    <ZoomOverlay onClose={onClose}>
      <div className="zoom-sticky" onClick={(e) => e.stopPropagation()}>
        <button className="sticky-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h2>Let's work together!</h2>
        <p>Got a project or a raket? Ping me — I reply fast.</p>
        <div className="sticky-lines">
          <div>
            ✉️ <a href={`mailto:${profile.email}`}>{profile.email}</a>
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
    </ZoomOverlay>
  );
}
