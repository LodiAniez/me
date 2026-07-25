import * as THREE from "three";

export type SectionId =
  | "about"
  | "services"
  | "resume"
  | "portfolio"
  | "testimonials"
  | "contact";

export interface SectionDef {
  id: SectionId;
  title: string;
  tagline: string;
  emoji: string;
  color: string; // building accent
  position: [number, number, number];
}

// Six pavilions arranged in a ring around the central spawn plaza.
const RADIUS = 26;
const order: Array<Omit<SectionDef, "position">> = [
  { id: "about", title: "About Me", tagline: "Who I am", emoji: "🧑‍💻", color: "#22d3ee" },
  { id: "services", title: "What I Do", tagline: "Services", emoji: "🛠️", color: "#a78bfa" },
  { id: "resume", title: "My Journey", tagline: "Resume & skills", emoji: "📜", color: "#f59e0b" },
  { id: "portfolio", title: "My Work", tagline: "Projects", emoji: "🚀", color: "#34d399" },
  { id: "testimonials", title: "Client Speaks", tagline: "Testimonials", emoji: "💬", color: "#f472b6" },
  { id: "contact", title: "Get In Touch", tagline: "Contact", emoji: "✉️", color: "#60a5fa" },
];

export const SECTIONS: SectionDef[] = order.map((s, i) => {
  const angle = (i / order.length) * Math.PI * 2 - Math.PI / 2;
  return {
    ...s,
    position: [
      Math.cos(angle) * RADIUS,
      0,
      Math.sin(angle) * RADIUS,
    ] as [number, number, number],
  };
});

export const ENTER_RADIUS = 5.5; // distance at which the "enter" prompt shows
export const WORLD_RADIUS = 44; // soft boundary the player cannot walk past

// Reusable temp vector for distance checks (avoids per-frame allocation).
export const tmpVec = new THREE.Vector3();
