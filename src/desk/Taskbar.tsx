import { useEffect, useState } from "react";
import { useOS } from "./os-store";
import { REGISTRY } from "./windows";

const START_ITEMS: Array<{ id: string; label: string }> = [
  { id: "about", label: "About Me" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "What I Do" },
  { id: "guestbook", label: "Guestbook" },
  { id: "mycomputer", label: "My Computer" },
];

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      let h = d.getHours();
      const m = d.getMinutes().toString().padStart(2, "0");
      const ap = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m} ${ap}`);
    };
    tick();
    const iv = setInterval(tick, 10000);
    return () => clearInterval(iv);
  }, []);
  return <span>{time}</span>;
}

export default function Taskbar({ onShutDown }: { onShutDown: () => void }) {
  const { windows, topZ, open, toggle } = useOS();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!menu) return;
    const close = () => setMenu(false);
    window.addEventListener("pointerdown", close);
    return () => window.removeEventListener("pointerdown", close);
  }, [menu]);

  return (
    <>
      {menu && (
        <div className="start-menu" onPointerDown={(e) => e.stopPropagation()}>
          <div className="start-side">
            DexterOS<span style={{ fontWeight: 400 }}>95</span>
          </div>
          <div className="start-items">
            {START_ITEMS.map((it) => (
              <div
                key={it.id}
                className="start-item"
                onClick={() => {
                  open(it.id);
                  setMenu(false);
                }}
              >
                <span className="g">{REGISTRY[it.id].icon}</span>
                {it.label}
              </div>
            ))}
            <div className="start-sep" />
            <div
              className="start-item"
              onClick={() => {
                open("contact");
                setMenu(false);
              }}
            >
              <span className="g">✉️</span>
              Contact / Hire Me
            </div>
            <div className="start-sep" />
            <div
              className="start-item"
              onClick={() => {
                setMenu(false);
                onShutDown();
              }}
            >
              <span className="g">🔌</span>
              Shut Down…
            </div>
          </div>
        </div>
      )}

      <div className="taskbar">
        <button
          className={`start-btn${menu ? " open" : ""}`}
          onPointerDown={(e) => {
            e.stopPropagation();
            setMenu((m) => !m);
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
