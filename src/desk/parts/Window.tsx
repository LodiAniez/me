import { useOS } from "../hooks/useOSStore";
import { useDraggableWindow } from "../hooks/useDraggableWindow";
import type { WindowProps } from "../types";

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
  const { focus, close, minimize } = useOS();
  const { winRef, onDragStart, onDragMove, onDragEnd } = useDraggableWindow(id, x, y);

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
          <button className="tctl" title="Minimize" onClick={() => minimize(id)}>
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
