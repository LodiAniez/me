import { useDeskScene } from "../hooks/useDeskScene";
import { profile } from "../content";
import Monitor from "./Monitor";
import DeskProps from "./DeskProps";
import Notebook from "./Notebook";
import StickyZoom from "./StickyZoom";

// Composes the whole desk: wall decor, the CRT monitor, interactive props,
// ambient desk clutter, and the zoom-in overlays.
export default function Scene() {
  const {
    phase,
    setPhase,
    notebookPage,
    setNotebookPage,
    stickyOpen,
    setStickyOpen,
    openApp,
    bootDone,
  } = useDeskScene();

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

      <Monitor phase={phase} setPhase={setPhase} onBootDone={bootDone} />

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

      <DeskProps
        onOpenApp={openApp}
        onOpenNotebook={setNotebookPage}
        onOpenSticky={() => setStickyOpen(true)}
      />

      {/* Decorative props (no interaction) */}
      <div
        className="mug"
        style={{ position: "absolute", right: "6%", bottom: "8%", zIndex: 3 }}
        aria-hidden
      >
        <span className="steam">≋</span>
        <div className="coffee" />
      </div>
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
      {stickyOpen && <StickyZoom onClose={() => setStickyOpen(false)} />}
    </div>
  );
}
