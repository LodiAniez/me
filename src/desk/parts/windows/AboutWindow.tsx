import type { FC } from "react";
import { profile, aboutParagraphs, downloadResume, ME_IMG } from "../../content";

const AboutWindow: FC = () => (
  <>
    <div className="window-body paper">
      <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
        <img
          src={ME_IMG}
          alt={profile.name}
          style={{
            width: 92,
            height: 92,
            objectFit: "cover",
            border: "2px solid",
            borderColor: "#808080 #fff #fff #808080",
            flex: "0 0 auto",
          }}
        />
        <div>
          <h2 style={{ marginBottom: 2 }}>{profile.name}</h2>
          <div className="h-accent" style={{ fontWeight: 700 }}>
            {profile.roles.join(" · ")}
          </div>
          <div style={{ fontSize: 12, color: "#444", marginTop: 4 }}>
            📍 {profile.location}
          </div>
        </div>
      </div>
      {aboutParagraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <div className="field-row">
        <span className="lbl">Email:</span>
        <b>{profile.email}</b>
      </div>
      <div className="field-row">
        <span className="lbl">Born:</span>
        {profile.dob}
      </div>
      <button className="btn95" style={{ marginTop: 6 }} onClick={downloadResume}>
        📄 Download CV
      </button>
    </div>
    <div className="statusbar">
      <span className="cell">Ready</span>
    </div>
  </>
);

export default AboutWindow;
