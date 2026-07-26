import type { FC } from "react";
import { profile, socials } from "../../content";
import { useContactForm } from "../../hooks/useContactForm";

const ContactWindow: FC = () => {
  const { form, loading, status, set, submit } = useContactForm();

  return (
    <>
      <div className="window-body">
        <div
          className="bevel-in"
          style={{ background: "#fff", padding: 8, marginBottom: 8, fontSize: 12 }}
        >
          <div>
            ✉️ <b>{profile.email}</b>
          </div>
          <div>📞 {profile.phone}</div>
          <div>📍 {profile.address}</div>
          <div style={{ marginTop: 4 }}>
            {socials.map((s, i) => (
              <span key={s.name}>
                {i > 0 && " · "}
                <a className="link95" href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </span>
            ))}
          </div>
        </div>
        <form onSubmit={submit}>
          <div className="field-row" style={{ gap: 6 }}>
            <input className="field95" placeholder="Your name" required value={form.name} onChange={set("name")} />
            <input className="field95" placeholder="Your email" type="email" required value={form.email} onChange={set("email")} />
          </div>
          <input className="field95" style={{ marginBottom: 6 }} placeholder="Subject" required value={form.subject} onChange={set("subject")} />
          <textarea className="field95" style={{ marginBottom: 6, resize: "none" }} rows={4} placeholder="Message..." required value={form.message} onChange={set("message")} />
          <button className="btn95" type="submit" disabled={loading}>
            {loading ? "Sending…" : "📨 Send Message"}
          </button>
          {status === "success" && (
            <div style={{ marginTop: 8, color: "#060", fontSize: 12 }}>
              ✔ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div style={{ marginTop: 8, color: "#a00", fontSize: 12 }}>
              ✖ Failed to send. Email me directly at {profile.email}.
            </div>
          )}
        </form>
      </div>
      <div className="statusbar">
        <span className="cell">New Message</span>
      </div>
    </>
  );
};

export default ContactWindow;
