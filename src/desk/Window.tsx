import { useRef, type ReactNode } from "react";
import { useOS } from "./os-store";

interface WindowProps {
  id: string;
  title: string;
  icon: string;
  z: number;
  x: number;
  y: number;
  active: boolean;
  width: number;
  height: number;
  menubar?: boolean;
  statusbar?: ReactNode;
  children: ReactNode;
}

export default function Window({
  id,
  title,
  icon,
  z,
  x,
  y,
  active,
  width,
  height,
  menubar = true,
  statusbar,
  children,
}: WindowProps) {
  const { focus, close, minimize, move } = useOS();
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const winRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".tctl")) return;
    focus(id);
    drag.current = { dx: e.clientX - x, dy: e.clientY - y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onDragMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const parent = winRef.current?.parentElement;
    const win = winRef.current;
    let nx = e.clientX - drag.current.dx;
    let ny = e.clientY - drag.current.dy;
    if (parent && win) {
      const maxX = parent.clientWidth - 40;
      const maxY = parent.clientHeight - 26;
      nx = Math.max(-win.offsetWidth + 60, Math.min(nx, maxX));
      ny = Math.max(0, Math.min(ny, maxY));
    }
    move(id, nx, ny);
  };
  const onDragEnd = () => {
    drag.current = null;
  };

  return (
    <div
      ref={winRef}
      className="window"
      style={{
        left: x,
        top: y,
        zIndex: z,
        width: `min(${width}px, 96%)`,
        height: `min(${height}px, 88%)`,
      }}
      onPointerDown={() => focus(id)}
    >
      <div
        className={`title-bar${active ? "" : " inactive"}`}
        onPointerDown={onDragStart}
        onPointerMove={onDragMove}
        onPointerUp={onDragEnd}
        onDoubleClick={() => minimize(id)}
      >
        <span className="title-bar-icon">{icon}</span>
        <span className="title-bar-text">{title}</span>
        <div className="title-controls">
          <button
            className="tctl"
            title="Minimize"
            onClick={() => minimize(id)}
          >
            _
          </button>
          <button className="tctl" title="Close" onClick={() => close(id)}>
            ×
          </button>
        </div>
      </div>

      {menubar && (
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
      )}

      {children}

      {statusbar && <div className="statusbar">{statusbar}</div>}
    </div>
  );
}
