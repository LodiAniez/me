import { profile, aboutParagraphs, stats } from "../content";

export default function AboutDiaryPage() {
  return (
    <>
      <h1 className="nb-title">About Me</h1>
      <p className="nb-sub">~ a page from my diary ~</p>
      <p className="nb-greet">Dear diary,</p>
      {aboutParagraphs.map((p, i) => (
        <p className="nb-diary" key={i}>
          {p}
        </p>
      ))}
      <div className="nb-notes">
        <div>🧭 {profile.roles.join(" · ")}</div>
        <div>📍 From {profile.location}</div>
        <div>🎂 Born {profile.dob}</div>
        <div>✉️ {profile.email}</div>
      </div>
      <div className="nb-stats">
        {stats.map((s) => (
          <span key={s.label}>
            <b>{s.number}</b> {s.label}
          </span>
        ))}
      </div>
      <p className="nb-sign">— Dexter ✦</p>
    </>
  );
}
