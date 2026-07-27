import Prop from "./Prop";
import { profile } from "../content";
import type { DeskPropsProps } from "../types";

// The interactive desk props: sticky note, floppies and the sketchbook.
export default function DeskProps({
  onOpenApp,
  onOpenNotebook,
  onOpenSticky,
}: DeskPropsProps) {
  return (
    <>
      <Prop
        style={{ left: "3%", top: "31%" }}
        tip="Contact me (zoom in)"
        label="Sticky note — contact"
        onOpen={onOpenSticky}
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
        onOpen={() => onOpenApp("projects")}
        className="prop-projects"
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
        onOpen={() => onOpenApp("resume")}
        className="prop-resume"
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
        onOpen={() => onOpenNotebook(0)}
        className="prop-sketch"
      >
        <div className="sketchbook">
          <div className="doodle">✏️</div>
        </div>
      </Prop>
    </>
  );
}
