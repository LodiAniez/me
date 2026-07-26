import type { FC } from "react";
import { testimonials } from "../../content";

const GuestbookWindow: FC = () => (
  <>
    <div className="window-body paper">
      <h2>📖 Guestbook — what people say</h2>
      {testimonials.map((t) => (
        <div key={t.name} className="testi-card">
          <div className="testi-head">
            <img src={t.image} alt={t.name} />
            <div>
              <div style={{ fontWeight: 700 }}>{t.name}</div>
              <div style={{ fontSize: 11, color: "#555" }}>{t.position}</div>
              <div style={{ color: "#e6a100" }}>★★★★★</div>
            </div>
          </div>
          <p style={{ fontSize: 12, margin: 0, fontStyle: "italic" }}>"{t.text}"</p>
        </div>
      ))}
    </div>
    <div className="statusbar">
      <span className="cell">
        {testimonials.length} entries — sign it below? just email me!
      </span>
    </div>
  </>
);

export default GuestbookWindow;
