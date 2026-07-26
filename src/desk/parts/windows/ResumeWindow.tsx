import type { FC } from "react";
import { profile, education, experience, skills, downloadResume } from "../../content";

const ResumeWindow: FC = () => (
  <>
    <div className="window-body paper">
      <h2>📜 Resume — {profile.name}</h2>

      <h3 className="h-accent">Experience</h3>
      {experience.map((e) => (
        <div key={e.year + e.company} className="timeline-item">
          <div style={{ fontSize: 11, color: "#a11", fontWeight: 700 }}>{e.year}</div>
          <div style={{ fontWeight: 700 }}>{e.title}</div>
          <div style={{ fontSize: 12, color: "#444" }}>{e.company}</div>
          <p style={{ fontSize: 12, margin: "2px 0 0" }}>{e.description}</p>
        </div>
      ))}

      <h3 className="h-accent">Education</h3>
      {education.map((e) => (
        <div key={e.year} className="timeline-item">
          <div style={{ fontSize: 11, color: "#a11", fontWeight: 700 }}>{e.year}</div>
          <div style={{ fontWeight: 700 }}>{e.title}</div>
          <div style={{ fontSize: 12, color: "#444" }}>{e.institution}</div>
          <p style={{ fontSize: 12, margin: "2px 0 0" }}>{e.description}</p>
        </div>
      ))}

      <h3 className="h-accent">Skills</h3>
      {skills.map((s) => (
        <div key={s.name} style={{ marginBottom: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <span>{s.name}</span>
            <b>{s.percentage}%</b>
          </div>
          <div className="skillbar-track">
            <div className="skillbar-fill" style={{ width: `${s.percentage}%` }} />
          </div>
        </div>
      ))}

      <button className="btn95" style={{ marginTop: 8 }} onClick={downloadResume}>
        📄 Download full resume (PDF)
      </button>
    </div>
    <div className="statusbar">
      <span className="cell">resume.doc</span>
    </div>
  </>
);

export default ResumeWindow;
