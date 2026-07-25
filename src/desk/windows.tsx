import { useState, type FC } from "react";
import emailjs from "@emailjs/browser";
import {
  profile,
  aboutParagraphs,
  stats,
  services,
  education,
  experience,
  skills,
  projects,
  testimonials,
  socials,
  downloadResume,
  ME_IMG,
} from "./content";

export interface WinMeta {
  title: string;
  icon: string;
  width: number;
  height: number;
  menubar?: boolean;
  Component: FC;
}

/* ------------------------------ Readme ------------------------------ */
const ReadmeWindow: FC = () => (
  <>
    <div className="window-body paper">
      <h2>💾 Welcome to DexterOS 95</h2>
      <p>
        Hi, I'm <b>{profile.name}</b> — a {profile.roles.join(", ")} based in{" "}
        {profile.location}.
      </p>
      <p>This is my portfolio, running as a cozy 90s desktop. To explore:</p>
      <ul style={{ margin: "0 0 8px 18px" }}>
        <li>Double-click the desktop icons on the left</li>
        <li>Click the props on the desk — floppies, sticky note, mug, sketchbook</li>
        <li>Use the <b>Start</b> menu at the bottom-left</li>
        <li>Drag windows by their title bars</li>
      </ul>
      <p style={{ marginBottom: 0 }}>
        Grab a coffee ☕ and have a look around. Thanks for visiting!
      </p>
    </div>
    <div className="statusbar">
      <span className="cell">readme.txt</span>
      <span className="cell" style={{ flex: "0 0 auto" }}>
        1 KB
      </span>
    </div>
  </>
);

/* ------------------------------ About ------------------------------ */
const AboutWindow: FC = () => (
  <>
    <div className="window-body paper">
      <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
        <img
          src={ME_IMG}
          alt={profile.name}
          style={{
            width: 92,
            height: 92,
            objectFit: "cover",
            border: "2px solid",
            borderColor: "#808080 #fff #fff #808080",
            flex: "0 0 auto",
          }}
        />
        <div>
          <h2 style={{ marginBottom: 2 }}>{profile.name}</h2>
          <div className="h-accent" style={{ fontWeight: 700 }}>
            {profile.roles.join(" · ")}
          </div>
          <div style={{ fontSize: 12, color: "#444", marginTop: 4 }}>
            📍 {profile.location}
          </div>
        </div>
      </div>
      {aboutParagraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <div className="field-row">
        <span className="lbl">Email:</span>
        <b>{profile.email}</b>
      </div>
      <div className="field-row">
        <span className="lbl">Born:</span>
        {profile.dob}
      </div>
      <button className="btn95" style={{ marginTop: 6 }} onClick={downloadResume}>
        📄 Download CV
      </button>
    </div>
    <div className="statusbar">
      <span className="cell">Ready</span>
    </div>
  </>
);

/* ------------------------------ My Computer (stats) ------------------------------ */
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
          <div key={s.label} className="bevel-in" style={{ background: "#fff", padding: 8, textAlign: "center" }}>
            <div className="h-accent" style={{ fontSize: 22, fontWeight: 800 }}>
              {s.number}
            </div>
            <div style={{ fontSize: 11 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bevel-in" style={{ background: "#fff", padding: 8, fontSize: 12, fontFamily: "monospace" }}>
        <div>System: DexterOS 95</div>
        <div>CPU: Fullstack Engine @ 6.0 yrs</div>
        <div>Stack: React · Node · NestJS · SQL</div>
        <div>Status: Available for hire ✔</div>
      </div>
    </div>
    <div className="statusbar">
      <span className="cell">My Computer</span>
    </div>
  </>
);

/* ------------------------------ Services ------------------------------ */
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

/* ------------------------------ Resume ------------------------------ */
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

/* ------------------------------ Projects ------------------------------ */
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
              // single click on touch also opens
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

/* ------------------------------ Guestbook (testimonials) ------------------------------ */
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
      <span className="cell">{testimonials.length} entries — sign it below? just email me!</span>
    </div>
  </>
);

/* ------------------------------ Contact (mail) ------------------------------ */
const ContactWindow: FC = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey)
        throw new Error("EmailJS configuration is missing.");
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: profile.email,
        },
        publicKey
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Email send failed:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <div className="window-body">
        <div className="bevel-in" style={{ background: "#fff", padding: 8, marginBottom: 8, fontSize: 12 }}>
          <div>✉️ <b>{profile.email}</b></div>
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

/* ------------------------------ Registry ------------------------------ */
export const REGISTRY: Record<string, WinMeta> = {
  readme: { title: "readme.txt - Notepad", icon: "📝", width: 420, height: 320, Component: ReadmeWindow },
  about: { title: "About Me", icon: "👤", width: 460, height: 400, Component: AboutWindow },
  mycomputer: { title: "My Computer", icon: "🖥️", width: 360, height: 320, Component: MyComputerWindow },
  services: { title: "What I Do", icon: "🛠️", width: 440, height: 400, Component: ServicesWindow },
  resume: { title: "resume.doc - WordPad", icon: "📜", width: 480, height: 460, Component: ResumeWindow },
  projects: { title: "Projects", icon: "📁", width: 500, height: 420, Component: ProjectsWindow },
  guestbook: { title: "Guestbook", icon: "📖", width: 460, height: 420, Component: GuestbookWindow },
  contact: { title: "New Message", icon: "✉️", width: 460, height: 430, Component: ContactWindow },
};
