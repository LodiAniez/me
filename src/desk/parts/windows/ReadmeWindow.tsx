import type { FC } from "react";
import { profile } from "../../content";

const ReadmeWindow: FC = () => (
  <>
    <div className="window-body paper">
      <h2>💾 Welcome to DexterOS 95</h2>
      <p>
        Hi, I'm <b>{profile.name}</b> — a {profile.roles.join(", ")} based in{" "}
        {profile.location}.
      </p>
      <p>This is my portfolio, running as a cozy 90s desktop. To explore:</p>
      <ul style={{ margin: "0 0 8px 18px" }}>
        <li>Double-click the desktop icons on the left</li>
        <li>Click the props on the desk — floppies, sticky note, mug, sketchbook</li>
        <li>
          Use the <b>Start</b> menu at the bottom-left
        </li>
        <li>Drag windows by their title bars</li>
      </ul>
      <p style={{ marginBottom: 0 }}>
        Grab a coffee ☕ and have a look around. Thanks for visiting!
      </p>
    </div>
    <div className="statusbar">
      <span className="cell">readme.txt</span>
      <span className="cell" style={{ flex: "0 0 auto" }}>
        1 KB
      </span>
    </div>
  </>
);

export default ReadmeWindow;
