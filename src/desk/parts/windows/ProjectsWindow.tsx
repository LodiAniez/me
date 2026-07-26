import type { FC } from "react";
import { projects } from "../../content";

const ProjectsWindow: FC = () => (
  <>
    <div className="window-body">
      <div style={{ fontSize: 12, marginBottom: 8, color: "#333" }}>
        📁 C:\WORK\PROJECTS — double-click to view
      </div>
      <div className="proj-grid">
        {projects.map((p) => (
          <div
            key={p.title}
            className="proj-card"
            onDoubleClick={() => window.open(p.image, "_blank", "noopener")}
            onClick={(e) => {
              if (window.matchMedia("(pointer: coarse)").matches)
                window.open(p.image, "_blank", "noopener");
              else e.currentTarget.classList.toggle("sel");
            }}
            title={`${p.title} — ${p.category}`}
          >
            <img src={p.image} alt={p.title} />
            <div className="cap">
              <b>{p.title}</b>
              <div style={{ color: "#555", fontSize: 11 }}>{p.filename}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="statusbar">
      <span className="cell">{projects.length} object(s)</span>
    </div>
  </>
);

export default ProjectsWindow;
