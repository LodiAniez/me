import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import type { SectionDef } from "./sections";

// A pavilion representing one portfolio section. The emoji sign bobs, and the
// entrance pad glows brighter when the player is close enough to enter.
export default function Building({
  section,
  active,
}: {
  section: SectionDef;
  active: boolean;
}) {
  const sign = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const [x, , z] = section.position;
  // Face the pavilion (and its entrance) toward the central plaza.
  const facing = Math.atan2(-x, -z);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (sign.current) {
      sign.current.position.y = 4.4 + Math.sin(t * 1.5 + x) * 0.15;
      sign.current.rotation.y = Math.sin(t * 0.5 + z) * 0.25;
    }
    if (ring.current) {
      const mat = ring.current.material as THREE.MeshStandardMaterial;
      const pulse = 0.5 + Math.sin(t * 3) * 0.25;
      mat.emissiveIntensity = active ? 1.4 : pulse;
      const s = active ? 1.12 : 1;
      ring.current.scale.setScalar(s);
    }
  });

  return (
    <group position={[x, 0, z]} rotation={[0, facing, 0]}>
      {/* Base platform */}
      <mesh receiveShadow position={[0, 0.15, 0]}>
        <cylinderGeometry args={[4.6, 5, 0.3, 6]} />
        <meshStandardMaterial color="#1b2735" />
      </mesh>

      {/* Main structure */}
      <mesh castShadow position={[0, 2.1, -0.6]}>
        <boxGeometry args={[5.2, 3.6, 4]} />
        <meshStandardMaterial color="#26374a" />
      </mesh>
      {/* Accent stripe */}
      <mesh position={[0, 3.4, 1.42]}>
        <boxGeometry args={[5.2, 0.5, 0.2]} />
        <meshStandardMaterial
          color={section.color}
          emissive={section.color}
          emissiveIntensity={0.6}
        />
      </mesh>
      {/* Roof */}
      <mesh castShadow position={[0, 4.2, -0.6]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[4.2, 1.8, 4]} />
        <meshStandardMaterial color={section.color} />
      </mesh>
      {/* Doorway */}
      <mesh position={[0, 1.4, 1.41]}>
        <boxGeometry args={[1.8, 2.8, 0.1]} />
        <meshStandardMaterial
          color="#0b1220"
          emissive={section.color}
          emissiveIntensity={active ? 0.5 : 0.15}
        />
      </mesh>

      {/* Glowing entrance pad in front of the door */}
      <mesh
        ref={ring}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.32, 3.4]}
      >
        <ringGeometry args={[1.3, 1.9, 32]} />
        <meshStandardMaterial
          color={section.color}
          emissive={section.color}
          emissiveIntensity={0.8}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>

      {/* Floating emoji sign */}
      <group ref={sign} position={[0, 4.4, 1]}>
        <Html center distanceFactor={12} pointerEvents="none">
          <div
            style={{
              fontSize: 48,
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,.5))",
              userSelect: "none",
            }}
          >
            {section.emoji}
          </div>
        </Html>
      </group>

      {/* Name label */}
      <Html center position={[0, 6.1, -0.6]} distanceFactor={16} pointerEvents="none">
        <div
          style={{
            whiteSpace: "nowrap",
            textAlign: "center",
            userSelect: "none",
            transform: "translateY(-50%)",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: 26,
              color: "#fff",
              textShadow: "0 2px 12px rgba(0,0,0,.8)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {section.title}
          </div>
          <div
            style={{
              fontSize: 15,
              color: section.color,
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
              textShadow: "0 2px 8px rgba(0,0,0,.8)",
            }}
          >
            {section.tagline}
          </div>
        </div>
      </Html>
    </group>
  );
}
