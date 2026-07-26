import "./desk.css";
import { OSProvider } from "./hooks/useOSStore";
import Scene from "./parts/Scene";

// DexterOS 95 — a retro desk with a working Windows-95-style desktop.
export default function Desk() {
  return (
    <div className="desk-root">
      <OSProvider>
        <Scene />
      </OSProvider>
    </div>
  );
}
