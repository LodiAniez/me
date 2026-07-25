import { useMemo } from "react";
import { Html, Stars, Sparkles } from "@react-three/drei";
import Player from "./Player";
import Building from "./Building";
import { SECTIONS, WORLD_RADIUS, type SectionId } from "./sections";

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.18, 0.24, 1.8, 6]} />
        <meshStandardMaterial color="#5b3a26" />
      </mesh>
      <mesh castShadow position={[0, 2.3, 0]}>
        <coneGeometry args={[1.1, 2.2, 7]} />
        <meshStandardMaterial color="#1f7a54" />
      </mesh>
      <mesh castShadow position={[0, 3.3, 0]}>
        <coneGeometry args={[0.8, 1.6, 7]} />
        <meshStandardMaterial color="#249a67" />
      </mesh>
    </group>
  );
}

function Lamp({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 2.6, 6]} />
        <meshStandardMaterial color="#2b3644" />
      </mesh>
      <mesh position={[0, 2.7, 0]}>
        <sphereGeometry args={[0.22, 12, 12]} />
        <meshStandardMaterial
          color="#fff6d5"
          emissive="#ffd873"
          emissiveIntensity={2}
        />
      </mesh>
      <pointLight position={[0, 2.7, 0]} distance={9} intensity={12} color="#ffd873" />
    </group>
  );
}

export default function Scene({
  nearby,
  onNearbyChange,
}: {
  nearby: SectionId | null;
  onNearbyChange: (id: SectionId | null) => void;
}) {
  // Scatter some trees deterministically in the ring between plaza and edge.
  const trees = useMemo(() => {
    const out: [number, number, number][] = [];
    for (let i = 0; i < 26; i++) {
      const a = (i * 137.5 * Math.PI) / 180;
      const r = 12 + ((i * 7) % 30);
      out.push([Math.cos(a) * r, 0, Math.sin(a) * r]);
    }
    return out;
  }, []);

  return (
    <>
      <color attach="background" args={["#0a1526"]} />
      <fog attach="fog" args={["#0a1526", 34, 78]} />

      <ambientLight intensity={0.5} />
      <hemisphereLight args={["#9fc5ff", "#0a1526", 0.6]} />
      <directionalLight
        position={[20, 30, 12]}
        intensity={1.6}
        color="#ffdca8"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-camera-top={60}
        shadow-camera-bottom={-60}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-bias={-0.0004}
      />

      <Stars radius={120} depth={60} count={2500} factor={4} fade speed={0.6} />

      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[WORLD_RADIUS + 8, 64]} />
        <meshStandardMaterial color="#16351f" />
      </mesh>

      {/* Central plaza */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} receiveShadow>
        <circleGeometry args={[9, 48]} />
        <meshStandardMaterial color="#223142" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <ringGeometry args={[8.4, 9, 48]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.7}
        />
      </mesh>
      <Sparkles count={40} scale={12} size={3} speed={0.3} color="#8be9ff" position={[0, 2, 0]} />

      {/* Paths from plaza to each pavilion */}
      {SECTIONS.map((s) => {
        const [x, , z] = s.position;
        const len = Math.hypot(x, z);
        const angle = Math.atan2(x, z);
        return (
          <mesh
            key={`path-${s.id}`}
            rotation={[-Math.PI / 2, 0, -angle]}
            position={[x / 2, 0.03, z / 2]}
            receiveShadow
          >
            <planeGeometry args={[2.4, len]} />
            <meshStandardMaterial color="#2c3e52" />
          </mesh>
        );
      })}

      {/* Central welcome banner */}
      <Html center position={[0, 8, 0]} distanceFactor={20} pointerEvents="none">
        <div style={{ textAlign: "center", userSelect: "none", width: 520 }}>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontWeight: 900,
              fontSize: 40,
              color: "#fff",
              textShadow: "0 3px 20px rgba(0,0,0,.9)",
              letterSpacing: 0.5,
            }}
          >
            Dexter Louie Aniez
          </div>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "#22d3ee",
              textShadow: "0 2px 14px rgba(0,0,0,.9)",
            }}
          >
            Fullstack Developer · Freelancer · Mentor
          </div>
        </div>
      </Html>

      {/* Decorations */}
      {trees.map((p, i) => (
        <Tree key={`tree-${i}`} position={p} />
      ))}
      {SECTIONS.map((s) => {
        const [x, , z] = s.position;
        return (
          <Lamp
            key={`lamp-${s.id}`}
            position={[x * 0.62, 0, z * 0.62]}
          />
        );
      })}

      {/* Buildings */}
      {SECTIONS.map((s) => (
        <Building key={s.id} section={s} active={nearby === s.id} />
      ))}

      <Player onNearbyChange={onNearbyChange} />
    </>
  );
}
