import { useState } from "react";
import "./desk.css";
import { OSProvider, useOS } from "./os-store";
import Desktop from "./Desktop";
import BootSequence from "./BootSequence";
import Notebook from "./Notebook";
import { profile } from "./content";

type Phase = "boot" | "on" | "off";

function Prop({
  className,
  style,
  tip,
  onOpen,
  label,
  children,
}: {
  className?: string;
  style: React.CSSProperties;
  tip: string;
  onOpen: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`prop ${className ?? ""}`}
      style={style}
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
    >
      <span className="tip">{tip}</span>
      {children}
    </div>
  );
}

function SceneInner() {
  const { open } = useOS();
  const [phase, setPhase] = useState<Phase>("boot");
  const [notebookPage, setNotebookPage] = useState<number | null>(null);

  const openApp = (id: string) => {
    if (phase !== "on") setPhase("on");
    open(id);
  };

  return (
    <div className="scene">
      <div className="wall-glow" />

      {/* Wall decor (behind the desk) */}
      <div
        className="wall-window"
        style={{ right: "5%", top: "7%", width: "min(18vw, 240px)", height: "min(15vw, 180px)" }}
        aria-hidden
      >
        <div className="sky" />
        <div className="stars" />
        <div className="moon" />
        <div className="blinds" />
        <div className="cord" />
      </div>
      <div
        className="photo-frame"
        style={{ left: "5%", top: "9%", width: "min(11vw, 150px)", height: "min(9vw, 120px)" }}
        aria-hidden
      >
        <div className="pic">
          <div className="sun" />
          <div className="hill h2" />
          <div className="hill" />
        </div>
      </div>

      <div className="screen-cast" />
      <div className="desk-surface" />

      {/* CRT monitor */}
      <div className="monitor">
        <div className="screen-bezel">
          <div className="screen">
            {phase === "boot" && (
              <BootSequence
                onDone={() => {
                  setPhase("on");
                  open("readme");
                }}
              />
            )}
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
          onClick={() => setPhase(phase === "off" ? "boot" : "off")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") &&
            setPhase(phase === "off" ? "boot" : "off")
          }
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

      {/* Keyboard */}
      <div className="keyboard" aria-hidden>
        {[12, 12, 11].map((n, r) => (
          <div className="krow" key={r}>
            {Array.from({ length: n }).map((_, i) => (
              <span className="key" key={i} />
            ))}
          </div>
        ))}
        <div className="krow">
          <span className="key" />
          <span className="key" />
          <span className="key space" />
          <span className="key" />
          <span className="key" />
        </div>
      </div>

      {/* Nameplate */}
      <div className="nameplate" style={{ bottom: "24%" }}>
        {profile.name}
        <small>Fullstack Developer · Freelancer · Mentor</small>
      </div>

      {/* Desk props */}
      <Prop
        style={{ left: "3%", top: "31%" }}
        tip="Ping me!"
        label="Sticky note — contact"
        onOpen={() => openApp("contact")}
        className="sticky-wrap"
      >
        <div className="sticky">
          Call me!
          <br />
          {profile.phone}
          <br />
          <span style={{ textDecoration: "underline" }}>get in touch →</span>
        </div>
      </Prop>

      <Prop
        style={{ left: "6%", bottom: "7%" }}
        tip="Projects"
        label="Projects floppy disk"
        onOpen={() => openApp("projects")}
      >
        <div className="floppy">
          <div className="shutter" />
          <div className="label">
            <b>PROJECTS</b>
            <br />
            .DSK
          </div>
        </div>
      </Prop>

      <Prop
        style={{ left: "15%", bottom: "5%" }}
        tip="Resume"
        label="Resume floppy disk"
        onOpen={() => openApp("resume")}
      >
        <div className="floppy" style={{ background: "#5a2b67" }}>
          <div className="shutter" />
          <div className="label">
            <b>RESUME</b>
            <br />
            .DSK
          </div>
        </div>
      </Prop>

      <Prop
        style={{ right: "15%", bottom: "6%" }}
        tip="What I do (open notebook)"
        label="Sketchbook — what I do"
        onOpen={() => setNotebookPage(0)}
      >
        <div className="sketchbook">
          <div className="doodle">✏️</div>
        </div>
      </Prop>

      <Prop
        style={{ right: "6%", bottom: "8%" }}
        tip="About me — my diary ☕"
        label="Coffee mug — about me diary"
        onOpen={() => setNotebookPage(1)}
      >
        <div className="mug">
          <span className="steam">≋</span>
          <div className="coffee" />
        </div>
      </Prop>

      {/* Decorative props (no interaction) */}
      <div
        className="mousepad"
        style={{ position: "absolute", right: "25%", bottom: "5%", zIndex: 2 }}
        aria-hidden
      >
        <div className="mouse95" />
      </div>
      <div
        className="rotary"
        style={{ position: "absolute", left: "20%", bottom: "3%", zIndex: 3 }}
        aria-hidden
      >
        <div className="base">
          <div className="dial" />
        </div>
        <div className="handset" />
      </div>
      <div
        className="cassette"
        style={{ position: "absolute", left: "1.5%", bottom: "5%", zIndex: 3 }}
        aria-hidden
      >
        <div className="clabel">DEV JAMS '98</div>
        <div className="reels">
          <div className="reel" />
          <div className="reel" />
        </div>
      </div>
      <div
        className="plant"
        style={{ position: "absolute", right: "1.5%", bottom: "4%", zIndex: 3 }}
        aria-hidden
      >
        <span className="leaf l1" />
        <span className="leaf l2" />
        <span className="leaf l3" />
        <span className="pot" />
      </div>

      {/* Warm room lighting on top for cohesion */}
      <div className="room-warm" />

      {notebookPage !== null && (
        <Notebook initialPage={notebookPage} onClose={() => setNotebookPage(null)} />
      )}
    </div>
  );
}

export default function DeskScene() {
  return (
    <div className="desk-root">
      <OSProvider>
        <SceneInner />
      </OSProvider>
    </div>
  );
}
