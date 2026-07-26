import { useState } from "react";
import { useOS } from "../hooks/useOSStore";
import { REGISTRY } from "./windows/registry";
import type { MenuItem } from "../types";

const DESKTOP_ICONS: MenuItem[] = [
  { id: "mycomputer", label: "My Computer" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "services", label: "What I Do" },
  { id: "guestbook", label: "Guestbook" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
  { id: "readme", label: "readme.txt" },
];

export default function DesktopIcons() {
  const { open } = useOS();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="desktop-icons">
      {DESKTOP_ICONS.map((ic) => (
        <div
          key={ic.id}
          className={`dicon${selected === ic.id ? " selected" : ""}`}
          onClick={() => setSelected(ic.id)}
          onDoubleClick={() => open(ic.id)}
        >
          <span className="dicon-glyph">{REGISTRY[ic.id].icon}</span>
          <span className="dicon-label">{ic.label}</span>
        </div>
      ))}
    </div>
  );
}
