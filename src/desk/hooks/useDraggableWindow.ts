import { useRef } from "react";
import { useOS } from "./useOSStore";

// Pointer-drag behaviour for a window's title bar, clamped to the desktop.
// Dragging is disabled while the window is maximized.
export function useDraggableWindow(id: string, x: number, y: number, disabled = false) {
  const { focus, move } = useOS();
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const winRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.PointerEvent) => {
    if (disabled || (e.target as HTMLElement).closest(".tctl")) return;
    focus(id);
    drag.current = { dx: e.clientX - x, dy: e.clientY - y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onDragMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const win = winRef.current;
    const parent = win?.parentElement;
    let nx = e.clientX - drag.current.dx;
    let ny = e.clientY - drag.current.dy;
    if (parent && win) {
      nx = Math.max(-win.offsetWidth + 60, Math.min(nx, parent.clientWidth - 40));
      ny = Math.max(0, Math.min(ny, parent.clientHeight - 26));
    }
    move(id, nx, ny);
  };

  const onDragEnd = () => {
    drag.current = null;
  };

  return { winRef, onDragStart, onDragMove, onDragEnd };
}
