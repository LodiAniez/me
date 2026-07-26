import { useOS } from "../hooks/useOSStore";
import { useDraggableWindow } from "../hooks/useDraggableWindow";
import type { CSSProperties } from "react";
import type { WindowProps } from "../types";

export default function Window({
  id,
  title,
  icon,
  z,
  x,
  y,
  active,
  maximized,
  width,
  height,
  menubar = true,
  statusbar,
  children,
}: WindowProps) {
  const { focus, close, minimize, maximize } = useOS();
  const { winRef, onDragStart, onDragMove, onDragEnd, dragging } =
    useDraggableWindow(id, x, y, maximized);

  const style: CSSProperties = maximized
    ? { left: 0, top: 0, zIndex: z, width: "100%", height: "calc(100% - 30px)" }
    : {
        left: x,
        top: y,
        zIndex: z,
        width: `min(${width}px, 96%)`,
        height: `min(${height}px, 88%)`,
      };
  // Animate maximize/restore, but not while dragging (keeps the drag 1:1).
  style.transition = dragging ? "none" : undefined;

  return (
    <div
      ref={winRef}
      className="window"
      style={style}
      onPointerDown={() => focus(id)}
    >
      <div
        className={`title-bar${active ? "" : " inactive"}`}
        onPointerDown={onDragStart}
        onPointerMove={onDragMove}
        onPointerUp={onDragEnd}
        onDoubleClick={() => maximize(id)}
      >
        <span className="title-bar-icon">{icon}</span>
        <span className="title-bar-text">{title}</span>
        <div className="title-controls">
          <button className="tctl" title="Minimize" onClick={() => minimize(id)}>
            _
          </button>
          <button
            className="tctl"
            title={maximized ? "Restore" : "Maximize"}
            onClick={() => maximize(id)}
          >
            {maximized ? "❐" : "□"}
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
