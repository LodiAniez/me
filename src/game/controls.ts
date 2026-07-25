// Shared, mutable input state fed by keyboard + on-screen touch controls.
// Read every frame by the Player. Kept outside React so the render loop
// never re-renders on input.
export const inputState = {
  forward: false,
  back: false,
  left: false,
  right: false,
  // Analog vector from the on-screen joystick, each component in [-1, 1].
  touchX: 0,
  touchY: 0,
  // Yaw rotation requested by pointer/touch "look" drag, consumed each frame.
  camYawDelta: 0,
  // When a content panel is open we freeze the world.
  paused: false,
};

export function resetInput() {
  inputState.forward = false;
  inputState.back = false;
  inputState.left = false;
  inputState.right = false;
  inputState.touchX = 0;
  inputState.touchY = 0;
  inputState.camYawDelta = 0;
}
