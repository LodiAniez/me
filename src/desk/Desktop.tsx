import { useState } from "react";
import { useOS } from "./os-store";
import { REGISTRY } from "./windows";
import Window from "./Window";
import Taskbar from "./Taskbar";

const DESKTOP_ICONS: Array<{ id: string; label: string }> = [
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

export default function Desktop({ onShutDown }: { onShutDown: () => void }) {
  const { windows, topZ, open } = useOS();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      className="desktop"
      onPointerDown={(e) => {
        if ((e.target as HTMLElement).classList.contains("desktop"))
          setSelected(null);
      }}
    >
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

      {windows.map((w) => {
        const meta = REGISTRY[w.id];
        if (!meta || w.minimized) return null;
        const Body = meta.Component;
        return (
          <Window
            key={w.id}
            id={w.id}
            title={meta.title}
            icon={meta.icon}
            z={w.z}
            x={w.x}
            y={w.y}
            active={w.z === topZ}
            width={meta.width}
            height={meta.height}
            menubar={meta.menubar}
          >
            <Body />
          </Window>
        );
      })}

      <Taskbar onShutDown={onShutDown} />
    </div>
  );
}
