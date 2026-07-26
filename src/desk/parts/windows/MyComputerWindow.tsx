import type { FC } from "react";
import { stats } from "../../content";

const MyComputerWindow: FC = () => (
  <>
    <div className="window-body">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 10,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="bevel-in"
            style={{ background: "#fff", padding: 8, textAlign: "center" }}
          >
            <div className="h-accent" style={{ fontSize: 22, fontWeight: 800 }}>
              {s.number}
            </div>
            <div style={{ fontSize: 11 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div
        className="bevel-in"
        style={{ background: "#fff", padding: 8, fontSize: 12, fontFamily: "monospace" }}
      >
        <div>System: DexterOS 95</div>
        <div>CPU: Fullstack Engine @ 7.0 yrs</div>
        <div>Stack: React · Node · NestJS · SQL</div>
        <div>Status: Available for hire ✔</div>
      </div>
    </div>
    <div className="statusbar">
      <span className="cell">My Computer</span>
    </div>
  </>
);

export default MyComputerWindow;
