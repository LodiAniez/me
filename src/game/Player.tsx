import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Character, { type WalkState } from "./Character";
import { inputState } from "./controls";
import {
  SECTIONS,
  ENTER_RADIUS,
  WORLD_RADIUS,
  tmpVec,
  type SectionId,
} from "./sections";

const SPEED = 8; // units per second
const CAM_DISTANCE = 8;
const CAM_HEIGHT = 5;
const LOOK_AT_HEIGHT = 1.6;

function lerpAngle(a: number, b: number, t: number) {
  let diff = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (diff < -Math.PI) diff += Math.PI * 2;
  return a + diff * t;
}

export default function Player({
  onNearbyChange,
}: {
  onNearbyChange: (id: SectionId | null) => void;
}) {
  const root = useRef<THREE.Group>(null);
  const walkRef = useRef<WalkState>({ moving: false, t: 0 });
  const camYaw = useRef(0); // horizontal look direction (radians)
  const charYaw = useRef(0); // direction the avatar faces
  const nearby = useRef<SectionId | null>(null);
  const { camera } = useThree();

  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const move = new THREE.Vector3();

  // Dev-only teleport hook so the scene can be exercised without a focused tab.
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    (window as unknown as { __teleport?: (x: number, z: number) => void }).__teleport =
      (x: number, z: number) => {
        if (root.current) root.current.position.set(x, 0, z);
      };
  }, []);

  useFrame((_, rawDelta) => {
    const g = root.current;
    if (!g) return;
    const delta = Math.min(rawDelta, 0.05); // clamp to avoid tab-switch jumps

    // Apply look drag accumulated from pointer/touch.
    camYaw.current += inputState.camYawDelta;
    inputState.camYawDelta = 0;

    // Camera-relative basis on the ground plane.
    forward.set(Math.sin(camYaw.current), 0, Math.cos(camYaw.current));
    right.set(forward.z, 0, -forward.x);

    // Combine keyboard + joystick into a single input vector.
    let ix = 0;
    let iz = 0;
    if (!inputState.paused) {
      if (inputState.forward) iz += 1;
      if (inputState.back) iz -= 1;
      if (inputState.right) ix += 1;
      if (inputState.left) ix -= 1;
      ix += inputState.touchX;
      iz += inputState.touchY;
    }
    move.set(0, 0, 0).addScaledVector(forward, iz).addScaledVector(right, ix);
    const len = move.length();
    const moving = len > 0.05;

    if (moving) {
      move.normalize();
      const step = SPEED * delta * Math.min(len, 1);
      g.position.addScaledVector(move, step);

      // Soft circular world boundary.
      const dist = Math.hypot(g.position.x, g.position.z);
      if (dist > WORLD_RADIUS) {
        g.position.x *= WORLD_RADIUS / dist;
        g.position.z *= WORLD_RADIUS / dist;
      }

      // Face travel direction; camera trails behind that heading.
      charYaw.current = Math.atan2(move.x, move.z);
      camYaw.current = lerpAngle(camYaw.current, charYaw.current, delta * 3);
      walkRef.current.t += delta * 10 * Math.min(len, 1);
    }
    walkRef.current.moving = moving;
    g.rotation.y = charYaw.current;

    // Third-person follow camera.
    const camForward = forward.set(
      Math.sin(camYaw.current),
      0,
      Math.cos(camYaw.current)
    );
    const desiredX = g.position.x - camForward.x * CAM_DISTANCE;
    const desiredZ = g.position.z - camForward.z * CAM_DISTANCE;
    camera.position.x += (desiredX - camera.position.x) * Math.min(1, delta * 6);
    camera.position.z += (desiredZ - camera.position.z) * Math.min(1, delta * 6);
    camera.position.y += (CAM_HEIGHT - camera.position.y) * Math.min(1, delta * 6);
    camera.lookAt(g.position.x, LOOK_AT_HEIGHT, g.position.z);

    // Nearest enterable section.
    let found: SectionId | null = null;
    let best = ENTER_RADIUS;
    for (const s of SECTIONS) {
      tmpVec.set(s.position[0], 0, s.position[2]);
      const d = tmpVec.distanceTo(g.position);
      if (d < best) {
        best = d;
        found = s.id;
      }
    }
    if (found !== nearby.current) {
      nearby.current = found;
      onNearbyChange(found);
    }
  });

  return (
    <group ref={root}>
      <Character walkRef={walkRef} />
    </group>
  );
}
