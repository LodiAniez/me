import { REGISTRY } from "./windows/registry";
import type { MenuItem, StartMenuProps } from "../types";

const START_ITEMS: MenuItem[] = [
  { id: "about", label: "About Me" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "apps", label: "My Apps" },
  { id: "services", label: "What I Do" },
  { id: "achievements", label: "Achievements" },
  { id: "guestbook", label: "Guestbook" },
  { id: "mycomputer", label: "My Computer" },
];

export default function StartMenu({ onSelect, onShutDown }: StartMenuProps) {
  return (
    <div className="start-menu" onPointerDown={(e) => e.stopPropagation()}>
      <div className="start-side">
        DexterOS<span style={{ fontWeight: 400 }}>95</span>
      </div>
      <div className="start-items">
        {START_ITEMS.map((it) => (
          <div key={it.id} className="start-item" onClick={() => onSelect(it.id)}>
            <span className="g">{REGISTRY[it.id].icon}</span>
            {it.label}
          </div>
        ))}
        <div className="start-sep" />
        <div className="start-item" onClick={() => onSelect("contact")}>
          <span className="g">✉️</span>
          Contact / Hire Me
        </div>
        <div className="start-sep" />
        <div className="start-item" onClick={onShutDown}>
          <span className="g">🔌</span>
          Shut Down…
        </div>
      </div>
    </div>
  );
}
