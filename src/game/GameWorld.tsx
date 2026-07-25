import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import HUD from "./HUD";
import SectionModal from "./SectionModal";
import { inputState, resetInput } from "./controls";
import type { SectionId } from "./sections";

const KEY_MAP: Record<string, "forward" | "back" | "left" | "right"> = {
  KeyW: "forward",
  ArrowUp: "forward",
  KeyS: "back",
  ArrowDown: "back",
  KeyA: "left",
  ArrowLeft: "left",
  KeyD: "right",
  ArrowRight: "right",
};

function Loader() {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a1526]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-cyan-400/30 border-t-cyan-400" />
        <p className="text-gray-300">Loading the world…</p>
      </div>
    </div>
  );
}

export default function GameWorld() {
  const [nearby, setNearby] = useState<SectionId | null>(null);
  const [open, setOpen] = useState<SectionId | null>(null);
  const [started, setStarted] = useState(false);

  const nearbyRef = useRef<SectionId | null>(null);
  const openRef = useRef<SectionId | null>(null);
  const dragging = useRef(false);
  const lastX = useRef(0);

  nearbyRef.current = nearby;
  openRef.current = open;

  // Freeze the world while the intro or a content panel is showing.
  inputState.paused = !started || open !== null;

  const handleEnter = useCallback(() => {
    if (nearbyRef.current && !openRef.current) {
      setOpen(nearbyRef.current);
      resetInput();
    }
  }, []);

  // Keyboard movement + interact.
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const action = KEY_MAP[e.code];
      if (action) {
        inputState[action] = true;
        e.preventDefault();
      }
      if ((e.code === "KeyE" || e.code === "Enter") && !openRef.current) {
        handleEnter();
      }
    };
    const up = (e: KeyboardEvent) => {
      const action = KEY_MAP[e.code];
      if (action) inputState[action] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      resetInput();
    };
  }, [handleEnter]);

  // Pointer drag to look around (only when grabbing the 3D canvas itself).
  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).tagName !== "CANVAS") return;
    dragging.current = true;
    lastX.current = e.clientX;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    inputState.camYawDelta += -dx * 0.005;
  };
  const stopDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      className="fixed inset-0 select-none overflow-hidden bg-[#0a1526]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDrag}
      onPointerLeave={stopDrag}
      style={{ cursor: dragging.current ? "grabbing" : "grab" }}
    >
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          dpr={[1, 1.75]}
          camera={{ position: [0, 6, 12], fov: 55, near: 0.1, far: 200 }}
        >
          <Scene nearby={nearby} onNearbyChange={setNearby} />
        </Canvas>
      </Suspense>

      {started && <HUD nearby={nearby} onEnter={handleEnter} />}

      {open && <SectionModal id={open} onClose={() => setOpen(null)} />}

      {/* Intro overlay */}
      {!started && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm">
          <div className="max-w-lg rounded-2xl border border-white/10 bg-gray-900/90 p-8 text-center shadow-2xl">
            <div className="mb-2 text-5xl">🎮</div>
            <h1 className="mb-2 text-3xl font-black text-white">
              Explore my portfolio
            </h1>
            <p className="mb-6 text-gray-300">
              Walk around the world as a character and step into the glowing
              pavilions to discover who I am, what I do, and my work.
            </p>
            <div className="mb-6 grid grid-cols-3 gap-3 text-sm text-gray-200">
              <div className="rounded-lg bg-white/5 py-3">
                <div className="text-lg font-bold text-cyan-300">WASD</div>
                <div className="text-xs text-gray-400">move</div>
              </div>
              <div className="rounded-lg bg-white/5 py-3">
                <div className="text-lg font-bold text-cyan-300">Drag</div>
                <div className="text-xs text-gray-400">look</div>
              </div>
              <div className="rounded-lg bg-white/5 py-3">
                <div className="text-lg font-bold text-cyan-300">E</div>
                <div className="text-xs text-gray-400">enter</div>
              </div>
            </div>
            <button
              onClick={() => setStarted(true)}
              className="rounded-full bg-cyan-400 px-10 py-3 text-lg font-bold text-gray-900 transition-transform hover:scale-105"
            >
              Start exploring
            </button>
            <p className="mt-4 text-xs text-gray-500">
              On phones, use the on-screen joystick. Prefer to read? Switch to
              Classic view any time.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
