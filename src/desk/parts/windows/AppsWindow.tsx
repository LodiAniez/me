import type { FC } from "react";
import { apps, downloadApp } from "../../content";

const AppsWindow: FC = () => (
  <>
    <div className="window-body">
      <div style={{ fontSize: 12, marginBottom: 8, color: "#333" }}>
        💾 C:\WORK\APPS — apps I built, free to download
      </div>

      {apps.length === 0 ? (
        <div
          className="bevel-in"
          style={{ background: "#fff", padding: 12, fontSize: 12 }}
        >
          <div style={{ fontWeight: 700, marginBottom: 4 }}>
            No builds published yet
          </div>
          <p style={{ margin: 0 }}>
            I'm packaging my personal apps for download — check back soon, or
            open <b>Contact</b> and I'll send you a build directly.
          </p>
        </div>
      ) : (
        <div className="app-list">
          {apps.map((a) => (
            <div key={a.name} className="app-card bevel-in">
              <div className="app-head">
                {a.logo ? (
                  <img className="app-logo" src={a.logo} alt={`${a.name} logo`} />
                ) : (
                  <span className="app-icon">{a.icon}</span>
                )}
                <div style={{ minWidth: 0 }}>
                  <div className="h-accent" style={{ fontWeight: 700 }}>
                    {a.name}{" "}
                    <span style={{ fontWeight: 400, color: "#444", fontSize: 11 }}>
                      v{a.version}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "#444" }}>{a.tagline}</div>
                </div>
              </div>

              {a.screenshot && (
                <div
                  className="proj-card"
                  style={{ marginTop: 8 }}
                  onClick={() => window.open(a.screenshot, "_blank", "noopener")}
                  title={`${a.name} — screenshot`}
                >
                  <img
                    src={a.screenshot}
                    alt={`${a.name} screenshot`}
                    style={{ height: 110, objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
              )}

              <p className="app-lead">{a.description}</p>
              {a.about && <p className="app-about">{a.about}</p>}
              {a.tech && (
                <div className="app-tech">
                  <b>Built with:</b> {a.tech.join(" \u00b7 ")}
                </div>
              )}

              <div className="app-meta">
                {a.platforms.map((p) => (
                  <span key={p} className="app-tag">
                    {p}
                  </span>
                ))}
                <span className="app-tag">{a.size}</span>
              </div>

              <div className="app-actions">
                <button className="btn95" onClick={() => downloadApp(a)}>
                  ⬇ Download
                </button>
                {a.site && (
                  <a
                    className="link95"
                    href={a.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                )}
                {a.repo && (
                  <a
                    className="link95"
                    href={a.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                )}
              </div>

              {a.install && (
                <div className="app-install">
                  <div className="app-install-head">
                    <span>⚠️</span>
                    <b>Before you install</b>
                  </div>
                  <p>{a.install.note}</p>
                  <ol>
                    {a.install.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="statusbar">
      <span className="cell">{apps.length} app(s)</span>
    </div>
  </>
);

export default AppsWindow;
