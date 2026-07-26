import type { FC } from "react";
import { achievements } from "../../content";

const AchievementsWindow: FC = () => (
  <>
    <div className="window-body paper">
      <h2>🏆 Achievements</h2>
      {achievements.map((a) => (
        <div
          key={a.title}
          className="bevel-in"
          style={{ background: "#fffef5", padding: 10, marginBottom: 10 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 26 }}>{a.icon}</span>
            <div>
              <div style={{ fontWeight: 700 }} className="h-accent">
                {a.title}
              </div>
              <div style={{ fontSize: 12, color: "#444" }}>{a.event}</div>
            </div>
          </div>
          {a.description && (
            <p style={{ margin: "8px 0 0", fontSize: 12 }}>{a.description}</p>
          )}
          {a.app && (
            <div style={{ marginTop: 8 }}>
              <span style={{ fontWeight: 700 }}>💾 App:</span> {a.app}
              <p style={{ margin: "2px 0 0", fontSize: 12 }}>{a.appDescription}</p>
            </div>
          )}
          {a.role && (
            <div style={{ marginTop: 6 }}>
              <span style={{ fontWeight: 700 }}>🎖️ Role:</span> {a.role}
            </div>
          )}
          {a.video && (
            <div style={{ marginTop: 8 }}>
              <a
                className="link95"
                href={a.video}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Watch the demo on YouTube
              </a>
            </div>
          )}
          {a.images && (
            <div
              style={{
                marginTop: 10,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 8,
              }}
            >
              {a.images.map((img) => (
                <div
                  key={img.caption}
                  className="proj-card"
                  onClick={() => window.open(img.src, "_blank", "noopener")}
                  title={img.caption}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{ height: 90, objectFit: "cover", objectPosition: "top" }}
                  />
                  <div className="cap" style={{ fontSize: 10 }}>
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="statusbar">
      <span className="cell">{achievements.length} achievement(s)</span>
    </div>
  </>
);

export default AchievementsWindow;
