import { useEffect } from "react";
import type { ZoomOverlayProps } from "./types";

// A dim, full-screen backdrop that closes on Escape or an outside click.
// The child provides the zoomed content (and stops its own click propagation).
export default function ZoomOverlay({ onClose, children }: ZoomOverlayProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="zoom-overlay" onClick={onClose}>
      {children}
    </div>
  );
}
