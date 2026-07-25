import { useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface WalkState {
  moving: boolean;
  t: number; // animation phase, advanced by the Player while moving
}

// A small stylised low-poly avatar built from primitives — no external model
// to download. Limbs swing based on the shared walk phase driven by the Player.
export default function Character({
  walkRef,
}: {
  walkRef: RefObject<WalkState>;
}) {
  const legL = useRef<THREE.Group>(null);
  const legR = useRef<THREE.Group>(null);
  const armL = useRef<THREE.Group>(null);
  const armR = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);

  useFrame(() => {
    const w = walkRef.current;
    const swing = w.moving ? Math.sin(w.t) * 0.7 : 0;
    const idle = w.moving ? 0 : Math.sin(w.t * 0.4) * 0.05;
    if (legL.current) legL.current.rotation.x = swing;
    if (legR.current) legR.current.rotation.x = -swing;
    if (armL.current) armL.current.rotation.x = -swing * 0.8;
    if (armR.current) armR.current.rotation.x = swing * 0.8;
    if (body.current) {
      body.current.position.y = w.moving ? Math.abs(Math.sin(w.t)) * 0.08 : idle;
    }
  });

  const skin = "#f2c8a0";
  const shirt = "#22d3ee";
  const pants = "#1f2a37";

  return (
    <group ref={body}>
      {/* Head */}
      <mesh castShadow position={[0, 1.55, 0]}>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial color={skin} />
      </mesh>
      {/* Hair */}
      <mesh position={[0, 1.74, -0.02]}>
        <boxGeometry args={[0.46, 0.14, 0.46]} />
        <meshStandardMaterial color="#20303a" />
      </mesh>
      {/* Torso */}
      <mesh castShadow position={[0, 1.05, 0]}>
        <boxGeometry args={[0.6, 0.7, 0.34]} />
        <meshStandardMaterial color={shirt} />
      </mesh>
      {/* Arms (pivot at shoulder) */}
      <group ref={armL} position={[-0.4, 1.32, 0]}>
        <mesh castShadow position={[0, -0.32, 0]}>
          <boxGeometry args={[0.16, 0.64, 0.16]} />
          <meshStandardMaterial color={shirt} />
        </mesh>
        <mesh position={[0, -0.68, 0]}>
          <boxGeometry args={[0.16, 0.14, 0.16]} />
          <meshStandardMaterial color={skin} />
        </mesh>
      </group>
      <group ref={armR} position={[0.4, 1.32, 0]}>
        <mesh castShadow position={[0, -0.32, 0]}>
          <boxGeometry args={[0.16, 0.64, 0.16]} />
          <meshStandardMaterial color={shirt} />
        </mesh>
        <mesh position={[0, -0.68, 0]}>
          <boxGeometry args={[0.16, 0.14, 0.16]} />
          <meshStandardMaterial color={skin} />
        </mesh>
      </group>
      {/* Legs (pivot at hip) */}
      <group ref={legL} position={[-0.16, 0.7, 0]}>
        <mesh castShadow position={[0, -0.35, 0]}>
          <boxGeometry args={[0.2, 0.7, 0.2]} />
          <meshStandardMaterial color={pants} />
        </mesh>
        <mesh castShadow position={[0, -0.74, 0.04]}>
          <boxGeometry args={[0.22, 0.12, 0.3]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      </group>
      <group ref={legR} position={[0.16, 0.7, 0]}>
        <mesh castShadow position={[0, -0.35, 0]}>
          <boxGeometry args={[0.2, 0.7, 0.2]} />
          <meshStandardMaterial color={pants} />
        </mesh>
        <mesh castShadow position={[0, -0.74, 0.04]}>
          <boxGeometry args={[0.22, 0.12, 0.3]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      </group>
    </group>
  );
}
