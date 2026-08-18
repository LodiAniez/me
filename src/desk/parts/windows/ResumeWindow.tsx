import type { FC } from "react";
import { profile, education, experience, certifications, skills, downloadResume } from "../../content";

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

      <h3 className="h-accent">Certifications</h3>
      {certifications.map((c) => (
        <div key={c.title} className="timeline-item">
          <div style={{ fontSize: 11, color: "#a11", fontWeight: 700 }}>{c.year}</div>
          <div style={{ fontWeight: 700 }}>{c.title}</div>
          <div style={{ fontSize: 12, color: "#444" }}>
            {c.issuer}
            {c.credentialId && ` · N° ${c.credentialId}`}
          </div>
          <p style={{ fontSize: 12, margin: "2px 0 0" }}>{c.description}</p>
          {c.image && (
            <div
              className="proj-card"
              style={{ marginTop: 8, maxWidth: 220 }}
              onClick={() => window.open(c.image, "_blank", "noopener")}
              title={c.title}
            >
              <img
                src={c.image}
                alt={c.title}
                style={{ height: 110, objectFit: "cover", objectPosition: "top" }}
              />
              <div className="cap" style={{ fontSize: 10 }}>
                Click to view certificate
              </div>
            </div>
          )}
          {c.url && (
            <div style={{ marginTop: 6 }}>
              <a
                className="link95"
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Verify credential
              </a>
            </div>
          )}
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
