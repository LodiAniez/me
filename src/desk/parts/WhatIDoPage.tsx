import { services } from "../content";

const DOODLES = ["🎨", "⚙️", "🗄️", "📱", "🖥️", "🧑‍🏫"];

export default function WhatIDoPage() {
  return (
    <>
      <h1 className="nb-title">What I Do</h1>
      <p className="nb-sub">~ my little field guide to building software ~</p>
      {services.map((s, i) => (
        <div className="nb-entry" key={s.title}>
          <h3>
            <span className="nb-bullet">{DOODLES[i] ?? "✦"}</span> {s.title}
          </h3>
          <p>{s.description}</p>
        </div>
      ))}
    </>
  );
}
