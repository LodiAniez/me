import { useOS } from "../hooks/useOSStore";
import { useStartMenu } from "../hooks/useStartMenu";
import { REGISTRY } from "./windows/registry";
import StartMenu from "./StartMenu";
import Clock from "./Clock";
import type { DesktopProps } from "../types";

export default function Taskbar({ onShutDown }: DesktopProps) {
  const { windows, topZ, open, toggle } = useOS();
  const { open: menuOpen, setOpen: setMenuOpen } = useStartMenu();

  return (
    <>
      {menuOpen && (
        <StartMenu
          onSelect={(id) => {
            open(id);
            setMenuOpen(false);
          }}
          onShutDown={() => {
            setMenuOpen(false);
            onShutDown();
          }}
        />
      )}

      <div className="taskbar">
        <button
          className={`start-btn${menuOpen ? " open" : ""}`}
          onPointerDown={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="start-logo">
            <i />
            <i />
            <i />
            <i />
          </span>
          Start
        </button>
        <div className="task-divider" />
        <div className="task-btns">
          {windows.map((w) => {
            const meta = REGISTRY[w.id];
            if (!meta) return null;
            const active = !w.minimized && w.z === topZ;
            return (
              <button
                key={w.id}
                className={`task-btn${active ? " active" : ""}`}
                onClick={() => toggle(w.id)}
              >
                <span>{meta.icon}</span>
                <span className="lbl">{meta.title.split(" - ")[0]}</span>
              </button>
            );
          })}
        </div>
        <div className="tray">
          <span>🔊</span>
          <Clock />
        </div>
      </div>
    </>
  );
}
