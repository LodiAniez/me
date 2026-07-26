import type { FC } from "react";
import { services } from "../../content";

const ServicesWindow: FC = () => (
  <>
    <div className="window-body paper">
      <h2>🛠️ What I Do</h2>
      {services.map((s) => (
        <div key={s.title} style={{ marginBottom: 8 }}>
          <h3 style={{ margin: "6px 0 2px" }} className="h-accent">
            ▸ {s.title}
          </h3>
          <p style={{ margin: 0, fontSize: 12 }}>{s.description}</p>
        </div>
      ))}
    </div>
    <div className="statusbar">
      <span className="cell">{services.length} services</span>
    </div>
  </>
);

export default ServicesWindow;
