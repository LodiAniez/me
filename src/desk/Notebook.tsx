import { useEffect } from "react";
import { services } from "./content";

const DOODLES = ["🎨", "⚙️", "🗄️", "📱", "🖥️", "🧑‍🏫"];

// A zoomed-in hand-drawn notebook version of "What I Do" — a second, cozier
// take on the same content that lives (in a different style) inside the PC.
export default function Notebook({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
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

        <div className="nb-page">
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

          <div className="nb-footer">— thanks for flipping through! ✿ —</div>
        </div>
      </div>
    </div>
  );
}
