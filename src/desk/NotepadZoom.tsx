import { useEffect } from "react";
import { profile } from "./content";

// The readme.txt "Notepad" — zoomed in over the desk instead of opening as a
// small window inside the PC.
export default function NotepadZoom({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="zoom-overlay" onClick={onClose}>
      <div className="window zoom-notepad" onClick={(e) => e.stopPropagation()}>
        <div className="title-bar">
          <span className="title-bar-icon">📝</span>
          <span className="title-bar-text">readme.txt - Notepad</span>
          <div className="title-controls">
            <button className="tctl" onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>
        </div>
        <div className="window-menubar">
          <span>
            <u>F</u>ile
          </span>
          <span>
            <u>E</u>dit
          </span>
          <span>
            <u>H</u>elp
          </span>
        </div>
        <div className="window-body paper zoom-body">
          <h2>💾 Welcome to DexterOS 95</h2>
          <p>
            Hi, I'm <b>{profile.name}</b> — a {profile.roles.join(", ")} based in{" "}
            {profile.location}.
          </p>
          <p>This is my portfolio, running as a cozy 90s desktop. To explore:</p>
          <ul style={{ margin: "0 0 10px 20px" }}>
            <li>Double-click the desktop icons</li>
            <li>Click the props on the desk — floppies, sticky note, sketchbook</li>
            <li>
              Use the <b>Start</b> menu at the bottom-left
            </li>
            <li>Drag windows by their title bars</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Grab a coffee ☕ and have a look around. Thanks for visiting!
          </p>
        </div>
      </div>
    </div>
  );
}
