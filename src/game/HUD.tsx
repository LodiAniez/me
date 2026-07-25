import { useRef, useState } from "react";
import { inputState } from "./controls";
import { SECTIONS, type SectionId } from "./sections";

// On-screen joystick + interact button for touch devices, plus keyboard hints.
export default function HUD({
  nearby,
  onEnter,
}: {
  nearby: SectionId | null;
  onEnter: () => void;
}) {
  const nearMeta = nearby ? SECTIONS.find((s) => s.id === nearby)! : null;

  const baseRef = useRef<HTMLDivElement>(null);
  const pointerId = useRef<number | null>(null);
  const [knob, setKnob] = useState({ x: 0, y: 0 });

  const RADIUS = 52;

  const updateStick = (clientX: number, clientY: number) => {
    const base = baseRef.current;
    if (!base) return;
    const rect = base.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = clientX - cx;
    let dy = clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > RADIUS) {
      dx = (dx / dist) * RADIUS;
      dy = (dy / dist) * RADIUS;
    }
    setKnob({ x: dx, y: dy });
    inputState.touchX = dx / RADIUS;
    inputState.touchY = -dy / RADIUS; // up on screen = forward
  };

  const endStick = () => {
    pointerId.current = null;
    setKnob({ x: 0, y: 0 });
    inputState.touchX = 0;
    inputState.touchY = 0;
  };

  return (
    <>
      {/* Top-left control hints (desktop) */}
      <div className="pointer-events-none absolute top-3 left-3 z-20 hidden sm:block">
        <div className="rounded-xl bg-black/45 backdrop-blur px-4 py-3 text-xs text-gray-200 leading-relaxed border border-white/10">
          <div className="font-bold text-cyan-300 mb-1">How to explore</div>
          <div><b>W A S D</b> / arrows — walk</div>
          <div>Drag mouse — look around</div>
          <div><b>E</b> — enter a pavilion</div>
        </div>
      </div>

      {/* Enter prompt */}
      {nearMeta && (
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-32 sm:bottom-24 z-20">
          <button
            onClick={onEnter}
            className="pointer-events-auto animate-bounce rounded-full px-6 py-3 font-bold text-gray-900 shadow-2xl"
            style={{ background: nearMeta.color }}
          >
            <span className="mr-2">{nearMeta.emoji}</span>
            Enter {nearMeta.title}
            <span className="ml-2 hidden sm:inline text-gray-800/80 text-sm">
              (press E)
            </span>
          </button>
        </div>
      )}

      {/* Touch joystick (mobile) */}
      <div className="sm:hidden">
        <div
          ref={baseRef}
          className="absolute bottom-8 left-8 z-20 rounded-full touch-none"
          style={{
            width: 128,
            height: 128,
            background: "rgba(255,255,255,0.08)",
            border: "2px solid rgba(255,255,255,0.2)",
          }}
          onPointerDown={(e) => {
            if (pointerId.current !== null) return;
            pointerId.current = e.pointerId;
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            updateStick(e.clientX, e.clientY);
          }}
          onPointerMove={(e) => {
            if (pointerId.current !== e.pointerId) return;
            updateStick(e.clientX, e.clientY);
          }}
          onPointerUp={endStick}
          onPointerCancel={endStick}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 56,
              height: 56,
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${knob.x}px), calc(-50% + ${knob.y}px))`,
              background: "rgba(34,211,238,0.85)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      </div>
    </>
  );
}
