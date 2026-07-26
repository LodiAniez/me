import BootSequence from "./BootSequence";
import Desktop from "./Desktop";
import type { MonitorProps } from "../types";

// The CRT: boot → desktop → off, with a power button and status LED.
export default function Monitor({ phase, setPhase, onBootDone }: MonitorProps) {
  const togglePower = () => setPhase(phase === "off" ? "boot" : "off");

  return (
    <div className="monitor">
      <div className="screen-bezel">
        <div className="screen">
          {phase === "boot" && <BootSequence onDone={onBootDone} />}
          {phase === "on" && <Desktop onShutDown={() => setPhase("off")} />}
          {phase === "off" && (
            <div className="crt-off" onClick={() => setPhase("boot")}>
              It's now safe to turn off your computer.
              <br />
              <br />
              <small>(click to power back on)</small>
            </div>
          )}
          {phase !== "off" && (
            <div className="crt-fx" aria-hidden>
              <div className="flick" />
              <div className="sweep" />
            </div>
          )}
        </div>
      </div>
      <div className="monitor-brand">Aniez ▪ SVGA</div>
      <div
        className="power-btn"
        role="button"
        tabIndex={0}
        aria-label={phase === "off" ? "Power on" : "Power off"}
        title={phase === "off" ? "Power on" : "Power off"}
        onClick={togglePower}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && togglePower()}
      >
        ⏻
      </div>
      <div
        className="monitor-led"
        style={{
          background: phase === "off" ? "#733" : "#3cff5c",
          boxShadow: phase === "off" ? "none" : "0 0 8px #3cff5c",
        }}
      />
    </div>
  );
}
